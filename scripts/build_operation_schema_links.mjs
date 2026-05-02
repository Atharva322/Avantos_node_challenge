import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OPS_DIR = path.join(ROOT, "organized_data_merged", "operations");
const SCHEMAS_DIR = path.join(ROOT, "organized_data_merged", "schemas");
const OUT_DIR = path.join(ROOT, "organized_data_linked");

const TOP_N = 5;
const THRESHOLDS = {
  high: 0.65,
  medium: 0.4
};
const opsByStem = new Map();
const schemasByStem = new Map();

main();

function main() {
  const ops = loadMergedOperations();
  const schemas = loadMergedSchemas();

  const operationSchemaLinks = [];
  const schemaOperationMap = new Map();
  const warnings = [];

  for (const op of ops) {
    const ranked = schemas
      .map((schema) => scoreOperationSchema(op, schema))
      .sort((a, b) => b.score_total - a.score_total || a.schema_stem.localeCompare(b.schema_stem))
      .slice(0, TOP_N);

    operationSchemaLinks.push({
      operation_stem: op.stem,
      links: ranked
    });

    for (const link of ranked) {
      const curr = schemaOperationMap.get(link.schema_stem) ?? [];
      curr.push({
        operation_stem: op.stem,
        score_total: link.score_total,
        confidence: link.confidence,
        evidence: link.evidence
      });
      schemaOperationMap.set(link.schema_stem, curr);
    }

    if (!op.fields.length) {
      warnings.push({
        type: "operation_empty_fields",
        operation_stem: op.stem
      });
    }

    const best = ranked[0];
    if (!best || best.confidence === "low") {
      warnings.push({
        type: "operation_low_confidence_only",
        operation_stem: op.stem,
        best_score: best?.score_total ?? 0
      });
    }
  }

  const schemaOperationLinks = schemas.map((schema) => ({
    schema_stem: schema.stem,
    links: (schemaOperationMap.get(schema.stem) ?? [])
      .sort((a, b) => b.score_total - a.score_total || a.operation_stem.localeCompare(b.operation_stem))
      .slice(0, TOP_N)
  }));

  for (const schema of schemas) {
    if (!schema.fields.length) {
      warnings.push({
        type: "schema_empty_fields",
        schema_stem: schema.stem
      });
    }
  }

  const componentGroups = operationSchemaLinks.map((entry) => {
    const op = opsByStem.get(entry.operation_stem);
    const highOrMedium = entry.links.filter((l) => l.confidence === "high" || l.confidence === "medium");
    const lowOnly = entry.links.filter((l) => l.confidence === "low");
    const primary = entry.links.find((l) => l.confidence === "high") ?? null;
    const related = highOrMedium;

    return {
      operation_stem: op.stem,
      primary_schema: primary
        ? {
            schema_stem: primary.schema_stem,
            score_total: primary.score_total,
            confidence: primary.confidence
          }
        : null,
      related_schemas: related.map((link) => ({
        schema_stem: link.schema_stem,
        score_total: link.score_total,
        confidence: link.confidence
      })),
      low_confidence_candidates: lowOnly.map((link) => ({
        schema_stem: link.schema_stem,
        score_total: link.score_total,
        confidence: link.confidence
      })),
      derived_field_catalog: buildDerivedFieldCatalog(op, related.map((r) => schemasByStem.get(r.schema_stem)).filter(Boolean)),
      quality: related[0]?.confidence ?? "low"
    };
  });

  const manifest = {
    generated_at: new Date().toISOString(),
    input: {
      operations: "organized_data_merged/operations",
      schemas: "organized_data_merged/schemas"
    },
    output: "organized_data_linked",
    config: {
      top_n_links_per_operation: TOP_N,
      thresholds: THRESHOLDS,
      score_weights: {
        field_overlap: 0.6,
        name_similarity: 0.25,
        semantic_hint: 0.15
      }
    },
    counts: {
      operations: ops.length,
      schemas: schemas.length,
      operation_link_groups: operationSchemaLinks.length,
      schema_link_groups: schemaOperationLinks.length,
      component_groups: componentGroups.length,
      warnings: warnings.length
    }
  };

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  writeJson(path.join(OUT_DIR, "operation_schema_links.json"), operationSchemaLinks);
  writeJson(path.join(OUT_DIR, "schema_operation_links.json"), schemaOperationLinks);
  writeJson(path.join(OUT_DIR, "component_groups.json"), componentGroups);
  writeJson(path.join(OUT_DIR, "linking_manifest.json"), manifest);
  writeJson(path.join(OUT_DIR, "linking_warnings.json"), warnings);

  console.log(JSON.stringify(manifest.counts, null, 2));
}

function loadMergedOperations() {
  const out = [];
  for (const file of fs.readdirSync(OPS_DIR).filter((f) => f.endsWith(".json")).sort()) {
    const data = parseJson(path.join(OPS_DIR, file));
    const stem = String(data.stem ?? file.replace(/\.json$/i, ""));
    const fields = (data.fields_union ?? []).map((f) => String(f.field_name ?? "")).filter(Boolean);
    const groupMembers = Array.isArray(data.group_members) ? data.group_members.map(String) : [];
    const paths = Array.isArray(data.paths) ? data.paths.map(String) : [];
    const op = {
      stem,
      fields,
      group_members: groupMembers,
      paths,
      tokens: normalizeTokens([stem, ...fields, ...paths]),
      crud_hints: crudHintsFromMembers(groupMembers)
    };
    out.push(op);
    opsByStem.set(stem, op);
  }
  return out;
}

