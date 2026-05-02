import { ActionBlueprintGraph } from "./types";
import { mockGraph } from "./mockGraph";
import { buildPartialSafeGraphPutBody } from "./updatePayload";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const tenantId = import.meta.env.VITE_TENANT_ID;
const blueprintId = import.meta.env.VITE_BLUEPRINT_ID;
const versionId = import.meta.env.VITE_BLUEPRINT_VERSION_ID;
const token = import.meta.env.VITE_API_TOKEN;

export async function getGraph(): Promise<{ graph: ActionBlueprintGraph; etag?: string; mock: boolean }> {
  if (!baseUrl || !tenantId || !blueprintId || !versionId) {
    return { graph: mockGraph, mock: true };
  }

  const url = `${baseUrl}/api/v1/${tenantId}/actions/blueprints/${blueprintId}/${versionId}/graph`;
  const res = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  });

  if (!res.ok) {
    throw new Error(`Graph GET failed: ${res.status}`);
  }

  const etag = res.headers.get("ETag") ?? undefined;
  const body = await res.json();
  return { graph: body, etag, mock: false };
}

export async function putGraph(graph: ActionBlueprintGraph, etag?: string): Promise<void> {
  if (!baseUrl || !tenantId || !blueprintId || !versionId) {
    return;
  }

  const url = `${baseUrl}/api/v1/${tenantId}/actions/blueprints/${blueprintId}/${versionId}/graph`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json"
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (etag) headers["If-Match"] = etag;

  const res = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(buildPartialSafeGraphPutBody(graph))
  });
  if (!res.ok) {
    throw new Error(`Graph PUT failed: ${res.status}`);
  }
}
