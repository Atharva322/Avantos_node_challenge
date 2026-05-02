import { FormField } from "./types";

type RawRecord = {
  name?: string;
  id?: string;
  form_fields?: string[];
  json_blocks?: string[];
};

export type SourceTab = {
  id: string;
  label: string;
  kind: "schema" | "operation";
  fields: FormField[];
};

const schemaModules = import.meta.glob("../organized_data/schemas/*.json", { eager: true }) as Record<string, { default: RawRecord } | RawRecord>;
const operationModules = import.meta.glob("../organized_data/operations/*.json", { eager: true }) as Record<
  string,
  { default: RawRecord } | RawRecord
>;

export const SOURCE_TABS: SourceTab[] = [
  ...toTabs(schemaModules, "schema"),
  ...toTabs(operationModules, "operation")
].sort((a, b) => a.label.localeCompare(b.label));

function toTabs(
  modules: Record<string, { default: RawRecord } | RawRecord>,
  kind: "schema" | "operation"
): SourceTab[] {
  return Object.values(modules)
    .map((moduleLike) => ("default" in moduleLike ? moduleLike.default : moduleLike))
    .map((record) => {
      const name = record.name ?? record.id ?? "unknown";
      const fieldNames = Array.from(new Set(record.form_fields ?? [])).filter(Boolean);
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
        fields
      } satisfies SourceTab;
    })
    .filter((item): item is SourceTab => Boolean(item));
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
