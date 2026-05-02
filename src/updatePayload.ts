import { ActionBlueprintGraph } from "./types";

type PartialSafeGraphPutBody = {
  component_task_priorities?: unknown;
  custom_javascript_function_id?: unknown;
  custom_status_configuration?: unknown;
  edges: unknown;
  nodes: unknown;
  promoted_data_order?: unknown;
  state_model_schema?: unknown;
  version_notes?: unknown;
};

export function buildPartialSafeGraphPutBody(graph: ActionBlueprintGraph): PartialSafeGraphPutBody {
  const anyGraph = graph as unknown as Record<string, unknown>;

  return {
    component_task_priorities: anyGraph.component_task_priorities,
    custom_javascript_function_id: anyGraph.custom_javascript_function_id,
    custom_status_configuration: anyGraph.custom_status_configuration,
    edges: anyGraph.edges ?? [],
    nodes: anyGraph.nodes ?? [],
    promoted_data_order: anyGraph.promoted_data_order,
    state_model_schema: anyGraph.state_model_schema,
    version_notes: anyGraph.version_notes
  };
}
