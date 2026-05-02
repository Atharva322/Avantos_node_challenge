import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DEFAULT_OUT_DIR = path.join(ROOT, "normalized_from_scrape");

function nowIso() {
  return new Date().toISOString();
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

async function readJsonl(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return raw
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function parseMethodPath(bodyText) {
  const m = bodyText.match(/(?:^|\n)(GET|POST|PUT|PATCH|DELETE)\s+(\/api\/v1\/[^\n]+)/);
  if (!m) return { method: null, path: null };
  return { method: m[1], path: m[2].trim() };
}

function parseOperationIdFromUrl(url) {
  const m = url.match(/#\/operations\/([^/?#]+)/);
  return m ? m[1] : null;
}

function parseSchemaNameFromUrl(url) {
  const m = url.match(/#\/schemas\/([^/?#]+)/);
  return m ? m[1] : null;
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function main() {
  const args = parseArgs(process.argv);
  const runDir = args["run-dir"];
  if (!runDir) throw new Error("Missing --run-dir (path to scrape run folder)");

  const runPath = path.resolve(runDir);
  const recordsPath = path.join(runPath, "records.jsonl");
  const outDir = path.resolve(args["out-dir"] ?? DEFAULT_OUT_DIR);
  await ensureDir(outDir);

  const records = await readJsonl(recordsPath);
  const opMap = new Map();
  const schemaMap = new Map();

  for (const r of records) {
    const url = r.url || "";
    const bodyText = String(r.body_text || "");
    if (r.kind === "operation") {
      const opId = parseOperationIdFromUrl(url);
      const mp = parseMethodPath(bodyText);
      if (!opId || !mp.method || !mp.path) continue;
      const key = `${mp.method} ${mp.path}`;
      if (!opMap.has(key)) {
        opMap.set(key, {
          id: opId,
          name: opId,
          method: mp.method,
          path: mp.path,
          docs_url: url,
          response_examples_md: r.json_blocks || [],
          body_text_excerpt: bodyText.slice(0, 40000),
          extracted_at: r.scraped_at || null,
        });
      }
      continue;
    }

    if (r.kind === "schema") {
      const schemaName = parseSchemaNameFromUrl(url);
      if (!schemaName) continue;
      if (!schemaMap.has(schemaName)) {
        schemaMap.set(schemaName, {
          name: schemaName,
          source_url: url,
          kind: "unknown",
          description: "",
          fields: [],
          required: [],
          example: null,
          body_text_excerpt: bodyText.slice(0, 40000),
          extracted_at: r.scraped_at || null,
        });
      }
    }
  }

  const operations = Array.from(opMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  const schemas = Array.from(schemaMap.values()).sort((a, b) => a.name.localeCompare(b.name));

  await fs.writeFile(
    path.join(outDir, "operations.json"),
    JSON.stringify(
      {
        source_run: runPath,
        generated_at: nowIso(),
        operation_count: operations.length,
        operations,
      },
      null,
      2
    ),
    "utf8"
  );

  await fs.writeFile(
    path.join(outDir, "schemas.jsonl"),
    schemas.map((s) => JSON.stringify(s)).join("\n") + "\n",
    "utf8"
  );

  await fs.writeFile(
    path.join(outDir, "summary.json"),
    JSON.stringify(
      {
        source_run: runPath,
        generated_at: nowIso(),
        parsed_records: records.length,
        operations: operations.length,
        schemas: schemas.length,
      },
      null,
      2
    ),
    "utf8"
  );

  console.log(`Wrote ${path.join(outDir, "operations.json")}`);
  console.log(`Wrote ${path.join(outDir, "schemas.jsonl")}`);
  console.log(`Wrote ${path.join(outDir, "summary.json")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

