import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, "organized_data", "operations");
const OUT_ROOT = path.join(ROOT, "organized_data_merged");
const OUT_OPS = path.join(OUT_ROOT, "operations");

const ACTION_SUFFIXES = new Set([
  "create",
  "get",
  "list",
  "update",
  "delete",
  "clone",
  "patch",
  "put",
  "post",
  "refresh",
  "assign",
  "remove",
  "add",
  "search"
]);

main();

function main() {
  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();

  const operations = files.map((file) => {
    const fullPath = path.join(INPUT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8").replace(/^\uFEFF/, "");
    const obj = JSON.parse(raw);
    const opId = String(obj.id ?? obj.name ?? file.replace(/\.json$/i, ""));
    const opFields = Array.isArray(obj.form_fields) ? obj.form_fields.map(String) : [];
    return {
      file,
      operation_id: opId,
      stem: stemFromOpId(opId),
      method: String(obj.method ?? ""),
      path: String(obj.path ?? ""),
      docs_url: String(obj.docs_url ?? ""),
      form_fields: opFields
    };
  });

  const byStem = new Map();
  for (const op of operations) {
    const curr = byStem.get(op.stem) ?? [];
    curr.push(op);
    byStem.set(op.stem, curr);
  }

  fs.rmSync(OUT_ROOT, { recursive: true, force: true });
  fs.mkdirSync(OUT_OPS, { recursive: true });

  const warningItems = [];
  const indexItems = [];

  const stems = Array.from(byStem.keys()).sort();
  for (const stem of stems) {
    const members = byStem.get(stem).slice().sort((a, b) => a.operation_id.localeCompare(b.operation_id));
    const groupMembers = members.map((m) => m.operation_id);
    const methods = uniqueSorted(members.map((m) => m.method).filter(Boolean));
    const paths = uniqueSorted(members.map((m) => m.path).filter(Boolean));
    const docsUrls = uniqueSorted(members.map((m) => m.docs_url).filter(Boolean));

    const fieldToOps = new Map();
    for (const m of members) {
      const uniqFields = new Set(m.form_fields);
      for (const f of uniqFields) {
        const curr = fieldToOps.get(f) ?? new Set();
        curr.add(m.operation_id);
        fieldToOps.set(f, curr);
      }
    }
    const fieldsUnion = Array.from(fieldToOps.keys())
      .sort()
      .map((fieldName) => {
        const inOps = Array.from(fieldToOps.get(fieldName)).sort();
        return {
          field_name: fieldName,
          in_operations: inOps,
          is_common: inOps.length === members.length
        };
      });

    const operationFieldMap = {};
    for (const m of members) {
      operationFieldMap[m.operation_id] = Array.from(new Set(m.form_fields)).sort();
    }

    const merged = {
      stem,
      group_members: groupMembers,
      methods,
      paths,
      docs_urls: docsUrls,
      fields_union: fieldsUnion,
      operation_field_map: operationFieldMap
    };

    const warnings = evaluateGroupWarnings(stem, members, methods, paths);
    if (warnings.length > 0) {
      warningItems.push({
        stem,
        group_members: groupMembers,
        warnings
      });
    }

    indexItems.push({
      stem,
      group_size: members.length,
      group_members: groupMembers
    });

    fs.writeFileSync(path.join(OUT_OPS, `${stem}.json`), `${JSON.stringify(merged, null, 2)}\n`, "utf8");
  }

  const totalRawOps = operations.length;
  const groupedStems = stems.length;
  const singletonGroups = stems.filter((s) => byStem.get(s).length === 1).length;
  const multiMemberGroups = groupedStems - singletonGroups;

  const manifest = {
    generated_at: new Date().toISOString(),
    source_dir: "organized_data/operations",
    output_dir: "organized_data_merged/operations",
    totals: {
      raw_operations: totalRawOps,
      grouped_stems: groupedStems,
      singleton_groups: singletonGroups,
      multi_member_groups: multiMemberGroups
    },
    grouping: {
      rule: "suffix-based stem",
      suffixes: Array.from(ACTION_SUFFIXES).sort()
    },
    files: {
      operations_index: "organized_data_merged/operations.index.json",
      warnings: "organized_data_merged/warnings.json"
    }
  };

  fs.writeFileSync(path.join(OUT_ROOT, "operations.index.json"), `${JSON.stringify(indexItems, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(OUT_ROOT, "warnings.json"), `${JSON.stringify(warningItems, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(OUT_ROOT, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(JSON.stringify(manifest.totals, null, 2));
  console.log(`warning_groups=${warningItems.length}`);
}

function stemFromOpId(opId) {
  const parts = opId.split("-");
  if (parts.length < 2) return opId;
  const suffix = parts[parts.length - 1];
  if (!ACTION_SUFFIXES.has(suffix)) return opId;
  return parts.slice(0, -1).join("-");
}

function uniqueSorted(items) {
  return Array.from(new Set(items)).sort();
}

function tokenizePath(pathValue) {
  return pathValue
    .split("/")
    .filter(Boolean)
    .map((seg) => (seg.startsWith("{") && seg.endsWith("}") ? "{param}" : seg));
}

function pathSimilarity(a, b) {
  const ta = tokenizePath(a);
  const tb = tokenizePath(b);
  const maxLen = Math.max(ta.length, tb.length);
  if (maxLen === 0) return 1;
  let matches = 0;
  for (let i = 0; i < Math.min(ta.length, tb.length); i++) {
    if (ta[i] === tb[i]) matches += 1;
  }
  return matches / maxLen;
}

function evaluateGroupWarnings(stem, members, methods, paths) {
  const warnings = [];
  if (members.length <= 1) return warnings;

  if (methods.length > 4) {
    warnings.push({
      type: "high_method_variation",
      detail: `Group has ${methods.length} distinct HTTP methods`
    });
  }

  if (paths.length > 1) {
    let minSimilarity = 1;
    for (let i = 0; i < paths.length; i++) {
      for (let j = i + 1; j < paths.length; j++) {
        minSimilarity = Math.min(minSimilarity, pathSimilarity(paths[i], paths[j]));
      }
    }
    if (minSimilarity < 0.5) {
      warnings.push({
        type: "path_semantic_drift",
        detail: `Low path similarity detected for grouped operations (min_similarity=${minSimilarity.toFixed(2)})`
      });
    }
  }

  const noFieldOps = members.filter((m) => !m.form_fields || m.form_fields.length === 0).map((m) => m.operation_id);
  if (noFieldOps.length > 0) {
    warnings.push({
      type: "empty_field_members",
      detail: `${noFieldOps.length} member(s) have empty form_fields`,
      operation_ids: noFieldOps
    });
  }

  return warnings;
}
