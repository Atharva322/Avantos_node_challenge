import { FormField } from "./types";

type RawRecord = {
  stem?: string;
  name?: string;
  id?: string;
  form_fields?: string[];
  json_blocks?: string[];
  fields_union?: Array<{
    field_name?: string;
  }>;
};

type LinkedComponentGroup = {
  operation_stem: string;
  primary_schema?: {
    schema_stem: string;
    confidence: "high" | "medium" | "low";
    score_total: number;
  } | null;
  related_schemas?: Array<{
    schema_stem: string;
    confidence: "high" | "medium" | "low";
    score_total: number;
  }>;
  derived_field_catalog?: Array<{
    field_name: string;
    type?: string;
    sources?: Array<{ origin: "operation" | "schema"; operation_stem?: string; schema_stem?: string }>;
  }>;
  quality?: "high" | "medium" | "low";
};

export type SourceTab = {
  id: string;
  label: string;
  kind: "schema" | "operation";
  fields: FormField[];
  quality?: "high" | "medium" | "low";
  warning?: string;
};

const linkedGroupsModule = import.meta.glob("../organized_data_linked/component_groups.json", { eager: true }) as Record<
  string,
  { default: LinkedComponentGroup[] } | LinkedComponentGroup[]
>;
const schemaModules = import.meta.glob("../organized_data_merged/schemas/*.json", { eager: true }) as Record<
  string,
  { default: RawRecord } | RawRecord
>;
const operationModules = import.meta.glob("../organized_data_merged/operations/*.json", { eager: true }) as Record<
  string,
  { default: RawRecord } | RawRecord
>;

export const SOURCE_MODE: "linked" | "merged" = Object.keys(linkedGroupsModule).length > 0 ? "linked" : "merged";

export const SOURCE_TABS: SourceTab[] =
  SOURCE_MODE === "linked"
    ? toLinkedTabs(linkedGroupsModule).sort((a, b) => a.label.localeCompare(b.label))
    : [...toTabs(schemaModules, "schema"), ...toTabs(operationModules, "operation")].sort((a, b) => a.label.localeCompare(b.label));

function toLinkedTabs(
  moduleMap: Record<string, { default: LinkedComponentGroup[] } | LinkedComponentGroup[]>
): SourceTab[] {
  const modules = Object.values(moduleMap);
  if (modules.length === 0) return [];
  const groups = "default" in modules[0] ? modules[0].default : modules[0];
  return groups
    .filter((g) => {
      const bestRelated = g.related_schemas?.[0];
      return Boolean(bestRelated && (bestRelated.confidence === "high" || bestRelated.confidence === "medium"));
    })
    .map((g) => {
      const fields = (g.derived_field_catalog ?? []).map((f) => {
        const schemaBacked = (f.sources ?? []).some((s) => s.origin === "schema");
        const sourceLabel = schemaBacked ? "schema-backed" : "operation-only";
        return {
          key: f.field_name,
          label: `${startCase(f.field_name)} (${sourceLabel})`,
          type: f.type ?? "unknown"
        };
      });

      const best = g.primary_schema ?? g.related_schemas?.[0] ?? null;
      const quality = best?.confidence ?? "medium";
      const labelSuffix = best ? ` -> ${best.schema_stem} [${best.confidence}]` : "";

      return {
        id: `linked:${g.operation_stem}`,
        label: `${g.operation_stem}${labelSuffix}`,
        kind: "operation",
        fields,
        quality
      } satisfies SourceTab;
    });
}

function toTabs(
  modules: Record<string, { default: RawRecord } | RawRecord>,
  kind: "schema" | "operation"
): SourceTab[] {
  return Object.values(modules)
    .map((moduleLike) => ("default" in moduleLike ? moduleLike.default : moduleLike))
    .map((record): SourceTab | null => {
      const name = record.stem ?? record.name ?? record.id ?? "unknown";
      const fieldNames = extractFieldNames(record);
      if (fieldNames.length === 0) return null;
      const inferred = inferFieldTypes(record.json_blocks ?? []);
      const fields: FormField[] = fieldNames.map((fieldName) => ({
        key: fieldName,
        label: startCase(fieldName),
        type: inferred.get(fieldName) ?? "string"
      }));
      return {
        id: `${kind}:${name}`,
        label: `${name} (${kind})`,
        kind,
        fields,
        quality: "medium"
      };
    })
    .filter((item): item is SourceTab => item !== null);
}

function extractFieldNames(record: RawRecord): string[] {
  const mergedFields = (record.fields_union ?? [])
    .map((f) => String(f?.field_name ?? "").trim())
    .filter(Boolean);
  if (mergedFields.length > 0) return Array.from(new Set(mergedFields));
  return Array.from(new Set(record.form_fields ?? [])).filter(Boolean);
}

function inferFieldTypes(blocks: string[]): Map<string, string> {
  const result = new Map<string, string>();
  for (const block of blocks) {
    const matches = block.matchAll(/"([^"\\]+)"\s*:\s*([^,\]}]+)/g);
    for (const m of matches) {
      const key = m[1];
      const token = m[2].trim();
      if (!result.has(key)) {
        result.set(key, inferTypeFromToken(token));
      }
    }
  }
  return result;
}

function inferTypeFromToken(token: string): string {
  if (token.startsWith('"')) return "string";
  if (token === "true" || token === "false") return "boolean";
  if (token === "null") return "string";
  if (token.startsWith("{")) return "object";
  if (token.startsWith("[")) return "array";
  if (/^-?\d+$/.test(token)) return "integer";
  if (/^-?\d+(\.\d+)?$/.test(token)) return "number";
  return "string";
}

function startCase(value: string): string {
  return value
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}
