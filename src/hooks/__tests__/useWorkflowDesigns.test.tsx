import { act, renderHook } from "@testing-library/react";
import { useWorkflowDesigns } from "../useWorkflowDesigns";
import { ActionBlueprintGraph } from "../../types";
import { ConfiguredField } from "../../appTypes";

const STORAGE_KEY = "jb_saved_workflows_v1";

function graphFixture(name = "Fixture"): ActionBlueprintGraph {
  return {
    blueprint_id: "bp_1",
    blueprint_name: name,
    forms: [],
    nodes: [],
    edges: []
  };
}

describe("useWorkflowDesigns", () => {
  test("persists a workflow design into localStorage", () => {
    const graph = graphFixture();
    const { result } = renderHook(() =>
      useWorkflowDesigns({
        graph,
        formFieldConfigByFormId: {} as Record<string, ConfiguredField[]>,
        formPrefillEnabledByFormId: {},
        setGraph: vi.fn(),
        resetRuntimeState: vi.fn(),
        setPatternDraft: vi.fn()
      })
    );

    act(() => {
      result.current.setWorkflowName("My Flow");
    });
    act(() => {
      result.current.persistWorkflowDesign();
    });

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    expect(saved).toHaveLength(1);
    expect(saved[0].name).toBe("My Flow");
    expect(result.current.activeWorkflowId).toBeTruthy();
  });

  test("loads a workflow design and triggers graph + runtime reset callbacks", () => {
    const setGraph = vi.fn();
    const resetRuntimeState = vi.fn();
    const setPatternDraft = vi.fn();
    const saved = [
      {
        id: "wf_abc",
        name: "Saved One",
        createdAt: "2026-05-03T00:00:00.000Z",
        updatedAt: "2026-05-03T00:00:00.000Z",
        graph: graphFixture("Loaded Graph"),
        fieldConfig: {},
        formPrefillEnabled: {}
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));

    const { result } = renderHook(() =>
      useWorkflowDesigns({
        graph: graphFixture("Current"),
        formFieldConfigByFormId: {} as Record<string, ConfiguredField[]>,
        formPrefillEnabledByFormId: {},
        setGraph,
        resetRuntimeState,
        setPatternDraft
      })
    );

    act(() => {
      result.current.loadWorkflowDesign("wf_abc");
    });

    expect(setGraph).toHaveBeenCalledWith(saved[0].graph);
    expect(resetRuntimeState).toHaveBeenCalled();
    expect(setPatternDraft).toHaveBeenCalled();
    expect(result.current.workflowName).toBe("Saved One");
    expect(result.current.activeWorkflowId).toBe("wf_abc");
  });
});
