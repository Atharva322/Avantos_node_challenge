import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, "organized_data", "schemas");
const OUT_ROOT = path.join(ROOT, "organized_data_merged");
const OUT_SCHEMAS = path.join(OUT_ROOT, "schemas");

const TRAILING_SUFFIXES = [
  "InputBody",
  "OutputBody",
  "RequestBody",
  "ResponseBody",
  "Description",
  "Request",
  "Response",
  "Input",
  "Output",
  "Summary",
  "Config",
  "Schema",
  "Model",
  "Result",
  "View",
  "Doc",
  "API",
  "Body",
  "Item",
  "Data",
  "Type",
  "Rule",
  "Rules",
  "Expression",
  "Params",
  "Param",
  "Error"
];

main();

function main() {
  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();

  const schemas = files.map((file) => {
    const fullPath = path.join(INPUT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8").replace(/^\uFEFF/, "");
    const obj = JSON.parse(raw);
    const schemaName = String(obj.name ?? file.replace(/\.json$/i, ""));
    const formFields = Array.isArray(obj.form_fields) ? obj.form_fields.map(String) : [];
    return {
      file,
      schema_name: schemaName,
      stem: stemFromSchemaName(schemaName),
      docs_url: String(obj.docs_url ?? ""),
      form_fields: formFields
    };
  });

  const byStem = new Map();
  for (const s of schemas) {
    const curr = byStem.get(s.stem) ?? [];
    curr.push(s);
    byStem.set(s.stem, curr);
  }

  fs.mkdirSync(OUT_ROOT, { recursive: true });
  fs.rmSync(OUT_SCHEMAS, { recursive: true, force: true });
  fs.mkdirSync(OUT_SCHEMAS, { recursive: true });

  const indexItems = [];
  const warningItems = [];
  const stems = Array.from(byStem.keys()).sort();

  for (const stem of stems) {
    const members = byStem.get(stem).slice().sort((a, b) => a.schema_name.localeCompare(b.schema_name));
    const memberNames = members.map((m) => m.schema_name);
    const docsUrls = uniqueSorted(members.map((m) => m.docs_url).filter(Boolean));

    const fieldToMembers = new Map();
    for (const m of members) {
      for (const f of new Set(m.form_fields)) {
        const curr = fieldToMembers.get(f) ?? new Set();
        curr.add(m.schema_name);
        fieldToMembers.set(f, curr);
      }
    }

    const fieldsUnion = Array.from(fieldToMembers.keys())
      .sort()
      .map((fieldName) => {
        const inSchemas = Array.from(fieldToMembers.get(fieldName)).sort();
        return {
          field_name: fieldName,
          in_schemas: inSchemas,
          is_common: inSchemas.length === members.length
        };
      });

    const schemaFieldMap = {};
    for (const m of members) {
      schemaFieldMap[m.schema_name] = Array.from(new Set(m.form_fields)).sort();
    }

    const overlap = buildOverlapSummary(members);

    const merged = {
      stem,
      group_members: memberNames,
      docs_urls: docsUrls,
      fields_union: fieldsUnion,
      schema_field_map: schemaFieldMap,
      overlap_summary: overlap
    };

    const warnings = evaluateWarnings(members, overlap);
    if (warnings.length > 0) {
      warningItems.push({
        stem,
        group_members: memberNames,
        warnings
      });
    }

    indexItems.push({
      stem,
      group_size: members.length,
      group_members: memberNames,
      common_field_count: overlap.common_field_count,
      union_field_count: overlap.union_field_count,
      avg_pairwise_jaccard: overlap.avg_pairwise_jaccard
    });

    fs.writeFileSync(path.join(OUT_SCHEMAS, `${stem}.json`), `${JSON.stringify(merged, null, 2)}\n`, "utf8");
  }

  const totalRawSchemas = schemas.length;
  const groupedStems = stems.length;
  const singletonGroups = stems.filter((s) => byStem.get(s).length === 1).length;
  const multiMemberGroups = groupedStems - singletonGroups;

  const manifest = {
    generated_at: new Date().toISOString(),
    source_dir: "organized_data/schemas",
    output_dir: "organized_data_merged/schemas",
    totals: {
      raw_schemas: totalRawSchemas,
      grouped_stems: groupedStems,
      singleton_groups: singletonGroups,
      multi_member_groups: multiMemberGroups
    },
    grouping: {
      rule: "name-prefix stem via camel tokens (default first two tokens) with trailing schema suffix trim",
      trailing_suffixes: TRAILING_SUFFIXES
    },
    files: {
      schemas_index: "organized_data_merged/schemas.index.json",
      warnings: "organized_data_merged/schemas.warnings.json"
    }
  };

  fs.writeFileSync(path.join(OUT_ROOT, "schemas.index.json"), `${JSON.stringify(indexItems, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(OUT_ROOT, "schemas.warnings.json"), `${JSON.stringify(warningItems, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(OUT_ROOT, "schemas.manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(JSON.stringify(manifest.totals, null, 2));
  console.log(`warning_groups=${warningItems.length}`);
}

function stemFromSchemaName(name) {
  const trimmed = trimTrailingSchemaSuffix(name);
  const tokens = splitCamel(trimmed);
  if (tokens.length <= 2) return trimmed || name;
  return tokens.slice(0, 2).join("");
}

function trimTrailingSchemaSuffix(name) {
  for (const suffix of TRAILING_SUFFIXES) {
    if (name.endsWith(suffix) && name.length > suffix.length) {
      return name.slice(0, -suffix.length);
    }
  }
  return name;
}

function splitCamel(input) {
  return input.match(/[A-Z]+(?=[A-Z][a-z]|\d|$)|[A-Z]?[a-z]+|\d+/g) ?? [];
}

function uniqueSorted(items) {
  return Array.from(new Set(items)).sort();
}

function buildOverlapSummary(members) {
  const sets = members.map((m) => new Set(m.form_fields));
  const union = new Set();
  for (const s of sets) {
    for (const v of s) union.add(v);
  }

  let common = new Set(union);
  for (const s of sets) {
    common = new Set([...common].filter((v) => s.has(v)));
  }

  const pairScores = [];
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      pairScores.push(jaccard(sets[i], sets[j]));
    }
  }
  const avg = pairScores.length ? pairScores.reduce((a, b) => a + b, 0) / pairScores.length : 1;

  return {
    union_field_count: union.size,
    common_field_count: common.size,
    avg_pairwise_jaccard: Number(avg.toFixed(4))
  };
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 1;
  let inter = 0;
  for (const v of a) if (b.has(v)) inter += 1;
  const uni = new Set([...a, ...b]).size;
  return uni === 0 ? 1 : inter / uni;
}

function evaluateWarnings(members, overlap) {
  const warnings = [];
  if (members.length <= 1) return warnings;
  const emptyMembers = members.filter((m) => !m.form_fields.length).map((m) => m.schema_name);
  if (emptyMembers.length) {
    warnings.push({
      type: "empty_field_members",
      detail: `${emptyMembers.length} member(s) have empty form_fields`,
      schema_names: emptyMembers
    });
  }
  if (overlap.avg_pairwise_jaccard < 0.15 && overlap.union_field_count > 0) {
    warnings.push({
      type: "low_field_overlap",
      detail: `Low average field overlap (${overlap.avg_pairwise_jaccard}) across grouped schemas`
    });
  }
  return warnings;
}
