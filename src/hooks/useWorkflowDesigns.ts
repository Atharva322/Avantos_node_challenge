import { useEffect, useState } from "react";
import { ActionBlueprintGraph } from "../types";
import { ConfiguredField, WorkflowDesign } from "../appTypes";

const WORKFLOW_STORAGE_KEY = "jb_saved_workflows_v1";

type UseWorkflowDesignsArgs = {
  graph: ActionBlueprintGraph | null;
  formFieldConfigByFormId: Record<string, ConfiguredField[]>;
  formPrefillEnabledByFormId: Record<string, boolean>;
  setGraph: (graph: ActionBlueprintGraph) => void;
  resetRuntimeState: () => void;
  setPatternDraft: () => void;
};

export function useWorkflowDesigns(args: UseWorkflowDesignsArgs) {
  const { graph, formFieldConfigByFormId, formPrefillEnabledByFormId, setGraph, resetRuntimeState, setPatternDraft } = args;
  const [workflowName, setWorkflowName] = useState("Untitled Workflow");
  const [savedWorkflows, setSavedWorkflows] = useState<WorkflowDesign[]>([]);
  const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(WORKFLOW_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as WorkflowDesign[];
      if (Array.isArray(parsed)) setSavedWorkflows(parsed);
    } catch {
      // ignore malformed local state
    }
  }, []);

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
    setWorkflowName(found.name);
    setActiveWorkflowId(found.id);
    setPatternDraft();
    resetRuntimeState();
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

  function clearActiveDesign() {
    setActiveWorkflowId(null);
    setWorkflowName("Untitled Workflow");
  }

  return {
    workflowName,
    setWorkflowName,
    savedWorkflows,
    activeWorkflowId,
    persistWorkflowDesign,
    loadWorkflowDesign,
    deleteWorkflowDesign,
    clearActiveDesign
  };
}
