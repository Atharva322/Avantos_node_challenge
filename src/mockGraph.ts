import { ActionBlueprintGraph } from "./types";

export const mockGraph: ActionBlueprintGraph = {
  blueprint_id: "bp_12345",
  blueprint_name: "Journey Builder Challenge",
  edges: [
    { source: "form-a", target: "form-b" },
    { source: "form-b", target: "form-d" },
    { source: "form-a", target: "form-d" }
  ],
  forms: [
    {
      id: "f_a",
      name: "Form A",
      field_schema: {
        properties: {
          email: { title: "Email", type: "string" },
          first_name: { title: "First Name", type: "string" }
        }
      },
      default_input_mapping: {}
    },
    {
      id: "f_b",
      name: "Form B",
      field_schema: {
        properties: {
          eligibility: { title: "Eligibility", type: "string" }
        }
      },
      default_input_mapping: {}
    },
    {
      id: "f_d",
      name: "Form D",
      field_schema: {
        properties: {
          dynamic_checkbox_group: { title: "Dynamic Checkbox Group", type: "array" },
          dynamic_object: { title: "Dynamic Object", type: "object" },
          email: { title: "Email", type: "string" }
        }
      },
      default_input_mapping: {
        email: {
          component_key: "form-a",
          output_key: "email",
          type: "string",
          is_metadata: false
        }
      }
    }
  ],
  nodes: [
    { id: "form-a", type: "form", data: { component_id: "f_a", component_key: "form-a", component_type: "form", dl_input_mapping: {} } },
    { id: "form-b", type: "form", data: { component_id: "f_b", component_key: "form-b", component_type: "form", dl_input_mapping: {} } },
    {
      id: "form-d",
      type: "form",
      data: {
        component_id: "f_d",
        component_key: "form-d",
        component_type: "form",
        dl_input_mapping: {
          email: {
            source: { kind: "forms", component_key: "form-b", path: "eligibility" },
            type: "dl_object_enum_v1"
          }
        }
      }
    }
  ]
};
