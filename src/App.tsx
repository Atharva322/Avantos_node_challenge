import { useEffect, useMemo, useState } from "react";
import { ActionBlueprintGraph, DlInputEntry, FormField, PrefillCandidate } from "./types";
import { getGraph, putGraph } from "./api";
import { extractFormFields } from "./graph";
import { clearMapping, getEffectiveMappings, getPersistedUiFields, setMapping, setPersistedUiFields } from "./mappings";
import { providers } from "./providers";
import { SOURCE_TABS } from "./sourceCatalog";

type ConfiguredField = FormField & {
  required: boolean;
  prefillEnabled: boolean;
};

export function App() {
  const [graph, setGraph] = useState<ActionBlueprintGraph | null>(null);
  const [etag, setEtag] = useState<string | undefined>();
  const [mockMode, setMockMode] = useState(false);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveWarning, setSaveWarning] = useState<string | null>(null);
  const [includeGlobalSource, setIncludeGlobalSource] = useState(false);
  const [dragFieldKey, setDragFieldKey] = useState<string | null>(null);
  const [formFieldConfigByFormId, setFormFieldConfigByFormId] = useState<Record<string, ConfiguredField[]>>({});
  const [newFormName, setNewFormName] = useState("");
  const [objectSearch, setObjectSearch] = useState("");
  const [selectedObjectId, setSelectedObjectId] = useState<string>(SOURCE_TABS[0]?.id ?? "");
  const [selectedObjectFieldKeys, setSelectedObjectFieldKeys] = useState<string[]>([]);
  const [draftFields, setDraftFields] = useState<FormField[]>([]);
  const [linkSourceFormId, setLinkSourceFormId] = useState("");
  const [linkTargetFormId, setLinkTargetFormId] = useState("");

  useEffect(() => {
    getGraph()
      .then(({ graph: g, etag: e, mock }) => {
        const fresh = toEmptyWorkspaceGraph(g);
        setGraph(fresh);
        setEtag(e);
        setMockMode(mock);
        setSelectedFormId(fresh.forms[0]?.id ?? null);
      })
      .catch((err: Error) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!graph) return;
    setFormFieldConfigByFormId((prev) => {
      const next = { ...prev };
      graph.forms.forEach((form) => {
        const baseFields = extractFormFields(form);
        const existing = next[form.id];
        const persisted = getPersistedUiFields(graph, form.id);
        const persistedByKey = new Map(persisted.map((field) => [field.key, field]));
        const persistedOrder = persisted.map((field) => field.key);
        const mappedKeys = new Set(Object.keys(form.default_input_mapping ?? {}));
        if (!existing) {
          const merged = baseFields.map((field) => ({
            ...field,
            required: persistedByKey.get(field.key)?.required ?? false,
            prefillEnabled: persistedByKey.get(field.key)?.prefillEnabled ?? mappedKeys.has(field.key)
          }));
          next[form.id] = applyPersistedOrder(merged, persistedOrder);
          return;
        }
        const byKey = new Map(existing.map((field) => [field.key, field]));
        const merged = baseFields.map((field) => {
          const found = byKey.get(field.key);
          if (!found) {
            return {
              ...field,
              required: persistedByKey.get(field.key)?.required ?? false,
              prefillEnabled: persistedByKey.get(field.key)?.prefillEnabled ?? mappedKeys.has(field.key)
            };
          }
          const persistedField = persistedByKey.get(field.key);
          return {
            ...found,
            label: field.label,
            type: field.type,
            required: persistedField?.required ?? found.required,
            prefillEnabled: persistedField?.prefillEnabled ?? found.prefillEnabled
          };
        });
        next[form.id] = applyPersistedOrder(merged, persistedOrder);
      });
      return next;
    });
  }, [graph]);

  useEffect(() => {
    if (!graph) return;
    if (!selectedFormId && graph.forms.length > 0) {
      setSelectedFormId(graph.forms[0].id);
      return;
    }
    if (selectedFormId && !graph.forms.some((form) => form.id === selectedFormId)) {
      setSelectedFormId(graph.forms[0]?.id ?? null);
    }
  }, [graph, selectedFormId]);

  const selectedForm = useMemo(() => graph?.forms.find((f) => f.id === selectedFormId) ?? null, [graph, selectedFormId]);
  const filteredTabs = useMemo(() => {
    const term = objectSearch.trim().toLowerCase();
    if (!term) return SOURCE_TABS;
    return SOURCE_TABS.filter((tab) => tab.label.toLowerCase().includes(term));
  }, [objectSearch]);
  const selectedTab = useMemo(() => SOURCE_TABS.find((tab) => tab.id === selectedObjectId) ?? null, [selectedObjectId]);
  const mappings = useMemo(() => (graph && selectedFormId ? getEffectiveMappings(graph, selectedFormId) : []), [graph, selectedFormId]);
  const configuredFields = useMemo(() => {
    if (!selectedForm) return [];
    return formFieldConfigByFormId[selectedForm.id] ?? extractFormFields(selectedForm).map((field) => ({ ...field, required: false, prefillEnabled: false }));
  }, [selectedForm, formFieldConfigByFormId]);
  const candidates = useMemo(() => {
    if (!graph || !selectedFormId || !editingField) return [];
    const targetField = configuredFields.find((field) => field.key === editingField);
    const activeProviders = includeGlobalSource ? providers : providers.filter((provider) => provider.id !== "global-account-financial");
    return activeProviders
      .flatMap((p) => p.listCandidates(graph, selectedFormId))
      .filter((candidate) => !targetField || isCandidateCompatible(targetField.type, candidate));
  }, [graph, selectedFormId, editingField, configuredFields, includeGlobalSource]);

  if (!graph) return <main className="container">{error ? `Error: ${error}` : "Loading graph..."}</main>;

  async function onSave(next: ActionBlueprintGraph) {
    setSaving(true);
    setSaveWarning(null);
    setGraph(next);
    try {
      await putGraph(next, etag);
    } catch (err) {
      setSaveWarning(`Remote save failed, continuing locally: ${(err as Error).message}`);
    } finally {
      setSaving(false);
    }
  }

  function applyCandidate(candidate: PrefillCandidate) {
    if (!graph || !selectedFormId || !editingField) return;
    const entry: DlInputEntry = {
      source: candidate.sourceRef,
      type: "dl_object_enum_v1"
    };
    void onSave(setMapping(graph, selectedFormId, editingField, entry));
    setEditingField(null);
  }

  function updateFieldConfig(formId: string, fieldKey: string, updater: (current: ConfiguredField) => ConfiguredField) {
    setFormFieldConfigByFormId((prev) => {
      const updated = (prev[formId] ?? []).map((field) => (field.key === fieldKey ? updater(field) : field));
      if (graph) {
        void onSave(setPersistedUiFields(graph, formId, updated.map(toPersistedUiField)));
      }
      return { ...prev, [formId]: updated };
    });
  }

  function reorderConfiguredFields(formId: string, sourceKey: string, targetKey: string) {
    setFormFieldConfigByFormId((prev) => {
      const current = [...(prev[formId] ?? [])];
      const sourceIndex = current.findIndex((item) => item.key === sourceKey);
      const targetIndex = current.findIndex((item) => item.key === targetKey);
      if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) return prev;
      const [moved] = current.splice(sourceIndex, 1);
      current.splice(targetIndex, 0, moved);
      if (graph) {
        void onSave(setPersistedUiFields(graph, formId, current.map(toPersistedUiField)));
      }
      return { ...prev, [formId]: current };
    });
  }

  function getNodeIdByFormId(formId: string): string | null {
    const node = graph?.nodes.find((item) => item.data.component_id === formId);
    return node?.id ?? null;
  }

  function createForm() {
    if (!graph) return;
    const name = newFormName.trim();
    if (!name) {
      setError("Form name is required.");
      return;
    }
    const pendingSelected = selectedTab?.fields.filter((field) => selectedObjectFieldKeys.includes(field.key)) ?? [];
    const finalDraftFields = draftFields.length > 0 ? draftFields : pendingSelected;

    if (finalDraftFields.length === 0) {
      setError("Select at least one field from an object before creating a form.");
      return;
    }

    const stamp = Date.now().toString(36);
    const slug = slugify(name);
    const formId = `f_${slug}_${stamp}`;
    const nodeId = `form-${slug}-${stamp}`;
    const fieldProps = Object.fromEntries(finalDraftFields.map((field) => [field.key, { title: field.label, type: field.type }]));

    const next: ActionBlueprintGraph = {
      ...graph,
      forms: [
        ...graph.forms,
        {
          id: formId,
          name,
          field_schema: { properties: fieldProps },
          default_input_mapping: {}
        }
      ],
      nodes: [
        ...graph.nodes,
        {
          id: nodeId,
          type: "form",
          data: {
            component_id: formId,
            component_key: nodeId,
            component_type: "form",
            dl_input_mapping: {}
          }
        }
      ]
    };

    setSelectedFormId(formId);
    setLinkSourceFormId((prev) => prev || formId);
    setLinkTargetFormId((prev) => prev || formId);
    setNewFormName("");
    setDraftFields([]);
    setSelectedObjectFieldKeys([]);
    setError(null);
    void onSave(next);
  }

  function addSelectedObjectFieldsToDraft() {
    if (!selectedTab) return;
    const selected = selectedTab.fields.filter((field) => selectedObjectFieldKeys.includes(field.key));
    if (selected.length === 0) return;
    setDraftFields((prev) => {
      const byKey = new Map(prev.map((field) => [field.key, field]));
      selected.forEach((field) =>
        byKey.set(`${selectedTab.id}.${field.key}`, {
          key: `${selectedTab.id}.${field.key}`,
          label: `${selectedTab.label} :: ${field.label}`,
          type: field.type
        })
      );
      return Array.from(byKey.values());
    });
    setSelectedObjectFieldKeys([]);
  }

  function removeDraftField(fieldKey: string) {
    setDraftFields((prev) => prev.filter((field) => field.key !== fieldKey));
  }

  function createLink() {
    if (!graph) return;
    if (!linkSourceFormId || !linkTargetFormId) {
      setError("Select both source and target forms to create a link.");
      return;
    }
    if (linkSourceFormId === linkTargetFormId) {
      setError("Source and target forms must be different.");
      return;
    }
    const sourceNodeId = getNodeIdByFormId(linkSourceFormId);
    const targetNodeId = getNodeIdByFormId(linkTargetFormId);
    if (!sourceNodeId || !targetNodeId) {
      setError("Could not resolve node IDs for selected forms.");
      return;
    }
    const exists = graph.edges.some((edge) => edge.source === sourceNodeId && edge.target === targetNodeId);
    if (exists) {
      setError("This link already exists.");
      return;
    }
    const next = { ...graph, edges: [...graph.edges, { source: sourceNodeId, target: targetNodeId }] };
    setError(null);
    void onSave(next);
  }

  function deleteSelectedForm() {
    if (!graph || !selectedFormId) return;
    const nodeId = getNodeIdByFormId(selectedFormId);
    const nextForms = graph.forms.filter((form) => form.id !== selectedFormId);
    const nextNodes = graph.nodes.filter((node) => node.data.component_id !== selectedFormId);
    const nextEdges = nodeId
      ? graph.edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId)
      : graph.edges;

    const nextGraph: ActionBlueprintGraph = {
      ...graph,
      forms: nextForms,
      nodes: nextNodes,
      edges: nextEdges
    };

    setFormFieldConfigByFormId((prev) => {
      const copy = { ...prev };
      delete copy[selectedFormId];
      return copy;
    });

    setLinkSourceFormId((prev) => (prev === selectedFormId ? "" : prev));
    setLinkTargetFormId((prev) => (prev === selectedFormId ? "" : prev));
    setSelectedFormId(nextForms[0]?.id ?? null);
    setError(null);
    void onSave(nextGraph);
  }

  return (
    <main className="container">
      <header className="header">
        <h1>Journey Builder Prefill Mapper</h1>
        <p>{graph.blueprint_name}</p>
        {mockMode ? <small>Running in local mock mode (no API env configured).</small> : null}
        {saveWarning ? <p className="warnLine">{saveWarning}</p> : null}
        {error ? <p className="errorLine">{error}</p> : null}
      </header>

      <section className="layout">
        <aside className="panel">
          <h2>Forms</h2>
          {graph.forms.map((form) => (
            <button
              key={form.id}
              className={selectedFormId === form.id ? "row selected" : "row"}
              onClick={() => setSelectedFormId(form.id)}
            >
              {form.name}
            </button>
          ))}
          <button className="clearBtn" onClick={deleteSelectedForm} disabled={!selectedFormId}>
            Delete Selected Form
          </button>

          <h3>Create Form</h3>
          <label className="formRow">
            <span>Form Name</span>
            <input value={newFormName} onChange={(e) => setNewFormName(e.target.value)} placeholder="Form E" />
          </label>
          <label className="formRow">
            <span>Find Source Tab</span>
            <input value={objectSearch} onChange={(e) => setObjectSearch(e.target.value)} placeholder="Search schemas/operations..." />
          </label>
          <label className="formRow">
            <span>Source Object</span>
            <select value={selectedObjectId} onChange={(e) => setSelectedObjectId(e.target.value)}>
              {filteredTabs.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <div className="toolbar">
            <button
              className="closeBtn"
              onClick={() => {
                const all = (selectedTab?.fields ?? []).map((field) => field.key);
                setSelectedObjectFieldKeys(all);
              }}
            >
              Select All
            </button>
            <button className="clearBtn" onClick={() => setSelectedObjectFieldKeys([])}>
              Clear Selection
            </button>
          </div>
          <div className="mappingValue">
            {(selectedTab?.fields ?? []).map((field) => (
              <label key={field.key} className="checkRow">
                <input
                  type="checkbox"
                  checked={selectedObjectFieldKeys.includes(field.key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedObjectFieldKeys((prev) => [...prev, field.key]);
                    } else {
                      setSelectedObjectFieldKeys((prev) => prev.filter((key) => key !== field.key));
                    }
                  }}
                />
                {field.label} [{field.type}]
              </label>
            ))}
          </div>
          <button className="closeBtn" onClick={addSelectedObjectFieldsToDraft}>
            Add Selected Fields
          </button>
          <div className="mappingValue">
            {draftFields.length === 0
              ? "No fields selected yet."
              : draftFields.map((field) => `${field.key}:${field.type}`).join("\n")}
          </div>
          {draftFields.map((field) => (
            <button key={field.key} className="clearBtn" onClick={() => removeDraftField(field.key)}>
              Remove {field.key}
            </button>
          ))}
          <button className="closeBtn" onClick={createForm}>
            Add Form
          </button>

          <h3>Link Forms</h3>
          <label className="formRow">
            <span>Source (Parent)</span>
            <select value={linkSourceFormId} onChange={(e) => setLinkSourceFormId(e.target.value)}>
              <option value="">Select form</option>
              {graph.forms.map((form) => (
                <option key={form.id} value={form.id}>
                  {form.name}
                </option>
              ))}
            </select>
          </label>
          <label className="formRow">
            <span>Target (Child)</span>
            <select value={linkTargetFormId} onChange={(e) => setLinkTargetFormId(e.target.value)}>
              <option value="">Select form</option>
              {graph.forms.map((form) => (
                <option key={form.id} value={form.id}>
                  {form.name}
                </option>
              ))}
            </select>
          </label>
          <button className="closeBtn" onClick={createLink}>
            Add Link
          </button>
        </aside>

        <section className="panel">
          <h2>Design Whiteboard</h2>
          {graph.forms.length === 0 ? (
            <p>No forms yet. Create your first form on the left.</p>
          ) : (
            <div className="whiteboardGrid">
              {graph.forms.map((form) => (
                <button
                  key={form.id}
                  className={selectedFormId === form.id ? "row selected" : "row"}
                  onClick={() => setSelectedFormId(form.id)}
                >
                  <strong>{form.name}</strong>
                </button>
              ))}
            </div>
          )}

          <h3>Current Relations</h3>
          <div className="mappingValue">
            {graph.edges.length === 0
              ? "No links yet."
              : graph.edges
                  .map((edge) => `${resolveFormNameByNodeId(graph, edge.source)} -> ${resolveFormNameByNodeId(graph, edge.target)}`)
                  .join("\n")}
          </div>

          <h2>Prefill Mapping</h2>
          <label className="checkRow">
            <input type="checkbox" checked={includeGlobalSource} onChange={(e) => setIncludeGlobalSource(e.target.checked)} />
            Include Global Source Options
          </label>
          {selectedForm ? (
            <>
              {configuredFields.map((field) => {
                const mapped = mappings.find((m) => m.targetField === field.key);
                const active = mapped?.nodeMapping ?? (mapped?.formMapping ? { source: mapped.formMapping, type: "fallback" } : undefined);
                return (
                  <div
                    key={field.key}
                    className="mappingRow"
                    draggable
                    onDragStart={() => setDragFieldKey(field.key)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (!selectedForm || !dragFieldKey) return;
                      reorderConfiguredFields(selectedForm.id, dragFieldKey, field.key);
                      setDragFieldKey(null);
                    }}
                  >
                    <div className="fieldBtn">
                      <div className="fieldTitle">
                        {field.label} <small>[{field.type}]</small>
                      </div>
                      <div className="fieldMeta">
                        <label>
                          <input
                            type="checkbox"
                            checked={field.required}
                            onChange={(e) =>
                              updateFieldConfig(selectedForm.id, field.key, (current) => ({ ...current, required: e.target.checked }))
                            }
                          />
                          Required
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={field.prefillEnabled}
                            onChange={(e) => {
                              const enabled = e.target.checked;
                              updateFieldConfig(selectedForm.id, field.key, (current) => ({ ...current, prefillEnabled: enabled }));
                              if (!enabled && graph) {
                                void onSave(clearMapping(graph, selectedForm.id, field.key));
                              }
                            }}
                          />
                          Prefill
                        </label>
                      </div>
                    </div>
                    <div className="mappingValue">{active ? JSON.stringify(active.source) : "Not configured"}</div>
                    <button className="closeBtn" onClick={() => field.prefillEnabled && setEditingField(field.key)} disabled={!field.prefillEnabled}>
                      Map
                    </button>
                    <button className="clearBtn" onClick={() => void onSave(clearMapping(graph, selectedForm.id, field.key))} disabled={!active}>
                      X
                    </button>
                  </div>
                );
              })}

            </>
          ) : (
            <p>Select a form to continue.</p>
          )}
        </section>
      </section>

      {editingField ? (
        <section className="modal">
          <div className="modalCard">
            <h3>Select Prefill Source for `{editingField}`</h3>
            {candidates.length === 0 ? <p>No eligible prefill source yet. Add links first, or enable global source.</p> : null}
            {groupCandidates(candidates).map(([group, items]) => (
              <div key={group} className="group">
                <h4>{group}</h4>
                {items.map((c) => (
                  <button key={c.id} className="candidate" onClick={() => applyCandidate(c)}>
                    {c.label}
                  </button>
                ))}
              </div>
            ))}
            <button className="closeBtn" onClick={() => setEditingField(null)}>
              Close
            </button>
          </div>
        </section>
      ) : null}

      {saving ? <footer className="footer">Saving...</footer> : null}
    </main>
  );
}

