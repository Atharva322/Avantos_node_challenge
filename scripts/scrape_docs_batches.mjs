import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const ROOT = process.cwd();
const DEFAULT_STORAGE_STATE = path.join(ROOT, ".playwright", "avantos-storage-state.json");
const DEFAULT_OUT_DIR = path.join(ROOT, "scrape_runs");

function nowIso() {
  return new Date().toISOString();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function loadQueue(queueFile) {
  const raw = await fs.readFile(queueFile, "utf8");
  return raw
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((url) => ({ url }));
}

function slugFromUrl(url) {
  try {
    const hash = url.split("#/")[1] ?? "";
    return hash.replace(/[^\w\-/.]+/g, "-").replace(/[/.]/g, "__");
  } catch {
    return "unknown";
  }
}

function classifyUrl(url) {
  if (url.includes("#/operations/")) return "operation";
  if (url.includes("#/schemas/")) return "schema";
  return "unknown";
}

async function readJson(filePath, fallback) {
  if (!(await pathExists(filePath))) return fallback;
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, JSON.stringify(value, null, 2), "utf8");
}

async function appendJsonl(filePath, obj) {
  await fs.appendFile(filePath, `${JSON.stringify(obj)}\n`, "utf8");
}

async function ensureLogin(context, loginUrl) {
  const page = await context.newPage();
  await page.goto(loginUrl, { waitUntil: "domcontentloaded", timeout: 120000 });
  process.stdin.resume();
  await new Promise((resolve) => {
    process.stdout.write(
      `Login check at ${loginUrl}\nIf docs are visible, press Enter to continue...\n`
    );
    process.stdin.once("data", () => resolve());
  });
  await page.close();
}

async function scrapeOne(page, url) {
  const startedAt = Date.now();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
  await page.waitForTimeout(2200);

  const payload = await page.evaluate(() => {
    const pageTitle = document.title || null;
    const text = (document.body?.innerText || "").replace(/\r/g, "").trim();

    const jsonBlocks = [];
    const codeEls = Array.from(document.querySelectorAll("pre code, pre"));
    for (const el of codeEls) {
      const t = (el.textContent || "").trim();
      if (!t) continue;
      if (t.startsWith("{") || t.startsWith("[") || t.includes('"$schema"')) {
        jsonBlocks.push(t.slice(0, 30000));
      }
    }

    return {
      page_title: pageTitle,
      body_text: text.slice(0, 120000),
      json_blocks: jsonBlocks.slice(0, 20),
    };
  });

  const tookMs = Date.now() - startedAt;
  return {
    scraped_at: nowIso(),
    took_ms: tookMs,
    ...payload,
  };
}

async function main() {
  const args = parseArgs(process.argv);

  const queueFile = args["queue-file"];
  if (!queueFile) {
    throw new Error(
      "Missing required --queue-file. Example: --queue-file missing_targets/missing_operations.links.txt"
    );
  }

  const batchSize = Number(args["batch-size"] ?? 30);
  const maxBatches = Number(args["max-batches"] ?? 1);
  const pageDelayMs = Number(args["page-delay-ms"] ?? 2000);
  const batchDelayMs = Number(args["batch-delay-ms"] ?? 20000);
  const retries = Number(args["retries"] ?? 2);
  const outDir = path.resolve(args["out-dir"] ?? DEFAULT_OUT_DIR);
  const runName =
    args["run-name"] ??
    `${path.basename(queueFile).replace(/\W+/g, "_")}_${new Date().toISOString().replace(/[:.]/g, "-")}`;
  const runDir = path.join(outDir, runName);
  const stateFile = path.join(runDir, "progress.json");
  const outJsonl = path.join(runDir, "records.jsonl");
  const failuresJsonl = path.join(runDir, "failures.jsonl");
  const storageStatePath = path.resolve(args["storage-state"] ?? DEFAULT_STORAGE_STATE);
  const loginUrl = args["login-url"] ?? "https://admin-ui.dev-sandbox.workload.avantos-ai.net/docs";

  await ensureDir(runDir);
  const queue = await loadQueue(path.resolve(queueFile));
  const progress = await readJson(stateFile, {
    created_at: nowIso(),
    queue_file: path.resolve(queueFile),
    total: queue.length,
    completed: [],
    failed: [],
    attempts: {},
    last_index: 0,
    batches_done: 0,
  });

  const completedSet = new Set(progress.completed);
  const failedSet = new Set(progress.failed);

  const storageExists = await pathExists(storageStatePath);
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(storageExists ? { storageState: storageStatePath } : {});

  if (!storageExists) {
    await ensureLogin(context, loginUrl);
    await ensureDir(path.dirname(storageStatePath));
    await context.storageState({ path: storageStatePath });
    console.log(`Saved storage state: ${storageStatePath}`);
  }

  const page = await context.newPage();

  let processedInThisRun = 0;

  for (let batch = 0; batch < maxBatches; batch += 1) {
    if (progress.last_index >= queue.length) break;
    let batchCount = 0;

    while (progress.last_index < queue.length && batchCount < batchSize) {
      const idx = progress.last_index;
      const item = queue[idx];
      progress.last_index += 1;
      const url = item.url;

      if (completedSet.has(url) || failedSet.has(url)) continue;

      const kind = classifyUrl(url);
      const id = slugFromUrl(url);
      progress.attempts[url] = progress.attempts[url] ?? 0;

      let ok = false;
      let lastErr = null;
      for (let attempt = 1; attempt <= retries + 1; attempt += 1) {
        progress.attempts[url] += 1;
        try {
          const scraped = await scrapeOne(page, url);
          const record = {
            id,
            kind,
            url,
            attempt,
            ...scraped,
          };
          await appendJsonl(outJsonl, record);
          completedSet.add(url);
          progress.completed.push(url);
          ok = true;
          console.log(`[OK] ${kind} ${url}`);
          break;
        } catch (err) {
          lastErr = err instanceof Error ? err.message : String(err);
          console.log(`[RETRY ${attempt}] ${url} :: ${lastErr}`);
          await sleep(1200 * attempt);
        }
      }

      if (!ok) {
        failedSet.add(url);
        progress.failed.push(url);
        await appendJsonl(failuresJsonl, {
          url,
          kind,
          failed_at: nowIso(),
          error: lastErr,
        });
        console.log(`[FAIL] ${kind} ${url}`);
      }

      batchCount += 1;
      processedInThisRun += 1;
      await writeJson(stateFile, progress);
      await sleep(pageDelayMs);
    }

    progress.batches_done += 1;
    await writeJson(stateFile, progress);
    if (batch < maxBatches - 1) {
      console.log(`Batch ${batch + 1}/${maxBatches} complete. Sleeping ${batchDelayMs}ms...`);
      await sleep(batchDelayMs);
    }
  }

  await context.close();
  await browser.close();

  const summary = {
    run_dir: runDir,
    processed_in_this_run: processedInThisRun,
    total_queue: queue.length,
    completed_total: progress.completed.length,
    failed_total: progress.failed.length,
    remaining_total: queue.length - progress.completed.length - progress.failed.length,
    last_index: progress.last_index,
    batches_done: progress.batches_done,
    generated_at: nowIso(),
  };
  await writeJson(path.join(runDir, "summary.json"), summary);
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

