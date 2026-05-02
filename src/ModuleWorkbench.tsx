import { useMemo, useState } from "react";
import { EndpointDefinition, moduleRegistry } from "./modules";
import { queryString, pathWithParams, validateAndSerialize } from "./moduleEngine";

type SubmissionSnapshot = {
  id: string;
  moduleId: string;
  endpointId: string;
  data: Record<string, unknown>;
  parentId?: string;
};

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN;

export function ModuleWorkbench() {
  const [batch, setBatch] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [moduleId, setModuleId] = useState<string>("todos");
  const [endpointId, setEndpointId] = useState<string>("todo-create");
  const [pathValues, setPathValues] = useState<Record<string, string>>({});
  const [queryValues, setQueryValues] = useState<Record<string, string>>({});
  const [bodyValues, setBodyValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<string[]>([]);
  const [responseText, setResponseText] = useState<string>("");
  const [snapshots, setSnapshots] = useState<SubmissionSnapshot[]>([]);
  const [parentSnapshotId, setParentSnapshotId] = useState<string>("");
  const [pendingPrefill, setPendingPrefill] = useState<{ field: string; value: unknown } | null>(null);

  const moduleOptions = useMemo(() => moduleRegistry.filter((m) => m.batch === batch), [batch]);
  const selectedModule = useMemo(() => moduleRegistry.find((m) => m.id === moduleId) ?? moduleOptions[0], [moduleId, moduleOptions]);
  const selectedEndpoint = useMemo(
    () => selectedModule?.endpoints.find((e) => e.id === endpointId) ?? selectedModule?.endpoints[0],
    [selectedModule, endpointId]
  );

  function resetForEndpoint(nextEndpoint: EndpointDefinition) {
    setEndpointId(nextEndpoint.id);
    setPathValues({});
    setQueryValues({});
    setBodyValues({});
    setErrors([]);
    setResponseText("");
  }

  function applyParentSuggestions() {
    if (!selectedEndpoint?.bodyFields) return;
    const parent = snapshots.find((s) => s.id === parentSnapshotId);
    if (!parent) return;
    const first = selectedEndpoint.bodyFields.find((f) => parent.data[f.key] !== undefined);
    if (!first) return;
    setPendingPrefill({ field: first.key, value: parent.data[first.key] });
  }

  function autoApplyAllCompatibleFromAncestors() {
    if (!selectedEndpoint?.bodyFields || !parentSnapshotId) return;
    const chain = getAncestorChain(snapshots, parentSnapshotId);
    if (chain.length === 0) return;

    let applied = 0;
    const updates: Record<string, string> = {};

    selectedEndpoint.bodyFields.forEach((field) => {
      if (bodyValues[field.key] && bodyValues[field.key] !== "") return;
      for (const snap of chain) {
        const candidate = snap.data[field.key];
        if (candidate === undefined) continue;
        if (!isTypeCompatible(field.type, candidate)) continue;
        updates[field.key] = stringifyForInput(candidate);
        applied += 1;
        break;
      }
    });

    if (applied === 0) {
      setErrors((prev) => [...prev, "No compatible ancestor values found to auto-apply."]);
      return;
    }

    setBodyValues((prev) => ({ ...prev, ...updates }));
  }

  function acceptPrefill() {
    if (!pendingPrefill || !selectedEndpoint?.bodyFields) return;
    const field = selectedEndpoint.bodyFields.find((f) => f.key === pendingPrefill.field);
    if (!field) return;
    if (!isTypeCompatible(field.type, pendingPrefill.value)) {
      setErrors((prev) => [...prev, `Prefill blocked for ${field.key}: incompatible type`]);
      setPendingPrefill(null);
      return;
    }
    setBodyValues((prev) => ({ ...prev, [field.key]: stringifyForInput(pendingPrefill.value) }));

    const parent = snapshots.find((s) => s.id === parentSnapshotId);
    const remaining = selectedEndpoint.bodyFields.find((f) => f.key !== field.key && parent?.data[f.key] !== undefined);
    setPendingPrefill(remaining && parent ? { field: remaining.key, value: parent.data[remaining.key] } : null);
  }

  function skipPrefill() {
    if (!pendingPrefill || !selectedEndpoint?.bodyFields) return;
    const parent = snapshots.find((s) => s.id === parentSnapshotId);
    const remaining = selectedEndpoint.bodyFields.find((f) => f.key !== pendingPrefill.field && parent?.data[f.key] !== undefined);
    setPendingPrefill(remaining && parent ? { field: remaining.key, value: parent.data[remaining.key] } : null);
  }

  async function submit() {
    if (!selectedModule || !selectedEndpoint) return;
    setErrors([]);

    const pathErrors = (selectedEndpoint.pathParams ?? [])
      .filter((p) => p.required && !pathValues[p.key])
      .map((p) => `${p.label} is required`);

    if (pathErrors.length > 0) {
      setErrors(pathErrors);
      return;
    }

    const { body, errors: validationErrors } = validateAndSerialize(selectedEndpoint, bodyValues);
    if (validationErrors.length > 0) {
      setErrors(validationErrors.map((e) => `${e.field}: ${e.message}`));
      return;
    }

    const urlPath = pathWithParams(selectedEndpoint.path, pathValues);
    const url = `${baseUrl ?? ""}${urlPath}${queryString(queryValues)}`;
    if (!baseUrl) {
      setResponseText(JSON.stringify({ mock: true, endpoint: selectedEndpoint.id, method: selectedEndpoint.method, path: urlPath, queryValues, body }, null, 2));
      addSnapshot(selectedModule.id, selectedEndpoint.id, body);
      return;
    }

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(url, {
      method: selectedEndpoint.method,
      headers,
      body: selectedEndpoint.method === "GET" || selectedEndpoint.method === "DELETE" ? undefined : JSON.stringify(body)
    });

    const contentType = res.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json") ? await res.json() : await res.text();
    setResponseText(JSON.stringify({ status: res.status, payload }, null, 2));

    addSnapshot(selectedModule.id, selectedEndpoint.id, body);
  }

  function addSnapshot(nextModuleId: string, nextEndpointId: string, body: Record<string, unknown>) {
    const id = `${Date.now()}`;
    setSnapshots((prev) => [{ id, moduleId: nextModuleId, endpointId: nextEndpointId, data: body, parentId: parentSnapshotId || undefined }, ...prev].slice(0, 30));
  }

  return (
    <section className="panel">
      <h2>Schema Workbench</h2>

      <div className="toolbar">
        <label>
          Batch
          <select value={batch} onChange={(e) => setBatch(Number(e.target.value) as 1 | 2 | 3 | 4 | 5)}>
            {[1, 2, 3, 4, 5].map((b) => (
              <option key={b} value={b}>
                Batch {b}
              </option>
            ))}
          </select>
        </label>

        <label>
          Module
          <select
            value={selectedModule?.id ?? ""}
            onChange={(e) => {
              const m = moduleOptions.find((it) => it.id === e.target.value);
              if (!m) return;
              setModuleId(m.id);
              resetForEndpoint(m.endpoints[0]);
            }}
          >
            {moduleOptions.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Endpoint
          <select
            value={selectedEndpoint?.id ?? ""}
            onChange={(e) => {
              const ep = selectedModule?.endpoints.find((it) => it.id === e.target.value);
              if (ep) resetForEndpoint(ep);
            }}
          >
            {(selectedModule?.endpoints ?? []).map((e) => (
              <option key={e.id} value={e.id}>
                {e.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedEndpoint ? (
        <>
          <p>
            <strong>{selectedEndpoint.method}</strong> <code>{selectedEndpoint.path}</code>
          </p>

          <section>
            <h3>Path Params</h3>
            {(selectedEndpoint.pathParams ?? []).map((p) => (
              <label key={p.key} className="formRow">
                <span>{p.label}</span>
                <input value={pathValues[p.key] ?? ""} onChange={(e) => setPathValues((prev) => ({ ...prev, [p.key]: e.target.value }))} />
              </label>
            ))}
          </section>

          {selectedEndpoint.queryParams?.length ? (
            <section>
              <h3>Query Params</h3>
              {selectedEndpoint.queryParams.map((q) => (
                <label key={q.key} className="formRow">
                  <span>{q.label}</span>
                  <input value={queryValues[q.key] ?? ""} onChange={(e) => setQueryValues((prev) => ({ ...prev, [q.key]: e.target.value }))} />
                </label>
              ))}
            </section>
          ) : null}

          {selectedEndpoint.bodyFields?.length ? (
            <section>
              <h3>Body Fields</h3>
              {selectedEndpoint.bodyFields.map((f) => (
                <label key={f.key} className="formRow">
                  <span>
                    {f.label} [{f.type}] {f.required ? "*" : ""}
                  </span>
                  <input
                    placeholder={f.type === "object" || f.type === "array" ? "JSON value" : ""}
                    value={bodyValues[f.key] ?? ""}
                    onChange={(e) => setBodyValues((prev) => ({ ...prev, [f.key]: e.target.value }))}
                  />
                </label>
              ))}
            </section>
          ) : null}

          <section className="prefillPanel">
            <h3>Parent-to-Child Prefill (Ask Per Field)</h3>
            <div className="toolbar">
              <select value={parentSnapshotId} onChange={(e) => setParentSnapshotId(e.target.value)}>
                <option value="">Select parent submission</option>
                {snapshots.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.moduleId}/{s.endpointId} #{s.id}
                  </option>
                ))}
              </select>
              <button className="closeBtn" onClick={applyParentSuggestions}>
                Ask Per Field
              </button>
              <button className="closeBtn" onClick={autoApplyAllCompatibleFromAncestors}>
                Auto-Apply Compatible (Graph Traversal)
              </button>
            </div>

            {pendingPrefill ? (
              <div className="mappingRow">
                <div className="mappingValue">
                  Apply field <code>{pendingPrefill.field}</code> with value <code>{stringifyForInput(pendingPrefill.value)}</code>?
                </div>
                <button className="closeBtn" onClick={acceptPrefill}>
                  Accept
                </button>
                <button className="clearBtn" onClick={skipPrefill}>
                  Skip
                </button>
              </div>
            ) : null}
          </section>

          <button className="closeBtn" onClick={submit}>
            Submit
          </button>
        </>
      ) : (
        <p>No endpoint configured for this module.</p>
      )}

      {errors.length > 0 ? (
        <section>
          <h3>Validation Errors</h3>
          {errors.map((e) => (
            <div key={e} className="errorLine">
              {e}
            </div>
          ))}
        </section>
      ) : null}

      {responseText ? (
        <section>
          <h3>Response</h3>
          <pre className="mappingValue">{responseText}</pre>
        </section>
      ) : null}
    </section>
  );
}

function getAncestorChain(snapshots: SubmissionSnapshot[], startId: string): SubmissionSnapshot[] {
  const byId = new Map(snapshots.map((s) => [s.id, s]));
  const ordered: SubmissionSnapshot[] = [];
  let cursor = byId.get(startId);
  const seen = new Set<string>();
  while (cursor && !seen.has(cursor.id)) {
    ordered.push(cursor);
    seen.add(cursor.id);
    cursor = cursor.parentId ? byId.get(cursor.parentId) : undefined;
  }
  return ordered;
}

function isTypeCompatible(type: string, value: unknown): boolean {
  if (type === "string") return typeof value === "string";
  if (type === "number") return typeof value === "number";
  if (type === "integer") return typeof value === "number" && Number.isInteger(value);
  if (type === "boolean") return typeof value === "boolean";
  if (type === "array") return Array.isArray(value);
  if (type === "object") return typeof value === "object" && value !== null && !Array.isArray(value);
  return false;
}

function stringifyForInput(value: unknown): string {
  if (typeof value === "string") return value;
  return JSON.stringify(value);
}
