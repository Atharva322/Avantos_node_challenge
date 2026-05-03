import { useEffect, useMemo, useState } from "react";
import { ActionBlueprintGraph, FormField } from "./types";
import { getGraph, putGraph } from "./api";
import { buildGraphContext, extractFormFields, getDirectUpstreamNodeIds, getTransitiveUpstreamNodeIds } from "./graph";
import {
  clearMapping,
  getEffectiveMappings,
  getPersistedFormPrefillEnabled,
  getPersistedUiFields,
  setPersistedFormPrefillEnabled,
  setPersistedUiFields
} from "./mappings";
import { SOURCE_MODE, SOURCE_TABS } from "./sourceCatalog";

type ConfiguredField = FormField & {
  required: boolean;
};

type WorkflowDesign = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt?: string;
  graph: ActionBlueprintGraph;
  fieldConfig: Record<string, ConfiguredField[]>;
  formPrefillEnabled: Record<string, boolean>;
};

const WORKFLOW_STORAGE_KEY = "jb_saved_workflows_v1";

export function App() {
  const [graph, setGraph] = useState<ActionBlueprintGraph | null>(null);
  const [etag, setEtag] = useState<string | undefined>();
  const [mockMode, setMockMode] = useState(false);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveWarning, setSaveWarning] = useState<string | null>(null);
  const [patternStatus, setPatternStatus] = useState<"draft" | "saved">("draft");
  const [dragFieldKey, setDragFieldKey] = useState<string | null>(null);
  const [formFieldConfigByFormId, setFormFieldConfigByFormId] = useState<Record<string, ConfiguredField[]>>({});
  const [formPrefillEnabledByFormId, setFormPrefillEnabledByFormId] = useState<Record<string, boolean>>({});
  const [formValuesByFormId, setFormValuesByFormId] = useState<Record<string, Record<string, string>>>({});
  const [formValidationByFormId, setFormValidationByFormId] = useState<Record<string, string[]>>({});
  const [submittedFormIds, setSubmittedFormIds] = useState<Record<string, boolean>>({});
  const [selectedFormEditName, setSelectedFormEditName] = useState("");
  const [newFormName, setNewFormName] = useState("");
  const [workflowName, setWorkflowName] = useState("Untitled Workflow");
  const [savedWorkflows, setSavedWorkflows] = useState<WorkflowDesign[]>([]);
  const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);
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
    try {
      const raw = localStorage.getItem(WORKFLOW_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as WorkflowDesign[];
      if (Array.isArray(parsed)) setSavedWorkflows(parsed);
    } catch {
      // Ignore malformed saved state
    }
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
        if (!existing) {
          const merged = baseFields.map((field) => ({
            ...field,
            required: persistedByKey.get(field.key)?.required ?? false
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
              required: persistedByKey.get(field.key)?.required ?? false
            };
          }
          const persistedField = persistedByKey.get(field.key);
          return {
            ...found,
            label: field.label,
            type: field.type,
            required: persistedField?.required ?? found.required
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

  useEffect(() => {
    if (!graph) return;
    setFormPrefillEnabledByFormId((prev) => {
      const next = { ...prev };
      graph.forms.forEach((form) => {
        if (typeof next[form.id] === "boolean") return;
        next[form.id] = getPersistedFormPrefillEnabled(graph, form.id);
      });
      return next;
    });
  }, [graph]);

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
    return formFieldConfigByFormId[selectedForm.id] ?? extractFormFields(selectedForm).map((field) => ({ ...field, required: false }));
  }, [selectedForm, formFieldConfigByFormId]);
  const ancestorCandidates = useMemo(() => {
    if (!graph || !selectedFormId) return [];
    return getAncestorForms(graph, selectedFormId);
  }, [graph, selectedFormId]);

  useEffect(() => {
    setSelectedFormEditName(selectedForm?.name ?? "");
  }, [selectedForm?.id, selectedForm?.name]);

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

  function savePattern() {
    setPatternStatus("saved");
    setFormValidationByFormId({});
    persistWorkflowDesign({ asNew: false });
  }

  function unlockPattern() {
    setPatternStatus("draft");
    setFormValuesByFormId({});
    setFormValidationByFormId({});
    setSubmittedFormIds({});
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

  function setFormPrefillEnabled(formId: string, enabled: boolean) {
    setFormPrefillEnabledByFormId((prev) => ({ ...prev, [formId]: enabled }));
    if (graph) void onSave(setPersistedFormPrefillEnabled(graph, formId, enabled));
    if (enabled) {
      autoPrefillFromAncestors(formId);
    }
  }

  function updateSelectedFormDefinition(updater: (form: NonNullable<typeof selectedForm>) => NonNullable<typeof selectedForm>) {
    if (!graph || !selectedForm) return;
    const nextForms = graph.forms.map((f) => (f.id === selectedForm.id ? updater(selectedForm) : f));
    void onSave({ ...graph, forms: nextForms });
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

  function updateSelectedFormName() {
    if (!selectedForm) return;
    const name = selectedFormEditName.trim();
    if (!name) {
      setError("Form name cannot be empty.");
      return;
    }
    updateSelectedFormDefinition((form) => ({ ...form, name }));
    setError(null);
  }

  function addDraftFieldsToSelectedForm() {
    if (!selectedForm || !draftFields.length) return;
    updateSelectedFormDefinition((form) => {
      const current = form.field_schema?.properties ?? {};
      const nextProps = { ...current };
      draftFields.forEach((f) => {
        nextProps[f.key] = { title: f.label, type: f.type };
      });
      return { ...form, field_schema: { properties: nextProps } };
    });
    setDraftFields([]);
    setSelectedObjectFieldKeys([]);
  }

  function removeFieldFromSelectedForm(fieldKey: string) {
    if (!selectedForm || !graph) return;
    const nextConfigured = (formFieldConfigByFormId[selectedForm.id] ?? []).filter((f) => f.key !== fieldKey);
    const nextForms = graph.forms.map((f) => {
      if (f.id !== selectedForm.id) return f;
      const current = { ...(f.field_schema?.properties ?? {}) };
      delete current[fieldKey];
      return { ...f, field_schema: { properties: current } };
    });
    let nextGraph = { ...graph, forms: nextForms };
    nextGraph = clearMapping(nextGraph, selectedForm.id, fieldKey);
    nextGraph = setPersistedUiFields(nextGraph, selectedForm.id, nextConfigured.map(toPersistedUiField));
    setFormFieldConfigByFormId((prev) => ({ ...prev, [selectedForm.id]: nextConfigured }));
    setFormValuesByFormId((prev) => {
      const values = { ...(prev[selectedForm.id] ?? {}) };
      delete values[fieldKey];
      return { ...prev, [selectedForm.id]: values };
    });
    setFormValidationByFormId((prev) => ({ ...prev, [selectedForm.id]: [] }));
    void onSave(nextGraph);
  }

  function removeLink(sourceFormId: string, targetFormId: string) {
    if (!graph) return;
    const sourceNodeId = getNodeIdByFormId(sourceFormId);
    const targetNodeId = getNodeIdByFormId(targetFormId);
    if (!sourceNodeId || !targetNodeId) return;
    const nextEdges = graph.edges.filter((e) => !(e.source === sourceNodeId && e.target === targetNodeId));
    void onSave({ ...graph, edges: nextEdges });
  }

  function autoPrefillFromAncestors(formId: string) {
    if (!graph) return;
    const ancestors = getAncestorForms(graph, formId).filter((ancestor) => submittedFormIds[ancestor.form.id]);
    if (ancestors.length === 0) return;
    const targetForm = graph.forms.find((f) => f.id === formId);
    if (!targetForm) return;
    const targets = formFieldConfigByFormId[formId] ?? extractFormFields(targetForm).map((field) => ({ ...field, required: false }));
    const targetTypes = new Map(targets.map((f) => [f.key, f.type]));

    setFormValuesByFormId((prev) => {
      const current = { ...(prev[formId] ?? {}) };
      for (const ancestor of ancestors) {
        const sourceFields = extractFormFields(ancestor.form);
        const sourceTypes = new Map(sourceFields.map((f) => [f.key, f.type]));
        const sourceValues = prev[ancestor.form.id] ?? {};
        for (const [fieldKey, targetType] of targetTypes.entries()) {
          if (String(current[fieldKey] ?? "").trim() !== "") continue;
          const sourceType = sourceTypes.get(fieldKey);
          if (!sourceType || !isTypeCompatible(targetType, sourceType)) continue;
          const sourceVal = sourceValues[fieldKey];
          if (typeof sourceVal === "string" && sourceVal.trim() !== "") {
            current[fieldKey] = sourceVal;
          }
        }
      }
      return { ...prev, [formId]: current };
    });
    setFormValidationByFormId((prev) => ({ ...prev, [formId]: [] }));
  }

  function submitCurrentFormData() {
    if (!selectedFormId) return;
    const values = formValuesByFormId[selectedFormId] ?? {};
    const missing = configuredFields
      .filter((f) => f.required)
      .filter((f) => !String(values[f.key] ?? "").trim())
      .map((f) => `${f.label} is required`);
    if (missing.length) {
      setFormValidationByFormId((prev) => ({ ...prev, [selectedFormId]: missing }));
      return;
    }
    setFormValidationByFormId((prev) => ({ ...prev, [selectedFormId]: [] }));
    setSubmittedFormIds((prev) => ({ ...prev, [selectedFormId]: true }));
  }

  function updateCurrentFormValue(fieldKey: string, value: string) {
    if (!selectedFormId) return;
    setFormValuesByFormId((prev) => ({
      ...prev,
      [selectedFormId]: {
        ...(prev[selectedFormId] ?? {}),
        [fieldKey]: value
      }
    }));
  }

  function currentFormErrors() {
    if (!selectedFormId) return [];
    return formValidationByFormId[selectedFormId] ?? [];
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

  function persistWorkflowDesign(options?: { asNew?: boolean }) {
    if (!graph) return;
    const asNew = Boolean(options?.asNew);
    const now = new Date().toISOString();
    const currentName = workflowName.trim() || "Untitled Workflow";
    const nextId = asNew || !activeWorkflowId ? `wf_${Date.now().toString(36)}` : activeWorkflowId;
    const design: WorkflowDesign = {
      id: nextId,
      name: currentName,
      createdAt: now,
      updatedAt: now,
      graph,
      fieldConfig: formFieldConfigByFormId,
      formPrefillEnabled: formPrefillEnabledByFormId
    };
    setSavedWorkflows((prev) => {
      const existing = prev.find((item) => item.id === design.id);
      const next = existing
        ? prev.map((item) => (item.id === design.id ? { ...design, createdAt: item.createdAt } : item))
        : [design, ...prev];
      localStorage.setItem(WORKFLOW_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
    setActiveWorkflowId(nextId);
  }

  function loadWorkflowDesign(designId: string) {
    const found = savedWorkflows.find((d) => d.id === designId);
    if (!found) return;
    setGraph(found.graph);
    setFormFieldConfigByFormId(found.fieldConfig ?? {});
    setFormPrefillEnabledByFormId(found.formPrefillEnabled ?? {});
    setSelectedFormId(found.graph.forms[0]?.id ?? null);
    setWorkflowName(found.name);
    setActiveWorkflowId(found.id);
    setPatternStatus("draft");
    setFormValuesByFormId({});
    setFormValidationByFormId({});
    setSubmittedFormIds({});
  }

  function deleteWorkflowDesign(designId: string) {
    setSavedWorkflows((prev) => {
      const next = prev.filter((d) => d.id !== designId);
      localStorage.setItem(WORKFLOW_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
    if (activeWorkflowId === designId) {
      setActiveWorkflowId(null);
      setWorkflowName("Untitled Workflow");
    }
  }

  function startNewWorkflowDesign() {
    if (!graph) return;
    setActiveWorkflowId(null);
    setWorkflowName("Untitled Workflow");
    setPatternStatus("draft");
    setFormValuesByFormId({});
    setFormValidationByFormId({});
    setSubmittedFormIds({});
    const empty = toEmptyWorkspaceGraph(graph);
    setGraph(empty);
    setFormFieldConfigByFormId({});
    setFormPrefillEnabledByFormId({});
    setSelectedFormId(null);
    setLinkSourceFormId("");
    setLinkTargetFormId("");
    setDraftFields([]);
    setSelectedObjectFieldKeys([]);
    setError(null);
  }

  return (
    <main className="container">
      <header className="header">
        <h1>Journey Builder Prefill Mapper</h1>
        <p>{graph.blueprint_name}</p>
        <p className="sourceModeLine">Pattern Status: {patternStatus === "draft" ? "Draft (Design Mode)" : "Saved (Run Mode)"}</p>
        <div className="toolbar">
          {patternStatus === "draft" ? (
            <button className="closeBtn" onClick={savePattern}>
              Save Pattern
            </button>
          ) : (
            <button className="clearBtn" onClick={unlockPattern}>
              Unlock Pattern
            </button>
          )}
        </div>
        {mockMode ? <small>Running in local mock mode (no API env configured).</small> : null}
        {saveWarning ? <p className="warnLine">{saveWarning}</p> : null}
        {error ? <p className="errorLine">{error}</p> : null}
      </header>

      <section className="layout">
        <aside className="panel">
          <h2>Form Workflow Designs</h2>
          <label className="formRow">
            <span>Workflow Name</span>
            <input value={workflowName} onChange={(e) => setWorkflowName(e.target.value)} placeholder="My Workflow Pattern" />
          </label>
          <button className="closeBtn" onClick={() => persistWorkflowDesign()}>
            Save Workflow Design
          </button>
          <button className="clearBtn" onClick={() => persistWorkflowDesign({ asNew: true })}>
            Save As New
          </button>
          <button className="clearBtn" onClick={startNewWorkflowDesign}>
            New Workflow Design
          </button>
          <p className="sourceModeLine">{activeWorkflowId ? `Active Design ID: ${activeWorkflowId}` : "No active saved design loaded."}</p>
          <div className="mappingValue">
            {savedWorkflows.length === 0 ? "No saved workflow designs yet." : ""}
            {savedWorkflows.map((wf) => (
              <div key={wf.id} className="toolbar">
                <span>
                  {wf.name} ({new Date(wf.updatedAt ?? wf.createdAt).toLocaleString()})
                </span>
                <button className="closeBtn" onClick={() => loadWorkflowDesign(wf.id)}>
                  Load
                </button>
                <button className="clearBtn" onClick={() => deleteWorkflowDesign(wf.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>

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
          <button className="clearBtn" onClick={deleteSelectedForm} disabled={!selectedFormId || patternStatus === "saved"}>
            Delete Selected Form
          </button>

          <h3>Edit Selected Form</h3>
          <label className="formRow">
            <span>Form Name</span>
            <input value={selectedFormEditName} onChange={(e) => setSelectedFormEditName(e.target.value)} placeholder="Edit selected form name" />
          </label>
          <button className="closeBtn" onClick={updateSelectedFormName} disabled={!selectedFormId || patternStatus === "saved"}>
            Update Form Name
          </button>

          <h3>Create Form</h3>
          <p className="sourceModeLine">Source Mode: {SOURCE_MODE}</p>
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
          {selectedTab?.warning ? <p className="warnLine">{selectedTab.warning}</p> : null}
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
          <button className="closeBtn" onClick={addSelectedObjectFieldsToDraft} disabled={patternStatus === "saved"}>
            Add Selected Fields
          </button>
          <div className="mappingValue">
            {draftFields.length === 0
              ? "No fields selected yet."
              : draftFields.map((field) => `${field.key}:${field.type}`).join("\n")}
          </div>
          {draftFields.map((field) => (
            <button key={field.key} className="clearBtn" onClick={() => removeDraftField(field.key)} disabled={patternStatus === "saved"}>
              Remove {field.key}
            </button>
          ))}
          <button className="closeBtn" onClick={addDraftFieldsToSelectedForm} disabled={!selectedFormId || draftFields.length === 0 || patternStatus === "saved"}>
            Add Draft Fields To Selected Form
          </button>
          <button className="closeBtn" onClick={createForm} disabled={patternStatus === "saved"}>
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
          <button className="closeBtn" onClick={createLink} disabled={patternStatus === "saved"}>
            Add Link
          </button>
          <button className="clearBtn" onClick={() => removeLink(linkSourceFormId, linkTargetFormId)} disabled={patternStatus === "saved" || !linkSourceFormId || !linkTargetFormId}>
            Delete Selected Link
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
              : graph.edges.map((edge) => {
                  const sourceName = resolveFormNameByNodeId(graph, edge.source);
                  const targetName = resolveFormNameByNodeId(graph, edge.target);
                  const sourceFormId = getFormIdByNodeId(graph, edge.source);
                  const targetFormId = getFormIdByNodeId(graph, edge.target);
                  return (
                    <div key={`${edge.source}:${edge.target}`} className="toolbar">
                      <span>
                        {sourceName} {"->"} {targetName}
                      </span>
                      <button
                        className="clearBtn"
                        onClick={() => sourceFormId && targetFormId && removeLink(sourceFormId, targetFormId)}
                        disabled={patternStatus === "saved"}
                      >
                        Delete Link
                      </button>
                    </div>
                  );
                })}
          </div>

          <h2>Prefill Mapping</h2>
          {selectedForm ? (
            <>
              {ancestorCandidates.length === 0 ? <p>No parent/ancestor form found, so prefill is unavailable.</p> : null}
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
                            disabled={patternStatus === "saved"}
                          />
                          Required
                        </label>
                      </div>
                    </div>
                    <div className="mappingValue">{active ? JSON.stringify(active.source) : "Not configured"}</div>
                    <button className="clearBtn" onClick={() => void onSave(clearMapping(graph, selectedForm.id, field.key))} disabled={!active || patternStatus === "saved"}>
                      X
                    </button>
                    <button className="clearBtn" onClick={() => removeFieldFromSelectedForm(field.key)} disabled={patternStatus === "saved"}>
                      Remove Field
                    </button>
                  </div>
                );
              })}

              {patternStatus === "saved" ? (
                <section className="prefillPanel">
                  <h3>Run Form Data</h3>
                  {ancestorCandidates.length > 0 ? (
                    <label className="checkRow">
                      <input
                        type="checkbox"
                        checked={Boolean(formPrefillEnabledByFormId[selectedForm.id])}
                        onChange={(e) => setFormPrefillEnabled(selectedForm.id, e.target.checked)}
                      />
                      Enable Prefill Suggestions For This Form
                    </label>
                  ) : null}
                  {configuredFields.map((field) => (
                    <label key={`runtime-${field.key}`} className="formRow">
                      <span>
                        {field.label} {field.required ? "*" : ""}
                      </span>
                      <input
                        value={formValuesByFormId[selectedForm.id]?.[field.key] ?? ""}
                        onChange={(e) => updateCurrentFormValue(field.key, e.target.value)}
                      />
                    </label>
                  ))}
                  <button className="closeBtn" onClick={submitCurrentFormData}>
                    Submit Form Data
                  </button>
                  {submittedFormIds[selectedForm.id] ? <p>Submitted for this form.</p> : null}
                  {currentFormErrors().length > 0 ? (
                    <div>
                      {currentFormErrors().map((err) => (
                        <div key={err} className="errorLine">
                          {err}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ) : (
                <p>Save Pattern to start collecting actual user data.</p>
              )}
            </>
          ) : (
            <p>Select a form to continue.</p>
          )}
        </section>
      </section>

      {saving ? <footer className="footer">Saving...</footer> : null}
    </main>
  );
}

function toPersistedUiField(field: ConfiguredField) {
  return {
    key: field.key,
    required: field.required
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

function getFormIdByNodeId(graph: ActionBlueprintGraph, nodeId: string): string | null {
  const node = graph.nodes.find((item) => item.id === nodeId);
  return node?.data.component_id ?? null;
}

function getAncestorForms(graph: ActionBlueprintGraph, formId: string): Array<{ form: { id: string; name: string; field_schema?: { properties?: Record<string, { title?: string; type?: string }> } }; nodeId: string }> {
  const ctx = buildGraphContext(graph);
  const nodeId = ctx.nodeIdByFormId[formId];
  if (!nodeId) return [];
  const direct = getDirectUpstreamNodeIds(nodeId, ctx);
  const transitive = getTransitiveUpstreamNodeIds(nodeId, ctx).filter((n) => !direct.includes(n));
  const orderedNodeIds = [...direct, ...transitive];
  return orderedNodeIds
    .map((n) => {
      const fId = ctx.formIdByNodeId[n];
      const form = fId ? ctx.formById[fId] : undefined;
      if (!form) return null;
      return { form, nodeId: n };
    })
    .filter((x): x is { form: { id: string; name: string; field_schema?: { properties?: Record<string, { title?: string; type?: string }> } }; nodeId: string } => Boolean(x));
}

function isTypeCompatible(targetType: string, sourceType: string): boolean {
  if (targetType === sourceType) return true;
  return targetType === "number" && sourceType === "integer";
}
