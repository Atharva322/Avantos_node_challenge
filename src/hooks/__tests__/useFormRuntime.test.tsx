import { act, renderHook } from "@testing-library/react";
import { useFormRuntime } from "../useFormRuntime";
import { ActionBlueprintGraph } from "../../types";
import { ConfiguredField } from "../../appTypes";

function buildGraph(): ActionBlueprintGraph {
  return {
    blueprint_id: "bp_1",
    blueprint_name: "Test",
    forms: [
      {
        id: "form_a",
        name: "Form A",
        field_schema: { properties: { email: { title: "Email", type: "string" } } },
        default_input_mapping: {}
      },
      {
        id: "form_b",
        name: "Form B",
        field_schema: { properties: { email: { title: "Email", type: "string" } } },
        default_input_mapping: {}
      }
    ],
    nodes: [
      { id: "node_a", type: "form", data: { component_id: "form_a" } },
      { id: "node_b", type: "form", data: { component_id: "form_b" } }
    ],
    edges: [{ source: "node_a", target: "node_b" }]
  };
}

describe("useFormRuntime", () => {
  test("blocks submit when required field is missing", () => {
    const configuredFields: ConfiguredField[] = [{ key: "email", label: "Email", type: "string", required: true }];
    const graph = buildGraph();
    const { result } = renderHook(() =>
      useFormRuntime({
        graph,
        selectedFormId: "form_b",
        configuredFields,
        getAncestorForms: () => [],
        persistFormPrefillEnabled: () => {}
      })
    );

    act(() => {
      result.current.submitCurrentFormData();
    });

    expect(result.current.currentFormErrors()).toContain("Email is required");
    expect(result.current.submittedFormIds.form_b).toBeUndefined();
  });

  test("marks form as submitted when required fields are valid", () => {
    const configuredFields: ConfiguredField[] = [{ key: "email", label: "Email", type: "string", required: true }];
    const graph = buildGraph();
    const { result } = renderHook(() =>
      useFormRuntime({
        graph,
        selectedFormId: "form_b",
        configuredFields,
        getAncestorForms: () => [],
        persistFormPrefillEnabled: () => {}
      })
    );

    act(() => {
      result.current.updateCurrentFormValue("email", "john@example.com");
    });
    act(() => {
      result.current.submitCurrentFormData();
    });

    expect(result.current.submittedFormIds.form_b).toBe(true);
    expect(result.current.currentFormErrors()).toEqual([]);
  });

  test("prefills from submitted ancestor when prefill is enabled", () => {
    const configuredFields: ConfiguredField[] = [{ key: "email", label: "Email", type: "string", required: false }];
    const graph = buildGraph();
    const persistSpy = vi.fn();
    const { result } = renderHook(() =>
      useFormRuntime({
        graph,
        selectedFormId: "form_b",
        configuredFields,
        getAncestorForms: (g, formId) => {
          if (formId !== "form_b") return [];
          const formA = g.forms.find((f) => f.id === "form_a");
          return formA ? [{ form: formA }] : [];
        },
        persistFormPrefillEnabled: persistSpy
      })
    );

    act(() => {
      result.current.setFormValuesByFormId({ form_a: { email: "parent@example.com" } });
      result.current.setSubmittedFormIds({ form_a: true });
    });
    act(() => {
      result.current.setFormPrefillEnabled("form_b", true);
    });

    expect(persistSpy).toHaveBeenCalledWith("form_b", true);
    expect(result.current.formValuesByFormId.form_b.email).toBe("parent@example.com");
  });
});
