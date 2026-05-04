import { EffectiveMapping, FormDefinition } from "../types";
import { ConfiguredField, PatternStatus } from "../appTypes";

type PrefillMappingPanelProps = {
  selectedForm: FormDefinition;
  ancestorCandidatesCount: number;
  configuredFields: ConfiguredField[];
  mappings: EffectiveMapping[];
  dragFieldKey: string | null;
  setDragFieldKey: (key: string | null) => void;
  reorderConfiguredFields: (formId: string, sourceKey: string, targetKey: string) => void;
  updateFieldConfig: (formId: string, fieldKey: string, updater: (current: ConfiguredField) => ConfiguredField) => void;
  clearFieldMapping: (formId: string, fieldKey: string) => void;
  removeFieldFromSelectedForm: (fieldKey: string) => void;
  patternStatus: PatternStatus;
};

export function PrefillMappingPanel(props: PrefillMappingPanelProps) {
  const {
    selectedForm,
    ancestorCandidatesCount,
    configuredFields,
    mappings,
    dragFieldKey,
    setDragFieldKey,
    reorderConfiguredFields,
    updateFieldConfig,
    clearFieldMapping,
    removeFieldFromSelectedForm,
    patternStatus
  } = props;

  return (
    <>
      <h2>Prefill Mapping</h2>
      {ancestorCandidatesCount === 0 ? <p>No parent/ancestor form found, so prefill is unavailable.</p> : null}
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
              if (!dragFieldKey) return;
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
                    onChange={(e) => updateFieldConfig(selectedForm.id, field.key, (current) => ({ ...current, required: e.target.checked }))}
                    disabled={patternStatus === "saved"}
                  />
                  Required
                </label>
              </div>
            </div>
            <div className="mappingValue">{active ? JSON.stringify(active.source) : "Not configured"}</div>
            <button className="clearBtn" onClick={() => clearFieldMapping(selectedForm.id, field.key)} disabled={!active || patternStatus === "saved"}>
              X
            </button>
            <button className="clearBtn" onClick={() => removeFieldFromSelectedForm(field.key)} disabled={patternStatus === "saved"}>
              Remove Field
            </button>
          </div>
        );
      })}
    </>
  );
}
