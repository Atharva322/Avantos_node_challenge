import { ActionBlueprintGraph, FormField } from "../types";
import { PatternStatus, WorkflowDesign } from "../appTypes";
import { SourceTab } from "../sourceCatalog";
import { WorkflowDesignPanel } from "./WorkflowDesignPanel";
import { FormBuilderPanel } from "./FormBuilderPanel";
import { FormLinkingPanel } from "./FormLinkingPanel";

type LeftSidebarProps = {
  graph: ActionBlueprintGraph;
  workflowName: string;
  setWorkflowName: (value: string) => void;
  persistWorkflowDesign: (options?: { asNew?: boolean }) => void;
  startNewWorkflowDesign: () => void;
  activeWorkflowId: string | null;
  savedWorkflows: WorkflowDesign[];
  loadWorkflowDesign: (id: string) => void;
  deleteWorkflowDesign: (id: string) => void;
  selectedFormId: string | null;
  setSelectedFormId: (id: string) => void;
  deleteSelectedForm: () => void;
  patternStatus: PatternStatus;
  selectedFormEditName: string;
  setSelectedFormEditName: (value: string) => void;
  updateSelectedFormName: () => void;
  newFormName: string;
  setNewFormName: (value: string) => void;
  objectSearch: string;
  setObjectSearch: (value: string) => void;
  selectedObjectId: string;
  setSelectedObjectId: (value: string) => void;
  filteredTabs: SourceTab[];
  selectedTab: SourceTab | null;
  selectedObjectFieldKeys: string[];
  setSelectedObjectFieldKeys: (updater: string[] | ((prev: string[]) => string[])) => void;
  addSelectedObjectFieldsToDraft: () => void;
  draftFields: FormField[];
  removeDraftField: (key: string) => void;
  addDraftFieldsToSelectedForm: () => void;
  createForm: () => void;
  linkSourceFormId: string;
  setLinkSourceFormId: (value: string) => void;
  linkTargetFormId: string;
  setLinkTargetFormId: (value: string) => void;
  createLink: () => void;
  removeLink: (sourceFormId: string, targetFormId: string) => void;
};

export function LeftSidebar(props: LeftSidebarProps) {
  return (
    <aside className="panel">
      <WorkflowDesignPanel
        workflowName={props.workflowName}
        setWorkflowName={props.setWorkflowName}
        persistWorkflowDesign={props.persistWorkflowDesign}
        startNewWorkflowDesign={props.startNewWorkflowDesign}
        activeWorkflowId={props.activeWorkflowId}
        savedWorkflows={props.savedWorkflows}
        loadWorkflowDesign={props.loadWorkflowDesign}
        deleteWorkflowDesign={props.deleteWorkflowDesign}
      />
      <FormBuilderPanel
        graph={props.graph}
        selectedFormId={props.selectedFormId}
        setSelectedFormId={props.setSelectedFormId}
        deleteSelectedForm={props.deleteSelectedForm}
        patternStatus={props.patternStatus}
        selectedFormEditName={props.selectedFormEditName}
        setSelectedFormEditName={props.setSelectedFormEditName}
        updateSelectedFormName={props.updateSelectedFormName}
        newFormName={props.newFormName}
        setNewFormName={props.setNewFormName}
        objectSearch={props.objectSearch}
        setObjectSearch={props.setObjectSearch}
        selectedObjectId={props.selectedObjectId}
        setSelectedObjectId={props.setSelectedObjectId}
        filteredTabs={props.filteredTabs}
        selectedTab={props.selectedTab}
        selectedObjectFieldKeys={props.selectedObjectFieldKeys}
        setSelectedObjectFieldKeys={props.setSelectedObjectFieldKeys}
        addSelectedObjectFieldsToDraft={props.addSelectedObjectFieldsToDraft}
        draftFields={props.draftFields}
        removeDraftField={props.removeDraftField}
        addDraftFieldsToSelectedForm={props.addDraftFieldsToSelectedForm}
        createForm={props.createForm}
      />
      <FormLinkingPanel
        graph={props.graph}
        linkSourceFormId={props.linkSourceFormId}
        setLinkSourceFormId={props.setLinkSourceFormId}
        linkTargetFormId={props.linkTargetFormId}
        setLinkTargetFormId={props.setLinkTargetFormId}
        createLink={props.createLink}
        removeLink={props.removeLink}
        patternStatus={props.patternStatus}
      />
    </aside>
  );
}