function groupCandidates(candidates: PrefillCandidate[]): [string, PrefillCandidate[]][] {
  const grouped = new Map<string, PrefillCandidate[]>();
  candidates.forEach((c) => {
    const current = grouped.get(c.groupLabel) ?? [];
    current.push(c);
    grouped.set(c.groupLabel, current);
  });
  return Array.from(grouped.entries());
}

function isCandidateCompatible(fieldType: string, candidate: PrefillCandidate): boolean {
  const sourceType = String(candidate.sourceRef?.type ?? "");
  if (!sourceType) return true;
  if (fieldType === "number" && (sourceType === "number" || sourceType === "integer")) return true;
  return fieldType === sourceType;
}

function toPersistedUiField(field: ConfiguredField) {
  return {
    key: field.key,
    required: field.required,
    prefillEnabled: field.prefillEnabled
  };
}

function applyPersistedOrder(fields: ConfiguredField[], persistedOrder: string[]): ConfiguredField[] {
  if (persistedOrder.length === 0) return fields;
  const byKey = new Map(fields.map((field) => [field.key, field]));
  const ordered: ConfiguredField[] = [];
  persistedOrder.forEach((key) => {
    const found = byKey.get(key);
    if (found) {
      ordered.push(found);
      byKey.delete(key);
    }
  });
  return [...ordered, ...Array.from(byKey.values())];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "form";
}

function toEmptyWorkspaceGraph(graph: ActionBlueprintGraph): ActionBlueprintGraph {
  return {
    ...graph,
    forms: [],
    nodes: [],
    edges: []
  };
}

function resolveFormNameByNodeId(graph: ActionBlueprintGraph, nodeId: string): string {
  const node = graph.nodes.find((item) => item.id === nodeId);
  const formId = node?.data.component_id;
  const form = graph.forms.find((item) => item.id === formId);
  return form?.name ?? nodeId;
}
