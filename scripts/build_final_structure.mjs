import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OPS_PATH = path.join(ROOT, "organized_data", "combined", "operations.json");
const SCHEMAS_PATH = path.join(ROOT, "organized_data", "combined", "schemas.jsonl");
const OUT_DIR = path.join(ROOT, "organized_data", "final_structured");

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

function safeName(v) {
  return String(v || "unknown").replace(/[^\w.-]+/g, "-");
}

function extractPathParamsFromPath(pathValue) {
  const matches = String(pathValue || "").match(/\{([^}]+)\}/g) || [];
  return matches.map((m) => m.replace(/[{}]/g, ""));
}

function prettifyFieldName(name) {
  return String(name || "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function typeFromField(f) {
  return f?.type || f?.items_type || "string";
}

function formatEndpointMd(op) {
  const method = op.method || "UNKNOWN";
  const endpointPath = op.path || "";
  const name = op.name || "unknown-operation";
  const extractedPathParams = extractPathParamsFromPath(endpointPath);
  const explicitPathParams = Array.isArray(op.path_params) ? op.path_params : [];
  const pathParamNames = new Set([
    ...extractedPathParams,
    ...explicitPathParams.map((p) => p.name || p.key).filter(Boolean),
  ]);

  const requestBodyFields = Array.isArray(op.request_body_fields) ? op.request_body_fields : [];
  const queryParams = Array.isArray(op.query_params) ? op.query_params : [];
  const responses = Array.isArray(op.responses) ? op.responses : [];

  const lines = [];
  lines.push(`# ${name}`);
  lines.push("");
  lines.push("## Endpoint");
  lines.push(`- Method: \`${method.toLowerCase()}\``);
  lines.push(`- Path: \`${endpointPath}\``);
  lines.push("");
  lines.push("## Request");
  lines.push("### Path Parameters");
  if (pathParamNames.size === 0) {
    lines.push("- None");
  } else {
    for (const paramName of pathParamNames) {
      const found =
        explicitPathParams.find((p) => (p.name || p.key) === paramName) || null;
      lines.push(`- ${paramName}`);
      lines.push(`  - type: ${typeFromField(found)}`);
      lines.push(`  - required: ${found?.required === false ? "no" : "yes"}`);
      if (found?.description) lines.push(`  - description: ${found.description}`);
    }
  }
  lines.push("");
  lines.push("### Query Parameters");
  if (queryParams.length === 0) {
    lines.push("- None");
  } else {
    for (const q of queryParams) {
      const qName = q.name || q.key || "unknown";
      lines.push(`- ${qName}`);
      lines.push(`  - type: ${typeFromField(q)}`);
      lines.push(`  - required: ${q.required ? "yes" : "no"}`);
      if (q.description) lines.push(`  - description: ${q.description}`);
    }
  }
  lines.push("");
  lines.push("### Body");
  if (requestBodyFields.length === 0) {
    lines.push("- type: object");
    lines.push("- fields: not explicitly extracted");
  } else {
    lines.push("- content-type: application/json");
    lines.push("- fields:");
    for (const f of requestBodyFields) {
      const n = f.name || f.key || "unknown";
      lines.push(`  - ${n}`);
      lines.push(`    - type: ${typeFromField(f)}`);
      lines.push(`    - required: ${f.required ? "yes" : "no"}`);
      if (f.description) lines.push(`    - description: ${f.description}`);
    }
  }
  lines.push("");
  lines.push("## Responses");
  if (responses.length === 0) {
    lines.push("- 200");
    lines.push("  - description: OK");
  } else {
    for (const r of responses) {
      const code = r.status_code ?? "default";
      lines.push(`- ${code}`);
      if (r.description) lines.push(`  - description: ${r.description}`);
      if (r.content_type) lines.push(`  - content-type: ${r.content_type}`);
      if (r.schema_ref) lines.push(`  - schema: ${r.schema_ref}`);
    }
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

function parseSchemaFieldsFromBodyText(bodyText) {
  const lines = String(bodyText || "")
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean);
  const fields = [];
  let current = null;

  for (const l of lines) {
    if (/^(type|required|example|responses|request|body)$/i.test(l)) continue;
    if (/^(string|number|integer|boolean|object|array|string<date-time>|string<uri>|string or null)$/i.test(l)) {
      if (current) current.type = l;
      continue;
    }
    // A likely field key line
    if (/^[a-zA-Z][\w.\[\]-]{1,80}$/.test(l) && l.toLowerCase() !== "schema") {
      current = { name: l, type: "string", required: "no", description: "" };
      fields.push(current);
      continue;
    }
    if (current && !current.description && l.length <= 240 && !l.includes("http")) {
      current.description = l;
    }
    if (/\brequired\b/i.test(l) && current) current.required = "yes";
  }
  return fields.slice(0, 400);
}

function formatSchemaMd(schema) {
  const name = schema.name || "unknown-schema";
  const explicitFields = Array.isArray(schema.fields) ? schema.fields : [];
  const inferredFields = explicitFields.length > 0 ? explicitFields : parseSchemaFieldsFromBodyText(schema.body_text || "");

  const lines = [];
  lines.push(`# ${name}`);
  lines.push("");
  lines.push("## Schema");
  lines.push(`- type: ${schema.kind || "object"}`);
  lines.push("");
  lines.push("## Fields");
  if (inferredFields.length === 0) {
    lines.push("- No structured fields extracted yet");
  } else {
    for (const f of inferredFields) {
      const fname = f.name || f.path || "unknown";
      lines.push(`- ${fname}`);
      lines.push(`  - type: ${typeFromField(f)}`);
      const req = f.required === true || String(f.required || "").toLowerCase() === "yes";
      lines.push(`  - required: ${req ? "yes" : "no"}`);
      if (f.description) lines.push(`  - description: ${f.description}`);
    }
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main() {
  const opsRaw = JSON.parse(await fs.readFile(OPS_PATH, "utf8"));
  const operations = opsRaw.operations || [];
  const schemas = (await fs.readFile(SCHEMAS_PATH, "utf8"))
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));

  const endpointsDir = path.join(OUT_DIR, "endpoints");
  const schemasDir = path.join(OUT_DIR, "schemas");
  await ensureDir(endpointsDir);
  await ensureDir(schemasDir);

  const epIndex = ["# Endpoints", ""];
  const scIndex = ["# Schemas", ""];

  for (const op of operations) {
    const file = `${safeName(op.name)}.md`;
    await fs.writeFile(path.join(endpointsDir, file), formatEndpointMd(op), "utf8");
    epIndex.push(`- [${op.name}](endpoints/${file})`);
  }

  for (const schema of schemas) {
    const file = `${safeName(schema.name)}.md`;
    await fs.writeFile(path.join(schemasDir, file), formatSchemaMd(schema), "utf8");
    scIndex.push(`- [${schema.name}](schemas/${file})`);
  }

  await fs.writeFile(path.join(OUT_DIR, "endpoints.index.md"), epIndex.join("\n") + "\n", "utf8");
  await fs.writeFile(path.join(OUT_DIR, "schemas.index.md"), scIndex.join("\n") + "\n", "utf8");
  await fs.writeFile(
    path.join(OUT_DIR, "summary.json"),
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        endpoints: operations.length,
        schemas: schemas.length,
        root: OUT_DIR,
      },
      null,
      2
    ),
    "utf8"
  );

  console.log(
    JSON.stringify(
      {
        out_dir: OUT_DIR,
        endpoints: operations.length,
        schemas: schemas.length,
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

