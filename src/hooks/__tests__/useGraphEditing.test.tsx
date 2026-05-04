import { act, renderHook } from "@testing-library/react";
import { useGraphEditing } from "../useGraphEditing";
import { ActionBlueprintGraph } from "../../types";

const sourceTabs = [
  {
    id: "mock:object",
    label: "Mock Object",
    kind: "schema" as const,
    fields: [{ key: "email", label: "Email", type: "string" }]
  }
];

function graphFixture(): ActionBlueprintGraph {
  return {
    blueprint_id: "bp_1",
    blueprint_name: "Graph",
    forms: [
      { id: "form_a", name: "Form A", field_schema: { properties: {} }, default_input_mapping: {} },
      { id: "form_b", name: "Form B", field_schema: { properties: {} }, default_input_mapping: {} }
    ],
    nodes: [
      { id: "node_a", type: "form", data: { component_id: "form_a" } },
      { id: "node_b", type: "form", data: { component_id: "form_b" } }
    ],
    edges: [{ source: "node_a", target: "node_b" }]
  };
}

describe("useGraphEditing linking", () => {
  test("createLink adds a new edge for valid source/target", () => {
    const onSave = vi.fn();
    const setError = vi.fn();
    const { result } = renderHook(() =>
      useGraphEditing({
        graph: {
          ...graphFixture(),
          edges: []
        },
        selectedFormId: "form_a",
        setSelectedFormId: vi.fn(),
        onSave,
        setError,
        sourceTabs
      })
    );

    act(() => {
      result.current.setLinkSourceFormId("form_a");
      result.current.setLinkTargetFormId("form_b");
    });
    act(() => {
      result.current.createLink();
    });

    expect(onSave).toHaveBeenCalledTimes(1);
    const savedGraph = onSave.mock.calls[0][0] as ActionBlueprintGraph;
    expect(savedGraph.edges).toEqual([{ source: "node_a", target: "node_b" }]);
    expect(setError).toHaveBeenCalledWith(null);
  });

  test("createLink blocks duplicate link and sets error", () => {
    const onSave = vi.fn();
    const setError = vi.fn();
    const { result } = renderHook(() =>
      useGraphEditing({
        graph: graphFixture(),
        selectedFormId: "form_a",
        setSelectedFormId: vi.fn(),
        onSave,
        setError,
        sourceTabs
      })
    );

    act(() => {
      result.current.setLinkSourceFormId("form_a");
      result.current.setLinkTargetFormId("form_b");
    });
    act(() => {
      result.current.createLink();
    });

    expect(onSave).not.toHaveBeenCalled();
    expect(setError).toHaveBeenCalledWith("This link already exists.");
  });

  test("removeLink removes only selected edge", () => {
    const onSave = vi.fn();
    const setError = vi.fn();
    const graph: ActionBlueprintGraph = {
      ...graphFixture(),
      forms: [
        ...graphFixture().forms,
        { id: "form_c", name: "Form C", field_schema: { properties: {} }, default_input_mapping: {} }
      ],
      nodes: [
        ...graphFixture().nodes,
        { id: "node_c", type: "form", data: { component_id: "form_c" } }
      ],
      edges: [
        { source: "node_a", target: "node_b" },
        { source: "node_a", target: "node_c" }
      ]
    };

    const { result } = renderHook(() =>
      useGraphEditing({
        graph,
        selectedFormId: "form_a",
        setSelectedFormId: vi.fn(),
        onSave,
        setError,
        sourceTabs
      })
    );

    act(() => {
      result.current.removeLink("form_a", "form_b");
    });

    expect(onSave).toHaveBeenCalledTimes(1);
    const savedGraph = onSave.mock.calls[0][0] as ActionBlueprintGraph;
    expect(savedGraph.edges).toEqual([{ source: "node_a", target: "node_c" }]);
  });
});
