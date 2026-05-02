export type GraphEdge = { source: string; target: string };

export type DlInputEntry = {
  source: Record<string, unknown>;
  type: string;
};

export type MappingMap = Record<string, Record<string, unknown>>;

export type FormDefinition = {
  id: string;
  name: string;
  field_schema?: {
    properties?: Record<string, { title?: string; type?: string }>;
  };
  default_input_mapping?: MappingMap;
};

export type NodeData = {
  component_id?: string;
  component_key?: string;
  component_type?: string;
  dl_input_mapping?: Record<string, DlInputEntry>;
  ui_form_config?: {
    fields?: Array<{
      key: string;
      required?: boolean;
      prefill_enabled?: boolean;
    }>;
  };
};

export type GraphNode = {
  id: string;
  type: string;
  data: NodeData;
};

export type ActionBlueprintGraph = {
  blueprint_id: string;
  blueprint_name: string;
  forms: FormDefinition[];
  nodes: GraphNode[];
  edges: GraphEdge[];
};

export type FormField = {
  key: string;
  label: string;
  type: string;
};

export type SourceKind = "direct_form" | "transitive_form" | "global";

export type PrefillCandidate = {
  id: string;
  kind: SourceKind;
  groupLabel: string;
  label: string;
  sourceRef: Record<string, unknown>;
};

export type EffectiveMapping = {
  targetField: string;
  nodeMapping?: DlInputEntry;
  formMapping?: Record<string, unknown>;
};

export type ObjectAggregateInputBody = {
  $schema: string;
  aggregate: string;
  column: string;
  filter: {
    component_key: string;
    is_metadata: boolean;
    output_key: string;
    type: string;
  };
  object_type: string;
  only_assigned: boolean;
};

export type ObjectAggregateOutputBody = {
  $schema: string;
  aggregate_result: number;
};
