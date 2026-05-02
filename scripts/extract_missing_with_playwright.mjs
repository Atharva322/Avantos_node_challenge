import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const JSONL_PATH = path.join(
  "C:",
  "Users",
  "athar",
  "Downloads",
  "admin-ui-dev-sandbox-workload-avantos-ai-net-2026-05-02.json"
);
const SEED_DIR = path.join(ROOT, "docs_live_v4_missing_seed");
const MANIFEST_PATH = path.join(SEED_DIR, "manifest.json");
const MISSING_SUMMARY_PATH = path.join(ROOT, "missing_targets", "summary.json");
const OUT_DIR = path.join(ROOT, "normalized_offline");
const DOCS_GENERAL_MD = path.join(ROOT, "docs_live_v4", "general.md");

function nowIso() {
  return new Date().toISOString();
}

function toNullIfEmpty(value) {
  if (value === undefined || value === null) return null;
  const s = String(value).trim();
  if (!s || s.toLowerCase() === "null" || s.toLowerCase() === "n/a") return null;
  return value;
}

function extractSchemaRef(value) {
  const raw = toNullIfEmpty(value);
  if (!raw) return null;
  let s = String(raw).trim().replace(/^['"]|['"]$/g, "");
  if (!s) return null;
  const last = s.split("/").pop() ?? s;
  return last.replace(/\.json$/i, "").replace(/^['"]|['"]$/g, "") || null;
}

function normalizeMethod(value) {
  const raw = toNullIfEmpty(value);
  if (!raw) return null;
  return String(raw).trim().toUpperCase();
}

function normalizePath(value) {
  const raw = toNullIfEmpty(value);
  if (!raw) return null;
  return String(raw).trim().replace(/\/{2,}/g, "/");
}

function groupKeyFromPath(pathValue, endpointName) {
  const p = normalizePath(pathValue) || "";
  if (p.startsWith("/api/v1/admin/")) {
    const tail = p.replace("/api/v1/admin/", "");
    return (tail.split("/")[0] || endpointName || "unknown").trim();
  }
  const match = p.match(/^\/api\/v1\/\{tenant_id\}\/([^/]+)/);
  if (match) return match[1];
  return endpointName || "unknown";
}

function parseMdTableRow(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) return null;
  const cells = trimmed
    .slice(1, -1)
    .split("|")
    .map((c) => c.trim());
  return cells;
}

function isEndpointNameCell(value) {
  return /^(GET|POST|PUT|PATCH|DELETE)\s+\/api\/v1\//.test(value || "");
}

function parseEndpointFromNameCell(value) {
  const m = (value || "").match(/^(GET|POST|PUT|PATCH|DELETE)\s+(.+)$/);
  if (!m) return null;
  return { method: m[1], path: m[2] };
}

function guessParamLocation(paramName) {
  const n = (paramName || "").toLowerCase();
  if (n.includes("requestbody")) return "body";
  if (n === "tenant_id" || n.endsWith("_id") || n.includes("{") || n.includes("}")) return "path";
  return "query";
}

async function parseGeneralMdEnrichment() {
  let raw = "";
  try {
    raw = await fs.readFile(DOCS_GENERAL_MD, "utf8");
  } catch {
    return { byMethodPath: new Map(), byOpName: new Map() };
  }

  const lines = raw.split(/\r?\n/);
  const byMethodPath = new Map();
  const byOpName = new Map();

  let currentTableEndpoint = null;
  let inParametersTable = false;

  // Pass 1: parameters table parsing
  for (const line of lines) {
    if (line.trim() === "## Parameters") {
      inParametersTable = true;
      continue;
    }
    if (inParametersTable && /^##\s+/.test(line.trim()) && line.trim() !== "## Parameters") {
      inParametersTable = false;
    }
    if (!inParametersTable) continue;

    const row = parseMdTableRow(line);
    if (!row || row.length < 5) continue;
    if (row[0] === "Name" || row[0] === "---") continue;
    if (row[0].startsWith("---")) continue;

    const name = row[0];
    const type = row[1];
    const required = row[2];
    const description = row[3];
    const example = row[4];

    if (isEndpointNameCell(name)) {
      const parsed = parseEndpointFromNameCell(name);
      if (!parsed) continue;
      const key = `${parsed.method} ${parsed.path}`;
      currentTableEndpoint = key;
      if (!byMethodPath.has(key)) {
        byMethodPath.set(key, {
          method: parsed.method,
          path: parsed.path,
          endpoint_table_description: description || "",
          endpoint_table_example: example || "",
          path_params: [],
          query_params: [],
          request_body_fields: [],
          table_rows_raw: [],
          response_examples: [],
        });
      }
      continue;
    }

    if (!currentTableEndpoint) continue;
    const item = byMethodPath.get(currentTableEndpoint);
    const rowObj = { name, type, required, description, example };
    item.table_rows_raw.push(rowObj);

    const loc = guessParamLocation(name);
    const normalizedParam = {
      name,
      type,
      required: String(required || "").toLowerCase() === "yes",
      description,
      example,
    };
    if (loc === "path") item.path_params.push(normalizedParam);
    else if (loc === "query") item.query_params.push(normalizedParam);
    else item.request_body_fields.push(normalizedParam);
  }

  // Pass 2: response examples by endpoint heading + json block
  let currentSectionKey = null;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    const h = line.match(/^###\s+(GET|POST|PUT|PATCH|DELETE)\s+(.+)\s+-\s+(.+)$/);
    if (h) {
      const method = h[1];
      const p = h[2].trim();
      const opName = h[3].trim();
      currentSectionKey = `${method} ${p}`;

      if (!byMethodPath.has(currentSectionKey)) {
        byMethodPath.set(currentSectionKey, {
          method,
          path: p,
          endpoint_table_description: "",
          endpoint_table_example: "",
          path_params: [],
          query_params: [],
          request_body_fields: [],
          table_rows_raw: [],
          response_examples: [],
        });
      }
      byOpName.set(opName, currentSectionKey);
      continue;
    }

    if (!currentSectionKey) continue;
    if (line.startsWith("```json")) {
      const buf = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i += 1;
      }
      const block = buf.join("\n").trim();
      if (block) {
        const item = byMethodPath.get(currentSectionKey);
        item.response_examples.push(block);
      }
    }
  }

  return { byMethodPath, byOpName };
}

function enrichOperationsWithMd(operations, mdParsed) {
  let enrichedCount = 0;
  const { byMethodPath, byOpName } = mdParsed;

  for (const op of operations) {
    const key = `${op.method} ${op.path}`;
    let md = byMethodPath.get(key);
    if (!md && byOpName.has(op.name)) {
      md = byMethodPath.get(byOpName.get(op.name));
    }
    if (!md) continue;

    op.path_params = md.path_params || op.path_params;
    op.query_params = md.query_params || op.query_params;
    op.request_body_fields = md.request_body_fields || [];
    op.response_examples_md = md.response_examples || [];
    op.docs_enriched = true;
    enrichedCount += 1;
  }

  return enrichedCount;
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function readJsonl(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  const lines = raw.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  return lines.map((line) => JSON.parse(line));
}

function buildNormalized(records) {
  /** @type {Map<string, any>} */
  const operationMap = new Map();
  /** @type {Map<string, any>} */
  const schemaMap = new Map();

  for (const rec of records) {
    const endpointName = String(rec.endpoint_name || "").trim();
    const endpointMethod = normalizeMethod(rec.endpoint_method || rec.http_method);
    const endpointPath = normalizePath(rec.endpoint_path);
    const isOperation = Boolean(endpointName && endpointMethod && endpointPath);

    if (isOperation) {
      const key = `${endpointMethod} ${endpointPath}`;
      const statusRaw = String(rec.response_code || "").trim();
      const statusCode = /^\d+$/.test(statusRaw) ? Number(statusRaw) : null;
      const responseEntry = statusCode
        ? {
            status_code: statusCode,
            description: String(rec.response_description || "").trim(),
            content_type: String(rec.response_body_content_type || "application/json").trim(),
            schema_ref: extractSchemaRef(rec.response_body_schema_url),
            example: toNullIfEmpty(rec.response_example_schema),
          }
        : null;

      if (!operationMap.has(key)) {
        operationMap.set(key, {
          id: endpointName,
          name: endpointName,
          method: endpointMethod,
          path: endpointPath,
          group_key: groupKeyFromPath(endpointPath, endpointName),
          tags: [],
          summary: "",
          description: "",
          path_params: [],
          query_params: [],
          request_body: {
            required: false,
            content_type: "application/json",
            schema_ref: extractSchemaRef(rec.request_body_schema_url),
            example: toNullIfEmpty(rec.request_body_example),
          },
          responses: [],
          curl_example: String(rec.request_curl_example || "").trim(),
          docs_url: String(rec.item_page_link || "").trim(),
        });
      }

      const op = operationMap.get(key);
      if (responseEntry) {
        const already = op.responses.some((r) => r.status_code === responseEntry.status_code);
        if (!already) op.responses.push(responseEntry);
      }
      if (!op.request_body.schema_ref) {
        op.request_body.schema_ref = extractSchemaRef(rec.request_body_schema_url);
      }
      if (!op.request_body.example && toNullIfEmpty(rec.request_body_example)) {
        op.request_body.example = rec.request_body_example;
      }
      if (!op.curl_example && rec.request_curl_example) {
        op.curl_example = String(rec.request_curl_example).trim();
      }
      if (!op.docs_url && rec.item_page_link) {
        op.docs_url = String(rec.item_page_link).trim();
      }
      continue;
    }

    const schemaName = String(rec.data || rec.title || "").trim();
    if (!schemaName) continue;
    if (!schemaMap.has(schemaName)) {
      schemaMap.set(schemaName, {
        name: schemaName,
        kind: "unknown",
        description: "",
        source_url: String(rec.item_page_link || "").trim(),
        schema_url: toNullIfEmpty(rec.response_body_schema_url),
        fields: [],
        required: [],
        example: null,
        raw_type_hint: null,
      });
    }
  }

  const operations = Array.from(operationMap.values()).sort((a, b) =>
    `${a.group_key}:${a.name}`.localeCompare(`${b.group_key}:${b.name}`)
  );
  const schemas = Array.from(schemaMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  return { operations, schemas };
}

async function writeNormalizedOutputs(operations, schemas) {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const operationsPayload = {
    source: JSONL_PATH,
    generated_at: nowIso(),
    api_name: "Avantos Core API",
    operation_count: operations.length,
    operations,
  };
  await fs.writeFile(
    path.join(OUT_DIR, "operations.json"),
    JSON.stringify(operationsPayload, null, 2),
    "utf8"
  );

  const schemaLines = schemas.map((s) => JSON.stringify(s)).join("\n") + "\n";
  await fs.writeFile(path.join(OUT_DIR, "schemas.jsonl"), schemaLines, "utf8");
}

async function updateSeedFiles(recordsByTitle) {
  const manifest = await readJson(MANIFEST_PATH);
  const items = [
    ...(manifest.operations || []).map((x) => ({ ...x, kind: "operation" })),
    ...(manifest.schemas || []).map((x) => ({ ...x, kind: "schema" })),
  ];

  let updated = 0;
  let missing = 0;

  for (const item of items) {
    const mdPath = path.join(SEED_DIR, item.file);
    const raw = await fs.readFile(mdPath, "utf8");
    const payload = recordsByTitle.get(item.title) || null;
    if (!payload) {
      missing += 1;
      continue;
    }
    const extracted = {
      title: item.title,
      kind: item.kind,
      link: item.link,
      extracted_at: nowIso(),
      source_record: payload,
    };
    const block = `## Extracted Data\n\n\`\`\`json\n${JSON.stringify(extracted, null, 2)}\n\`\`\``;
    const next = raw.replace(/## Extracted Data[\s\S]*?```json[\s\S]*?```/m, block);
    await fs.writeFile(mdPath, next, "utf8");
    updated += 1;
  }

  return { updated, missing };
}

async function main() {
  const records = await readJsonl(JSONL_PATH);
  const { operations, schemas } = buildNormalized(records);
  const mdParsed = await parseGeneralMdEnrichment();
  const enrichedOperations = enrichOperationsWithMd(operations, mdParsed);
  await writeNormalizedOutputs(operations, schemas);

  const recordsByTitle = new Map();
  for (const r of records) {
    const k = String(r.endpoint_name || r.data || r.title || "").trim();
    if (k && !recordsByTitle.has(k)) recordsByTitle.set(k, r);
  }

  const seedStats = await updateSeedFiles(recordsByTitle);

  let missingSummary = null;
  try {
    missingSummary = await readJson(MISSING_SUMMARY_PATH);
  } catch {
    missingSummary = null;
  }

  const report = {
    generated_at: nowIso(),
    input_records: records.length,
    normalized_operations: operations.length,
    markdown_enriched_operations: enrichedOperations,
    normalized_schemas: schemas.length,
    seed_files_updated: seedStats.updated,
    seed_files_without_source_record: seedStats.missing,
    missing_targets_summary: missingSummary,
    output_dir: OUT_DIR,
  };

  await fs.writeFile(
    path.join(OUT_DIR, "extract-report.json"),
    JSON.stringify(report, null, 2),
    "utf8"
  );

  console.log(JSON.stringify(report, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
