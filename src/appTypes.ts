import { ActionBlueprintGraph, FormField } from "./types";

export type ConfiguredField = FormField & {
  required: boolean;
};

export type WorkflowDesign = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt?: string;
  graph: ActionBlueprintGraph;
  fieldConfig: Record<string, ConfiguredField[]>;
  formPrefillEnabled: Record<string, boolean>;
};

export type PatternStatus = "draft" | "saved";
