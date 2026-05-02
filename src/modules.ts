export type PrimitiveType = "string" | "number" | "integer" | "boolean" | "object" | "array";

export type FieldSchema = {
  key: string;
  label: string;
  type: PrimitiveType;
  required?: boolean;
  nullable?: boolean;
  enum?: string[];
  itemsType?: PrimitiveType;
  defaultValue?: unknown;
};

export type ParamSchema = {
  key: string;
  label: string;
  type: "string" | "number" | "boolean";
  required?: boolean;
};

export type EndpointMode = "create" | "list" | "get" | "update" | "delete" | "action";

export type EndpointDefinition = {
  id: string;
  label: string;
  mode: EndpointMode;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  path: string;
  pathParams?: ParamSchema[];
  queryParams?: ParamSchema[];
  bodyFields?: FieldSchema[];
  responseSchemaRef?: string;
};

export type ModuleDefinition = {
  id: string;
  label: string;
  batch: 1 | 2 | 3 | 4 | 5;
  endpoints: EndpointDefinition[];
};

const sf: ParamSchema = { key: "tenant_id", label: "Tenant ID", type: "string", required: true };

export const moduleRegistry: ModuleDefinition[] = [
  {
    id: "todos",
    label: "Todos",
    batch: 1,
    endpoints: [
      {
        id: "todo-create",
        label: "Create Todo",
        mode: "create",
        method: "POST",
        path: "/api/v1/{tenant_id}/todos",
        pathParams: [sf],
        responseSchemaRef: "TodoCreateOutputBody",
        bodyFields: [
          { key: "title", label: "Title", type: "string", required: true },
          { key: "complete", label: "Complete", type: "boolean", required: true, defaultValue: false },
          { key: "is_read", label: "Is Read", type: "boolean", required: true, defaultValue: false },
          { key: "scope_type", label: "Scope Type", type: "string", required: true, enum: ["personal", "role", "global"] },
          { key: "assignee_id", label: "Assignee ID", type: "string" },
          { key: "client_organisation_id", label: "Client Organisation ID", type: "string" },
          { key: "due_date", label: "Due Date (ISO)", type: "string" },
          { key: "notes", label: "Notes", type: "string" },
          { key: "role_names", label: "Role Names", type: "array", itemsType: "string", nullable: true },
          { key: "tags", label: "Tags", type: "array", itemsType: "string", nullable: true }
        ]
      },
      {
        id: "todo-list",
        label: "List Todos",
        mode: "list",
        method: "POST",
        path: "/api/v1/{tenant_id}/todos/list",
        pathParams: [sf],
        responseSchemaRef: "TodoListOutputBody",
        bodyFields: [
          { key: "only_assigned", label: "Only Assigned", type: "boolean" },
          { key: "filter", label: "Filter JSON", type: "object" },
          { key: "pagination_params", label: "Pagination JSON", type: "object" },
          { key: "sort_keys", label: "Sort Keys JSON", type: "array", itemsType: "object", nullable: true }
        ]
      },
      {
        id: "todo-get",
        label: "Get Todo",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/todos/{todo_id}",
        pathParams: [sf, { key: "todo_id", label: "Todo ID", type: "string", required: true }],
        responseSchemaRef: "TodoResponse"
      },
      {
        id: "todo-update",
        label: "Update Todo",
        mode: "update",
        method: "PATCH",
        path: "/api/v1/{tenant_id}/todos/{todo_id}",
        pathParams: [sf, { key: "todo_id", label: "Todo ID", type: "string", required: true }],
        responseSchemaRef: "TodoResponse",
        bodyFields: [
          { key: "title", label: "Title", type: "string" },
          { key: "complete", label: "Complete", type: "boolean" },
          { key: "is_read", label: "Is Read", type: "boolean" },
          { key: "scope_type", label: "Scope Type", type: "string" },
          { key: "assignee_id", label: "Assignee ID", type: "string" },
          { key: "client_organisation_id", label: "Client Organisation ID", type: "string" },
          { key: "due_date", label: "Due Date (ISO)", type: "string" },
          { key: "completed_at", label: "Completed At (ISO)", type: "string" },
          { key: "notes", label: "Notes", type: "string" },
          { key: "role_names", label: "Role Names", type: "array", itemsType: "string", nullable: true },
          { key: "tags", label: "Tags", type: "array", itemsType: "string", nullable: true }
        ]
      },
      {
        id: "todo-delete",
        label: "Delete Todo",
        mode: "delete",
        method: "DELETE",
        path: "/api/v1/{tenant_id}/todos/{todo_id}",
        pathParams: [sf, { key: "todo_id", label: "Todo ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "documents",
    label: "Documents",
    batch: 1,
    endpoints: [
      {
        id: "document-get",
        label: "Get Document",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/documents/{document_id}",
        pathParams: [sf, { key: "document_id", label: "Document ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "client-organisations",
    label: "Client Organisations",
    batch: 1,
    endpoints: [
      {
        id: "client-org-balances-get",
        label: "Get Client Org Balances",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances",
        pathParams: [sf, { key: "client_organisation_id", label: "Client Organisation ID", type: "string", required: true }]
      },
      {
        id: "client-org-balance-lineage-get",
        label: "Get Balance Lineage",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances/lineage",
        pathParams: [sf, { key: "client_organisation_id", label: "Client Organisation ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "form-rules",
    label: "Form Rules",
    batch: 1,
    endpoints: [
      {
        id: "form-rule-get",
        label: "Get Form Rule",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/form-rules/{form_rule_id}",
        pathParams: [sf, { key: "form_rule_id", label: "Form Rule ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "oauth",
    label: "Agent OAuth Tokens",
    batch: 5,
    endpoints: [
      {
        id: "agent-oauth-token-list",
        label: "List Tokens",
        mode: "list",
        method: "GET",
        path: "/api/v1/{tenant_id}/agents/oauth-tokens",
        pathParams: [sf],
        queryParams: [{ key: "provider", label: "Provider", type: "string" }]
      },
      {
        id: "agent-oauth-token-create",
        label: "Create Token",
        mode: "create",
        method: "POST",
        path: "/api/v1/{tenant_id}/agents/oauth-tokens",
        pathParams: [sf],
        bodyFields: [
          { key: "provider", label: "Provider", type: "string", required: true },
          { key: "code", label: "Authorization Code", type: "string", required: true },
          { key: "code_verifier", label: "Code Verifier", type: "string", required: true }
        ]
      },
      {
        id: "agent-oauth-token-reconnect",
        label: "Reconnect Token",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/reconnect",
        pathParams: [sf, { key: "token_id", label: "Token ID", type: "string", required: true }],
        bodyFields: [
          { key: "code", label: "Authorization Code", type: "string", required: true },
          { key: "code_verifier", label: "Code Verifier", type: "string", required: true }
        ]
      },
      {
        id: "agent-oauth-token-refresh",
        label: "Refresh Token",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/refresh",
        pathParams: [sf, { key: "token_id", label: "Token ID", type: "string", required: true }]
      },
      {
        id: "agent-oauth-token-delete",
        label: "Delete Token",
        mode: "delete",
        method: "DELETE",
        path: "/api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/remove",
        pathParams: [sf, { key: "token_id", label: "Token ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "action-runs",
    label: "Action Runs",
    batch: 5,
    endpoints: [
      {
        id: "action-run-delete",
        label: "Delete Action Run",
        mode: "delete",
        method: "DELETE",
        path: "/api/v1/{tenant_id}/action-runs/{action_run_id}",
        pathParams: [
          sf,
          { key: "action_run_id", label: "Action Run ID", type: "string", required: true }
        ]
      }
    ]
  },
  {
    id: "action-blueprint-versions",
    label: "Action Blueprint Versions",
    batch: 5,
    endpoints: [
      {
        id: "action-blueprint-version-fix-validation",
        label: "Fix Validation Errors",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}/fix-validation",
        pathParams: [
          sf,
          { key: "action_blueprint_id", label: "Action Blueprint ID", type: "string", required: true },
          { key: "blueprint_version_id", label: "Blueprint Version ID", type: "string", required: true }
        ]
      }
    ]
  },
  {
    id: "client-form-types",
    label: "Client Form Types",
    batch: 2,
    endpoints: [
      {
        id: "client-form-type-list",
        label: "List Client Form Types",
        mode: "list",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-form-types",
        pathParams: [sf]
      },
      {
        id: "client-form-type-create",
        label: "Create Client Form Type",
        mode: "create",
        method: "POST",
        path: "/api/v1/{tenant_id}/client-form-types",
        pathParams: [sf],
        bodyFields: [{ key: "name", label: "Name", type: "string", required: true }]
      },
      {
        id: "client-form-type-get",
        label: "Get Client Form Type",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-form-types/{client_form_type_id}",
        pathParams: [sf, { key: "client_form_type_id", label: "Client Form Type ID", type: "string", required: true }]
      },
      {
        id: "client-form-type-delete",
        label: "Delete Client Form Type",
        mode: "delete",
        method: "DELETE",
        path: "/api/v1/{tenant_id}/client-form-types/{client_form_type_id}",
        pathParams: [sf, { key: "client_form_type_id", label: "Client Form Type ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "client-form-rules",
    label: "Client Form Rules",
    batch: 2,
    endpoints: [
      {
        id: "client-form-rule-list",
        label: "List Client Form Rules",
        mode: "list",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-form-rules",
        pathParams: [sf],
        queryParams: [
          { key: "active", label: "Active", type: "string" },
          { key: "client_form_type_id", label: "Client Form Type ID", type: "string" },
          { key: "prerequisite_form_template_ids", label: "Prerequisite Template IDs (csv)", type: "string" }
        ]
      },
      {
        id: "client-form-rule-create",
        label: "Create Client Form Rule",
        mode: "create",
        method: "POST",
        path: "/api/v1/{tenant_id}/client-form-rules",
        pathParams: [sf],
        bodyFields: [
          { key: "name", label: "Name", type: "string", required: true },
          { key: "client_form_type_id", label: "Client Form Type ID", type: "string", required: true },
          { key: "scope", label: "Scope", type: "string", required: true, enum: ["envelope", "account"] },
          { key: "endpoints", label: "Endpoints JSON", type: "object", required: true },
          { key: "prerequisite_form_template_ids", label: "Prerequisite Template IDs", type: "array", itemsType: "string", required: true, nullable: true },
          { key: "active", label: "Active", type: "boolean" },
          { key: "optional", label: "Optional", type: "boolean" },
          { key: "priority", label: "Priority", type: "integer" },
          { key: "requires_acknowledgement", label: "Requires Acknowledgement", type: "boolean" },
          { key: "requires_signature", label: "Requires Signature", type: "boolean" },
          { key: "esign_eligible", label: "eSign Eligible", type: "boolean" },
          { key: "acknowledgement_config", label: "Acknowledgement Config JSON", type: "object" },
          { key: "rules", label: "Rules JSON", type: "object" }
        ]
      },
      {
        id: "client-form-rules-by-prerequisites",
        label: "By Prerequisites",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/client-form-rules/by-prerequisites",
        pathParams: [sf],
        bodyFields: [
          { key: "active_only", label: "Active Only", type: "boolean" },
          { key: "prerequisite_form_template_ids", label: "Prerequisite Template IDs", type: "array", itemsType: "string", required: true }
        ]
      },
      {
        id: "client-form-rules-evaluate",
        label: "Evaluate Rules",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/client-form-rules/evaluate",
        pathParams: [sf],
        bodyFields: [
          { key: "custodian", label: "Custodian", type: "string", required: true },
          { key: "custodian_forms", label: "Custodian Forms JSON Array", type: "array", itemsType: "object", required: true, nullable: true }
        ]
      },
      {
        id: "client-form-rule-get",
        label: "Get Client Form Rule",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-form-rules/{client_form_rule_id}",
        pathParams: [sf, { key: "client_form_rule_id", label: "Client Form Rule ID", type: "string", required: true }]
      },
      {
        id: "client-form-rule-patch",
        label: "Patch Client Form Rule",
        mode: "update",
        method: "PATCH",
        path: "/api/v1/{tenant_id}/client-form-rules/{client_form_rule_id}",
        pathParams: [sf, { key: "client_form_rule_id", label: "Client Form Rule ID", type: "string", required: true }],
        bodyFields: [
          { key: "name", label: "Name", type: "string" },
          { key: "client_form_type_id", label: "Client Form Type ID", type: "string" },
          { key: "scope", label: "Scope", type: "string", enum: ["envelope", "account"] },
          { key: "endpoints", label: "Endpoints JSON", type: "object" },
          { key: "prerequisite_form_template_ids", label: "Prerequisite Template IDs", type: "array", itemsType: "string" },
          { key: "active", label: "Active", type: "boolean" },
          { key: "optional", label: "Optional", type: "boolean" },
          { key: "priority", label: "Priority", type: "integer" },
          { key: "requires_acknowledgement", label: "Requires Acknowledgement", type: "boolean" },
          { key: "requires_signature", label: "Requires Signature", type: "boolean" },
          { key: "esign_eligible", label: "eSign Eligible", type: "boolean" },
          { key: "clear_acknowledgement_config", label: "Clear Acknowledgement Config", type: "boolean" },
          { key: "acknowledgement_config", label: "Acknowledgement Config JSON", type: "object" },
          { key: "rules", label: "Rules JSON", type: "object" }
        ]
      },
      {
        id: "client-form-rule-update",
        label: "Update Client Form Rule",
        mode: "update",
        method: "PUT",
        path: "/api/v1/{tenant_id}/client-form-rules/{client_form_rule_id}",
        pathParams: [sf, { key: "client_form_rule_id", label: "Client Form Rule ID", type: "string", required: true }],
        bodyFields: [
          { key: "name", label: "Name", type: "string", required: true },
          { key: "client_form_type_id", label: "Client Form Type ID", type: "string", required: true },
          { key: "scope", label: "Scope", type: "string", required: true, enum: ["envelope", "account"] },
          { key: "endpoints", label: "Endpoints JSON", type: "object", required: true },
          { key: "prerequisite_form_template_ids", label: "Prerequisite Template IDs", type: "array", itemsType: "string", required: true, nullable: true },
          { key: "active", label: "Active", type: "boolean", required: true },
          { key: "optional", label: "Optional", type: "boolean", required: true },
          { key: "priority", label: "Priority", type: "integer", required: true },
          { key: "requires_acknowledgement", label: "Requires Acknowledgement", type: "boolean", required: true },
          { key: "requires_signature", label: "Requires Signature", type: "boolean", required: true },
          { key: "esign_eligible", label: "eSign Eligible", type: "boolean", required: true },
          { key: "acknowledgement_config", label: "Acknowledgement Config JSON", type: "object" },
          { key: "rules", label: "Rules JSON", type: "object" }
        ]
      },
      {
        id: "client-form-rule-delete",
        label: "Delete Client Form Rule",
        mode: "delete",
        method: "DELETE",
        path: "/api/v1/{tenant_id}/client-form-rules/{client_form_rule_id}",
        pathParams: [sf, { key: "client_form_rule_id", label: "Client Form Rule ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "external-system-ids",
    label: "External System IDs",
    batch: 2,
    endpoints: [
      {
        id: "external-system-ids-expiring-get",
        label: "Get Expiring IDs",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/external-system-ids/expiring",
        pathParams: [sf],
        queryParams: [{ key: "before", label: "Before (RFC3339)", type: "string" }]
      },
      {
        id: "external-system-ids-get",
        label: "Get IDs By Entity",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/external-system-ids/{entity_type}/{entity_id}",
        pathParams: [
          sf,
          { key: "entity_type", label: "Entity Type", type: "string", required: true },
          { key: "entity_id", label: "Entity ID", type: "string", required: true }
        ]
      }
    ]
  },
  {
    id: "servicing-table-configs",
    label: "Servicing Table Configs",
    batch: 2,
    endpoints: [
      {
        id: "servicing-table-config-get",
        label: "Get Servicing Table Config",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/servicing-table-configs/{table_key}",
        pathParams: [sf, { key: "table_key", label: "Table Key", type: "string", required: true }]
      },
      {
        id: "servicing-table-config-put",
        label: "Upsert Servicing Table Config",
        mode: "update",
        method: "PUT",
        path: "/api/v1/{tenant_id}/servicing-table-configs/{table_key}",
        pathParams: [sf, { key: "table_key", label: "Table Key", type: "string", required: true }],
        bodyFields: [
          { key: "all_view_filters", label: "All View Filters JSON", type: "object", required: true },
          { key: "columns", label: "Columns JSON", type: "object", required: true },
          { key: "default_column_visibility", label: "Default Column Visibility JSON", type: "object", required: true },
          { key: "default_sorting", label: "Default Sorting JSON", type: "object", required: true },
          { key: "only_assigned", label: "Only Assigned", type: "boolean", required: true },
          { key: "suggested_filters", label: "Suggested Filters JSON", type: "object", required: true },
          { key: "table_key", label: "Table Key", type: "string", required: true }
        ]
      }
    ]
  },
  {
    id: "address-completion",
    label: "Address Completion",
    batch: 3,
    endpoints: [
      {
        id: "address-completion-autocomplete",
        label: "Autocomplete Address",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/address-completion/autocomplete",
        pathParams: [sf],
        bodyFields: [
          { key: "input", label: "Input", type: "string", required: true },
          { key: "countries", label: "Countries (ISO alpha-2)", type: "array", itemsType: "string", nullable: true },
          { key: "session_token", label: "Session Token", type: "string" }
        ]
      },
      {
        id: "address-completion-place-details",
        label: "Place Details",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/address-completion/place-details",
        pathParams: [sf],
        bodyFields: [
          { key: "place_id", label: "Place ID", type: "string", required: true },
          { key: "session_token", label: "Session Token", type: "string" }
        ]
      }
    ]
  },
  {
    id: "identity-verification",
    label: "Identity Verification",
    batch: 3,
    endpoints: [
      {
        id: "identity-verification-verify",
        label: "Verify Identity",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/identity-verification/verify",
        pathParams: [sf],
        bodyFields: [
          { key: "first_name", label: "First Name", type: "string", required: true },
          { key: "last_name", label: "Last Name", type: "string", required: true },
          { key: "middle_name", label: "Middle Name", type: "string" },
          { key: "correlation_id", label: "Correlation ID", type: "string", required: true },
          { key: "reference_id", label: "Reference ID", type: "string" },
          { key: "email", label: "Email", type: "string" },
          { key: "ip_address", label: "IP Address", type: "string" },
          { key: "ssn", label: "SSN", type: "string" },
          { key: "date_of_birth", label: "Date Of Birth JSON", type: "object" },
          { key: "address", label: "Address JSON", type: "object", required: true }
        ]
      }
    ]
  },
  {
    id: "integration",
    label: "Integration",
    batch: 3,
    endpoints: [
      {
        id: "direct-ingest-events",
        label: "Ingest Events",
        mode: "action",
        method: "POST",
        path: "/api/v1/{tenant_id}/integration/ingest-events",
        pathParams: [sf],
        bodyFields: [
          { key: "object_type", label: "Object Type", type: "string", required: true },
          { key: "records", label: "Records JSON Array", type: "array", itemsType: "object", required: true, nullable: true },
          { key: "batch_id", label: "Batch ID", type: "string" },
          { key: "source", label: "Source", type: "string" }
        ]
      }
    ]
  },
  {
    id: "registrations",
    label: "Registrations",
    batch: 3,
    endpoints: [
      {
        id: "registration-list",
        label: "List Registrations",
        mode: "list",
        method: "GET",
        path: "/api/v1/{tenant_id}/registrations",
        pathParams: [sf]
      },
      {
        id: "registration-create",
        label: "Create Registration",
        mode: "create",
        method: "POST",
        path: "/api/v1/{tenant_id}/registrations",
        pathParams: [sf],
        bodyFields: [{ key: "name", label: "Name", type: "string", required: true }]
      },
      {
        id: "registration-get",
        label: "Get Registration",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/registrations/{registration_id}",
        pathParams: [sf, { key: "registration_id", label: "Registration ID", type: "string", required: true }]
      },
      {
        id: "registration-patch",
        label: "Patch Registration",
        mode: "update",
        method: "PATCH",
        path: "/api/v1/{tenant_id}/registrations/{registration_id}",
        pathParams: [sf, { key: "registration_id", label: "Registration ID", type: "string", required: true }],
        bodyFields: [{ key: "name", label: "Name", type: "string" }]
      },
      {
        id: "registration-update",
        label: "Update Registration",
        mode: "update",
        method: "PUT",
        path: "/api/v1/{tenant_id}/registrations/{registration_id}",
        pathParams: [sf, { key: "registration_id", label: "Registration ID", type: "string", required: true }],
        bodyFields: [{ key: "name", label: "Name", type: "string", required: true }]
      },
      {
        id: "registration-delete",
        label: "Delete Registration",
        mode: "delete",
        method: "DELETE",
        path: "/api/v1/{tenant_id}/registrations/{registration_id}",
        pathParams: [sf, { key: "registration_id", label: "Registration ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "audit-trail",
    label: "Audit Trail",
    batch: 4,
    endpoints: [
      {
        id: "audit-trail-search",
        label: "Search Audit Trail",
        mode: "list",
        method: "POST",
        path: "/api/v1/{tenant_id}/audit-trail/search",
        pathParams: [sf],
        bodyFields: [
          { key: "actor_id", label: "Actor ID", type: "string" },
          { key: "actor_type", label: "Actor Type", type: "string" },
          { key: "occurred_after", label: "Occurred After (ISO)", type: "string" },
          { key: "occurred_before", label: "Occurred Before (ISO)", type: "string" },
          { key: "operation", label: "Operation", type: "string" },
          { key: "record_id", label: "Record ID", type: "string" },
          { key: "request_id", label: "Request ID", type: "string" },
          { key: "table_name", label: "Table Name", type: "string" },
          { key: "pagination_params", label: "Pagination Params JSON", type: "object" }
        ]
      }
    ]
  },
  {
    id: "business-groups",
    label: "Business Groups",
    batch: 4,
    endpoints: [
      {
        id: "business-group-create",
        label: "Create Business Group",
        mode: "create",
        method: "POST",
        path: "/api/v1/{tenant_id}/business-groups",
        pathParams: [sf],
        bodyFields: [
          { key: "external_id", label: "External ID", type: "string", required: true },
          { key: "group_type", label: "Group Type", type: "string", required: true },
          { key: "name", label: "Name", type: "string", required: true },
          { key: "description", label: "Description", type: "string" },
          { key: "status", label: "Status", type: "string" },
          { key: "additional_attributes", label: "Additional Attributes JSON", type: "object" }
        ]
      },
      {
        id: "business-group-get",
        label: "Get Business Group",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/business-groups/{business_group_id}",
        pathParams: [sf, { key: "business_group_id", label: "Business Group ID", type: "string", required: true }]
      }
    ]
  },
  {
    id: "ledger",
    label: "Ledger",
    batch: 4,
    endpoints: [
      {
        id: "client-organisation-balances-get",
        label: "Get Client Organisation Balances",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances",
        pathParams: [sf, { key: "client_organisation_id", label: "Client Organisation ID", type: "string", required: true }],
        queryParams: [
          { key: "balance_scope", label: "Balance Scope", type: "string" },
          { key: "balance_type", label: "Balance Type", type: "string" },
          { key: "currency", label: "Currency", type: "string" }
        ]
      },
      {
        id: "client-organisation-balance-lineage-get",
        label: "Get Balance Lineage",
        mode: "get",
        method: "GET",
        path: "/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances/lineage",
        pathParams: [sf, { key: "client_organisation_id", label: "Client Organisation ID", type: "string", required: true }],
        queryParams: [
          { key: "balance_scope", label: "Balance Scope", type: "string" },
          { key: "balance_type", label: "Balance Type", type: "string" },
          { key: "currency", label: "Currency", type: "string" },
          { key: "authority", label: "Authority", type: "string" },
          { key: "source_kind", label: "Source Kind", type: "string" }
        ]
      },
      {
        id: "ledger-aggregations-search",
        label: "Search Ledger Aggregations",
        mode: "list",
        method: "POST",
        path: "/api/v1/{tenant_id}/ledger/aggregations/search",
        pathParams: [sf],
        bodyFields: [
          { key: "source", label: "Source", type: "string", required: true },
          { key: "aggregation", label: "Aggregation", type: "string", required: true },
          { key: "measure", label: "Measure", type: "string", required: true },
          { key: "only_assigned", label: "Only Assigned", type: "boolean" },
          { key: "filters", label: "Filters JSON", type: "object" },
          { key: "group_by", label: "Group By", type: "array", itemsType: "string", nullable: true },
          { key: "pagination_params", label: "Pagination Params JSON", type: "object" },
          { key: "sort_keys", label: "Sort Keys JSON Array", type: "array", itemsType: "object", nullable: true }
        ]
      }
    ]
  },
  {
    id: "client-organisation",
    label: "Client Organisation",
    batch: 4,
    endpoints: [
      {
        id: "client-organisation-status-update",
        label: "Update Client Organisation Status",
        mode: "update",
        method: "PUT",
        path: "/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/status",
        pathParams: [sf, { key: "client_organisation_id", label: "Client Organisation ID", type: "string", required: true }],
        bodyFields: [{ key: "status", label: "Status", type: "string", required: true }]
      }
    ]
  }
];
