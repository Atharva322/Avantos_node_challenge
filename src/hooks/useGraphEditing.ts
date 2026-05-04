import { useEffect, useMemo, useState } from "react";
import { ActionBlueprintGraph, FormField } from "../types";
import { extractFormFields } from "../graph";
import { clearMapping, getPersistedUiFields, setPersistedUiFields } from "../mappings";
import { ConfiguredField } from "../appTypes";
import type { SourceTab } from "../sourceCatalog";

type UseGraphEditingArgs = {
  graph: ActionBlueprintGraph | null;
  selectedFormId: string | null;
  setSelectedFormId: (id: string | null) => void;
  onSave: (next: ActionBlueprintGraph) => void;
  setError: (message: string | null) => void;
  sourceTabs: SourceTab[];
};

export function useGraphEditing(args: UseGraphEditingArgs) {
  const { graph, selectedFormId, setSelectedFormId, onSave, setError, sourceTabs } = args;
  const [dragFieldKey, setDragFieldKey] = useState<string | null>(null);
  const [formFieldConfigByFormId, setFormFieldConfigByFormId] = useState<Record<string, ConfiguredField[]>>({});
  const [selectedFormEditName, setSelectedFormEditName] = useState("");
  const [newFormName, setNewFormName] = useState("");
  const [objectSearch, setObjectSearch] = useState("");
  const [selectedObjectId, setSelectedObjectId] = useState<string>(sourceTabs[0]?.id ?? "");
  const [selectedObjectFieldKeys, setSelectedObjectFieldKeys] = useState<string[]>([]);
  const [draftFields, setDraftFields] = useState<FormField[]>([]);
  const [linkSourceFormId, setLinkSourceFormId] = useState("");
  const [linkTargetFormId, setLinkTargetFormId] = useState("");

  const selectedForm = useMemo(() => graph?.forms.find((f) => f.id === selectedFormId) ?? null, [graph, selectedFormId]);
  const filteredTabs = useMemo(() => {
    const term = objectSearch.trim().toLowerCase();
    if (!term) return sourceTabs;
    return sourceTabs.filter((tab) => tab.label.toLowerCase().includes(term));
  }, [objectSearch, sourceTabs]);
  const selectedTab = useMemo(() => sourceTabs.find((tab) => tab.id === selectedObjectId) ?? null, [selectedObjectId, sourceTabs]);
  const configuredFields = useMemo(() => {
    if (!selectedForm) return [];
    return formFieldConfigByFormId[selectedForm.id] ?? extractFormFields(selectedForm).map((field) => ({ ...field, required: false }));
  }, [selectedForm, formFieldConfigByFormId]);

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
          const merged = baseFields.map((field) => ({ ...field, required: persistedByKey.get(field.key)?.required ?? false }));
          next[form.id] = applyPersistedOrder(merged, persistedOrder);
          return;
        }
        const byKey = new Map(existing.map((field) => [field.key, field]));
        const merged = baseFields.map((field) => {
          const found = byKey.get(field.key);
          if (!found) return { ...field, required: persistedByKey.get(field.key)?.required ?? false };
          const persistedField = persistedByKey.get(field.key);
          return { ...found, label: field.label, type: field.type, required: persistedField?.required ?? found.required };
        });
        next[form.id] = applyPersistedOrder(merged, persistedOrder);
      });
      return next;
    });
  }, [graph]);

  useEffect(() => {
    setSelectedFormEditName(selectedForm?.name ?? "");
  }, [selectedForm?.id, selectedForm?.name]);

  function updateFieldConfig(formId: string, fieldKey: string, updater: (current: ConfiguredField) => ConfiguredField) {
    setFormFieldConfigByFormId((prev) => {
      const updated = (prev[formId] ?? []).map((field) => (field.key === fieldKey ? updater(field) : field));
      if (graph) onSave(setPersistedUiFields(graph, formId, updated.map(toPersistedUiField)));
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
      if (graph) onSave(setPersistedUiFields(graph, formId, current.map(toPersistedUiField)));
      return { ...prev, [formId]: current };
    });
  }

  function updateSelectedFormDefinition(updater: (form: NonNullable<typeof selectedForm>) => NonNullable<typeof selectedForm>) {
    if (!graph || !selectedForm) return;
    const nextForms = graph.forms.map((f) => (f.id === selectedForm.id ? updater(selectedForm) : f));
    onSave({ ...graph, forms: nextForms });
  }

  function createForm() {
    if (!graph) return;
    const name = newFormName.trim();
    if (!name) return setError("Form name is required.");
    const pendingSelected = selectedTab?.fields.filter((field) => selectedObjectFieldKeys.includes(field.key)) ?? [];
    const finalDraftFields = draftFields.length > 0 ? draftFields : pendingSelected;
    if (finalDraftFields.length === 0) return setError("Select at least one field from an object before creating a form.");
    const stamp = Date.now().toString(36);
    const slug = slugify(name);
    const formId = `f_${slug}_${stamp}`;
    const nodeId = `form-${slug}-${stamp}`;
    const fieldProps = Object.fromEntries(finalDraftFields.map((field) => [field.key, { title: field.label, type: field.type }]));
    const next: ActionBlueprintGraph = {
      ...graph,
      forms: [...graph.forms, { id: formId, name, field_schema: { properties: fieldProps }, default_input_mapping: {} }],
      nodes: [
        ...graph.nodes,
        { id: nodeId, type: "form", data: { component_id: formId, component_key: nodeId, component_type: "form", dl_input_mapping: {} } }
      ]
    };
    setSelectedFormId(formId);
    setLinkSourceFormId((prev) => prev || formId);
    setLinkTargetFormId((prev) => prev || formId);
    setNewFormName("");
    setDraftFields([]);
    setSelectedObjectFieldKeys([]);
    setError(null);
    onSave(next);
  }

  function addSelectedObjectFieldsToDraft() {
    if (!selectedTab) return;
    const selected = selectedTab.fields.filter((field) => selectedObjectFieldKeys.includes(field.key));
    if (selected.length === 0) return;
    setDraftFields((prev) => {
      const byKey = new Map(prev.map((field) => [field.key, field]));
      selected.forEach((field) =>
        byKey.set(`${selectedTab.id}.${field.key}`, { key: `${selectedTab.id}.${field.key}`, label: `${selectedTab.label} :: ${field.label}`, type: field.type })
      );
      return Array.from(byKey.values());
    });
    setSelectedObjectFieldKeys([]);
  }

  function removeDraftField(fieldKey: string) {
    setDraftFields((prev) => prev.filter((field) => field.key !== fieldKey));
  }

  function updateSelectedFormName() {
    if (!selectedForm) return;
    const name = selectedFormEditName.trim();
    if (!name) return setError("Form name cannot be empty.");
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
    onSave(nextGraph);
  }

  function getNodeIdByFormId(formId: string): string | null {
    const node = graph?.nodes.find((item) => item.data.component_id === formId);
    return node?.id ?? null;
  }

  function createLink() {
    if (!graph) return;
    if (!linkSourceFormId || !linkTargetFormId) return setError("Select both source and target forms to create a link.");
    if (linkSourceFormId === linkTargetFormId) return setError("Source and target forms must be different.");
    const sourceNodeId = getNodeIdByFormId(linkSourceFormId);
    const targetNodeId = getNodeIdByFormId(linkTargetFormId);
    if (!sourceNodeId || !targetNodeId) return setError("Could not resolve node IDs for selected forms.");
    const exists = graph.edges.some((edge) => edge.source === sourceNodeId && edge.target === targetNodeId);
    if (exists) return setError("This link already exists.");
    const next = { ...graph, edges: [...graph.edges, { source: sourceNodeId, target: targetNodeId }] };
    setError(null);
    onSave(next);
  }

  function removeLink(sourceFormId: string, targetFormId: string) {
    if (!graph) return;
    const sourceNodeId = getNodeIdByFormId(sourceFormId);
    const targetNodeId = getNodeIdByFormId(targetFormId);
    if (!sourceNodeId || !targetNodeId) return;
    const nextEdges = graph.edges.filter((e) => !(e.source === sourceNodeId && e.target === targetNodeId));
    onSave({ ...graph, edges: nextEdges });
  }

  function clearFieldMapping(formId: string, fieldKey: string) {
    if (!graph) return;
    onSave(clearMapping(graph, formId, fieldKey));
  }

  function deleteSelectedForm() {
    if (!graph || !selectedFormId) return;
    const nodeId = getNodeIdByFormId(selectedFormId);
    const nextForms = graph.forms.filter((form) => form.id !== selectedFormId);
    const nextNodes = graph.nodes.filter((node) => node.data.component_id !== selectedFormId);
    const nextEdges = nodeId ? graph.edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId) : graph.edges;
    const nextGraph: ActionBlueprintGraph = { ...graph, forms: nextForms, nodes: nextNodes, edges: nextEdges };
    setFormFieldConfigByFormId((prev) => {
      const copy = { ...prev };
      delete copy[selectedFormId];
      return copy;
    });
    setLinkSourceFormId((prev) => (prev === selectedFormId ? "" : prev));
    setLinkTargetFormId((prev) => (prev === selectedFormId ? "" : prev));
    setSelectedFormId(nextForms[0]?.id ?? null);
    setError(null);
    onSave(nextGraph);
  }

  function resetDesignBuilderState() {
    setFormFieldConfigByFormId({});
    setSelectedFormId(null);
    setLinkSourceFormId("");
    setLinkTargetFormId("");
    setDraftFields([]);
    setSelectedObjectFieldKeys([]);
    setError(null);
  }

  return {
    dragFieldKey,
    setDragFieldKey,
    formFieldConfigByFormId,
    selectedFormEditName,
    setSelectedFormEditName,
    newFormName,
    setNewFormName,
    objectSearch,
    setObjectSearch,
    selectedObjectId,
    setSelectedObjectId,
    selectedObjectFieldKeys,
    setSelectedObjectFieldKeys,
    draftFields,
    linkSourceFormId,
    setLinkSourceFormId,
    linkTargetFormId,
    setLinkTargetFormId,
    selectedForm,
    filteredTabs,
    selectedTab,
    configuredFields,
    setFormFieldConfigByFormId,
    updateFieldConfig,
    reorderConfiguredFields,
    createForm,
    addSelectedObjectFieldsToDraft,
    removeDraftField,
    createLink,
    updateSelectedFormName,
    addDraftFieldsToSelectedForm,
    removeFieldFromSelectedForm,
    removeLink,
    clearFieldMapping,
    deleteSelectedForm,
    resetDesignBuilderState
  };
}

function toPersistedUiField(field: ConfiguredField) {
  return { key: field.key, required: field.required };
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
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "form"
  );
}
