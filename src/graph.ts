import { ActionBlueprintGraph, FormDefinition, FormField, GraphNode } from "./types";

export type GraphContext = {
  formById: Record<string, FormDefinition>;
  nodeById: Record<string, GraphNode>;
  formIdByNodeId: Record<string, string>;
  nodeIdByFormId: Record<string, string>;
  reverseAdj: Record<string, string[]>;
};

export function buildGraphContext(graph: ActionBlueprintGraph): GraphContext {
  const formById: Record<string, FormDefinition> = {};
  const nodeById: Record<string, GraphNode> = {};
  const formIdByNodeId: Record<string, string> = {};
  const nodeIdByFormId: Record<string, string> = {};
  const reverseAdj: Record<string, string[]> = {};

  graph.forms.forEach((f) => {
    formById[f.id] = f;
  });
  graph.nodes.forEach((n) => {
    nodeById[n.id] = n;
    const formId = n.data.component_id;
    if (formId) {
      formIdByNodeId[n.id] = formId;
      nodeIdByFormId[formId] = n.id;
    }
  });
  graph.edges.forEach((e) => {
    if (!reverseAdj[e.target]) reverseAdj[e.target] = [];
    reverseAdj[e.target].push(e.source);
  });

  return { formById, nodeById, formIdByNodeId, nodeIdByFormId, reverseAdj };
}

export function extractFormFields(form: FormDefinition): FormField[] {
  const props = form.field_schema?.properties ?? {};
  return Object.entries(props).map(([key, value]) => ({
    key,
    label: value.title ?? key,
    type: value.type ?? "unknown"
  }));
}

export function getDirectUpstreamNodeIds(nodeId: string, ctx: GraphContext): string[] {
  return ctx.reverseAdj[nodeId] ?? [];
}

export function getTransitiveUpstreamNodeIds(nodeId: string, ctx: GraphContext): string[] {
  const seen = new Set<string>();
  const queue = [...getDirectUpstreamNodeIds(nodeId, ctx)];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (seen.has(current)) continue;
    seen.add(current);
    (ctx.reverseAdj[current] ?? []).forEach((p) => {
      if (!seen.has(p)) queue.push(p);
    });
  }
  return [...seen];
}
