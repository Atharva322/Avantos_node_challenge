import { useState } from "react";
import { ActionBlueprintGraph } from "../types";
import { ConfiguredField } from "../appTypes";
import { extractFormFields } from "../graph";

type AncestorForm = { form: { id: string; name: string; field_schema?: { properties?: Record<string, { title?: string; type?: string }> } } };

type UseFormRuntimeArgs = {
  graph: ActionBlueprintGraph | null;
  selectedFormId: string | null;
  configuredFields: ConfiguredField[];
  getAncestorForms: (graph: ActionBlueprintGraph, formId: string) => AncestorForm[];
  persistFormPrefillEnabled: (formId: string, enabled: boolean) => void;
};

export function useFormRuntime(args: UseFormRuntimeArgs) {
  const { graph, selectedFormId, configuredFields, getAncestorForms, persistFormPrefillEnabled } = args;
  const [formPrefillEnabledByFormId, setFormPrefillEnabledByFormId] = useState<Record<string, boolean>>({});
  const [formValuesByFormId, setFormValuesByFormId] = useState<Record<string, Record<string, string>>>({});
  const [formValidationByFormId, setFormValidationByFormId] = useState<Record<string, string[]>>({});
  const [submittedFormIds, setSubmittedFormIds] = useState<Record<string, boolean>>({});

  function resetRuntimeState() {
    setFormValuesByFormId({});
    setFormValidationByFormId({});
    setSubmittedFormIds({});
  }

  function hydratePrefillState(next: Record<string, boolean>) {
    setFormPrefillEnabledByFormId(next);
  }

  function autoPrefillFromAncestors(formId: string) {
    if (!graph) return;
    const ancestors = getAncestorForms(graph, formId).filter((ancestor) => submittedFormIds[ancestor.form.id]);
    if (ancestors.length === 0) return;
    const targetForm = graph.forms.find((f) => f.id === formId);
    if (!targetForm) return;
    const targets = configuredFields.length > 0 ? configuredFields : extractFormFields(targetForm).map((field) => ({ ...field, required: false }));
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
          if (typeof sourceVal === "string" && sourceVal.trim() !== "") current[fieldKey] = sourceVal;
        }
      }
      return { ...prev, [formId]: current };
    });
    setFormValidationByFormId((prev) => ({ ...prev, [formId]: [] }));
  }

  function setFormPrefillEnabled(formId: string, enabled: boolean) {
    setFormPrefillEnabledByFormId((prev) => ({ ...prev, [formId]: enabled }));
    persistFormPrefillEnabled(formId, enabled);
    if (enabled) autoPrefillFromAncestors(formId);
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

  return {
    formPrefillEnabledByFormId,
    formValuesByFormId,
    formValidationByFormId,
    submittedFormIds,
    setFormValuesByFormId,
    setFormValidationByFormId,
    setSubmittedFormIds,
    hydratePrefillState,
    resetRuntimeState,
    setFormPrefillEnabled,
    submitCurrentFormData,
    updateCurrentFormValue,
    currentFormErrors
  };
}

function isTypeCompatible(targetType: string, sourceType: string): boolean {
  if (targetType === sourceType) return true;
  return targetType === "number" && sourceType === "integer";
}
