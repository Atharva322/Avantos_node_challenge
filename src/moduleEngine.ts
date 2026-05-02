import { EndpointDefinition, FieldSchema } from "./modules";

export type ValidationError = { field: string; message: string };

function isNullish(v: unknown): boolean {
  return v === null || v === undefined || v === "";
}

function parsePrimitive(raw: string, type: FieldSchema["type"]): unknown {
  if (type === "string") return raw;
  if (type === "number" || type === "integer") return Number(raw);
  if (type === "boolean") return raw === "true";
  if (type === "object" || type === "array") return JSON.parse(raw);
  return raw;
}

export function validateAndSerialize(
  endpoint: EndpointDefinition,
  values: Record<string, string>
): { body: Record<string, unknown>; errors: ValidationError[] } {
  const body: Record<string, unknown> = {};
  const errors: ValidationError[] = [];
  const fields = endpoint.bodyFields ?? [];

  fields.forEach((field) => {
    const raw = values[field.key] ?? "";
    if (isNullish(raw)) {
      if (field.required && !field.nullable) {
        errors.push({ field: field.key, message: "Required field is missing" });
      }
      return;
    }

    let parsed: unknown;
    try {
      parsed = parsePrimitive(raw, field.type);
    } catch {
      errors.push({ field: field.key, message: `Invalid ${field.type} value` });
      return;
    }

    if (field.type === "number" && typeof parsed !== "number") errors.push({ field: field.key, message: "Must be number" });
    if (field.type === "integer" && !Number.isInteger(parsed)) errors.push({ field: field.key, message: "Must be integer" });
    if (field.type === "boolean" && typeof parsed !== "boolean") errors.push({ field: field.key, message: "Must be boolean" });
    if (field.type === "object" && (typeof parsed !== "object" || Array.isArray(parsed) || parsed === null)) {
      errors.push({ field: field.key, message: "Must be object JSON" });
    }
    if (field.type === "array" && !Array.isArray(parsed)) errors.push({ field: field.key, message: "Must be array JSON" });

    if (field.enum && typeof parsed === "string" && !field.enum.includes(parsed)) {
      errors.push({ field: field.key, message: `Must be one of: ${field.enum.join(", ")}` });
      return;
    }

    body[field.key] = parsed;
  });

  return { body, errors };
}

export function pathWithParams(path: string, pathValues: Record<string, string>): string {
  return path.replace(/\{([^}]+)\}/g, (_, key) => encodeURIComponent(pathValues[key] ?? ""));
}

export function queryString(values: Record<string, string>): string {
  const params = new URLSearchParams();
  Object.entries(values).forEach(([k, v]) => {
    if (v !== "") params.set(k, v);
  });
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
