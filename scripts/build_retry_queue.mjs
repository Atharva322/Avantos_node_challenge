import fs from "node:fs/promises";
import path from "node:path";

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

async function readJsonl(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return raw
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const args = parseArgs(process.argv);
  const runDir = args["run-dir"];
  if (!runDir) throw new Error("Missing --run-dir (example: --run-dir scrape_runs/ops_missing)");

  const kind = (args["kind"] || "operation").toLowerCase();
  const outFile = path.resolve(args["out-file"] || `missing_targets/${kind}_retry.links.txt`);
  const failuresPath = path.resolve(path.join(runDir, "failures.jsonl"));

  if (!(await pathExists(failuresPath))) {
    throw new Error(`Missing failures file: ${failuresPath}`);
  }

  const rows = await readJsonl(failuresPath);
  const links = Array.from(
    new Set(
      rows
        .filter((r) => (r.kind || "").toLowerCase() === kind)
        .map((r) => String(r.url || "").trim())
        .filter(Boolean)
    )
  );

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, links.join("\n") + (links.length ? "\n" : ""), "utf8");

  console.log(
    JSON.stringify(
      {
        run_dir: path.resolve(runDir),
        failures_file: failuresPath,
        kind,
        retry_links: links.length,
        out_file: outFile,
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

