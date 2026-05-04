import { ConfiguredField } from "../appTypes";

type RunFormDataPanelProps = {
  selectedFormId: string;
  ancestorCandidatesCount: number;
  formPrefillEnabledByFormId: Record<string, boolean>;
  setFormPrefillEnabled: (formId: string, enabled: boolean) => void;
  configuredFields: ConfiguredField[];
  formValuesByFormId: Record<string, Record<string, string>>;
  updateCurrentFormValue: (fieldKey: string, value: string) => void;
  submitCurrentFormData: () => void;
  submittedFormIds: Record<string, boolean>;
  currentFormErrors: () => string[];
};

export function RunFormDataPanel(props: RunFormDataPanelProps) {
  const {
    selectedFormId,
    ancestorCandidatesCount,
    formPrefillEnabledByFormId,
    setFormPrefillEnabled,
    configuredFields,
    formValuesByFormId,
    updateCurrentFormValue,
    submitCurrentFormData,
    submittedFormIds,
    currentFormErrors
  } = props;

  return (
    <section className="prefillPanel">
      <h3>Run Form Data</h3>
      {ancestorCandidatesCount > 0 ? (
        <label className="checkRow">
          <input
            type="checkbox"
            checked={Boolean(formPrefillEnabledByFormId[selectedFormId])}
            onChange={(e) => setFormPrefillEnabled(selectedFormId, e.target.checked)}
          />
          Enable Prefill Suggestions For This Form
        </label>
      ) : null}
      {configuredFields.map((field) => (
        <label key={`runtime-${field.key}`} className="formRow">
          <span>
            {field.label} {field.required ? "*" : ""}
          </span>
          <input value={formValuesByFormId[selectedFormId]?.[field.key] ?? ""} onChange={(e) => updateCurrentFormValue(field.key, e.target.value)} />
        </label>
      ))}
      <button className="closeBtn" onClick={submitCurrentFormData}>
        Submit Form Data
      </button>
      {submittedFormIds[selectedFormId] ? <p>Submitted for this form.</p> : null}
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
  );
}
