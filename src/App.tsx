import { useEffect, useMemo, useState } from "react";
import { ActionBlueprintGraph } from "./types";
import { getGraph, putGraph } from "./api";
import { buildGraphContext, getDirectUpstreamNodeIds, getTransitiveUpstreamNodeIds } from "./graph";
import { getEffectiveMappings, getPersistedFormPrefillEnabled, setPersistedFormPrefillEnabled } from "./mappings";
import { SOURCE_TABS } from "./sourceCatalog";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightWorkspace } from "./components/RightWorkspace";
import { useWorkflowDesigns } from "./hooks/useWorkflowDesigns";
import { useFormRuntime } from "./hooks/useFormRuntime";
import { useGraphEditing } from "./hooks/useGraphEditing";

export function App() {
  const [graph, setGraph] = useState<ActionBlueprintGraph | null>(null);
  const [etag, setEtag] = useState<string | undefined>();
  const [mockMode, setMockMode] = useState(false);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveWarning, setSaveWarning] = useState<string | null>(null);
  const [patternStatus, setPatternStatus] = useState<"draft" | "saved">("draft");

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
    if (!selectedFormId && graph.forms.length > 0) {
      setSelectedFormId(graph.forms[0].id);
      return;
    }
    if (selectedFormId && !graph.forms.some((form) => form.id === selectedFormId)) {
      setSelectedFormId(graph.forms[0]?.id ?? null);
    }
  }, [graph, selectedFormId]);

  const editing = useGraphEditing({
    graph,
    selectedFormId,
    setSelectedFormId,
    onSave: (next) => void onSave(next),
    setError,
    sourceTabs: SOURCE_TABS
  });

  const mappings = useMemo(() => (graph && selectedFormId ? getEffectiveMappings(graph, selectedFormId) : []), [graph, selectedFormId]);
  const ancestorCandidates = useMemo(() => {
    if (!graph || !selectedFormId) return [];
    return getAncestorForms(graph, selectedFormId);
  }, [graph, selectedFormId]);

  const runtime = useFormRuntime({
    graph,
    selectedFormId,
    configuredFields: editing.configuredFields,
    getAncestorForms,
    persistFormPrefillEnabled: (formId, enabled) => {
      if (!graph) return;
      void onSave(setPersistedFormPrefillEnabled(graph, formId, enabled));
    }
  });

  useEffect(() => {
    if (!graph) return;
    const next: Record<string, boolean> = {};
    graph.forms.forEach((form) => {
      next[form.id] = getPersistedFormPrefillEnabled(graph, form.id);
    });
    runtime.hydratePrefillState(next);
  }, [graph]);

  const workflowDesigns = useWorkflowDesigns({
    graph,
    formFieldConfigByFormId: editing.formFieldConfigByFormId,
    formPrefillEnabledByFormId: runtime.formPrefillEnabledByFormId,
    setGraph,
    resetRuntimeState: runtime.resetRuntimeState,
    setPatternDraft: () => setPatternStatus("draft")
  });

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
    runtime.setFormValidationByFormId({});
    workflowDesigns.persistWorkflowDesign({ asNew: false });
  }

  function unlockPattern() {
    setPatternStatus("draft");
    runtime.resetRuntimeState();
  }

  function startNewWorkflowDesign() {
    if (!graph) return;
    workflowDesigns.clearActiveDesign();
    setPatternStatus("draft");
    runtime.resetRuntimeState();
    const empty = toEmptyWorkspaceGraph(graph);
    setGraph(empty);
    editing.resetDesignBuilderState();
    runtime.hydratePrefillState({});
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
        <LeftSidebar
          graph={graph}
          workflowName={workflowDesigns.workflowName}
          setWorkflowName={workflowDesigns.setWorkflowName}
          persistWorkflowDesign={workflowDesigns.persistWorkflowDesign}
          startNewWorkflowDesign={startNewWorkflowDesign}
          activeWorkflowId={workflowDesigns.activeWorkflowId}
          savedWorkflows={workflowDesigns.savedWorkflows}
          loadWorkflowDesign={(id) => {
            workflowDesigns.loadWorkflowDesign(id);
            const found = workflowDesigns.savedWorkflows.find((w) => w.id === id);
            if (!found) return;
            editing.setFormFieldConfigByFormId(found.fieldConfig ?? {});
            runtime.hydratePrefillState(found.formPrefillEnabled ?? {});
            setSelectedFormId(found.graph.forms[0]?.id ?? null);
          }}
          deleteWorkflowDesign={workflowDesigns.deleteWorkflowDesign}
          selectedFormId={selectedFormId}
          setSelectedFormId={setSelectedFormId}
          deleteSelectedForm={editing.deleteSelectedForm}
          patternStatus={patternStatus}
          selectedFormEditName={editing.selectedFormEditName}
          setSelectedFormEditName={editing.setSelectedFormEditName}
          updateSelectedFormName={editing.updateSelectedFormName}
          newFormName={editing.newFormName}
          setNewFormName={editing.setNewFormName}
          objectSearch={editing.objectSearch}
          setObjectSearch={editing.setObjectSearch}
          selectedObjectId={editing.selectedObjectId}
          setSelectedObjectId={editing.setSelectedObjectId}
          filteredTabs={editing.filteredTabs}
          selectedTab={editing.selectedTab}
          selectedObjectFieldKeys={editing.selectedObjectFieldKeys}
          setSelectedObjectFieldKeys={editing.setSelectedObjectFieldKeys}
          addSelectedObjectFieldsToDraft={editing.addSelectedObjectFieldsToDraft}
          draftFields={editing.draftFields}
          removeDraftField={editing.removeDraftField}
          addDraftFieldsToSelectedForm={editing.addDraftFieldsToSelectedForm}
          createForm={editing.createForm}
          linkSourceFormId={editing.linkSourceFormId}
          setLinkSourceFormId={editing.setLinkSourceFormId}
          linkTargetFormId={editing.linkTargetFormId}
          setLinkTargetFormId={editing.setLinkTargetFormId}
          createLink={editing.createLink}
          removeLink={editing.removeLink}
        />
        <RightWorkspace
          graph={graph}
          selectedFormId={selectedFormId}
          setSelectedFormId={setSelectedFormId}
          patternStatus={patternStatus}
          removeLink={editing.removeLink}
          resolveFormNameByNodeId={resolveFormNameByNodeId}
          getFormIdByNodeId={getFormIdByNodeId}
          selectedForm={editing.selectedForm}
          ancestorCandidates={ancestorCandidates}
          configuredFields={editing.configuredFields}
          mappings={mappings}
          dragFieldKey={editing.dragFieldKey}
          setDragFieldKey={editing.setDragFieldKey}
          reorderConfiguredFields={editing.reorderConfiguredFields}
          updateFieldConfig={editing.updateFieldConfig}
          clearFieldMapping={editing.clearFieldMapping}
          removeFieldFromSelectedForm={editing.removeFieldFromSelectedForm}
          formPrefillEnabledByFormId={runtime.formPrefillEnabledByFormId}
          setFormPrefillEnabled={runtime.setFormPrefillEnabled}
          formValuesByFormId={runtime.formValuesByFormId}
          updateCurrentFormValue={runtime.updateCurrentFormValue}
          submitCurrentFormData={runtime.submitCurrentFormData}
          submittedFormIds={runtime.submittedFormIds}
          currentFormErrors={runtime.currentFormErrors}
          resolveFormNameByFormId={resolveFormNameByFormId}
        />
      </section>

      {saving ? <footer className="footer">Saving...</footer> : null}
    </main>
  );
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

function resolveFormNameByFormId(graph: ActionBlueprintGraph, formId: string): string {
  return graph.forms.find((item) => item.id === formId)?.name ?? formId;
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