function loadMergedSchemas() {
  const out = [];
  for (const file of fs.readdirSync(SCHEMAS_DIR).filter((f) => f.endsWith(".json")).sort()) {
    const data = parseJson(path.join(SCHEMAS_DIR, file));
    const stem = String(data.stem ?? file.replace(/\.json$/i, ""));
    const fields = (data.fields_union ?? []).map((f) => String(f.field_name ?? "")).filter(Boolean);
    const groupMembers = Array.isArray(data.group_members) ? data.group_members.map(String) : [];
    const s = {
      stem,
      fields,
      group_members: groupMembers,
      tokens: normalizeTokens([stem, ...fields]),
      schema_hints: schemaHintsFromMembers(groupMembers)
    };
    out.push(s);
    schemasByStem.set(stem, s);
  }
  return out;
}

function scoreOperationSchema(op, schema) {
  const opFieldSet = new Set(op.fields.map((f) => f.toLowerCase()));
  const schemaFieldSet = new Set(schema.fields.map((f) => f.toLowerCase()));
  const matchedFields = intersect(opFieldSet, schemaFieldSet);
  const fieldJaccard = jaccard(opFieldSet, schemaFieldSet);
  const fieldOverlapNorm = Math.min(1, matchedFields.length / 10);
  const fieldOverlapScore = 0.7 * fieldJaccard + 0.3 * fieldOverlapNorm;

  const matchedTokens = intersect(new Set(op.tokens), new Set(schema.tokens));
  const nameSimilarityScore = jaccard(new Set(tokenize(op.stem)), new Set(tokenize(schema.stem)));

  const matchedHints = intersect(new Set(op.crud_hints), new Set(schema.schema_hints));
  const semanticHintScore = op.crud_hints.length === 0 ? 0 : matchedHints.length / new Set(op.crud_hints).size;

  let total = 0.6 * fieldOverlapScore + 0.25 * nameSimilarityScore + 0.15 * semanticHintScore;

  if (op.fields.length === 0) total *= 0.6;
  if (schema.fields.length === 0) total *= 0.7;
  if (op.tokens.length + schema.tokens.length < 8) total *= 0.85;

  total = Number(total.toFixed(4));
  const confidence = total >= THRESHOLDS.high ? "high" : total >= THRESHOLDS.medium ? "medium" : "low";

  return {
    operation_stem: op.stem,
    schema_stem: schema.stem,
    score_total: total,
    confidence,
    evidence: {
      matched_fields: matchedFields.slice(0, 30),
      matched_tokens: matchedTokens.slice(0, 30),
      matched_hints: matchedHints,
      field_overlap_score: Number(fieldOverlapScore.toFixed(4)),
      name_similarity_score: Number(nameSimilarityScore.toFixed(4)),
      semantic_hint_score: Number(semanticHintScore.toFixed(4))
    }
  };
}

function buildDerivedFieldCatalog(op, relatedSchemas) {
  const map = new Map();

  for (const field of op.fields) {
    const k = field.toLowerCase();
    map.set(k, {
      field_name: field,
      type: "unknown",
      sources: [{ origin: "operation", operation_stem: op.stem }],
      presence: {
        operation_common: true,
        schema_common: false
      }
    });
  }

  for (const schema of relatedSchemas) {
    for (const field of schema.fields) {
      const k = field.toLowerCase();
      const existing = map.get(k);
      if (existing) {
        existing.sources.push({ origin: "schema", schema_stem: schema.stem });
      } else {
        map.set(k, {
          field_name: field,
          type: "unknown",
          sources: [{ origin: "schema", schema_stem: schema.stem }],
          presence: {
            operation_common: false,
            schema_common: false
          }
        });
      }
    }
  }

  const rows = Array.from(map.values());
  rows.sort((a, b) => {
    const aSchema = a.sources.some((s) => s.origin === "schema") ? 1 : 0;
    const bSchema = b.sources.some((s) => s.origin === "schema") ? 1 : 0;
    if (aSchema !== bSchema) return bSchema - aSchema;
    return a.field_name.localeCompare(b.field_name);
  });
  return rows;
}

function crudHintsFromMembers(members) {
  const hints = [];
  for (const m of members) {
    const tokens = tokenize(m);
    for (const t of tokens) {
      if (["create", "get", "list", "update", "delete", "patch", "put", "post"].includes(t)) hints.push(t);
    }
  }
  return Array.from(new Set(hints));
}

function schemaHintsFromMembers(members) {
  const hints = [];
  for (const m of members) {
    const tokens = tokenize(m);
    for (const t of tokens) {
      if (["create", "get", "list", "update", "delete", "input", "output", "request", "response", "patch"].includes(t)) hints.push(t);
    }
  }
  return Array.from(new Set(hints));
}

function normalizeTokens(values) {
  const out = [];
  for (const v of values) out.push(...tokenize(v));
  return Array.from(new Set(out));
}

function tokenize(value) {
  return String(value)
    .replace(/[{}]/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

function intersect(aSet, bSet) {
  const out = [];
  for (const v of aSet) if (bSet.has(v)) out.push(v);
  out.sort();
  return out;
}

function jaccard(aSet, bSet) {
  if (aSet.size === 0 && bSet.size === 0) return 0;
  let inter = 0;
  for (const v of aSet) if (bSet.has(v)) inter += 1;
  const uni = new Set([...aSet, ...bSet]).size;
  return uni === 0 ? 0 : inter / uni;
}

function parseJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJson(filePath, obj) {
  fs.writeFileSync(filePath, `${JSON.stringify(obj, null, 2)}\n`, "utf8");
}
