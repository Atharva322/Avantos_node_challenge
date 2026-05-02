import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SCRAPE_RUNS_DIR = path.join(ROOT, "scrape_runs");
const MISSING_TARGETS_DIR = path.join(ROOT, "missing_targets");
const OUT_DIR = path.join(ROOT, "organized_data");

function nowIso() {
  return new Date().toISOString();
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function readJson(p, fallback = null) {
  if (!(await exists(p))) return fallback;
  return JSON.parse(await fs.readFile(p, "utf8"));
}

async function readLines(p) {
  if (!(await exists(p))) return [];
  return (await fs.readFile(p, "utf8"))
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean);
}

async function readJsonl(p) {
  const lines = await readLines(p);
  const out = [];
  for (const line of lines) {
    try {
      out.push(JSON.parse(line));
    } catch {
      // ignore malformed lines
    }
  }
  return out;
}

function opNameFromUrl(url) {
  const m = String(url || "").match(/#\/operations\/([^/?#]+)/);
  return m ? m[1] : null;
}

function schemaNameFromUrl(url) {
  const m = String(url || "").match(/#\/schemas\/([^/?#]+)/);
  return m ? m[1] : null;
}

function methodPathFromBodyText(bodyText) {
  const m = String(bodyText || "").match(/(?:^|\n)(GET|POST|PUT|PATCH|DELETE)\s+(\/api\/v1\/[^\n]+)/);
  if (!m) return { method: null, path: null };
  return { method: m[1], path: m[2].trim().replace(/\/{2,}/g, "/") };
}

function groupKeyFromPath(pathValue, fallback) {
  const p = String(pathValue || "");
  if (p.startsWith("/api/v1/admin/")) {
    const tail = p.replace("/api/v1/admin/", "");
    return tail.split("/")[0] || fallback;
  }
  const m = p.match(/^\/api\/v1\/\{tenant_id\}\/([^/]+)/);
  if (m) return m[1];
  return fallback || "unknown";
}

function sanitizeFileName(name) {
  return String(name || "unknown").replace(/[^\w.-]+/g, "-");
}

async function main() {
  const runDirs = (await fs.readdir(SCRAPE_RUNS_DIR, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const allRecords = [];
  const runSummaries = [];

  for (const run of runDirs) {
    const runPath = path.join(SCRAPE_RUNS_DIR, run);
    const recordsPath = path.join(runPath, "records.jsonl");
    const summaryPath = path.join(runPath, "summary.json");
    if (await exists(recordsPath)) {
      const recs = await readJsonl(recordsPath);
      for (const r of recs) allRecords.push({ ...r, _run: run });
    }
    const summary = await readJson(summaryPath, null);
    if (summary) runSummaries.push({ run, ...summary });
  }

  // Deduplicate by URL, keep latest scraped_at
  const byUrl = new Map();
  for (const r of allRecords) {
    const url = String(r.url || "").trim();
    if (!url) continue;
    const prev = byUrl.get(url);
    if (!prev) {
      byUrl.set(url, r);
      continue;
    }
    const prevAt = Date.parse(prev.scraped_at || 0);
    const nextAt = Date.parse(r.scraped_at || 0);
    if (nextAt >= prevAt) byUrl.set(url, r);
  }

  const deduped = Array.from(byUrl.values());
  const operations = [];
  const schemas = [];

  for (const rec of deduped) {
    if (rec.kind === "operation" || String(rec.url || "").includes("#/operations/")) {
      const name = opNameFromUrl(rec.url);
      const mp = methodPathFromBodyText(rec.body_text || "");
      operations.push({
        id: name,
        name,
        method: mp.method,
        path: mp.path,
        group_key: groupKeyFromPath(mp.path, name),
        docs_url: rec.url,
        page_title: rec.page_title || null,
        json_blocks: rec.json_blocks || [],
        body_text: rec.body_text || "",
        scraped_at: rec.scraped_at || null,
        source_run: rec._run,
      });
    } else if (rec.kind === "schema" || String(rec.url || "").includes("#/schemas/")) {
      const name = schemaNameFromUrl(rec.url);
      schemas.push({
        name,
        docs_url: rec.url,
        page_title: rec.page_title || null,
        json_blocks: rec.json_blocks || [],
        body_text: rec.body_text || "",
        scraped_at: rec.scraped_at || null,
        source_run: rec._run,
      });
    }
  }

  // Deduplicate by logical key
  const opByName = new Map();
  for (const op of operations) {
    if (!op.name) continue;
    if (!opByName.has(op.name)) opByName.set(op.name, op);
  }
  const schemaByName = new Map();
  for (const s of schemas) {
    if (!s.name) continue;
    if (!schemaByName.has(s.name)) schemaByName.set(s.name, s);
  }

  const finalOps = Array.from(opByName.values()).sort((a, b) => a.name.localeCompare(b.name));
  const finalSchemas = Array.from(schemaByName.values()).sort((a, b) => a.name.localeCompare(b.name));

  const expectedOpLinks = await readLines(path.join(MISSING_TARGETS_DIR, "missing_operations.links.txt"));
  const expectedSchemaLinks = await readLines(path.join(MISSING_TARGETS_DIR, "missing_schemas.links.txt"));
  const expectedOps = expectedOpLinks.map((u) => opNameFromUrl(u)).filter(Boolean);
  const expectedSchemas = expectedSchemaLinks.map((u) => schemaNameFromUrl(u)).filter(Boolean);

  const foundOps = new Set(finalOps.map((o) => o.name));
  const foundSchemas = new Set(finalSchemas.map((s) => s.name));
  const missingOps = expectedOps.filter((x) => !foundOps.has(x));
  const missingSchemas = expectedSchemas.filter((x) => !foundSchemas.has(x));

  await ensureDir(OUT_DIR);
  await ensureDir(path.join(OUT_DIR, "operations"));
  await ensureDir(path.join(OUT_DIR, "schemas"));
  await ensureDir(path.join(OUT_DIR, "normalized"));
  await ensureDir(path.join(OUT_DIR, "indexes"));

  // Per-item files
  for (const op of finalOps) {
    const file = path.join(OUT_DIR, "operations", `${sanitizeFileName(op.name)}.json`);
    await fs.writeFile(file, JSON.stringify(op, null, 2), "utf8");
  }
  for (const s of finalSchemas) {
    const file = path.join(OUT_DIR, "schemas", `${sanitizeFileName(s.name)}.json`);
    await fs.writeFile(file, JSON.stringify(s, null, 2), "utf8");
  }

  // Normalized bundle
  await fs.writeFile(
    path.join(OUT_DIR, "normalized", "operations.json"),
    JSON.stringify(
      {
        generated_at: nowIso(),
        operation_count: finalOps.length,
        operations: finalOps,
      },
      null,
      2
    ),
    "utf8"
  );
  await fs.writeFile(
    path.join(OUT_DIR, "normalized", "schemas.jsonl"),
    finalSchemas.map((s) => JSON.stringify(s)).join("\n") + "\n",
    "utf8"
  );

  // Coverage
  const coverage = {
    generated_at: nowIso(),
    runs: runSummaries,
    deduped_records: deduped.length,
    operations_found: finalOps.length,
    schemas_found: finalSchemas.length,
    expected_missing_operations_list_size: expectedOps.length,
    expected_missing_schemas_list_size: expectedSchemas.length,
    unresolved_operations: missingOps.length,
    unresolved_schemas: missingSchemas.length,
    unresolved_operation_names: missingOps,
    unresolved_schema_names: missingSchemas,
  };
  await fs.writeFile(path.join(OUT_DIR, "coverage.json"), JSON.stringify(coverage, null, 2), "utf8");

  // Indexes
  const opsIndex = [
    "# Operations Index",
    "",
    ...finalOps.map((o) => `- [${o.name}](../operations/${sanitizeFileName(o.name)}.json)`),
    "",
  ].join("\n");
  const schemasIndex = [
    "# Schemas Index",
    "",
    ...finalSchemas.map((s) => `- [${s.name}](../schemas/${sanitizeFileName(s.name)}.json)`),
    "",
  ].join("\n");
  await fs.writeFile(path.join(OUT_DIR, "indexes", "operations.index.md"), opsIndex, "utf8");
  await fs.writeFile(path.join(OUT_DIR, "indexes", "schemas.index.md"), schemasIndex, "utf8");

  // Manifest
  await fs.writeFile(
    path.join(OUT_DIR, "manifest.json"),
    JSON.stringify(
      {
        generated_at: nowIso(),
        source_runs: runDirs,
        output_root: OUT_DIR,
        files: {
          coverage: "coverage.json",
          operations_index: "indexes/operations.index.md",
          schemas_index: "indexes/schemas.index.md",
          normalized_operations: "normalized/operations.json",
          normalized_schemas: "normalized/schemas.jsonl",
        },
      },
      null,
      2
    ),
    "utf8"
  );

  console.log(
    JSON.stringify(
      {
        generated_at: nowIso(),
        source_runs: runDirs.length,
        deduped_records: deduped.length,
        operations_found: finalOps.length,
        schemas_found: finalSchemas.length,
        unresolved_operations: missingOps.length,
        unresolved_schemas: missingSchemas.length,
        out_dir: OUT_DIR,
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

