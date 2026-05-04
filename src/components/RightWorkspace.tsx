import { ActionBlueprintGraph, EffectiveMapping, FormDefinition } from "../types";
import { ConfiguredField, PatternStatus } from "../appTypes";
import { DesignWhiteboard } from "./DesignWhiteboard";
import { CurrentRelationships } from "./CurrentRelationships";
import { PrefillMappingPanel } from "./PrefillMappingPanel";
import { RunFormDataPanel } from "./RunFormDataPanel";
import { TemporaryStoredDataPanel } from "./TemporaryStoredDataPanel";

type RightWorkspaceProps = {
  graph: ActionBlueprintGraph;
  selectedFormId: string | null;
  setSelectedFormId: (id: string) => void;
  patternStatus: PatternStatus;
  removeLink: (sourceFormId: string, targetFormId: string) => void;
  resolveFormNameByNodeId: (graph: ActionBlueprintGraph, nodeId: string) => string;
  getFormIdByNodeId: (graph: ActionBlueprintGraph, nodeId: string) => string | null;
  selectedForm: FormDefinition | null;
  ancestorCandidates: Array<{ form: { id: string; name: string } }>;
  configuredFields: ConfiguredField[];
  mappings: EffectiveMapping[];
  dragFieldKey: string | null;
  setDragFieldKey: (key: string | null) => void;
  reorderConfiguredFields: (formId: string, sourceKey: string, targetKey: string) => void;
  updateFieldConfig: (formId: string, fieldKey: string, updater: (current: ConfiguredField) => ConfiguredField) => void;
  clearFieldMapping: (formId: string, fieldKey: string) => void;
  removeFieldFromSelectedForm: (fieldKey: string) => void;
  formPrefillEnabledByFormId: Record<string, boolean>;
  setFormPrefillEnabled: (formId: string, enabled: boolean) => void;
  formValuesByFormId: Record<string, Record<string, string>>;
  updateCurrentFormValue: (fieldKey: string, value: string) => void;
  submitCurrentFormData: () => void;
  submittedFormIds: Record<string, boolean>;
  currentFormErrors: () => string[];
  resolveFormNameByFormId: (graph: ActionBlueprintGraph, formId: string) => string;
};

export function RightWorkspace(props: RightWorkspaceProps) {
  const {
    graph,
    selectedFormId,
    setSelectedFormId,
    patternStatus,
    removeLink,
    resolveFormNameByNodeId,
    getFormIdByNodeId,
    selectedForm,
    ancestorCandidates,
    configuredFields,
    mappings,
    dragFieldKey,
    setDragFieldKey,
    reorderConfiguredFields,
    updateFieldConfig,
    clearFieldMapping,
    removeFieldFromSelectedForm,
    formPrefillEnabledByFormId,
    setFormPrefillEnabled,
    formValuesByFormId,
    updateCurrentFormValue,
    submitCurrentFormData,
    submittedFormIds,
    currentFormErrors,
    resolveFormNameByFormId
  } = props;

  return (
    <section className="panel">
      <DesignWhiteboard graph={graph} selectedFormId={selectedFormId} setSelectedFormId={setSelectedFormId} />
      <CurrentRelationships
        graph={graph}
        patternStatus={patternStatus}
        removeLink={removeLink}
        resolveFormNameByNodeId={resolveFormNameByNodeId}
        getFormIdByNodeId={getFormIdByNodeId}
      />
      {selectedForm ? (
        <>
          <PrefillMappingPanel
            selectedForm={selectedForm}
            ancestorCandidatesCount={ancestorCandidates.length}
            configuredFields={configuredFields}
            mappings={mappings}
            dragFieldKey={dragFieldKey}
            setDragFieldKey={setDragFieldKey}
            reorderConfiguredFields={reorderConfiguredFields}
            updateFieldConfig={updateFieldConfig}
            clearFieldMapping={clearFieldMapping}
            removeFieldFromSelectedForm={removeFieldFromSelectedForm}
            patternStatus={patternStatus}
          />
          {patternStatus === "saved" ? (
            <RunFormDataPanel
              selectedFormId={selectedForm.id}
              ancestorCandidatesCount={ancestorCandidates.length}
              formPrefillEnabledByFormId={formPrefillEnabledByFormId}
              setFormPrefillEnabled={setFormPrefillEnabled}
              configuredFields={configuredFields}
              formValuesByFormId={formValuesByFormId}
              updateCurrentFormValue={updateCurrentFormValue}
              submitCurrentFormData={submitCurrentFormData}
              submittedFormIds={submittedFormIds}
              currentFormErrors={currentFormErrors}
            />
          ) : (
            <p>Save Pattern to start collecting actual user data.</p>
          )}
          <TemporaryStoredDataPanel
            graph={graph}
            formValuesByFormId={formValuesByFormId}
            submittedFormIds={submittedFormIds}
            resolveFormNameByFormId={resolveFormNameByFormId}
          />
        </>
      ) : (
        <p>Select a form to continue.</p>
      )}
    </section>
  );
}
