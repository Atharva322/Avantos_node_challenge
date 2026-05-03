import { ActionBlueprintGraph, DlInputEntry, EffectiveMapping } from "./types";
import { buildGraphContext } from "./graph";

export function getEffectiveMappings(graph: ActionBlueprintGraph, formId: string): EffectiveMapping[] {
  const ctx = buildGraphContext(graph);
  const form = ctx.formById[formId];
  if (!form) return [];
  const nodeId = ctx.nodeIdByFormId[formId];
  const node = nodeId ? ctx.nodeById[nodeId] : undefined;
  const fieldKeys = Object.keys(form.field_schema?.properties ?? {});

  return fieldKeys.map((targetField) => ({
    targetField,
    nodeMapping: node?.data.dl_input_mapping?.[targetField],
    formMapping: form.default_input_mapping?.[targetField]
  }));
}

export function setMapping(
  graph: ActionBlueprintGraph,
  formId: string,
  targetField: string,
  entry: DlInputEntry
): ActionBlueprintGraph {
  const ctx = buildGraphContext(graph);
  const nodeId = ctx.nodeIdByFormId[formId];

  const forms = graph.forms.map((f) =>
    f.id === formId
      ? {
          ...f,
          default_input_mapping: {
            ...(f.default_input_mapping ?? {}),
            [targetField]: entry.source
          }
        }
      : f
  );

  const nodes = graph.nodes.map((n) =>
    n.id === nodeId
      ? {
          ...n,
          data: {
            ...n.data,
            dl_input_mapping: {
              ...(n.data.dl_input_mapping ?? {}),
              [targetField]: entry
            }
          }
        }
      : n
  );

  return { ...graph, forms, nodes };
}

export function clearMapping(graph: ActionBlueprintGraph, formId: string, targetField: string): ActionBlueprintGraph {
  const ctx = buildGraphContext(graph);
  const nodeId = ctx.nodeIdByFormId[formId];

  const forms = graph.forms.map((f) => {
    if (f.id !== formId) return f;
    const current = { ...(f.default_input_mapping ?? {}) };
    delete current[targetField];
    return { ...f, default_input_mapping: current };
  });

  const nodes = graph.nodes.map((n) => {
    if (n.id !== nodeId) return n;
    const current = { ...(n.data.dl_input_mapping ?? {}) };
    delete current[targetField];
    return { ...n, data: { ...n.data, dl_input_mapping: current } };
  });

  return { ...graph, forms, nodes };
}

export type PersistedUiField = {
  key: string;
  required: boolean;
};

export function getPersistedUiFields(graph: ActionBlueprintGraph, formId: string): PersistedUiField[] {
  const ctx = buildGraphContext(graph);
  const nodeId = ctx.nodeIdByFormId[formId];
  const node = nodeId ? ctx.nodeById[nodeId] : undefined;
  const fields = node?.data.ui_form_config?.fields ?? [];
  return fields
    .filter((field) => field?.key)
    .map((field) => ({
      key: String(field.key),
      required: Boolean(field.required)
    }));
}

export function setPersistedUiFields(
  graph: ActionBlueprintGraph,
  formId: string,
  fields: PersistedUiField[]
): ActionBlueprintGraph {
  const ctx = buildGraphContext(graph);
  const nodeId = ctx.nodeIdByFormId[formId];
  if (!nodeId) return graph;
  const nodes = graph.nodes.map((node) =>
    node.id === nodeId
      ? {
          ...node,
          data: {
            ...node.data,
            ui_form_config: {
              fields: fields.map((field) => ({
                key: field.key,
                required: field.required
              }))
            }
          }
        }
      : node
  );
  return { ...graph, nodes };
}

export function getPersistedFormPrefillEnabled(graph: ActionBlueprintGraph, formId: string): boolean {
  const ctx = buildGraphContext(graph);
  const nodeId = ctx.nodeIdByFormId[formId];
  const node = nodeId ? ctx.nodeById[nodeId] : undefined;
  return Boolean(node?.data.ui_form_config?.form_prefill_enabled);
}

export function setPersistedFormPrefillEnabled(
  graph: ActionBlueprintGraph,
  formId: string,
  enabled: boolean
): ActionBlueprintGraph {
  const ctx = buildGraphContext(graph);
  const nodeId = ctx.nodeIdByFormId[formId];
  if (!nodeId) return graph;
  const nodes = graph.nodes.map((node) =>
    node.id === nodeId
      ? {
          ...node,
          data: {
            ...node.data,
            ui_form_config: {
              ...(node.data.ui_form_config ?? {}),
              form_prefill_enabled: enabled
            }
          }
        }
      : node
  );
  return { ...graph, nodes };
}
