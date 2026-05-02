# General

Source: `Avantos Core API`

## Overview

Operations tagged 'General' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/admin/widget-definitions | operation | no | widget-definitions-list |  |
| POST /api/v1/admin/widget-definitions | operation | no | widget-definition-create |  |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/WidgetDefinitionCreateBody.json", "configSchema": {"key": {}}, "defaultConfig": {"key": {}}, "defaultHeight": 2, "defaultWidth": 2, "description": "Shows upcoming meetings", "displayName": "Meetings Widget", "maxHeight": 4, "maxWidth": 4, "minHeight": 1, "minWidth": 1, "name": "meetings"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/WidgetDefinitionCreateBody.json |
| requestBody (application/json).configSchema | object | yes | JSON schema for widget configuration | {"key": {}} |
| requestBody (application/json).defaultConfig | object | no | Default configuration values | {"key": {}} |
| requestBody (application/json).defaultHeight | integer | yes | Default height in grid units | 2 |
| requestBody (application/json).defaultWidth | integer | yes | Default width in grid units | 2 |
| requestBody (application/json).description | string | no | Widget description | Shows upcoming meetings |
| requestBody (application/json).displayName | string | yes | Display name for UI | Meetings Widget |
| requestBody (application/json).maxHeight | integer | yes | Maximum height in grid units | 4 |
| requestBody (application/json).maxWidth | integer | yes | Maximum width in grid units | 4 |
| requestBody (application/json).minHeight | integer | yes | Minimum height in grid units | 1 |
| requestBody (application/json).minWidth | integer | yes | Minimum width in grid units | 1 |
| requestBody (application/json).name | string | yes | Unique widget name | meetings |
| DELETE /api/v1/admin/widget-definitions/{definition_id} | operation | no | widget-definition-delete |  |
| definition_id | string | yes | The widget definition ID | wdef_123 |
| GET /api/v1/admin/widget-definitions/{definition_id} | operation | no | widget-definition-get |  |
| definition_id | string | yes | The widget definition ID | wdef_123 |
| PATCH /api/v1/admin/widget-definitions/{definition_id} | operation | no | widget-definition-update |  |
| definition_id | string | yes | The widget definition ID | wdef_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/WidgetDefinitionUpdateBody.json", "configSchema": {"key": {}}, "defaultConfig": {"key": {}}, "defaultHeight": 2, "defaultWidth": 2, "description": "Updated description", "displayName": "Updated Widget", "maxHeight": 4, "maxWidth": 4, "minHeight": 1, "minWidth": 1} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/WidgetDefinitionUpdateBody.json |
| requestBody (application/json).configSchema | object | no | JSON schema for widget configuration | {"key": {}} |
| requestBody (application/json).defaultConfig | object | no | Default configuration values | {"key": {}} |
| requestBody (application/json).defaultHeight | integer | no | Default height in grid units | 2 |
| requestBody (application/json).defaultWidth | integer | no | Default width in grid units | 2 |
| requestBody (application/json).description | string | no | Widget description | Updated description |
| requestBody (application/json).displayName | string | no | Display name for UI | Updated Widget |
| requestBody (application/json).maxHeight | integer | no | Maximum height in grid units | 4 |
| requestBody (application/json).maxWidth | integer | no | Maximum width in grid units | 4 |
| requestBody (application/json).minHeight | integer | no | Minimum height in grid units | 1 |
| requestBody (application/json).minWidth | integer | no | Minimum width in grid units | 1 |
| POST /api/v1/{tenant_id}/abac/explain | operation | no | abac-access-explainer Explains why a specific user (by email and role) can or cannot access a specific client organisation. This is a debugging tool to understand ABAC policy decisions. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ABACExplainerInputBody.json", "client_org_external_id": "EXT-456", "client_org_id": "co_123", "email": "john.doe@example.com", "role": "mercer_wealth_advisor"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ABACExplainerInputBody.json |
| requestBody (application/json).client_org_external_id | string | no | The external ID of the client organization | EXT-456 |
| requestBody (application/json).client_org_id | string | no | The Avantos ID of the client organization | co_123 |
| requestBody (application/json).email | string | yes | The email of the user to check access for | john.doe@example.com |
| requestBody (application/json).role | string | yes | The role to evaluate (external or internal role name) | mercer_wealth_advisor |
| POST /api/v1/{tenant_id}/action-runs | operation | no | action-run-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunCreateInputBody.json", "action_blueprint_id": "bp_12345", "client__organisation_id": "co_xyz", "config_assign_to_me": false, "config_assignee_id": "a_12345", "configuration_data": {"key": {}}, "configuration_schemas": {"form_data_schema": {"key": {}}, "ui_schema": {"key": {}}}, "force_draft": false, "generator_field_path": "accounts", "meeting_id": "mt_12345", "name": "My Action Run", "parent_component_id": "arc_12345", "parent_run_id": "ac_12345", "recommended": true, "run_context": "<p>Hello</p>", "scheduled_at": "2026-01-15T10:30:00Z", "temp_run_context": "<p>Temporary context</p>"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunCreateInputBody.json |
| requestBody (application/json).action_blueprint_id | string | yes | The action blueprint ID to run | bp_12345 |
| requestBody (application/json).client__organisation_id | string | yes | the client organisation ID | co_xyz |
| requestBody (application/json).config_assign_to_me | boolean | no | Whether to assign the configuration task to the user who is making the request | False |
| requestBody (application/json).config_assignee_id | string | no | Optional:The ID of the agent to assign the configuration task associated with this action run to | a_12345 |
| requestBody (application/json).configuration_data | object | no | The configuration data for the action run | {"key": {}} |
| requestBody (application/json).configuration_schemas | object | no | Optional schemas for configuration form when dynamic fields are used | {"form_data_schema": {"key": {}}, "ui_schema": {"key": {}}} |
| requestBody (application/json).configuration_schemas.form_data_schema | object | no |  | {"key": {}} |
| requestBody (application/json).configuration_schemas.ui_schema | object | no |  | {"key": {}} |
| requestBody (application/json).force_draft | boolean | no | Whether to force the action run to be a draft. Defaults to true if not specified. | False |
| requestBody (application/json).generator_field_path | string | no | Optional: The JSON path of the generator field that spawned this action run | accounts |
| requestBody (application/json).meeting_id | string | no | The meeting ID to link to the action run | mt_12345 |
| requestBody (application/json).name | string | no | Name of the action run, if not provided the actionDescription from the configuration data or the blueprint name will be used | My Action Run |
| requestBody (application/json).parent_component_id | string | no | Optional: The ID of the parent component that spawned this action run (for generator fields) | arc_12345 |
| requestBody (application/json).parent_run_id | string | no | Optional: The ID of the parent action run id that spawned this action run (for generator fields) | ac_12345 |
| requestBody (application/json).recommended | boolean | yes | Whether the action run is recommended to be run | True |
| requestBody (application/json).run_context | string | no | Context of the action run | <p>Hello</p> |
| requestBody (application/json).scheduled_at | string | no | Timestamp when the action run should be scheduled to start. If not specified, the action run will be started immediately | 2026-01-15T10:30:00Z |
| requestBody (application/json).temp_run_context | string | no | Optional temporary context of the action run | <p>Temporary context</p> |
| POST /api/v1/{tenant_id}/action-runs/blueprint-version-reassign | operation | no | action-run-blueprint-version-reassign-bulk |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunBulkBlueprintVersionReassignInputBody.json", "blueprint_id": "bp_123", "from_blueprint_version": "v1.0.0", "to_blueprint_version": "v1.2.3"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunBulkBlueprintVersionReassignInputBody.json |
| requestBody (application/json).blueprint_id | string | yes | The blueprint ID to reassign versions within (required to avoid ambiguity) | bp_123 |
| requestBody (application/json).from_blueprint_version | string | yes | The source blueprint version number (e.g., 'v1.0.0', 'v1.2.3') to reassign from | v1.0.0 |
| requestBody (application/json).to_blueprint_version | string | yes | The target blueprint version number (e.g., 'v1.2.3', 'v2.0-beta') to reassign to | v1.2.3 |
| POST /api/v1/{tenant_id}/action-runs/client-organisation/batch-update | operation | no | action-run-client-organisation-batch-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunClientOrganisationBatchUpdateInputBody.json", "updates": [{"action_run_id": "ar_123", "client_organisation_id": "co_456"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunClientOrganisationBatchUpdateInputBody.json |
| requestBody (application/json).updates | ['array', 'null'] | yes | List of action run client organisation updates | [{"action_run_id": "ar_123", "client_organisation_id": "co_456"}] |
| requestBody (application/json).updates[] | object | yes | List of action run client organisation updates | {"action_run_id": "ar_123", "client_organisation_id": "co_456"} |
| requestBody (application/json).updates[].action_run_id | string | yes | The action run ID to update | ar_123 |
| requestBody (application/json).updates[].client_organisation_id | string | yes | The new client organisation ID | co_456 |
| POST /api/v1/{tenant_id}/action-runs/list | operation | no | action-run-list |  |
| tenant_id | string | yes | ID of the tenant | t_12345 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunListInputBody.json", "actions_only": true, "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "name", "sort_order": "ASC"}], "source_system_filter": "avantos"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunListInputBody.json |
| requestBody (application/json).actions_only | boolean | no | Whether to only return non-journey action runs. When false, the list includes both actions and journeys. | True |
| requestBody (application/json).filter |  | no | The Expression to filter the opportunities by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).only_assigned | boolean | no | Whether to only return action runs that are for client organisations assigned to the current user | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the action runs | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the opportunities by. | [{"sort_column": "name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the opportunities by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| requestBody (application/json).source_system_filter | string | no | Filter action runs by source system. | avantos |
| POST /api/v1/{tenant_id}/action-runs/lock | operation | no | action-run-bulk-lock |  |
| tenant_id | string | yes | The tenant ID | t_12345 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunBulkLockInputBody.json", "action_run_ids": ["string"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunBulkLockInputBody.json |
| requestBody (application/json).action_run_ids | ['array', 'null'] | yes | List of action run IDs to lock | ["string"] |
| requestBody (application/json).action_run_ids[] | string | yes | List of action run IDs to lock | string |
| POST /api/v1/{tenant_id}/action-runs/unlock | operation | no | action-run-bulk-unlock |  |
| tenant_id | string | yes | The tenant ID | t_12345 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunBulkUnlockInputBody.json", "action_run_ids": ["string"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunBulkUnlockInputBody.json |
| requestBody (application/json).action_run_ids | ['array', 'null'] | yes | List of action run IDs to unlock | ["string"] |
| requestBody (application/json).action_run_ids[] | string | yes | List of action run IDs to unlock | string |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id} | operation | no | action-run-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/accept | operation | no | action-run-accept-recommendation |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunAcceptRecommendationInputBody.json", "start_date": "2026-01-15T10:30:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunAcceptRecommendationInputBody.json |
| requestBody (application/json).start_date | string | no | Timestamp when the action run should be started | 2026-01-15T10:30:00Z |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/blueprint-version | operation | no | action-run-blueprint-version-reassign |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunBlueprintVersionReassignInputBody.json", "blueprint_version": "v1.2.3"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunBlueprintVersionReassignInputBody.json |
| requestBody (application/json).blueprint_version | string | yes | The blueprint version number (e.g., 'v1.2.3', 'v2.0-beta') to reassign the action run to | v1.2.3 |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/client-organisation | operation | no | action-run-client-organisation-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunClientOrganisationUpdateInputBody.json", "client_organisation_id": "co_123"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunClientOrganisationUpdateInputBody.json |
| requestBody (application/json).client_organisation_id | string | yes | The new client organisation ID | co_123 |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id}/comments | operation | no | action-run-comments-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id}/components/{component_id}/generators/{field_path}/tree | operation | no | action-run-component-generator-tree |  |
| tenant_id | string | yes | The tenant ID | t_12345 |
| action_run_id | string | yes | The action run ID | ar_456 |
| component_id | string | yes | The run component ID hosting the generator | arc_789 |
| field_path | string | yes | The x-generator field path on the component to start the tree from | accounts |
| tag | string | yes | Tag to filter components by | esign |
| include_data | boolean | no | When true, include the submission task's data for each tagged component. Data is unbounded JSONB and may significantly increase response size for deep trees. | False |
| include_form_schema | boolean | no | When true, include each tagged component's form_schema (JSON Schema definition). For dynamic tasks the resolved form schema is returned. | False |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/context | operation | no | action-run-context-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunContextUpdateInputBody.json", "run_context": "<p>Hello</p>"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunContextUpdateInputBody.json |
| requestBody (application/json).run_context | string | yes | The new context value for the action run | <p>Hello</p> |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id}/data-snapshots/current | operation | no | action-run-current-data-snapshot-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/name | operation | no | action-run-name-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunNameUpdateInputBody.json", "name": "My Action Run"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunNameUpdateInputBody.json |
| requestBody (application/json).name | string | yes | Name of the action run | My Action Run |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments | operation | no | action-run-pre-assignments-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments/{pre_assignment_id}/assign | operation | no | action-run-pre-assignment-assign |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| pre_assignment_id | string | yes | The pre-assignment ID | pa_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunPreAssignmentAssignInputBody.json", "agent_id": "ag_456"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunPreAssignmentAssignInputBody.json |
| requestBody (application/json).agent_id | string | no | The agent ID to assign, or null to unassign | ag_456 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/reassign | operation | no | action-run-reassign |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunReassignInputBody.json", "agent_id": "a_12345"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunReassignInputBody.json |
| requestBody (application/json).agent_id | string | yes | The ID of the agent to assign all tasks to. Pass empty string to unassign all tasks. | a_12345 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/reject | operation | no | action-run-reject-recommendation |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunRejectRecommendationInputBody.json", "rejection_reason": "The action run was rejected because it was no longer needed"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunRejectRecommendationInputBody.json |
| requestBody (application/json).rejection_reason | string | no | Reason for rejecting the action run | The action run was rejected because it was no longer needed |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/request-cancel | operation | no | action-run-request-cancel |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunRequestCancelInputBody.json", "reason": "The action run was cancelled because it was no longer needed"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunRequestCancelInputBody.json |
| requestBody (application/json).reason | string | yes | Reason for cancelling the action run | The action run was cancelled because it was no longer needed |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/schedule | operation | no | action-run-schedule-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunScheduleUpdateInputBody.json", "draft": true, "scheduled_at": "2026-01-15T10:30:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunScheduleUpdateInputBody.json |
| requestBody (application/json).draft | boolean | no | If true, ensures the run remains in draft status when scheduled. Only valid when the configuration component is still incomplete; returns 400 if configuration is already complete. If false or omitted, follows normal scheduling behavior: runs scheduled for future dates become 'Scheduled', runs scheduled for today become 'Todo'. | True |
| requestBody (application/json).scheduled_at | string | yes | Timestamp when the action run should be scheduled to start. To clear/remove scheduling, set to today's date (the system will automatically unschedule it). | 2026-01-15T10:30:00Z |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/state-model/advance | operation | no | action-run-state-model-advance |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunStateModelAdvanceInputBody.json", "input": {"key": {}}, "transition_key": "finish"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunStateModelAdvanceInputBody.json |
| requestBody (application/json).input | object | no | Input values for fields declared in the transition's input_schema. Required fields must be present; unknown keys are rejected. | {"key": {}} |
| requestBody (application/json).transition_key | string | yes | The key of the API transition to trigger | finish |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id}/state-model/transitions | operation | no | action-run-state-model-transitions-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id}/status-logs | operation | no | action-run-status-logs |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/approve | operation | no | action-run-task-approve |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to approve | task_456 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/assign | operation | no | action-run-task-assign |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to assign | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskAssignInputBody.json", "agent_id": "a_12345"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskAssignInputBody.json |
| requestBody (application/json).agent_id | ['string', 'null'] | yes | The ID of the agent to assign to the task. Pass null to unassign the task | a_12345 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/cancel | operation | no | action-run-task-cancel-confirm |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID | task_456 |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/change-next-step-date | operation | no | action-run-task-next-step-date-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskNextStepDateUpdateInputBody.json", "next_step_date": "2026-01-15T10:30:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskNextStepDateUpdateInputBody.json |
| requestBody (application/json).next_step_date | string | yes | Timestamp when the task is ready for the next step | 2026-01-15T10:30:00Z |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/claim | operation | no | action-run-task-claim |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to claim | task_456 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/cron-job-queued | operation | no | action-run-task-cron-job-queued-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskCronJobQueuedUpdateInputBody.json", "cron_job_queued": "job_123"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskCronJobQueuedUpdateInputBody.json |
| requestBody (application/json).cron_job_queued | ['string', 'null'] | yes | The ID of the cron job queued for this task. Pass null to clear the value. | job_123 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/reject | operation | no | action-run-task-reject |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to reject | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskRejectInputBody.json", "comment": "string", "reason": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskRejectInputBody.json |
| requestBody (application/json).comment | string | no | Optional comment to add to the task after rejection | string |
| requestBody (application/json).reason | string | yes | A note explaining why the task was rejected | string |
| GET /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/render | operation | no | action-run-task-render |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to render | ar_t_456 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/reopen | operation | no | action-run-task-reopen |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to reopen | task_456 |
| PATCH /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/save | operation | no | action-run-task-patch |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to partially update | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskPatchInputBody.json", "data": {"key": {}}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskPatchInputBody.json |
| requestBody (application/json).data | object | yes | Partial data to update. Only provided fields will be updated. | {"key": {}} |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/save | operation | no | action-run-task-save |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to submit | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskSubmitInputBody.json", "data": {"key": {}}, "graph_etag": "string", "prevent_status_change": true, "schemas": {"form_data_schema": {"key": {}}, "ui_schema": {"key": {}}}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskSubmitInputBody.json |
| requestBody (application/json).data | object | yes |  | {"key": {}} |
| requestBody (application/json).graph_etag | string | no | ETag from render response for optimistic concurrency on data-layer write-back | string |
| requestBody (application/json).prevent_status_change | boolean | no | If true, prevents the task from automatically transitioning from 'todo' to 'in_progress' when saving. Defaults to false (status will change). | True |
| requestBody (application/json).schemas | object | no |  | {"form_data_schema": {"key": {}}, "ui_schema": {"key": {}}} |
| requestBody (application/json).schemas.form_data_schema | object | no |  | {"key": {}} |
| requestBody (application/json).schemas.ui_schema | object | no |  | {"key": {}} |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/schedule | operation | no | action-run-task-schedule-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskScheduleUpdateInputBody.json", "scheduled_at": "2026-01-15T10:30:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskScheduleUpdateInputBody.json |
| requestBody (application/json).scheduled_at | string | yes | Timestamp when the task should be scheduled to start | 2026-01-15T10:30:00Z |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/start | operation | no | action-run-task-start |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to start | ar_c_456 |
| POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/submit | operation | no | action-run-task-submit |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task to submit | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskSubmitInputBody.json", "data": {"key": {}}, "graph_etag": "string", "prevent_status_change": true, "schemas": {"form_data_schema": {"key": {}}, "ui_schema": {"key": {}}}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskSubmitInputBody.json |
| requestBody (application/json).data | object | yes |  | {"key": {}} |
| requestBody (application/json).graph_etag | string | no | ETag from render response for optimistic concurrency on data-layer write-back | string |
| requestBody (application/json).prevent_status_change | boolean | no | If true, prevents the task from automatically transitioning from 'todo' to 'in_progress' when saving. Defaults to false (status will change). | True |
| requestBody (application/json).schemas | object | no |  | {"form_data_schema": {"key": {}}, "ui_schema": {"key": {}}} |
| requestBody (application/json).schemas.form_data_schema | object | no |  | {"key": {}} |
| requestBody (application/json).schemas.ui_schema | object | no |  | {"key": {}} |
| PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/waiting | operation | no | action-run-task-update-waiting |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |
| task_id | string | yes | The task ID of the task | task_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskUpdateWaitingInputBody.json", "next_step_date": "2023-04-01T12:00:00Z", "note": "We're still waiting on Bob to submit the details", "waiting": true, "waiting_for": "Client approval", "who_waiting_on": "Client"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskUpdateWaitingInputBody.json |
| requestBody (application/json).next_step_date | string | no | The date and time of the next step in the task | 2023-04-01T12:00:00Z |
| requestBody (application/json).note | string | no | User defined info, possibly describing why the task is in its current state | We're still waiting on Bob to submit the details |
| requestBody (application/json).waiting | boolean | yes | Whether the task is waiting for a response | True |
| requestBody (application/json).waiting_for | string | no | What the task is waiting for | Client approval |
| requestBody (application/json).who_waiting_on | string | no | Who the task is waiting on | Client |
| GET /api/v1/{tenant_id}/actions/blueprints | operation | no | action-blueprint-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| limit | integer | no |  | 1 |
| POST /api/v1/{tenant_id}/actions/blueprints | operation | no | action-blueprint-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionBlueprintCreateInputBody.json", "ai_context_description": "AI-optimized customer onboarding workflow", "category": "onboarding", "description": "string", "is_journey": false, "name": "string", "short_description": "short description"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionBlueprintCreateInputBody.json |
| requestBody (application/json).ai_context_description | string | no | Context description of the blueprint used by AI | AI-optimized customer onboarding workflow |
| requestBody (application/json).category | string | no | The category of the action blueprint | onboarding |
| requestBody (application/json).description | string | yes |  | string |
| requestBody (application/json).is_journey | boolean | no | Whether the blueprint is a journey | False |
| requestBody (application/json).name | string | yes |  | string |
| requestBody (application/json).short_description | string | no | The short description of the action blueprint | short description |
| DELETE /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} | operation | no | action-blueprint-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_456 |
| GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} | operation | no | action-blueprint-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_456 |
| POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} | operation | no | action-blueprint-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID to update | bp_12345 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionBlueprintUpdateInputBody.json", "ai_context_description": "AI-optimized customer onboarding workflow", "ai_description": "Use this action for customer onboarding flows", "category": "onboarding", "description": "string", "name": "string", "short_description": "short description"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionBlueprintUpdateInputBody.json |
| requestBody (application/json).ai_context_description | string | no | Context description of the blueprint used by AI | AI-optimized customer onboarding workflow |
| requestBody (application/json).ai_description | string | no | Description of the blueprint used by AI for recommendations | Use this action for customer onboarding flows |
| requestBody (application/json).category | string | no | The category of the action blueprint | onboarding |
| requestBody (application/json).description | string | yes |  | string |
| requestBody (application/json).name | string | yes |  | string |
| requestBody (application/json).short_description | string | no | The short description of the action blueprint | short description |
| GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/environments/history | operation | no | blueprint-environment-history-get Gets the deployment history for a blueprint. Optionally filter by blueprint version ID and/or environment. Returns all deployment records including soft-deleted ones (when a version was replaced). |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_456 |
| blueprint_version_id | string | no | Optional blueprint version ID to filter by | bpv_789 |
| environment | string | no | Optional environment name to filter by | production |
| PUT /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/environments/{environment}/version | operation | no | blueprint-environment-version-set Sets the active blueprint version for a specific environment. Only one version can be active per environment. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_456 |
| environment | string | yes | The environment name | production |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SetEnvironmentVersionInputBody.json", "promotion_notes": "Tested in staging, ready for production", "version_id": "bpv_789"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SetEnvironmentVersionInputBody.json |
| requestBody (application/json).promotion_notes | string | no | Optional notes about the promotion | Tested in staging, ready for production |
| requestBody (application/json).version_id | string | yes | The blueprint version ID to set for this environment | bpv_789 |
| PATCH /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/is-journey | operation | no | action-blueprint-toggle-is-journey |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_12345 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionBlueprintToggleIsJourneyInputBody.json", "is_journey": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionBlueprintToggleIsJourneyInputBody.json |
| requestBody (application/json).is_journey | boolean | yes | Whether to mark this blueprint as a journey | True |
| POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions | operation | no | action-blueprint-version-create |  |
| tenant_id | string | yes |  | string |
| action_blueprint_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionBlueprintVersionCreateInputBody.json", "parent_blueprint_version_id": "string", "version_notes": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionBlueprintVersionCreateInputBody.json |
| requestBody (application/json).parent_blueprint_version_id | string | yes |  | string |
| requestBody (application/json).version_notes | string | yes |  | string |
| DELETE /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id} | operation | no | action-blueprint-version-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_456 |
| blueprint_version_id | string | yes | The blueprint version ID to delete | bpv_789 |
| PATCH /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}/published | operation | no | action-blueprint-version-published |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_456 |
| blueprint_version_id | string | yes | The blueprint version ID to publish/unpublish | bpv_789 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionBlueprintVersionPublishedInputBody.json", "published": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionBlueprintVersionPublishedInputBody.json |
| requestBody (application/json).published | boolean | yes | Whether to publish (true) or unpublish (false) the version | True |
| GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph | operation | no | action-blueprint-graph-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | bp_456 |
| blueprint_version_id | string | yes | The blueprint version ID | bpv_123 |
| PUT /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph | operation | no | action-blueprint-graph-put |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID to update | bp_12345 |
| blueprint_version_id | string | yes | The blueprint version ID | bpv_123 |
| If-Match | string | no | ETag from GET response. Required — update is rejected with 412 if the blueprint version has been modified since this ETag was issued. | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionBlueprintGraphPutBody.json", "component_task_priorities": {"form-1": "high", "form-2": "low"}, "custom_javascript_function_id": "cjsf_123", "custom_status_configuration": {}, "edges": [{"source": "node_1", "target": "node_2"}], "nodes": [{"data": {"allowed_submission_states": [{}], "approval_auto_assign_config": {"form_field": {}, "form_key": {}, "type": {}, "value": {}}, "approval_required": true, "approval_roles": [{}], "approval_scheduled_delay": {"time": 3600, "unit": "minutes"}, "approval_sla_duration": {"time": 3600, "unit": "minutes"}, "approval_task_name": "string", "auto_approve_condition": {}, "auto_assign_config": {"form_field": {}, "form_key": {}, "type": {}, "value": {}}, "auto_submit_condition": {}, "call_as_config": {"form_field": {}, "form_key": {}, "type": {}, "value": {}}, "child_components": ["form-1", "form-2"], "component_create": {}, "component_id": "c_12345", "component_key": "component-key-1", "component_type": "form", "component_update": {}, "config": "string", "config_assignee": "assignee@example.com", "data_promotion_config": {"key": {}}, "db_output_mapping": {"key": {}}, "dl_input_mapping": {"key": {}}, "dl_output_mapping": {"key": {}}, "dont_fail_on_non_200": false, "expression": "{result: clientOrg.name + ' - ' + action.Status}", "force_draft": false, "input_mapping": {"key": {}}, "item_schema": {}, "name": "My Form", "output_mapping": [{}], "parent_promotion_fields": [{}], "permitted_roles": [{}], "prerequisites": [{}], "run_context": "Processing payment for order #123", "run_name": "Process Payment", "run_scheduled_at": "2023-04-01T12:00:00Z", "run_started_by_user": "example@email.com", "scheduled_delay": {"time": 3600, "unit": "minutes"}, "section_name": "string", "skip_completion_wait": false, "sla_duration": {"time": 3600, "unit": "minutes"}, "state_transition_rules": {"state_transition_rules_if": {}, "state_transition_rules_then": {}}, "synchronous_execution": false, "tags": [{}], "target_status": "complete", "task_name_override_expression": {}, "task_tags": [{}]}, "hidden": false, "id": "node_1", "position": {"x": 100, "y": 200}, "type": "form"}], "promoted_data_order": ["string"], "state_model_schema": {"data_schema": {}, "description": "string", "initial_state": "draft", "name": "LoanApplication", "states": [{"description": "string", "display_color": "Neutral", "display_name": "Draft", "is_final": false, "is_required": false, "metadata": {"key": {}}, "name": "draft"}], "transitions": [{"condition": {}, "display_name": "Accept", "from_states": ["draft"], "input_schema": [{}], "key": "submit_application", "on_transition": {"update_data": {}}, "priority": 0, "to_state": "submitted", "trigger": {"config": {}, "type": {}}}]}, "version_notes": "Updated form XYZ fields"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionBlueprintGraphPutBody.json |
| requestBody (application/json).component_task_priorities | object | no | Mapping of component keys to task priorities (low, medium, high). Only applicable to form components. | {"form-1": "high", "form-2": "low"} |
| requestBody (application/json).custom_javascript_function_id | string | no | The ID of the custom javascript function to use for the action blueprint version | cjsf_123 |
| requestBody (application/json).custom_status_configuration |  | no | Configuration for custom action run statuses | {} |
| requestBody (application/json).edges | ['array', 'null'] | yes | The edges that represent the dependencies between the components of the action blueprint | [{"source": "node_1", "target": "node_2"}] |
| requestBody (application/json).edges[] | object | yes | The edges that represent the dependencies between the components of the action blueprint | {"source": "node_1", "target": "node_2"} |
| requestBody (application/json).edges[].source | string | yes | The source node ID | node_1 |
| requestBody (application/json).edges[].target | string | yes | The target node ID | node_2 |
| requestBody (application/json).nodes | ['array', 'null'] | yes | The nodes that represent the components of the action blueprint | [{"data": {"allowed_submission_states": ["string"], "approval_auto_assign_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "approval_required": true, "approval_roles": ["string"], "approval_scheduled_delay": {"time": 3600, "unit": "minutes"}, "approval_sla_duration": {"time": 3600, "unit": "minutes"}, "approval_task_name": "string", "auto_approve_condition": {}, "auto_assign_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "auto_submit_condition": {}, "call_as_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "child_components": ["form-1", "form-2"], "component_create": {}, "component_id": "c_12345", "component_key": "component-key-1", "component_type": "form", "component_update": {}, "config": "string", "config_assignee": "assignee@example.com", "data_promotion_config": {"key": "string"}, "db_output_mapping": {"key": {"column": {}, "record_id": {}, "table": {}, "validation": {}}}, "dl_input_mapping": {"key": {"source": {}, "type": {}}}, "dl_output_mapping": {"key": {"source": {}, "target": {}, "type": {}}}, "dont_fail_on_non_200": false, "expression": "{result: clientOrg.name + ' - ' + action.Status}", "force_draft": false, "input_mapping": {"key": {}}, "item_schema": {}, "name": "My Form", "output_mapping": [{"child_component_key": {}, "child_output_key": {}, "parent_output_key": {}}], "parent_promotion_fields": ["string"], "permitted_roles": ["string"], "prerequisites": ["string"], "run_context": "Processing payment for order #123", "run_name": "Process Payment", "run_scheduled_at": "2023-04-01T12:00:00Z", "run_started_by_user": "example@email.com", "scheduled_delay": {"time": 3600, "unit": "minutes"}, "section_name": "string", "skip_completion_wait": false, "sla_duration": {"time": 3600, "unit": "minutes"}, "state_transition_rules": {"state_transition_rules_if": {}, "state_transition_rules_then": "pending_approval"}, "synchronous_execution": false, "tags": ["esign"], "target_status": "complete", "task_name_override_expression": {}, "task_tags": ["string"]}, "hidden": false, "id": "node_1", "position": {"x": 100, "y": 200}, "type": "form"}] |
| requestBody (application/json).nodes[] | object | yes | The nodes that represent the components of the action blueprint | {"data": {"allowed_submission_states": ["string"], "approval_auto_assign_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "approval_required": true, "approval_roles": ["string"], "approval_scheduled_delay": {"time": 3600, "unit": "minutes"}, "approval_sla_duration": {"time": 3600, "unit": "minutes"}, "approval_task_name": "string", "auto_approve_condition": {}, "auto_assign_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "auto_submit_condition": {}, "call_as_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "child_components": ["form-1", "form-2"], "component_create": {}, "component_id": "c_12345", "component_key": "component-key-1", "component_type": "form", "component_update": {}, "config": "string", "config_assignee": "assignee@example.com", "data_promotion_config": {"key": "string"}, "db_output_mapping": {"key": {"column": "blueprint_category", "record_id": {}, "table": "action_runs", "validation": {}}}, "dl_input_mapping": {"key": {"source": {"kind": {}, "path": {}}, "type": "dl_object_enum_v1"}}, "dl_output_mapping": {"key": {"source": {"field": {}}, "target": {"anchor": {}, "path": {}}, "type": "dl_writeback_v1"}}, "dont_fail_on_non_200": false, "expression": "{result: clientOrg.name + ' - ' + action.Status}", "force_draft": false, "input_mapping": {"key": {}}, "item_schema": {}, "name": "My Form", "output_mapping": [{"child_component_key": "string", "child_output_key": "string", "parent_output_key": "string"}], "parent_promotion_fields": ["string"], "permitted_roles": ["string"], "prerequisites": ["string"], "run_context": "Processing payment for order #123", "run_name": "Process Payment", "run_scheduled_at": "2023-04-01T12:00:00Z", "run_started_by_user": "example@email.com", "scheduled_delay": {"time": 3600, "unit": "minutes"}, "section_name": "string", "skip_completion_wait": false, "sla_duration": {"time": 3600, "unit": "minutes"}, "state_transition_rules": {"state_transition_rules_if": {}, "state_transition_rules_then": "pending_approval"}, "synchronous_execution": false, "tags": ["esign"], "target_status": "complete", "task_name_override_expression": {}, "task_tags": ["string"]}, "hidden": false, "id": "node_1", "position": {"x": 100, "y": 200}, "type": "form"} |
| requestBody (application/json).nodes[].data | object | yes | The component data associated with this node | {"allowed_submission_states": ["string"], "approval_auto_assign_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "approval_required": true, "approval_roles": ["string"], "approval_scheduled_delay": {"time": 3600, "unit": "minutes"}, "approval_sla_duration": {"time": 3600, "unit": "minutes"}, "approval_task_name": "string", "auto_approve_condition": {}, "auto_assign_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "auto_submit_condition": {}, "call_as_config": {"form_field": "string", "form_key": "string", "type": "client_org_role", "value": "string"}, "child_components": ["form-1", "form-2"], "component_create": {}, "component_id": "c_12345", "component_key": "component-key-1", "component_type": "form", "component_update": {}, "config": "string", "config_assignee": "assignee@example.com", "data_promotion_config": {"key": "string"}, "db_output_mapping": {"key": {"column": "blueprint_category", "record_id": {}, "table": "action_runs", "validation": {}}}, "dl_input_mapping": {"key": {"source": {"kind": "clients", "path": "client_organisation.name"}, "type": "dl_object_enum_v1"}}, "dl_output_mapping": {"key": {"source": {"field": "account_number_field"}, "target": {"anchor": {"field": {}, "id_field": {}}, "path": "financial_accounts.{id}.account_number"}, "type": "dl_writeback_v1"}}, "dont_fail_on_non_200": false, "expression": "{result: clientOrg.name + ' - ' + action.Status}", "force_draft": false, "input_mapping": {"key": {}}, "item_schema": {}, "name": "My Form", "output_mapping": [{"child_component_key": "string", "child_output_key": "string", "parent_output_key": "string"}], "parent_promotion_fields": ["string"], "permitted_roles": ["string"], "prerequisites": ["string"], "run_context": "Processing payment for order #123", "run_name": "Process Payment", "run_scheduled_at": "2023-04-01T12:00:00Z", "run_started_by_user": "example@email.com", "scheduled_delay": {"time": 3600, "unit": "minutes"}, "section_name": "string", "skip_completion_wait": false, "sla_duration": {"time": 3600, "unit": "minutes"}, "state_transition_rules": {"state_transition_rules_if": {}, "state_transition_rules_then": "pending_approval"}, "synchronous_execution": false, "tags": ["esign"], "target_status": "complete", "task_name_override_expression": {}, "task_tags": ["string"]} |
| requestBody (application/json).nodes[].hidden | boolean | no | Whether the node is hidden | False |
| requestBody (application/json).nodes[].id | string | yes | Unique identifier for the node in the graph | node_1 |
| requestBody (application/json).nodes[].position | object | yes | The x,y coordinates of the node in the graph | {"x": 100, "y": 200} |
| requestBody (application/json).nodes[].type | string | yes | The type of node (form, branch, configuration, trigger, forEach, action, statusGate, calculator or dynamicTask) | form |
| requestBody (application/json).promoted_data_order | ['array', 'null'] | no | The order of data promotion for the action blueprint | ["string"] |
| requestBody (application/json).promoted_data_order[] | string | no | The order of data promotion for the action blueprint | string |
| requestBody (application/json).state_model_schema | object | no | Optional state machine schema for tracking state throughout the action run lifecycle | {"data_schema": {}, "description": "string", "initial_state": "draft", "name": "LoanApplication", "states": [{"description": "string", "display_color": "Neutral", "display_name": "Draft", "is_final": false, "is_required": false, "metadata": {"key": {}}, "name": "draft"}], "transitions": [{"condition": {}, "display_name": "Accept", "from_states": ["draft"], "input_schema": [{"description": {}, "enum_values": {}, "key": {}, "label": {}, "required": {}, "type": {}}], "key": "submit_application", "on_transition": {"update_data": {"key": {}}}, "priority": 0, "to_state": "submitted", "trigger": {"config": {}, "type": "component_status"}}]} |
| requestBody (application/json).state_model_schema.data_schema |  | no | Optional JSON Schema for additional data fields | {} |
| requestBody (application/json).state_model_schema.description | string | no | Description of the state model schema | string |
| requestBody (application/json).state_model_schema.initial_state | string | yes | The initial state for new action runs | draft |
| requestBody (application/json).state_model_schema.name | string | yes | Name of the state model schema | LoanApplication |
| requestBody (application/json).state_model_schema.states | ['array', 'null'] | yes | Array of state definitions | [{"description": "string", "display_color": "Neutral", "display_name": "Draft", "is_final": false, "is_required": false, "metadata": {"key": {}}, "name": "draft"}] |
| requestBody (application/json).state_model_schema.states[] | object | yes | Array of state definitions | {"description": "string", "display_color": "Neutral", "display_name": "Draft", "is_final": false, "is_required": false, "metadata": {"key": {}}, "name": "draft"} |
| requestBody (application/json).state_model_schema.transitions | ['array', 'null'] | yes | Array of transition definitions | [{"condition": {}, "display_name": "Accept", "from_states": ["draft"], "input_schema": [{"description": "string", "enum_values": ["approved", "rejected"], "key": "reason", "label": "Reason", "required": true, "type": "string"}], "key": "submit_application", "on_transition": {"update_data": {"key": {}}}, "priority": 0, "to_state": "submitted", "trigger": {"config": {}, "type": "component_status"}}] |
| requestBody (application/json).state_model_schema.transitions[] | object | yes | Array of transition definitions | {"condition": {}, "display_name": "Accept", "from_states": ["draft"], "input_schema": [{"description": "string", "enum_values": ["approved", "rejected"], "key": "reason", "label": "Reason", "required": true, "type": "string"}], "key": "submit_application", "on_transition": {"update_data": {"key": {}}}, "priority": 0, "to_state": "submitted", "trigger": {"config": {}, "type": "component_status"}} |
| requestBody (application/json).version_notes | ['string', 'null'] | yes | Notes about this version update | Updated form XYZ fields |
| GET /api/v1/{tenant_id}/actions/components/branches | operation | no | action-component-branch-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| limit | integer | no |  | 1 |
| POST /api/v1/{tenant_id}/actions/components/branches | operation | no | action-component-branch-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionComponentBranchCreateInputBody.json", "branch_condition": {}, "description": "string", "name": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionComponentBranchCreateInputBody.json |
| requestBody (application/json).branch_condition |  | yes | The condition that must be met for this branch to be taken | {} |
| requestBody (application/json).description | string | yes |  | string |
| requestBody (application/json).name | string | yes |  | string |
| GET /api/v1/{tenant_id}/actions/components/branches/{branch_id} | operation | no | action-component-branch-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| branch_id | string | yes | The branch ID | b_456 |
| PUT /api/v1/{tenant_id}/actions/components/branches/{branch_id} | operation | no | action-component-branch-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| branch_id | string | yes | The branch ID | b_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionComponentBranchUpdateInputBody.json", "branch_condition": {}, "description": "string", "name": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionComponentBranchUpdateInputBody.json |
| requestBody (application/json).branch_condition |  | yes | The condition that must be met for this branch to be taken | {} |
| requestBody (application/json).description | string | yes |  | string |
| requestBody (application/json).name | string | yes |  | string |
| POST /api/v1/{tenant_id}/actions/components/forms | operation | no | action-component-form-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionComponentFormCreateInputBody.json", "custom_javascript": "string", "custom_javascript_execute_on_load": true, "custom_javascript_triggering_fields": ["string"], "default_input_mapping": {"key": {}}, "default_output_mapping": {"key": {}}, "description": "string", "dynamic_field_config": {"key": {"child_form_javascript": {"key": {}}, "e_signature_mappings": {"key": {}}, "endpoint_id": "string", "no_results_message": "string", "output_key": "string", "payload_fields": {"key": {}}, "pdf_preview_payloads": {"key": {}}, "selector_field": "string"}}, "form_schema": {"key": {}}, "imported_js_function_config": [{"key": {}}], "is_reusable": true, "name": "string", "ui_schema": {"key": {}}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionComponentFormCreateInputBody.json |
| requestBody (application/json).custom_javascript | string | no | Custom javascript to run on the form | string |
| requestBody (application/json).custom_javascript_execute_on_load | ['boolean', 'null'] | no | When false, form-level custom JS does not run on initial load; defaults to true | True |
| requestBody (application/json).custom_javascript_triggering_fields | ['array', 'null'] | no | The fields that will trigger the custom javascript | ["string"] |
| requestBody (application/json).custom_javascript_triggering_fields[] | string | no | The fields that will trigger the custom javascript | string |
| requestBody (application/json).default_input_mapping | object | no | Default data-layer input mapping rules | {"key": {}} |
| requestBody (application/json).default_output_mapping | object | no | Default data-layer output mapping rules | {"key": {}} |
| requestBody (application/json).description | string | yes |  | string |
| requestBody (application/json).dynamic_field_config | object | no |  | {"key": {"child_form_javascript": {"key": {}}, "e_signature_mappings": {"key": {}}, "endpoint_id": "string", "no_results_message": "string", "output_key": "string", "payload_fields": {"key": {}}, "pdf_preview_payloads": {"key": {}}, "selector_field": "string"}} |
| requestBody (application/json).form_schema | object | yes | Form schema for the form, using jsonforms.io syntax | {"key": {}} |
| requestBody (application/json).imported_js_function_config | ['array', 'null'] | no | JSON config for imported global JS functions | [{"key": {}}] |
| requestBody (application/json).imported_js_function_config[] | object | no | JSON config for imported global JS functions | {"key": {}} |
| requestBody (application/json).is_reusable | boolean | no | Whether the form is reusable | True |
| requestBody (application/json).name | string | yes |  | string |
| requestBody (application/json).ui_schema | object | no | The form UI schema | {"key": {}} |
| POST /api/v1/{tenant_id}/actions/components/forms/list | operation | no | action-component-form-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionComponentFormListInputBody.json", "pagination_params": {"page": 1, "page_size": 10}, "search": "My Form"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionComponentFormListInputBody.json |
| requestBody (application/json).pagination_params | object | no | The pagination information for the tasks | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).search | string | no | Search term to filter forms by name or description | My Form |
| DELETE /api/v1/{tenant_id}/actions/components/forms/{form_id} | operation | no | action-component-form-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| form_id | string | yes | The form ID | f_456 |
| GET /api/v1/{tenant_id}/actions/components/forms/{form_id} | operation | no | action-component-form-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| form_id | string | yes | The form ID | f_456 |
| PATCH /api/v1/{tenant_id}/actions/components/forms/{form_id} | operation | no | action-component-form-update-details |  |
| tenant_id | string | yes | The tenant ID | 123 |
| form_id | string | yes | The form ID | f_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionComponentFormUpdateDetailsInputBody.json", "description": "This is my form", "name": "My Form"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionComponentFormUpdateDetailsInputBody.json |
| requestBody (application/json).description | ['string', 'null'] | yes | The form description | This is my form |
| requestBody (application/json).name | ['string', 'null'] | yes | The form name | My Form |
| PUT /api/v1/{tenant_id}/actions/components/forms/{form_id} | operation | no | action-component-form-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| form_id | string | yes | The form ID | f_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionComponentFormUpdateInputBody.json", "custom_javascript": "string", "custom_javascript_execute_on_load": true, "custom_javascript_triggering_fields": ["string"], "default_input_mapping": {"key": {}}, "default_output_mapping": {"key": {}}, "description": "string", "dynamic_field_config": {"key": {"child_form_javascript": {"key": {}}, "e_signature_mappings": {"key": {}}, "endpoint_id": "string", "no_results_message": "string", "output_key": "string", "payload_fields": {"key": {}}, "pdf_preview_payloads": {"key": {}}, "selector_field": "string"}}, "form_schema": {"key": {}}, "imported_js_function_config": [{"key": {}}], "name": "string", "ui_schema": {"key": {}}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionComponentFormUpdateInputBody.json |
| requestBody (application/json).custom_javascript | string | no | Custom javascript to run on the form | string |
| requestBody (application/json).custom_javascript_execute_on_load | ['boolean', 'null'] | no | When false, form-level custom JS does not run on initial load; defaults to true | True |
| requestBody (application/json).custom_javascript_triggering_fields | ['array', 'null'] | no | The fields that will trigger the custom javascript | ["string"] |
| requestBody (application/json).custom_javascript_triggering_fields[] | string | no | The fields that will trigger the custom javascript | string |
| requestBody (application/json).default_input_mapping | object | no | Default data-layer input mapping rules | {"key": {}} |
| requestBody (application/json).default_output_mapping | object | no | Default data-layer output mapping rules | {"key": {}} |
| requestBody (application/json).description | string | yes |  | string |
| requestBody (application/json).dynamic_field_config | object | no |  | {"key": {"child_form_javascript": {"key": {}}, "e_signature_mappings": {"key": {}}, "endpoint_id": "string", "no_results_message": "string", "output_key": "string", "payload_fields": {"key": {}}, "pdf_preview_payloads": {"key": {}}, "selector_field": "string"}} |
| requestBody (application/json).form_schema | object | yes | Form schema for the form, using jsonforms.io syntax | {"key": {}} |
| requestBody (application/json).imported_js_function_config | ['array', 'null'] | no | JSON config for imported global JS functions | [{"key": {}}] |
| requestBody (application/json).imported_js_function_config[] | object | no | JSON config for imported global JS functions | {"key": {}} |
| requestBody (application/json).name | string | yes |  | string |
| requestBody (application/json).ui_schema | object | no | The form UI schema | {"key": {}} |
| POST /api/v1/{tenant_id}/actions/components/forms/{form_id}/clone | operation | no | action-component-form-clone |  |
| tenant_id | string | yes | The tenant ID | 123 |
| form_id | string | yes | The form ID to clone | f_456 |
| PATCH /api/v1/{tenant_id}/actions/components/forms/{form_id}/custom-javascript | operation | no | action-component-form-update-custom-javascript |  |
| tenant_id | string | yes | The tenant ID | 123 |
| form_id | string | yes | The form ID | f_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionComponentFormUpdateCustomJavascriptInputBody.json", "custom_javascript": "string", "custom_javascript_execute_on_load": true, "custom_javascript_triggering_fields": ["string"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionComponentFormUpdateCustomJavascriptInputBody.json |
| requestBody (application/json).custom_javascript | string | no | Custom javascript to run on the form | string |
| requestBody (application/json).custom_javascript_execute_on_load | ['boolean', 'null'] | no | When false, form-level custom JS does not run on initial load | True |
| requestBody (application/json).custom_javascript_triggering_fields | ['array', 'null'] | no | The fields that will trigger the custom javascript | ["string"] |
| requestBody (application/json).custom_javascript_triggering_fields[] | string | no | The fields that will trigger the custom javascript | string |
| GET /api/v1/{tenant_id}/actions/{action_blueprint_id}/client-organisations/{client_organization_id}/configuration/render | operation | no | action-run-configuration-render |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_blueprint_id | string | yes | The action blueprint ID | a_456 |
| client_organization_id | string | yes | The client organization ID | co_789 |
| GET /api/v1/{tenant_id}/admin/api-token-roles | operation | no | admin-api-token-roles-list |  |
| tenant_id | string | yes | The tenant ID | string |
| GET /api/v1/{tenant_id}/admin/api-tokens | operation | no | admin-api-tokens-list |  |
| tenant_id | string | yes |  | string |
| page | integer | no | Page number (1-based) | 1 |
| page_size | integer | no | Page size | 1 |
| expired | string | no | Filter by expired: true | false (omit for all) | string |
| is_active | string | no | Filter by active status: true | false (omit for all) | string |
| auth_method | string | no | Filter by auth method: bearer | hmac | string |
| POST /api/v1/{tenant_id}/admin/api-tokens | operation | no | admin-api-tokens-create |  |
| tenant_id | string | yes | The tenant ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/APITokenCreateBody.json", "auth_method": "bearer", "expires_at": "2026-01-15T10:30:00Z", "name": "string", "role": "string", "scope_type": "role", "shared_secret": "string", "trigger_grants": [{"custom_js_function_ids": ["string"], "trigger_endpoint_ids": ["string"], "trigger_service_id": "string"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/APITokenCreateBody.json |
| requestBody (application/json).auth_method | string | yes | Authentication method: bearer or hmac | bearer |
| requestBody (application/json).expires_at | string | no | Optional expiration date | 2026-01-15T10:30:00Z |
| requestBody (application/json).name | string | yes | Human-readable token name | string |
| requestBody (application/json).role | string | no | Required when scope_type is 'role'. Ignored when 'trigger_access'. | string |
| requestBody (application/json).scope_type | string | yes | 'role' = token has one role (RBAC). 'trigger_access' = token can only call selected trigger execute routes. | role |
| requestBody (application/json).shared_secret | string | no | For HMAC only: paste secret from provider or omit to generate. | string |
| requestBody (application/json).trigger_grants | ['array', 'null'] | no | Required when scope_type is 'trigger_access'. | [{"custom_js_function_ids": ["string"], "trigger_endpoint_ids": ["string"], "trigger_service_id": "string"}] |
| requestBody (application/json).trigger_grants[] | object | no | Required when scope_type is 'trigger_access'. | {"custom_js_function_ids": ["string"], "trigger_endpoint_ids": ["string"], "trigger_service_id": "string"} |
| requestBody (application/json).trigger_grants[].custom_js_function_ids | ['array', 'null'] | no |  | ["string"] |
| requestBody (application/json).trigger_grants[].trigger_endpoint_ids | ['array', 'null'] | no |  | ["string"] |
| requestBody (application/json).trigger_grants[].trigger_service_id | string | no |  | string |
| DELETE /api/v1/{tenant_id}/admin/api-tokens/{token_id} | operation | no | admin-api-tokens-delete |  |
| tenant_id | string | yes |  | string |
| token_id | string | yes | Public token ID (not the internal record ID) | string |
| PATCH /api/v1/{tenant_id}/admin/api-tokens/{token_id} | operation | no | admin-api-tokens-update |  |
| tenant_id | string | yes |  | string |
| token_id | string | yes | Public token ID (not the internal record ID) | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/APITokenUpdateBody.json", "expires_at": "2026-01-15T10:30:00Z", "is_active": true, "name": "string", "role": "string", "scope_type": "role", "trigger_grants": [{"custom_js_function_ids": ["string"], "trigger_endpoint_ids": ["string"], "trigger_service_id": "string"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/APITokenUpdateBody.json |
| requestBody (application/json).expires_at | string | no | Expiration date | 2026-01-15T10:30:00Z |
| requestBody (application/json).is_active | boolean | no | Whether the token is active | True |
| requestBody (application/json).name | string | no | Human-readable token name | string |
| requestBody (application/json).role | string | no | Required when scope_type is 'role' | string |
| requestBody (application/json).scope_type | string | yes | 'role' or 'trigger_access' | role |
| requestBody (application/json).trigger_grants | ['array', 'null'] | no | Grants when scope_type is 'trigger_access' | [{"custom_js_function_ids": ["string"], "trigger_endpoint_ids": ["string"], "trigger_service_id": "string"}] |
| requestBody (application/json).trigger_grants[] | object | no | Grants when scope_type is 'trigger_access' | {"custom_js_function_ids": ["string"], "trigger_endpoint_ids": ["string"], "trigger_service_id": "string"} |
| requestBody (application/json).trigger_grants[].custom_js_function_ids | ['array', 'null'] | no |  | ["string"] |
| requestBody (application/json).trigger_grants[].trigger_endpoint_ids | ['array', 'null'] | no |  | ["string"] |
| requestBody (application/json).trigger_grants[].trigger_service_id | string | no |  | string |
| GET /api/v1/{tenant_id}/admin/datadog/logs | operation | no | admin-datadog-logs-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trace_id | string | yes | The Datadog trace ID | 123456789 |
| GET /api/v1/{tenant_id}/agent-business-group-roles | operation | no | agent-business-group-role-list-by-type-and-name |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AgentBusinessGroupRoleListInputBody.json", "group_type": "region", "name": "Region 1"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentBusinessGroupRoleListInputBody.json |
| requestBody (application/json).group_type | string | yes | The type of the business group | region |
| requestBody (application/json).name | string | yes | The name of the business group | Region 1 |
| GET /api/v1/{tenant_id}/agent-organisations | operation | no | agent-organisation-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_organisation_role | string | no | Optional filter by agent organisation role | Advisor |
| POST /api/v1/{tenant_id}/agent-organisations | operation | no | agent-organisation-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AgentOrganisationCreateInputBody.json", "agent_organisation_role": "Advisor", "agent_organisation_type": "Corporation", "description": "A leading technology company", "name": "Acme Corp", "parent_id": "ao_123", "updated_at": "2023-04-01T12:00:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentOrganisationCreateInputBody.json |
| requestBody (application/json).agent_organisation_role | string | no | The role of the agent organisation in the relationship | Advisor |
| requestBody (application/json).agent_organisation_type | string | no | The type of the agent organisation (e.g., Corporation, LLC, Partnership) | Corporation |
| requestBody (application/json).description | string | no | A brief description of the agent organisation | A leading technology company |
| requestBody (application/json).name | string | yes | The name of the agent organisation | Acme Corp |
| requestBody (application/json).parent_id | string | no | The unique identifier of the parent agent organisation | ao_123 |
| requestBody (application/json).updated_at | string | no | Timestamp of when the organisation was created | 2023-04-01T12:00:00Z |
| GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/addresses | operation | no | agent-organisation-address-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_organisation_id | string | yes | The ID of the agent organization associated with the address we are searching for | ao_456 |
| POST /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/addresses | operation | no | agent-organisation-address-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_organisation_id | string | yes | The agent organisation ID | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateAddressInputBody.json", "address_line1": "string", "address_line2": "string", "address_type": "string", "city": "string", "country": "string", "description": "string", "state": "string", "zipcode": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateAddressInputBody.json |
| requestBody (application/json).address_line1 | string | yes |  | string |
| requestBody (application/json).address_line2 | string | no |  | string |
| requestBody (application/json).address_type | string | yes |  | string |
| requestBody (application/json).city | string | yes |  | string |
| requestBody (application/json).country | string | yes |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).state | string | no |  | string |
| requestBody (application/json).zipcode | string | yes |  | string |
| GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/agents | operation | no | agent-organisation-agent-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_organisation_id | string | yes | The agent organisationID | 456 |
| GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/client-organisations | operation | no | agent-organisation-client-organisation-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_organisation_id | string | yes | The agent_organisation ID | 678 |
| GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/contacts | operation | no | agent-organisation-contact-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_organisation_id | string | yes | The agent organisaton ID | 456 |
| POST /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/contacts | operation | no | agent-organisation-contact-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_organisation_id | string | yes | The entity ID | 456 |
| requestBody (application/json) | ['array', 'null'] | yes |  | [{"role": "string", "type": "string", "value": "string"}] |
| requestBody (application/json)[] | object | yes |  | {"role": "string", "type": "string", "value": "string"} |
| requestBody (application/json)[].role | string | yes |  | string |
| requestBody (application/json)[].type | string | yes |  | string |
| requestBody (application/json)[].value | string | yes |  | string |
| GET /api/v1/{tenant_id}/agent-organisations/{id} | operation | no | agent-organisation-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The Organisation ID | 123 |
| POST /api/v1/{tenant_id}/agents | operation | no | agent-create |  |
| tenant_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AgentCreateInputBody.json", "active": true, "additional_attributes": {"key": "string"}, "advisor_identification": "1234567890", "compliance_record": "1234567890", "external_id": "ag_123", "idp_subject": "auth0|123456", "license": "1234567890", "manager_id": "ag_456", "organisation_id": "string", "person": {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"}, "qualification": "CFA", "regulatory_status": "Licensed", "specialization": "Equities", "type": "Financial Advisor", "years_of_experience": "10"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentCreateInputBody.json |
| requestBody (application/json).active | boolean | no | Whether the agent is active (default: true) | True |
| requestBody (application/json).additional_attributes | object | no | Additional attributes of the agent | {"key": "string"} |
| requestBody (application/json).advisor_identification | string | no | The advisor identification of the agent | 1234567890 |
| requestBody (application/json).compliance_record | string | no | The compliance record of the agent | 1234567890 |
| requestBody (application/json).external_id | string | no | External identifier for the agent, usually maps to a CRM identifier | ag_123 |
| requestBody (application/json).idp_subject | string | no | The IDP subject identifier for the agent | auth0|123456 |
| requestBody (application/json).license | string | no | The license of the agent | 1234567890 |
| requestBody (application/json).manager_id | string | no | The ID of the agent's manager | ag_456 |
| requestBody (application/json).organisation_id | string | yes |  | string |
| requestBody (application/json).person | object | yes |  | {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"} |
| requestBody (application/json).person.date_of_birth | string | no |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).person.first_name | string | no |  | string |
| requestBody (application/json).person.gender | string | no |  | string |
| requestBody (application/json).person.last_name | string | no |  | string |
| requestBody (application/json).person.marital_status | string | no |  | string |
| requestBody (application/json).person.middle_name | string | no |  | string |
| requestBody (application/json).person.nationality | string | no |  | string |
| requestBody (application/json).person.preferred_contact_method | string | no |  | string |
| requestBody (application/json).person.ssn | string | no |  | string |
| requestBody (application/json).person.suffix | string | no |  | string |
| requestBody (application/json).person.title | string | no |  | string |
| requestBody (application/json).qualification | string | no | The qualification of the agent | CFA |
| requestBody (application/json).regulatory_status | string | no | The regulatory status of the agent | Licensed |
| requestBody (application/json).specialization | string | no | The specialization of the agent | Equities |
| requestBody (application/json).type | string | no | The type of the agent | Financial Advisor |
| requestBody (application/json).years_of_experience | string | no | The years of experience of the agent | 10 |
| POST /api/v1/{tenant_id}/agents-list | operation | no | agent-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| include_role | boolean | no | Include agent role/type in response (default: false) | True |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AgentListInputBody.json", "active": true, "idp_users_only": true, "pagination_params": {"page": 1, "page_size": 10}, "search": "John", "users_with_external_id_only": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentListInputBody.json |
| requestBody (application/json).active | boolean | no | Filter only active agents (default: false) | True |
| requestBody (application/json).idp_users_only | boolean | no | Filter only agents with IDP subject set (default: false) | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the tasks | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).search | string | no | Search term to filter agents by full name or external ID | John |
| requestBody (application/json).users_with_external_id_only | boolean | no | Filter only agents with external ID set (default: false) | True |
| GET /api/v1/{tenant_id}/agents/id-by-external-id | operation | no | agent-id-by-external-id |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_external_id | string | no | The external ID of the agent | 456 |
| GET /api/v1/{tenant_id}/agents/oauth-tokens | operation | no | agent-oauth-token-list Retrieves all OAuth tokens for the specified agent, optionally filtered by provider |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| provider | string | no | Optional provider to filter tokens | docusign |
| POST /api/v1/{tenant_id}/agents/oauth-tokens | operation | no | agent-oauth-token-create Creates a new OAuth token for the specified agent to use with external service providers (e.g., DocuSign, Salesforce) |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/AgentOauthTokenCreateBody.json", "code": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", "code_verifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk", "provider": "docusign"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentOauthTokenCreateBody.json |
| requestBody (application/json).code | string | yes | Authorization code from OAuth provider | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |
| requestBody (application/json).code_verifier | string | no | PKCE code verifier (optional) | dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk |
| requestBody (application/json).provider | string | yes | OAuth provider name | docusign |
| POST /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/reconnect | operation | no | agent-oauth-token-reconnect Reconnects an OAuth token by exchanging a new authorization code when the refresh token has expired. Uses the existing token's provider and account name. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID to reconnect | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/AgentOauthTokenReconnectBody.json", "code": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", "code_verifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentOauthTokenReconnectBody.json |
| requestBody (application/json).code | string | yes | Authorization code from OAuth provider | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |
| requestBody (application/json).code_verifier | string | no | PKCE code verifier (optional) | dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk |
| POST /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/refresh | operation | no | agent-oauth-token-refresh Refreshes an existing OAuth token using its refresh token to obtain a new access token |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID to refresh | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| DELETE /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/remove | operation | no | agent-oauth-token-delete Removes a connected OAuth account (token) for the authenticated agent |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID to delete | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| POST /api/v1/{tenant_id}/agents/search | operation | no | agent-search Search for agents by client organization name, agent details, and relationship type. Returns agents with all their client organizations. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AgentSearchInputBody.json", "agent_external_id_filter": "ext_agent_456", "agent_first_name_filter": "John", "agent_id_filter": ["agent_123", "agent_456"], "agent_last_name_filter": "Doe", "client_org_external_id_filter": "ext_org_456", "client_organisation_id_filter": "org_123", "client_organisation_name_filter": "Acme Corp", "created_after": "2024-01-01T00:00:00Z", "created_before": "2024-12-31T23:59:59Z", "filter": {}, "pagination_params": {"page": 1, "page_size": 10}, "relationship_type_filter": "advisor", "sort_keys": [{"cast_type": "numeric", "collation": "default", "sort_column": "agent_first_name", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentSearchInputBody.json |
| requestBody (application/json).agent_external_id_filter | string | no | Filter by agent external ID (exact match) | ext_agent_456 |
| requestBody (application/json).agent_first_name_filter | string | no | Filter by agent first name (case insensitive partial match) | John |
| requestBody (application/json).agent_id_filter | ['array', 'null'] | no | Filter by agent internal IDs (exact match) | ["agent_123", "agent_456"] |
| requestBody (application/json).agent_id_filter[] | string | no | Filter by agent internal IDs (exact match) | string |
| requestBody (application/json).agent_last_name_filter | string | no | Filter by agent last name (case insensitive partial match) | Doe |
| requestBody (application/json).client_org_external_id_filter | string | no | Filter by client organization external ID (exact match) | ext_org_456 |
| requestBody (application/json).client_organisation_id_filter | string | no | Filter by client organization internal ID (exact match) | org_123 |
| requestBody (application/json).client_organisation_name_filter | string | no | Filter by client organization name (case insensitive partial match) | Acme Corp |
| requestBody (application/json).created_after | string | no | Filter by created date after | 2024-01-01T00:00:00Z |
| requestBody (application/json).created_before | string | no | Filter by created date before | 2024-12-31T23:59:59Z |
| requestBody (application/json).filter |  | no | Expression to filter the agent search results by. Supports complex logic with and/or operators, binary comparisons, and column/literal values. Available columns: agent_first_name, agent_last_name, all_client_org_names (use LIKE for partial matches), all_relationship_types (use LIKE for partial matches) | {} |
| requestBody (application/json).pagination_params | object | no |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).relationship_type_filter | string | no | Filter by relationship type | advisor |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort criteria with column and direction | [{"cast_type": "numeric", "collation": "default", "sort_column": "agent_first_name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort criteria with column and direction | {"cast_type": "numeric", "collation": "default", "sort_column": "agent_first_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type casting for correct sorting of JSONB numeric/date fields. Use 'numeric' for currency/decimals, 'integer' for whole numbers, 'date' or 'timestamp' for dates. Essential for sorting Salesforce custom fields stored in extra_properties. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | Collation type | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | Column to sort by. Supports JSONB paths for custom fields. | agent_first_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | Sort direction: ASC (ascending) or DESC (descending). | ASC |
| DELETE /api/v1/{tenant_id}/agents/{agent_id}/addresses | operation | no | agent-address-delete Deletes an agent address relationship by address type. The address record itself is preserved. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The Agent ID | 456 |
| address_type | string | no | The address type to delete (e.g., home, work, billing) | home |
| GET /api/v1/{tenant_id}/agents/{agent_id}/addresses | operation | no | agent-address-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The ID of the agent associated with the address we are searching for | 456 |
| POST /api/v1/{tenant_id}/agents/{agent_id}/addresses | operation | no | agent-address-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The Agent ID to which the address belongs | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateAddressInputBody.json", "address_line1": "string", "address_line2": "string", "address_type": "string", "city": "string", "country": "string", "description": "string", "state": "string", "zipcode": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateAddressInputBody.json |
| requestBody (application/json).address_line1 | string | yes |  | string |
| requestBody (application/json).address_line2 | string | no |  | string |
| requestBody (application/json).address_type | string | yes |  | string |
| requestBody (application/json).city | string | yes |  | string |
| requestBody (application/json).country | string | yes |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).state | string | no |  | string |
| requestBody (application/json).zipcode | string | yes |  | string |
| PUT /api/v1/{tenant_id}/agents/{agent_id}/addresses | operation | no | agent-address-update Updates or creates an agent address. Only one address per address type is allowed. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The Agent ID to which the address belongs | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateAddressInputBody.json", "address_line1": "string", "address_line2": "string", "address_type": "string", "city": "string", "country": "string", "description": "string", "state": "string", "zipcode": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateAddressInputBody.json |
| requestBody (application/json).address_line1 | string | yes |  | string |
| requestBody (application/json).address_line2 | string | no |  | string |
| requestBody (application/json).address_type | string | yes |  | string |
| requestBody (application/json).city | string | yes |  | string |
| requestBody (application/json).country | string | yes |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).state | string | no |  | string |
| requestBody (application/json).zipcode | string | yes |  | string |
| POST /api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes | operation | no | advisor-repcode-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AdvisorRepcodeCreateInputBody.json", "description": "Primary Advisor Code", "is_primary": true, "repcode": "REP123"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AdvisorRepcodeCreateInputBody.json |
| requestBody (application/json).description | string | no | A description of the repcode | Primary Advisor Code |
| requestBody (application/json).is_primary | boolean | yes | Whether this repcode is primary for the advisor | True |
| requestBody (application/json).repcode | string | yes | The unique repcode for the advisor | REP123 |
| GET /api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes/{repcode_id} | operation | no | advisor-repcode-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | 123 |
| repcode_id | string | yes | The repcode ID | repcode_123 |
| GET /api/v1/{tenant_id}/agents/{agent_id}/client-organisations | operation | no | agent-client-organisation-relationship-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | 456 |
| POST /api/v1/{tenant_id}/agents/{agent_id}/client-relationships | operation | no | agent-client-organisation-relationship-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AgentClientOrganisationRelationshipCreateInputBody.json", "client_organisation_id": "string", "description": "string", "direct_assignment": true, "extra_properties": {"annual_revenue": "$500M", "employees": "5000", "industry": "Technology"}, "relationship_type": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentClientOrganisationRelationshipCreateInputBody.json |
| requestBody (application/json).client_organisation_id | string | yes |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).direct_assignment | boolean | no | Whether this relationship constitutes a direct assignment for filtering purposes | True |
| requestBody (application/json).extra_properties | object | no | Additional properties of the client organisation as key-value pairs | {"annual_revenue": "$500M", "employees": "5000", "industry": "Technology"} |
| requestBody (application/json).relationship_type | string | yes |  | string |
| DELETE /api/v1/{tenant_id}/agents/{agent_id}/client-relationships/{client_organisation_id}/{relationship_type} | operation | no | agent-client-organisation-relationship-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | 456 |
| client_organisation_id | string | yes | The client organisation ID | 789 |
| relationship_type | string | yes | The relationship type to delete | Primary Advisor |
| GET /api/v1/{tenant_id}/agents/{agent_id}/contacts | operation | no | agent-contact-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | 456 |
| POST /api/v1/{tenant_id}/agents/{agent_id}/contacts | operation | no | agent-contact-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | 456 |
| requestBody (application/json) | ['array', 'null'] | yes |  | [{"role": "string", "type": "string", "value": "string"}] |
| requestBody (application/json)[] | object | yes |  | {"role": "string", "type": "string", "value": "string"} |
| requestBody (application/json)[].role | string | yes |  | string |
| requestBody (application/json)[].type | string | yes |  | string |
| requestBody (application/json)[].value | string | yes |  | string |
| POST /api/v1/{tenant_id}/agents/{agent_id}/document | operation | no | agent-document-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | agent_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateDocumentCatalogEntryInputBody.json", "access_level": "private", "additional_attributes": {"key": "value"}, "approved_by": "user_123", "description": "Client's 2023 tax return document", "document_status": "approved", "document_subtype": "2023 Tax Return", "document_type": "bank_statement", "external_id": "DOC-2024-01", "file_name": "document.pdf", "file_type": "pdf", "rejection_reason": "Incorrect format", "retention_policy": "5 years", "storage_container": "my-bucket", "storage_mode": "PLATFORM_MANAGED", "storage_object_key": "path/to/document.pdf", "storage_provider": "S3", "upload_date": "2026-01-15T10:30:00Z", "upload_status": "VERIFIED"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateDocumentCatalogEntryInputBody.json |
| requestBody (application/json).access_level | string | no | The access level of the document | private |
| requestBody (application/json).additional_attributes | object | no | Additional custom metadata | {"key": "value"} |
| requestBody (application/json).approved_by | string | no | ID of the user or system that approved the document | user_123 |
| requestBody (application/json).description | string | no | A brief description of the document | Client's 2023 tax return document |
| requestBody (application/json).document_status | string | no | The status of the document | approved |
| requestBody (application/json).document_subtype | string | no | Additional specificity for the document type | 2023 Tax Return |
| requestBody (application/json).document_type | string | yes | The type of document (e.g., bank_statement, tax_return) | bank_statement |
| requestBody (application/json).external_id | string | yes | The external identifier for the document | DOC-2024-01 |
| requestBody (application/json).file_name | string | no | The original file name of the uploaded document | document.pdf |
| requestBody (application/json).file_type | string | no | The file type or extension | pdf |
| requestBody (application/json).rejection_reason | string | no | Reason for document rejection | Incorrect format |
| requestBody (application/json).retention_policy | string | no | The document retention duration | 5 years |
| requestBody (application/json).storage_container | string | yes | The storage container (e.g., S3 bucket) where the document is stored | my-bucket |
| requestBody (application/json).storage_mode | string | yes | Storage mode: PLATFORM_MANAGED or THIRD_PARTY_MANAGED | PLATFORM_MANAGED |
| requestBody (application/json).storage_object_key | string | yes | The storage object key (path) to locate the document | path/to/document.pdf |
| requestBody (application/json).storage_provider | string | yes | Storage provider (e.g., S3, BOX, AZURE_BLOB) | S3 |
| requestBody (application/json).upload_date | string | no | The date the document was uploaded | 2026-01-15T10:30:00Z |
| requestBody (application/json).upload_status | string | yes | Upload status: PENDING, VERIFIED, FAILED | VERIFIED |
| GET /api/v1/{tenant_id}/agents/{agent_id}/documents | operation | no | agent-documents-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| agent_id | string | yes | The agent ID | agent_123 |
| POST /api/v1/{tenant_id}/agents/{agent_id}/meetings | operation | no | meeting-agent-list Retrieves a paginated list of meetings for a specific agent within the specified tenant. Supports expression-based filtering, date range filtering, pagination, and sorting. Use when querying meetings for an agent other than the authenticated user (e.g., home page widget, agent-scoped views). |  |
| agent_id | string | yes | ID of the agent to filter by | a_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingAgentListInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"}, "only_initiated": true, "pagination_params": {"page": 1, "page_size": 10}, "range_end": "2024-03-15T15:00:00Z", "range_start": "2024-03-15T14:00:00Z", "sort_keys": [{"sort_column": "start_time", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingAgentListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the meetings by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"} |
| requestBody (application/json).only_initiated | boolean | yes | Only return meetings initiated by the agent | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the meetings | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).range_end | string | yes | end of the range | 2024-03-15T15:00:00Z |
| requestBody (application/json).range_start | string | yes | start of the range | 2024-03-15T14:00:00Z |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the meetings by. | [{"sort_column": "start_time", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the meetings by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| GET /api/v1/{tenant_id}/agents/{id} | operation | no | agent-get |  |
| tenant_id | string | yes |  | string |
| id | string | yes |  | string |
| PATCH /api/v1/{tenant_id}/agents/{id} | operation | no | agent-update Updates the specified fields of an agent using PATCH semantics. Only provided fields will be updated. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The agent ID | agent_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AgentUpdateInputBody.json", "active": true, "additional_attributes": {"key": "string"}, "advisor_identification": "1234567890", "compliance_record": "1234567890", "idp_subject": "auth0|123456", "license": "1234567890", "manager_id": "ag_456", "organisation_id": "co_123456", "person": {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"}, "qualification": "CFA", "regulatory_status": "Licensed", "specialization": "Equities", "type": "Financial Advisor", "years_of_experience": "10"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AgentUpdateInputBody.json |
| requestBody (application/json).active | boolean | no | Whether the agent is active | True |
| requestBody (application/json).additional_attributes | object | no | Additional attributes of the agent | {"key": "string"} |
| requestBody (application/json).advisor_identification | string | no | The advisor identification of the agent | 1234567890 |
| requestBody (application/json).compliance_record | string | no | The compliance record of the agent | 1234567890 |
| requestBody (application/json).idp_subject | string | no | The IDP subject identifier for the agent | auth0|123456 |
| requestBody (application/json).license | string | no | The license of the agent | 1234567890 |
| requestBody (application/json).manager_id | string | no | The ID of the agent's manager | ag_456 |
| requestBody (application/json).organisation_id | string | no | The organisation ID associated with the agent | co_123456 |
| requestBody (application/json).person | object | no | Fields to update for the agent person record | {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"} |
| requestBody (application/json).person.date_of_birth | string | no |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).person.first_name | string | no |  | string |
| requestBody (application/json).person.gender | string | no |  | string |
| requestBody (application/json).person.last_name | string | no |  | string |
| requestBody (application/json).person.marital_status | string | no |  | string |
| requestBody (application/json).person.middle_name | string | no |  | string |
| requestBody (application/json).person.nationality | string | no |  | string |
| requestBody (application/json).person.preferred_contact_method | string | no |  | string |
| requestBody (application/json).person.ssn | string | no |  | string |
| requestBody (application/json).person.suffix | string | no |  | string |
| requestBody (application/json).person.title | string | no |  | string |
| requestBody (application/json).qualification | string | no | The qualification of the agent | CFA |
| requestBody (application/json).regulatory_status | string | no | The regulatory status of the agent | Licensed |
| requestBody (application/json).specialization | string | no | The specialization of the agent | Equities |
| requestBody (application/json).type | string | no | The type of the agent | Financial Advisor |
| requestBody (application/json).years_of_experience | string | no | The years of experience of the agent | 10 |
| GET /api/v1/{tenant_id}/agents/{id}/person-view | operation | no | agent-person-view-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The agent ID | 456 |
| POST /api/v1/{tenant_id}/aggregate | operation | no | object-aggregate-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ObjectAggregateInputBody.json", "aggregate": "count", "column": "client_organisation_id", "filter": {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"}, "object_type": "relationship", "only_assigned": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ObjectAggregateInputBody.json |
| requestBody (application/json).aggregate | string | yes | The aggregate function to use: sum, count, avg, max, or min | count |
| requestBody (application/json).column | string | yes | The column to aggregate on | client_organisation_id |
| requestBody (application/json).filter |  | no | The Expression to filter the relationships by. See the Readme for more details on the Expression format. | {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"} |
| requestBody (application/json).object_type | string | yes | The type of entity to aggregate on | relationship |
| requestBody (application/json).only_assigned | boolean | no | Whether to only include relationships that are assigned to the current agent | True |
| GET /api/v1/{tenant_id}/array-forms-config | operation | no | array-forms-config-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| PUT /api/v1/{tenant_id}/array-forms-config | operation | no | array-forms-config-put |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ArrayFormsConfigPutInputBody.json", "configs": [{"array_child_form_id": "f_456", "array_property_name": "array_property_name", "parent_task_form_id": "f_456"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ArrayFormsConfigPutInputBody.json |
| requestBody (application/json).configs | ['array', 'null'] | yes | The array forms config | [{"array_child_form_id": "f_456", "array_property_name": "array_property_name", "parent_task_form_id": "f_456"}] |
| requestBody (application/json).configs[] | object | yes | The array forms config | {"array_child_form_id": "f_456", "array_property_name": "array_property_name", "parent_task_form_id": "f_456"} |
| requestBody (application/json).configs[].array_child_form_id | string | yes | The array child form ID | f_456 |
| requestBody (application/json).configs[].array_property_name | string | yes | The array property name | array_property_name |
| requestBody (application/json).configs[].parent_task_form_id | string | yes | The parent task form ID | f_456 |
| GET /api/v1/{tenant_id}/authorization | operation | no | authorization-check Checks whether an agent is authorized to access a given entity type and entity |  |
| tenant_id | string | yes | The tenant ID | 123 |
| entity_type | string | yes | The type of entity (meeting, client, etc.) | meeting |
| entity_id | string | yes | The ID of the entity to check access for | m_456 |
| POST /api/v1/{tenant_id}/book-of-business | operation | no | book-of-business Returns the current caller's visible wealth accounts and protection policies using the same caller-scoped visibility model as the financial account and policy search experiences. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/BookOfBusinessInputBody.json", "agent_organisation_external_id": "string", "agent_organisation_name": "string", "client_organisation_name": "string", "household_filters": {"client_organisation_name": "string", "filter": {}, "only_assigned": true, "relationship_status": "string"}, "include_policy_valuations": true, "include_wealth_valuation": true, "line_of_business": "string", "only_assigned": true, "policy_status": "string", "product_filters": {"agent_organisation_external_id": "string", "agent_organisation_name": "string", "line_of_business": "string", "policy_status": "string"}, "protection_pagination_params": {"page": 1, "page_size": 10}, "protection_sort_keys": [{"cast_type": "string", "collation": "string", "key": "string", "order": "string"}], "relationship_status": "string", "wealth_pagination_params": {"page": 1, "page_size": 10}, "wealth_sort_keys": [{"cast_type": "string", "collation": "string", "key": "string", "order": "string"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/BookOfBusinessInputBody.json |
| requestBody (application/json).agent_organisation_external_id | string | no | Filter protection policies by agency code (exact match). Deprecated: use product_filters.agent_organisation_external_id. | string |
| requestBody (application/json).agent_organisation_name | string | no | Filter protection policies by agency name (partial match, case-insensitive). Deprecated: use product_filters.agent_organisation_name. | string |
| requestBody (application/json).client_organisation_name | string | no | Optional case-insensitive partial match filter on client organisation name. Deprecated: use household_filters.client_organisation_name. | string |
| requestBody (application/json).household_filters | object | no | Shared household filter contract. When provided, takes precedence over top-level household filter fields. | {"client_organisation_name": "string", "filter": {}, "only_assigned": true, "relationship_status": "string"} |
| requestBody (application/json).household_filters.client_organisation_name | string | no | Optional case-insensitive client-organisation name search. This narrows the household universe, not just the current page. | string |
| requestBody (application/json).household_filters.filter |  | no | Optional household expression filter. Uses the same expression language as POST /relationships/dashboard. This defines the household universe before any BoB-specific product filters are applied. | {} |
| requestBody (application/json).household_filters.only_assigned | boolean | no | If true, narrow the household universe to client organisations directly assigned to the caller. Use the same value you would send to the relationship dashboard when the two screens need to stay aligned. | True |
| requestBody (application/json).household_filters.relationship_status | string | no | Optional household relationship/lifecycle status filter. Use this when the summary or BoB view must match the relationship dashboard's status-scoped household set. | string |
| requestBody (application/json).include_policy_valuations | boolean | no | If true (default), include valuation rows for protection policies. Set to false to skip. | True |
| requestBody (application/json).include_wealth_valuation | boolean | no | If true (default), include wealth account balance fields. Set to false to skip. | True |
| requestBody (application/json).line_of_business | string | no | Optional protection-side line of business filter. Deprecated: use product_filters.line_of_business. | string |
| requestBody (application/json).only_assigned | boolean | no | If true, narrow client organisation scope to directly assigned relationships. Deprecated: use household_filters.only_assigned. | True |
| requestBody (application/json).policy_status | string | no | Optional protection-side policy status filter. Deprecated: use product_filters.policy_status. | string |
| requestBody (application/json).product_filters | object | no | Product-side filters. When provided, takes precedence over top-level product filter fields. | {"agent_organisation_external_id": "string", "agent_organisation_name": "string", "line_of_business": "string", "policy_status": "string"} |
| requestBody (application/json).product_filters.agent_organisation_external_id | string | no | Filter protection policies by agency code (exact match on agent_organisations.external_id). | string |
| requestBody (application/json).product_filters.agent_organisation_name | string | no | Filter protection policies by agency name (partial match, case-insensitive). | string |
| requestBody (application/json).product_filters.line_of_business | string | no | Optional protection-side product filter. This does not redefine the household universe; it narrows which protection products contribute to protection-side BoB rows and summary buckets. | string |
| requestBody (application/json).product_filters.policy_status | string | no | Optional protection-side policy status filter. This is product-side narrowing inside the already-selected household universe. | string |
| requestBody (application/json).protection_pagination_params | object | no | Pagination for protection policies. Defaults to page 1, page_size 25. | {"page": 1, "page_size": 10} |
| requestBody (application/json).protection_pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).protection_pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).protection_sort_keys | ['array', 'null'] | no | Sort criteria for protection policies. Each key has column and direction. Default: created_at DESC. | [{"cast_type": "string", "collation": "string", "key": "string", "order": "string"}] |
| requestBody (application/json).protection_sort_keys[] | object | no | Sort criteria for protection policies. Each key has column and direction. Default: created_at DESC. | {"cast_type": "string", "collation": "string", "key": "string", "order": "string"} |
| requestBody (application/json).protection_sort_keys[].cast_type | string | no |  | string |
| requestBody (application/json).protection_sort_keys[].collation | string | no |  | string |
| requestBody (application/json).protection_sort_keys[].key | string | yes |  | string |
| requestBody (application/json).protection_sort_keys[].order | string | yes |  | string |
| requestBody (application/json).relationship_status | string | no | Optional client-organisation relationship status filter. Deprecated: use household_filters.relationship_status. | string |
| requestBody (application/json).wealth_pagination_params | object | no | Pagination for wealth accounts. Defaults to page 1, page_size 25. | {"page": 1, "page_size": 10} |
| requestBody (application/json).wealth_pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).wealth_pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).wealth_sort_keys | ['array', 'null'] | no | Sort criteria for wealth accounts. Each key has column and direction. Default: account_created_at DESC. | [{"cast_type": "string", "collation": "string", "key": "string", "order": "string"}] |
| requestBody (application/json).wealth_sort_keys[] | object | no | Sort criteria for wealth accounts. Each key has column and direction. Default: account_created_at DESC. | {"cast_type": "string", "collation": "string", "key": "string", "order": "string"} |
| requestBody (application/json).wealth_sort_keys[].cast_type | string | no |  | string |
| requestBody (application/json).wealth_sort_keys[].collation | string | no |  | string |
| requestBody (application/json).wealth_sort_keys[].key | string | yes |  | string |
| requestBody (application/json).wealth_sort_keys[].order | string | yes |  | string |
| POST /api/v1/{tenant_id}/book-of-business/summary | operation | no | book-of-business-summary Returns distinct-household counts by product bucket over the full filtered household set. Use household_filters when the summary must match the relationship dashboard household universe. Add product_filters when the summary must also align to a product-scoped Book of Business view. Counts are computed across the full filtered dataset, not the current page. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/BookOfBusinessSummaryInputBody.json", "client_organisation_name": "string", "household_filters": {"client_organisation_name": "string", "filter": {}, "only_assigned": true, "relationship_status": "string"}, "line_of_business": "string", "only_assigned": true, "policy_status": "string", "product_filters": {"agent_organisation_external_id": "string", "agent_organisation_name": "string", "line_of_business": "string", "policy_status": "string"}, "relationship_status": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/BookOfBusinessSummaryInputBody.json |
| requestBody (application/json).client_organisation_name | string | no | Deprecated compatibility field. Equivalent to household_filters.client_organisation_name. | string |
| requestBody (application/json).household_filters | object | no | Preferred household-scoping input. Use this to make the summary match the relationship dashboard household set or the BoB household set. Counts are computed over the full filtered household universe, not the current page. | {"client_organisation_name": "string", "filter": {}, "only_assigned": true, "relationship_status": "string"} |
| requestBody (application/json).household_filters.client_organisation_name | string | no | Optional case-insensitive client-organisation name search. This narrows the household universe, not just the current page. | string |
| requestBody (application/json).household_filters.filter |  | no | Optional household expression filter. Uses the same expression language as POST /relationships/dashboard. This defines the household universe before any BoB-specific product filters are applied. | {} |
| requestBody (application/json).household_filters.only_assigned | boolean | no | If true, narrow the household universe to client organisations directly assigned to the caller. Use the same value you would send to the relationship dashboard when the two screens need to stay aligned. | True |
| requestBody (application/json).household_filters.relationship_status | string | no | Optional household relationship/lifecycle status filter. Use this when the summary or BoB view must match the relationship dashboard's status-scoped household set. | string |
| requestBody (application/json).line_of_business | string | no | Deprecated compatibility field. Equivalent to product_filters.line_of_business. | string |
| requestBody (application/json).only_assigned | boolean | no | Deprecated compatibility field. Equivalent to household_filters.only_assigned. | True |
| requestBody (application/json).policy_status | string | no | Deprecated compatibility field. Equivalent to product_filters.policy_status. | string |
| requestBody (application/json).product_filters | object | no | Optional BoB-only product filters. Use these when the summary should align to a BoB product view rather than just the household universe. | {"agent_organisation_external_id": "string", "agent_organisation_name": "string", "line_of_business": "string", "policy_status": "string"} |
| requestBody (application/json).product_filters.agent_organisation_external_id | string | no | Filter protection policies by agency code (exact match on agent_organisations.external_id). | string |
| requestBody (application/json).product_filters.agent_organisation_name | string | no | Filter protection policies by agency name (partial match, case-insensitive). | string |
| requestBody (application/json).product_filters.line_of_business | string | no | Optional protection-side product filter. This does not redefine the household universe; it narrows which protection products contribute to protection-side BoB rows and summary buckets. | string |
| requestBody (application/json).product_filters.policy_status | string | no | Optional protection-side policy status filter. This is product-side narrowing inside the already-selected household universe. | string |
| requestBody (application/json).relationship_status | string | no | Deprecated compatibility field. Equivalent to household_filters.relationship_status. | string |
| GET /api/v1/{tenant_id}/business-groups | operation | no | business-group-list-by-role |  |
| tenant_id | string | yes | The tenant ID | 123 |
| group_type | string | no | The type of the business group | region |
| include_agents | boolean | no | Whether to include agents in the response | False |
| POST /api/v1/{tenant_id}/business-groups/coverage-details/search | operation | no | business-group-coverage-details-search Searches business group coverage details with filtering, pagination, and sorting capabilities |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SearchBusinessGroupCoverageDetailsInputBody.json", "business_group_name_filter": "Advisory", "business_group_status_filter": "active", "business_group_type_filter": "geographic", "coverage_value_filter": "northeast", "coverage_value_match_type": "LIKE", "created_after": "2024-01-01T00:00:00Z", "created_before": "2024-12-31T23:59:59Z", "filter": {}, "has_coverage_filter": true, "min_agent_count_filter": 2, "min_client_count_filter": 1, "pagination_params": {"page": 1, "page_size": 10}, "priority_filter": 1, "sort_keys": [{"cast_type": "numeric", "collation": "default", "sort_column": "coverage_value", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SearchBusinessGroupCoverageDetailsInputBody.json |
| requestBody (application/json).business_group_name_filter | string | no | Filter by business group name (case insensitive partial match) | Advisory |
| requestBody (application/json).business_group_status_filter | string | no | Filter by business group status | active |
| requestBody (application/json).business_group_type_filter | string | no | Filter by business group type | geographic |
| requestBody (application/json).coverage_value_filter | string | no | Filter by coverage value (e.g., 'northeast', 'northwest') | northeast |
| requestBody (application/json).coverage_value_match_type | string | no | Match type for coverage_value_filter: LIKE for partial match (default), EXACT for exact match | LIKE |
| requestBody (application/json).created_after | string | no | Filter by created date after | 2024-01-01T00:00:00Z |
| requestBody (application/json).created_before | string | no | Filter by created date before | 2024-12-31T23:59:59Z |
| requestBody (application/json).filter |  | no | Expression to filter the business group coverage details by. Supports complex logic with and/or operators, binary comparisons, and column/literal values. Available columns: business_group_name, coverage_value, group_type, status, agent_count, client_organisation_count | {} |
| requestBody (application/json).has_coverage_filter | boolean | no | Filter to show only groups with coverage (true) or without coverage (false) | True |
| requestBody (application/json).min_agent_count_filter | integer | no | Minimum number of agents | 2 |
| requestBody (application/json).min_client_count_filter | integer | no | Minimum number of client organizations | 1 |
| requestBody (application/json).pagination_params | object | no |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).priority_filter | integer | no | Filter by specific priority level | 1 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort criteria with column and direction | [{"cast_type": "numeric", "collation": "default", "sort_column": "coverage_value", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort criteria with column and direction | {"cast_type": "numeric", "collation": "default", "sort_column": "coverage_value", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type casting for correct sorting of JSONB numeric/date fields. Use 'numeric' for currency/decimals, 'integer' for whole numbers, 'date' or 'timestamp' for dates. Essential for sorting Salesforce custom fields stored in extra_properties. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Supports JSONB paths for custom fields. | coverage_value |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending) or DESC (descending). | ASC |
| GET /api/v1/{tenant_id}/business-groups/coverage-lookups/summary | operation | no | business-group-coverage-lookup-summary Returns aggregated coverage lookup data with team counts, agent totals, and detailed business group information for dashboard and overview purposes |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| category | string | no | Filter by coverage category | business_group_coverage |
| min_teams | integer | no | Minimum number of teams required | 1 |
| POST /api/v1/{tenant_id}/business-groups/find-by-coverage | operation | no | business-groups-find-by-coverage Finds business groups that match the specified coverage criteria |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/FindBusinessGroupsByCoverageInputBody.json", "coverage_lookup_ids": ["lkp_northeast", "lkp_uhnw"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/FindBusinessGroupsByCoverageInputBody.json |
| requestBody (application/json).coverage_lookup_ids | ['array', 'null'] | yes | List of coverage lookup IDs to match against | ["lkp_northeast", "lkp_uhnw"] |
| requestBody (application/json).coverage_lookup_ids[] | string | yes | List of coverage lookup IDs to match against | string |
| DELETE /api/v1/{tenant_id}/business-groups/{business_group_id} | operation | no | business-group-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| business_group_id | string | yes | The business group ID to delete | bg_01JGQK9X1ABCDEFGHIJKLMNOP |
| PATCH /api/v1/{tenant_id}/business-groups/{business_group_id} | operation | no | business-group-update Updates an existing business group for the specified tenant. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| business_group_id | string | yes | The business group ID | bg_01JGQK9X1ABCDEFGHIJKLMNOP |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/BusinessGroupUpdateInputBody.json", "additional_attributes": {"key": "value"}, "description": "Updated description", "name": "Updated Region 1", "status": "active"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/BusinessGroupUpdateInputBody.json |
| requestBody (application/json).additional_attributes | object | no | Additional attributes for the business group as a map | {"key": "value"} |
| requestBody (application/json).description | string | no | A description of the business group | Updated description |
| requestBody (application/json).name | string | no | The name of the business group | Updated Region 1 |
| requestBody (application/json).status | string | no | The status of the business group | active |
| GET /api/v1/{tenant_id}/business-groups/{business_group_id}/coverage | operation | no | business-group-coverage-get Retrieves all coverage assignments for a business group |  |
| tenant_id | string | yes | The tenant ID | 123 |
| business_group_id | string | yes | The business group ID | bg_01JGQK9X1ABCDEFGHIJKLMNOP |
| POST /api/v1/{tenant_id}/business-groups/{business_group_id}/coverage | operation | no | business-group-coverage-create Creates a new coverage assignment for a business group |  |
| tenant_id | string | yes | The tenant ID | 123 |
| business_group_id | string | yes | The business group ID | bg_01JGQK9X1ABCDEFGHIJKLMNOP |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateBusinessGroupCoverageInputBody.json", "capacity_limit": 50, "coverage_lookup_id": "lkp_01JGQK9X1ABCDEFGHIJKLMNOP", "priority": 1} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateBusinessGroupCoverageInputBody.json |
| requestBody (application/json).capacity_limit | integer | no | Optional capacity limit | 50 |
| requestBody (application/json).coverage_lookup_id | string | yes | The unique identifier of the coverage lookup | lkp_01JGQK9X1ABCDEFGHIJKLMNOP |
| requestBody (application/json).priority | integer | yes | Priority level (lower = higher priority) | 1 |
| POST /api/v1/{tenant_id}/business-groups/{business_group_id}/members | operation | no | business-group-add-member |  |
| tenant_id | string | yes | The tenant ID | 123 |
| business_group_id | string | yes | The business group ID | bg_01JGQK9X1ABCDEFGHIJKLMNOP |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AddBusinessGroupMemberInputBody.json", "agent_id": "ag_01JGQK9X1ABCDEFGHIJKLMNOP", "description": "Regional manager for Northeast division", "role": "manager"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AddBusinessGroupMemberInputBody.json |
| requestBody (application/json).agent_id | string | yes | ID of the agent to add | ag_01JGQK9X1ABCDEFGHIJKLMNOP |
| requestBody (application/json).description | string | no | Optional description of the relationship | Regional manager for Northeast division |
| requestBody (application/json).role | string | yes | Role within the business group | manager |
| DELETE /api/v1/{tenant_id}/business-groups/{business_group_id}/members/{agent_id}/roles/{role} | operation | no | business-group-remove-member |  |
| tenant_id | string | yes | The tenant ID | 123 |
| business_group_id | string | yes | The business group ID | bg_01JGQK9X1ABCDEFGHIJKLMNOP |
| agent_id | string | yes | The agent ID to remove | ag_01JGQK9X1ABCDEFGHIJKLMNOP |
| role | string | yes | The role to remove from the agent - required | manager |
| GET /api/v1/{tenant_id}/cdc/pipeline-configs | operation | no | cdc-pipeline-config-list |  |
| tenant_id | string | yes | Tenant ID | string |
| DELETE /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} | operation | no | cdc-pipeline-config-delete |  |
| tenant_id | string | yes | Tenant ID | string |
| pipeline | string | yes | Pipeline name (e.g. pershing) | string |
| GET /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} | operation | no | cdc-pipeline-config-get |  |
| tenant_id | string | yes | Tenant ID | string |
| pipeline | string | yes | Pipeline name (e.g. pershing) | string |
| PUT /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} | operation | no | cdc-pipeline-config-upsert |  |
| tenant_id | string | yes | Tenant ID | string |
| pipeline | string | yes | Pipeline name (e.g. pershing) | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CDCPipelineConfigUpsertInputBody.json", "config": {}, "credentials": {}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CDCPipelineConfigUpsertInputBody.json |
| requestBody (application/json).config |  | yes | Pipeline configuration (pipeline-specific JSON object) | {} |
| requestBody (application/json).credentials |  | no | Pipeline credentials (sensitive data) | {} |
| POST /api/v1/{tenant_id}/client-component/jwt | operation | no | client-component-jwt-generate Creates a signed JWT token for client component authentication (e.g., NetWorth) and returns the InitiateClientComponent URL |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientComponentJWTInputBody.json", "Component": "NetWorth", "HouseholdId": "001Dn00000TrABpIAN", "PersonContactId": "003Dn00000PD1p9IAD"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientComponentJWTInputBody.json |
| requestBody (application/json).Component | string | yes | Component name (e.g., NetWorth) | NetWorth |
| requestBody (application/json).HouseholdId | string | yes | Salesforce household external ID | 001Dn00000TrABpIAN |
| requestBody (application/json).PersonContactId | string | yes | Salesforce person contact ID | 003Dn00000PD1p9IAD |
| DELETE /api/v1/{tenant_id}/client-organisation-relationships/{relationship_id} | operation | no | client-organisation-relationship-delete |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| relationship_id | string | yes | The relationship ID to delete | cor_123 |
| PUT /api/v1/{tenant_id}/client-organisation-relationships/{relationship_id} | operation | no | client-organisation-relationship-update |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| relationship_id | string | yes | The relationship ID | cor_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/UpdateClientOrganisationRelationshipInputBody.json", "description": "Primary contact for the family", "extra_properties": {"priority": "high"}, "role": "Head of Household"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/UpdateClientOrganisationRelationshipInputBody.json |
| requestBody (application/json).description | string | no | Updated description | Primary contact for the family |
| requestBody (application/json).extra_properties | object | no | Updated additional properties | {"priority": "high"} |
| requestBody (application/json).role | string | no | The new role for the relationship | Head of Household |
| GET /api/v1/{tenant_id}/client-organisations | operation | no | client-organisation-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| only_assigned | boolean | no | Whether to only return client organisations assigned to the current user | True |
| status | string | no | Optional relationship status filter | active |
| page | integer | no | The page number to return | 1 |
| page_size | integer | no | The number of records per page | 10 |
| search | string | no | Search term to filter organisations by name or description | My organisation |
| include_agents | boolean | no | Whether to include agent information for each client organisation | True |
| POST /api/v1/{tenant_id}/client-organisations | operation | no | client-organisation-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrganisationCreateInputBody.json", "agent_organisation_id": "ao_123", "approx_aum": 1000000000, "business_group_id": "bg_129aF3t", "client_organisation_role": "Client", "client_organisation_type": "Corporation", "client_segmentation": "High Net Worth", "description": "A leading technology company", "external_id": "A103143913S", "extra_properties": {"aum": "1000000000", "employees": "500", "industry": "Technology"}, "name": "Acme Corp", "notes": "Important client, handle with care", "office_id": "bg_231aFaJ", "relationship_status": "EXISTING"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrganisationCreateInputBody.json |
| requestBody (application/json).agent_organisation_id | string | no | The unique identifier of the associated agent organisation | ao_123 |
| requestBody (application/json).approx_aum | number | no | The approximate AUM of the client organisation | 1000000000 |
| requestBody (application/json).business_group_id | string | no | The unique identifier of the business group | bg_129aF3t |
| requestBody (application/json).client_organisation_role | string | no | The role of the client organisation in the relationship | Client |
| requestBody (application/json).client_organisation_type | string | no | The type of the client organisation (e.g., Corporation, LLC, Partnership) | Corporation |
| requestBody (application/json).client_segmentation | string | no | The segmentation of the client organisation | High Net Worth |
| requestBody (application/json).description | string | no | A brief description of the client organisation | A leading technology company |
| requestBody (application/json).external_id | string | no | an external ID from client organisation. Normally from CRM | A103143913S |
| requestBody (application/json).extra_properties | object | no | Additional properties of the client organisation | {"aum": "1000000000", "employees": "500", "industry": "Technology"} |
| requestBody (application/json).name | string | yes | The name of the client organisation | Acme Corp |
| requestBody (application/json).notes | string | no | Notes about the client organisation | Important client, handle with care |
| requestBody (application/json).office_id | string | no | The unique identifier of the office | bg_231aFaJ |
| requestBody (application/json).relationship_status | string | no | The status of the client relationship | EXISTING |
| GET /api/v1/{tenant_id}/client-organisations-graph/{client_organisation_id} | operation | no | client-organisation-graph-get Returns the household graph document using relationships_dashboard_view as the baseline, with optional includes for clients, client addresses, and organisation contacts. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| include | string | no | Comma-separated list of supplemental data to include (clients, client_addresses, org_contacts, financial_accounts). Defaults to clients, client_addresses, org_contacts. | clients,client_addresses,org_contacts,financial_accounts |
| PATCH /api/v1/{tenant_id}/client-organisations-graph/{client_organisation_id} | operation | no | client-organisation-graph-patch Applies changes to the client organisation graph. Supports updating client organisation fields using the _modified field to indicate which fields have changed. Requires If-Match header for optimistic concurrency. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| If-Match | string | no | ETag from GET for optimistic concurrency | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrganisationGraphPatchRequestBody.json", "changes": {"client_organisation": {"_modified": ["name", "description"], "approx_aum": 1500000, "client_organisation_role": "Client", "client_organisation_type": "Household", "client_segmentation": "High Net Worth", "description": "Updated description", "external_id": "ext_123", "extra_properties": {"key": "string"}, "growth_opportunity_next_step_date": "2026-01-15T10:30:00Z", "id": "string", "name": "Updated Household Name", "next_meeting": "2026-01-15T10:30:00Z", "relationship_status": "Active"}}, "schema_version": "v1"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrganisationGraphPatchRequestBody.json |
| requestBody (application/json).changes | object | yes | Changes to apply to the graph | {"client_organisation": {"_modified": ["name", "description"], "approx_aum": 1500000, "client_organisation_role": "Client", "client_organisation_type": "Household", "client_segmentation": "High Net Worth", "description": "Updated description", "external_id": "ext_123", "extra_properties": {"key": "string"}, "growth_opportunity_next_step_date": "2026-01-15T10:30:00Z", "id": "string", "name": "Updated Household Name", "next_meeting": "2026-01-15T10:30:00Z", "relationship_status": "Active"}} |
| requestBody (application/json).changes.client_organisation | object | no | Changes to client organisation fields | {"_modified": ["name", "description"], "approx_aum": 1500000, "client_organisation_role": "Client", "client_organisation_type": "Household", "client_segmentation": "High Net Worth", "description": "Updated description", "external_id": "ext_123", "extra_properties": {"key": "string"}, "growth_opportunity_next_step_date": "2026-01-15T10:30:00Z", "id": "string", "name": "Updated Household Name", "next_meeting": "2026-01-15T10:30:00Z", "relationship_status": "Active"} |
| requestBody (application/json).changes.client_organisation._modified | ['array', 'null'] | yes | Array of field paths that have been modified | ["name", "description"] |
| requestBody (application/json).changes.client_organisation.approx_aum | number | no | Updated approximate AUM | 1500000 |
| requestBody (application/json).changes.client_organisation.client_organisation_role | string | no | Updated role | Client |
| requestBody (application/json).changes.client_organisation.client_organisation_type | string | no | Updated type | Household |
| requestBody (application/json).changes.client_organisation.client_segmentation | string | no | Updated segmentation | High Net Worth |
| requestBody (application/json).changes.client_organisation.description | string | no | Updated description | Updated description |
| requestBody (application/json).changes.client_organisation.external_id | string | no | Updated external ID | ext_123 |
| requestBody (application/json).changes.client_organisation.extra_properties | object | no | Updated extra properties | {"key": "string"} |
| requestBody (application/json).changes.client_organisation.growth_opportunity_next_step_date | string | no | Updated growth opportunity next step date | 2026-01-15T10:30:00Z |
| requestBody (application/json).changes.client_organisation.id | string | no | Client organisation ID (must match path parameter) | string |
| requestBody (application/json).changes.client_organisation.name | string | no | Updated name | Updated Household Name |
| requestBody (application/json).changes.client_organisation.next_meeting | string | no | Updated next meeting date | 2026-01-15T10:30:00Z |
| requestBody (application/json).changes.client_organisation.relationship_status | string | no | Updated relationship status | Active |
| requestBody (application/json).schema_version | string | yes | Schema version, must be v1 | v1 |
| GET /api/v1/{tenant_id}/client-organisations/access-check | operation | no | client-organisation-access-check Checks whether the current user has access to a specific client organization by either Avantos ID or external ID |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | no | The Avantos ID of the client organization | co_123 |
| external_id | string | no | The external ID of the client organization | EXT-456 |
| POST /api/v1/{tenant_id}/client-organisations/bulk-access-check | operation | no | client-organisation-bulk-access-check Checks whether the current user has access to multiple client organizations by either Avantos IDs or external IDs |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrganizationBulkAccessCheckInputBody.json", "external_ids": ["string"], "ids": ["string"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrganizationBulkAccessCheckInputBody.json |
| requestBody (application/json).external_ids | ['array', 'null'] | no | List of external IDs of client organizations to check | ["string"] |
| requestBody (application/json).external_ids[] | string | no | List of external IDs of client organizations to check | string |
| requestBody (application/json).ids | ['array', 'null'] | no | List of Avantos IDs of client organizations to check | ["string"] |
| requestBody (application/json).ids[] | string | no | List of Avantos IDs of client organizations to check | string |
| GET /api/v1/{tenant_id}/client-organisations/id-by-external-id | operation | no | client-organisation-id-by-external-id |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_external_id | string | no | The external ID of the client organisation | 456 |
| GET /api/v1/{tenant_id}/client-organisations/markets | operation | no | client-organisation-markets |  |
| tenant_id | string | yes | The tenant ID | 123 |
| POST /api/v1/{tenant_id}/client-organisations/opportunities | operation | no | client-org-opportunities-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrgOpportunitiesListInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "name", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrgOpportunitiesListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the opportunities by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).only_assigned | boolean | no | If true, only opportunities where the current user is directly assigned to the client organisation will be returned | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the opportunities | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the opportunities by. | [{"sort_column": "name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the opportunities by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| POST /api/v1/{tenant_id}/client-organisations/opportunities-summary | operation | no | client-org-opportunities-summary |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrgOpportunitiesSummaryInputBody.json", "filter": {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "ACTIVE"}, "type": "binary"}, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "total_active_amount", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrgOpportunitiesSummaryInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the relationship opportunities summary by. See the Readme for more details on the Expression format. | {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "ACTIVE"}, "type": "binary"} |
| requestBody (application/json).only_assigned | boolean | no | If true, only relationships where the current user is directly assigned to the client organisation will be returned | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the relationship opportunities summary | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the relationship opportunities summary by. | [{"sort_column": "total_active_amount", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the relationship opportunities summary by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| PATCH /api/v1/{tenant_id}/client-organisations/opportunities/{opportunity_id} | operation | no | client-org-opportunity-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| opportunity_id | string | yes | The unique identifier of the opportunity to update | coo_123abc |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrgOpportunityUpdateInputBody.json", "amount": "1000000", "amount_transferred": "50000", "name": "Updated Opportunity Name", "next_step": "Schedule follow-up meeting", "next_step_date": "2024-12-31T00:00:00Z", "notes": "Additional notes for the opportunity", "partial_won_deferred_next_step_date": "2025-03-01T00:00:00Z", "partial_won_outcome": "Deferred", "status": "Closed Won", "unsuccessful_reason": "Budget constraints"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrgOpportunityUpdateInputBody.json |
| requestBody (application/json).amount | string | no | The updated amount of the opportunity | 1000000 |
| requestBody (application/json).amount_transferred | string | no | The amount transferred from the client organisation to the opportunity (maps to Amount_Transferred__c) | 50000 |
| requestBody (application/json).name | string | no | The updated name of the opportunity | Updated Opportunity Name |
| requestBody (application/json).next_step | string | no | The updated next action item for the opportunity | Schedule follow-up meeting |
| requestBody (application/json).next_step_date | string | no | The updated date of the next step | 2024-12-31T00:00:00Z |
| requestBody (application/json).notes | string | no | The notes for the opportunity (maps to Notes__c) | Additional notes for the opportunity |
| requestBody (application/json).partial_won_deferred_next_step_date | string | no | The deferred next step date for partially won opportunities (maps to Partial_Won_Deferred_Next_Step_Date__c) | 2025-03-01T00:00:00Z |
| requestBody (application/json).partial_won_outcome | string | no | The outcome when an opportunity is partially won (maps to Partial_Won_Outcome__c) | Deferred |
| requestBody (application/json).status | string | no | The updated status of the opportunity | Closed Won |
| requestBody (application/json).unsuccessful_reason | string | no | The reason an opportunity was unsuccessful (maps to Unsuccessful_Reason__c) | Budget constraints |
| GET /api/v1/{tenant_id}/client-organisations/tax-pods | operation | no | client-organisation-tax-pods |  |
| tenant_id | string | yes | The tenant ID | 123 |
| POST /api/v1/{tenant_id}/client-organisations/teams/search | operation | no | team-client-organisation-search |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SearchTeamsForClientOrganisationsInputBody.json", "business_group_id_filter": "bg_123", "business_group_type": "team", "client_organisation_filter": "Acme Corp", "created_after": "2024-01-01T00:00:00Z", "created_before": "2024-12-31T23:59:59Z", "filter": {}, "name_filter": "Advisory", "pagination_params": {"page": 1, "page_size": 10}, "role_filter": "primary_advisor", "sort_keys": [{"cast_type": "numeric", "collation": "default", "sort_column": "business_group_name", "sort_order": "ASC"}], "status_filter": "Active"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SearchTeamsForClientOrganisationsInputBody.json |
| requestBody (application/json).business_group_id_filter | string | no | Filter by business group id | bg_123 |
| requestBody (application/json).business_group_type | string | no | Filter by business group type | team |
| requestBody (application/json).client_organisation_filter | string | no | Filter by client organisation name (partial match) | Acme Corp |
| requestBody (application/json).created_after | string | no | Filter assignments created after this date | 2024-01-01T00:00:00Z |
| requestBody (application/json).created_before | string | no | Filter assignments created before this date | 2024-12-31T23:59:59Z |
| requestBody (application/json).filter |  | no | Expression to filter the team assignments by. Supports complex logic with and/or operators, binary comparisons, and column/literal values. Available columns: role, business_group_name, status, created_at | {} |
| requestBody (application/json).name_filter | string | no | Filter by team name (partial match) | Advisory |
| requestBody (application/json).pagination_params | object | no |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).role_filter | string | no | Filter by assignment role | primary_advisor |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort criteria with column and direction | [{"cast_type": "numeric", "collation": "default", "sort_column": "business_group_name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort criteria with column and direction | {"cast_type": "numeric", "collation": "default", "sort_column": "business_group_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type casting for correct sorting of JSONB numeric/date fields. Use 'numeric' for currency/decimals, 'integer' for whole numbers, 'date' or 'timestamp' for dates. Essential for sorting Salesforce custom fields stored in extra_properties. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Supports JSONB paths for custom fields. | business_group_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending) or DESC (descending). | ASC |
| requestBody (application/json).status_filter | string | no | Filter by team status | Active |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/addresses | operation | no | client-organisation-address-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The ID of the client organisation associated with the address we are searching for | 456 |
| POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/addresses | operation | no | client-organisation-address-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateAddressInputBody.json", "address_line1": "string", "address_line2": "string", "address_type": "string", "city": "string", "country": "string", "description": "string", "state": "string", "zipcode": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateAddressInputBody.json |
| requestBody (application/json).address_line1 | string | yes |  | string |
| requestBody (application/json).address_line2 | string | no |  | string |
| requestBody (application/json).address_type | string | yes |  | string |
| requestBody (application/json).city | string | yes |  | string |
| requestBody (application/json).country | string | yes |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).state | string | no |  | string |
| requestBody (application/json).zipcode | string | yes |  | string |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections | operation | no | client-organisation-connections-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The ID of the initiating client | 456 |
| relationship_type_category | string | no | The type of relationship catagory to retrieve | Client Relationships |
| POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections | operation | no | client-organisation-connection-create Creates a new connection between two client organisations |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The ID of the initiating client organisation | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateClientOrganisationConnectionInputBody.json", "extra_properties": {"key": "string"}, "participating_client_organisation_id": "string", "relationship_description": "string", "relationship_type": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateClientOrganisationConnectionInputBody.json |
| requestBody (application/json).extra_properties | object | no | Additional properties for the connection | {"key": "string"} |
| requestBody (application/json).participating_client_organisation_id | string | yes | The ID of the participating client organisation | string |
| requestBody (application/json).relationship_description | string | no | Optional description of the relationship | string |
| requestBody (application/json).relationship_type | string | yes | The relationship type (e.g., Parent Company, Subsidiary, Trust) | string |
| DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections/{connection_id} | operation | no | client-organisation-connection-delete Deletes an existing connection between two client organisations |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The ID of the initiating client organisation | org_456 |
| connection_id | string | yes | The ID of the connection to delete | connection_123abc |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/clients | operation | no | client-organisation-client-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisationID | 456 |
| POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/clients | operation | no | client-create |  |
| tenant_id | string | yes |  | string |
| client_organisation_id | string | yes | The organisation ID | or_company |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientCreateInputBody.json", "additional_attributes": {"key": "string"}, "assets": "100000", "compliance_record": "1234567890", "current_employer": "Acme Inc.", "documentation": "1234567890", "drivers_license_number": "1234567890", "employment_status": "Employed", "expected_retirement_age": 65, "external_id": "ext_123", "investment_goal": "Growth", "is_primary": true, "maiden_name": "Smith", "marketing_salutation": "Dear John", "occupation": "Software Engineer", "officer_or_director": "Yes", "person": {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"}, "personal_interests": "Traveling, Reading", "preferred_name": "John", "retired": "Yes", "retirement_date": "2025-01-01", "role": "Client", "security_restrictions": "None", "wedding_anniversary": "2025-01-01"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientCreateInputBody.json |
| requestBody (application/json).additional_attributes | object | no | Additional attributes of the client | {"key": "string"} |
| requestBody (application/json).assets | string | no | The assets of the client | 100000 |
| requestBody (application/json).compliance_record | string | no | The compliance record of the client | 1234567890 |
| requestBody (application/json).current_employer | string | no | The current employer of the client | Acme Inc. |
| requestBody (application/json).documentation | string | no | The documentation of the client | 1234567890 |
| requestBody (application/json).drivers_license_number | string | no | The drivers license number of the client | 1234567890 |
| requestBody (application/json).employment_status | string | no | The employment status of the client | Employed |
| requestBody (application/json).expected_retirement_age | integer | no | The expected retirement age of the client | 65 |
| requestBody (application/json).external_id | string | no | The external ID of the client, normally coming from CRM | ext_123 |
| requestBody (application/json).investment_goal | string | no | The investment goal of the client | Growth |
| requestBody (application/json).is_primary | boolean | no | Whether the client is the primary client | True |
| requestBody (application/json).maiden_name | string | no | The maiden name of the client | Smith |
| requestBody (application/json).marketing_salutation | string | no | The marketing salutation of the client | Dear John |
| requestBody (application/json).occupation | string | no | The occupation of the client | Software Engineer |
| requestBody (application/json).officer_or_director | string | no | Whether the client is an officer or director | Yes |
| requestBody (application/json).person | object | yes |  | {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"} |
| requestBody (application/json).person.date_of_birth | string | no |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).person.first_name | string | no |  | string |
| requestBody (application/json).person.gender | string | no |  | string |
| requestBody (application/json).person.last_name | string | no |  | string |
| requestBody (application/json).person.marital_status | string | no |  | string |
| requestBody (application/json).person.middle_name | string | no |  | string |
| requestBody (application/json).person.nationality | string | no |  | string |
| requestBody (application/json).person.preferred_contact_method | string | no |  | string |
| requestBody (application/json).person.ssn | string | no |  | string |
| requestBody (application/json).person.suffix | string | no |  | string |
| requestBody (application/json).person.title | string | no |  | string |
| requestBody (application/json).personal_interests | string | no | The personal interests of the client | Traveling, Reading |
| requestBody (application/json).preferred_name | string | no | The preferred name of the client | John |
| requestBody (application/json).retired | string | no | The retirement status of the client | Yes |
| requestBody (application/json).retirement_date | string | no | The retirement date of the client | 2025-01-01 |
| requestBody (application/json).role | string | no | The role of the client | Client |
| requestBody (application/json).security_restrictions | string | no | The security restrictions of the client | None |
| requestBody (application/json).wedding_anniversary | string | no | The wedding anniversary of the client | 2025-01-01 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/contacts | operation | no | client-organisation-contact-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | 456 |
| POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/contacts | operation | no | client-organisation-contact-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The entity ID | 456 |
| requestBody (application/json) | ['array', 'null'] | yes |  | [{"role": "string", "type": "string", "value": "string"}] |
| requestBody (application/json)[] | object | yes |  | {"role": "string", "type": "string", "value": "string"} |
| requestBody (application/json)[].role | string | yes |  | string |
| requestBody (application/json)[].type | string | yes |  | string |
| requestBody (application/json)[].value | string | yes |  | string |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/dashboard | operation | no | relationship-dashboard-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The unique identifier of the client organisation | co_123abc |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/financial-accounts | operation | no | financial-accounts-by-client-organisation-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | 456 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/policies | operation | no | policies-by-client-organisation-get Get all policies for a client organisation with associated clients, agents, and valuations. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| page | integer | no | Page number | 1 |
| page_size | integer | no | Number of results per page | 100 |
| line_of_business | string | no | Filter by line of business (exact match) | Life |
| status | string | no | Filter by status (exact match) | Active |
| policy_number | string | no | Filter by policy number (partial match, case insensitive) | POL- |
| carrier | string | no | Filter by carrier (partial match, case insensitive) | State |
| sort_by | string | no | Column to sort by | created_at |
| sort_order | string | no | Sort direction: ASC or DESC | DESC |
| face_amount_min | string | no | Filter by minimum face amount (inclusive, decimal string) | 50000.00 |
| face_amount_max | string | no | Filter by maximum face amount (inclusive, decimal string) | 500000.00 |
| premium_amount_min | string | no | Filter by minimum premium amount (inclusive, decimal string) | 100.00 |
| premium_amount_max | string | no | Filter by maximum premium amount (inclusive, decimal string) | 5000.00 |
| effective_date_from | string | no | Filter policies with effective_date on or after this time (RFC3339) | 2024-01-01T00:00:00Z |
| effective_date_to | string | no | Filter policies with effective_date on or before this time (RFC3339) | 2024-12-31T23:59:59Z |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/relationships | operation | no | client-organisation-relationships-get-all |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The ID of the client organisation you want to retrieve the relationships for | 456 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/rmds | operation | no | rmd-list-by-client-organisation |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID to which the RMDs are assigned | account_123 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/sloas | operation | no | sloa-list-by-client-organisation |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | account_123 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/tax-filings | operation | no | tax-filing-list-by-client-organisation |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID to which the tax filings are assigned | client_org_123 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams | operation | no | team-client-organisation-list |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams | operation | no | team-client-organisation-add |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AddTeamToClientOrganisationInputBody.json", "additional_properties": {"priority": "high"}, "business_group_id": "bg_123", "description": "Primary advisory team for the client", "role": "primary_advisor"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AddTeamToClientOrganisationInputBody.json |
| requestBody (application/json).additional_properties | object | no | Additional properties for the team assignment | {"priority": "high"} |
| requestBody (application/json).business_group_id | string | yes | The unique identifier of the team to assign | bg_123 |
| requestBody (application/json).description | string | no | Description of the team assignment | Primary advisory team for the client |
| requestBody (application/json).role | string | yes | The role for this team assignment | primary_advisor |
| DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams/{business_group_id} | operation | no | team-client-organisation-remove |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| business_group_id | string | yes | The team ID to remove | bg_123 |
| role | string | yes | The role to remove | Gold Support Team |
| GET /api/v1/{tenant_id}/client-organisations/{id} | operation | no | client-organisation-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The Organisation ID | 123 |
| PATCH /api/v1/{tenant_id}/client-organisations/{id} | operation | no | client-organisation-update Updates the specified fields of a client organisation using PATCH semantics. Only provided fields will be updated. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The client organisation ID | co_123456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrganisationUpdateInputBody.json", "approx_aum": 1200000000, "client_organisation_role": "Primary Client", "client_organisation_type": "LLC", "client_segmentation": "Ultra High Net Worth", "description": "An updated leading technology company", "external_id": "A103143913S_V2", "extra_properties": {"aum": "1200000000", "employees": "600", "industry": "Technology"}, "name": "Acme Corp Updated", "notes": "Updated client notes"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrganisationUpdateInputBody.json |
| requestBody (application/json).approx_aum | number | no | The approximate AUM of the client organisation | 1200000000 |
| requestBody (application/json).client_organisation_role | string | no | The role of the client organisation in the relationship | Primary Client |
| requestBody (application/json).client_organisation_type | string | no | The type of the client organisation (e.g., Corporation, LLC, Partnership) | LLC |
| requestBody (application/json).client_segmentation | string | no | The segmentation of the client organisation | Ultra High Net Worth |
| requestBody (application/json).description | string | no | A brief description of the client organisation | An updated leading technology company |
| requestBody (application/json).external_id | string | no | an external ID from client organisation. Normally from CRM | A103143913S_V2 |
| requestBody (application/json).extra_properties | object | no | Additional properties of the client organisation | {"aum": "1200000000", "employees": "600", "industry": "Technology"} |
| requestBody (application/json).name | string | no | The name of the client organisation | Acme Corp Updated |
| requestBody (application/json).notes | string | no | Notes about the client organisation | Updated client notes |
| POST /api/v1/{tenant_id}/client-portal/jwt | operation | no | client-portal-jwt-generate Creates a signed JWT token for client portal authentication and returns the SSO URL |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientPortalJWTInputBody.json", "BoxFolderId": "242798118007", "BoxUserId": "12345678", "ContactId": "0032F00002xyz123QAA", "EnvestnetChannelQualifiedId": "ENV789012", "EnvestnetClientId": "ENV123456", "HouseholdId": "0012F00002abcdefQAA", "OrionClientId": 123456, "PersonAccountId": "0012F00002abcdefQAA", "PersonContactId": "0032F00002xyz123QAA", "PortfolioManagementSystem": "Orion", "SalesforceAdvisorId": "0052F00000123456QAA", "SalesforceClientAssociateId": "0052F00000789012QAA", "email": "john.doe@example.com", "family_name": "Doe", "given_name": "John", "phone_number_verified": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientPortalJWTInputBody.json |
| requestBody (application/json).BoxFolderId | string | no | Box folder ID | 242798118007 |
| requestBody (application/json).BoxUserId | string | no | Box user ID | 12345678 |
| requestBody (application/json).ContactId | string | yes | Salesforce contact external ID | 0032F00002xyz123QAA |
| requestBody (application/json).EnvestnetChannelQualifiedId | string | no | Envestnet advisor code | ENV789012 |
| requestBody (application/json).EnvestnetClientId | string | no | Envestnet customer code | ENV123456 |
| requestBody (application/json).HouseholdId | string | yes | Salesforce household external ID | 0012F00002abcdefQAA |
| requestBody (application/json).OrionClientId | integer | no | Orion household ID | 123456 |
| requestBody (application/json).PersonAccountId | string | yes | Salesforce person account ID | 0012F00002abcdefQAA |
| requestBody (application/json).PersonContactId | string | yes | Salesforce person contact ID | 0032F00002xyz123QAA |
| requestBody (application/json).PortfolioManagementSystem | string | no | Portfolio management system name | Orion |
| requestBody (application/json).SalesforceAdvisorId | string | no | Salesforce advisor ID | 0052F00000123456QAA |
| requestBody (application/json).SalesforceClientAssociateId | string | no | Salesforce client associate ID | 0052F00000789012QAA |
| requestBody (application/json).email | string | yes | Client's email | john.doe@example.com |
| requestBody (application/json).family_name | string | yes | Client's last name | Doe |
| requestBody (application/json).given_name | string | yes | Client's first name | John |
| requestBody (application/json).phone_number_verified | boolean | yes | Whether phone number is verified | True |
| GET /api/v1/{tenant_id}/clients | operation | no | client-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| only_assigned | boolean | no | Whether to only return clients assigned to the current user | True |
| page | integer | no | The page number to return | 1 |
| page_size | integer | no | The number of records per page | 10 |
| field | string | no | Field to filter clients by | name |
| search | string | no | Search term to filter clients by name, phone, or email | My organisation |
| GET /api/v1/{tenant_id}/clients-organisations/{client_organisation_id}/agents | operation | no | client-organisation-agent-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisationID | 456 |
| POST /api/v1/{tenant_id}/clients/move | operation | no | clients-batch-move |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientBatchMoveInputBody.json", "moves": [{"client_id": "cl_123", "description": "string", "role": "PRIMARY, SECONDARY", "source_organisation_id": "co_456", "target_organisation_id": "co_789"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientBatchMoveInputBody.json |
| requestBody (application/json).moves | ['array', 'null'] | yes | List of client move operations | [{"client_id": "cl_123", "description": "string", "role": "PRIMARY, SECONDARY", "source_organisation_id": "co_456", "target_organisation_id": "co_789"}] |
| requestBody (application/json).moves[] | object | yes | List of client move operations | {"client_id": "cl_123", "description": "string", "role": "PRIMARY, SECONDARY", "source_organisation_id": "co_456", "target_organisation_id": "co_789"} |
| requestBody (application/json).moves[].client_id | string | yes | ID of the client to move | cl_123 |
| requestBody (application/json).moves[].description | string | no | Optional description of the move | string |
| requestBody (application/json).moves[].role | string | yes | Role in the new organisation - we allow any ROLE value | PRIMARY, SECONDARY |
| requestBody (application/json).moves[].source_organisation_id | string | yes | Current client organisation ID | co_456 |
| requestBody (application/json).moves[].target_organisation_id | string | yes | Target client organisation ID | co_789 |
| POST /api/v1/{tenant_id}/clients/search | operation | no | clients-search |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientsSearchInputBody.json", "client_organisation_ids": ["org_1", "org_2"], "created_after": "2026-01-15T10:30:00Z", "created_before": "2026-01-15T10:30:00Z", "external_id_filter": "ext_123", "filter": {"operands": [{"left": {"column": "role", "type": "column"}, "operator": "=", "right": {"type": "literal", "value": "Primary"}, "type": "binary"}, {"left": {"column": "created_at", "type": "column"}, "operator": ">", "right": {"type": "literal", "value": "2024-01-01T00:00:00Z"}, "type": "binary"}], "type": "and"}, "name_filter": "John", "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "role_filter": "Primary", "sort_keys": [{"cast_type": "numeric", "collation": "default", "sort_column": "person_first_name", "sort_order": "ASC"}], "status_filter": "Active"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientsSearchInputBody.json |
| requestBody (application/json).client_organisation_ids | ['array', 'null'] | no | Optional list of client organisation IDs to narrow the search within. These IDs are intersected with the caller's ABAC-visible client organisations; supplying inaccessible IDs will not broaden access. | ["org_1", "org_2"] |
| requestBody (application/json).client_organisation_ids[] | string | no | Optional list of client organisation IDs to narrow the search within. These IDs are intersected with the caller's ABAC-visible client organisations; supplying inaccessible IDs will not broaden access. | string |
| requestBody (application/json).created_after | string | no | Filter clients created after this date | 2026-01-15T10:30:00Z |
| requestBody (application/json).created_before | string | no | Filter clients created before this date | 2026-01-15T10:30:00Z |
| requestBody (application/json).external_id_filter | string | no | Filter clients by external ID (exact match) | ext_123 |
| requestBody (application/json).filter |  | no | Expression to filter the clients by. Supports complex logic with and/or operators, binary comparisons, and column/literal values. Available columns: role, status, person_first_name, person_last_name, client_external_id, created_at | {"operands": [{"left": {"column": "role", "type": "column"}, "operator": "=", "right": {"type": "literal", "value": "Primary"}, "type": "binary"}, {"left": {"column": "created_at", "type": "column"}, "operator": ">", "right": {"type": "literal", "value": "2024-01-01T00:00:00Z"}, "type": "binary"}], "type": "and"} |
| requestBody (application/json).name_filter | string | no | Filter clients by first name, last name, or full name (partial match) | John |
| requestBody (application/json).only_assigned | boolean | no | If true, narrow the client-organisation universe to households directly assigned to the caller before applying any explicit client_organisation_ids filter. | True |
| requestBody (application/json).pagination_params | object | no | Pagination parameters | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).role_filter | string | no | Filter clients by role | Primary |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort criteria with column and direction | [{"cast_type": "numeric", "collation": "default", "sort_column": "person_first_name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort criteria with column and direction | {"cast_type": "numeric", "collation": "default", "sort_column": "person_first_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type casting for correct sorting of JSONB numeric/date fields. Use 'numeric' for currency/decimals, 'integer' for whole numbers, 'date' or 'timestamp' for dates. Essential for sorting Salesforce custom fields stored in extra_properties. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Supports JSONB paths for custom fields. | person_first_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending) or DESC (descending). | ASC |
| requestBody (application/json).status_filter | string | no | Filter clients by status | Active |
| DELETE /api/v1/{tenant_id}/clients/{client_id} | operation | no | client-delete Soft deletes a client record by marking it with deleted_at and deleted_by fields. The client record is preserved for audit purposes. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| client_id | string | yes | The client ID | c_456 |
| DELETE /api/v1/{tenant_id}/clients/{client_id}/addresses | operation | no | client-address-delete Deletes a client address relationship by address type. The address record itself is preserved. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The Client ID | 456 |
| address_type | string | no | The address type to delete (e.g., home, work, billing) | home |
| GET /api/v1/{tenant_id}/clients/{client_id}/addresses | operation | no | client-address-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The ID of the entity associated with the address we are searching for | 456 |
| POST /api/v1/{tenant_id}/clients/{client_id}/addresses | operation | no | client-address-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The Client ID to which the address belongs | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateAddressInputBody.json", "address_line1": "string", "address_line2": "string", "address_type": "string", "city": "string", "country": "string", "description": "string", "state": "string", "zipcode": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateAddressInputBody.json |
| requestBody (application/json).address_line1 | string | yes |  | string |
| requestBody (application/json).address_line2 | string | no |  | string |
| requestBody (application/json).address_type | string | yes |  | string |
| requestBody (application/json).city | string | yes |  | string |
| requestBody (application/json).country | string | yes |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).state | string | no |  | string |
| requestBody (application/json).zipcode | string | yes |  | string |
| PUT /api/v1/{tenant_id}/clients/{client_id}/addresses | operation | no | client-address-update Updates or creates a client address. Only one address per address type is allowed. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The Client ID to which the address belongs | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateAddressInputBody.json", "address_line1": "string", "address_line2": "string", "address_type": "string", "city": "string", "country": "string", "description": "string", "state": "string", "zipcode": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateAddressInputBody.json |
| requestBody (application/json).address_line1 | string | yes |  | string |
| requestBody (application/json).address_line2 | string | no |  | string |
| requestBody (application/json).address_type | string | yes |  | string |
| requestBody (application/json).city | string | yes |  | string |
| requestBody (application/json).country | string | yes |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).state | string | no |  | string |
| requestBody (application/json).zipcode | string | yes |  | string |
| GET /api/v1/{tenant_id}/clients/{client_id}/agents | operation | no | client-agent-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The client ID | 456 |
| GET /api/v1/{tenant_id}/clients/{client_id}/client-connections | operation | no | client-connections-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The ID of the client you want to retrieve the relationships for | 456 |
| relationship_type_category | string | no | The type of relationship catagory to retrieve | Client Relationships |
| initiating_organisation_id | string | no | The ID of the organisation you want to retirve the relationships for | 456 |
| POST /api/v1/{tenant_id}/clients/{client_id}/client-connections | operation | no | client-connection-create Creates a new connection between two clients |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The ID of the initiating client | cli_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateClientClientConnectionInputBody.json", "extra_properties": {"priority": "high", "status": "active"}, "participating_client_id": "cli_789", "relationship_description": "Spouse relationship", "relationship_type": "Spouse"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateClientClientConnectionInputBody.json |
| requestBody (application/json).extra_properties | object | no | Additional properties for the connection | {"priority": "high", "status": "active"} |
| requestBody (application/json).participating_client_id | string | yes | The ID of the participating client | cli_789 |
| requestBody (application/json).relationship_description | string | no | Optional description of the relationship | Spouse relationship |
| requestBody (application/json).relationship_type | string | yes | The relationship type (e.g., Spouse, Child, Business Partner). A lookup will be created if it doesn't exist. | Spouse |
| DELETE /api/v1/{tenant_id}/clients/{client_id}/client-connections/{connection_id} | operation | no | client-connection-delete Deletes an existing connection between two clients |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The ID of the client | cli_456 |
| connection_id | string | yes | The ID of the connection to delete | connection_123abc |
| POST /api/v1/{tenant_id}/clients/{client_id}/client-organisation-relationships | operation | no | client-organisation-relationship-create |  |
| client_id | string | yes | The ID of the client organisation associated with the relationship we are searching for | co_456 |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrganisationRelationshipCreateInputBody.json", "client_organisation_id": "co_456", "description": "This is a description of the relationship", "extra_properties": {"annual_revenue": "$500M", "employees": "5000", "industry": "Technology"}, "role": "Primary Client"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrganisationRelationshipCreateInputBody.json |
| requestBody (application/json).client_organisation_id | string | yes | The ID of the client organisation associated with the relationship we are searching for | co_456 |
| requestBody (application/json).description | ['string', 'null'] | yes | A brief description of the relationship | This is a description of the relationship |
| requestBody (application/json).extra_properties | object | no | Additional properties of the client organisation as key-value pairs | {"annual_revenue": "$500M", "employees": "5000", "industry": "Technology"} |
| requestBody (application/json).role | string | yes | The role of the client organisation in the relationship | Primary Client |
| GET /api/v1/{tenant_id}/clients/{client_id}/contacts | operation | no | client-contact-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The client ID | 456 |
| POST /api/v1/{tenant_id}/clients/{client_id}/contacts | operation | no | client-contact-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The client ID | 456 |
| requestBody (application/json) | ['array', 'null'] | yes |  | [{"role": "string", "type": "string", "value": "string"}] |
| requestBody (application/json)[] | object | yes |  | {"role": "string", "type": "string", "value": "string"} |
| requestBody (application/json)[].role | string | yes |  | string |
| requestBody (application/json)[].type | string | yes |  | string |
| requestBody (application/json)[].value | string | yes |  | string |
| PUT /api/v1/{tenant_id}/clients/{client_id}/contacts | operation | no | client-contact-update Replaces all contacts for a client atomically. Existing contacts are deleted and the provided list is inserted. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The client ID | 456 |
| requestBody (application/json) | ['array', 'null'] | yes |  | [{"role": "string", "type": "string", "value": "string"}] |
| requestBody (application/json)[] | object | yes |  | {"role": "string", "type": "string", "value": "string"} |
| requestBody (application/json)[].role | string | yes |  | string |
| requestBody (application/json)[].type | string | yes |  | string |
| requestBody (application/json)[].value | string | yes |  | string |
| POST /api/v1/{tenant_id}/clients/{client_id}/document | operation | no | client-document-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The client ID | client_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateDocumentCatalogEntryInputBody.json", "access_level": "private", "additional_attributes": {"key": "value"}, "approved_by": "user_123", "description": "Client's 2023 tax return document", "document_status": "approved", "document_subtype": "2023 Tax Return", "document_type": "bank_statement", "external_id": "DOC-2024-01", "file_name": "document.pdf", "file_type": "pdf", "rejection_reason": "Incorrect format", "retention_policy": "5 years", "storage_container": "my-bucket", "storage_mode": "PLATFORM_MANAGED", "storage_object_key": "path/to/document.pdf", "storage_provider": "S3", "upload_date": "2026-01-15T10:30:00Z", "upload_status": "VERIFIED"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateDocumentCatalogEntryInputBody.json |
| requestBody (application/json).access_level | string | no | The access level of the document | private |
| requestBody (application/json).additional_attributes | object | no | Additional custom metadata | {"key": "value"} |
| requestBody (application/json).approved_by | string | no | ID of the user or system that approved the document | user_123 |
| requestBody (application/json).description | string | no | A brief description of the document | Client's 2023 tax return document |
| requestBody (application/json).document_status | string | no | The status of the document | approved |
| requestBody (application/json).document_subtype | string | no | Additional specificity for the document type | 2023 Tax Return |
| requestBody (application/json).document_type | string | yes | The type of document (e.g., bank_statement, tax_return) | bank_statement |
| requestBody (application/json).external_id | string | yes | The external identifier for the document | DOC-2024-01 |
| requestBody (application/json).file_name | string | no | The original file name of the uploaded document | document.pdf |
| requestBody (application/json).file_type | string | no | The file type or extension | pdf |
| requestBody (application/json).rejection_reason | string | no | Reason for document rejection | Incorrect format |
| requestBody (application/json).retention_policy | string | no | The document retention duration | 5 years |
| requestBody (application/json).storage_container | string | yes | The storage container (e.g., S3 bucket) where the document is stored | my-bucket |
| requestBody (application/json).storage_mode | string | yes | Storage mode: PLATFORM_MANAGED or THIRD_PARTY_MANAGED | PLATFORM_MANAGED |
| requestBody (application/json).storage_object_key | string | yes | The storage object key (path) to locate the document | path/to/document.pdf |
| requestBody (application/json).storage_provider | string | yes | Storage provider (e.g., S3, BOX, AZURE_BLOB) | S3 |
| requestBody (application/json).upload_date | string | no | The date the document was uploaded | 2026-01-15T10:30:00Z |
| requestBody (application/json).upload_status | string | yes | Upload status: PENDING, VERIFIED, FAILED | VERIFIED |
| GET /api/v1/{tenant_id}/clients/{client_id}/documents | operation | no | client-documents-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_id | string | yes | The client ID | client_123 |
| GET /api/v1/{tenant_id}/clients/{id} | operation | no | client-get |  |
| tenant_id | string | yes |  | string |
| id | string | yes |  | string |
| PATCH /api/v1/{tenant_id}/clients/{id} | operation | no | client-update Updates the specified fields of a client using PATCH semantics. Only provided fields will be updated. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The client ID | client_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientUpdateInputBody.json", "additional_attributes": {"key": "string"}, "assets": "100000", "compliance_record": "1234567890", "current_employer": "Acme Inc.", "documentation": "1234567890", "drivers_license_number": "1234567890", "employment_status": "Employed", "expected_retirement_age": 65, "external_id": "ext_123", "investment_goal": "Growth", "is_primary": true, "maiden_name": "Smith", "marketing_salutation": "Dear John", "occupation": "Software Engineer", "officer_or_director": "Yes", "organisation_id": "co_123456", "person": {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"}, "personal_interests": "Traveling, Reading", "preferred_name": "John", "retired": "Yes", "retirement_date": "2025-01-01", "role": "Client", "security_restrictions": "None", "wedding_anniversary": "2025-01-01"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientUpdateInputBody.json |
| requestBody (application/json).additional_attributes | object | no | Additional attributes of the client | {"key": "string"} |
| requestBody (application/json).assets | string | no | The assets of the client | 100000 |
| requestBody (application/json).compliance_record | string | no | The compliance record of the client | 1234567890 |
| requestBody (application/json).current_employer | string | no | The current employer of the client | Acme Inc. |
| requestBody (application/json).documentation | string | no | The documentation of the client | 1234567890 |
| requestBody (application/json).drivers_license_number | string | no | The drivers license number of the client | 1234567890 |
| requestBody (application/json).employment_status | string | no | The employment status of the client | Employed |
| requestBody (application/json).expected_retirement_age | integer | no | The expected retirement age of the client | 65 |
| requestBody (application/json).external_id | string | no | The external ID of the client, normally coming from CRM | ext_123 |
| requestBody (application/json).investment_goal | string | no | The investment goal of the client | Growth |
| requestBody (application/json).is_primary | boolean | no | Whether the client is the primary client | True |
| requestBody (application/json).maiden_name | string | no | The maiden name of the client | Smith |
| requestBody (application/json).marketing_salutation | string | no | The marketing salutation of the client | Dear John |
| requestBody (application/json).occupation | string | no | The occupation of the client | Software Engineer |
| requestBody (application/json).officer_or_director | string | no | Whether the client is an officer or director | Yes |
| requestBody (application/json).organisation_id | string | no | The organisation ID associated with the client | co_123456 |
| requestBody (application/json).person | object | no | Fields to update for the client person record | {"date_of_birth": "2026-01-15T10:30:00Z", "first_name": "string", "gender": "string", "last_name": "string", "marital_status": "string", "middle_name": "string", "nationality": "string", "preferred_contact_method": "string", "ssn": "string", "suffix": "string", "title": "string"} |
| requestBody (application/json).person.date_of_birth | string | no |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).person.first_name | string | no |  | string |
| requestBody (application/json).person.gender | string | no |  | string |
| requestBody (application/json).person.last_name | string | no |  | string |
| requestBody (application/json).person.marital_status | string | no |  | string |
| requestBody (application/json).person.middle_name | string | no |  | string |
| requestBody (application/json).person.nationality | string | no |  | string |
| requestBody (application/json).person.preferred_contact_method | string | no |  | string |
| requestBody (application/json).person.ssn | string | no |  | string |
| requestBody (application/json).person.suffix | string | no |  | string |
| requestBody (application/json).person.title | string | no |  | string |
| requestBody (application/json).personal_interests | string | no | The personal interests of the client | Traveling, Reading |
| requestBody (application/json).preferred_name | string | no | The preferred name of the client | John |
| requestBody (application/json).retired | string | no | The retirement status of the client | Yes |
| requestBody (application/json).retirement_date | string | no | The retirement date of the client | 2025-01-01 |
| requestBody (application/json).role | string | no | The role of the client | Client |
| requestBody (application/json).security_restrictions | string | no | The security restrictions of the client | None |
| requestBody (application/json).wedding_anniversary | string | no | The wedding anniversary of the client | 2025-01-01 |
| POST /api/v1/{tenant_id}/comments | operation | no | comments-list-all List all comments of a tenant (Avantos and Unqork) |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CommentsListAllInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "name", "sort_order": "ASC"}], "use_enriched_unqork_tasks": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CommentsListAllInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the tasks by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).only_assigned | boolean | no | Whether to only return tasks for client organisations the current user is directly assigned to | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the tasks | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the tasks by. | [{"sort_column": "name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the tasks by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| requestBody (application/json).use_enriched_unqork_tasks | boolean | no | Flag that decides if the unqork data will have additional informations, such as action runs extra data | True |
| POST /api/v1/{tenant_id}/comments/{entity}/{entity_id} | operation | no | comment-add |  |
| tenant_id | string | yes | The tenant ID | 123 |
| entity | string | yes | The type of entity to comment on | action_run |
| entity_id | string | yes | The entity ID to comment on | ar_456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CommentInputBody.json", "comment": "This is a comment", "created_at": "2023-04-01T12:00:00Z", "environment": "staging", "external_id": "ext_123", "tagged_users": ["ag_123", "ag_456"], "updated_at": "2023-04-01T12:00:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CommentInputBody.json |
| requestBody (application/json).comment | string | yes | The comment to add to the task | This is a comment |
| requestBody (application/json).created_at | string | no | Optional information about when the comment was created | 2023-04-01T12:00:00Z |
| requestBody (application/json).environment | string | no | The environment where the comment was created | staging |
| requestBody (application/json).external_id | string | no | Optional external ID for the comment | ext_123 |
| requestBody (application/json).tagged_users | ['array', 'null'] | no | The agent IDs of users to tag in the comment | ["ag_123", "ag_456"] |
| requestBody (application/json).tagged_users[] | string | no | The agent IDs of users to tag in the comment | string |
| requestBody (application/json).updated_at | string | no | Optional information about when the comment was updated | 2023-04-01T12:00:00Z |
| POST /api/v1/{tenant_id}/component/jwt | operation | no | component-jwt-generate Creates a signed JWT token for component authentication (AdvisorDirectory, AdvisorMatching, TradingQC) and returns the component URL |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ComponentJWTInputBody.json", "Component": "AdvisorDirectory", "RelationshipId": "rel_123", "UserId": "005Dn000007bfPUIAY", "UserRole": "Mercer-Admin"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ComponentJWTInputBody.json |
| requestBody (application/json).Component | string | yes | Component name (e.g., AdvisorDirectory, AdvisorMatching, AdvisorCapacity, TradingQC, GrowthShareOfWallet, Billing, RelationshipTax, DocumentExtractionPlanning) | AdvisorDirectory |
| requestBody (application/json).RelationshipId | string | no | Optional relationship ID for components that require it (e.g., GrowthShareOfWallet) | rel_123 |
| requestBody (application/json).UserId | string | yes | Salesforce user ID | 005Dn000007bfPUIAY |
| requestBody (application/json).UserRole | string | yes | User role | Mercer-Admin |
| DELETE /api/v1/{tenant_id}/coverage/{coverage_id} | operation | no | business-group-coverage-delete Deletes a specific coverage assignment |  |
| tenant_id | string | yes | The tenant ID | 123 |
| coverage_id | string | yes | The coverage ID to delete | bgc_01JGQK9X1ABCDEFGHIJKLMNOP |
| GET /api/v1/{tenant_id}/custodian-forms-config | operation | no | custodian-forms-config-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| PUT /api/v1/{tenant_id}/custodian-forms-config | operation | no | custodian-forms-config-put |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CustodianFormsConfigPutInputBody.json", "child_forms": [{"display_condition": "true", "e_signature_mapping": "{\"signer_email\": \"data.email\"}", "form_id": "f_456", "payload_template_override": "{\"name\": \"John Doe\"}"}], "envelope_metadata_endpoint_id": "e_456", "envelope_trigger_endpoint_id": "e_456", "l1_config_form_id": "f_456", "l2_config_form_id": "f_789", "preview_trigger_endpoint_id": "e_456"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustodianFormsConfigPutInputBody.json |
| requestBody (application/json).child_forms | ['array', 'null'] | yes | The child forms | [{"display_condition": "true", "e_signature_mapping": "{\"signer_email\": \"data.email\"}", "form_id": "f_456", "payload_template_override": "{\"name\": \"John Doe\"}"}] |
| requestBody (application/json).child_forms[] | object | yes | The child forms | {"display_condition": "true", "e_signature_mapping": "{\"signer_email\": \"data.email\"}", "form_id": "f_456", "level": "1", "payload_template_override": "{\"name\": \"John Doe\"}"} |
| requestBody (application/json).child_forms[].display_condition | string | yes | The display condition | true |
| requestBody (application/json).child_forms[].e_signature_mapping | string | yes | The e-signature mapping | {"signer_email": "data.email"} |
| requestBody (application/json).child_forms[].form_id | string | yes | The form ID | f_456 |
| requestBody (application/json).child_forms[].level | string | yes | The level (1 or 2) | 1 |
| requestBody (application/json).child_forms[].payload_template_override | string | yes | The payload template override | {"name": "John Doe"} |
| requestBody (application/json).envelope_metadata_endpoint_id | string | yes | The endpoint ID | e_456 |
| requestBody (application/json).envelope_trigger_endpoint_id | string | yes | The endpoint ID | e_456 |
| requestBody (application/json).l1_config_form_id | string | yes | The L1 configuration form ID | f_456 |
| requestBody (application/json).l2_config_form_id | string | yes | The L2 configuration form ID | f_789 |
| requestBody (application/json).preview_trigger_endpoint_id | string | yes | The endpoint ID | e_456 |
| POST /api/v1/{tenant_id}/custom-javascript-functions | operation | no | custom-javascript-functions-create Creates a new custom javascript function that can be used in the action blueprint |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CustomJavascriptFunctionsCreateInputBody.json", "body": "console.log('Hello World');", "description": "A utility function for form validation", "execution_role": "Advisor", "initiation": "const threshold = 0.5;", "name": "Global Functions", "request_keys": ["email", "name"], "response_keys": ["userId", "status"], "server_side_enabled": false} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustomJavascriptFunctionsCreateInputBody.json |
| requestBody (application/json).body | string | yes | The body of the custom javascript function | console.log('Hello World'); |
| requestBody (application/json).description | string | yes | The description of the custom javascript function | A utility function for form validation |
| requestBody (application/json).execution_role | string | no | Role name for Avantos API calls when executing server-side | Advisor |
| requestBody (application/json).initiation | string | yes | The initiation code that runs before the main function body | const threshold = 0.5; |
| requestBody (application/json).name | string | yes | The name of the custom javascript function | Global Functions |
| requestBody (application/json).request_keys | ['array', 'null'] | no | Array of request parameter keys for server-side execution | ["email", "name"] |
| requestBody (application/json).request_keys[] | string | no | Array of request parameter keys for server-side execution | string |
| requestBody (application/json).response_keys | ['array', 'null'] | no | Array of response parameter keys for server-side execution | ["userId", "status"] |
| requestBody (application/json).response_keys[] | string | no | Array of response parameter keys for server-side execution | string |
| requestBody (application/json).server_side_enabled | boolean | no | Whether this function can be executed server-side | False |
| POST /api/v1/{tenant_id}/custom-javascript-functions/list | operation | no | custom-javascript-functions-list Lists all custom javascript functions with pagination and search support |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CustomJavascriptFunctionsListInputBody.json", "pagination": {"page": 1, "page_size": 10}, "search": "my function", "sort_keys": [{"sort_column": "name", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustomJavascriptFunctionsListInputBody.json |
| requestBody (application/json).pagination | object | yes |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).search | ['string', 'null'] | yes | Search term to filter functions by name | my function |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the functions by. Valid columns: name, created_at, updated_at. Default: created_at DESC | [{"sort_column": "name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the functions by. Valid columns: name, created_at, updated_at. Default: created_at DESC | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| DELETE /api/v1/{tenant_id}/custom-javascript-functions/{id} | operation | no | custom-javascript-functions-delete Deletes a custom javascript function |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The custom javascript functions ID | cjsf_1 |
| GET /api/v1/{tenant_id}/custom-javascript-functions/{id} | operation | no | custom-javascript-functions-get Gets a single custom javascript function by ID |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The custom javascript function ID | cjsf_1 |
| PUT /api/v1/{tenant_id}/custom-javascript-functions/{id} | operation | no | custom-javascript-functions-update Updates an existing custom javascript function |  |
| tenant_id | string | yes | The tenant ID | 123 |
| id | string | yes | The custom javascript functions ID | cjsf_1 |
| If-Match | string | no | ETag from GET response. Required — update is rejected with 412 if the function has been modified since this ETag was issued. | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CustomJavascriptFunctionsUpdateInputBody.json", "body": "console.log('Hello World');", "description": "A utility function for form validation", "execution_role": "Advisor", "initiation": "const threshold = 0.5;", "name": "Global Functions", "request_keys": ["email", "name"], "response_keys": ["userId", "status"], "server_side_enabled": false} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustomJavascriptFunctionsUpdateInputBody.json |
| requestBody (application/json).body | string | yes | The body of the custom javascript function | console.log('Hello World'); |
| requestBody (application/json).description | string | yes | The description of the custom javascript function | A utility function for form validation |
| requestBody (application/json).execution_role | string | no | Role name for Avantos API calls when executing server-side | Advisor |
| requestBody (application/json).initiation | string | yes | The initiation code that runs before the main function body | const threshold = 0.5; |
| requestBody (application/json).name | string | yes | The name of the custom javascript function | Global Functions |
| requestBody (application/json).request_keys | ['array', 'null'] | no | Array of request parameter keys for server-side execution | ["email", "name"] |
| requestBody (application/json).request_keys[] | string | no | Array of request parameter keys for server-side execution | string |
| requestBody (application/json).response_keys | ['array', 'null'] | no | Array of response parameter keys for server-side execution | ["userId", "status"] |
| requestBody (application/json).response_keys[] | string | no | Array of response parameter keys for server-side execution | string |
| requestBody (application/json).server_side_enabled | boolean | no | Whether this function can be executed server-side | False |
| GET /api/v1/{tenant_id}/debug/abac | operation | no | abac-debug |  |
| tenant_id | string | yes | The tenant ID | 123 |
| GET /api/v1/{tenant_id}/document-storage/integrations | operation | no | document-storage-integration-list |  |
| tenant_id | string | yes | Tenant ID | string |
| DELETE /api/v1/{tenant_id}/document-storage/integrations/{provider} | operation | no | document-storage-integration-delete |  |
| tenant_id | string | yes | Tenant ID | string |
| provider | string | yes | Provider name (e.g. filenet) | string |
| GET /api/v1/{tenant_id}/document-storage/integrations/{provider} | operation | no | document-storage-integration-get |  |
| tenant_id | string | yes | Tenant ID | string |
| provider | string | yes | Provider name (e.g. filenet) | string |
| PUT /api/v1/{tenant_id}/document-storage/integrations/{provider} | operation | no | document-storage-integration-upsert |  |
| tenant_id | string | yes | Tenant ID | string |
| provider | string | yes | Provider name (e.g. filenet) | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/DocumentStorageIntegrationUpsertInputBody.json", "config": {}, "credentials": {}, "enabled": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DocumentStorageIntegrationUpsertInputBody.json |
| requestBody (application/json).config |  | yes | Non-sensitive provider configuration | {} |
| requestBody (application/json).credentials |  | no | Sensitive credentials; omit or pass {} to leave unchanged on update | {} |
| requestBody (application/json).enabled | boolean | yes | Whether the integration is enabled | True |
| GET /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments | operation | no | document-storage-integration-environment-list |  |
| tenant_id | string | yes | Tenant ID | string |
| provider | string | yes | Provider name (e.g. filenet) | string |
| DELETE /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} | operation | no | document-storage-integration-environment-delete |  |
| tenant_id | string | yes | Tenant ID | string |
| provider | string | yes | Provider name (e.g. filenet) | string |
| environment | string | yes | Environment name (e.g. dev, prod) | string |
| GET /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} | operation | no | document-storage-integration-environment-get |  |
| tenant_id | string | yes | Tenant ID | string |
| provider | string | yes | Provider name (e.g. filenet) | string |
| environment | string | yes | Environment name (e.g. dev, prod) | string |
| PUT /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} | operation | no | document-storage-integration-environment-upsert |  |
| tenant_id | string | yes | Tenant ID | string |
| provider | string | yes | Provider name (e.g. filenet) | string |
| environment | string | yes | Environment name (e.g. dev, prod) | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/DocumentStorageIntegrationEnvironmentUpsertInputBody.json", "config": {}, "credentials": {}, "enabled": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DocumentStorageIntegrationEnvironmentUpsertInputBody.json |
| requestBody (application/json).config |  | yes | Non-sensitive provider configuration overrides | {} |
| requestBody (application/json).credentials |  | no | Sensitive credentials overrides; omit or pass {} to leave unchanged on update | {} |
| requestBody (application/json).enabled | boolean | yes | Whether the integration is enabled in this environment | True |
| GET /api/v1/{tenant_id}/documents/{document_id} | operation | no | document-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| document_id | string | yes | The document ID | doc_123 |
| POST /api/v1/{tenant_id}/email | operation | no | email-send Sends an email from a template |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SendEmailInputBody.json", "data": {"ccEmail": {}, "ccEmailList": {}, "content": "string", "currentUser": {"key": {}}, "fromName": "string", "replyTo": "string", "sourceModuleId": "string", "subject": "string", "toEmail": {}, "toEmailList": {}, "tpmEmailFlag": "string"}, "emailType": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SendEmailInputBody.json |
| requestBody (application/json).data | object | yes | Email data payload | {"ccEmail": {}, "ccEmailList": {}, "content": "string", "currentUser": {"key": {}}, "fromName": "string", "replyTo": "string", "sourceModuleId": "string", "subject": "string", "toEmail": {}, "toEmailList": {}, "tpmEmailFlag": "string"} |
| requestBody (application/json).data.ccEmail |  | no | CC emails: string, comma/semicolon-separated string, array of strings, or array of objects with email key | {} |
| requestBody (application/json).data.ccEmailList |  | no | Alternate key for ccEmail | {} |
| requestBody (application/json).data.content | string | yes | Email HTML content | string |
| requestBody (application/json).data.currentUser | object | no | Deprecated: retained for backward compatibility. No longer used by the handler. | {"key": {}} |
| requestBody (application/json).data.fromName | string | no | From name for the email. Defaults to Aspen Alert if not provided. | string |
| requestBody (application/json).data.replyTo | string | no | Reply-to email address | string |
| requestBody (application/json).data.sourceModuleId | string | no | Source module identifier | string |
| requestBody (application/json).data.subject | string | yes | Email subject | string |
| requestBody (application/json).data.toEmail |  | no | Alternate key for toEmailList | {} |
| requestBody (application/json).data.toEmailList |  | no | List of recipient emails (string, array of strings, or array of objects with email key). Either toEmailList or toEmail must be provided. | {} |
| requestBody (application/json).data.tpmEmailFlag | string | no | When set to 'yes', sends a separate email to each recipient instead of grouping them | string |
| requestBody (application/json).emailType | string | no | Email type | string |
| GET /api/v1/{tenant_id}/entities/{entity}/{entity_id}/comments | operation | no | entity-comments-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| entity | string | yes | The type of entity to get comments for | action_run |
| entity_id | string | yes | The entity ID to get comments for | ar_456 |
| external_id | string | no | Optional external ID to also search for comments. If provided, returns comments where entity_id matches either the path entity_id or this external_id | ext_123 |
| GET /api/v1/{tenant_id}/environments/blueprints | operation | no | environment-blueprint-list Lists all blueprints that have an active version deployed to the caller's environment (derived from JWT token). Results are sorted by creation date descending. Supports pagination. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page | integer | no | The page number to return | 1 |
| page_size | integer | no | The number of records per page | 10 |
| POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes | operation | no | esignature-envelope-create Creates an e-signature envelope for document signing. The token_id in the path identifies the OAuth token to use for authentication with the e-signature provider. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/ESignatureEnvelopeCreateReq.json", "documents": [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}], "email_subject": "Please sign this document", "signers": [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{}], "initial_here_tabs": [{}], "sign_here_tabs": [{}]}}], "status": "sent"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ESignatureEnvelopeCreateReq.json |
| requestBody (application/json).documents | ['array', 'null'] | yes | Documents to include in the envelope | [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}] |
| requestBody (application/json).documents[] | object | yes | Documents to include in the envelope | {"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"} |
| requestBody (application/json).documents[].document_base64 | string | yes | Base64 encoded document | JVBERi0xLjQKJeLjz9MKN... |
| requestBody (application/json).documents[].document_id | string | yes | Document ID | 1 |
| requestBody (application/json).documents[].document_name | string | yes | Document name | Contract.pdf |
| requestBody (application/json).email_subject | string | yes | Email subject for the envelope | Please sign this document |
| requestBody (application/json).signers | ['array', 'null'] | yes | Signers for the envelope | [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}], "initial_here_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}], "sign_here_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}]}}] |
| requestBody (application/json).signers[] | object | yes | Signers for the envelope | {"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "initial_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "sign_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}]}} |
| requestBody (application/json).signers[].email | string | yes | Signer email | signer@example.com |
| requestBody (application/json).signers[].name | string | yes | Signer name | John Doe |
| requestBody (application/json).signers[].recipient_id | string | yes | Recipient ID | 1 |
| requestBody (application/json).signers[].tabs | object | yes | Signing tabs | {"date_signed_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "initial_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "sign_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}]} |
| requestBody (application/json).status | string | yes | Envelope status | sent |
| POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/from-template | operation | no | esignature-envelope-from-template-create Creates a new envelope using an existing template. Template roles must be assigned to signers with matching role names. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/ESignatureEnvelopeFromTemplateCreateReq.json", "documents": [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}], "email_subject": "Please sign this document", "status": "sent", "template_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "template_roles": [{"email": "signer@example.com", "name": "John Doe", "role_name": "Signer"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ESignatureEnvelopeFromTemplateCreateReq.json |
| requestBody (application/json).documents | ['array', 'null'] | no | Optional additional documents to include alongside template documents | [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}] |
| requestBody (application/json).documents[] | object | no | Optional additional documents to include alongside template documents | {"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"} |
| requestBody (application/json).documents[].document_base64 | string | yes | Base64 encoded document | JVBERi0xLjQKJeLjz9MKN... |
| requestBody (application/json).documents[].document_id | string | yes | Document ID | 1 |
| requestBody (application/json).documents[].document_name | string | yes | Document name | Contract.pdf |
| requestBody (application/json).email_subject | string | no | Optional email subject to override template default | Please sign this document |
| requestBody (application/json).status | string | yes | Envelope status | sent |
| requestBody (application/json).template_id | string | yes | Template ID to use for envelope creation | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| requestBody (application/json).template_roles | ['array', 'null'] | yes | Roles to assign to signers (must match template role names) | [{"email": "signer@example.com", "name": "John Doe", "role_name": "Signer"}] |
| requestBody (application/json).template_roles[] | object | yes | Roles to assign to signers (must match template role names) | {"email": "signer@example.com", "name": "John Doe", "role_name": "Signer"} |
| requestBody (application/json).template_roles[].email | string | yes | Signer email | signer@example.com |
| requestBody (application/json).template_roles[].name | string | yes | Signer name | John Doe |
| requestBody (application/json).template_roles[].role_name | string | yes | Template role name (case-sensitive) | Signer |
| PUT /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id} | operation | no | esignature-envelope-update Updates an e-signature envelope for document signing. The token_id in the path identifies the OAuth token to use for authentication with the e-signature provider. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/ESignatureEnvelopeCreateReq.json", "documents": [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}], "email_subject": "Please sign this document", "signers": [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{}], "initial_here_tabs": [{}], "sign_here_tabs": [{}]}}], "status": "sent"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ESignatureEnvelopeCreateReq.json |
| requestBody (application/json).documents | ['array', 'null'] | yes | Documents to include in the envelope | [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}] |
| requestBody (application/json).documents[] | object | yes | Documents to include in the envelope | {"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"} |
| requestBody (application/json).documents[].document_base64 | string | yes | Base64 encoded document | JVBERi0xLjQKJeLjz9MKN... |
| requestBody (application/json).documents[].document_id | string | yes | Document ID | 1 |
| requestBody (application/json).documents[].document_name | string | yes | Document name | Contract.pdf |
| requestBody (application/json).email_subject | string | yes | Email subject for the envelope | Please sign this document |
| requestBody (application/json).signers | ['array', 'null'] | yes | Signers for the envelope | [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}], "initial_here_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}], "sign_here_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}]}}] |
| requestBody (application/json).signers[] | object | yes | Signers for the envelope | {"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "initial_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "sign_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}]}} |
| requestBody (application/json).signers[].email | string | yes | Signer email | signer@example.com |
| requestBody (application/json).signers[].name | string | yes | Signer name | John Doe |
| requestBody (application/json).signers[].recipient_id | string | yes | Recipient ID | 1 |
| requestBody (application/json).signers[].tabs | object | yes | Signing tabs | {"date_signed_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "initial_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "sign_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}]} |
| requestBody (application/json).status | string | yes | Envelope status | sent |
| POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/documents/delete | operation | no | esignature-envelope-delete-documents Deletes one or more documents from an e-signature envelope. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/ESignatureEnvelopeDeleteDocumentsReq.json", "document_ids": ["1", "2"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ESignatureEnvelopeDeleteDocumentsReq.json |
| requestBody (application/json).document_ids | ['array', 'null'] | yes | List of document IDs to delete | ["1", "2"] |
| requestBody (application/json).document_ids[] | string | yes | List of document IDs to delete | string |
| POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/documents/update | operation | no | esignature-envelope-update-documents Updates one or more documents in an e-signature envelope with new content. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/ESignatureEnvelopeUpdateDocumentsReq.json", "documents": [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ESignatureEnvelopeUpdateDocumentsReq.json |
| requestBody (application/json).documents | ['array', 'null'] | yes | Documents to update in the envelope | [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}] |
| requestBody (application/json).documents[] | object | yes | Documents to update in the envelope | {"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"} |
| requestBody (application/json).documents[].document_base64 | string | yes | Base64 encoded document | JVBERi0xLjQKJeLjz9MKN... |
| requestBody (application/json).documents[].document_id | string | yes | Document ID | 1 |
| requestBody (application/json).documents[].document_name | string | yes | Document name | Contract.pdf |
| GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/download | operation | no | esignature-envelope-download Downloads all documents from an e-signature envelope as a combined PDF. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/recipients/delete | operation | no | esignature-envelope-delete-recipients Deletes one or more recipients from an e-signature envelope. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/ESignatureEnvelopeDeleteRecipientsReq.json", "recipient_ids": ["1", "2"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ESignatureEnvelopeDeleteRecipientsReq.json |
| requestBody (application/json).recipient_ids | ['array', 'null'] | yes | List of recipient IDs to delete | ["1", "2"] |
| requestBody (application/json).recipient_ids[] | string | yes | List of recipient IDs to delete | string |
| POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/recipients/update | operation | no | esignature-envelope-update-recipients Updates or adds recipients in an e-signature envelope. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/ESignatureEnvelopeUpdateRecipientsReq.json", "signers": [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{}], "initial_here_tabs": [{}], "sign_here_tabs": [{}]}}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ESignatureEnvelopeUpdateRecipientsReq.json |
| requestBody (application/json).signers | ['array', 'null'] | yes | Signers to add/update in the envelope | [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}], "initial_here_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}], "sign_here_tabs": [{"document_id": {}, "page_number": {}, "x_position": {}, "y_position": {}}]}}] |
| requestBody (application/json).signers[] | object | yes | Signers to add/update in the envelope | {"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"date_signed_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "initial_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "sign_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}]}} |
| requestBody (application/json).signers[].email | string | yes | Signer email | signer@example.com |
| requestBody (application/json).signers[].name | string | yes | Signer name | John Doe |
| requestBody (application/json).signers[].recipient_id | string | yes | Recipient ID | 1 |
| requestBody (application/json).signers[].tabs | object | yes | Signing tabs | {"date_signed_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "initial_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}], "sign_here_tabs": [{"document_id": "1", "page_number": "1", "x_position": 100, "y_position": 200}]} |
| GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/status | operation | no | esignature-envelope-status Retrieves the current status of an e-signature envelope including signer status and tab information. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/templates | operation | no | esignature-templates-list Lists available templates from the e-signature provider. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/templates/{template_id} | operation | no | esignature-template-get Retrieves detailed information about a specific template including documents, recipients, and tabs. The token_id in the path identifies the OAuth token to use. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| token_id | string | yes | The OAuth token ID | aot_01k4q8ef9zfmxsh3j80jhs8zky |
| account_id | string | yes | The DocuSign account ID | abc123 |
| template_id | string | yes | The template ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| POST /api/v1/{tenant_id}/execute | operation | no | trigger-execute |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerExecuteInputBody.json", "action_run_id": "ar_456", "client_org_id": "co_456", "endpoint_id": "te_456", "initiation_override": "const custom = 'value';", "payload": {"key": {"type": "literal", "value": "value"}}, "payload_template_override": {"subject": "Custom Subject", "to": "{{.email}}"}, "task_id": "ar_c_456"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerExecuteInputBody.json |
| requestBody (application/json).action_run_id | string | no | The action run ID | ar_456 |
| requestBody (application/json).client_org_id | string | no | The client organisation ID | co_456 |
| requestBody (application/json).endpoint_id | string | yes | The trigger endpoint ID | te_456 |
| requestBody (application/json).initiation_override | string | no | Optional initiation code override for JS execution service endpoints | const custom = 'value'; |
| requestBody (application/json).payload | object | yes | A map from payload variables to expressions. Expressions are evaluated in the context of the action run before sending to the trigger endpoint | {"key": {"type": "literal", "value": "value"}} |
| requestBody (application/json).payload_template_override |  | no | Optional payload template that overrides the endpoint's configured template | {"subject": "Custom Subject", "to": "{{.email}}"} |
| requestBody (application/json).task_id | string | no | The task ID | ar_c_456 |
| GET /api/v1/{tenant_id}/experimental-household-member-recommendations/{client_id} | operation | no | experimental-household-member-recommendations-get Retrieves potential household members by finding clients in brokerage_clients that share both addresses and last names with the specified client |  |
| tenant_id | string | yes | The tenant ID | vanguard |
| client_id | string | yes | The client ID to find household member recommendations for | client_123 |
| POST /api/v1/{tenant_id}/experimental-households-ranking | operation | no | experimental-household-ranking-trigger Triggers the household ranking algorithm to calculate and store ranked households by total assets |  |
| tenant_id | string | yes | The tenant ID | vanguard |
| client_org_name | string | no | The client organization name to filter households | brokerage_clients |
| POST /api/v1/{tenant_id}/experimental-households-ranking/list | operation | no | experimental-household-ranking-list Retrieves the stored household rankings for the tenant with pagination, sorting, and filtering support |  |
| tenant_id | string | yes | The tenant ID | vanguard |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/VPOCHouseholdRankingListInputBody.json", "filter": {"left": {"column": "rank", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": 1}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "rank", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/VPOCHouseholdRankingListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the household rankings by. See the Readme for more details on the Expression format. | {"left": {"column": "rank", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": 1}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | The pagination information for the household rankings | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the household rankings by | [{"sort_column": "rank", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the household rankings by | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| POST /api/v1/{tenant_id}/experimental-onboarding | operation | no | experimental-onboarding-create Creates a new onboarding record to track the progress of promoted household relationships |  |
| tenant_id | string | yes | The tenant ID | vanguard |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/VPOCOnboardingCreateInputBody.json", "action_ids": ["action_1", "action_2"], "primary_client_id": "client_123", "relationship_id": "rel_456"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/VPOCOnboardingCreateInputBody.json |
| requestBody (application/json).action_ids | ['array', 'null'] | yes | Array of action run IDs created by the frontend | ["action_1", "action_2"] |
| requestBody (application/json).action_ids[] | string | yes | Array of action run IDs created by the frontend | string |
| requestBody (application/json).primary_client_id | string | yes | The primary client ID for this onboarding | client_123 |
| requestBody (application/json).relationship_id | string | yes | The relationship ID created by the frontend | rel_456 |
| POST /api/v1/{tenant_id}/experimental-onboarding/list | operation | no | experimental-onboarding-list Lists all onboarding records for the tenant with progress details |  |
| tenant_id | string | yes | The tenant ID | vanguard |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/VPOCOnboardingListInputBody.json", "filter": {"left": {"column": "relationship_id", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "rel_123"}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "started_at", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/VPOCOnboardingListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the onboarding records by. See the Readme for more details on the Expression format. | {"left": {"column": "relationship_id", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "rel_123"}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | The pagination information for the onboarding records | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the onboarding records by. | [{"sort_column": "started_at", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the onboarding records by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| DELETE /api/v1/{tenant_id}/experimental-onboarding/{onboarding_id} | operation | no | experimental-onboarding-delete Deletes an onboarding record |  |
| tenant_id | string | yes | The tenant ID | vanguard |
| onboarding_id | string | yes | The onboarding ID | onboarding_123 |
| GET /api/v1/{tenant_id}/experimental-onboarding/{onboarding_id} | operation | no | experimental-onboarding-get Retrieves a specific onboarding record with progress details |  |
| tenant_id | string | yes | The tenant ID | vanguard |
| onboarding_id | string | yes | The onboarding ID | onboarding_123 |
| GET /api/v1/{tenant_id}/feature-flags | operation | no | feature-flags-list Returns all feature flags that are tagged as client-configurable, along with their current state for the caller's organization |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| GET /api/v1/{tenant_id}/feature-flags/{flag_key} | operation | no | feature-flags-get Returns a specific client-configurable feature flag and its current state for the caller's organization |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| flag_key | string | yes | The feature flag key | enable-dark-mode |
| PATCH /api/v1/{tenant_id}/feature-flags/{flag_key} | operation | no | feature-flags-update Enables or disables a client-configurable feature flag for the caller's organization |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| flag_key | string | yes | The feature flag key | enable-dark-mode |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/UpdateFeatureFlagBody.json", "agent_id": "agent_123", "enabled": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/UpdateFeatureFlagBody.json |
| requestBody (application/json).agent_id | string | no | Optional agent ID to target. If provided, enables/disables the flag for this specific agent within the organization. If omitted, targets the entire organization. | agent_123 |
| requestBody (application/json).enabled | boolean | yes | Whether to enable the flag | True |
| GET /api/v1/{tenant_id}/financial-accounts | operation | no | financial-account-list-by-account-number-or-name |  |
| tenant_id | string | yes | The tenant ID | 123 |
| only_assigned | boolean | no | Whether to only return financial accounts assigned to the current user | True |
| page | integer | no | The page number to return | 1 |
| page_size | integer | no | The number of records per page | 10 |
| field | string | no | Field to filter financial accounts by | name |
| search | string | no | Search term to filter financial accounts by account number | My financial account |
| POST /api/v1/{tenant_id}/financial-accounts | operation | no | account-financial-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AccountFinancialCreateInputBody.json", "account_notes": "This account is for special savings.", "account_number": "1234567890", "additional_attributes": {"risk_tolerance": 10, "risk_tolerance_period": "annual", "risk_tolerance_unit": "percent"}, "balance": "10000", "beneficiary_id": "beneficiary123", "cash_balance": "5000", "client_organisation_id": "client_organisation123", "closed_date": "2025-01-01", "currency_code": "USD", "custodian": "Custodian123", "external_id": "fa_123", "name": "Personal Checking", "open_date": "2024-01-01", "primary_owner_id": "client123", "product_id": "product123", "secondary_owner_id": "client456", "status": "active", "tax_status": "taxable"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AccountFinancialCreateInputBody.json |
| requestBody (application/json).account_notes | string | no | (Optional) Additional notes or information related to the account. | This account is for special savings. |
| requestBody (application/json).account_number | string | yes | The unique account number for the account being created. | 1234567890 |
| requestBody (application/json).additional_attributes | object | no | (Optional) Additional attributes about the account, if applicable. | {"risk_tolerance": 10, "risk_tolerance_period": "annual", "risk_tolerance_unit": "percent"} |
| requestBody (application/json).balance | string | no | (Optional) The balance of the account, if applicable. | 10000 |
| requestBody (application/json).beneficiary_id | string | no | (Optional) The ID of the beneficiary for the account, if applicable, referencing a Client ID. | beneficiary123 |
| requestBody (application/json).cash_balance | string | no | (Optional) The cash balance of the account, if applicable. | 5000 |
| requestBody (application/json).client_organisation_id | string | no | (Optional) The ID of the client organisation associated with this account, referencing a ClientOrganisation ID. | client_organisation123 |
| requestBody (application/json).closed_date | string | no | (Optional) The date the account was closed in the format YYYY-MM-DD, if applicable. | 2025-01-01 |
| requestBody (application/json).currency_code | string | yes | The currency code of the account, such as 'USD', 'EUR', etc. | USD |
| requestBody (application/json).custodian | string | no | (Optional) The custodian of the account, if applicable. | Custodian123 |
| requestBody (application/json).external_id | ['string', 'null'] | yes | The unique identifier of the financial account from the external system | fa_123 |
| requestBody (application/json).name | string | yes | The name of the account being created. | Personal Checking |
| requestBody (application/json).open_date | string | yes | The date the account was opened in the format YYYY-MM-DD. | 2024-01-01 |
| requestBody (application/json).primary_owner_id | ['string', 'null'] | yes | The ID of the primary owner of the account, referencing a Client ID. | client123 |
| requestBody (application/json).product_id | string | yes | The ID of the product associated with this account, referencing a FinancialProduct ID. | product123 |
| requestBody (application/json).secondary_owner_id | string | no | (Optional) The ID of the secondary owner of the account, if applicable, referencing a Client ID. | client456 |
| requestBody (application/json).status | string | yes | The current status of the account, such as 'active', 'closed', etc. | active |
| requestBody (application/json).tax_status | string | no | (Optional) The tax status of the account, such as 'taxable', 'non-taxable', etc. | taxable |
| GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id} | operation | no | account-financial-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| financial_account_id | string | yes | The account ID | 456 |
| GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id}/rmds | operation | no | rmd-list-by-financial-account |  |
| tenant_id | string | yes | The tenant ID | 123 |
| financial_account_id | string | yes | The financial account ID to which the RMDs are assigned | account_123 |
| GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id}/sloas | operation | no | sloa-list-by-financial-account |  |
| tenant_id | string | yes | The tenant ID | 123 |
| financial_account_id | string | yes | The account ID | account_123 |
| POST /api/v1/{tenant_id}/financial-products | operation | no | product-financial-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ProductFinancialCreateInputBody.json", "description": "This product is designed for long-term investors.", "eligibility_criteria": "Must be 18+ years old", "model": "Model-X", "model_portfolio": "Balanced Growth Portfolio", "product_code": "INV123", "product_name": "High Yield Investment", "product_type": "investment", "regulatory_compliance": "Complies with SEC regulations"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ProductFinancialCreateInputBody.json |
| requestBody (application/json).description | string | no | (Optional) A brief description of the product. | This product is designed for long-term investors. |
| requestBody (application/json).eligibility_criteria | string | no | (Optional) Criteria that defines eligibility to use this product, if applicable. | Must be 18+ years old |
| requestBody (application/json).model | string | no | (Optional) The model associated with the product, if applicable. | Model-X |
| requestBody (application/json).model_portfolio | string | no | (Optional) A model portfolio associated with this product, if applicable. | Balanced Growth Portfolio |
| requestBody (application/json).product_code | string | yes | A unique code that identifies the product. | INV123 |
| requestBody (application/json).product_name | string | yes | The name of the product. | High Yield Investment |
| requestBody (application/json).product_type | string | yes | The category or type of the product being created. | investment |
| requestBody (application/json).regulatory_compliance | string | no | (Optional) Details on the regulatory compliance of the product, if required. | Complies with SEC regulations |
| GET /api/v1/{tenant_id}/financial-products/{financial_product_id} | operation | no | product-financial-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| financial_product_id | string | yes | The product ID | 456 |
| POST /api/v1/{tenant_id}/gpoc-account-openings/list | operation | no | gpoc-account-openings-list |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/GPOCAccountOpeningsListInputBody.json", "array_field_keys": ["advanced-array", "other-array"], "blueprint_names": ["Account Opening and Funding", "Another Blueprint Name"], "filter": {"left": {"column": "client_organisation_name", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "Example Org"}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "client_organisation_name", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/GPOCAccountOpeningsListInputBody.json |
| requestBody (application/json).array_field_keys | ['array', 'null'] | no | The keys of the array fields to source the account openings from. If not provided, defaults to ["advanced-array"]. | ["advanced-array", "other-array"] |
| requestBody (application/json).array_field_keys[] | string | no | The keys of the array fields to source the account openings from. If not provided, defaults to ["advanced-array"]. | string |
| requestBody (application/json).blueprint_names | ['array', 'null'] | yes | The blueprints containing the tasks to source the account openings from. | ["Account Opening and Funding", "Another Blueprint Name"] |
| requestBody (application/json).blueprint_names[] | string | yes | The blueprints containing the tasks to source the account openings from. | string |
| requestBody (application/json).filter |  | no | The Expression to filter the account openings by. See the Readme for more details on the Expression format. | {"left": {"column": "client_organisation_name", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "Example Org"}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | The pagination information for the account openings | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the account openings by. | [{"sort_column": "client_organisation_name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the account openings by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| POST /api/v1/{tenant_id}/gpoc-docusign/envelopes | operation | no | docusign-envelope-create |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| requestBody (application/json) | object | yes | The body of the request | {"$schema": "https://example.com/schemas/DocuSignEnvelopeCreateBodyDoc.json", "documents": [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}], "email_subject": "Please sign this document", "signers": [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"dateSignedTabs": [{}], "initialHereTabs": [{}], "signHereTabs": [{}]}}], "status": "sent"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DocuSignEnvelopeCreateBodyDoc.json |
| requestBody (application/json).documents | ['array', 'null'] | yes | Documents to include in the envelope | [{"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"}] |
| requestBody (application/json).documents[] | object | yes | Documents to include in the envelope | {"document_base64": "JVBERi0xLjQKJeLjz9MKN...", "document_id": "1", "document_name": "Contract.pdf"} |
| requestBody (application/json).documents[].document_base64 | string | yes | Base64 encoded document | JVBERi0xLjQKJeLjz9MKN... |
| requestBody (application/json).documents[].document_id | string | yes | Document ID | 1 |
| requestBody (application/json).documents[].document_name | string | yes | Document name | Contract.pdf |
| requestBody (application/json).email_subject | string | yes | Email subject for the envelope | Please sign this document |
| requestBody (application/json).signers | ['array', 'null'] | yes | Signers for the envelope | [{"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"dateSignedTabs": [{"documentId": {}, "pageNumber": {}, "xPosition": {}, "yPosition": {}}], "initialHereTabs": [{"documentId": {}, "pageNumber": {}, "xPosition": {}, "yPosition": {}}], "signHereTabs": [{"documentId": {}, "pageNumber": {}, "xPosition": {}, "yPosition": {}}]}}] |
| requestBody (application/json).signers[] | object | yes | Signers for the envelope | {"email": "signer@example.com", "name": "John Doe", "recipient_id": "1", "tabs": {"dateSignedTabs": [{"documentId": "1", "pageNumber": "1", "xPosition": 100, "yPosition": 200}], "initialHereTabs": [{"documentId": "1", "pageNumber": "1", "xPosition": 100, "yPosition": 200}], "signHereTabs": [{"documentId": "1", "pageNumber": "1", "xPosition": 100, "yPosition": 200}]}} |
| requestBody (application/json).signers[].email | string | yes | Signer email | signer@example.com |
| requestBody (application/json).signers[].name | string | yes | Signer name | John Doe |
| requestBody (application/json).signers[].recipient_id | string | yes | Recipient ID | 1 |
| requestBody (application/json).signers[].tabs | object | yes | Signing tabs | {"dateSignedTabs": [{"documentId": "1", "pageNumber": "1", "xPosition": 100, "yPosition": 200}], "initialHereTabs": [{"documentId": "1", "pageNumber": "1", "xPosition": 100, "yPosition": 200}], "signHereTabs": [{"documentId": "1", "pageNumber": "1", "xPosition": 100, "yPosition": 200}]} |
| requestBody (application/json).status | string | yes | Envelope status | sent |
| GET /api/v1/{tenant_id}/gpoc-docusign/envelopes/{envelope_id} | operation | no | docusign-envelope-status |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| envelope_id | string | yes | The envelope ID | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| POST /api/v1/{tenant_id}/gpoc-docusign/token | operation | no | docusign-token-generate |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| POST /api/v1/{tenant_id}/journeys/list | operation | no | journey-run-list |  |
| tenant_id | string | yes | ID of the tenant | t_12345 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunListInputBody.json", "actions_only": true, "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "name", "sort_order": "ASC"}], "source_system_filter": "avantos"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunListInputBody.json |
| requestBody (application/json).actions_only | boolean | no | Whether to only return non-journey action runs. When false, the list includes both actions and journeys. | True |
| requestBody (application/json).filter |  | no | The Expression to filter the opportunities by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).only_assigned | boolean | no | Whether to only return action runs that are for client organisations assigned to the current user | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the action runs | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the opportunities by. | [{"sort_column": "name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the opportunities by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| requestBody (application/json).source_system_filter | string | no | Filter action runs by source system. | avantos |
| POST /api/v1/{tenant_id}/js_execute/{custom_js_function_id} | operation | no | js-execute Executes a server-side javascript function with the provided request data |  |
| tenant_id | string | yes | The tenant ID | 123 |
| custom_js_function_id | string | yes | The custom javascript function ID | cjsf_1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/JsExecuteInputBody.json", "initiation_override": "string", "request": {"key": {}}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/JsExecuteInputBody.json |
| requestBody (application/json).initiation_override | string | no | Optional initiation code override | string |
| requestBody (application/json).request | object | yes | Request data matching the function's request_keys | {"key": {}} |
| GET /api/v1/{tenant_id}/kpis/definitions | operation | no | kpi-definitions-list List available KPI definitions for a tenant. Returns metadata including name, unit, allowed dimensions, and status. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| active_only | boolean | no | If true, return only active KPI definitions | True |
| POST /api/v1/{tenant_id}/kpis/report | operation | no | kpi-report Generate an aggregated KPI report with daily/weekly/monthly buckets grouped by client organisation. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/KPIReportInputBody.json", "client_organisation_id": "co_123", "dimensions": {"key": "string"}, "granularity": "weekly", "kpi_id": "kpi_123", "kpi_name": "actions.total_count", "only_assigned": false, "period_end": "2026-02-01T00:00:00Z", "period_start": "2026-01-01T00:00:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/KPIReportInputBody.json |
| requestBody (application/json).client_organisation_id | string | no | Filter to a specific client organisation | co_123 |
| requestBody (application/json).dimensions | object | no | Filter by dimensions (JSONB containment match) | {"key": "string"} |
| requestBody (application/json).granularity | string | yes | Time bucket granularity | weekly |
| requestBody (application/json).kpi_id | string | no | KPI definition ID (exactly one of kpi_name or kpi_id required) | kpi_123 |
| requestBody (application/json).kpi_name | string | no | KPI name (exactly one of kpi_name or kpi_id required) | actions.total_count |
| requestBody (application/json).only_assigned | boolean | no | If true, restrict to client organisations directly assigned to the current user | False |
| requestBody (application/json).period_end | string | yes | Report period end (exclusive) | 2026-02-01T00:00:00Z |
| requestBody (application/json).period_start | string | yes | Report period start (inclusive) | 2026-01-01T00:00:00Z |
| POST /api/v1/{tenant_id}/kpis/values/search | operation | no | kpi-values-search Search KPI values with pagination and filter criteria. Results are ABAC-filtered by client organisation access. Use kpi_names to fetch multiple KPIs in a single request. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/KPIValueSearchInputBody.json", "client_organisation_id": "co_123", "dimensions": {"key": "string"}, "kpi_id": "kpi_123", "kpi_name": "actions.total_count", "kpi_names": ["actions.total_count", "actions.open_count"], "only_assigned": false, "pagination_params": {"page": 1, "page_size": 10}, "period_end": "2026-02-28T00:00:00Z", "period_granularity": "day", "period_start": "2026-02-01T00:00:00Z", "status_label": "overdue"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/KPIValueSearchInputBody.json |
| requestBody (application/json).client_organisation_id | string | no | Filter by client organisation ID (exact match) | co_123 |
| requestBody (application/json).dimensions | object | no | Filter by dimensions (JSONB containment match) | {"key": "string"} |
| requestBody (application/json).kpi_id | string | no | Filter by KPI definition ID (exact match) | kpi_123 |
| requestBody (application/json).kpi_name | string | no | Filter by KPI name (exact match, use kpi_names for multiple) | actions.total_count |
| requestBody (application/json).kpi_names | ['array', 'null'] | no | Filter by multiple KPI names (returns values matching any name) | ["actions.total_count", "actions.open_count"] |
| requestBody (application/json).kpi_names[] | string | no | Filter by multiple KPI names (returns values matching any name) | string |
| requestBody (application/json).only_assigned | boolean | no | If true, return values only for client organisations directly assigned to the current user | False |
| requestBody (application/json).pagination_params | object | no | Pagination parameters | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).period_end | string | no | Filter by period_end <= value (inclusive) | 2026-02-28T00:00:00Z |
| requestBody (application/json).period_granularity | string | no | Filter by granularity | day |
| requestBody (application/json).period_start | string | no | Filter by period_start >= value (inclusive) | 2026-02-01T00:00:00Z |
| requestBody (application/json).status_label | string | no | Filter by status label (exact match) | overdue |
| POST /api/v1/{tenant_id}/list-sync-file | operation | no | list-sync-files |  |
| tenant_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SyncFileListInputBody.json", "filter": {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"}, "pagination": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "start_time", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SyncFileListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the relationships by. See the Readme for more details on the Expression format. | {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"} |
| requestBody (application/json).pagination | object | no | The pagination information for the sync files | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination.page | integer | yes |  | 1 |
| requestBody (application/json).pagination.page_size | integer | yes |  | 1 |
| requestBody (application/json).sort_keys | array[SortKey] | no | The keys to sort the sync files by | [{"sort_column": "start_time", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the sync files by | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| POST /api/v1/{tenant_id}/list-sync-file-error-logs | operation | no | list-sync-file-error-logs |  |
| tenant_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SyncFileErrorLogListInputBody.json", "filter": {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"}, "pagination": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "created_at", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SyncFileErrorLogListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the relationships by. See the Readme for more details on the Expression format. | {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"} |
| requestBody (application/json).pagination | object | no | The pagination information for the error logs | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination.page | integer | yes |  | 1 |
| requestBody (application/json).pagination.page_size | integer | yes |  | 1 |
| requestBody (application/json).sort_keys | array[SortKey] | no | The keys to sort the error logs by | [{"sort_column": "created_at", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the error logs by | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| POST /api/v1/{tenant_id}/lookups | operation | no | lookup-create |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateLookupBody.json", "category": "business_group_coverage", "description": "Northeast United States", "external_id": "ext_northeast", "extra_properties": {"region_code": "NE"}, "is_active": true, "value": "northeast"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateLookupBody.json |
| requestBody (application/json).category | string | yes | The category of the lookup | business_group_coverage |
| requestBody (application/json).description | string | no | A description of the lookup | Northeast United States |
| requestBody (application/json).external_id | string | no | The external system identifier | ext_northeast |
| requestBody (application/json).extra_properties | object | no | Additional properties for the lookup as a map | {"region_code": "NE"} |
| requestBody (application/json).is_active | boolean | yes | Whether the lookup is active | True |
| requestBody (application/json).value | string | yes | The value of the lookup | northeast |
| GET /api/v1/{tenant_id}/lookups/{category} | operation | no | lookup-list-by-category |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| category | string | yes | The lookup category | business_group_coverage |
| DELETE /api/v1/{tenant_id}/lookups/{lookup_id} | operation | no | lookup-delete |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| lookup_id | string | yes | The lookup ID | lkp_123 |
| PATCH /api/v1/{tenant_id}/lookups/{lookup_id} | operation | no | lookup-update |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| lookup_id | string | yes | The lookup ID | lkp_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/UpdateLookupBody.json", "category": "business_group_coverage", "description": "Northeast United States", "external_id": "ext_northeast", "extra_properties": {"region_code": "NE"}, "is_active": true, "value": "northeast"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/UpdateLookupBody.json |
| requestBody (application/json).category | string | no | The category of the lookup | business_group_coverage |
| requestBody (application/json).description | string | no | A description of the lookup | Northeast United States |
| requestBody (application/json).external_id | string | no | The external system identifier | ext_northeast |
| requestBody (application/json).extra_properties | object | no | Additional properties for the lookup as a map | {"region_code": "NE"} |
| requestBody (application/json).is_active | boolean | no | Whether the lookup is active | True |
| requestBody (application/json).value | string | no | The value of the lookup | northeast |
| GET /api/v1/{tenant_id}/manager-teams | operation | no | manager-team-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| include_inactive | boolean | no | Include inactive managers (default: false) | False |
| page | integer | no | Page number for pagination (default: 1) | 1 |
| page_size | integer | no | Number of items per page (default: 10) | 10 |
| GET /api/v1/{tenant_id}/manager-teams/{manager_team_id} | operation | no | manager-team-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| manager_team_id | string | yes | The team manager's agent ID | ag_123456 |
| include_inactive | boolean | no | Include inactive team members (default: false) | False |
| page | integer | no | Page number for pagination (default: 1) | 1 |
| page_size | integer | no | Number of items per page (default: 10) | 10 |
| GET /api/v1/{tenant_id}/meetings | operation | no | meeting-list-all Retrieves all meetings for the specified tenant in a single unpaginated response. Only supports basic start_time_after/start_time_before query param filters. Use for simple lookups or backend service-to-service calls where the full list is needed. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| start_time_after | string | no | Optional filter for meetings starting after this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| start_time_before | string | no | Optional filter for meetings starting before this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| POST /api/v1/{tenant_id}/meetings | operation | no | meeting-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingInput.json", "ai_transcript_id": "string", "client_organisation_id": "string", "description": "string", "end_time": "2026-01-15T10:30:00Z", "external_id": "string", "extra_properties": {"key": "string"}, "initiating_agent_id": "string", "location": "string", "meeting_link": "string", "meeting_type": "string", "primary_client_id": "string", "record_type": "string", "start_time": "2026-01-15T10:30:00Z", "status": "string", "subject": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingInput.json |
| requestBody (application/json).ai_transcript_id | ['string', 'null'] | yes |  | string |
| requestBody (application/json).client_organisation_id | string | yes |  | string |
| requestBody (application/json).description | ['string', 'null'] | yes |  | string |
| requestBody (application/json).end_time | ['string', 'null'] | yes |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).external_id | ['string', 'null'] | yes |  | string |
| requestBody (application/json).extra_properties | object | yes |  | {"key": "string"} |
| requestBody (application/json).initiating_agent_id | string | yes |  | string |
| requestBody (application/json).location | ['string', 'null'] | yes |  | string |
| requestBody (application/json).meeting_link | ['string', 'null'] | yes |  | string |
| requestBody (application/json).meeting_type | string | yes |  | string |
| requestBody (application/json).primary_client_id | ['string', 'null'] | yes |  | string |
| requestBody (application/json).record_type | ['string', 'null'] | yes |  | string |
| requestBody (application/json).start_time | ['string', 'null'] | yes |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).status | string | yes |  | string |
| requestBody (application/json).subject | ['string', 'null'] | yes |  | string |
| POST /api/v1/{tenant_id}/meetings/email-drafts | operation | no | meeting-list-by-email-drafts Retrieves a paginated list of meetings associated with the specified tenant ID, filtered by email draft sent status. Supports dynamic filtering, pagination, and sorting. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| start_time_after | string | no | Optional filter for meetings starting after this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| start_time_before | string | no | Optional filter for meetings starting before this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| sent_flag | boolean | no | Whether the email draft has been sent | True |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingListByEmailDraftsInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "scheduled"}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "start_time", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingListByEmailDraftsInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the meetings by | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "scheduled"}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | The pagination information for the meetings | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the meetings by | [{"sort_column": "start_time", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the meetings by | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| GET /api/v1/{tenant_id}/meetings/id-by-external-id | operation | no | meeting-id-by-external-id |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_external_id | string | no | The external ID of the meeting | ext_meeting_123 |
| POST /api/v1/{tenant_id}/meetings/list | operation | no | meeting-list Retrieves a paginated list of meetings for the specified tenant, scoped to the authenticated agent. Supports expression-based filtering, pagination, and sorting. Use this for the primary meetings list UI with advanced filtering needs. Requires agent authentication. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| start_time_after | string | no | Optional filter for meetings starting after this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| start_time_before | string | no | Optional filter for meetings starting before this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingListInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "scheduled"}, "type": "binary"}, "only_my_meetings": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "start_time", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the meetings by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "scheduled"}, "type": "binary"} |
| requestBody (application/json).only_my_meetings | boolean | no | When true, only returns meetings the authenticated agent participated in (as initiator or attendee). When false or omitted, also includes meetings for ABAC-accessible client organisations. | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the meetings | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the meetings by. | [{"sort_column": "start_time", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the meetings by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| POST /api/v1/{tenant_id}/meetings/summaries | operation | no | meeting-list-by-summaries Retrieves a paginated list of meetings associated with the specified tenant ID, filtered by summaries info. Supports dynamic filtering, pagination, and sorting. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| start_time_after | string | no | Optional filter for meetings starting after this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| start_time_before | string | no | Optional filter for meetings starting before this time (RFC3339 format) | 2026-01-15T10:30:00Z |
| is_attested | boolean | no | Whether the meeting has an attested summary | True |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingListBySummariesInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "scheduled"}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "start_time", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingListBySummariesInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the meetings by | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "scheduled"}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | The pagination information for the meetings | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the meetings by | [{"sort_column": "start_time", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the meetings by | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| DELETE /api/v1/{tenant_id}/meetings/{id} | operation | no | meeting-delete |  |
| id | string | yes | The meeting ID | m_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| GET /api/v1/{tenant_id}/meetings/{id} | operation | no | meeting-get |  |
| id | string | yes | The meeting ID | m_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| PUT /api/v1/{tenant_id}/meetings/{id} | operation | no | meeting-update |  |
| id | string | yes | The meeting ID | m_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingInput.json", "ai_transcript_id": "string", "client_organisation_id": "string", "description": "string", "end_time": "2026-01-15T10:30:00Z", "external_id": "string", "extra_properties": {"key": "string"}, "initiating_agent_id": "string", "location": "string", "meeting_link": "string", "meeting_type": "string", "primary_client_id": "string", "record_type": "string", "start_time": "2026-01-15T10:30:00Z", "status": "string", "subject": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingInput.json |
| requestBody (application/json).ai_transcript_id | ['string', 'null'] | yes |  | string |
| requestBody (application/json).client_organisation_id | string | yes |  | string |
| requestBody (application/json).description | ['string', 'null'] | yes |  | string |
| requestBody (application/json).end_time | ['string', 'null'] | yes |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).external_id | ['string', 'null'] | yes |  | string |
| requestBody (application/json).extra_properties | object | yes |  | {"key": "string"} |
| requestBody (application/json).initiating_agent_id | string | yes |  | string |
| requestBody (application/json).location | ['string', 'null'] | yes |  | string |
| requestBody (application/json).meeting_link | ['string', 'null'] | yes |  | string |
| requestBody (application/json).meeting_type | string | yes |  | string |
| requestBody (application/json).primary_client_id | ['string', 'null'] | yes |  | string |
| requestBody (application/json).record_type | ['string', 'null'] | yes |  | string |
| requestBody (application/json).start_time | ['string', 'null'] | yes |  | 2026-01-15T10:30:00Z |
| requestBody (application/json).status | string | yes |  | string |
| requestBody (application/json).subject | ['string', 'null'] | yes |  | string |
| PATCH /api/v1/{tenant_id}/meetings/{id}/actions-skipped | operation | no | meeting-actions-skipped-update |  |
| id | string | yes | The meeting ID | m_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingActionsSkippedUpdateInputBody.json", "actions_skipped": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingActionsSkippedUpdateInputBody.json |
| requestBody (application/json).actions_skipped | boolean | yes | Whether actions have been skipped for this meeting | True |
| PATCH /api/v1/{tenant_id}/meetings/{id}/transcript-id | operation | no | meeting-transcript-id-update |  |
| id | string | yes | The meeting ID | m_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingTranscriptIDUpdateInputBody.json", "ai_transcript_id": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingTranscriptIDUpdateInputBody.json |
| requestBody (application/json).ai_transcript_id | ['string', 'null'] | yes |  | string |
| GET /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs | operation | no | meeting-action-run-relationship-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| POST /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs | operation | no | meeting-action-run-relationship-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingActionRunRelationshipCreateInputBody.json", "action_run_id": "ar_123"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingActionRunRelationshipCreateInputBody.json |
| requestBody (application/json).action_run_id | string | yes | The action run ID to link to the meeting | ar_123 |
| DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs/{action_run_id} | operation | no | meeting-action-run-relationship-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| action_run_id | string | yes | The action run ID | ar_123 |
| POST /api/v1/{tenant_id}/meetings/{meeting_id}/attendees | operation | no | meeting-attendee-create |  |
| meeting_id | string | yes | The meeting ID | m_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingAttendeeCreateInputBody.json", "attendee_id": "string", "attendee_type": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingAttendeeCreateInputBody.json |
| requestBody (application/json).attendee_id | string | yes |  | string |
| requestBody (application/json).attendee_type | string | yes |  | string |
| DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/attendees/{attendee_id} | operation | no | meeting-attendee-delete |  |
| meeting_id | string | yes | The meeting ID | m_123 |
| tenant_id | string | yes | The tenant ID | 123 |
| attendee_id | string | yes | The attendee ID | a_123 |
| DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft | operation | no | meeting-email-draft-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| GET /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft | operation | no | meeting-email-draft-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| POST /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft | operation | no | meeting-email-draft-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingEmailDraftInput.json", "body_content": "Thank you for attending...", "cc_addresses": ["manager@example.com"], "is_ai_enhanced": false, "is_skipped": false, "sent_flag": false, "subject": "Meeting Follow-up", "to_addresses": ["john@example.com", "jane@example.com"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingEmailDraftInput.json |
| requestBody (application/json).body_content | ['string', 'null'] | yes | Email body content | Thank you for attending... |
| requestBody (application/json).cc_addresses | ['array', 'null'] | yes | List of CC email addresses | ["manager@example.com"] |
| requestBody (application/json).cc_addresses[] | string | yes | List of CC email addresses | string |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the email draft has been enhanced by AI | False |
| requestBody (application/json).is_skipped | boolean | yes | Whether the email draft was skipped | False |
| requestBody (application/json).sent_flag | boolean | yes | Whether the email has been sent | False |
| requestBody (application/json).subject | string | yes | Email subject line | Meeting Follow-up |
| requestBody (application/json).to_addresses | ['array', 'null'] | yes | List of recipient email addresses | ["john@example.com", "jane@example.com"] |
| requestBody (application/json).to_addresses[] | string | yes | List of recipient email addresses | string |
| PUT /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft | operation | no | meeting-email-draft-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingEmailDraftInput.json", "body_content": "Thank you for attending...", "cc_addresses": ["manager@example.com"], "is_ai_enhanced": false, "is_skipped": false, "sent_flag": false, "subject": "Meeting Follow-up", "to_addresses": ["john@example.com", "jane@example.com"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingEmailDraftInput.json |
| requestBody (application/json).body_content | ['string', 'null'] | yes | Email body content | Thank you for attending... |
| requestBody (application/json).cc_addresses | ['array', 'null'] | yes | List of CC email addresses | ["manager@example.com"] |
| requestBody (application/json).cc_addresses[] | string | yes | List of CC email addresses | string |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the email draft has been enhanced by AI | False |
| requestBody (application/json).is_skipped | boolean | yes | Whether the email draft was skipped | False |
| requestBody (application/json).sent_flag | boolean | yes | Whether the email has been sent | False |
| requestBody (application/json).subject | string | yes | Email subject line | Meeting Follow-up |
| requestBody (application/json).to_addresses | ['array', 'null'] | yes | List of recipient email addresses | ["john@example.com", "jane@example.com"] |
| requestBody (application/json).to_addresses[] | string | yes | List of recipient email addresses | string |
| PUT /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft/upsert | operation | no | meeting-email-draft-upsert Creates or updates a meeting email draft. Returns whether it was created or updated. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingEmailDraftInput.json", "body_content": "Thank you for attending...", "cc_addresses": ["manager@example.com"], "is_ai_enhanced": false, "is_skipped": false, "sent_flag": false, "subject": "Meeting Follow-up", "to_addresses": ["john@example.com", "jane@example.com"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingEmailDraftInput.json |
| requestBody (application/json).body_content | ['string', 'null'] | yes | Email body content | Thank you for attending... |
| requestBody (application/json).cc_addresses | ['array', 'null'] | yes | List of CC email addresses | ["manager@example.com"] |
| requestBody (application/json).cc_addresses[] | string | yes | List of CC email addresses | string |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the email draft has been enhanced by AI | False |
| requestBody (application/json).is_skipped | boolean | yes | Whether the email draft was skipped | False |
| requestBody (application/json).sent_flag | boolean | yes | Whether the email has been sent | False |
| requestBody (application/json).subject | string | yes | Email subject line | Meeting Follow-up |
| requestBody (application/json).to_addresses | ['array', 'null'] | yes | List of recipient email addresses | ["john@example.com", "jane@example.com"] |
| requestBody (application/json).to_addresses[] | string | yes | List of recipient email addresses | string |
| DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/prep | operation | no | meeting-prep-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| GET /api/v1/{tenant_id}/meetings/{meeting_id}/prep | operation | no | meeting-prep-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| POST /api/v1/{tenant_id}/meetings/{meeting_id}/prep | operation | no | meeting-prep-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingPrepInput.json", "body_content": "Meeting prep content", "is_ai_enhanced": false} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingPrepInput.json |
| requestBody (application/json).body_content | ['string', 'null'] | yes | The body content of the meeting prep | Meeting prep content |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the meeting prep has been enhanced by AI | False |
| PUT /api/v1/{tenant_id}/meetings/{meeting_id}/prep | operation | no | meeting-prep-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingPrepInput.json", "body_content": "Meeting prep content", "is_ai_enhanced": false} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingPrepInput.json |
| requestBody (application/json).body_content | ['string', 'null'] | yes | The body content of the meeting prep | Meeting prep content |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the meeting prep has been enhanced by AI | False |
| PUT /api/v1/{tenant_id}/meetings/{meeting_id}/prep/upsert | operation | no | meeting-prep-upsert Creates or updates a meeting prep. Returns whether it was created or updated. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingPrepInput.json", "body_content": "Meeting prep content", "is_ai_enhanced": false} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingPrepInput.json |
| requestBody (application/json).body_content | ['string', 'null'] | yes | The body content of the meeting prep | Meeting prep content |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the meeting prep has been enhanced by AI | False |
| DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/summary | operation | no | meeting-summary-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| GET /api/v1/{tenant_id}/meetings/{meeting_id}/summary | operation | no | meeting-summary-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary | operation | no | meeting-summary-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingSummaryInput.json", "is_ai_enhanced": false, "summary_content": "Meeting summary content"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingSummaryInput.json |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the summary was enhanced by AI | False |
| requestBody (application/json).summary_content | ['string', 'null'] | yes | The summary content of the meeting | Meeting summary content |
| PUT /api/v1/{tenant_id}/meetings/{meeting_id}/summary | operation | no | meeting-summary-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingSummaryInput.json", "is_ai_enhanced": false, "summary_content": "Meeting summary content"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingSummaryInput.json |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the summary was enhanced by AI | False |
| requestBody (application/json).summary_content | ['string', 'null'] | yes | The summary content of the meeting | Meeting summary content |
| POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary/attest | operation | no | meeting-summary-attest Marks a meeting summary as attested by the authenticated agent. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary/unattest | operation | no | meeting-summary-unattest Removes attestation from a meeting summary. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| PUT /api/v1/{tenant_id}/meetings/{meeting_id}/summary/upsert | operation | no | meeting-summary-upsert Creates or updates a meeting summary. Returns whether it was created or updated. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| meeting_id | string | yes | The meeting ID | mt_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/MeetingSummaryInput.json", "is_ai_enhanced": false, "summary_content": "Meeting summary content"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/MeetingSummaryInput.json |
| requestBody (application/json).is_ai_enhanced | boolean | no | Whether the summary was enhanced by AI | False |
| requestBody (application/json).summary_content | ['string', 'null'] | yes | The summary content of the meeting | Meeting summary content |
| POST /api/v1/{tenant_id}/notifications/{agent_id} | operation | no | notification-list |  |
| tenant_id | string | yes | Tenant ID | string |
| agent_id | string | yes | Agent ID owning the notifications | string |
| requestBody (application/json) | object | yes | Filters, order and pagination information for the notifications | {"$schema": "https://example.com/schemas/NotificationListRequestBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"cast_type": "numeric", "collation": "default", "sort_column": "person_first_name", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/NotificationListRequestBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the notifications by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | The pagination information for the notifications | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort criteria with column and direction | [{"cast_type": "numeric", "collation": "default", "sort_column": "person_first_name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort criteria with column and direction | {"cast_type": "numeric", "collation": "default", "sort_column": "person_first_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type casting for correct sorting of JSONB numeric/date fields. Use 'numeric' for currency/decimals, 'integer' for whole numbers, 'date' or 'timestamp' for dates. Essential for sorting Salesforce custom fields stored in extra_properties. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Supports JSONB paths for custom fields. | person_first_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending) or DESC (descending). | ASC |
| POST /api/v1/{tenant_id}/notifications/{agent_id}/create | operation | no | notification-create |  |
| tenant_id | string | yes | Tenant ID | string |
| agent_id | string | yes | Agent ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/NotificationCreateRequestBody.json", "agent_id": "string", "category": "string", "content": "string", "created_at": "2026-01-15T10:30:00Z", "environment": "string", "id": "string", "is_escalated": true, "is_read": true, "name": "string", "updated_at": "2026-01-15T10:30:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/NotificationCreateRequestBody.json |
| requestBody (application/json).agent_id | string | yes | Avantos Agent ID from the user recipient of the notification | string |
| requestBody (application/json).category | string | yes | Category for the notification | string |
| requestBody (application/json).content | string | yes | Content for the notification | string |
| requestBody (application/json).created_at | string | yes | Created at for the notification | 2026-01-15T10:30:00Z |
| requestBody (application/json).environment | string | no | The environment where the notification was created | string |
| requestBody (application/json).id | string | no | Optional external ID for the notification. This will be the external_id once created | string |
| requestBody (application/json).is_escalated | ['boolean', 'null'] | yes | Whether the notification is escalated | True |
| requestBody (application/json).is_read | ['boolean', 'null'] | yes | Whether the notification is read | True |
| requestBody (application/json).name | string | yes | Name for the notification | string |
| requestBody (application/json).updated_at | string | yes | Updated at for the notification | 2026-01-15T10:30:00Z |
| DELETE /api/v1/{tenant_id}/notifications/{notification_id} | operation | no | notification-delete |  |
| tenant_id | string | yes | Tenant ID | string |
| notification_id | string | yes | Notification ID | string |
| GET /api/v1/{tenant_id}/notifications/{notification_id} | operation | no | notification-get |  |
| tenant_id | string | yes | Tenant ID | string |
| notification_id | string | yes | Notification ID | string |
| PATCH /api/v1/{tenant_id}/notifications/{notification_id} | operation | no | notification-update |  |
| tenant_id | string | yes | Tenant ID | string |
| notification_id | string | yes | Notification ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/NotificationUpdateRequestBody.json", "category": "string", "content": "string", "environment": "string", "is_escalated": true, "is_read": true, "name": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/NotificationUpdateRequestBody.json |
| requestBody (application/json).category | string | no | Category for the notification | string |
| requestBody (application/json).content | string | no | Content for the notification | string |
| requestBody (application/json).environment | string | no | The environment where the notification was created | string |
| requestBody (application/json).is_escalated | boolean | no | Whether the notification is escalated | True |
| requestBody (application/json).is_read | boolean | no | Whether the notification is read | True |
| requestBody (application/json).name | string | no | Name for the notification | string |
| PATCH /api/v1/{tenant_id}/notifications/{notification_id}/read | operation | no | notification-mark-as-read |  |
| tenant_id | string | yes | Tenant ID | string |
| notification_id | string | yes | Notification ID | string |
| PUT /api/v1/{tenant_id}/opportunities/{opportunity_id} | operation | no | opportunity-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| opportunity_id | string | yes | The unique identifier of the opportunity to update | coo_123abc |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/OpportunityUpdateInputBody.json", "category": "Expand", "name": "Updated Opportunity Name", "next_step": "Schedule follow-up meeting", "next_step_date": "2024-12-31T00:00:00Z", "notes": "Additional notes", "status": "Prioritized", "sub_category": "Manage Balance Sheet"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/OpportunityUpdateInputBody.json |
| requestBody (application/json).category | string | no | The updated category of the opportunity | Expand |
| requestBody (application/json).name | string | no | The updated name of the opportunity | Updated Opportunity Name |
| requestBody (application/json).next_step | string | no | The updated next action item for the opportunity | Schedule follow-up meeting |
| requestBody (application/json).next_step_date | string | no | The updated date of the next step | 2024-12-31T00:00:00Z |
| requestBody (application/json).notes | string | no | Notes for the opportunity | Additional notes |
| requestBody (application/json).status | string | no | The updated status of the opportunity | Prioritized |
| requestBody (application/json).sub_category | string | no | The updated sub-category of the opportunity | Manage Balance Sheet |
| DELETE /api/v1/{tenant_id}/pages/{page_id}/config | operation | no | tenant-config-delete Deletes the configuration settings for a tenant |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks |
| GET /api/v1/{tenant_id}/pages/{page_id}/config | operation | no | tenant-config-get Retrieves the configuration settings for a tenant |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks |
| POST /api/v1/{tenant_id}/pages/{page_id}/config | operation | no | tenant-config-create Creates configuration settings for a tenant |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TenantConfigCreateBody.json", "defaultPinnedViewIds": ["string"], "defaultViewId": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TenantConfigCreateBody.json |
| requestBody (application/json).defaultPinnedViewIds | array[string] | no |  | ["string"] |
| requestBody (application/json).defaultPinnedViewIds[] | string | no |  | string |
| requestBody (application/json).defaultViewId | string | no |  | string |
| PUT /api/v1/{tenant_id}/pages/{page_id}/config | operation | no | tenant-config-update Updates the configuration settings for a tenant |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TenantConfigUpdateBody.json", "defaultPinnedViewIds": ["string"], "defaultViewId": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TenantConfigUpdateBody.json |
| requestBody (application/json).defaultPinnedViewIds | array[string] | no |  | ["string"] |
| requestBody (application/json).defaultPinnedViewIds[] | string | no |  | string |
| requestBody (application/json).defaultViewId | string | no |  | string |
| GET /api/v1/{tenant_id}/pages/{page_id}/views | operation | no | custom-views-list Lists all views for a specific page |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| POST /api/v1/{tenant_id}/pages/{page_id}/views | operation | no | custom-views-create Creates a new view for a specific page |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CustomViewsCreateInputBody.json", "column_order": "string", "columns_config": "string", "description": "string", "filters": "string", "name": "string", "only_assigned": true, "promoted": true, "role_names": ["string"], "scope_type": "string", "sorting": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustomViewsCreateInputBody.json |
| requestBody (application/json).column_order | string | yes | The column order of the view (JSON array) | string |
| requestBody (application/json).columns_config | string | yes | The columns config of the view (JSON array) | string |
| requestBody (application/json).description | string | yes | The description of the view | string |
| requestBody (application/json).filters | string | yes | The filters of the view (JSON object) | string |
| requestBody (application/json).name | string | yes | The name of the view | string |
| requestBody (application/json).only_assigned | boolean | yes | Whether the view shows relationships only assigned to the user | True |
| requestBody (application/json).promoted | boolean | no | Whether the view is promoted in the UI | True |
| requestBody (application/json).role_names | ['array', 'null'] | no | Role names for role-scoped views | ["string"] |
| requestBody (application/json).role_names[] | string | no | Role names for role-scoped views | string |
| requestBody (application/json).scope_type | string | yes | The scope type of the view. (global, role, personal) | string |
| requestBody (application/json).sorting | string | yes | The sorting of the view (JSON array) | string |
| GET /api/v1/{tenant_id}/pages/{page_id}/views/default | operation | no | custom-views-get-default Gets the default view for the current user and page. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| GET /api/v1/{tenant_id}/pages/{page_id}/views/pinned | operation | no | custom-views-get-pinned Gets the pinned views for the current user and page. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| PUT /api/v1/{tenant_id}/pages/{page_id}/views/pinned | operation | no | custom-views-set-pinned Sets the pinned views for the current user and page. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CustomViewsSetPinnedInputBody.json", "view_ids": ["string"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustomViewsSetPinnedInputBody.json |
| requestBody (application/json).view_ids | ['array', 'null'] | yes | Array of view IDs to pin | ["string"] |
| requestBody (application/json).view_ids[] | string | yes | Array of view IDs to pin | string |
| PUT /api/v1/{tenant_id}/pages/{page_id}/views/set-default | operation | no | custom-views-set-default Sets a view as the default for the current user and page, or removes the current default view if view_id is omitted. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| view_id | string | no | The view ID. Omit to remove the current default view. | view-1 |
| DELETE /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} | operation | no | custom-views-delete Deletes an existing view |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| view_id | string | yes | The view ID | view-1 |
| GET /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} | operation | no | custom-views-get Retrieves a specific view |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| view_id | string | yes | The view ID | view-1 |
| PUT /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} | operation | no | custom-views-update Updates an existing view |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page_id | string | yes | The page ID | tasks_page |
| view_id | string | yes | The view ID | view-1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CustomViewsUpdateInputBody.json", "column_order": "string", "columns_config": "string", "description": "string", "filters": "string", "name": "string", "only_assigned": true, "promoted": true, "role_names": ["string"], "scope_type": "string", "sorting": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustomViewsUpdateInputBody.json |
| requestBody (application/json).column_order | string | yes | The column order of the view (JSON array) | string |
| requestBody (application/json).columns_config | string | yes | The columns config of the view (JSON array) | string |
| requestBody (application/json).description | string | yes | The description of the view | string |
| requestBody (application/json).filters | string | yes | The filters of the view (JSON object) | string |
| requestBody (application/json).name | string | yes | The name of the view | string |
| requestBody (application/json).only_assigned | boolean | yes | Whether the view shows relationships only assigned to the user | True |
| requestBody (application/json).promoted | boolean | no | Whether the view is promoted in the UI | True |
| requestBody (application/json).role_names | ['array', 'null'] | no | Role names for role-scoped views | ["string"] |
| requestBody (application/json).role_names[] | string | no | Role names for role-scoped views | string |
| requestBody (application/json).scope_type | string | yes | The scope type of the view. (global, role, personal) | string |
| requestBody (application/json).sorting | string | yes | The sorting of the view (JSON array) | string |
| GET /api/v1/{tenant_id}/pages/{page}/available-widgets | operation | no | page-widget-availability-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page | string | yes | The page name | dashboard |
| POST /api/v1/{tenant_id}/pages/{page}/available-widgets | operation | no | page-widget-availability-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page | string | yes | The page name | dashboard |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PageWidgetAvailabilityCreateBody.json", "widgetDefinitionId": "wdef_123"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PageWidgetAvailabilityCreateBody.json |
| requestBody (application/json).widgetDefinitionId | string | yes | Widget definition ID | wdef_123 |
| DELETE /api/v1/{tenant_id}/pages/{page}/available-widgets/{availability_id} | operation | no | page-widget-availability-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page | string | yes | The page name | dashboard |
| availability_id | string | yes | The page widget availability ID | pwa_123 |
| GET /api/v1/{tenant_id}/pages/{page}/available-widgets/{availability_id} | operation | no | page-widget-availability-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| page | string | yes | The page name | dashboard |
| availability_id | string | yes | The page widget availability ID | pwa_123 |
| GET /api/v1/{tenant_id}/pages/{page}/default-widgets | operation | no | page-default-widget-list |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| page | string | yes | The page name | dashboard |
| GET /api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_definition_id} | operation | no | page-default-widget-get |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| page | string | yes | The page name | dashboard |
| widget_definition_id | string | yes | The widget definition ID | wdef_123 |
| PATCH /api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_id} | operation | no | page-default-widget-update |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| page | string | yes | The page name | dashboard |
| widget_id | string | yes | The widget definition ID | wdef_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PageDefaultWidgetUpdateBody.json", "config": {"key": {}}, "height": 2, "isVisible": true, "width": 2, "x": 0, "y": 0} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PageDefaultWidgetUpdateBody.json |
| requestBody (application/json).config | object | no | Default widget configuration | {"key": {}} |
| requestBody (application/json).height | integer | no | Height in grid units | 2 |
| requestBody (application/json).isVisible | boolean | no | Whether widget is visible by default | True |
| requestBody (application/json).width | integer | no | Width in grid units | 2 |
| requestBody (application/json).x | integer | no | X position in grid | 0 |
| requestBody (application/json).y | integer | no | Y position in grid | 0 |
| POST /api/v1/{tenant_id}/pdfs | operation | no | pdf-upload |  |
| tenant_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PDFUploadInputBody.json", "description": "string", "file_data": "string", "file_name": "string", "name": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PDFUploadInputBody.json |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).file_data | string | yes | Base64 encoded PDF file data | string |
| requestBody (application/json).file_name | string | yes |  | string |
| requestBody (application/json).name | string | yes |  | string |
| POST /api/v1/{tenant_id}/pdfs/list | operation | no | pdf-list |  |
| tenant_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PDFListInputBody.json", "pagination_params": {"page": 1, "page_size": 10}, "search": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PDFListInputBody.json |
| requestBody (application/json).pagination_params | object | no |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).search | string | no |  | string |
| DELETE /api/v1/{tenant_id}/pdfs/{pdf_id} | operation | no | pdf-delete |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| GET /api/v1/{tenant_id}/pdfs/{pdf_id} | operation | no | pdf-get |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| PUT /api/v1/{tenant_id}/pdfs/{pdf_id} | operation | no | pdf-update |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PDFUpdateInputBody.json", "description": "string", "name": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PDFUpdateInputBody.json |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).name | string | yes |  | string |
| GET /api/v1/{tenant_id}/pdfs/{pdf_id}/file | operation | no | pdf-get-file |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| POST /api/v1/{tenant_id}/pdfs/{pdf_id}/fill | operation | no | pdf-fill |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PDFFillInputBody.json", "data": {"key": "string"}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PDFFillInputBody.json |
| requestBody (application/json).data | object | yes | Data to fill into the PDF fields. Keys are PDF field names, values are the strings to fill. | {"key": "string"} |
| GET /api/v1/{tenant_id}/pdfs/{pdf_id}/fill-mapping | operation | no | pdf-get-fill-mapping |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| GET /api/v1/{tenant_id}/pdfs/{pdf_id}/preview | operation | no | pdf-preview |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| GET /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields | operation | no | pdf-signature-field-list |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| POST /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields | operation | no | pdf-signature-field-create |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PDFSignatureFieldCreateInputBody.json", "height": 1.0, "label": "string", "metadata": {"key": {}}, "page_number": 1, "role": "string", "signature_kind": "signature", "width": 1.0, "x": 1.0, "y": 1.0} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PDFSignatureFieldCreateInputBody.json |
| requestBody (application/json).height | number | yes |  | 1.0 |
| requestBody (application/json).label | string | no |  | string |
| requestBody (application/json).metadata | object | no |  | {"key": {}} |
| requestBody (application/json).page_number | integer | yes |  | 1 |
| requestBody (application/json).role | string | yes |  | string |
| requestBody (application/json).signature_kind | string | yes |  | signature |
| requestBody (application/json).width | number | yes |  | 1.0 |
| requestBody (application/json).x | number | yes |  | 1.0 |
| requestBody (application/json).y | number | yes |  | 1.0 |
| DELETE /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} | operation | no | pdf-signature-field-delete |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| field_id | string | yes |  | string |
| GET /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} | operation | no | pdf-signature-field-get |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| field_id | string | yes |  | string |
| PATCH /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} | operation | no | pdf-signature-field-patch |  |
| tenant_id | string | yes |  | string |
| pdf_id | string | yes |  | string |
| field_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PDFSignatureFieldPatchInputBody.json", "height": 1.0, "label": "string", "metadata": {"key": {}}, "page_number": 1, "role": "string", "signature_kind": "signature", "width": 1.0, "x": 1.0, "y": 1.0} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PDFSignatureFieldPatchInputBody.json |
| requestBody (application/json).height | number | no |  | 1.0 |
| requestBody (application/json).label | string | no |  | string |
| requestBody (application/json).metadata | object | no |  | {"key": {}} |
| requestBody (application/json).page_number | integer | no |  | 1 |
| requestBody (application/json).role | string | no |  | string |
| requestBody (application/json).signature_kind | string | no |  | signature |
| requestBody (application/json).width | number | no |  | 1.0 |
| requestBody (application/json).x | number | no |  | 1.0 |
| requestBody (application/json).y | number | no |  | 1.0 |
| POST /api/v1/{tenant_id}/poc-document-schemas | operation | no | poc-document-schema-create |  |
| tenant_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/DocumentSchemaCreateInputBody.json", "description": "Schema for extracting fields from W-2 tax forms", "fields": [{"field_description": "Name of the employer as shown on the form", "field_name": "employer_name"}], "name": "W-2 Tax Form"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DocumentSchemaCreateInputBody.json |
| requestBody (application/json).description | string | no | Description of what this schema extracts | Schema for extracting fields from W-2 tax forms |
| requestBody (application/json).fields | ['array', 'null'] | yes | Field definitions for extraction | [{"field_description": "Name of the employer as shown on the form", "field_name": "employer_name"}] |
| requestBody (application/json).fields[] | object | yes | Field definitions for extraction | {"field_description": "Name of the employer as shown on the form", "field_name": "employer_name"} |
| requestBody (application/json).fields[].field_description | string | yes | Description of the field | Name of the employer as shown on the form |
| requestBody (application/json).fields[].field_name | string | yes | Name of the field to extract | employer_name |
| requestBody (application/json).name | string | yes | Name of the document schema | W-2 Tax Form |
| POST /api/v1/{tenant_id}/poc-document-schemas/list | operation | no | poc-document-schema-list |  |
| tenant_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/DocumentSchemaListInputBody.json", "pagination_params": {"page": 1, "page_size": 10}, "search": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DocumentSchemaListInputBody.json |
| requestBody (application/json).pagination_params | object | no |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).search | string | no |  | string |
| DELETE /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} | operation | no | poc-document-schema-delete |  |
| tenant_id | string | yes |  | string |
| document_schema_id | string | yes |  | string |
| GET /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} | operation | no | poc-document-schema-get |  |
| tenant_id | string | yes |  | string |
| document_schema_id | string | yes |  | string |
| PUT /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} | operation | no | poc-document-schema-update |  |
| tenant_id | string | yes |  | string |
| document_schema_id | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/DocumentSchemaUpdateInputBody.json", "description": "Schema for extracting fields from W-2 tax forms", "fields": [{"field_description": "Name of the employer as shown on the form", "field_name": "employer_name"}], "name": "W-2 Tax Form"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DocumentSchemaUpdateInputBody.json |
| requestBody (application/json).description | string | no | Updated description | Schema for extracting fields from W-2 tax forms |
| requestBody (application/json).fields | ['array', 'null'] | yes | Updated field definitions | [{"field_description": "Name of the employer as shown on the form", "field_name": "employer_name"}] |
| requestBody (application/json).fields[] | object | yes | Updated field definitions | {"field_description": "Name of the employer as shown on the form", "field_name": "employer_name"} |
| requestBody (application/json).fields[].field_description | string | yes | Description of the field | Name of the employer as shown on the form |
| requestBody (application/json).fields[].field_name | string | yes | Name of the field to extract | employer_name |
| requestBody (application/json).name | string | yes | Updated name | W-2 Tax Form |
| GET /api/v1/{tenant_id}/policies | operation | no | policy-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| POST /api/v1/{tenant_id}/policies | operation | no | policy-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PolicyCreateInputBody.json", "created_by": "string", "description": "string", "policy_name": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PolicyCreateInputBody.json |
| requestBody (application/json).created_by | string | no |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).policy_name | string | yes |  | string |
| POST /api/v1/{tenant_id}/policies/search | operation | no | policy-search Search policies with visibility-aware filtering. Policies are visible if the user has access to the client organisation via ABAC rules, or if the user is directly related to the policy via policy_agent_relationships. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/PolicySearchInputBody.json", "agent_id": "agent_123", "agent_organisation_external_id": "ORG001", "agent_organisation_id": "ao_123", "agent_organisation_name": "Guardian Agency", "carrier": "State", "client_organisation_id": "co_123", "line_of_business": "Life", "pagination_params": {"page": 1, "page_size": 10}, "policy_number": "POL-", "sort_keys": [{"cast_type": "string", "collation": "string", "key": "string", "order": "string"}], "status": "Active"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/PolicySearchInputBody.json |
| requestBody (application/json).agent_id | string | no | Filter by agent ID in policy relationships (exact match) | agent_123 |
| requestBody (application/json).agent_organisation_external_id | string | no | Filter by policy agency external ID (exact match) | ORG001 |
| requestBody (application/json).agent_organisation_id | string | no | Filter by policy agency ID (exact match) | ao_123 |
| requestBody (application/json).agent_organisation_name | string | no | Filter by policy agency name (partial match, case insensitive) | Guardian Agency |
| requestBody (application/json).carrier | string | no | Filter by carrier (partial match, case insensitive) | State |
| requestBody (application/json).client_organisation_id | string | no | Filter by client organisation ID (exact match) | co_123 |
| requestBody (application/json).line_of_business | string | no | Filter by line of business (exact match) | Life |
| requestBody (application/json).pagination_params | object | no |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).policy_number | string | no | Filter by policy number (partial match, case insensitive) | POL- |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort criteria with column and direction | [{"cast_type": "string", "collation": "string", "key": "string", "order": "string"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort criteria with column and direction | {"cast_type": "string", "collation": "string", "key": "string", "order": "string"} |
| requestBody (application/json).sort_keys[].cast_type | string | no |  | string |
| requestBody (application/json).sort_keys[].collation | string | no |  | string |
| requestBody (application/json).sort_keys[].key | string | yes |  | string |
| requestBody (application/json).sort_keys[].order | string | yes |  | string |
| requestBody (application/json).status | string | no | Filter by status (exact match) | Active |
| GET /api/v1/{tenant_id}/policies/{policy_id} | operation | no | policy-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| policy_id | integer | yes | The policy ID | 456 |
| POST /api/v1/{tenant_id}/qc-check | operation | no | qc-check-post Run quality control checks on tasks by comparing Orion data with task form data |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/QCCheckInputBody.json", "task_id": "task_123", "tool_type": "manage_investment_strategy"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/QCCheckInputBody.json |
| requestBody (application/json).task_id | string | yes | The task ID | task_123 |
| requestBody (application/json).tool_type | string | yes | The QC tool type | manage_investment_strategy |
| POST /api/v1/{tenant_id}/qc-check-bulk | operation | no | qc-check-bulk-post Run quality control checks on multiple tasks with full post-QC processing (unschedule, save result, submit if passed) |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/QCCheckBulkInputBody.json", "tasks": [{"action_name": "Manage Investment Strategy", "action_run_id": "ar_456", "task_id": "task_123", "task_name": "Review Investment Strategy", "tool_type": "manage_investment_strategy"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/QCCheckBulkInputBody.json |
| requestBody (application/json).tasks | ['array', 'null'] | yes | List of tasks to process | [{"action_name": "Manage Investment Strategy", "action_run_id": "ar_456", "task_id": "task_123", "task_name": "Review Investment Strategy", "tool_type": "manage_investment_strategy"}] |
| requestBody (application/json).tasks[] | object | yes | List of tasks to process | {"action_name": "Manage Investment Strategy", "action_run_id": "ar_456", "task_id": "task_123", "task_name": "Review Investment Strategy", "tool_type": "manage_investment_strategy"} |
| requestBody (application/json).tasks[].action_name | string | no | Optional action name for display purposes | Manage Investment Strategy |
| requestBody (application/json).tasks[].action_run_id | string | yes | The action run ID for this task | ar_456 |
| requestBody (application/json).tasks[].task_id | string | yes | The task ID | task_123 |
| requestBody (application/json).tasks[].task_name | string | no | Optional task name for display purposes | Review Investment Strategy |
| requestBody (application/json).tasks[].tool_type | string | yes | The QC tool type | manage_investment_strategy |
| POST /api/v1/{tenant_id}/relationship-profiles/tax-managers | operation | no | tax-managers-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TaxManagerAgentRelationshipProfileListInputBody.json", "pagination_params": {"page": 1, "page_size": 10}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TaxManagerAgentRelationshipProfileListInputBody.json |
| requestBody (application/json).pagination_params | object | no | The pagination information for the tasks | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| GET /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/members | operation | no | relationship-client-organisation-members-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The unique identifier of the client organisation | org_123abc |
| POST /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/opportunities | operation | no | relationship-opportunity-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The unique identifier of the client organisation | org_123abc |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RelationshipOpportunityCreateInputBody.json", "category": "Expand", "confidence": "High", "created_by_agent_id": "agent_123", "description": "Potential investment in emerging markets", "expected_close_date": "2024-12-31", "external_id": "opp_123", "extra_properties": {"platform": "Zoom", "recording_url": "https://example.com/recording"}, "is_closed": false, "name": "New Investment Opportunity", "next_step": "Schedule follow-up meeting", "opportunity_type": "investment", "probability": 75.5, "record_type": "Historical_FSC_Advisory_Sales", "source": "Referral", "source_details": "Client referral from John", "stage": "Identify", "stage_changed_date": "2024-01-15T00:00:00Z", "status": "Identified", "sub_category": "Manage Balance Sheet"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RelationshipOpportunityCreateInputBody.json |
| requestBody (application/json).category | string | no | The category of the opportunity | Expand |
| requestBody (application/json).confidence | string | no | The confidence level of the opportunity | High |
| requestBody (application/json).created_by_agent_id | string | no | The ID of the agent who created the opportunity | agent_123 |
| requestBody (application/json).description | string | no | Detailed description of the opportunity | Potential investment in emerging markets |
| requestBody (application/json).expected_close_date | string | no | Expected date of closing (YYYY-MM-DD) | 2024-12-31 |
| requestBody (application/json).external_id | string | no | External identifier for the opportunity, usually maps to a CRM identifier | opp_123 |
| requestBody (application/json).extra_properties | object | no | Additional properties of the opportunity | {"platform": "Zoom", "recording_url": "https://example.com/recording"} |
| requestBody (application/json).is_closed | boolean | no | Whether the opportunity is closed | False |
| requestBody (application/json).name | string | yes | The name of the opportunity | New Investment Opportunity |
| requestBody (application/json).next_step | string | no | Next action item for the opportunity | Schedule follow-up meeting |
| requestBody (application/json).opportunity_type | string | no | The type of opportunity | investment |
| requestBody (application/json).probability | number | no | Probability of closing (0-100) | 75.5 |
| requestBody (application/json).record_type | string | no | The type of record | Historical_FSC_Advisory_Sales |
| requestBody (application/json).source | string | no | The source of the opportunity | Referral |
| requestBody (application/json).source_details | string | no | Details about the source of the opportunity | Client referral from John |
| requestBody (application/json).stage | string | no | The stage of the opportunity | Identify |
| requestBody (application/json).stage_changed_date | string | no | The date the stage last changed | 2024-01-15T00:00:00Z |
| requestBody (application/json).status | string | no | Current status of the opportunity | Identified |
| requestBody (application/json).sub_category | string | no | The sub-category of the opportunity | Manage Balance Sheet |
| GET /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/opportunities-list | operation | no | relationship-opportunity-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The unique identifier of the client organisation | org_123abc |
| POST /api/v1/{tenant_id}/relationships/dashboard | operation | no | relationship-dashboard-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RelationshipDashboardListInputBody.json", "client_organisation_name": "smith", "field_mappings": [{"name": "primaryAdvisorFirstName", "property": "agents.PRIMARY.first_name"}], "filter": {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"}, "include_valuation": true, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "client_organisation_name", "sort_order": "ASC"}], "status": "active"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RelationshipDashboardListInputBody.json |
| requestBody (application/json).client_organisation_name | string | no | Optional case-insensitive partial match filter on client organisation name | smith |
| requestBody (application/json).field_mappings | ['array', 'null'] | no | This field is optional. When provided the raw relationship data will be mapped to the fields provided here. For example, if you provide a field mapping of "primaryAdvisorFirstName" with a property of "agents.PRIMARY.first_name" then the value of the first name of the primary advisor will be included in the response under the field "primaryAdvisorFirstName". | [{"name": "primaryAdvisorFirstName", "property": "agents.PRIMARY.first_name"}] |
| requestBody (application/json).field_mappings[] | object | no | This field is optional. When provided the raw relationship data will be mapped to the fields provided here. For example, if you provide a field mapping of "primaryAdvisorFirstName" with a property of "agents.PRIMARY.first_name" then the value of the first name of the primary advisor will be included in the response under the field "primaryAdvisorFirstName". | {"name": "client_organisation_name", "property": "agents.PRIMARY.first_name"} |
| requestBody (application/json).field_mappings[].name | string | yes | The desired name of the mapped field in the response payload | client_organisation_name |
| requestBody (application/json).field_mappings[].property | string | yes | The path to the property of the field to map in the relationship data, e.g., 'agents.PRIMARY.first_name' or 'client_organisation_name' | agents.PRIMARY.first_name |
| requestBody (application/json).filter |  | no | The Expression to filter the relationships by. See the Readme for more details on the Expression format. | {"left": {"column": "client_relationship_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "EXISTING"}, "type": "binary"} |
| requestBody (application/json).include_valuation | boolean | no | If true (default), enrich each relationship with ledger-backed valuation data. Set to false to skip the valuation lookup. | True |
| requestBody (application/json).only_assigned | boolean | no | If true, only relationships where the current user is directly assigned to the client organisation will be returned | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the relationships | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the relationships by. | [{"sort_column": "client_organisation_name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the relationships by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| requestBody (application/json).status | string | no | Optional relationship status filter | active |
| GET /api/v1/{tenant_id}/relationships/opportunities/{opportunity_id} | operation | no | relationship-opportunity-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| opportunity_id | string | yes | The unique identifier of the opportunity | opp_123abc |
| POST /api/v1/{tenant_id}/reports/manual-mutual-fund-trades | operation | no | send-mutual-fund-trades-report Send the manual mutual fund trades email report for a specific date. Mercer environments only. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SendMutualFundTradesReportInputBody.json", "date": "2026-02-15"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SendMutualFundTradesReportInputBody.json |
| requestBody (application/json).date | string | yes | Report date in YYYY-MM-DD format | 2026-02-15 |
| GET /api/v1/{tenant_id}/role-groups | operation | no | role-groups-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| GET /api/v1/{tenant_id}/roles | operation | no | role-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| POST /api/v1/{tenant_id}/roles | operation | no | role-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RoleCreateInputBody.json", "created_by": "string", "description": "string", "role_name": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RoleCreateInputBody.json |
| requestBody (application/json).created_by | string | no |  | string |
| requestBody (application/json).description | string | no |  | string |
| requestBody (application/json).role_name | string | yes |  | string |
| GET /api/v1/{tenant_id}/roles/enforcer | operation | no | enforcer-role-rules-get |  |
| tenant_id | string | yes | The tenant ID | 456 |
| GET /api/v1/{tenant_id}/roles/{role_id} | operation | no | role-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| role_id | integer | yes | The role ID | 456 |
| POST /api/v1/{tenant_id}/roles/{role_id}/policies | operation | no | role-policy-create |  |
| tenant_id | string | yes | The tenant ID | 789 |
| role_id | integer | yes | The role ID | 456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RolePolicyCreateInputBody.json", "created_by": "string", "policy_id": 123} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RolePolicyCreateInputBody.json |
| requestBody (application/json).created_by | string | no |  | string |
| requestBody (application/json).policy_id | integer | yes | The policy ID | 123 |
| POST /api/v1/{tenant_id}/salesforce/{object_type} | operation | no | salesforce-create Creates a new record in Salesforce and syncs it to the local database.

**EventRelation (Meeting Attendees)**:
To add an attendee to a meeting, use object_type=EventRelation with a body containing:
- EventId: The Salesforce Event ID (e.g., "00Uxx0000004XyZ")
- RelationId: The Contact ID (003...) for clients or User ID (005...) for agents

Example request body for EventRelation:
```json
{
  "EventId": "00Uxx0000004XyZ",
  "RelationId": "003xx0000001ABC"
}
```

The record is created in Salesforce first, then synced to the local database via a composite GET request. |  |
| tenant_id | string | yes | Tenant ID | tenant_123 |
| object_type | string | yes | The Salesforce object type to create. Supported types: Account, Contact, Event, EventRelation (for meeting attendees), AccountContactRelation, SalenticaLMNTS__Tax_Filing__c, Client_Opp__c, SalenticaLMNTS__New_Business__c | EventRelation |
| requestBody (application/json) | object | yes | The field values for the new Salesforce record. For EventRelation, include EventId (meeting) and RelationId (attendee contact/user ID) | {"key": {}} |
| DELETE /api/v1/{tenant_id}/salesforce/{object_type}/{object_id} | operation | no | salesforce-delete Deletes a record in Salesforce. The record will be moved to Salesforce's RecycleBin.

**EventRelation (Meeting Attendees)**:
To remove an attendee from a meeting, use object_type=EventRelation with the EventRelation ID.

The deletion is performed in Salesforce first. The local database will be updated automatically
when the RecycleBin sync pipeline runs, ensuring consistency between Salesforce and local data. |  |
| tenant_id | string | yes | Tenant ID | tenant_123 |
| object_type | string | yes | The Salesforce object type to delete. Supported types: Account, Contact, Event, EventRelation (for meeting attendees), AccountContactRelation, SalenticaLMNTS__Tax_Filing__c, Client_Opp__c, SalenticaLMNTS__New_Business__c | EventRelation |
| object_id | string | yes | The Salesforce ID of the record to delete | 0RExx0000004CqGGAU |
| POST /api/v1/{tenant_id}/salesforce/{object_type}/{object_id} | operation | no | salesforce-update |  |
| tenant_id | string | yes | Tenant ID | tenant_123 |
| object_type | string | yes | The Salesforce object type to update | string |
| object_id | string | yes | The Salesforce object ID to update | string |
| requestBody (application/json) | object | yes | Arbitrary JSON the PATCH payload forwarded to Salesforce | {"key": {}} |
| POST /api/v1/{tenant_id}/search | operation | no | global-search Performs a full-text search across multiple entity types (clients, meetings, etc.) and returns results grouped by entity type. Supports relevance and recency sorting. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/GlobalSearchInputBody.json", "entities": ["client"], "highlight_tag": "mark", "limit": 20, "only_assigned": false, "pagination_params": {"page": 1, "page_size": 10}, "q": "John Smith", "sort": "relevance"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/GlobalSearchInputBody.json |
| requestBody (application/json).entities | ['array', 'null'] | no | Optional list of entity types to search. If empty, searches all entities. | ["client"] |
| requestBody (application/json).entities[] | string | no | Optional list of entity types to search. If empty, searches all entities. | client |
| requestBody (application/json).highlight_tag | string | no | HTML tag for highlighting matches (default: 'mark') | mark |
| requestBody (application/json).limit | integer | no | Maximum results per entity type (default: 20, max: 100). DEPRECATED: Use pagination_params instead. | 20 |
| requestBody (application/json).only_assigned | boolean | no | If true, only return results for client organisations directly assigned to the current user | False |
| requestBody (application/json).pagination_params | object | no | Pagination parameters. If not provided, uses limit parameter for backward compatibility. | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).q | string | yes | The search query text (required) | John Smith |
| requestBody (application/json).sort | string | no | Sort mode: 'relevance' (default) or 'recency' | relevance |
| POST /api/v1/{tenant_id}/service-agreements | operation | no | service-agreement-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ServiceAgreementCreateInputBody.json", "account_id": "account_123", "additional_attributes": {"custom": "value"}, "agent_id": "advisor_123", "agreement_details": {"terms": "standard"}, "allocation_details": {"allocation": "50%"}, "client_id": "client_123", "end_date": "2026-01-15T10:30:00Z", "fee_details": {"fee": "2%"}, "product_id": "product_123", "repcode_id": "repcode_123", "start_date": "2026-01-15T10:30:00Z"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ServiceAgreementCreateInputBody.json |
| requestBody (application/json).account_id | string | yes | The account ID for this agreement | account_123 |
| requestBody (application/json).additional_attributes | object | no | Additional custom attributes in JSON format | {"custom": "value"} |
| requestBody (application/json).agent_id | string | yes | The ID of the advisor | advisor_123 |
| requestBody (application/json).agreement_details | object | no | Contractual agreement details in JSON format | {"terms": "standard"} |
| requestBody (application/json).allocation_details | object | no | Details of allocation in JSON format | {"allocation": "50%"} |
| requestBody (application/json).client_id | string | yes | The ID of the client | client_123 |
| requestBody (application/json).end_date | string | no | End date of the agreement | 2026-01-15T10:30:00Z |
| requestBody (application/json).fee_details | object | no | Fee details in JSON format | {"fee": "2%"} |
| requestBody (application/json).product_id | string | yes | The product ID associated with this agreement | product_123 |
| requestBody (application/json).repcode_id | string | no | The repcode ID for this agreement | repcode_123 |
| requestBody (application/json).start_date | string | no | Start date of the agreement | 2026-01-15T10:30:00Z |
| GET /api/v1/{tenant_id}/service-agreements/{service_agreement_id} | operation | no | service-agreement-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| service_agreement_id | string | yes | The ID of the service agreement | agreement_123 |
| POST /api/v1/{tenant_id}/service-agreements/{service_agreement_id}/document | operation | no | service-agreement-document-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| service_agreement_id | string | yes | The service agreement ID | sa_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/CreateDocumentCatalogEntryInputBody.json", "access_level": "private", "additional_attributes": {"key": "value"}, "approved_by": "user_123", "description": "Client's 2023 tax return document", "document_status": "approved", "document_subtype": "2023 Tax Return", "document_type": "bank_statement", "external_id": "DOC-2024-01", "file_name": "document.pdf", "file_type": "pdf", "rejection_reason": "Incorrect format", "retention_policy": "5 years", "storage_container": "my-bucket", "storage_mode": "PLATFORM_MANAGED", "storage_object_key": "path/to/document.pdf", "storage_provider": "S3", "upload_date": "2026-01-15T10:30:00Z", "upload_status": "VERIFIED"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CreateDocumentCatalogEntryInputBody.json |
| requestBody (application/json).access_level | string | no | The access level of the document | private |
| requestBody (application/json).additional_attributes | object | no | Additional custom metadata | {"key": "value"} |
| requestBody (application/json).approved_by | string | no | ID of the user or system that approved the document | user_123 |
| requestBody (application/json).description | string | no | A brief description of the document | Client's 2023 tax return document |
| requestBody (application/json).document_status | string | no | The status of the document | approved |
| requestBody (application/json).document_subtype | string | no | Additional specificity for the document type | 2023 Tax Return |
| requestBody (application/json).document_type | string | yes | The type of document (e.g., bank_statement, tax_return) | bank_statement |
| requestBody (application/json).external_id | string | yes | The external identifier for the document | DOC-2024-01 |
| requestBody (application/json).file_name | string | no | The original file name of the uploaded document | document.pdf |
| requestBody (application/json).file_type | string | no | The file type or extension | pdf |
| requestBody (application/json).rejection_reason | string | no | Reason for document rejection | Incorrect format |
| requestBody (application/json).retention_policy | string | no | The document retention duration | 5 years |
| requestBody (application/json).storage_container | string | yes | The storage container (e.g., S3 bucket) where the document is stored | my-bucket |
| requestBody (application/json).storage_mode | string | yes | Storage mode: PLATFORM_MANAGED or THIRD_PARTY_MANAGED | PLATFORM_MANAGED |
| requestBody (application/json).storage_object_key | string | yes | The storage object key (path) to locate the document | path/to/document.pdf |
| requestBody (application/json).storage_provider | string | yes | Storage provider (e.g., S3, BOX, AZURE_BLOB) | S3 |
| requestBody (application/json).upload_date | string | no | The date the document was uploaded | 2026-01-15T10:30:00Z |
| requestBody (application/json).upload_status | string | yes | Upload status: PENDING, VERIFIED, FAILED | VERIFIED |
| GET /api/v1/{tenant_id}/service-agreements/{service_agreement_id}/documents | operation | no | service-agreement-documents-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| service_agreement_id | string | yes | The service agreement ID | sa_123 |
| POST /api/v1/{tenant_id}/tasks | operation | no | action-run-task-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTaskListInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "include_priorities": true, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "name", "sort_order": "ASC"}], "source_system_filter": "unqork", "use_enriched_unqork_tasks": true} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTaskListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the tasks by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).include_priorities | boolean | no | Whether to include task priorities from the blueprint version configuration | True |
| requestBody (application/json).only_assigned | boolean | no | Whether to only return tasks for client organisations the current user is directly assigned to | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the tasks | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the tasks by. | [{"sort_column": "name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the tasks by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| requestBody (application/json).source_system_filter | string | no | Filter tasks by source system | unqork |
| requestBody (application/json).use_enriched_unqork_tasks | boolean | no | Flag that decides if the unqork data will have additional informations, such as action runs extra data | True |
| POST /api/v1/{tenant_id}/tasks/bulk-transfer-assignments | operation | no | action-run-tasks-bulk-transfer-assignments |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ActionRunTasksBulkAssignInputBody.json", "from_agent_id": "a_12345", "task_ids": ["task_123", "task_456"], "to_agent_id": "a_67890"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ActionRunTasksBulkAssignInputBody.json |
| requestBody (application/json).from_agent_id | string | yes | The ID of the agent to transfer tasks from | a_12345 |
| requestBody (application/json).task_ids | ['array', 'null'] | no | Optional list of specific task IDs to transfer. If not provided, all eligible tasks from the agent will be transferred | ["task_123", "task_456"] |
| requestBody (application/json).task_ids[] | string | no | Optional list of specific task IDs to transfer. If not provided, all eligible tasks from the agent will be transferred | string |
| requestBody (application/json).to_agent_id | string | yes | The ID of the agent to transfer tasks to, pass empty string to unassign the tasks | a_67890 |
| GET /api/v1/{tenant_id}/tasks/{task_id}/run-info | operation | no | task-run-info |  |
| tenant_id | string | yes | The tenant ID | 123 |
| task_id | string | yes | The task ID | ar_t_456 |
| POST /api/v1/{tenant_id}/tax-filings | operation | no | tax-filing-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ListTaxFilingsInputBody.json", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "name", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ListTaxFilingsInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the tax filings by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).only_assigned | boolean | no | If true, only tax filings where the current user is directly assigned to the client organisation will be returned | True |
| requestBody (application/json).pagination_params | object | no | The pagination information for the tax filings | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the tax filings by. | [{"sort_column": "name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the tax filings by. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| GET /api/v1/{tenant_id}/tax-filings/completion-windows | operation | no | tax-filing-completion-windows-temp Temporary solution for Mercer until a more sophisticated solution is implemented that doesn't rely on extra_properties. This endpoint returns a list of completion windows from tax_filings.completion_window. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| GET /api/v1/{tenant_id}/tax-filings/tax-pods | operation | no | tax-filing-tax-pods-temp Temporary solution for Mercer until a more sophisticated solution is implemented that doesn't rely on extra_properties. This endpoint returns a list of tax pods from tax_filings.extra_properties. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| GET /api/v1/{tenant_id}/tax-filings/tax-return-types | operation | no | tax-return-type-temp Temporary solution for Mercer until a more sophisticated solution is implemented that doesn't rely on extra_properties. This endpoint returns a list of tax return types from tax_filings tax_return_type. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| GET /api/v1/{tenant_id}/tax-filings/{tax_filing_id} | operation | no | tax-filing-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| tax_filing_id | string | yes | The tax filing ID | tax_filing_123 |
| POST /api/v1/{tenant_id}/trigger-execution-logs | operation | no | trigger-execution-logs-list |  |
| tenant_id | string | yes | The tenant ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerExecutionLogsListRequestBody.json", "endpoint_id": "string", "filter": {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "run_component": {"action_run_id": "string", "component_key": "string"}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerExecutionLogsListRequestBody.json |
| requestBody (application/json).endpoint_id | string | no | Optional trigger endpoint ID to filter logs by | string |
| requestBody (application/json).filter |  | no | The Expression to filter the logs by. See the Readme for more details on the Expression format. | {"left": {"column": "status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "OPEN"}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | Pagination information | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).run_component | object | no | Optional run component identifier to filter request logs by | {"action_run_id": "string", "component_key": "string"} |
| requestBody (application/json).run_component.action_run_id | string | yes | Action run ID to filter logs by | string |
| requestBody (application/json).run_component.component_key | string | yes | Component key to filter logs by | string |
| GET /api/v1/{tenant_id}/triggers/endpoints | operation | no | trigger-endpoint-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| POST /api/v1/{tenant_id}/triggers/endpoints | operation | no | trigger-endpoint-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerEndpointCreateInputBody.json", "custom_headers_template": {"userId": "{{.user_id}}"}, "error_message_template": [{"message": "This Relationship has not been synced to Orion.", "pattern": "ClientId not set.*Salesforce"}], "name": "Send email", "output_mapping": {"id": ".data.value.id"}, "path_template": "/api/v1/customer/{{.customer_id}}/do/something/", "payload_template": {"subject": "{{.subject}}", "to": "{{.to}}"}, "payload_type": "json", "query_parameter_template": {"user_id": "{{.user_id}}"}, "request_method": "POST", "timeout_seconds": 120, "trigger_service_id": "ts_213j32"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerEndpointCreateInputBody.json |
| requestBody (application/json).custom_headers_template | object | yes | The custom headers template for the endpoint | {"userId": "{{.user_id}}"} |
| requestBody (application/json).error_message_template | ['array', 'null'] | no | Error message templates for pattern matching | [{"message": "This Relationship has not been synced to Orion.", "pattern": "ClientId not set.*Salesforce"}] |
| requestBody (application/json).error_message_template[] | object | no | Error message templates for pattern matching | {"message": "This Relationship has not been synced to Orion.", "pattern": "ClientId not set.*Salesforce"} |
| requestBody (application/json).error_message_template[].message | string | yes | User-friendly error message template (supports Go template syntax with {{.error}} and {{.variables.fieldName}}) | This Relationship has not been synced to Orion. |
| requestBody (application/json).error_message_template[].pattern | string | yes | Regex pattern to match in error messages | ClientId not set.*Salesforce |
| requestBody (application/json).name | string | yes | The name of the trigger endpoint | Send email |
| requestBody (application/json).output_mapping | object | yes | The output mapping for the endpoint | {"id": ".data.value.id"} |
| requestBody (application/json).path_template | string | yes | The path of the endpoint; must start with a / | /api/v1/customer/{{.customer_id}}/do/something/ |
| requestBody (application/json).payload_template |  | yes | The payload template for the endpoint | {"subject": "{{.subject}}", "to": "{{.to}}"} |
| requestBody (application/json).payload_type | string | yes | The payload type for the endpoint | json |
| requestBody (application/json).query_parameter_template | object | yes | The query parameter template for the endpoint | {"user_id": "{{.user_id}}"} |
| requestBody (application/json).request_method | string | yes | The HTTP request method for the endpoint | POST |
| requestBody (application/json).timeout_seconds | integer | no | The timeout in seconds for requests to the trigger service, defaults to 120 seconds | 120 |
| requestBody (application/json).trigger_service_id | string | yes | The trigger service ID | ts_213j32 |
| DELETE /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} | operation | no | trigger-endpoint-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trigger_endpoint_id | string | yes | The trigger endpoint ID | te_213j32 |
| GET /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} | operation | no | trigger-endpoint-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trigger_endpoint_id | string | yes | The trigger endpoint ID | te_213j32 |
| PUT /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} | operation | no | trigger-endpoint-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trigger_endpoint_id | string | yes | The trigger endpoint ID | te_213j32 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerEndpointUpdateInputBody.json", "custom_headers_template": {"userId": "{{.user_id}}"}, "error_message_template": [{"message": "This Relationship has not been synced to Orion.", "pattern": "ClientId not set.*Salesforce"}], "name": "Send email", "output_mapping": {"id": ".data.value.id"}, "path_template": "/api/v1/customer/{{.customer_id}}/do/something/", "payload_template": {"subject": "{{.subject}}", "to": "{{.to}}"}, "payload_type": "json", "query_parameter_template": {"user_id": "{{.user_id}}"}, "request_method": "POST", "timeout_seconds": 120, "trigger_service_id": "ts_213j32"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerEndpointUpdateInputBody.json |
| requestBody (application/json).custom_headers_template | object | yes | The custom headers template for the endpoint | {"userId": "{{.user_id}}"} |
| requestBody (application/json).error_message_template | ['array', 'null'] | no | Error message templates for pattern matching | [{"message": "This Relationship has not been synced to Orion.", "pattern": "ClientId not set.*Salesforce"}] |
| requestBody (application/json).error_message_template[] | object | no | Error message templates for pattern matching | {"message": "This Relationship has not been synced to Orion.", "pattern": "ClientId not set.*Salesforce"} |
| requestBody (application/json).error_message_template[].message | string | yes | User-friendly error message template (supports Go template syntax with {{.error}} and {{.variables.fieldName}}) | This Relationship has not been synced to Orion. |
| requestBody (application/json).error_message_template[].pattern | string | yes | Regex pattern to match in error messages | ClientId not set.*Salesforce |
| requestBody (application/json).name | string | yes | The name of the trigger endpoint | Send email |
| requestBody (application/json).output_mapping | object | yes | The output mapping for the endpoint | {"id": ".data.value.id"} |
| requestBody (application/json).path_template | string | yes | The path of the endpoint; must start with a / | /api/v1/customer/{{.customer_id}}/do/something/ |
| requestBody (application/json).payload_template |  | yes | The payload template for the endpoint | {"subject": "{{.subject}}", "to": "{{.to}}"} |
| requestBody (application/json).payload_type | string | yes | The payload type for the endpoint | json |
| requestBody (application/json).query_parameter_template | object | yes | The query parameter template for the endpoint | {"user_id": "{{.user_id}}"} |
| requestBody (application/json).request_method | string | yes | The HTTP request method for the endpoint | POST |
| requestBody (application/json).timeout_seconds | integer | no | The timeout in seconds for requests to the trigger service, defaults to 120 seconds | 120 |
| requestBody (application/json).trigger_service_id | string | yes | The trigger service ID | ts_213j32 |
| POST /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id}/execute | operation | no | trigger-endpoint-execute |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trigger_endpoint_id | string | yes | The trigger endpoint ID | te_213j32 |
| requestBody (application/json) | object | yes | The body containing the variables to send to the trigger endpoint | {"variables": {"age": 30, "name": "John"}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerEndpointExecuteInputBody.json |
| requestBody (application/json).variables | object | no | The variables to send to the trigger endpoint | {"age": 30, "name": "John"} |
| GET /api/v1/{tenant_id}/triggers/services | operation | no | trigger-service-list |  |
| tenant_id | string | yes | The tenant ID | 123 |
| POST /api/v1/{tenant_id}/triggers/services | operation | no | trigger-service-create |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerServiceCreateInputBody.json", "auth_body": {"audience": "https://api.example.com", "scope": "read write"}, "auth_body_type": "json", "auth_config": {"header_key": "Authorization", "token": "12345"}, "auth_type": "bearer", "base_url": "https://api.sendgrid.com/v3", "name": "SendGrid", "timeout_seconds": 120} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerServiceCreateInputBody.json |
| requestBody (application/json).auth_body | object | no | Additional fields to include in OAuth2 token request body | {"audience": "https://api.example.com", "scope": "read write"} |
| requestBody (application/json).auth_body_type | string | no | The body type for OAuth2 token requests (only applicable for OAuth2 auth types) | json |
| requestBody (application/json).auth_config | object | yes | The authentication configuration of the trigger service | {"header_key": "Authorization", "token": "12345"} |
| requestBody (application/json).auth_type | string | yes | The authentication type of the trigger service | bearer |
| requestBody (application/json).base_url | string | yes | The base URL of the trigger service | https://api.sendgrid.com/v3 |
| requestBody (application/json).name | string | yes | The name of the trigger service | SendGrid |
| requestBody (application/json).timeout_seconds | integer | no | The timeout in seconds for requests to the trigger service, defaults to 120 seconds | 120 |
| DELETE /api/v1/{tenant_id}/triggers/services/{trigger_service_id} | operation | no | trigger-service-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trigger_service_id | string | yes | The trigger service ID | ts_213j32 |
| GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id} | operation | no | trigger-service-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trigger_service_id | string | yes | The trigger service ID | ts_213j32 |
| PUT /api/v1/{tenant_id}/triggers/services/{trigger_service_id} | operation | no | trigger-service-update |  |
| tenant_id | string | yes | The tenant ID | 123 |
| trigger_service_id | string | yes | The trigger service ID | ts_213j32 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerServiceUpdateInputBody.json", "auth_body": {"audience": "https://api.example.com", "scope": "read write"}, "auth_body_type": "json", "auth_config": {"header_key": "Authorization", "token": "12345"}, "auth_type": "bearer", "base_url": "https://api.sendgrid.com/v3", "name": "SendGrid", "timeout_seconds": 120} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerServiceUpdateInputBody.json |
| requestBody (application/json).auth_body | object | no | Additional fields to include in OAuth2 token request body | {"audience": "https://api.example.com", "scope": "read write"} |
| requestBody (application/json).auth_body_type | string | no | The body type for OAuth2 token requests (only applicable for OAuth2 auth types) | json |
| requestBody (application/json).auth_config | object | yes | The authentication configuration of the trigger service | {"header_key": "Authorization", "token": "12345"} |
| requestBody (application/json).auth_type | string | yes | The authentication type of the trigger service | bearer |
| requestBody (application/json).base_url | string | yes | The base URL of the trigger service | https://api.sendgrid.com/v3 |
| requestBody (application/json).name | string | yes | The name of the trigger service | SendGrid |
| requestBody (application/json).timeout_seconds | integer | no | The timeout in seconds for requests to the trigger service, defaults to 120 seconds | 120 |
| GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments | operation | no | trigger-service-environment-list |  |
| tenant_id | string | yes |  | string |
| trigger_service_id | string | yes |  | string |
| POST /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments | operation | no | trigger-service-environment-create |  |
| tenant_id | string | yes | Tenant ID | string |
| trigger_service_id | string | yes | Trigger Service ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerServiceEnvironmentCreateInputBody.json", "auth_body": {"audience": "https://api.example.com", "scope": "read write"}, "auth_body_type": "json", "auth_config": {"key": {}}, "auth_type": "key", "base_url": "https://dev.api.example.com", "environment": "dev", "is_enabled": true, "timeout_seconds": 20} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerServiceEnvironmentCreateInputBody.json |
| requestBody (application/json).auth_body | object | no | Additional fields to include in OAuth2 token request body | {"audience": "https://api.example.com", "scope": "read write"} |
| requestBody (application/json).auth_body_type | string | no | The body type for OAuth2 token requests (only applicable for OAuth2 auth types) | json |
| requestBody (application/json).auth_config | object | yes | Authentication configuration | {"key": {}} |
| requestBody (application/json).auth_type | string | yes | Authentication type | key |
| requestBody (application/json).base_url | string | yes | Base URL for this environment | https://dev.api.example.com |
| requestBody (application/json).environment | string | yes | The environment name (e.g. dev, staging, prod) | dev |
| requestBody (application/json).is_enabled | boolean | no | Whether config is enabled (defaults true) | True |
| requestBody (application/json).timeout_seconds | integer | no | Request timeout in seconds (defaults 10) | 20 |
| DELETE /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} | operation | no | trigger-service-environment-delete |  |
| tenant_id | string | yes |  | string |
| trigger_service_id | string | yes |  | string |
| environment | string | yes |  | string |
| GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} | operation | no | trigger-service-environment-get |  |
| tenant_id | string | yes | Tenant ID | string |
| trigger_service_id | string | yes | Trigger Service ID | string |
| environment | string | yes | Environment name | string |
| PUT /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} | operation | no | trigger-service-environment-update |  |
| tenant_id | string | yes |  | string |
| trigger_service_id | string | yes |  | string |
| environment | string | yes |  | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TriggerServiceEnvironmentUpdateInputBody.json", "auth_body": {"scope": "read write"}, "auth_body_type": "json", "auth_config": {"key": {}}, "auth_type": "string", "base_url": "string", "is_enabled": true, "timeout_seconds": 1} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TriggerServiceEnvironmentUpdateInputBody.json |
| requestBody (application/json).auth_body | object | no | Additional fields to include in OAuth2 token request body | {"scope": "read write"} |
| requestBody (application/json).auth_body_type | string | no | The body type for OAuth2 token requests | json |
| requestBody (application/json).auth_config | object | yes |  | {"key": {}} |
| requestBody (application/json).auth_type | string | yes |  | string |
| requestBody (application/json).base_url | string | yes |  | string |
| requestBody (application/json).is_enabled | boolean | no |  | True |
| requestBody (application/json).timeout_seconds | integer | no |  | 1 |
| POST /api/v1/{tenant_id}/unqork-custom-api/cash-breakdown | operation | no | unqork-cash-breakdown Returns a cash breakdown for a financial account using external trigger data and internal calculations. |  |
| tenant_id | string | yes | Tenant ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RequestUnqorkCashBreakdownBody.json", "data": {"financialAccountId": "string", "relationshipId": "string"}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RequestUnqorkCashBreakdownBody.json |
| requestBody (application/json).data | object | yes |  | {"financialAccountId": "string", "relationshipId": "string"} |
| requestBody (application/json).data.financialAccountId | string | yes |  | string |
| requestBody (application/json).data.relationshipId | string | yes |  | string |
| POST /api/v1/{tenant_id}/unqork-custom-api/identify-tpm | operation | no | unqork-identify-third-party-manager Retrieves the third party manager information for a given Financial Account ID and other parameters |  |
| tenant_id | string | yes | Tenant ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RequestUnqorkIdentifyThirdPartyManagerBody.json", "data": {"financialAccountId": "string", "modelAggId": "string", "relationshipId": "string"}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RequestUnqorkIdentifyThirdPartyManagerBody.json |
| requestBody (application/json).data | object | yes |  | {"financialAccountId": "string", "modelAggId": "string", "relationshipId": "string"} |
| requestBody (application/json).data.financialAccountId | string | yes |  | string |
| requestBody (application/json).data.modelAggId | string | no |  | string |
| requestBody (application/json).data.relationshipId | string | yes |  | string |
| GET /api/v1/{tenant_id}/unqork/action-runs/{unqork_id} | operation | no | unqork-action-run-get Retrieves an Unqork action run with its tasks |  |
| tenant_id | string | yes | Tenant ID | string |
| unqork_id | string | yes | Unqork ID for the action run | string |
| PUT /api/v1/{tenant_id}/unqork/action-runs/{unqork_id} | operation | no | unqork-action-run-upsert Creates or updates an Unqork action run based on the unqork_id |  |
| tenant_id | string | yes | Tenant ID | string |
| unqork_id | string | yes | Unqork ID for the action run | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/UnqorkActionRunUpsertRequestBody.json", "data": {"key": {}}, "id": "string", "relationship_id": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/UnqorkActionRunUpsertRequestBody.json |
| requestBody (application/json).data | object | yes | JSON data payload for the action run | {"key": {}} |
| requestBody (application/json).id | string | yes | Unqork ID for the action run - this is the primary key for the action run, and will be used for upserting | string |
| requestBody (application/json).relationship_id | string | yes | Relationship ID for the action run - should be the Salesforce ID of the relationship | string |
| GET /api/v1/{tenant_id}/unqork/action-runs/{unqork_id}/comments | operation | no | unqork-action-run-comments-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| unqork_id | string | yes | The Unqork action run ID | unqork_ar_456 |
| POST /api/v1/{tenant_id}/unqork/comments | operation | no | unqork-comment-create |  |
| tenant_id | string | yes | Tenant ID | string |
| requestBody (application/json) | object | yes | Raw Aspen comment data payload | {"key": {}} |
| PUT /api/v1/{tenant_id}/unqork/comments/{unqork_id} | operation | no | unqork-comment-upsert-as-avantos |  |
| tenant_id | string | yes | Tenant ID | string |
| unqork_id | string | yes | Unqork ID for the comment | string |
| requestBody (application/json) | object | yes | Raw Aspen comment data payload | {"key": {}} |
| PUT /api/v1/{tenant_id}/unqork/notifications/{unqork_id} | operation | no | unqork-notification-upsert |  |
| tenant_id | string | yes | Tenant ID | string |
| unqork_id | string | yes | Unqork ID for the comment | string |
| requestBody (application/json) | object | yes | Raw Aspen comment data payload | {"$schema": "https://example.com/schemas/UnqorkNotificationUpsertRequestBody.json", "data": {"key": {}}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/UnqorkNotificationUpsertRequestBody.json |
| requestBody (application/json).data | object | yes | JSON data payload for the notification | {"key": {}} |
| PUT /api/v1/{tenant_id}/unqork/tasks/{unqork_id} | operation | no | unqork-task-upsert Creates or updates an Unqork task based on the unqork_id |  |
| tenant_id | string | yes | Tenant ID | string |
| unqork_id | string | yes | Unqork ID for the task | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/UnqorkTaskUpsertRequestBody.json", "action_id": "string", "data": {"key": {}}, "id": "string", "relationship_id": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/UnqorkTaskUpsertRequestBody.json |
| requestBody (application/json).action_id | string | yes | Unqork action run ID this task belongs to | string |
| requestBody (application/json).data | object | yes | JSON data payload for the task | {"key": {}} |
| requestBody (application/json).id | string | yes | Unqork ID for the task - this is the primary key for the task, and will be used for upserting | string |
| requestBody (application/json).relationship_id | string | yes | Relationship ID for the task - should be the Salesforce ID of the relationship | string |
| POST /api/v1/{tenant_id}/views/import | operation | no | custom-views-import Imports views from a JSON file |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes | Old system view to import | {"$schema": "https://example.com/schemas/CustomViewsImportInputBody.json", "columnFilters": [{"Key": "string", "Type": "string", "Value": {}}], "columnHeaders": ["string"], "created": "string", "id": "string", "isDefaultUserView": {}, "modified": "string", "module": "string", "pageSize": 1, "relationshipType": "string", "sortKey": "string", "sortOrder": "string", "table": "string", "type": "string", "typeId": {}, "userId": "string", "viewName": "string", "viewOrder": {}, "visibility": {"key": true}} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/CustomViewsImportInputBody.json |
| requestBody (application/json).columnFilters | ['array', 'null'] | no | Filters to apply to columns | [{"Key": "string", "Type": "string", "Value": {}}] |
| requestBody (application/json).columnFilters[] | object | no | Filters to apply to columns | {"Key": "string", "Type": "string", "Value": {}} |
| requestBody (application/json).columnFilters[].Key | string | yes | The column key to filter on | string |
| requestBody (application/json).columnFilters[].Type | string | no | The type of filter, e.g. 'Exact' etc | string |
| requestBody (application/json).columnFilters[].Value |  | yes | The value(s) to filter for. Can be a string or a list of strings | {} |
| requestBody (application/json).columnHeaders | ['array', 'null'] | no | Order of column headers to display | ["string"] |
| requestBody (application/json).columnHeaders[] | string | no | Order of column headers to display | string |
| requestBody (application/json).created | string | no | Currently not used | string |
| requestBody (application/json).id | string | no | Currently not used | string |
| requestBody (application/json).isDefaultUserView |  | no | Currently not used | {} |
| requestBody (application/json).modified | string | no | Currently not used | string |
| requestBody (application/json).module | string | no | Currently not used | string |
| requestBody (application/json).pageSize | integer | no | Currently not used | 1 |
| requestBody (application/json).relationshipType | string | no | Relationship type, 'My' for only assigned | string |
| requestBody (application/json).sortKey | string | no | Column to sort by | string |
| requestBody (application/json).sortOrder | string | no | Sort order (ASC or DESC) | string |
| requestBody (application/json).table | string | yes | Table name, must be 'actions' or 'tasks' | string |
| requestBody (application/json).type | string | yes | View type, must be 'global', 'roleView', or 'userView' | string |
| requestBody (application/json).typeId |  | no | For role views: array of role names, for personal views: user ID | {} |
| requestBody (application/json).userId | string | no | Currently not used | string |
| requestBody (application/json).viewName | string | yes | Name of the view | string |
| requestBody (application/json).viewOrder |  | no | Currently not used | {} |
| requestBody (application/json).visibility | object | no | Map of column visibility settings | {"key": true} |
| POST /api/v1/{tenant_id}/vpoc-all-clients/search | operation | no | vpoc-all-clients-search Search for clients across the entire tenant, with filtering by name, email, organization, and more. Supports pagination and sorting. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AllClientsSearchInputBody.json", "client_organisation_name_filter": "Acme Corp", "external_id_filter": "ext_123", "filter": {"operands": [{"left": {"column": "name", "type": "column"}, "operator": "LIKE", "right": {"type": "literal", "value": "%Smith%"}, "type": "binary"}, {"left": {"column": "preferred_email", "type": "column"}, "operator": "LIKE", "right": {"type": "literal", "value": "%@example.com"}, "type": "binary"}], "type": "and"}, "name_filter": "John Smith", "pagination_params": {"page": 1, "page_size": 10}, "preferred_email_filter": "john@example.com", "sort_keys": [{"cast_type": "numeric", "collation": "default", "sort_column": "first_name", "sort_order": "ASC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AllClientsSearchInputBody.json |
| requestBody (application/json).client_organisation_name_filter | string | no | Filter clients by client organisation name (partial match) | Acme Corp |
| requestBody (application/json).external_id_filter | string | no | Filter clients by external ID (exact match) | ext_123 |
| requestBody (application/json).filter |  | no | Expression to filter the clients by. Supports complex logic with and/or operators, binary comparisons, and column/literal values. Available columns: name, preferred_email, client_organisation_name, external_id | {"operands": [{"left": {"column": "name", "type": "column"}, "operator": "LIKE", "right": {"type": "literal", "value": "%Smith%"}, "type": "binary"}, {"left": {"column": "preferred_email", "type": "column"}, "operator": "LIKE", "right": {"type": "literal", "value": "%@example.com"}, "type": "binary"}], "type": "and"} |
| requestBody (application/json).name_filter | string | no | Filter clients by name (partial match on concatenated first, middle, last name) | John Smith |
| requestBody (application/json).pagination_params | object | no | Pagination parameters | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).preferred_email_filter | string | no | Filter clients by preferred email address (partial match) | john@example.com |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort criteria with column and direction | [{"cast_type": "numeric", "collation": "default", "sort_column": "first_name", "sort_order": "ASC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort criteria with column and direction | {"cast_type": "numeric", "collation": "default", "sort_column": "first_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type casting for correct sorting of JSONB numeric/date fields. Use 'numeric' for currency/decimals, 'integer' for whole numbers, 'date' or 'timestamp' for dates. Essential for sorting Salesforce custom fields stored in extra_properties. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Supports JSONB paths for custom fields. | first_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending) or DESC (descending). | ASC |
| GET /api/v1/{tenant_id}/whoami | operation | no | whoami |  |
| tenant_id | string | yes |  | string |
| GET /api/v1/{tenant_id}/widgets | operation | no | widget-list |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| page | string | no | The page name | dashboard |
| PUT /api/v1/{tenant_id}/widgets/positions | operation | no | widget-batch-update-positions |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| page | string | no | The page name | dashboard |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/WidgetBatchUpdatePositionsBody.json", "updates": [{"height": 2, "widgetId": "wdg_123", "width": 2, "x": 0, "y": 0}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/WidgetBatchUpdatePositionsBody.json |
| requestBody (application/json).updates | ['array', 'null'] | yes | List of widget position updates | [{"height": 2, "widgetId": "wdg_123", "width": 2, "x": 0, "y": 0}] |
| requestBody (application/json).updates[] | object | yes | List of widget position updates | {"height": 2, "widgetId": "wdg_123", "width": 2, "x": 0, "y": 0} |
| requestBody (application/json).updates[].height | integer | yes | New height | 2 |
| requestBody (application/json).updates[].widgetId | string | yes | Widget ID to update | wdg_123 |
| requestBody (application/json).updates[].width | integer | yes | New width | 2 |
| requestBody (application/json).updates[].x | integer | yes | New X position | 0 |
| requestBody (application/json).updates[].y | integer | yes | New Y position | 0 |
| GET /api/v1/{tenant_id}/widgets/{widget_id} | operation | no | widget-get |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| widget_id | string | yes | The widget ID | wdg_123 |
| PATCH /api/v1/{tenant_id}/widgets/{widget_id} | operation | no | widget-update |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| widget_id | string | yes | The widget ID | wdg_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/WidgetUpdateBody.json", "config": {"key": {}}, "height": 2, "isVisible": true, "width": 2, "x": 0, "y": 0} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/WidgetUpdateBody.json |
| requestBody (application/json).config | object | no | Widget configuration | {"key": {}} |
| requestBody (application/json).height | integer | no | Height in grid units | 2 |
| requestBody (application/json).isVisible | boolean | no | Whether widget is visible | True |
| requestBody (application/json).width | integer | no | Width in grid units | 2 |
| requestBody (application/json).x | integer | no | X position in grid | 0 |
| requestBody (application/json).y | integer | no | Y position in grid | 0 |


## Response Examples

### GET /api/v1/admin/widget-definitions - widget-definitions-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionListOutputBody.json",
      "definitions": [
        {
          "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
          "configSchema": {
            "key": {}
          },
          "createdAt": "2024-01-01T00:00:00Z",
          "defaultConfig": {
            "key": {}
          },
          "defaultHeight": 2,
          "defaultWidth": 2,
          "description": "Shows upcoming meetings",
          "displayName": "Meetings Widget",
          "id": "wdef_123",
          "maxHeight": 4,
          "maxWidth": 4,
          "minHeight": 1,
          "minWidth": 1,
          "name": "meetings",
          "updatedAt": "2024-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/admin/widget-definitions - widget-definition-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionCreateOutputBody.json",
      "id": "wdef_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/admin/widget-definitions/{definition_id} - widget-definition-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionDeleteOutputBody.json",
      "message": "Widget definition deleted successfully"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/admin/widget-definitions/{definition_id} - widget-definition-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
      "configSchema": {
        "key": {}
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "defaultConfig": {
        "key": {}
      },
      "defaultHeight": 2,
      "defaultWidth": 2,
      "description": "Shows upcoming meetings",
      "displayName": "Meetings Widget",
      "id": "wdef_123",
      "maxHeight": 4,
      "maxWidth": 4,
      "minHeight": 1,
      "minWidth": 1,
      "name": "meetings",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/admin/widget-definitions/{definition_id} - widget-definition-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionUpdateOutputBody.json",
      "message": "Widget definition updated successfully"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/abac/explain - abac-access-explainer

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ABACExplainerOutputBody.json",
      "abac_disabled": true,
      "client_org_properties": {
        "key": {}
      },
      "combined_expression": "string",
      "has_access": true,
      "policy_evaluations": [
        {
          "effect": "string",
          "explanation": "string",
          "expression": "string",
          "matched": true,
          "policy_name": "string"
        }
      ],
      "reason": "string",
      "user_context": {
        "additional_attributes": {
          "key": "string"
        },
        "agent_id": "string",
        "email": "string",
        "external_id": "string",
        "role": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs - action-run-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/blueprint-version-reassign - action-run-blueprint-version-reassign-bulk

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunBulkBlueprintVersionReassignResponseBody.json",
      "failed_runs": {
        "key": {
          "component_errors": [
            {
              "component_key": {},
              "message": {}
            }
          ],
          "prefill_errors": [
            {
              "component_key": {},
              "error_type": {},
              "field_name": {},
              "message": {},
              "referenced_component_key": {}
            }
          ]
        }
      },
      "reassigned_run_ids": [
        "ar_123",
        "ar_456",
        "ar_789"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/client-organisation/batch-update - action-run-client-organisation-batch-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunClientOrganisationBatchUpdateOutputBody.json",
      "results": [
        {
          "action_run_id": "string",
          "error": "string",
          "success": true
        }
      ],
      "summary": {
        "failed": 1,
        "successful": 1,
        "total_requested": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/list - action-run-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "string",
      "counts": {
        "canceled_count": 1,
        "completed_count": 1,
        "in_progress_count": 1,
        "scheduled_count": 1,
        "todo_count": 1
      },
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "runs": [
        {
          "action_run_data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "agents": {
            "key": {}
          },
          "aum": 1000000000,
          "blueprint_category": "Move Money",
          "blueprint_description": "This action is used to transfer assets from one account to another",
          "blueprint_id": "bp_12345",
          "blueprint_name": "Transfer of Assets",
          "blueprint_version_id": "bpv_12345",
          "cancellation_reason": "No longer needed",
          "cancelled_at": "2023-01-01T12:30:00Z",
          "cancelled_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "child_runs": [
            {
              "action_run_data": {},
              "agents": {},
              "aum": {},
              "blueprint_category": {},
              "blueprint_description": {},
              "blueprint_id": {},
              "blueprint_name": {},
              "blueprint_version_id": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "child_runs": {},
              "client_organisation_external_id": {},
              "client_organisation_id": {},
              "client_organisation_market": {},
              "client_organisation_name": {},
              "client_organisation_national_css_coverage": {},
              "client_organisation_type": {},
              "client_organisation_uhnw_service_level": {},
              "client_segmentation": {},
              "completed_at": {},
              "created_at": {},
              "current_task": {},
              "deadline": {},
              "environment": {},
              "expected_completion_date": {},
              "id": {},
              "locked_at": {},
              "locked_by": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "parent_blueprint_category": {},
              "parent_blueprint_description": {},
              "parent_blueprint_name": {},
              "parent_nickname": {},
              "parent_run_id": {},
              "ready_at": {},
              "recommended": {},
              "recommended_by": {},
              "rejected_at": {},
              "rejected_by": {},
              "rejection_reason": {},
              "scheduled_at": {},
              "slug": {},
              "source_system": {},
              "started_at": {},
              "started_by": {},
              "status": {},
              "temp_legacy_slug": {},
              "tenant_id": {}
            }
          ],
          "client_organisation_external_id": "co_xyz",
          "client_organisation_id": "co_xyz",
          "client_organisation_market": "Seattle",
          "client_organisation_name": "Client Org",
          "client_organisation_national_css_coverage": true,
          "client_organisation_type": "Existing",
          "client_organisation_uhnw_service_level": true,
          "client_segmentation": "High Net Worth",
          "completed_at": "2023-01-01T13:00:00Z",
          "created_at": "2023-01-01T12:00:00Z",
          "current_task": {
            "id": "ar_c_12345",
            "name": "Submit Application",
            "status": "todo"
          },
          "deadline": "2023-01-15T12:00:00Z",
          "environment": "merceradvisors-uat",
          "expected_completion_date": "2023-01-20T12:00:00Z",
          "id": "ar_12345",
          "locked_at": "2026-01-15T10:30:00Z",
          "locked_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "logs": [
            {
              "changed_by": {},
              "custom_status": {},
              "event_type": {},
              "id": {},
              "metadata": {},
              "old_custom_status": {},
              "old_status": {},
              "run_id": {},
              "status": {},
              "tenant_id": {},
              "time": {}
            }
          ],
          "name": "My Action Run",
          "next_step_date": "2023-01-15T12:00:00Z",
          "parent_blueprint_category": "HR",
          "parent_blueprint_description": "Standardized onboarding flow for new hires",
          "parent_blueprint_name": "Employee Onboarding",
          "parent_nickname": "Q3 onboarding cohort",
          "parent_run_id": "ar_parent_12345",
          "ready_at": "2023-01-01T12:04:00Z",
          "recommended": true,
          "recommended_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejected_at": "2023-01-01T12:10:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "Not appropriate",
          "scheduled_at": "2023-01-02T09:00:00Z",
          "slug": "12345",
          "source_system": "avantos",
          "started_at": "2023-01-01T12:05:00Z",
          "started_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "status": "processing",
          "temp_legacy_slug": "string",
          "tenant_id": "t_67890"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/lock - action-run-bulk-lock

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/unlock - action-run-bulk-unlock

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id} - action-run-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunGetDescription.json",
      "action_details": {
        "cancellation_reason": "No longer needed",
        "cancelled_at": "2023-04-01T12:00:00Z",
        "cancelled_by": {
          "first_name": "John",
          "id": "u_12345",
          "last_name": "Doe"
        },
        "category": "onboarding",
        "completed_at": "2023-04-01T12:00:00Z",
        "created_at": "2023-04-01T12:00:00Z",
        "deadline": "2023-04-15T12:00:00Z",
        "expected_completion_date": "2023-04-20T12:00:00Z",
        "id": "ar_12345",
        "next_step": "2023-04-01T12:00:00Z",
        "ready_at": "2023-04-01T12:00:00Z",
        "rejection": {
          "rejected_at": "2023-04-01T12:00:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "The action run was rejected because it was no longer needed"
        },
        "scheduled_at": "2023-04-01T12:00:00Z",
        "started_at": "2023-04-01T12:00:00Z",
        "type": "distribution"
      },
      "blueprint": {
        "category": "Onboarding",
        "description": "Process for onboarding new customers",
        "id": "bp_12345",
        "name": "Customer Onboarding",
        "promoted_data_order": [
          "Promoted Field Name"
        ],
        "short_description": "Onboard customers",
        "version_id": "bpv_12345"
      },
      "child_trackers": [
        {
          "action_run_id": "ar_child_123",
          "component_key": "action_1",
          "name": "Client Onboarding",
          "section_name": "Section 1",
          "status": "in_progress",
          "status_tracker": [
            {
              "ReviewTask": {},
              "SubmitTask": {}
            }
          ]
        }
      ],
      "client_organisation_id": "co_xyz",
      "components": [
        {
          "action_run_id": "ar_12345",
          "blueprint_category": "onboarding",
          "blueprint_component_id": "bp_c_12345",
          "cancelled_at": "2023-04-01T12:00:00Z",
          "cancelled_by": "test@example.com",
          "cancelled_reason": "Test reason",
          "component_key": "customer-details",
          "component_name": "Customer Details",
          "component_type": "form",
          "id": "ar_c_12345",
          "resolved_form_id": "string",
          "result_data": {
            "key": {}
          },
          "skipped": false,
          "status": "todo",
          "submission_restricted": false,
          "tags": [
            "esign"
          ],
          "tasks": [
            {
              "action_run_id": {},
              "assigned": {},
              "can_begin": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "completed_at": {},
              "completed_by": {},
              "component_key": {},
              "created_at": {},
              "cron_job_queued": {},
              "data": {},
              "deadline": {},
              "environment": {},
              "id": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "note": {},
              "permitted_roles": {},
              "rejected": {},
              "scheduled_at": {},
              "section_name": {},
              "sla_duration": {},
              "started_at": {},
              "status": {},
              "tags": {},
              "task_type": {},
              "total_time_waiting_ms": {},
              "unblocked_at": {},
              "waiting_for": {},
              "who_waiting_on": {}
            }
          ],
          "tenant_id": "t_67890"
        }
      ],
      "custom_status": "Draft",
      "data": {
        "key": {}
      },
      "environment": "production",
      "generator_field_path": "accounts",
      "id": "ar_12345",
      "locked_at": "2026-01-15T10:30:00Z",
      "name": "My Action Run",
      "parent_component_id": "arc_12345",
      "parent_run_id": "ar_parent_12345",
      "recommended": true,
      "run_context": "<p>Hello</p>",
      "slug": "12345",
      "started_by": {
        "first_name": "John",
        "id": "u_12345",
        "last_name": "Doe"
      },
      "state_model": {
        "$schema": "https://example.com/schemas/ActionRunStateModelOutput.json",
        "created_at": "2026-01-15T10:30:00Z",
        "current_state": "draft",
        "current_state_display_color": "Neutral",
        "current_state_display_name": "Draft",
        "current_state_is_required": false,
        "data": {
          "key": {}
        },
        "id": "string",
        "schema_id": "string",
        "tracker": [
          {
            "display_color": "Neutral",
            "display_name": "Draft",
            "entered_at": "2026-01-15T10:30:00Z",
            "entered_by": {
              "email": {},
              "first_name": {},
              "id": {},
              "last_name": {},
              "middle_name": {}
            },
            "input": {
              "key": {}
            },
            "input_schema": [
              {}
            ],
            "is_final": false,
            "is_required": true,
            "state_name": "draft",
            "status": "completed",
            "transition_key": "approve"
          }
        ],
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "status": "in_progress",
      "status_tracker": [
        {
          "ReviewTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          },
          "SubmitTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          }
        }
      ],
      "tasks_data": [
        {
          "data": {
            "key": {
              "label": {},
              "value": {}
            }
          },
          "id": "t_12345",
          "name": "Customer Details"
        }
      ],
      "tenant_id": "t_67890",
      "type": "action_component_data"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/accept - action-run-accept-recommendation

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/blueprint-version - action-run-blueprint-version-reassign

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/client-organisation - action-run-client-organisation-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/comments - action-run-comments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetActionRunCommentsOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            {
              "first_name": "John",
              "id": "ag_123",
              "last_name": "Doe"
            },
            {
              "first_name": "Jane",
              "id": "ag_456",
              "last_name": "Smith"
            }
          ],
          "text": "This is a comment",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/components/{component_id}/generators/{field_path}/tree - action-run-component-generator-tree

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GeneratorComponentTreeBody.json",
      "action_run_id": "string",
      "child_runs": [
        {
          "action_run_id": "string",
          "blueprint_id": "string",
          "child_runs": [
            {
              "action_run_id": {},
              "blueprint_id": {},
              "child_runs": {},
              "components": {},
              "name": {},
              "status": {}
            }
          ],
          "components": [
            {
              "component_id": {},
              "component_key": {},
              "component_name": {},
              "component_type": {},
              "form_id": {},
              "form_schema": {},
              "generator_children": {},
              "status": {},
              "tag": {},
              "task_data": {}
            }
          ],
          "name": "string",
          "status": "processing"
        }
      ],
      "component_id": "string",
      "component_key": "string",
      "field_path": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/context - action-run-context-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/data-snapshots/current - action-run-current-data-snapshot-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunCurrentDataSnapshotGetOutputBody.json",
      "data": {
        "key": {}
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/name - action-run-name-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments - action-run-pre-assignments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunPreAssignmentsGetOutputBody.json",
      "pre_assignments": [
        {
          "$schema": "https://example.com/schemas/PreAssignmentResponse.json",
          "assigned_agent_id": "ag_456",
          "can_assign": true,
          "count": 15,
          "created_at": "2026-01-15T10:30:00Z",
          "id": "pa_123",
          "roles": [
            "Admin",
            "Advisor"
          ],
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments/{pre_assignment_id}/assign - action-run-pre-assignment-assign

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PreAssignmentResponse.json",
      "assigned_agent_id": "ag_456",
      "can_assign": true,
      "count": 15,
      "created_at": "2026-01-15T10:30:00Z",
      "id": "pa_123",
      "roles": [
        "Admin",
        "Advisor"
      ],
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/reassign - action-run-reassign

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTasksBulkAssignOutputBody.json",
      "failed_tasks": [
        {
          "reason": "Permission denied",
          "task_id": "task_123"
        }
      ],
      "successful_task_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/reject - action-run-reject-recommendation

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/request-cancel - action-run-request-cancel

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunRequestCancelOutputBody.json",
      "user_tasks_map": {
        "agent_1234": [
          "task_id_1",
          "task_id_2"
        ]
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/schedule - action-run-schedule-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/state-model/advance - action-run-state-model-advance

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunStateModelOutput.json",
      "created_at": "2026-01-15T10:30:00Z",
      "current_state": "draft",
      "current_state_display_color": "Neutral",
      "current_state_display_name": "Draft",
      "current_state_is_required": false,
      "data": {
        "key": {}
      },
      "id": "string",
      "schema_id": "string",
      "tracker": [
        {
          "display_color": "Neutral",
          "display_name": "Draft",
          "entered_at": "2026-01-15T10:30:00Z",
          "entered_by": {
            "email": "john.doe@example.com",
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe",
            "middle_name": "string"
          },
          "input": {
            "key": {}
          },
          "input_schema": [
            {
              "description": {},
              "enum_values": {},
              "key": {},
              "label": {},
              "required": {},
              "type": {}
            }
          ],
          "is_final": false,
          "is_required": true,
          "state_name": "draft",
          "status": "completed",
          "transition_key": "approve"
        }
      ],
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/state-model/transitions - action-run-state-model-transitions-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunStateModelTransitionsGetOutputBody.json",
      "current_state": "draft",
      "current_state_display_color": "Neutral",
      "current_state_display_name": "Draft",
      "current_state_is_final": false,
      "transitions": [
        {
          "condition_satisfied": true,
          "display_name": "Accept",
          "input_schema": [
            {
              "description": {},
              "enum_values": {},
              "key": {},
              "label": {},
              "required": {},
              "type": {}
            }
          ],
          "key": "approve",
          "to_state": "approved",
          "to_state_display_color": "Positive",
          "to_state_display_name": "Approved",
          "to_state_is_final": true,
          "to_state_is_required": false
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/status-logs - action-run-status-logs

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunStatusLogsOutputBody.json",
      "logs": [
        {
          "changed_by": "string",
          "custom_status": "string",
          "event_type": "string",
          "id": "string",
          "metadata": {
            "key": {}
          },
          "old_custom_status": "string",
          "old_status": "string",
          "run_id": "string",
          "status": "string",
          "tenant_id": "string",
          "time": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/approve - action-run-task-approve

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/assign - action-run-task-assign

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/cancel - action-run-task-cancel-confirm

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/change-next-step-date - action-run-task-next-step-date-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/claim - action-run-task-claim

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/cron-job-queued - action-run-task-cron-job-queued-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/reject - action-run-task-reject

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/render - action-run-task-render

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionFormTaskRenderDescription.json",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "custom_javascript": "string",
      "custom_javascript_execute_on_load": true,
      "custom_javascript_functions": "string",
      "custom_javascript_triggering_fields": [
        "string"
      ],
      "default_input_mapping": {
        "key": {}
      },
      "default_output_mapping": {
        "key": {}
      },
      "description": "This is my form",
      "dynamic_field_config": {
        "key": {
          "child_form_javascript": {
            "key": {}
          },
          "e_signature_mappings": {
            "key": {}
          },
          "endpoint_id": "string",
          "no_results_message": "string",
          "output_key": "string",
          "payload_fields": {
            "key": {}
          },
          "pdf_preview_payloads": {
            "key": {}
          },
          "selector_field": "string"
        }
      },
      "embedded_js": [
        {
          "custom_javascript": "string",
          "custom_javascript_functions": "string",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "prefix": "string",
          "triggering_fields": [
            "string"
          ]
        }
      ],
      "field_schema": {
        "additionalProperties": {
          "key": {}
        },
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "else": {
          "key": {}
        },
        "if": {
          "key": {}
        },
        "oneOf": [
          {}
        ],
        "properties": {
          "key": {}
        },
        "required": [
          {}
        ],
        "then": {
          "key": {}
        },
        "type": "string"
      },
      "graph_etag": "string",
      "id": "f_456",
      "imported_js_function_config": [
        {
          "key": {}
        }
      ],
      "is_reusable": true,
      "name": "My Form",
      "resolved_form_id": "string",
      "result_data": {
        "key": {}
      },
      "submission_restricted": false,
      "task_status": "todo",
      "task_type": "submission",
      "ui_schema": {
        "elements": [
          {}
        ],
        "options": {
          "key": {}
        },
        "type": "string"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/reopen - action-run-task-reopen

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/save - action-run-task-patch

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/save - action-run-task-save

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/schedule - action-run-task-schedule-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/start - action-run-task-start

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/submit - action-run-task-submit

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTaskSubmitOutputBody.json",
      "new_status": "pending_approval"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/waiting - action-run-task-update-waiting

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints - action-blueprint-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "ai_context_description": "AI-optimized customer onboarding workflow",
        "ai_description": "Process for onboarding new customers",
        "category": "onboarding",
        "created_at": "2023-04-01T12:00:00Z",
        "description": "Process for onboarding new customers",
        "draft_count": 2,
        "has_published_version": true,
        "id": "bp_12345",
        "is_ai_recommendable": false,
        "is_journey": false,
        "name": "Customer Onboarding",
        "short_description": "Quick onboarding flow",
        "tenant_id": "t_67890",
        "updated_at": "2023-04-02T15:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/blueprints - action-blueprint-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintCreateOutputBody.json",
      "base_version_id": "string",
      "blueprint_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} - action-blueprint-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} - action-blueprint-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintDescription.json",
      "ai_context_description": "AI-optimized customer onboarding workflow",
      "ai_description": "AI-optimized customer onboarding workflow",
      "category": "onboarding",
      "created_at": "2023-04-01T12:00:00Z",
      "deleted_at": "2023-04-02T15:30:00Z",
      "description": "Process for onboarding new customers",
      "environments": [
        {
          "environment": "production",
          "promotion_notes": "Tested in staging, ready for production",
          "tagged_at": "2023-04-01T12:00:00Z",
          "tagged_by_agent_id": "a_12345",
          "version": "v1.0.0"
        }
      ],
      "id": "bp_12345",
      "is_ai_recommendable": false,
      "is_journey": false,
      "name": "Customer Onboarding",
      "short_description": "short description",
      "tenant_id": "t_67890",
      "updated_at": "2023-04-02T15:30:00Z",
      "versions": [
        {
          "blueprint_id": "bp_12345",
          "components": [
            {
              "allowed_submission_states": {},
              "approval_auto_assign_config": {},
              "approval_required": {},
              "approval_roles": {},
              "approval_scheduled_delay": {},
              "approval_sla_duration": {},
              "approval_task_name": {},
              "auto_approve_condition": {},
              "auto_assign_config": {},
              "auto_submit_condition": {},
              "call_as_config": {},
              "child_components": {},
              "component_id": {},
              "component_key": {},
              "component_type": {},
              "config": {},
              "config_assignee": {},
              "data_promotion_config": {},
              "db_output_mapping": {},
              "dl_input_mapping": {},
              "dl_output_mapping": {},
              "dont_fail_on_non_200": {},
              "expression": {},
              "force_draft": {},
              "id": {},
              "input_mapping": {},
              "item_schema": {},
              "name": {},
              "output_mapping": {},
              "parent_promotion_fields": {},
              "permitted_roles": {},
              "prerequisites": {},
              "run_context": {},
              "run_name": {},
              "run_scheduled_at": {},
              "run_started_by_user": {},
              "scheduled_delay": {},
              "section_name": {},
              "skip_completion_wait": {},
              "sla_duration": {},
              "state_transition_rules": {},
              "synchronous_execution": {},
              "tags": {},
              "target_status": {},
              "task_name_override_expression": {},
              "task_tags": {}
            }
          ],
          "created_at": "2023-04-01T12:00:00Z",
          "custom_javascript_function_id": "cjsf_123",
          "custom_status_configuration": {},
          "id": "bpv_12345",
          "is_journey": false,
          "status": "draft",
          "tenant_id": "t_67890",
          "updated_at": "2023-04-02T15:30:00Z",
          "version_notes": "Initial version",
          "version_number": "v1.0.0"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} - action-blueprint-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/environments/history - blueprint-environment-history-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "blueprint_id": "bp_456",
        "blueprint_version_id": "bpv_789",
        "environment": "production",
        "id": "bve_12345",
        "promotion_notes": "Tested in staging, ready for production",
        "replaced_at": "2023-04-02T15:30:00Z",
        "tagged_at": "2023-04-01T12:00:00Z",
        "tagged_by_agent_email": "john.doe@example.com",
        "tagged_by_agent_id": "a_12345",
        "tenant_id": "t_67890"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/environments/{environment}/version - blueprint-environment-version-set

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/is-journey - action-blueprint-toggle-is-journey

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions - action-blueprint-version-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintVersionDescription.json",
      "blueprint_id": "bp_12345",
      "branches": [
        {
          "$schema": "https://example.com/schemas/ActionBranchDescription.json",
          "condition": {
            "left": {
              "object": "client",
              "property": "name",
              "type": "property"
            },
            "operator": "==",
            "right": {
              "type": "literal",
              "value": "John"
            },
            "type": "binary"
          },
          "created_at": "2024-10-29T11:22:33.027873-03:00",
          "created_by": "test@avantos.ai",
          "description": "Description for example branch",
          "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
          "name": "Dummy Branch",
          "tenant_id": "123",
          "updated_at": "2024-10-29T11:22:33.02018-03:00"
        }
      ],
      "components": [
        {
          "allowed_submission_states": [
            "string"
          ],
          "approval_auto_assign_config": {
            "form_field": "string",
            "form_key": "string",
            "type": "client_org_role",
            "value": "string"
          },
          "approval_required": false,
          "approval_roles": [
            "string"
          ],
          "approval_scheduled_delay": {
            "time": 3600,
            "unit": "minutes"
          },
          "approval_sla_duration": {
            "time": 3600,
            "unit": "minutes"
          },
          "approval_task_name": "string",
          "auto_approve_condition": {},
          "auto_assign_config": {
            "form_field": "string",
            "form_key": "string",
            "type": "client_org_role",
            "value": "string"
          },
          "auto_submit_condition": {},
          "call_as_config": {
            "form_field": "string",
            "form_key": "string",
            "type": "client_org_role",
            "value": "string"
          },
          "child_components": [
            "form-1",
            "form-2"
          ],
          "component_id": "f_12345",
          "component_key": "component-key-1",
          "component_type": "form",
          "config": "string",
          "config_assignee": "assignee@example.com",
          "data_promotion_config": {
            "key": "string"
          },
          "db_output_mapping": {
            "key": {
              "column": {},
              "record_id": {},
              "table": {},
              "validation": {}
            }
          },
          "dl_input_mapping": {
            "key": {
              "source": {},
              "type": {}
            }
          },
          "dl_output_mapping": {
            "key": {
              "source": {},
              "target": {},
              "type": {}
            }
          },
          "dont_fail_on_non_200": false,
          "expression": "{result: clientOrg.name + ' - ' + action.Status}",
          "force_draft": false,
          "id": "bp_c_12345",
          "input_mapping": {
            "key": {}
          },
          "item_schema": {},
          "name": "Customer Onboarding",
          "output_mapping": [
            {
              "child_component_key": {},
              "child_output_key": {},
              "parent_output_key": {}
            }
          ],
          "parent_promotion_fields": [
            "string"
          ],
          "permitted_roles": [
            "string"
          ],
          "prerequisites": [
            "string"
          ],
          "run_context": "Processing payment for order #123",
          "run_name": "Process Payment",
          "run_scheduled_at": "2023-04-01T12:00:00Z",
          "run_started_by_user": "example@email.com",
          "scheduled_delay": {
            "time": 3600,
            "unit": "minutes"
          },
          "section_name": "string",
          "skip_completion_wait": false,
          "sla_duration": {
            "time": 3600,
            "unit": "minutes"
          },
          "state_transition_rules": {
            "state_transition_rules_if": {},
            "state_transition_rules_then": "pending_approval"
          },
          "synchronous_execution": false,
          "tags": [
            "esign"
          ],
          "target_status": "complete",
          "task_name_override_expression": {},
          "task_tags": [
            "string"
          ]
        }
      ],
      "created_at": "2023-04-01T12:00:00Z",
      "custom_javascript_function_id": "cjsf_123",
      "custom_status_configuration": {},
      "forms": [
        {
          "$schema": "https://example.com/schemas/ActionFormDescription.json",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "custom_javascript": "string",
          "custom_javascript_execute_on_load": true,
          "custom_javascript_functions": "string",
          "custom_javascript_triggering_fields": [
            "string"
          ],
          "default_input_mapping": {
            "key": {}
          },
          "default_output_mapping": {
            "key": {}
          },
          "description": "This is my form",
          "dynamic_field_config": {
            "key": {
              "child_form_javascript": {},
              "e_signature_mappings": {},
              "endpoint_id": {},
              "no_results_message": {},
              "output_key": {},
              "payload_fields": {},
              "pdf_preview_payloads": {},
              "selector_field": {}
            }
          },
          "embedded_js": [
            {
              "custom_javascript": {},
              "custom_javascript_functions": {},
              "imported_js_function_config": {},
              "prefix": {},
              "triggering_fields": {}
            }
          ],
          "field_schema": {
            "additionalProperties": {
              "key": {}
            },
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "else": {
              "key": {}
            },
            "if": {
              "key": {}
            },
            "oneOf": [
              {}
            ],
            "properties": {
              "key": {}
            },
            "required": [
              {}
            ],
            "then": {
              "key": {}
            },
            "type": "string"
          },
          "id": "f_456",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "is_reusable": true,
          "name": "My Form",
          "ui_schema": {
            "elements": [
              {}
            ],
            "options": {
              "key": {}
            },
            "type": "string"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "id": "bpv_12345",
      "status": "draft",
      "tenant_id": "t_67890",
      "triggers": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "updated_at": "2023-04-02T15:30:00Z",
      "version_notes": "Initial version",
      "version_number": "v1.0.0"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id} - action-blueprint-version-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}/published - action-blueprint-version-published

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph - action-blueprint-graph-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintGraphDescription.json",
      "blueprint_id": "bp_12345",
      "blueprint_name": "Customer Onboarding",
      "branches": [
        {
          "$schema": "https://example.com/schemas/ActionBranchDescription.json",
          "condition": {
            "left": {
              "object": "client",
              "property": "name",
              "type": "property"
            },
            "operator": "==",
            "right": {
              "type": "literal",
              "value": "John"
            },
            "type": "binary"
          },
          "created_at": "2024-10-29T11:22:33.027873-03:00",
          "created_by": "test@avantos.ai",
          "description": "Description for example branch",
          "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
          "name": "Dummy Branch",
          "tenant_id": "123",
          "updated_at": "2024-10-29T11:22:33.02018-03:00"
        }
      ],
      "component_task_priorities": {
        "form-1": "high",
        "form-2": "low"
      },
      "custom_javascript_function_id": "cjsf_123",
      "custom_status_configuration": {},
      "edges": [
        {
          "source": "string",
          "target": "string"
        }
      ],
      "forms": [
        {
          "$schema": "https://example.com/schemas/ActionFormDescription.json",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "custom_javascript": "string",
          "custom_javascript_execute_on_load": true,
          "custom_javascript_functions": "string",
          "custom_javascript_triggering_fields": [
            "string"
          ],
          "default_input_mapping": {
            "key": {}
          },
          "default_output_mapping": {
            "key": {}
          },
          "description": "This is my form",
          "dynamic_field_config": {
            "key": {
              "child_form_javascript": {},
              "e_signature_mappings": {},
              "endpoint_id": {},
              "no_results_message": {},
              "output_key": {},
              "payload_fields": {},
              "pdf_preview_payloads": {},
              "selector_field": {}
            }
          },
          "embedded_js": [
            {
              "custom_javascript": {},
              "custom_javascript_functions": {},
              "imported_js_function_config": {},
              "prefix": {},
              "triggering_fields": {}
            }
          ],
          "field_schema": {
            "additionalProperties": {
              "key": {}
            },
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "else": {
              "key": {}
            },
            "if": {
              "key": {}
            },
            "oneOf": [
              {}
            ],
            "properties": {
              "key": {}
            },
            "required": [
              {}
            ],
            "then": {
              "key": {}
            },
            "type": "string"
          },
          "id": "f_456",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "is_reusable": true,
          "name": "My Form",
          "ui_schema": {
            "elements": [
              {}
            ],
            "options": {
              "key": {}
            },
            "type": "string"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "nodes": [
        {
          "data": {
            "allowed_submission_states": [
              {}
            ],
            "approval_auto_assign_config": {
              "form_field": {},
              "form_key": {},
              "type": {},
              "value": {}
            },
            "approval_required": false,
            "approval_roles": [
              {}
            ],
            "approval_scheduled_delay": {
              "time": 3600,
              "unit": "minutes"
            },
            "approval_sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "approval_task_name": "string",
            "auto_approve_condition": {},
            "auto_assign_config": {
              "form_field": {},
              "form_key": {},
              "type": {},
              "value": {}
            },
            "auto_submit_condition": {},
            "call_as_config": {
              "form_field": {},
              "form_key": {},
              "type": {},
              "value": {}
            },
            "child_components": [
              "form-1",
              "form-2"
            ],
            "component_id": "f_12345",
            "component_key": "component-key-1",
            "component_type": "form",
            "config": "string",
            "config_assignee": "assignee@example.com",
            "data_promotion_config": {
              "key": {}
            },
            "db_output_mapping": {
              "key": {}
            },
            "dl_input_mapping": {
              "key": {}
            },
            "dl_output_mapping": {
              "key": {}
            },
            "dont_fail_on_non_200": false,
            "expression": "{result: clientOrg.name + ' - ' + action.Status}",
            "force_draft": false,
            "id": "bp_c_12345",
            "input_mapping": {
              "key": {}
            },
            "item_schema": {},
            "name": "Customer Onboarding",
            "output_mapping": [
              {}
            ],
            "parent_promotion_fields": [
              {}
            ],
            "permitted_roles": [
              {}
            ],
            "prerequisites": [
              {}
            ],
            "run_context": "Processing payment for order #123",
            "run_name": "Process Payment",
            "run_scheduled_at": "2023-04-01T12:00:00Z",
            "run_started_by_user": "example@email.com",
            "scheduled_delay": {
              "time": 3600,
              "unit": "minutes"
            },
            "section_name": "string",
            "skip_completion_wait": false,
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "state_transition_rules": {
              "state_transition_rules_if": {},
              "state_transition_rules_then": {}
            },
            "synchronous_execution": false,
            "tags": [
              {}
            ],
            "target_status": "complete",
            "task_name_override_expression": {},
            "task_tags": [
              {}
            ]
          },
          "hidden": false,
          "id": "string",
          "position": {
            "x": 100,
            "y": 200
          },
          "type": "form"
        }
      ],
      "promoted_data_order": [
        "string"
      ],
      "state_model_schema": {
        "data_schema": {},
        "description": "string",
        "id": "string",
        "initial_state": "draft",
        "name": "LoanApplication",
        "states": [
          {
            "description": "string",
            "display_color": "Neutral",
            "display_name": "Draft",
            "is_final": false,
            "is_required": false,
            "metadata": {
              "key": {}
            },
            "name": "draft"
          }
        ],
        "transitions": [
          {
            "condition": {},
            "display_name": "Accept",
            "from_states": [
              "draft"
            ],
            "input_schema": [
              {}
            ],
            "key": "submit_application",
            "on_transition": {
              "update_data": {}
            },
            "priority": 0,
            "to_state": "submitted",
            "trigger": {
              "config": {},
              "type": {}
            }
          }
        ]
      },
      "status": "draft",
      "tenant_id": "t_67890",
      "triggers": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "version_id": "bpv_123",
      "version_notes": "Initial draft",
      "version_number": "v1.0.0"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph - action-blueprint-graph-put

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintGraphPutOutputBody.json",
      "id": "string",
      "new_components": {
        "key": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/components/branches - action-component-branch-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/ActionBranchDescription.json",
        "condition": {
          "left": {
            "object": "client",
            "property": "name",
            "type": "property"
          },
          "operator": "==",
          "right": {
            "type": "literal",
            "value": "John"
          },
          "type": "binary"
        },
        "created_at": "2024-10-29T11:22:33.027873-03:00",
        "created_by": "test@avantos.ai",
        "description": "Description for example branch",
        "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
        "name": "Dummy Branch",
        "tenant_id": "123",
        "updated_at": "2024-10-29T11:22:33.02018-03:00"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/branches - action-component-branch-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentBranchCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/components/branches/{branch_id} - action-component-branch-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBranchDescription.json",
      "condition": {
        "left": {
          "object": "client",
          "property": "name",
          "type": "property"
        },
        "operator": "==",
        "right": {
          "type": "literal",
          "value": "John"
        },
        "type": "binary"
      },
      "created_at": "2024-10-29T11:22:33.027873-03:00",
      "created_by": "test@avantos.ai",
      "description": "Description for example branch",
      "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
      "name": "Dummy Branch",
      "tenant_id": "123",
      "updated_at": "2024-10-29T11:22:33.02018-03:00"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/components/branches/{branch_id} - action-component-branch-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/forms - action-component-form-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentFormCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/forms/list - action-component-form-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentFormListOutputBody.json",
      "forms": [
        {
          "$schema": "https://example.com/schemas/ActionFormDescription.json",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "custom_javascript": "string",
          "custom_javascript_execute_on_load": true,
          "custom_javascript_functions": "string",
          "custom_javascript_triggering_fields": [
            "string"
          ],
          "default_input_mapping": {
            "key": {}
          },
          "default_output_mapping": {
            "key": {}
          },
          "description": "This is my form",
          "dynamic_field_config": {
            "key": {
              "child_form_javascript": {},
              "e_signature_mappings": {},
              "endpoint_id": {},
              "no_results_message": {},
              "output_key": {},
              "payload_fields": {},
              "pdf_preview_payloads": {},
              "selector_field": {}
            }
          },
          "embedded_js": [
            {
              "custom_javascript": {},
              "custom_javascript_functions": {},
              "imported_js_function_config": {},
              "prefix": {},
              "triggering_fields": {}
            }
          ],
          "field_schema": {
            "additionalProperties": {
              "key": {}
            },
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "else": {
              "key": {}
            },
            "if": {
              "key": {}
            },
            "oneOf": [
              {}
            ],
            "properties": {
              "key": {}
            },
            "required": [
              {}
            ],
            "then": {
              "key": {}
            },
            "type": "string"
          },
          "id": "f_456",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "is_reusable": true,
          "name": "My Form",
          "ui_schema": {
            "elements": [
              {}
            ],
            "options": {
              "key": {}
            },
            "type": "string"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionFormDescription.json",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "custom_javascript": "string",
      "custom_javascript_execute_on_load": true,
      "custom_javascript_functions": "string",
      "custom_javascript_triggering_fields": [
        "string"
      ],
      "default_input_mapping": {
        "key": {}
      },
      "default_output_mapping": {
        "key": {}
      },
      "description": "This is my form",
      "dynamic_field_config": {
        "key": {
          "child_form_javascript": {
            "key": {}
          },
          "e_signature_mappings": {
            "key": {}
          },
          "endpoint_id": "string",
          "no_results_message": "string",
          "output_key": "string",
          "payload_fields": {
            "key": {}
          },
          "pdf_preview_payloads": {
            "key": {}
          },
          "selector_field": "string"
        }
      },
      "embedded_js": [
        {
          "custom_javascript": "string",
          "custom_javascript_functions": "string",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "prefix": "string",
          "triggering_fields": [
            "string"
          ]
        }
      ],
      "field_schema": {
        "additionalProperties": {
          "key": {}
        },
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "else": {
          "key": {}
        },
        "if": {
          "key": {}
        },
        "oneOf": [
          {}
        ],
        "properties": {
          "key": {}
        },
        "required": [
          {}
        ],
        "then": {
          "key": {}
        },
        "type": "string"
      },
      "id": "f_456",
      "imported_js_function_config": [
        {
          "key": {}
        }
      ],
      "is_reusable": true,
      "name": "My Form",
      "ui_schema": {
        "elements": [
          {}
        ],
        "options": {
          "key": {}
        },
        "type": "string"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-update-details

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/forms/{form_id}/clone - action-component-form-clone

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentFormCloneOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/components/forms/{form_id}/custom-javascript - action-component-form-update-custom-javascript

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/{action_blueprint_id}/client-organisations/{client_organization_id}/configuration/render - action-run-configuration-render

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionFormRenderDescription.json",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "custom_javascript": "string",
      "custom_javascript_execute_on_load": true,
      "custom_javascript_functions": "string",
      "custom_javascript_triggering_fields": [
        "string"
      ],
      "default_input_mapping": {
        "key": {}
      },
      "default_output_mapping": {
        "key": {}
      },
      "description": "This is my form",
      "dynamic_field_config": {
        "key": {
          "child_form_javascript": {
            "key": {}
          },
          "e_signature_mappings": {
            "key": {}
          },
          "endpoint_id": "string",
          "no_results_message": "string",
          "output_key": "string",
          "payload_fields": {
            "key": {}
          },
          "pdf_preview_payloads": {
            "key": {}
          },
          "selector_field": "string"
        }
      },
      "embedded_js": [
        {
          "custom_javascript": "string",
          "custom_javascript_functions": "string",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "prefix": "string",
          "triggering_fields": [
            "string"
          ]
        }
      ],
      "field_schema": {
        "additionalProperties": {
          "key": {}
        },
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "else": {
          "key": {}
        },
        "if": {
          "key": {}
        },
        "oneOf": [
          {}
        ],
        "properties": {
          "key": {}
        },
        "required": [
          {}
        ],
        "then": {
          "key": {}
        },
        "type": "string"
      },
      "id": "f_456",
      "imported_js_function_config": [
        {
          "key": {}
        }
      ],
      "is_reusable": true,
      "name": "My Form",
      "result_data": {
        "key": {}
      },
      "ui_schema": {
        "elements": [
          {}
        ],
        "options": {
          "key": {}
        },
        "type": "string"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/admin/api-token-roles - admin-api-token-roles-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenRoleListOutputBody.json",
      "roles": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/admin/api-tokens - admin-api-tokens-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenListOutputBody.json",
      "data": [
        {
          "$schema": "https://example.com/schemas/APITokenListItemOutput.json",
          "auth_method": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "expires_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "is_active": true,
          "last_used_at": "2026-01-15T10:30:00Z",
          "name": "string",
          "role": "string",
          "scope_type": "string",
          "token_id": "string",
          "token_id_prefix": "string",
          "trigger_grants": [
            {
              "grant_target_id": {},
              "grant_type": {}
            }
          ]
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/admin/api-tokens - admin-api-tokens-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenCreateOutputBody.json",
      "auth_method": "string",
      "created_at": "2026-01-15T10:30:00Z",
      "expires_at": "2026-01-15T10:30:00Z",
      "id": "string",
      "name": "string",
      "role": "string",
      "scope_type": "string",
      "token": "string",
      "token_id": "string",
      "trigger_grants": [
        {
          "grant_target_id": "string",
          "grant_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/admin/api-tokens/{token_id} - admin-api-tokens-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenDeleteOutputBody.json",
      "message": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/admin/api-tokens/{token_id} - admin-api-tokens-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenListItemOutput.json",
      "auth_method": "string",
      "created_at": "2026-01-15T10:30:00Z",
      "expires_at": "2026-01-15T10:30:00Z",
      "id": "string",
      "is_active": true,
      "last_used_at": "2026-01-15T10:30:00Z",
      "name": "string",
      "role": "string",
      "scope_type": "string",
      "token_id": "string",
      "token_id_prefix": "string",
      "trigger_grants": [
        {
          "grant_target_id": "string",
          "grant_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/admin/datadog/logs - admin-datadog-logs-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DatadogLogsGetOutputBody.json",
      "logs": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-business-group-roles - agent-business-group-role-list-by-type-and-name

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "agent_external_id": "ag_123",
        "agent_id": "ag_123",
        "agent_role": "Director",
        "business_group_id": "bg_123",
        "business_group_name": "Region 1",
        "business_group_status": "active",
        "business_group_type": "region",
        "first_name": "John",
        "last_name": "Doe",
        "relationship_created_at": "2024-01-01T09:00:00Z",
        "relationship_description": "This is the first region.",
        "relationship_updated_at": "2024-01-01T09:00:00Z",
        "tenant_id": "t_123"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations - agent-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationListOutputBody.json",
      "organisations": [
        {
          "agent_organisation_role": "Advisor",
          "agent_organisation_type": "Corporation",
          "created_at": "2023-04-01T12:00:00Z",
          "description": "A leading advisory firm specializing in wealth management",
          "external_id": "ext_123456",
          "extra_properties": {
            "employees": "50",
            "licenses": "Series 7, Series 66",
            "specialty": "Wealth Management"
          },
          "id": "ao_123456",
          "name": "Acme Advisors",
          "parent_id": "ao_987654",
          "status": "Active",
          "tenant_id": "tenant_789",
          "updated_at": "2023-04-15T09:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agent-organisations - agent-organisation-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/addresses - agent-organisation-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationAddressListOutputBody.json",
      "addresses": [
        {
          "address_id": "string",
          "address_line_1": "string",
          "address_line_2": "string",
          "address_type": "string",
          "city": "string",
          "country": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "description": "string",
          "entity_id": "string",
          "entity_type": "string",
          "state": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/addresses - agent-organisation-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateAgentOrganisationAddressOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/agents - agent-organisation-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationAgentListOutputBody.json",
      "agents": [
        {
          "active": true,
          "additional_attributes": "string",
          "advisor_identification": "string",
          "agent_id": "string",
          "compliance_record": "string",
          "contacts": {
            "key": {
              "type": {},
              "value": {}
            }
          },
          "created_at": "2026-01-15T10:30:00Z",
          "date_of_birth": "string",
          "external_id": "string",
          "first_name": "string",
          "gender": "string",
          "idp_subject": "string",
          "last_name": "string",
          "license": "string",
          "manager_id": "string",
          "marital_status": "string",
          "middle_name": "string",
          "nationality": "string",
          "organisation_id": "string",
          "person_id": "string",
          "preferred_contact_method": "string",
          "qualification": "string",
          "regulatory_status": "string",
          "relationship_extra_properties": {
            "key": "string"
          },
          "relationship_type": "string",
          "specialization": "string",
          "ssn": "string",
          "suffix": "string",
          "tenant_id": "string",
          "title": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "years_of_experience": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/client-organisations - agent-organisation-client-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationClientOrganisationListOutputBody.json",
      "organisations": [
        {
          "client_organisation_role": "string",
          "client_organisation_type": "string",
          "description": "string",
          "id": "string",
          "name": "string",
          "relationship_status": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/contacts - agent-organisation-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/contacts - agent-organisation-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{id} - agent-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationGetOutputBody.json",
      "agent_organisation": {
        "agent_organisation_role": "Advisor",
        "agent_organisation_type": "Corporation",
        "created_at": "2023-04-01T12:00:00Z",
        "description": "A leading advisory firm specializing in wealth management",
        "external_id": "ext_123456",
        "extra_properties": {
          "employees": "50",
          "licenses": "Series 7, Series 66",
          "specialty": "Wealth Management"
        },
        "id": "ao_123456",
        "name": "Acme Advisors",
        "parent_id": "ao_987654",
        "status": "Active",
        "tenant_id": "tenant_789",
        "updated_at": "2023-04-15T09:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents - agent-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentCreateOutputBody.json",
      "id": "agent_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents-list - agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentListOutputBody.json",
      "agents": [
        {
          "active": true,
          "agent_id": "ag_123456",
          "email": "john.doe@example.com",
          "external_id": "ext_789",
          "firstname": "John",
          "idp_subject": "auth0|123456",
          "lastname": "Doe",
          "manager_id": "ag_789",
          "type": "Financial Advisor"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/id-by-external-id - agent-id-by-external-id

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetAgentIDByExternalIDOutputBody.json",
      "agent_id": "ag_789",
      "email": "john.doe@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "middle_name": "Doe"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/oauth-tokens - agent-oauth-token-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOauthTokensListOutputBody.json",
      "tokens": [
        {
          "$schema": "https://example.com/schemas/AgentOauthTokenResponse.json",
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          "accounts": [
            {
              "account_id": {},
              "account_name": {},
              "base_uri": {},
              "is_default": {}
            }
          ],
          "agent_id": "ag_123",
          "created_at": "2024-01-01T00:00:00Z",
          "expires_at": "2024-01-01T01:00:00Z",
          "external_id": "user@example.com",
          "id": "aot_01k4q8ef9zfmxsh3j80jhs8zky",
          "provider": "docusign",
          "refresh_token_expires_at": "2024-01-31T00:55:00Z",
          "tenant_id": "test-tenant",
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/oauth-tokens - agent-oauth-token-create

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/reconnect - agent-oauth-token-reconnect

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/refresh - agent-oauth-token-refresh

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOauthTokenResponse.json",
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "accounts": [
        {
          "account_id": "abc123",
          "account_name": "Production Account",
          "base_uri": "https://demo.docusign.net",
          "is_default": true
        }
      ],
      "agent_id": "ag_123",
      "created_at": "2024-01-01T00:00:00Z",
      "expires_at": "2024-01-01T01:00:00Z",
      "external_id": "user@example.com",
      "id": "aot_01k4q8ef9zfmxsh3j80jhs8zky",
      "provider": "docusign",
      "refresh_token_expires_at": "2024-01-31T00:55:00Z",
      "tenant_id": "test-tenant",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/remove - agent-oauth-token-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/search - agent-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentSearchOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "results": [
        {
          "agent_external_id": "ext_agent_456",
          "agent_id": "agent_123",
          "agent_type": "advisor",
          "all_client_organisations": [
            {
              "client_organisation_role": {},
              "client_organisation_type": {},
              "description": {},
              "direct_assignment": {},
              "external_id": {},
              "id": {},
              "name": {},
              "relationship_type": {},
              "status": {}
            }
          ],
          "contacts": {
            "primary_email": {
              "role": "primary_email",
              "value": "john@example.com"
            }
          },
          "created_at": "2024-01-01T09:00:00Z",
          "first_name": "John",
          "last_name": "Doe",
          "primary_client_organisation_id": "org_123",
          "primary_client_organisation_name": "Acme Corp",
          "primary_relationship_type": "advisor",
          "suffix": "Jr.",
          "title": "Senior Advisor",
          "updated_at": "2024-01-01T09:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentAddressListOutputBody.json",
      "addresses": [
        {
          "AddressID": "string",
          "AddressLine1": "string",
          "AddressLine2": "string",
          "AddressType": "string",
          "City": "string",
          "Country": "string",
          "CreatedAt": "2026-01-15T10:30:00Z",
          "Description": "string",
          "EntityID": "string",
          "EntityType": "string",
          "State": "string",
          "UpdatedAt": "2026-01-15T10:30:00Z",
          "Zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateAgentAddressOutputBody.json",
      "id": "addr_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/UpdateAgentAddressOutputBody.json",
      "id": "addr_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes - advisor-repcode-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AdvisorRepcodeCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes/{repcode_id} - advisor-repcode-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AdvisorRepcodeGetOutputBody.json",
      "repcode": {
        "advisor_id": "string",
        "description": "string",
        "repcode_id": "string",
        "tenant_id": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/client-organisations - agent-client-organisation-relationship-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentClientOrganisationRelationshipListOutputBody.json",
      "client_organisations": [
        {
          "agent_id": "ag_123abc",
          "client_organisation_id": "org_123abc",
          "client_organisation_role": "Client",
          "client_organisation_type": "Corporation",
          "description": "A leading technology company",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "name": "Acme Corp",
          "parent_id": "org_123abc",
          "relationship_type": "Primary",
          "tenant_id": "tenant_123abc"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/client-relationships - agent-client-organisation-relationship-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentClientOrganisationRelationshipCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/agents/{agent_id}/client-relationships/{client_organisation_id}/{relationship_type} - agent-client-organisation-relationship-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/contacts - agent-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/contacts - agent-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/document - agent-document-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateDocumentCatalogEntryOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/documents - agent-documents-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetDocumentsOutputBody.json",
      "documents": [
        {
          "access_level": "private",
          "additional_attributes": {
            "department": "finance",
            "priority": "high"
          },
          "agent_id": "agent_123",
          "approved_by": "user_123",
          "client_id": "client_789",
          "created_at": "2024-01-15T14:30:00Z",
          "deleted_at": "2024-02-15T14:30:00Z",
          "description": "Client's 2023 tax return document",
          "document_status": "approved",
          "document_subtype": "2023 Tax Return",
          "document_type": "bank_statement",
          "external_id": "DOC-2024-01",
          "file_name": "tax_return_2023.pdf",
          "file_type": "pdf",
          "id": "doc_123",
          "rejection_reason": "Invalid format",
          "retention_policy": "5 years",
          "service_agreement_id": "sa_456",
          "storage_container": "my-document-bucket",
          "storage_mode": "PLATFORM_MANAGED",
          "storage_object_key": "clients/2024/doc.pdf",
          "storage_provider": "S3",
          "tenant_id": "tenant_456",
          "updated_at": "2024-01-15T14:30:00Z",
          "upload_date": "2024-01-15T14:30:00Z",
          "upload_status": "VERIFIED"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/meetings - meeting-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingAgentListOutputBody.json",
      "meetings": [
        {
          "$schema": "https://example.com/schemas/MeetingDescription.json",
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{id} - agent-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentGetOutputBody.json",
      "agent": {
        "active": true,
        "additional_attributes": {
          "key": "string"
        },
        "advisor_identification": "string",
        "compliance_record": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "external_id": "string",
        "id": "string",
        "license": "string",
        "manager_id": "string",
        "organisation_id": "string",
        "person": {
          "created_at": "2026-01-15T10:30:00Z",
          "date_of_birth": "2026-01-15T10:30:00Z",
          "external_id": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "marital_status": "string",
          "middle_name": "string",
          "nationality": "string",
          "preferred_contact_method": "string",
          "ssn": "string",
          "suffix": "string",
          "tenant_id": "string",
          "title": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        },
        "person_id": "string",
        "qualification": "string",
        "regulatory_status": "string",
        "specialization": "string",
        "tenant_id": "string",
        "type": "string",
        "updated_at": "2026-01-15T10:30:00Z",
        "years_of_experience": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/agents/{id} - agent-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentUpdateOutputBody.json",
      "id": "agent_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{id}/person-view - agent-person-view-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentPersonViewGetOutputBody.json",
      "agent": {
        "active": true,
        "additional_attributes": "string",
        "advisor_identification": "string",
        "agent_id": "string",
        "compliance_record": "string",
        "contacts": {
          "key": {
            "type": "string",
            "value": "string"
          }
        },
        "created_at": "2026-01-15T10:30:00Z",
        "date_of_birth": "string",
        "external_id": "string",
        "first_name": "string",
        "gender": "string",
        "idp_subject": "string",
        "last_name": "string",
        "license": "string",
        "manager_id": "string",
        "marital_status": "string",
        "middle_name": "string",
        "nationality": "string",
        "organisation_id": "string",
        "person_id": "string",
        "preferred_contact_method": "string",
        "qualification": "string",
        "regulatory_status": "string",
        "relationship_extra_properties": {
          "key": "string"
        },
        "relationship_type": "string",
        "specialization": "string",
        "ssn": "string",
        "suffix": "string",
        "tenant_id": "string",
        "title": "string",
        "type": "string",
        "updated_at": "2026-01-15T10:30:00Z",
        "years_of_experience": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/aggregate - object-aggregate-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ObjectAggregateOutputBody.json",
      "aggregate_result": 10
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/array-forms-config - array-forms-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ArrayFormsConfigDescription.json",
      "configs": [
        {
          "array_child_form_id": "f_456",
          "array_property_name": "array_property_name",
          "parent_task_form_id": "f_456"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/array-forms-config - array-forms-config-put

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/authorization - authorization-check

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/book-of-business - book-of-business

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BookOfBusinessOutputBody.json",
      "protection_pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "protection_policies": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "agent_organisation_external_id": "00057",
          "agent_organisation_id": "ao_123",
          "agent_organisation_name": "Howard J Elias Inc",
          "agents": [
            {
              "agent_external_id": {},
              "agent_id": {},
              "agent_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "carrier": "State Farm",
          "client_organisation_external_id": "SF-CO-001",
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "clients": [
            {
              "client_external_id": {},
              "client_id": {},
              "client_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "created_at": "2024-01-01T09:00:00Z",
          "effective_date": "2024-02-01T00:00:00Z",
          "external_id": "SF-POL-001",
          "face_amount": "250000.00",
          "id": "policy_123",
          "issue_date": "2024-01-15T00:00:00Z",
          "line_of_business": "Life",
          "policy_number": "POL-2024-001",
          "premium_amount": "500.00",
          "premium_frequency": "Monthly",
          "status": "Active",
          "subtype": "Term Life",
          "tenant_id": "t_123",
          "termination_date": "2054-02-01T00:00:00Z",
          "updated_at": "2024-01-15T14:30:00Z",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ],
      "summary": {
        "protection_lines_of_business": [
          "Life",
          "Annuity"
        ],
        "protection_policy_count": 11,
        "wealth_account_count": 50
      },
      "wealth_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
          "account_notes": "string",
          "account_number": "1234567890",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "50000.00",
          "beneficiary_first_name": "Alice",
          "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
          "beneficiary_last_name": "Smith",
          "cash_balance": "5000.00",
          "client_organisation_description": "string",
          "client_organisation_external_id": "co_123456",
          "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
          "client_organisation_name": "Smith Family Trust",
          "client_organisation_role": "beneficiary",
          "client_organisation_type": "family",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "USD",
          "custodian": "Fidelity",
          "external_id": "fa_123456",
          "model_portfolio": "Aggressive Growth",
          "name": "Retirement Account",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "John",
          "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
          "primary_owner_last_name": "Smith",
          "product_model": "Growth",
          "product_name": "Traditional IRA",
          "product_type": "IRA",
          "relationship_status": "Active",
          "rep_splits": [
            {
              "balance": {},
              "business_date": {},
              "currency": {},
              "writing_code": {}
            }
          ],
          "secondary_owner_first_name": "Jane",
          "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
          "secondary_owner_last_name": "Smith",
          "status": "active",
          "tax_status": "taxable"
        }
      ],
      "wealth_pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/book-of-business/summary - book-of-business-summary

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BookOfBusinessHouseholdSummaryAPI.json",
      "annualized_premium_disability": "48000.00",
      "annualized_premium_life": "125000.00",
      "annualized_premium_protection_split_adjusted": "109500.00",
      "annualized_premium_protection_total": "173000.00",
      "disability_household_count": 7,
      "fixed_annuity_household_count": 9,
      "household_count": 57,
      "life_household_count": 18,
      "pending_annuity_household_count": 4,
      "total_aum_wealth": "2500000.50",
      "total_clients_count": 44,
      "wealth_household_count": 41
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/business-groups - business-group-list-by-role

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/BusinessGroup.json",
        "additional_attributes": {
          "key": "value"
        },
        "agents": {
          "Director": {
            "agent_id": "ag_123",
            "first_name": "John",
            "last_name": "Doe"
          }
        },
        "created_at": "2024-01-01T09:00:00Z",
        "description": "This is the first region.",
        "external_id": "bg_123",
        "group_type": "region",
        "id": "bg_123",
        "name": "Region 1",
        "status": "active",
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/coverage-details/search - business-group-coverage-details-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SearchBusinessGroupCoverageDetailsOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "results": [
        {
          "agent_count": 5,
          "agents": {
            "advisor": [
              {
                "agent_id": "agent_123",
                "first_name": "John",
                "last_name": "Doe"
              },
              {
                "agent_id": "agent_456",
                "first_name": "Jane",
                "last_name": "Smith"
              }
            ]
          },
          "business_group_created_at": "2024-01-01T09:00:00Z",
          "business_group_description": "Geographic coverage for Northwest",
          "business_group_extra_properties": {
            "priority": "high"
          },
          "business_group_id": "bg_123",
          "business_group_name": "Northwest Region Team",
          "business_group_status": "active",
          "business_group_type": "geographic",
          "business_group_updated_at": "2024-01-01T09:00:00Z",
          "capacity_limit": 150,
          "client_organisation_count": 10,
          "coverage_description": "Northwest Region",
          "coverage_value": "northwest",
          "coverages": [
            {
              "coverage_id": "cov_001",
              "priority": 1,
              "value": "northeast"
            }
          ],
          "priority": 1
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/business-groups/coverage-lookups/summary - business-group-coverage-lookup-summary

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetBusinessGroupCoverageLookupSummaryOutputBody.json",
      "coverage_summaries": [
        {
          "business_groups": [
            {
              "agent_count": {},
              "business_group_external_id": {},
              "business_group_extra_properties": {},
              "business_group_id": {},
              "business_group_name": {},
              "capacity_limit": {},
              "client_count": {},
              "priority": {}
            }
          ],
          "category": "business_group_coverage",
          "coverage_description": "Northeast Region Coverage",
          "coverage_value": "Northeast",
          "lookup_id": "lookup_northeast",
          "team_count": 5,
          "total_agents": 45,
          "total_clients": 230
        }
      ],
      "totals": {
        "total_agents": 320,
        "total_clients": 1250,
        "total_lookups": 8,
        "total_teams": 45
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/find-by-coverage - business-groups-find-by-coverage

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "business_group_id": "bg_123",
        "business_group_name": "Northeast Team",
        "coverage_matches": [
          {
            "capacity_limit": 50,
            "coverage_lookup_id": "lkp_123",
            "coverage_value": "northeast",
            "priority": 1
          }
        ],
        "priority": 1
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/business-groups/{business_group_id} - business-group-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/business-groups/{business_group_id} - business-group-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BusinessGroupUpdateOutputBody.json",
      "id": "bg_01JGQK9X1ABCDEFGHIJKLMNOP"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/business-groups/{business_group_id}/coverage - business-group-coverage-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "business_group_id": "bg_123",
        "capacity_limit": 50,
        "coverage_description": "Northeast Region",
        "coverage_lookup_id": "lkp_123",
        "coverage_value": "northeast",
        "created_at": "2024-01-01T09:00:00Z",
        "id": "bgc_01JGQK9X1ABCDEFGHIJKLMNOP",
        "priority": 1,
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/{business_group_id}/coverage - business-group-coverage-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateBusinessGroupCoverageOutputBody.json",
      "id": "bgc_01JGQK9X1ABCDEFGHIJKLMNOP"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/{business_group_id}/members - business-group-add-member

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/business-groups/{business_group_id}/members/{agent_id}/roles/{role} - business-group-remove-member

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/cdc/pipeline-configs - cdc-pipeline-config-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/CDCPipelineConfigResponse.json",
        "config": {},
        "created_at": "2026-01-15T10:30:00Z",
        "has_credentials": true,
        "id": "string",
        "pipeline": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} - cdc-pipeline-config-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} - cdc-pipeline-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CDCPipelineConfigResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "has_credentials": true,
      "id": "string",
      "pipeline": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} - cdc-pipeline-config-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CDCPipelineConfigResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "has_credentials": true,
      "id": "string",
      "pipeline": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-component/jwt - client-component-jwt-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientComponentJWTOutputBody.json",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "url": "https://testapi.merceradvisors.com/api/v1/Identity/InitiateClientComponent?accessToken=..."
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/client-organisation-relationships/{relationship_id} - client-organisation-relationship-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/client-organisation-relationships/{relationship_id} - client-organisation-relationship-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/UpdateClientOrganisationRelationshipOutputBody.json",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations - client-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationListOutputBody.json",
      "organisations": [
        {
          "agent_organisation_id": "ao_246810",
          "agents": {
            "key": {}
          },
          "approx_aum": 1000000000,
          "client_organisation_role": "Primary Client",
          "client_organisation_type": "Corporation",
          "client_segmentation": "High Net Worth",
          "created_at": "2023-04-01T12:00:00Z",
          "description": "A leading technology company specializing in innovative solutions",
          "external_id": "ext_123456",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "growth_opportunity_next_step_date": "2023-05-01",
          "id": "co_123456",
          "last_interaction_date": "2024-03-15",
          "name": "Acme Corporation",
          "next_meeting": "2023-05-01",
          "notes": "Important client notes",
          "parent_id": "co_987654",
          "relationship_start_date": "2020-01-01",
          "relationship_status": "EXISTING",
          "tenant_id": "tenant_789",
          "updated_at": "2023-04-15T09:30:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations - client-organisation-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations-graph/{client_organisation_id} - client-organisation-graph-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationGraphDocument.json",
      "agent_organisation": {
        "agent_organisation_role": "string",
        "agent_organisation_type": "string",
        "id": "string",
        "name": "string"
      },
      "agents": {
        "key": {}
      },
      "client_addresses": {
        "key": {
          "key": {
            "address_line1": "string",
            "address_line2": "string",
            "city": "string",
            "country": "string",
            "state": "string",
            "updated_at": "2026-01-15T10:30:00Z",
            "zipcode": "string"
          }
        }
      },
      "client_organisation": {
        "approx_aum": 1.0,
        "client_organisation_role": "string",
        "client_organisation_type": "string",
        "client_segmentation": "string",
        "description": "string",
        "external_id": "string",
        "extra_properties": {
          "key": {}
        },
        "growth_opportunity_next_step_date": "2026-01-15T10:30:00Z",
        "id": "string",
        "is_mercer_employee": true,
        "name": "string",
        "national_css_coverage": true,
        "next_meeting": "2026-01-15T10:30:00Z",
        "relationship_status": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "clients": {
        "key": {
          "id": "string",
          "person": {
            "first_name": "string",
            "last_name": "string"
          },
          "role": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      },
      "document_revision": "string",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "string",
          "account_notes": "string",
          "account_number": "string",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "string",
          "beneficiary_first_name": "string",
          "beneficiary_id": "string",
          "beneficiary_last_name": "string",
          "cash_balance": "string",
          "client_organisation_description": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_role": "string",
          "client_organisation_type": "string",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "string",
          "custodian": "string",
          "external_id": "string",
          "model_portfolio": "string",
          "name": "string",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "string",
          "primary_owner_id": "string",
          "primary_owner_last_name": "string",
          "product_model": "string",
          "product_name": "string",
          "product_type": "string",
          "relationship_status": "string",
          "rep_splits": [
            {
              "balance": {},
              "business_date": {},
              "currency": {},
              "writing_code": {}
            }
          ],
          "secondary_owner_first_name": "string",
          "secondary_owner_id": "string",
          "secondary_owner_last_name": "string",
          "status": "string",
          "tax_status": "string",
          "tenant_id": "string"
        }
      ],
      "office": "string",
      "org_address_summary": {
        "key": {}
      },
      "org_contacts": [
        {
          "role": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "region": "string",
      "schema_version": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/client-organisations-graph/{client_organisation_id} - client-organisation-graph-patch

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationGraphDocument.json",
      "agent_organisation": {
        "agent_organisation_role": "string",
        "agent_organisation_type": "string",
        "id": "string",
        "name": "string"
      },
      "agents": {
        "key": {}
      },
      "client_addresses": {
        "key": {
          "key": {
            "address_line1": "string",
            "address_line2": "string",
            "city": "string",
            "country": "string",
            "state": "string",
            "updated_at": "2026-01-15T10:30:00Z",
            "zipcode": "string"
          }
        }
      },
      "client_organisation": {
        "approx_aum": 1.0,
        "client_organisation_role": "string",
        "client_organisation_type": "string",
        "client_segmentation": "string",
        "description": "string",
        "external_id": "string",
        "extra_properties": {
          "key": {}
        },
        "growth_opportunity_next_step_date": "2026-01-15T10:30:00Z",
        "id": "string",
        "is_mercer_employee": true,
        "name": "string",
        "national_css_coverage": true,
        "next_meeting": "2026-01-15T10:30:00Z",
        "relationship_status": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "clients": {
        "key": {
          "id": "string",
          "person": {
            "first_name": "string",
            "last_name": "string"
          },
          "role": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      },
      "document_revision": "string",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "string",
          "account_notes": "string",
          "account_number": "string",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "string",
          "beneficiary_first_name": "string",
          "beneficiary_id": "string",
          "beneficiary_last_name": "string",
          "cash_balance": "string",
          "client_organisation_description": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_role": "string",
          "client_organisation_type": "string",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "string",
          "custodian": "string",
          "external_id": "string",
          "model_portfolio": "string",
          "name": "string",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "string",
          "primary_owner_id": "string",
          "primary_owner_last_name": "string",
          "product_model": "string",
          "product_name": "string",
          "product_type": "string",
          "relationship_status": "string",
          "rep_splits": [
            {
              "balance": {},
              "business_date": {},
              "currency": {},
              "writing_code": {}
            }
          ],
          "secondary_owner_first_name": "string",
          "secondary_owner_id": "string",
          "secondary_owner_last_name": "string",
          "status": "string",
          "tax_status": "string",
          "tenant_id": "string"
        }
      ],
      "office": "string",
      "org_address_summary": {
        "key": {}
      },
      "org_contacts": [
        {
          "role": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "region": "string",
      "schema_version": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/access-check - client-organisation-access-check

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganizationAccessCheckOutputBody.json",
      "has_access": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/bulk-access-check - client-organisation-bulk-access-check

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganizationBulkAccessCheckOutputBody.json",
      "accessible_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/id-by-external-id - client-organisation-id-by-external-id

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetClientOrganisationIDByExternalIDOutputBody.json",
      "client_organisation_id": "co_789"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/markets - client-organisation-markets

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationMarketAggregationOutputBody.json",
      "markets": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/opportunities - client-org-opportunities-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgOpportunitiesListOutputBody.json",
      "opportunities": [
        {
          "amount": "1000000",
          "amount_transferred": "1000000",
          "category": "Expand",
          "client_organisation_external_id": "org_123abc",
          "client_organisation_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "client_organisation_growth_opportunity_next_step_date": "2024-12-31",
          "client_organisation_id": "org_123abc",
          "client_organisation_name": "Acme Inc.",
          "client_organisation_status": "prospect",
          "client_organisation_type": "prospect",
          "closed_amount": "1000000",
          "created_at": "2024-01-01T00:00:00Z",
          "description": "Potential investment in emerging markets",
          "expected_close_date": "2024-12-31",
          "expected_revenue": "1000000",
          "external_id": "opp_123",
          "extra_properties": {
            "platform": "Zoom",
            "recording_url": "https://example.com/recording"
          },
          "id": "opp_123abc",
          "import_type": "prospect",
          "is_closed": false,
          "lead_source": "prospect",
          "name": "New Investment Opportunity",
          "next_meeting_date": "2024-12-31",
          "next_step": "Schedule follow-up meeting",
          "next_step_date": "2024-12-31",
          "opportunity_type": "investment",
          "owner_id": "agent_123",
          "probability": 75.5,
          "probability_categorisation": "High",
          "prospective_external_id": "org_123abc",
          "prospective_id": "org_123abc",
          "prospective_name": "Acme Inc.",
          "prospective_type": "prospect",
          "record_type": "Historical_FSC_Advisory_Sales",
          "relationship_type": "prospect",
          "stage": "Identify",
          "stage_changed_date": "2024-01-15T00:00:00Z",
          "status": "open",
          "sub_category": "Manage Balance Sheet",
          "updated_at": "2024-01-01T00:00:00Z",
          "wealth_advisor_agent_id": "agent_123abc",
          "wealth_advisor_first_name": "John",
          "wealth_advisor_last_name": "Doe"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/opportunities-summary - client-org-opportunities-summary

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgOpportunitiesSummaryOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "relationship_summaries": [
        {
          "client_organisation_external_id": "ext_org123",
          "client_organisation_extra_properties": {
            "account_bridge": false,
            "ascend_eligible": true,
            "concentrated_positions": true,
            "excess_cash": true,
            "potential_qualified_purchaser": false
          },
          "client_organisation_id": "org123",
          "client_organisation_name": "Acme Corp",
          "client_organisation_type": "Pending NLC",
          "current_aum": "1500000.00",
          "market": "Northeast",
          "next_meeting_date": "2024-01-15T10:00:00Z",
          "next_step_date": "2024-01-20T00:00:00Z",
          "opportunity_ids": [
            "opp_123",
            "opp_456"
          ],
          "tenant_id": "tenant123",
          "total_active_amount": "750000.00",
          "total_deferred_amount": "250000.00",
          "wealth_advisor": {
            "agent_id": "agent123",
            "direct_assignment": true,
            "first_name": "John",
            "last_name": "Doe",
            "middle_name": "A"
          }
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/client-organisations/opportunities/{opportunity_id} - client-org-opportunity-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgOpportunityUpdateOutputBody.json",
      "id": "coo_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/tax-pods - client-organisation-tax-pods

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationTaxPodAggregationOutputBody.json",
      "tax_pods": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/teams/search - team-client-organisation-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SearchTeamsForClientOrganisationsOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "teams": [
        {
          "additional_properties": {
            "priority": "high"
          },
          "client_organisation_client_count": 15,
          "client_organisation_client_segmentation": "Premium",
          "client_organisation_external_id": "co_123",
          "client_organisation_extra_properties": {
            "priority": "high"
          },
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "created_at": "2024-01-01T09:00:00Z",
          "description": "Primary advisory team for the client",
          "id": "ta_123",
          "role": "primary_advisor",
          "team_additional_attributes": {
            "department": "advisory"
          },
          "team_description": "Financial advisory specialists",
          "team_group_type": "team",
          "team_id": "bg_123",
          "team_name": "Advisory Team",
          "team_status": "Active",
          "tenant_id": "t_123",
          "updated_at": "2024-01-01T09:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/addresses - client-organisation-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationAddressListOutputBody.json",
      "addresses": [
        {
          "address_id": "string",
          "address_line_1": "string",
          "address_line_2": "string",
          "address_type": "string",
          "city": "string",
          "country": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "description": "string",
          "entity_id": "string",
          "entity_type": "string",
          "state": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/addresses - client-organisation-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientOrganisationAddressOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections - client-organisation-connections-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetClientOrgClientOrgRelationshipsOutputBody.json",
      "relationships": [
        {
          "initiating_client_organisation_external_id": "string",
          "initiating_client_organisation_id": "string",
          "initiating_client_organisation_name": "string",
          "participating_client_organisation_external_id": "string",
          "participating_client_organisation_id": "string",
          "participating_client_organisation_name": "string",
          "relationship_category": "string",
          "relationship_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections - client-organisation-connection-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientOrganisationConnectionOutputBody.json",
      "connection_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections/{connection_id} - client-organisation-connection-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DeleteClientOrganisationConnectionOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/clients - client-organisation-client-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationClientListOutputBody.json",
      "clients": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "client_external_id": "string",
          "client_id": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "first_name": "string",
          "last_name": "string",
          "role": "string",
          "tenant_id": "string",
          "title": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/clients - client-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientCreateOutputBody.json",
      "id": "client_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/contacts - client-organisation-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/contacts - client-organisation-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/dashboard - relationship-dashboard-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipDashboardByIDOutputBody.json",
      "relationship": {
        "addresses": {
          "BILLING": {
            "city": "Anytown",
            "state": "CA"
          }
        },
        "agent_organisation_id": "org_456def",
        "agent_organisation_name": "XYZ Services",
        "agent_organisation_role": "Agent",
        "agent_organisation_type": "LLC",
        "agents": {
          "PRIMARY": {
            "first_name": "John",
            "last_name": "Doe"
          }
        },
        "approx_aum": 1000000,
        "aum": 1000000,
        "client_organisation_created_at": "2021-01-01T00:00:00Z",
        "client_organisation_description": "A leading technology company",
        "client_organisation_external_id": "org_123",
        "client_organisation_extra_properties": {
          "aum": 1000000000,
          "employees": 500,
          "industry": "Technology"
        },
        "client_organisation_growth_opportunity_next_step": "2024-12-31T00:00:00Z",
        "client_organisation_id": "org_123abc",
        "client_organisation_name": "Acme Corp",
        "client_organisation_role": "Client",
        "client_organisation_type": "Corporation",
        "client_organisation_updated_at": "2021-01-01T00:00:00Z",
        "client_relationship_status": "EXISTING",
        "client_segmentation": "High Net Worth",
        "last_interaction_date": "2024-03-15T00:00:00Z",
        "next_meeting": "2021-01-01T00:00:00Z",
        "office": "Example Office",
        "region": "Example Business Group",
        "relationship_start_date": "2020-01-01T00:00:00Z",
        "valuation": {
          "as_of_business_date": "2025-06-15",
          "authority": "source_asserted",
          "currency": "USD",
          "source_kind": "summary_balance",
          "source_system": "SALESFORCE",
          "total_amount": "2500000.50"
        }
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/financial-accounts - financial-accounts-by-client-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FinancialAccountsByClientOrganisationGetOutputBody.json",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
          "account_notes": "string",
          "account_number": "1234567890",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "50000.00",
          "beneficiary_first_name": "Alice",
          "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
          "beneficiary_last_name": "Smith",
          "cash_balance": "5000.00",
          "client_organisation_description": "string",
          "client_organisation_external_id": "co_123456",
          "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
          "client_organisation_name": "Smith Family Trust",
          "client_organisation_role": "beneficiary",
          "client_organisation_type": "family",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "USD",
          "custodian": "Fidelity",
          "external_id": "fa_123456",
          "model_portfolio": "Aggressive Growth",
          "name": "Retirement Account",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "John",
          "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
          "primary_owner_last_name": "Smith",
          "product_model": "Growth",
          "product_name": "Traditional IRA",
          "product_type": "IRA",
          "relationship_status": "active",
          "secondary_owner_first_name": "Jane",
          "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
          "secondary_owner_last_name": "Smith",
          "status": "active",
          "tax_status": "taxable",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/policies - policies-by-client-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PoliciesByClientOrganisationGetOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "policies": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "agent_organisation_external_id": "00057",
          "agent_organisation_id": "ao_123",
          "agent_organisation_name": "Howard J Elias Inc",
          "agents": [
            {
              "agent_external_id": {},
              "agent_id": {},
              "agent_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "carrier": "State Farm",
          "client_organisation_external_id": "SF-CO-001",
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "clients": [
            {
              "client_external_id": {},
              "client_id": {},
              "client_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "created_at": "2024-01-01T09:00:00Z",
          "effective_date": "2024-02-01T00:00:00Z",
          "external_id": "SF-POL-001",
          "face_amount": "250000.00",
          "id": "policy_123",
          "issue_date": "2024-01-15T00:00:00Z",
          "line_of_business": "Life",
          "policy_number": "POL-2024-001",
          "premium_amount": "500.00",
          "premium_frequency": "Monthly",
          "status": "Active",
          "subtype": "Term Life",
          "tenant_id": "t_123",
          "termination_date": "2054-02-01T00:00:00Z",
          "updated_at": "2024-01-15T14:30:00Z",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/relationships - client-organisation-relationships-get-all

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetAllClientOrganisationRelationshipsOutputBody.json",
      "connected_clients": [
        {
          "addresses": [
            {
              "address_line1": {},
              "address_line2": {},
              "city": {},
              "country": {},
              "state": {},
              "zipcode": {}
            }
          ],
          "age": 30,
          "client_organisation_id": "org_123",
          "client_organisation_type": "Corporation",
          "client_segmentation": "High Net Worth",
          "connection_extra_properties": {
            "anniversary_date": "2015-06-20",
            "shared_accounts": "joint_checking"
          },
          "contacts": [
            {
              "role": {},
              "type": {},
              "value": {}
            }
          ],
          "current_employer": "Acme Inc.",
          "dob": "2021-01-01",
          "employment_status": "Employed",
          "external_id": "ext_123",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "first_name": "John",
          "gender": "Male",
          "id": "cli_123",
          "last_name": "Doe",
          "marital_status": "Married",
          "middle_name": "James",
          "name": "Acme Corp",
          "occupation": "Software Engineer",
          "preferred_name": "John",
          "raw_roles": "Spouse",
          "relationship_category": "client_relationships",
          "relationship_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "relationship_id": "rel_456",
          "role": "Primary Client",
          "ssn": "123-45-6789",
          "status": "Active",
          "subtype": "Client",
          "suffix": "Jr.",
          "title": "Mr."
        }
      ],
      "connected_organisations": [
        {
          "connection_extra_properties": {
            "ownership_percentage": "75.5",
            "voting_rights": "controlling"
          },
          "connection_id": "conn_456",
          "external_id": "ext_789",
          "id": "org_789",
          "name": "Globex Corp",
          "relationship_category": "organization_relationships",
          "role": "Primary Client"
        }
      ],
      "member_clients": [
        {
          "addresses": [
            {
              "address_line1": {},
              "address_line2": {},
              "city": {},
              "country": {},
              "state": {},
              "zipcode": {}
            }
          ],
          "age": 30,
          "client_organisation_id": "org_123",
          "client_organisation_type": "Corporation",
          "client_segmentation": "High Net Worth",
          "connection_extra_properties": {
            "anniversary_date": "2015-06-20",
            "shared_accounts": "joint_checking"
          },
          "contacts": [
            {
              "role": {},
              "type": {},
              "value": {}
            }
          ],
          "current_employer": "Acme Inc.",
          "dob": "2021-01-01",
          "employment_status": "Employed",
          "external_id": "ext_123",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "first_name": "John",
          "gender": "Male",
          "id": "cli_123",
          "last_name": "Doe",
          "marital_status": "Married",
          "middle_name": "James",
          "name": "Acme Corp",
          "occupation": "Software Engineer",
          "preferred_name": "John",
          "raw_roles": "Spouse",
          "relationship_category": "client_relationships",
          "relationship_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "relationship_id": "rel_456",
          "role": "Primary Client",
          "ssn": "123-45-6789",
          "status": "Active",
          "subtype": "Client",
          "suffix": "Jr.",
          "title": "Mr."
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/rmds - rmd-list-by-client-organisation

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListRMDsByClientOrganisationIDOutputBody.json",
      "rmds": [
        {
          "assigned_agent_first_name": "string",
          "assigned_agent_last_name": "string",
          "assigned_to_id": "string",
          "client_first_name": "string",
          "client_id": "string",
          "client_last_name": "string",
          "client_organisation_name": "string",
          "client_organisation_status": "string",
          "client_organisation_type": "string",
          "client_organization_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "details": "string",
          "distribution_source": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "federal_withholding_pct": "string",
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "financial_account_status": "string",
          "first_year": true,
          "id": "string",
          "life_expectancy_factor": "string",
          "next_step_date": "2026-01-15T10:30:00Z",
          "outside_account_number": "string",
          "prior_year_end_balance": "string",
          "relationship_status": "string",
          "remaining_amount": "string",
          "required_amount": "string",
          "rmd_year": "string",
          "state_withholding_pct": "string",
          "status": "string",
          "ten_year_required": true,
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "ytd_distributions": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/sloas - sloa-list-by-client-organisation

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListSLOASbyClientOrganisationIDOutputBody.json",
      "sloas": [
        {
          "bank_account_name": "string",
          "bank_account_no": "string",
          "bank_name": "string",
          "bank_routing_no": "string",
          "check_payable_address": "string",
          "check_payable_to": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "custodian": "string",
          "direction": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "id": "string",
          "is_active": true,
          "name": "string",
          "non_related_address_ok": true,
          "status": "string",
          "tenant_id": "string",
          "third_party_account_no": "string",
          "third_party_address": "string",
          "third_party_name": "string",
          "third_party_not_affiliated": true,
          "transfer_channel": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/tax-filings - tax-filing-list-by-client-organisation

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListTaxFilingsByClientOrganisationIDOutputBody.json",
      "tax_filings": [
        {
          "adjusted_gross_income": "string",
          "advisor_review_needed": true,
          "agi": "string",
          "amended_return": true,
          "charitable_donations": "string",
          "client_organisation_external_id": "string",
          "client_organisation_extra_properties": {
            "key": "string"
          },
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_relationship_status": "string",
          "client_organisation_tax_assistant_email": "string",
          "client_organisation_tax_assistant_external_id": "string",
          "client_organisation_tax_assistant_first_name": "string",
          "client_organisation_tax_assistant_last_name": "string",
          "client_organisation_tax_assistant_title": "string",
          "client_organisation_tax_associate_email": "string",
          "client_organisation_tax_associate_external_id": "string",
          "client_organisation_tax_associate_first_name": "string",
          "client_organisation_tax_associate_last_name": "string",
          "client_organisation_tax_associate_title": "string",
          "client_organisation_tax_manager_email": "string",
          "client_organisation_tax_manager_external_id": "string",
          "client_organisation_tax_manager_first_name": "string",
          "client_organisation_tax_manager_last_name": "string",
          "client_organisation_tax_manager_title": "string",
          "completion_window": "string",
          "complexity_type": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "credits": "string",
          "date_filed": "2026-01-15T10:30:00Z",
          "deductions": "string",
          "document_due_date": "2026-01-15T10:30:00Z",
          "document_received_date": "2026-01-15T10:30:00Z",
          "e_file_authorization_date": "2026-01-15T10:30:00Z",
          "e_file_status": "string",
          "e_file_status_date": "2026-01-15T10:30:00Z",
          "effective_tax_rate": "string",
          "extension_filed": true,
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "filing_due_date": "2026-01-15T10:30:00Z",
          "filing_method": "string",
          "filing_status": "string",
          "final_year": true,
          "gifting": "string",
          "id": "string",
          "invoicing_method": "string",
          "marginal_tax_rate": "string",
          "organizer_sent": true,
          "organizer_sent_date": "2026-01-15T10:30:00Z",
          "payment_method": "string",
          "prepaid_taxes": "string",
          "reported_income": "string",
          "return_completion_date": "2026-01-15T10:30:00Z",
          "safe_harbor": "string",
          "service_offering": "string",
          "signature_preference": "string",
          "tax_associate_email": "string",
          "tax_associate_external_id": "string",
          "tax_associate_first_name": "string",
          "tax_associate_id": "string",
          "tax_associate_last_name": "string",
          "tax_fee": "string",
          "tax_filing_type": "string",
          "tax_liability": "string",
          "tax_manager_email": "string",
          "tax_manager_external_id": "string",
          "tax_manager_first_name": "string",
          "tax_manager_id": "string",
          "tax_manager_last_name": "string",
          "tax_professional_category": "string",
          "tax_return_status": "string",
          "tax_return_type": "string",
          "tax_service_type_1040": "string",
          "tax_services_final_year": true,
          "tax_support_specialist_email": "string",
          "tax_support_specialist_external_id": "string",
          "tax_support_specialist_first_name": "string",
          "tax_support_specialist_id": "string",
          "tax_support_specialist_last_name": "string",
          "tax_year": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams - team-client-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "additional_properties": {
          "priority": "high"
        },
        "client_organisation_client_count": 15,
        "client_organisation_client_segmentation": "Premium",
        "client_organisation_external_id": "co_123",
        "client_organisation_extra_properties": {
          "priority": "high"
        },
        "client_organisation_id": "co_123",
        "client_organisation_name": "Acme Corporation",
        "created_at": "2024-01-01T09:00:00Z",
        "description": "Primary advisory team for the client",
        "id": "ta_123",
        "role": "primary_advisor",
        "team_additional_attributes": {
          "department": "advisory"
        },
        "team_description": "Financial advisory specialists",
        "team_group_type": "team",
        "team_id": "bg_123",
        "team_name": "Advisory Team",
        "team_status": "Active",
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams - team-client-organisation-add

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AddTeamToClientOrganisationOutputBody.json",
      "message": "Team successfully assigned to client organisation",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams/{business_group_id} - team-client-organisation-remove

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RemoveTeamFromClientOrganisationOutputBody.json",
      "message": "Team successfully removed from client organisation",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{id} - client-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationGetOutputBody.json",
      "client_organisation": {
        "agent_organisation_id": "ao_246810",
        "agents": {
          "key": {}
        },
        "approx_aum": 1000000000,
        "client_organisation_role": "Primary Client",
        "client_organisation_type": "Corporation",
        "client_segmentation": "High Net Worth",
        "created_at": "2023-04-01T12:00:00Z",
        "description": "A leading technology company specializing in innovative solutions",
        "external_id": "ext_123456",
        "extra_properties": {
          "annual_revenue": "$500M",
          "employees": "5000",
          "industry": "Technology"
        },
        "growth_opportunity_next_step_date": "2023-05-01",
        "id": "co_123456",
        "last_interaction_date": "2024-03-15",
        "name": "Acme Corporation",
        "next_meeting": "2023-05-01",
        "notes": "Important client notes",
        "parent_id": "co_987654",
        "relationship_start_date": "2020-01-01",
        "relationship_status": "EXISTING",
        "tenant_id": "tenant_789",
        "updated_at": "2023-04-15T09:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/client-organisations/{id} - client-organisation-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationUpdateOutputBody.json",
      "id": "co_123456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-portal/jwt - client-portal-jwt-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientPortalJWTOutputBody.json",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "url": "https://api.merceradvisors.com/api/v1/Identity/SSOLogin/?accessToken=..."
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients - client-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientListByNamePhoneOrEmailOutputBody.json",
      "clients": [
        {
          "client_organisation_external_id": "ext_123456",
          "client_organisation_id": "co_123456",
          "client_organisation_name": "My organisation",
          "client_organisation_wealth_advisor_name": "John Doe",
          "external_id": "ext_123456",
          "id": "cl_123456",
          "name": "John Doe",
          "preferred_email": "john.doe@example.com",
          "preferred_phone": "1234567890"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients-organisations/{client_organisation_id}/agents - client-organisation-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationAgentListOutputBody.json",
      "assigned_agents": [
        {
          "agent": {
            "agent_id": "ag_123456",
            "external_id": "456",
            "first_name": "John",
            "last_name": "Doe",
            "primary_email": "string",
            "primary_phone": "string",
            "tenant_id": "ao_123456",
            "title": "Mr"
          },
          "assigned_role": "Primary Advisor",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          }
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/move - clients-batch-move

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientBatchMoveOutputBody.json",
      "results": [
        {
          "client_id": "string",
          "error": "string",
          "new_relationship_id": "string",
          "success": true
        }
      ],
      "summary": {
        "failed": 1,
        "successful": 1,
        "total_requested": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/search - clients-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientsSearchOutputBody.json",
      "clients": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "client_external_id": "string",
          "client_id": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "first_name": "string",
          "last_name": "string",
          "role": "string",
          "tenant_id": "string",
          "title": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/clients/{client_id} - client-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DeleteClientOutputBody.json",
      "id": "c_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientAddressListOutputBody.json",
      "addresses": [
        {
          "address_id": "string",
          "address_line1": "string",
          "address_line2": "string",
          "address_type": "string",
          "city": "string",
          "country": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "description": "string",
          "entity_id": "string",
          "entity_type": "string",
          "state": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientAddressOutputBody.json",
      "id": "addr_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/UpdateClientAddressOutputBody.json",
      "id": "addr_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/agents - client-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientAgentListOutputBody.json",
      "agents": [
        {
          "active": true,
          "additional_attributes": "string",
          "advisor_identification": "string",
          "agent_id": "string",
          "compliance_record": "string",
          "contacts": {
            "key": {
              "type": {},
              "value": {}
            }
          },
          "created_at": "2026-01-15T10:30:00Z",
          "date_of_birth": "string",
          "external_id": "string",
          "first_name": "string",
          "gender": "string",
          "idp_subject": "string",
          "last_name": "string",
          "license": "string",
          "manager_id": "string",
          "marital_status": "string",
          "middle_name": "string",
          "nationality": "string",
          "organisation_id": "string",
          "person_id": "string",
          "preferred_contact_method": "string",
          "qualification": "string",
          "regulatory_status": "string",
          "relationship_extra_properties": {
            "key": "string"
          },
          "relationship_type": "string",
          "specialization": "string",
          "ssn": "string",
          "suffix": "string",
          "tenant_id": "string",
          "title": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "years_of_experience": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/client-connections - client-connections-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetClientClientRelationshipsOutputBody.json",
      "relationships": [
        {
          "initiating_client_external_id": "string",
          "initiating_client_first_name": "string",
          "initiating_client_id": "string",
          "initiating_client_last_name": "string",
          "participating_client_external_id": "string",
          "participating_client_first_name": "string",
          "participating_client_id": "string",
          "participating_client_last_name": "string",
          "relationship_category": "string",
          "relationship_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/client-connections - client-connection-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientClientConnectionOutputBody.json",
      "connection_id": "connection_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/clients/{client_id}/client-connections/{connection_id} - client-connection-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DeleteClientClientConnectionOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/client-organisation-relationships - client-organisation-relationship-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationRelationshipCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/contacts - client-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/contacts - client-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/clients/{client_id}/contacts - client-contact-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/document - client-document-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateDocumentCatalogEntryOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/documents - client-documents-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetDocumentsOutputBody.json",
      "documents": [
        {
          "access_level": "private",
          "additional_attributes": {
            "department": "finance",
            "priority": "high"
          },
          "agent_id": "agent_123",
          "approved_by": "user_123",
          "client_id": "client_789",
          "created_at": "2024-01-15T14:30:00Z",
          "deleted_at": "2024-02-15T14:30:00Z",
          "description": "Client's 2023 tax return document",
          "document_status": "approved",
          "document_subtype": "2023 Tax Return",
          "document_type": "bank_statement",
          "external_id": "DOC-2024-01",
          "file_name": "tax_return_2023.pdf",
          "file_type": "pdf",
          "id": "doc_123",
          "rejection_reason": "Invalid format",
          "retention_policy": "5 years",
          "service_agreement_id": "sa_456",
          "storage_container": "my-document-bucket",
          "storage_mode": "PLATFORM_MANAGED",
          "storage_object_key": "clients/2024/doc.pdf",
          "storage_provider": "S3",
          "tenant_id": "tenant_456",
          "updated_at": "2024-01-15T14:30:00Z",
          "upload_date": "2024-01-15T14:30:00Z",
          "upload_status": "VERIFIED"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{id} - client-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientGetOutputBody.json",
      "client": {
        "additional_attributes": {
          "key": "string"
        },
        "addresses": [
          {
            "address_line1": "string",
            "address_line2": "string",
            "address_type": "string",
            "city": "string",
            "country": "string",
            "description": "string",
            "state": "string",
            "zipcode": "string"
          }
        ],
        "assets": "100000",
        "compliance_record": "1234567890",
        "contacts": [
          {
            "role": "string",
            "type": "string",
            "value": "string"
          }
        ],
        "created_at": "2023-01-01T00:00:00Z",
        "current_employer": "Acme Inc.",
        "date_of_birth": "2023-01-01",
        "documentation": "1234567890",
        "drivers_license_number": "1234567890",
        "employment_status": "Employed",
        "expected_retirement_age": 65,
        "external_id": "cl_123",
        "first_name": "John",
        "gender": "Male",
        "id": "123",
        "investment_goal": "Growth",
        "is_primary": true,
        "last_name": "Doe",
        "maiden_name": "Smith",
        "marital_status": "Single",
        "marketing_salutation": "Dear John",
        "middle_name": "Doe",
        "nationality": "American",
        "occupation": "Software Engineer",
        "officer_or_director": "Yes",
        "organisation_id": "123",
        "personal_interests": "Traveling, Reading",
        "preferred_contact_method": "Email",
        "preferred_name": "John",
        "retired": "Yes",
        "retirement_date": "2025-01-01",
        "role": "Client",
        "security_restrictions": "None",
        "ssn": "1234567890",
        "suffix": "Jr",
        "tenant_id": "123",
        "title": "Mr",
        "updated_at": "2023-01-01T00:00:00Z",
        "wedding_anniversary": "2025-01-01"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/clients/{id} - client-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientUpdateOutputBody.json",
      "id": "client_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/comments - comments-list-all

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CommentsListAllOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": "a_1938405",
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            "John Doe",
            "Jane Smith"
          ],
          "text": "This is a comment"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/comments/{entity}/{entity_id} - comment-add

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/component/jwt - component-jwt-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ComponentJWTOutputBody.json",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "url": "https://api.merceradvisors.com/api/v1/Identity/InitiateComponent?accessToken=..."
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/coverage/{coverage_id} - business-group-coverage-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/custodian-forms-config - custodian-forms-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustodianFormsConfigGetOutputBody.json",
      "child_forms": [
        {
          "display_condition": "true",
          "e_signature_mapping": "{\"signer_email\": \"data.email\"}",
          "form_id": "f_456",
          "payload_template_override": "{\"name\": \"John Doe\"}"
        }
      ],
      "envelope_metadata_endpoint_id": "e_456",
      "envelope_trigger_endpoint_id": "e_456",
      "l1_config_form_id": "f_456",
      "l2_config_form_id": "f_789",
      "preview_trigger_endpoint_id": "e_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/custodian-forms-config - custodian-forms-config-put

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/custom-javascript-functions - custom-javascript-functions-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomJavascriptFunctionsCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/custom-javascript-functions/list - custom-javascript-functions-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomJavascriptFunctionsListOutputBody.json",
      "functions": [
        {
          "$schema": "https://example.com/schemas/CustomJavascriptFunctionsDescription.json",
          "body": "function myFunc() { return 'Hello'; }",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "description": "A utility function for form validation",
          "execution_role": "Advisor",
          "id": "cjsf_1",
          "initiation": "const threshold = 0.5;",
          "name": "Global Functions",
          "request_keys": [
            "email",
            "name"
          ],
          "response_keys": [
            "userId",
            "status"
          ],
          "server_side_enabled": false,
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/custom-javascript-functions/{id} - custom-javascript-functions-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/custom-javascript-functions/{id} - custom-javascript-functions-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomJavascriptFunctionsDescription.json",
      "body": "function myFunc() { return 'Hello'; }",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "description": "A utility function for form validation",
      "execution_role": "Advisor",
      "id": "cjsf_1",
      "initiation": "const threshold = 0.5;",
      "name": "Global Functions",
      "request_keys": [
        "email",
        "name"
      ],
      "response_keys": [
        "userId",
        "status"
      ],
      "server_side_enabled": false,
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/custom-javascript-functions/{id} - custom-javascript-functions-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/debug/abac - abac-debug

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ABACDebugResult.json",
      "policy_breakdowns": [
        {
          "atomic_expressions": [
            {
              "count": {},
              "description": {},
              "expression": {},
              "sample_external_ids": {},
              "sql_query": {},
              "type": {}
            }
          ],
          "effect": "grant",
          "policy_name": "WealthAdvisor_MyClients_Grant",
          "total_contribution": 3
        }
      ],
      "summary": {
        "deny_exclusions": 2,
        "grant_contributions": 15,
        "total_accessible": 13,
        "total_atomic_expressions": 8,
        "total_policies": 4
      },
      "user_context": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations - document-storage-integration-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/DocumentStorageIntegrationResponse.json",
        "config": {},
        "created_at": "2026-01-15T10:30:00Z",
        "credentials": {},
        "enabled": true,
        "id": "string",
        "provider": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/document-storage/integrations/{provider} - document-storage-integration-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations/{provider} - document-storage-integration-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "id": "string",
      "provider": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/document-storage/integrations/{provider} - document-storage-integration-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "id": "string",
      "provider": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments - document-storage-integration-environment-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/DocumentStorageIntegrationEnvironmentResponse.json",
        "config": {},
        "created_at": "2026-01-15T10:30:00Z",
        "credentials": {},
        "enabled": true,
        "environment": "string",
        "id": "string",
        "integration_id": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} - document-storage-integration-environment-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} - document-storage-integration-environment-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationEnvironmentResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "environment": "string",
      "id": "string",
      "integration_id": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} - document-storage-integration-environment-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationEnvironmentResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "environment": "string",
      "id": "string",
      "integration_id": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/documents/{document_id} - document-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentGetOutputBody.json",
      "document": {
        "access_level": "private",
        "additional_attributes": {
          "department": "finance",
          "priority": "high"
        },
        "agent_id": "agent_123",
        "approved_by": "user_123",
        "client_id": "client_789",
        "created_at": "2024-01-15T14:30:00Z",
        "deleted_at": "2024-02-15T14:30:00Z",
        "description": "Client's 2023 tax return document",
        "document_status": "approved",
        "document_subtype": "2023 Tax Return",
        "document_type": "bank_statement",
        "external_id": "DOC-2024-01",
        "file_name": "tax_return_2023.pdf",
        "file_type": "pdf",
        "id": "doc_123",
        "rejection_reason": "Invalid format",
        "retention_policy": "5 years",
        "service_agreement_id": "sa_456",
        "storage_container": "my-document-bucket",
        "storage_mode": "PLATFORM_MANAGED",
        "storage_object_key": "clients/2024/doc.pdf",
        "storage_provider": "S3",
        "tenant_id": "tenant_456",
        "updated_at": "2024-01-15T14:30:00Z",
        "upload_date": "2024-01-15T14:30:00Z",
        "upload_status": "VERIFIED"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/email - email-send

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/entities/{entity}/{entity_id}/comments - entity-comments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetCommentsOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            {
              "first_name": "John",
              "id": "ag_123",
              "last_name": "Doe"
            },
            {
              "first_name": "Jane",
              "id": "ag_456",
              "last_name": "Smith"
            }
          ],
          "text": "This is a comment",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/environments/blueprints - environment-blueprint-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/EnvironmentBlueprintListOutputBody.json",
      "blueprints": [
        {
          "ai_context_description": "string",
          "ai_description": "string",
          "category": "onboarding",
          "created_at": "2023-04-01T12:00:00Z",
          "description": "Process for onboarding new customers",
          "id": "bp_12345",
          "is_ai_recommendable": false,
          "is_journey": false,
          "name": "Customer Onboarding",
          "short_description": "Quick onboarding flow",
          "tenant_id": "t_67890",
          "updated_at": "2023-04-02T15:30:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes - esignature-envelope-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeResponseBody.json",
      "envelope_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "status_datetime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/from-template - esignature-envelope-from-template-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeResponseBody.json",
      "envelope_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "status_datetime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id} - esignature-envelope-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeResponseBody.json",
      "envelope_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "status_datetime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/documents/delete - esignature-envelope-delete-documents

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/documents/update - esignature-envelope-update-documents

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/download - esignature-envelope-download

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeDownloadBody.json",
      "document_pdf_base64": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/recipients/delete - esignature-envelope-delete-recipients

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/recipients/update - esignature-envelope-update-recipients

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/status - esignature-envelope-status

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/templates - esignature-templates-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureTemplatesListBody.json",
      "templates": [
        {
          "created": "2024-01-15T10:30:00.0000000Z",
          "description": "Standard contract template",
          "last_modified": "2024-06-20T14:45:00.0000000Z",
          "name": "Contract Template",
          "template_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/templates/{template_id} - esignature-template-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/execute - trigger-execute

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerExecuteOutputBody.json",
      "mapped_data": {
        "key": "value"
      },
      "raw_data": "{\"key\":\"value\"}"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/experimental-household-member-recommendations/{client_id} - experimental-household-member-recommendations-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCGetHouseholdMemberRecommendationsOutputBody.json",
      "recommendations": [
        {
          "assets": "1500000.00",
          "client_id": "client_456",
          "contacts": [
            {
              "key": {}
            }
          ],
          "date_of_birth": "1985-03-20T00:00:00Z",
          "first_name": "Jane",
          "last_name": "Smith",
          "organisation_id": "org_789",
          "person_id": "person_101",
          "role": "Spouse",
          "shared_address": {
            "address_data": {
              "key": {}
            },
            "address_id": "addr_123",
            "address_line1": "123 Main St",
            "address_line2": "Apt 4B",
            "city": "New York",
            "country": "USA",
            "state": "NY",
            "zipcode": "10001"
          },
          "tenant_id": "vanguard"
        }
      ],
      "total_count": 1
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-households-ranking - experimental-household-ranking-trigger

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCHouseholdRankingOutputBody.json",
      "message": "string",
      "total_households": 1
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-households-ranking/list - experimental-household-ranking-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCHouseholdRankingListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "ranked_households": [
        {
          "additional_attributes": {
            "key": {}
          },
          "current_aum": 2500000.5,
          "household_members": [
            {
              "AdditionalAttributes": {},
              "Addresses": {},
              "Assets": {},
              "ClientID": {},
              "ClientOrganisationName": {},
              "ClientOrganisationType": {},
              "ClientSegmentation": {},
              "ComplianceRecord": {},
              "Contacts": {},
              "CurrentEmployer": {},
              "DateOfBirth": {},
              "Documentation": {},
              "DriversLicenseNumber": {},
              "EmploymentStatus": {},
              "ExpectedRetirementAge": {},
              "ExternalID": {},
              "FirstName": {},
              "Gender": {},
              "InvestmentGoal": {},
              "LastName": {},
              "MaidenName": {},
              "MaritalStatus": {},
              "MarketingSalutation": {},
              "MiddleName": {},
              "Nationality": {},
              "Occupation": {},
              "OfficerOrDirector": {},
              "OrganisationID": {},
              "PersonID": {},
              "PersonalInterests": {},
              "PreferredContactMethod": {},
              "PreferredName": {},
              "Retired": {},
              "RetirementDate": {},
              "Role": {},
              "SSN": {},
              "SecurityRestrictions": {},
              "Suffix": {},
              "TenantID": {},
              "Title": {},
              "WeddingAnniversary": {}
            }
          ],
          "number_of_days_in_backlog": 0,
          "primary_client": "John Doe",
          "promotion_status": "recommended",
          "rank": 1,
          "score": 0.75
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-onboarding - experimental-onboarding-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingWithProgress.json",
      "action_ids": [
        "string"
      ],
      "action_runs": {},
      "client_organisation_id": "string",
      "client_organisation_name": "string",
      "client_organisation_type": "string",
      "end_date": "2026-01-15T10:30:00Z",
      "id": "string",
      "primary_client_first_name": "string",
      "primary_client_id": "string",
      "primary_client_last_name": "string",
      "progress": {
        "completed_tasks": 1,
        "progress_percentage": 1.0,
        "status": "string",
        "total_tasks": 1
      },
      "relationship_description": "string",
      "relationship_id": "string",
      "relationship_role": "string",
      "started_at": "2026-01-15T10:30:00Z",
      "tenant_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-onboarding/list - experimental-onboarding-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingListOutputBody.json",
      "onboardings": [
        {
          "$schema": "https://example.com/schemas/VPOCOnboardingWithProgress.json",
          "action_ids": [
            "string"
          ],
          "action_runs": {},
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_type": "string",
          "end_date": "2026-01-15T10:30:00Z",
          "id": "string",
          "primary_client_first_name": "string",
          "primary_client_id": "string",
          "primary_client_last_name": "string",
          "progress": {
            "completed_tasks": 1,
            "progress_percentage": 1.0,
            "status": "string",
            "total_tasks": 1
          },
          "relationship_description": "string",
          "relationship_id": "string",
          "relationship_role": "string",
          "started_at": "2026-01-15T10:30:00Z",
          "tenant_id": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/experimental-onboarding/{onboarding_id} - experimental-onboarding-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingDeleteOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/experimental-onboarding/{onboarding_id} - experimental-onboarding-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingWithProgress.json",
      "action_ids": [
        "string"
      ],
      "action_runs": {},
      "client_organisation_id": "string",
      "client_organisation_name": "string",
      "client_organisation_type": "string",
      "end_date": "2026-01-15T10:30:00Z",
      "id": "string",
      "primary_client_first_name": "string",
      "primary_client_id": "string",
      "primary_client_last_name": "string",
      "progress": {
        "completed_tasks": 1,
        "progress_percentage": 1.0,
        "status": "string",
        "total_tasks": 1
      },
      "relationship_description": "string",
      "relationship_id": "string",
      "relationship_role": "string",
      "started_at": "2026-01-15T10:30:00Z",
      "tenant_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/feature-flags - feature-flags-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/FeatureFlag.json",
        "description": "Enables dark mode theme for the UI",
        "enabled": true,
        "enabled_agents": [
          "agent_123",
          "agent_456"
        ],
        "enabled_for_org": true,
        "key": "enable-dark-mode",
        "name": "Enable Dark Mode"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/feature-flags/{flag_key} - feature-flags-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FeatureFlag.json",
      "description": "Enables dark mode theme for the UI",
      "enabled": true,
      "enabled_agents": [
        "agent_123",
        "agent_456"
      ],
      "enabled_for_org": true,
      "key": "enable-dark-mode",
      "name": "Enable Dark Mode"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/feature-flags/{flag_key} - feature-flags-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FeatureFlag.json",
      "description": "Enables dark mode theme for the UI",
      "enabled": true,
      "enabled_agents": [
        "agent_123",
        "agent_456"
      ],
      "enabled_for_org": true,
      "key": "enable-dark-mode",
      "name": "Enable Dark Mode"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts - financial-account-list-by-account-number-or-name

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FinancialAccountSearchOutputBody.json",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
          "account_notes": "string",
          "account_number": "1234567890",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "50000.00",
          "beneficiary_first_name": "Alice",
          "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
          "beneficiary_last_name": "Smith",
          "cash_balance": "5000.00",
          "client_organisation_description": "string",
          "client_organisation_external_id": "co_123456",
          "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
          "client_organisation_name": "Smith Family Trust",
          "client_organisation_role": "beneficiary",
          "client_organisation_type": "family",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "USD",
          "custodian": "Fidelity",
          "external_id": "fa_123456",
          "model_portfolio": "Aggressive Growth",
          "name": "Retirement Account",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "John",
          "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
          "primary_owner_last_name": "Smith",
          "product_model": "Growth",
          "product_name": "Traditional IRA",
          "product_type": "IRA",
          "relationship_status": "active",
          "secondary_owner_first_name": "Jane",
          "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
          "secondary_owner_last_name": "Smith",
          "status": "active",
          "tax_status": "taxable",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/financial-accounts - account-financial-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AccountFinancialCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id} - account-financial-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AccountFinancialGetOutputBody.json",
      "account": {
        "account_created_at": "2026-01-15T10:30:00Z",
        "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
        "account_notes": "string",
        "account_number": "1234567890",
        "account_updated_at": "2026-01-15T10:30:00Z",
        "additional_attributes": {
          "key": {}
        },
        "balance": "50000.00",
        "beneficiary_first_name": "Alice",
        "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
        "beneficiary_last_name": "Smith",
        "cash_balance": "5000.00",
        "client_organisation_description": "string",
        "client_organisation_external_id": "co_123456",
        "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
        "client_organisation_name": "Smith Family Trust",
        "client_organisation_role": "beneficiary",
        "client_organisation_type": "family",
        "closed_date": "2026-01-15T10:30:00Z",
        "currency_code": "USD",
        "custodian": "Fidelity",
        "external_id": "fa_123456",
        "model_portfolio": "Aggressive Growth",
        "name": "Retirement Account",
        "open_date": "2026-01-15T10:30:00Z",
        "primary_owner_first_name": "John",
        "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
        "primary_owner_last_name": "Smith",
        "product_model": "Growth",
        "product_name": "Traditional IRA",
        "product_type": "IRA",
        "relationship_status": "active",
        "secondary_owner_first_name": "Jane",
        "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
        "secondary_owner_last_name": "Smith",
        "status": "active",
        "tax_status": "taxable",
        "tenant_id": "tenant_01j9k2m3n4p5q6r7s8t9u0"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id}/rmds - rmd-list-by-financial-account

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListRMDsByFinancialAccountIDOutputBody.json",
      "rmds": [
        {
          "assigned_agent_first_name": "string",
          "assigned_agent_last_name": "string",
          "assigned_to_id": "string",
          "client_first_name": "string",
          "client_id": "string",
          "client_last_name": "string",
          "client_organisation_name": "string",
          "client_organisation_status": "string",
          "client_organisation_type": "string",
          "client_organization_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "details": "string",
          "distribution_source": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "federal_withholding_pct": "string",
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "financial_account_status": "string",
          "first_year": true,
          "id": "string",
          "life_expectancy_factor": "string",
          "next_step_date": "2026-01-15T10:30:00Z",
          "outside_account_number": "string",
          "prior_year_end_balance": "string",
          "relationship_status": "string",
          "remaining_amount": "string",
          "required_amount": "string",
          "rmd_year": "string",
          "state_withholding_pct": "string",
          "status": "string",
          "ten_year_required": true,
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "ytd_distributions": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id}/sloas - sloa-list-by-financial-account

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListSLOASbyFinancialAccountIDOutputBody.json",
      "sloas": [
        {
          "bank_account_name": "string",
          "bank_account_no": "string",
          "bank_name": "string",
          "bank_routing_no": "string",
          "check_payable_address": "string",
          "check_payable_to": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "custodian": "string",
          "direction": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "id": "string",
          "is_active": true,
          "name": "string",
          "non_related_address_ok": true,
          "status": "string",
          "tenant_id": "string",
          "third_party_account_no": "string",
          "third_party_address": "string",
          "third_party_name": "string",
          "third_party_not_affiliated": true,
          "transfer_channel": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/financial-products - product-financial-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ProductFinancialCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-products/{financial_product_id} - product-financial-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ProductFinancialGetOutputBody.json",
      "product": {
        "created_at": "2026-01-15T10:30:00Z",
        "description": "A traditional individual retirement account",
        "eligibility_criteria": "Age 18+, US Citizen",
        "external_id": "fp_ext_123",
        "id": "prod_01j9k2m3n4p5q6r7s8t9u0",
        "model": "Growth",
        "model_portfolio": "Aggressive Growth",
        "product_code": "IRA-TRAD",
        "product_name": "Traditional IRA",
        "product_type": "IRA",
        "regulatory_compliance": "SEC Registered",
        "tenant_id": "tenant_01j9k2m3n4p5q6r7s8t9u0",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/gpoc-account-openings/list - gpoc-account-openings-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GPOCAccountOpeningsListOutputBody.json",
      "account_openings": [
        {
          "account_openings": [
            {
              "account_configuration": {},
              "account_data": {},
              "history": {},
              "status": {},
              "task_id": {}
            }
          ],
          "action_run_id": "string",
          "action_run_slug": "string",
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "started_at": "string",
          "status_logs": [
            {
              "changed_by": {},
              "custom_status": {},
              "event_type": {},
              "metadata": {},
              "old_custom_status": {},
              "time": {}
            }
          ],
          "updated_at": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/gpoc-docusign/envelopes - docusign-envelope-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocuSignEnvelopeResponseDoc.json",
      "envelopeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "statusDateTime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/gpoc-docusign/envelopes/{envelope_id} - docusign-envelope-status

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/gpoc-docusign/token - docusign-token-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocuSignTokenResponseDoc.json",
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expires_in": 3600,
      "token_type": "Bearer"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/journeys/list - journey-run-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "string",
      "counts": {
        "canceled_count": 1,
        "completed_count": 1,
        "in_progress_count": 1,
        "scheduled_count": 1,
        "todo_count": 1
      },
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "runs": [
        {
          "action_run_data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "agents": {
            "key": {}
          },
          "aum": 1000000000,
          "blueprint_category": "Move Money",
          "blueprint_description": "This action is used to transfer assets from one account to another",
          "blueprint_id": "bp_12345",
          "blueprint_name": "Transfer of Assets",
          "blueprint_version_id": "bpv_12345",
          "cancellation_reason": "No longer needed",
          "cancelled_at": "2023-01-01T12:30:00Z",
          "cancelled_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "child_runs": [
            {
              "action_run_data": {},
              "agents": {},
              "aum": {},
              "blueprint_category": {},
              "blueprint_description": {},
              "blueprint_id": {},
              "blueprint_name": {},
              "blueprint_version_id": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "child_runs": {},
              "client_organisation_external_id": {},
              "client_organisation_id": {},
              "client_organisation_market": {},
              "client_organisation_name": {},
              "client_organisation_national_css_coverage": {},
              "client_organisation_type": {},
              "client_organisation_uhnw_service_level": {},
              "client_segmentation": {},
              "completed_at": {},
              "created_at": {},
              "current_task": {},
              "deadline": {},
              "environment": {},
              "expected_completion_date": {},
              "id": {},
              "locked_at": {},
              "locked_by": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "parent_blueprint_category": {},
              "parent_blueprint_description": {},
              "parent_blueprint_name": {},
              "parent_nickname": {},
              "parent_run_id": {},
              "ready_at": {},
              "recommended": {},
              "recommended_by": {},
              "rejected_at": {},
              "rejected_by": {},
              "rejection_reason": {},
              "scheduled_at": {},
              "slug": {},
              "source_system": {},
              "started_at": {},
              "started_by": {},
              "status": {},
              "temp_legacy_slug": {},
              "tenant_id": {}
            }
          ],
          "client_organisation_external_id": "co_xyz",
          "client_organisation_id": "co_xyz",
          "client_organisation_market": "Seattle",
          "client_organisation_name": "Client Org",
          "client_organisation_national_css_coverage": true,
          "client_organisation_type": "Existing",
          "client_organisation_uhnw_service_level": true,
          "client_segmentation": "High Net Worth",
          "completed_at": "2023-01-01T13:00:00Z",
          "created_at": "2023-01-01T12:00:00Z",
          "current_task": {
            "id": "ar_c_12345",
            "name": "Submit Application",
            "status": "todo"
          },
          "deadline": "2023-01-15T12:00:00Z",
          "environment": "merceradvisors-uat",
          "expected_completion_date": "2023-01-20T12:00:00Z",
          "id": "ar_12345",
          "locked_at": "2026-01-15T10:30:00Z",
          "locked_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "logs": [
            {
              "changed_by": {},
              "custom_status": {},
              "event_type": {},
              "id": {},
              "metadata": {},
              "old_custom_status": {},
              "old_status": {},
              "run_id": {},
              "status": {},
              "tenant_id": {},
              "time": {}
            }
          ],
          "name": "My Action Run",
          "next_step_date": "2023-01-15T12:00:00Z",
          "parent_blueprint_category": "HR",
          "parent_blueprint_description": "Standardized onboarding flow for new hires",
          "parent_blueprint_name": "Employee Onboarding",
          "parent_nickname": "Q3 onboarding cohort",
          "parent_run_id": "ar_parent_12345",
          "ready_at": "2023-01-01T12:04:00Z",
          "recommended": true,
          "recommended_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejected_at": "2023-01-01T12:10:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "Not appropriate",
          "scheduled_at": "2023-01-02T09:00:00Z",
          "slug": "12345",
          "source_system": "avantos",
          "started_at": "2023-01-01T12:05:00Z",
          "started_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "status": "processing",
          "temp_legacy_slug": "string",
          "tenant_id": "t_67890"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/js_execute/{custom_js_function_id} - js-execute

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/JsExecuteOutputBody.json",
      "response": {
        "key": {}
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/kpis/definitions - kpi-definitions-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/KPIDefinitionListOutputBody.json",
      "definitions": [
        {
          "allowed_dimensions": [
            "string"
          ],
          "description": "Total number of actions created in the period",
          "id": "kpi_123",
          "name": "actions.total_count",
          "period_granularity": "day",
          "status": "active",
          "unit": "count"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/kpis/report - kpi-report

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/KPIReportOutputBody.json",
      "available_dimensions": {
        "key": [
          "string"
        ]
      },
      "data_points": [
        {
          "denominator": "25",
          "numerator": "3",
          "period_end": "2026-01-13T00:00:00Z",
          "period_start": "2026-01-06T00:00:00Z",
          "value": "42"
        }
      ],
      "granularity": "weekly",
      "kpi_id": "kpi_123",
      "kpi_name": "actions.total_count",
      "unit": "count"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/kpis/values/search - kpi-values-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/KPIValueSearchOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "values": [
        {
          "client_organisation_id": "co_123",
          "computed_at": "2026-02-03T02:00:00Z",
          "created_at": "2026-02-03T02:00:00Z",
          "denominator": "25",
          "dimensions": {
            "key": "string"
          },
          "id": "kpival_123",
          "kpi_id": "kpi_123",
          "numerator": "3",
          "period_end": "2026-02-02T00:00:00Z",
          "period_granularity": "day",
          "period_start": "2026-02-01T00:00:00Z",
          "run_id": "kpirun_123",
          "status_label": "not_met",
          "tenant_id": "t_123",
          "updated_at": "2026-02-03T02:00:00Z",
          "value": "42"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/list-sync-file - list-sync-files

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SyncFileListOutputBody.json",
      "sync_files": [
        {
          "additional_metadata": {
            "key": {}
          },
          "duration": 1,
          "end_time": "2026-01-15T10:30:00Z",
          "error_count": 1,
          "error_rate_percent": 1.0,
          "file_size": 1,
          "id": "string",
          "record_count": 1,
          "s3_bucket": "string",
          "s3_key": "string",
          "salesforce_object": "string",
          "start_date": "2026-01-15T10:30:00Z",
          "start_time": "2026-01-15T10:30:00Z",
          "status": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/list-sync-file-error-logs - list-sync-file-error-logs

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SyncFileErrorLogListOutputBody.json",
      "error_logs": [
        {
          "avantos_data_type": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "error_log_id": "string",
          "error_message": "string",
          "error_type": "string",
          "incoming_data_type": "string",
          "raw_data": {
            "key": {}
          },
          "record_id": "string",
          "s3_bucket": "string",
          "s3_key": "string",
          "salesforce_object_type": "string",
          "sync_file_end_time": "2026-01-15T10:30:00Z",
          "sync_file_id": "string",
          "sync_file_start_time": "2026-01-15T10:30:00Z",
          "sync_file_updated_at": "2026-01-15T10:30:00Z",
          "sync_status": "string",
          "tenant_id": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/lookups - lookup-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateLookupOutputBody.json",
      "id": "lkp_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/lookups/{category} - lookup-list-by-category

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "category": "business_group_coverage",
        "created_at": "2024-01-01T09:00:00Z",
        "description": "Northeast United States",
        "external_id": "ext_northeast",
        "extra_properties": {
          "region_code": "NE"
        },
        "id": "lkp_123",
        "is_active": true,
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z",
        "value": "northeast"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/lookups/{lookup_id} - lookup-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/lookups/{lookup_id} - lookup-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/manager-teams - manager-team-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ManagerTeamListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "teams": [
        {
          "active": true,
          "direct_reports_count": 5,
          "manager_email": "john.doe@example.com",
          "manager_external_id": "ext_789",
          "manager_first_name": "John",
          "manager_id": "ag_123456",
          "manager_last_name": "Doe",
          "manager_middle_name": "A",
          "manager_role": "Director",
          "manager_title": "Mr",
          "members": [
            {
              "active": {},
              "agent_id": {},
              "direct_reports_count": {},
              "email": {},
              "external_id": {},
              "first_name": {},
              "last_name": {},
              "level": {},
              "manager_id": {},
              "middle_name": {},
              "path": {},
              "role": {},
              "title": {}
            }
          ],
          "total_reports_count": 15
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/manager-teams/{manager_team_id} - manager-team-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ManagerTeamGetOutputBody.json",
      "team": {
        "manager_email": "john.doe@example.com",
        "manager_id": "ag_123456",
        "manager_name": "John Doe",
        "members": [
          {
            "active": true,
            "agent_id": "ag_123456",
            "direct_reports_count": 3,
            "email": "john.doe@example.com",
            "external_id": "ext_789",
            "first_name": "John",
            "last_name": "Doe",
            "level": 1,
            "manager_id": "ag_789",
            "middle_name": "A",
            "path": [
              "ag_123",
              "ag_456"
            ],
            "role": "Manager",
            "title": "Mr"
          }
        ],
        "pagination": {
          "page": 1,
          "page_size": 1,
          "total_pages": 1,
          "total_records": 1
        },
        "team_size": 15
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings - meeting-list-all

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/MeetingDescription.json",
        "actions_skipped": false,
        "ai_transcript_id": "123",
        "client_organisation_external_id": "ext_org_123",
        "client_organisation_id": "org_123",
        "client_organisation_name": "Acme Inc.",
        "created_at": "2024-03-10T09:00:00Z",
        "description": "Quarterly performance review meeting",
        "end_time": "2024-03-15T15:00:00Z",
        "external_id": "1234567890",
        "extra_properties": {},
        "id": "m_123",
        "initiating_agent": {
          "first_name": "John",
          "id": "a_123",
          "last_name": "Smith"
        },
        "is_historical": false,
        "location": "Conference Room A",
        "meeting_link": "https://meet.example.com/123",
        "meeting_type": "review",
        "my_meeting": true,
        "participants": [
          {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith",
            "type": "agent"
          }
        ],
        "primary_client_id": "c_123",
        "record_type": "Historical_FSC_Advisory_Sales",
        "start_time": "2024-03-15T14:00:00Z",
        "status": "scheduled",
        "subject": "Quarterly Review",
        "tenant_id": "123",
        "updated_at": "2024-03-10T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings - meeting-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/email-drafts - meeting-list-by-email-drafts

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingListByEmailDraftsOutputBody.json",
      "meetings": [
        {
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "email_draft_id": "ed_123",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/id-by-external-id - meeting-id-by-external-id

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetMeetingIDByExternalIDOutputBody.json",
      "meeting_id": "m_789"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/list - meeting-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingListOutputBody.json",
      "meetings": [
        {
          "$schema": "https://example.com/schemas/MeetingDescription.json",
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/summaries - meeting-list-by-summaries

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingListBySummariesOutputBody.json",
      "meetings": [
        {
          "$schema": "https://example.com/schemas/MeetingDescription.json",
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{id} - meeting-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{id} - meeting-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingDescription.json",
      "actions_skipped": false,
      "ai_transcript_id": "123",
      "client_organisation_external_id": "ext_org_123",
      "client_organisation_id": "org_123",
      "client_organisation_name": "Acme Inc.",
      "created_at": "2024-03-10T09:00:00Z",
      "description": "Quarterly performance review meeting",
      "end_time": "2024-03-15T15:00:00Z",
      "external_id": "1234567890",
      "extra_properties": {},
      "id": "m_123",
      "initiating_agent": {
        "first_name": "John",
        "id": "a_123",
        "last_name": "Smith"
      },
      "is_historical": false,
      "location": "Conference Room A",
      "meeting_link": "https://meet.example.com/123",
      "meeting_type": "review",
      "my_meeting": true,
      "participants": [
        {
          "first_name": "John",
          "id": "a_123",
          "last_name": "Smith",
          "type": "agent"
        }
      ],
      "primary_client_id": "c_123",
      "record_type": "Historical_FSC_Advisory_Sales",
      "start_time": "2024-03-15T14:00:00Z",
      "status": "scheduled",
      "subject": "Quarterly Review",
      "tenant_id": "123",
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{id} - meeting-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/meetings/{id}/actions-skipped - meeting-actions-skipped-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/meetings/{id}/transcript-id - meeting-transcript-id-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs - meeting-action-run-relationship-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingActionRunRelationshipListOutputBody.json",
      "relationships": [
        {
          "action_run_created_at": "2024-03-10T09:00:00Z",
          "action_run_id": "ar_123",
          "action_run_name": "Send Follow-up Email",
          "action_run_status": "completed",
          "blueprint_name": "Email Blueprint",
          "meeting_id": "mt_123",
          "relationship_created_at": "2024-03-10T09:00:00Z",
          "relationship_id": "mar_123",
          "relationship_updated_at": "2024-03-10T09:00:00Z",
          "source_system": "avantos",
          "tenant_id": "123"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs - meeting-action-run-relationship-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingActionRunRelationshipCreateOutputBody.json",
      "id": "mar_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs/{action_run_id} - meeting-action-run-relationship-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/attendees - meeting-attendee-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingAttendeeCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/attendees/{attendee_id} - meeting-attendee-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingEmailDraftDescription.json",
      "body_content": "Thank you for attending...",
      "cc_addresses": [
        "manager@example.com"
      ],
      "created_at": "2024-03-10T09:00:00Z",
      "id": "med_123",
      "is_ai_enhanced": false,
      "is_skipped": false,
      "meeting_id": "mt_123",
      "sent_flag": false,
      "subject": "Meeting Follow-up",
      "tenant_id": "123",
      "to_addresses": [
        "john@example.com"
      ],
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingEmailDraftCreateOutputBody.json",
      "id": "med_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft/upsert - meeting-email-draft-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingEmailDraftUpsertOutputBody.json",
      "created": true,
      "id": "med_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingPrepDescription.json",
      "body_content": "Meeting prep content",
      "created_at": "2024-03-10T09:00:00Z",
      "id": "mp_123",
      "is_ai_enhanced": false,
      "meeting_id": "mt_123",
      "tenant_id": "123",
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingPrepCreateOutputBody.json",
      "id": "mp_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/prep/upsert - meeting-prep-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingPrepUpsertOutputBody.json",
      "created": true,
      "id": "mp_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingSummaryDescription.json",
      "attested_at": "2024-03-10T10:00:00Z",
      "attesting_agent_id": "ag_456",
      "created_at": "2024-03-10T09:00:00Z",
      "id": "ms_123",
      "is_ai_enhanced": false,
      "is_attested": false,
      "meeting_id": "mt_123",
      "summary_content": "Meeting summary content",
      "tenant_id": "123",
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingSummaryCreateOutputBody.json",
      "id": "ms_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary/attest - meeting-summary-attest

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary/unattest - meeting-summary-unattest

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/summary/upsert - meeting-summary-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingSummaryUpsertOutputBody.json",
      "created": true,
      "id": "ms_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/notifications/{agent_id} - notification-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/NotificationListOutputBody.json",
      "notifications": [
        {
          "category": "string",
          "content": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "environment": "string",
          "external_id": "string",
          "id": "string",
          "is_escalated": true,
          "is_read": true,
          "name": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "user_id": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/notifications/{agent_id}/create - notification-create

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/notifications/{notification_id} - notification-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/notifications/{notification_id} - notification-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/NotificationGetOutputBody.json",
      "notification": {
        "category": "string",
        "content": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "environment": "string",
        "external_id": "string",
        "id": "string",
        "is_escalated": true,
        "is_read": true,
        "name": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z",
        "user_id": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/notifications/{notification_id} - notification-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/notifications/{notification_id}/read - notification-mark-as-read

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/opportunities/{opportunity_id} - opportunity-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/OpportunityUpdateOutputBody.json",
      "id": "coo_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigDeleteOutputBody.json",
      "message": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigGetOutputBody.json",
      "createdAt": "string",
      "defaultPinnedViewIds": [
        "string"
      ],
      "defaultViewId": "string",
      "id": "string",
      "pageId": "string",
      "tenantId": "string",
      "updatedAt": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigUpdateOutputBody.json",
      "message": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views - custom-views-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsListOutputBody.json",
      "views": [
        {
          "agent_id": "string",
          "column_order": "string",
          "columns_config": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "created_by": "string",
          "description": "string",
          "filters": "string",
          "id": "string",
          "name": "string",
          "only_assigned": true,
          "page_id": "string",
          "promoted": true,
          "role_names": [
            "string"
          ],
          "scope_type": "string",
          "sorting": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pages/{page_id}/views - custom-views-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsCreateOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views/default - custom-views-get-default

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsGetDefaultOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views/pinned - custom-views-get-pinned

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsGetPinnedOutputBody.json",
      "view_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/views/pinned - custom-views-set-pinned

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsSetPinnedOutputBody.json",
      "message": "string",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/views/set-default - custom-views-set-default

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsSetDefaultOutputBody.json",
      "message": "string",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} - custom-views-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} - custom-views-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsGetOutputBody.json",
      "view": {
        "agent_id": "string",
        "column_order": "string",
        "columns_config": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "created_by": "string",
        "description": "string",
        "filters": "string",
        "id": "string",
        "name": "string",
        "only_assigned": true,
        "page_id": "string",
        "promoted": true,
        "role_names": [
          "string"
        ],
        "scope_type": "string",
        "sorting": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} - custom-views-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsUpdateOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/available-widgets - page-widget-availability-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityListOutputBody.json",
      "availableWidgets": [
        {
          "$schema": "https://example.com/schemas/PageWidgetAvailabilityOutput.json",
          "createdAt": "2024-01-01T00:00:00Z",
          "id": "pwa_123",
          "page": "dashboard",
          "widgetDefinition": {
            "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
            "configSchema": {
              "key": {}
            },
            "createdAt": "2024-01-01T00:00:00Z",
            "defaultConfig": {
              "key": {}
            },
            "defaultHeight": 2,
            "defaultWidth": 2,
            "description": "Shows upcoming meetings",
            "displayName": "Meetings Widget",
            "id": "wdef_123",
            "maxHeight": 4,
            "maxWidth": 4,
            "minHeight": 1,
            "minWidth": 1,
            "name": "meetings",
            "updatedAt": "2024-01-01T00:00:00Z"
          },
          "widgetDefinitionId": "wdef_123"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pages/{page}/available-widgets - page-widget-availability-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityCreateOutputBody.json",
      "id": "pwa_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pages/{page}/available-widgets/{availability_id} - page-widget-availability-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityDeleteOutputBody.json",
      "message": "Page widget availability deleted successfully"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/available-widgets/{availability_id} - page-widget-availability-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityOutput.json",
      "createdAt": "2024-01-01T00:00:00Z",
      "id": "pwa_123",
      "page": "dashboard",
      "widgetDefinition": {
        "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
        "configSchema": {
          "key": {}
        },
        "createdAt": "2024-01-01T00:00:00Z",
        "defaultConfig": {
          "key": {}
        },
        "defaultHeight": 2,
        "defaultWidth": 2,
        "description": "Shows upcoming meetings",
        "displayName": "Meetings Widget",
        "id": "wdef_123",
        "maxHeight": 4,
        "maxWidth": 4,
        "minHeight": 1,
        "minWidth": 1,
        "name": "meetings",
        "updatedAt": "2024-01-01T00:00:00Z"
      },
      "widgetDefinitionId": "wdef_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/default-widgets - page-default-widget-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageDefaultWidgetListOutputBody.json",
      "defaultWidgets": [
        {
          "$schema": "https://example.com/schemas/PageDefaultWidgetOutput.json",
          "config": {
            "key": {}
          },
          "createdAt": "2024-01-01T00:00:00Z",
          "height": 2,
          "id": "pdw_123",
          "isVisible": false,
          "page": "dashboard",
          "updatedAt": "2024-01-01T00:00:00Z",
          "updatedBy": "agent_123",
          "widgetDefinitionId": "wdef_123",
          "width": 2,
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_definition_id} - page-default-widget-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageDefaultWidgetOutput.json",
      "config": {
        "key": {}
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "height": 2,
      "id": "pdw_123",
      "isVisible": false,
      "page": "dashboard",
      "updatedAt": "2024-01-01T00:00:00Z",
      "updatedBy": "agent_123",
      "widgetDefinitionId": "wdef_123",
      "width": 2,
      "x": 0,
      "y": 0
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_id} - page-default-widget-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageDefaultWidgetUpdateOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs - pdf-upload

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFUploadOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs/list - pdf-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "pdfs": [
        {
          "created_at": "string",
          "created_by": "string",
          "description": "string",
          "file_name": "string",
          "id": "string",
          "name": "string",
          "updated_at": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pdfs/{pdf_id} - pdf-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id} - pdf-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFGetOutputBody.json",
      "created_at": "string",
      "created_by": "string",
      "description": "string",
      "file_name": "string",
      "fill_field_mapping": {
        "key": {}
      },
      "id": "string",
      "name": "string",
      "updated_at": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pdfs/{pdf_id} - pdf-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/file - pdf-get-file

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": "string"
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs/{pdf_id}/fill - pdf-fill

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFFillOutputBody.json",
      "filled_pdf_base64": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/fill-mapping - pdf-get-fill-mapping

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFGetFillMappingOutputBody.json",
      "fill_field_mapping": {
        "key": {}
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/preview - pdf-preview

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFPreviewOutputBody.json",
      "filled_pdf_base64": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields - pdf-signature-field-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFSignatureFieldListOutputBody.json",
      "ErrorCode": 1,
      "Errors": {},
      "ResultData": [
        {
          "FormId": 1,
          "SignDateFields": [
            {
              "DocusignXCoord": {},
              "DocusignYCoord": {},
              "FieldHeight": {},
              "FieldRole": {},
              "FieldWidth": {},
              "Name": {},
              "Page": {},
              "PageHeight": {},
              "PageWidth": {},
              "PdfXLeftCoord": {},
              "PdfXRightCoord": {},
              "PdfYBottomCoord": {},
              "PdfYTopCoord": {}
            }
          ],
          "SignFields": [
            {
              "DocusignXCoord": {},
              "DocusignYCoord": {},
              "FieldHeight": {},
              "FieldRole": {},
              "FieldWidth": {},
              "Name": {},
              "Page": {},
              "PageHeight": {},
              "PageWidth": {},
              "PdfXLeftCoord": {},
              "PdfXRightCoord": {},
              "PdfYBottomCoord": {},
              "PdfYTopCoord": {}
            }
          ],
          "SignInitialsFields": [
            {
              "DocusignXCoord": {},
              "DocusignYCoord": {},
              "FieldHeight": {},
              "FieldRole": {},
              "FieldWidth": {},
              "Name": {},
              "Page": {},
              "PageHeight": {},
              "PageWidth": {},
              "PdfXLeftCoord": {},
              "PdfXRightCoord": {},
              "PdfYBottomCoord": {},
              "PdfYTopCoord": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields - pdf-signature-field-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFSignatureFieldCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} - pdf-signature-field-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} - pdf-signature-field-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFSignatureFieldResponse.json",
      "created_at": "string",
      "height": 1.0,
      "id": "string",
      "label": "string",
      "metadata": {
        "key": {}
      },
      "page_number": 1,
      "pdf_id": "string",
      "role": "string",
      "signature_kind": "signature",
      "tenant_id": "string",
      "updated_at": "string",
      "width": 1.0,
      "x": 1.0,
      "y": 1.0
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} - pdf-signature-field-patch

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/poc-document-schemas - poc-document-schema-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentSchemaCreateOutputBody.json",
      "id": "docschema_2kzn8f0q1r3s5t7v9x"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/poc-document-schemas/list - poc-document-schema-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentSchemaListOutputBody.json",
      "document_schemas": [
        {
          "$schema": "https://example.com/schemas/DocumentSchemaDescription.json",
          "created_at": "2026-02-22T00:00:00Z",
          "created_by": "agent@example.com",
          "description": "Schema for extracting fields from W-2 tax forms",
          "fields": [
            {
              "field_description": {},
              "field_name": {}
            }
          ],
          "id": "docschema_2kzn8f0q1r3s5t7v9x",
          "name": "W-2 Tax Form",
          "updated_at": "2026-02-22T00:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} - poc-document-schema-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} - poc-document-schema-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentSchemaDescription.json",
      "created_at": "2026-02-22T00:00:00Z",
      "created_by": "agent@example.com",
      "description": "Schema for extracting fields from W-2 tax forms",
      "fields": [
        {
          "field_description": "Name of the employer as shown on the form",
          "field_name": "employer_name"
        }
      ],
      "id": "docschema_2kzn8f0q1r3s5t7v9x",
      "name": "W-2 Tax Form",
      "updated_at": "2026-02-22T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} - poc-document-schema-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/policies - policy-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicyListOutputBody.json",
      "policies": [
        {
          "description": "Read and write permissions for client data.",
          "policyName": "ClientReadPolicy",
          "rules": [
            {
              "actions": {},
              "object": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/policies - policy-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicyCreateOutputBody.json",
      "policy_id": 201
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/policies/search - policy-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicySearchOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "policies": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "agent_organisation_external_id": "00057",
          "agent_organisation_id": "ao_123",
          "agent_organisation_name": "Howard J Elias Inc",
          "agents": [
            {
              "agent_external_id": {},
              "agent_id": {},
              "agent_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "carrier": "State Farm",
          "client_organisation_external_id": "SF-CO-001",
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "clients": [
            {
              "client_external_id": {},
              "client_id": {},
              "client_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "created_at": "2024-01-01T09:00:00Z",
          "effective_date": "2024-02-01T00:00:00Z",
          "external_id": "SF-POL-001",
          "face_amount": "250000.00",
          "id": "policy_123",
          "issue_date": "2024-01-15T00:00:00Z",
          "line_of_business": "Life",
          "policy_number": "POL-2024-001",
          "premium_amount": "500.00",
          "premium_frequency": "Monthly",
          "status": "Active",
          "subtype": "Term Life",
          "tenant_id": "t_123",
          "termination_date": "2054-02-01T00:00:00Z",
          "updated_at": "2024-01-15T14:30:00Z",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/policies/{policy_id} - policy-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicyGetOutputBody.json",
      "description": "Read and write permissions for client data.",
      "policy_id": 201,
      "policy_name": "ClientReadPolicy"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/qc-check - qc-check-post

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/QCCheckOutputBody.json",
      "errors": [
        "string"
      ],
      "investmentStrategyResult": {
        "automatedQualityControlStatus": "Success",
        "capitalGainsBudgetAspen": 8000,
        "capitalGainsBudgetMatch": "Yes",
        "capitalGainsBudgetOrion": 8000,
        "dcaTotalValueAspen": 0,
        "dcaTotalValueMatch": "Yes",
        "dcaTotalValueOrion": 0,
        "didAnyOrionApiRequestsFail": false,
        "frequentRecurringAutoCashRaisesAspen": [
          {}
        ],
        "frequentRecurringAutoCashRaisesMatch": "Yes",
        "frequentRecurringAutoCashRaisesOrion": [
          {}
        ],
        "incomeProtectionAspen": "No",
        "incomeProtectionMatch": "Yes",
        "incomeProtectionOrion": "No",
        "incomeSleeveAspen": 1000,
        "incomeSleeveMatch": "Yes",
        "incomeSleeveOrion": 1000,
        "lessFrequentRecurringAutoCashRaisesAspen": [
          {}
        ],
        "lessFrequentRecurringAutoCashRaisesMatch": "Yes",
        "lessFrequentRecurringAutoCashRaisesOrion": [
          {}
        ],
        "pendingDistributionAspen": 0,
        "pendingDistributionMatch": "Yes",
        "pendingDistributionOrion": 0,
        "protectedCashAspen": 10000,
        "protectedCashMatch": "Yes",
        "protectedCashOrion": 10000,
        "rebalanceFrequencyAspen": "Quarterly",
        "rebalanceFrequencyMatch": "Yes",
        "rebalanceFrequencyOrion": "Quarterly",
        "securityRestrictionsAspen": [
          {}
        ],
        "securityRestrictionsMatch": "Yes",
        "securityRestrictionsOrion": [
          {}
        ],
        "sleeveStrategyNameAspen": "Nuveen Municipal 1-10 Year",
        "sleeveStrategyNameMatch": "Yes",
        "sleeveStrategyNameOrion": "Nuveen Municipal 1-10 Year",
        "valuesBasedExclusionsIndustryAspen": [
          {}
        ],
        "valuesBasedExclusionsIndustryMatch": "Yes",
        "valuesBasedExclusionsIndustryOrion": [
          {}
        ],
        "valuesBasedExclusionsNonStrictAspen": [
          {}
        ],
        "valuesBasedExclusionsNonStrictMatch": "Yes",
        "valuesBasedExclusionsNonStrictOrion": [
          {}
        ],
        "valuesBasedExclusionsStrictAspen": [
          {}
        ],
        "valuesBasedExclusionsStrictMatch": "Yes",
        "valuesBasedExclusionsStrictOrion": [
          {}
        ]
      },
      "manageCashResult": {
        "automatedQualityControlStatus": "Success",
        "didAnyOrionApiRequestsFail": false,
        "distributionSleeveCurrentMarketValueAspen": 15000,
        "distributionSleeveCurrentMarketValueMatch": "Yes",
        "distributionSleeveCurrentMarketValueOrion": 15000,
        "updatedIncomeSleeveCashAspen": 1000,
        "updatedIncomeSleeveCashMatch": "Yes",
        "updatedIncomeSleeveCashOrion": 1000,
        "updatedPendingDistributionAspen": 0,
        "updatedPendingDistributionMatch": "Yes",
        "updatedPendingDistributionOrion": 0,
        "updatedProtectedCashAspen": 10000,
        "updatedProtectedCashMatch": "Yes",
        "updatedProtectedCashOrion": 10000
      },
      "taskId": "task_123",
      "toolType": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/qc-check-bulk - qc-check-bulk-post

- Status: `multi`

```json
[
  {
    "title": "Accepted",
    "status": "202",
    "body": {
      "$schema": "https://example.com/schemas/QCCheckBulkAsyncOutputBody.json",
      "skippedTasks": 1,
      "startedTasks": 1,
      "tasks": [
        {
          "actionName": "string",
          "actionRunId": "ar_456",
          "reason": "string",
          "skipped": true,
          "started": true,
          "taskId": "task_123",
          "taskName": "string",
          "toolType": "string"
        }
      ],
      "totalTasks": 1
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/relationship-profiles/tax-managers - tax-managers-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxManagerAgentRelationshipProfileListOutputBody.json",
      "agent_relationship_profiles": [
        {
          "agent_external_id": "ext_123456",
          "agent_id": "ag_123456",
          "external_id": "ext_789",
          "name": "John Doe",
          "relationship_type": "Tax Manager"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/members - relationship-client-organisation-members-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipClientOrganisationMembersOutputBody.json",
      "members": [
        {
          "additional_attributes": {
            "notes": "VIP client",
            "preferences": {
              "contact_method": "email"
            }
          },
          "addresses": {
            "BILLING": {
              "city": "Anytown",
              "state": "CA"
            }
          },
          "birthdate": "1990-01-01",
          "client_id": "cli_123abc",
          "client_organisation_id": "org_123abc",
          "current_employer": "Acme Inc.",
          "email": "john.doe@example.com",
          "employment_status": "Employed",
          "first_name": "John",
          "is_primary": true,
          "last_name": "Doe",
          "marital_status": "Married",
          "occupation": "Software Engineer",
          "phone": "123-456-7890",
          "preferred_name": "Johnny",
          "role": "PRIMARY",
          "ssn": "123-45-6789",
          "status": "Active",
          "subtype": "Client"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/opportunities - relationship-opportunity-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipOpportunityCreateOutputBody.json",
      "id": "opp_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/opportunities-list - relationship-opportunity-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipOpportunityListOutputBody.json",
      "opportunities": [
        {
          "amount": "1000000",
          "amount_transferred": "1000000",
          "category": "Expand",
          "client_organisation_external_id": "org_123abc",
          "client_organisation_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "client_organisation_growth_opportunity_next_step_date": "2024-12-31",
          "client_organisation_id": "org_123abc",
          "client_organisation_name": "Acme Inc.",
          "client_organisation_status": "prospect",
          "client_organisation_type": "prospect",
          "closed_amount": "1000000",
          "created_at": "2024-01-01T00:00:00Z",
          "description": "Potential investment in emerging markets",
          "expected_close_date": "2024-12-31",
          "expected_revenue": "1000000",
          "external_id": "opp_123",
          "extra_properties": {
            "platform": "Zoom",
            "recording_url": "https://example.com/recording"
          },
          "id": "opp_123abc",
          "import_type": "prospect",
          "is_closed": false,
          "lead_source": "prospect",
          "name": "New Investment Opportunity",
          "next_meeting_date": "2024-12-31",
          "next_step": "Schedule follow-up meeting",
          "next_step_date": "2024-12-31",
          "opportunity_type": "investment",
          "owner_id": "agent_123",
          "probability": 75.5,
          "probability_categorisation": "High",
          "prospective_external_id": "org_123abc",
          "prospective_id": "org_123abc",
          "prospective_name": "Acme Inc.",
          "prospective_type": "prospect",
          "record_type": "Historical_FSC_Advisory_Sales",
          "relationship_type": "prospect",
          "stage": "Identify",
          "stage_changed_date": "2024-01-15T00:00:00Z",
          "status": "open",
          "sub_category": "Manage Balance Sheet",
          "updated_at": "2024-01-01T00:00:00Z",
          "wealth_advisor_agent_id": "agent_123abc",
          "wealth_advisor_first_name": "John",
          "wealth_advisor_last_name": "Doe"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/relationships/dashboard - relationship-dashboard-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipDashboardListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      },
      "relationships_mapped": [
        {
          "primaryAdvisorFirstName": "Bob"
        }
      ],
      "relationships_raw": [
        {
          "addresses": {
            "BILLING": {
              "city": "Anytown",
              "state": "CA"
            }
          },
          "agent_organisation_id": "org_456def",
          "agent_organisation_name": "XYZ Services",
          "agent_organisation_role": "Agent",
          "agent_organisation_type": "LLC",
          "agents": {
            "PRIMARY": {
              "first_name": "John",
              "last_name": "Doe"
            }
          },
          "client_organisation_id": "org_123abc",
          "client_organisation_name": "Acme Corp",
          "client_organisation_role": "Client",
          "client_organisation_type": "Corporation",
          "client_relationship_status": "EXISTING"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/relationships/opportunities/{opportunity_id} - relationship-opportunity-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipOpportunityGetOutputBody.json",
      "opportunity": {
        "amount": "1000000",
        "amount_transferred": "1000000",
        "category": "Expand",
        "client_organisation_external_id": "org_123abc",
        "client_organisation_extra_properties": {
          "annual_revenue": "$500M",
          "employees": "5000",
          "industry": "Technology"
        },
        "client_organisation_growth_opportunity_next_step_date": "2024-12-31",
        "client_organisation_id": "org_123abc",
        "client_organisation_name": "Acme Inc.",
        "client_organisation_status": "prospect",
        "client_organisation_type": "prospect",
        "closed_amount": "1000000",
        "created_at": "2024-01-01T00:00:00Z",
        "description": "Potential investment in emerging markets",
        "expected_close_date": "2024-12-31",
        "expected_revenue": "1000000",
        "external_id": "opp_123",
        "extra_properties": {
          "platform": "Zoom",
          "recording_url": "https://example.com/recording"
        },
        "id": "opp_123abc",
        "import_type": "prospect",
        "is_closed": false,
        "lead_source": "prospect",
        "name": "New Investment Opportunity",
        "next_meeting_date": "2024-12-31",
        "next_step": "Schedule follow-up meeting",
        "next_step_date": "2024-12-31",
        "opportunity_type": "investment",
        "owner_id": "agent_123",
        "probability": 75.5,
        "probability_categorisation": "High",
        "prospective_external_id": "org_123abc",
        "prospective_id": "org_123abc",
        "prospective_name": "Acme Inc.",
        "prospective_type": "prospect",
        "record_type": "Historical_FSC_Advisory_Sales",
        "relationship_type": "prospect",
        "stage": "Identify",
        "stage_changed_date": "2024-01-15T00:00:00Z",
        "status": "open",
        "sub_category": "Manage Balance Sheet",
        "updated_at": "2024-01-01T00:00:00Z",
        "wealth_advisor_agent_id": "agent_123abc",
        "wealth_advisor_first_name": "John",
        "wealth_advisor_last_name": "Doe"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/reports/manual-mutual-fund-trades - send-mutual-fund-trades-report

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SendMutualFundTradesReportOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/role-groups - role-groups-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleGroupListOutputBody.json",
      "role_groups": [
        {
          "name": "string",
          "roles": [
            "string"
          ],
          "tenant_id": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/roles - role-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleListOutputBody.json",
      "roles": [
        {
          "description": "Manages clients and organisations.",
          "policies": [
            "ClientReadPolicy",
            "ClientWritePolicy"
          ],
          "roleName": "Admin"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/roles - role-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleCreateOutputBody.json",
      "role_id": 101
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/roles/enforcer - enforcer-role-rules-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/EnforcerRoleRulesGetOutputBody.json",
      "rules": [
        "rule1",
        "rule2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/roles/{role_id} - role-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleGetOutputBody.json",
      "description": "Manages clients and organisations.",
      "role_id": 101,
      "role_name": "Admin"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/roles/{role_id}/policies - role-policy-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RolePolicyCreateOutputBody.json",
      "policy_id": 201,
      "role_id": 101
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/salesforce/{object_type} - salesforce-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SalesforceCreateOutputBody.json",
      "id": "0RExx0000004CqGGAU"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/salesforce/{object_type}/{object_id} - salesforce-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SalesforceDeleteOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/salesforce/{object_type}/{object_id} - salesforce-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": "string"
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/search - global-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GlobalSearchOutputBody.json",
      "results": [
        {
          "entity_type": "client",
          "error": "string",
          "items": [
            {
              "display_fields": {},
              "display_text": {},
              "highlighted_text": {},
              "id": {},
              "score": {},
              "updated_at": {}
            }
          ],
          "pagination": {
            "page": 1,
            "page_size": 1,
            "total_pages": 1,
            "total_records": 1
          }
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/service-agreements - service-agreement-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ServiceAgreementCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/service-agreements/{service_agreement_id} - service-agreement-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ServiceAgreementGetOutputBody.json",
      "service_agreement": {
        "account_id": "string",
        "additional_attributes": {
          "key": {}
        },
        "advisor_id": "string",
        "agreement_details": {
          "key": {}
        },
        "allocation_details": {
          "key": {}
        },
        "client_id": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "end_date": "2026-01-15T10:30:00Z",
        "fee_details": {
          "key": {}
        },
        "id": "string",
        "product_id": "string",
        "repcode_id": "string",
        "start_date": "2026-01-15T10:30:00Z",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/service-agreements/{service_agreement_id}/document - service-agreement-document-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateDocumentCatalogEntryOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/service-agreements/{service_agreement_id}/documents - service-agreement-documents-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetDocumentsOutputBody.json",
      "documents": [
        {
          "access_level": "private",
          "additional_attributes": {
            "department": "finance",
            "priority": "high"
          },
          "agent_id": "agent_123",
          "approved_by": "user_123",
          "client_id": "client_789",
          "created_at": "2024-01-15T14:30:00Z",
          "deleted_at": "2024-02-15T14:30:00Z",
          "description": "Client's 2023 tax return document",
          "document_status": "approved",
          "document_subtype": "2023 Tax Return",
          "document_type": "bank_statement",
          "external_id": "DOC-2024-01",
          "file_name": "tax_return_2023.pdf",
          "file_type": "pdf",
          "id": "doc_123",
          "rejection_reason": "Invalid format",
          "retention_policy": "5 years",
          "service_agreement_id": "sa_456",
          "storage_container": "my-document-bucket",
          "storage_mode": "PLATFORM_MANAGED",
          "storage_object_key": "clients/2024/doc.pdf",
          "storage_provider": "S3",
          "tenant_id": "tenant_456",
          "updated_at": "2024-01-15T14:30:00Z",
          "upload_date": "2024-01-15T14:30:00Z",
          "upload_status": "VERIFIED"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/tasks - action-run-task-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTaskListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      },
      "tasks": [
        {
          "action_number": "A-1",
          "action_run_data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "action_run_id": "ar_12345",
          "action_run_name": "Run 1",
          "action_run_slug": "run_1",
          "action_run_status": "processing",
          "agents": {
            "key": {}
          },
          "assigned": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "assigned_agent_first_name": "John",
          "assigned_agent_last_name": "Smith",
          "aum": 1000000000,
          "blueprint_category": "\"financial_account\"",
          "blueprint_name": "\"Financial Account\"",
          "can_begin": true,
          "cancellation_reason": "Task was cancelled because it was no longer needed",
          "cancelled_at": "2023-04-01T12:00:00Z",
          "cancelled_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "client_organisation_external_id": "external_id",
          "client_organisation_extra_properties": {
            "data_provider_name": "Bank of America",
            "market": "US"
          },
          "client_organisation_id": "co_xyz",
          "client_organisation_name": "Org XYZ",
          "client_organisation_type": "\"bank\"",
          "client_segmentation": "\"high_value\"",
          "completed_at": "2023-04-01T12:00:00Z",
          "completed_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "component_key": "component_12345",
          "created_at": "2023-04-01T12:00:00Z",
          "cron_job_queued": "job_123",
          "data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "deadline": "2023-04-01T12:00:00Z",
          "environment": "merceradvisors-uat",
          "id": "task_12345",
          "logs": [
            {
              "changed_by": {},
              "description": {},
              "status": {},
              "time": {}
            }
          ],
          "name": "Submit: Customer Details",
          "next_step_date": "2023-04-01T12:00:00Z",
          "note": "We're still waiting on Bob to submit the details",
          "parent_blueprint_category": "HR",
          "parent_blueprint_description": "Standardized onboarding flow for new hires",
          "parent_blueprint_name": "Employee Onboarding",
          "parent_nickname": "Q3 onboarding cohort",
          "parent_run_id": "ar_parent_12345",
          "permitted_roles": [
            "admin",
            "user"
          ],
          "primary_css": {
            "agent_id": "a_12345",
            "first_name": "John",
            "last_name": "Doe",
            "middle_name": "M"
          },
          "priority": "high",
          "rejected": {
            "reason": "Task was rejected because XYZ",
            "rejected_at": "2023-04-01T12:00:00Z",
            "rejected_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            }
          },
          "scheduled_at": "2023-04-01T12:00:00Z",
          "section_name": "string",
          "sla_duration": {
            "time": 3600,
            "unit": "minutes"
          },
          "source_system": "\"avantos\"",
          "started_at": "2023-04-01T12:00:00Z",
          "status": "todo",
          "tags": [
            "urgent",
            "compliance"
          ],
          "task_type": "submission",
          "total_time_waiting_ms": 3600000,
          "unblocked_at": "2023-04-01T12:00:00Z",
          "waiting_for": "Team Member",
          "who_waiting_on": "Client"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/tasks/bulk-transfer-assignments - action-run-tasks-bulk-transfer-assignments

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTasksBulkAssignOutputBody.json",
      "failed_tasks": [
        {
          "reason": "Permission denied",
          "task_id": "task_123"
        }
      ],
      "successful_task_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tasks/{task_id}/run-info - task-run-info

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaskRunInfoOutputBody.json",
      "is_legacy": true,
      "run_id": "ar_456",
      "task_id": "ar_t_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/tax-filings - tax-filing-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListTaxFilingsOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "tax_filings": [
        {
          "adjusted_gross_income": "string",
          "advisor_review_needed": true,
          "agi": "string",
          "amended_return": true,
          "charitable_donations": "string",
          "client_organisation_external_id": "string",
          "client_organisation_extra_properties": {
            "key": "string"
          },
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_relationship_status": "string",
          "client_organisation_tax_assistant_email": "string",
          "client_organisation_tax_assistant_external_id": "string",
          "client_organisation_tax_assistant_first_name": "string",
          "client_organisation_tax_assistant_last_name": "string",
          "client_organisation_tax_assistant_title": "string",
          "client_organisation_tax_associate_email": "string",
          "client_organisation_tax_associate_external_id": "string",
          "client_organisation_tax_associate_first_name": "string",
          "client_organisation_tax_associate_last_name": "string",
          "client_organisation_tax_associate_title": "string",
          "client_organisation_tax_manager_email": "string",
          "client_organisation_tax_manager_external_id": "string",
          "client_organisation_tax_manager_first_name": "string",
          "client_organisation_tax_manager_last_name": "string",
          "client_organisation_tax_manager_title": "string",
          "completion_window": "string",
          "complexity_type": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "credits": "string",
          "date_filed": "2026-01-15T10:30:00Z",
          "deductions": "string",
          "document_due_date": "2026-01-15T10:30:00Z",
          "document_received_date": "2026-01-15T10:30:00Z",
          "e_file_authorization_date": "2026-01-15T10:30:00Z",
          "e_file_status": "string",
          "e_file_status_date": "2026-01-15T10:30:00Z",
          "effective_tax_rate": "string",
          "extension_filed": true,
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "filing_due_date": "2026-01-15T10:30:00Z",
          "filing_method": "string",
          "filing_status": "string",
          "final_year": true,
          "gifting": "string",
          "id": "string",
          "invoicing_method": "string",
          "marginal_tax_rate": "string",
          "organizer_sent": true,
          "organizer_sent_date": "2026-01-15T10:30:00Z",
          "payment_method": "string",
          "prepaid_taxes": "string",
          "reported_income": "string",
          "return_completion_date": "2026-01-15T10:30:00Z",
          "safe_harbor": "string",
          "service_offering": "string",
          "signature_preference": "string",
          "tax_associate_email": "string",
          "tax_associate_external_id": "string",
          "tax_associate_first_name": "string",
          "tax_associate_id": "string",
          "tax_associate_last_name": "string",
          "tax_fee": "string",
          "tax_filing_type": "string",
          "tax_liability": "string",
          "tax_manager_email": "string",
          "tax_manager_external_id": "string",
          "tax_manager_first_name": "string",
          "tax_manager_id": "string",
          "tax_manager_last_name": "string",
          "tax_professional_category": "string",
          "tax_return_status": "string",
          "tax_return_type": "string",
          "tax_service_type_1040": "string",
          "tax_services_final_year": true,
          "tax_support_specialist_email": "string",
          "tax_support_specialist_external_id": "string",
          "tax_support_specialist_first_name": "string",
          "tax_support_specialist_id": "string",
          "tax_support_specialist_last_name": "string",
          "tax_year": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/completion-windows - tax-filing-completion-windows-temp

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxFilingCompletionWindowAggregationOutputBody.json",
      "completion_windows": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/tax-pods - tax-filing-tax-pods-temp

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxFilingTaxPodAggregationOutputBody.json",
      "tax_pods": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/tax-return-types - tax-return-type-temp

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxReturnTypeAggregationOutputBody.json",
      "tax_return_types": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/{tax_filing_id} - tax-filing-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetTaxFilingByIDOutputBody.json",
      "tax_filing": {
        "adjusted_gross_income": "string",
        "advisor_review_needed": true,
        "agi": "string",
        "amended_return": true,
        "charitable_donations": "string",
        "client_organisation_external_id": "string",
        "client_organisation_extra_properties": {
          "key": "string"
        },
        "client_organisation_id": "string",
        "client_organisation_name": "string",
        "client_organisation_relationship_status": "string",
        "client_organisation_tax_assistant_email": "string",
        "client_organisation_tax_assistant_external_id": "string",
        "client_organisation_tax_assistant_first_name": "string",
        "client_organisation_tax_assistant_last_name": "string",
        "client_organisation_tax_assistant_title": "string",
        "client_organisation_tax_associate_email": "string",
        "client_organisation_tax_associate_external_id": "string",
        "client_organisation_tax_associate_first_name": "string",
        "client_organisation_tax_associate_last_name": "string",
        "client_organisation_tax_associate_title": "string",
        "client_organisation_tax_manager_email": "string",
        "client_organisation_tax_manager_external_id": "string",
        "client_organisation_tax_manager_first_name": "string",
        "client_organisation_tax_manager_last_name": "string",
        "client_organisation_tax_manager_title": "string",
        "completion_window": "string",
        "complexity_type": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "credits": "string",
        "date_filed": "2026-01-15T10:30:00Z",
        "deductions": "string",
        "document_due_date": "2026-01-15T10:30:00Z",
        "document_received_date": "2026-01-15T10:30:00Z",
        "e_file_authorization_date": "2026-01-15T10:30:00Z",
        "e_file_status": "string",
        "e_file_status_date": "2026-01-15T10:30:00Z",
        "effective_tax_rate": "string",
        "extension_filed": true,
        "external_id": "string",
        "extra_properties": {
          "key": "string"
        },
        "filing_due_date": "2026-01-15T10:30:00Z",
        "filing_method": "string",
        "filing_status": "string",
        "final_year": true,
        "gifting": "string",
        "id": "string",
        "invoicing_method": "string",
        "marginal_tax_rate": "string",
        "organizer_sent": true,
        "organizer_sent_date": "2026-01-15T10:30:00Z",
        "payment_method": "string",
        "prepaid_taxes": "string",
        "reported_income": "string",
        "return_completion_date": "2026-01-15T10:30:00Z",
        "safe_harbor": "string",
        "service_offering": "string",
        "signature_preference": "string",
        "tax_associate_email": "string",
        "tax_associate_external_id": "string",
        "tax_associate_first_name": "string",
        "tax_associate_id": "string",
        "tax_associate_last_name": "string",
        "tax_fee": "string",
        "tax_filing_type": "string",
        "tax_liability": "string",
        "tax_manager_email": "string",
        "tax_manager_external_id": "string",
        "tax_manager_first_name": "string",
        "tax_manager_id": "string",
        "tax_manager_last_name": "string",
        "tax_professional_category": "string",
        "tax_return_status": "string",
        "tax_return_type": "string",
        "tax_service_type_1040": "string",
        "tax_services_final_year": true,
        "tax_support_specialist_email": "string",
        "tax_support_specialist_external_id": "string",
        "tax_support_specialist_first_name": "string",
        "tax_support_specialist_id": "string",
        "tax_support_specialist_last_name": "string",
        "tax_year": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/trigger-execution-logs - trigger-execution-logs-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerExecutionLogsListResponseBody.json",
      "data": [
        {
          "action_run_id": "string",
          "error": "string",
          "execution_time_ms": 1,
          "id": "string",
          "mapped_response": {
            "key": {}
          },
          "metadata": {
            "action_run_id": "run_12345",
            "blueprint_name": "Client Onboarding",
            "status": "processing"
          },
          "request_body": "string",
          "request_headers": {
            "key": {}
          },
          "request_method": "string",
          "request_query_params": {
            "key": {}
          },
          "request_url": "string",
          "response_body": "string",
          "response_code": 1,
          "response_headers": {
            "key": {}
          },
          "status": "string",
          "timestamp": "2026-01-15T10:30:00Z",
          "trigger_endpoint_id": "string",
          "trigger_origin": "node",
          "trigger_origin_identifier": "string",
          "user_info": {
            "key": {}
          }
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/endpoints - trigger-endpoint-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointListOutputBody.json",
      "trigger_endpoints": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/endpoints - trigger-endpoint-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} - trigger-endpoint-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} - trigger-endpoint-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
      "created_at": "2021-01-01T00:00:00Z",
      "custom_headers_template": {
        "userId": "{{.user_id}}"
      },
      "custom_headers_template_variables": [
        "user_id"
      ],
      "error_message_template": [
        {
          "message": "This Relationship has not been synced to Orion.",
          "pattern": "ClientId not set.*Salesforce"
        }
      ],
      "id": "te_213j32",
      "name": "Send Email",
      "output_mapping": {
        "id": ".data.value.id"
      },
      "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
      "path_template_variables": [
        "customer_id"
      ],
      "payload_template": {
        "subject": "{{.subject}}",
        "to": "{{.to}}"
      },
      "payload_template_variables": [
        "to",
        "subject"
      ],
      "payload_type": "json",
      "query_parameter_template": {
        "user_id": "{{.user_id}}"
      },
      "query_parameter_template_variables": [
        "user_id"
      ],
      "request_method": "POST",
      "timeout_seconds": 10,
      "trigger_service_id": "ts_213j32",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} - trigger-endpoint-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id}/execute - trigger-endpoint-execute

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointExecuteOutputBody.json",
      "execution_time_ms": 100,
      "mapped": {
        "age": 30,
        "name": "John"
      },
      "raw": "eyJuYW1lIjoiSm9obiJ9",
      "request_body": "{\"name\": \"John\"}",
      "request_route": "https://dev.api.example.com/something/",
      "response_body": "{\"success\": true}",
      "response_code": 200
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services - trigger-service-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceListOutputBody.json",
      "trigger_services": [
        {
          "auth_body": {
            "audience": "https://api.example.com",
            "scope": "read write"
          },
          "auth_body_type": "json",
          "auth_config": {
            "header_key": "Authorization",
            "token": "12345"
          },
          "auth_type": "bearer",
          "base_url": "https://api.sendgrid.com/v3",
          "created_at": "2021-01-01T00:00:00Z",
          "environments": {
            "key": {
              "$schema": {},
              "auth_body": {},
              "auth_body_type": {},
              "auth_config": {},
              "auth_type": {},
              "base_url": {},
              "created_at": {},
              "environment": {},
              "id": {},
              "is_enabled": {},
              "timeout_seconds": {},
              "updated_at": {}
            }
          },
          "id": "ts_213j32",
          "is_enabled": true,
          "is_virtual": false,
          "name": "SendGrid",
          "timeout_seconds": 120,
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/services - trigger-service-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/triggers/services/{trigger_service_id} - trigger-service-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id} - trigger-service-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceGetOutputBody.json",
      "endpoints": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "service": {
        "auth_body": {
          "audience": "https://api.example.com",
          "scope": "read write"
        },
        "auth_body_type": "json",
        "auth_config": {
          "header_key": "Authorization",
          "token": "12345"
        },
        "auth_type": "bearer",
        "base_url": "https://api.sendgrid.com/v3",
        "created_at": "2021-01-01T00:00:00Z",
        "environments": {
          "key": {
            "$schema": "https://example.com/schemas/TriggerServiceEnvironmentDescription.json",
            "auth_body": {
              "audience": "https://api.example.com",
              "scope": "read write"
            },
            "auth_body_type": "json",
            "auth_config": {
              "header_key": "Authorization",
              "token": "dev-12345"
            },
            "auth_type": "bearer",
            "base_url": "https://dev.api.sendgrid.com/v3",
            "created_at": "2021-01-01T00:00:00Z",
            "environment": "dev",
            "id": "tse_abc123",
            "is_enabled": true,
            "timeout_seconds": 10,
            "updated_at": "2021-01-01T00:00:00Z"
          }
        },
        "id": "ts_213j32",
        "is_enabled": true,
        "is_virtual": false,
        "name": "SendGrid",
        "timeout_seconds": 120,
        "updated_at": "2021-01-01T00:00:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/triggers/services/{trigger_service_id} - trigger-service-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments - trigger-service-environment-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceEnvironmentListOutputBody.json",
      "environments": [
        {
          "$schema": "https://example.com/schemas/TriggerServiceEnvironmentDescription.json",
          "auth_body": {
            "audience": "https://api.example.com",
            "scope": "read write"
          },
          "auth_body_type": "json",
          "auth_config": {
            "header_key": "Authorization",
            "token": "dev-12345"
          },
          "auth_type": "bearer",
          "base_url": "https://dev.api.sendgrid.com/v3",
          "created_at": "2021-01-01T00:00:00Z",
          "environment": "dev",
          "id": "tse_abc123",
          "is_enabled": true,
          "timeout_seconds": 10,
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments - trigger-service-environment-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceEnvironmentCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} - trigger-service-environment-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} - trigger-service-environment-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceEnvironmentDescription.json",
      "auth_body": {
        "audience": "https://api.example.com",
        "scope": "read write"
      },
      "auth_body_type": "json",
      "auth_config": {
        "header_key": "Authorization",
        "token": "dev-12345"
      },
      "auth_type": "bearer",
      "base_url": "https://dev.api.sendgrid.com/v3",
      "created_at": "2021-01-01T00:00:00Z",
      "environment": "dev",
      "id": "tse_abc123",
      "is_enabled": true,
      "timeout_seconds": 10,
      "updated_at": "2021-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} - trigger-service-environment-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/unqork-custom-api/cash-breakdown - unqork-cash-breakdown

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ResponseUnqorkCashBreakdown.json",
      "data": {
        "resolved": {
          "cashAccounts": [
            {
              "key": {}
            }
          ],
          "cashAvailableForDistribution": 1.0,
          "cashAvailableToInvest": 1.0,
          "contributions": 1.0,
          "dollarCostAverage": 1.0,
          "excessCashToBeInvested": 1.0,
          "excessCashWithTolerance": 1.0,
          "feeCash": 1.0,
          "financialAccountData": {
            "key": {}
          },
          "incomeCash": 1.0,
          "incomingContribution": 1.0,
          "modelCash": 1.0,
          "modelCashMin": 1.0,
          "otherCash": 1.0,
          "pendingDistribution": 1.0,
          "potentialCashToBeRaised": 1.0,
          "protectedCash": 1.0,
          "readyForDistribution": 1.0,
          "recurringDistribution": 1.0,
          "reservedCash": 1.0,
          "sleeveAccounts": [
            {
              "key": {}
            }
          ],
          "totalCash": 1.0
        }
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/unqork-custom-api/identify-tpm - unqork-identify-third-party-manager

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ResponseUnqorkIdentifyThirdPartyManager.json",
      "data": {
        "resolved": {
          "interactionType": "string",
          "thirdPartyManager": "string",
          "thirdPartyManagerAssetType": "string",
          "thirdPartyManagerDetails": [
            {
              "assetType": {},
              "delivery": {},
              "externalId": {},
              "interactionType": {},
              "newImplementationEmail": {},
              "otherEmail": {},
              "portalLink": {},
              "sortOrder": {},
              "strategistId": {},
              "thirdPartyManagerName": {},
              "type": {}
            }
          ],
          "thirdPartyManagerName": "string",
          "thirdPartyManagerType": "string",
          "tpmRecipients": [
            "string"
          ]
        }
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/unqork/action-runs/{unqork_id} - unqork-action-run-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunGetDescription.json",
      "action_details": {
        "cancellation_reason": "No longer needed",
        "cancelled_at": "2023-04-01T12:00:00Z",
        "cancelled_by": {
          "first_name": "John",
          "id": "u_12345",
          "last_name": "Doe"
        },
        "category": "onboarding",
        "completed_at": "2023-04-01T12:00:00Z",
        "created_at": "2023-04-01T12:00:00Z",
        "deadline": "2023-04-15T12:00:00Z",
        "expected_completion_date": "2023-04-20T12:00:00Z",
        "id": "ar_12345",
        "next_step": "2023-04-01T12:00:00Z",
        "ready_at": "2023-04-01T12:00:00Z",
        "rejection": {
          "rejected_at": "2023-04-01T12:00:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "The action run was rejected because it was no longer needed"
        },
        "scheduled_at": "2023-04-01T12:00:00Z",
        "started_at": "2023-04-01T12:00:00Z",
        "type": "distribution"
      },
      "blueprint": {
        "category": "Onboarding",
        "description": "Process for onboarding new customers",
        "id": "bp_12345",
        "name": "Customer Onboarding",
        "promoted_data_order": [
          "Promoted Field Name"
        ],
        "short_description": "Onboard customers",
        "version_id": "bpv_12345"
      },
      "child_trackers": [
        {
          "action_run_id": "ar_child_123",
          "component_key": "action_1",
          "name": "Client Onboarding",
          "section_name": "Section 1",
          "status": "in_progress",
          "status_tracker": [
            {
              "ReviewTask": {},
              "SubmitTask": {}
            }
          ]
        }
      ],
      "client_organisation_id": "co_xyz",
      "components": [
        {
          "action_run_id": "ar_12345",
          "blueprint_category": "onboarding",
          "blueprint_component_id": "bp_c_12345",
          "cancelled_at": "2023-04-01T12:00:00Z",
          "cancelled_by": "test@example.com",
          "cancelled_reason": "Test reason",
          "component_key": "customer-details",
          "component_name": "Customer Details",
          "component_type": "form",
          "id": "ar_c_12345",
          "resolved_form_id": "string",
          "result_data": {
            "key": {}
          },
          "skipped": false,
          "status": "todo",
          "submission_restricted": false,
          "tags": [
            "esign"
          ],
          "tasks": [
            {
              "action_run_id": {},
              "assigned": {},
              "can_begin": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "completed_at": {},
              "completed_by": {},
              "component_key": {},
              "created_at": {},
              "cron_job_queued": {},
              "data": {},
              "deadline": {},
              "environment": {},
              "id": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "note": {},
              "permitted_roles": {},
              "rejected": {},
              "scheduled_at": {},
              "section_name": {},
              "sla_duration": {},
              "started_at": {},
              "status": {},
              "tags": {},
              "task_type": {},
              "total_time_waiting_ms": {},
              "unblocked_at": {},
              "waiting_for": {},
              "who_waiting_on": {}
            }
          ],
          "tenant_id": "t_67890"
        }
      ],
      "custom_status": "Draft",
      "data": {
        "key": {}
      },
      "environment": "production",
      "generator_field_path": "accounts",
      "id": "ar_12345",
      "locked_at": "2026-01-15T10:30:00Z",
      "name": "My Action Run",
      "parent_component_id": "arc_12345",
      "parent_run_id": "ar_parent_12345",
      "recommended": true,
      "run_context": "<p>Hello</p>",
      "slug": "12345",
      "started_by": {
        "first_name": "John",
        "id": "u_12345",
        "last_name": "Doe"
      },
      "state_model": {
        "$schema": "https://example.com/schemas/ActionRunStateModelOutput.json",
        "created_at": "2026-01-15T10:30:00Z",
        "current_state": "draft",
        "current_state_display_color": "Neutral",
        "current_state_display_name": "Draft",
        "current_state_is_required": false,
        "data": {
          "key": {}
        },
        "id": "string",
        "schema_id": "string",
        "tracker": [
          {
            "display_color": "Neutral",
            "display_name": "Draft",
            "entered_at": "2026-01-15T10:30:00Z",
            "entered_by": {
              "email": {},
              "first_name": {},
              "id": {},
              "last_name": {},
              "middle_name": {}
            },
            "input": {
              "key": {}
            },
            "input_schema": [
              {}
            ],
            "is_final": false,
            "is_required": true,
            "state_name": "draft",
            "status": "completed",
            "transition_key": "approve"
          }
        ],
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "status": "in_progress",
      "status_tracker": [
        {
          "ReviewTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          },
          "SubmitTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          }
        }
      ],
      "tasks_data": [
        {
          "data": {
            "key": {
              "label": {},
              "value": {}
            }
          },
          "id": "t_12345",
          "name": "Customer Details"
        }
      ],
      "tenant_id": "t_67890",
      "type": "action_component_data"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/action-runs/{unqork_id} - unqork-action-run-upsert

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/unqork/action-runs/{unqork_id}/comments - unqork-action-run-comments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetUnqorkActionRunCommentsOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            {
              "first_name": "John",
              "id": "ag_123",
              "last_name": "Doe"
            },
            {
              "first_name": "Jane",
              "id": "ag_456",
              "last_name": "Smith"
            }
          ],
          "text": "This is a comment",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/unqork/comments - unqork-comment-create

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/comments/{unqork_id} - unqork-comment-upsert-as-avantos

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/notifications/{unqork_id} - unqork-notification-upsert

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/tasks/{unqork_id} - unqork-task-upsert

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/views/import - custom-views-import

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsImportOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/vpoc-all-clients/search - vpoc-all-clients-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AllClientsSearchOutputBody.json",
      "clients": [
        {
          "client_id": "string",
          "client_organisation_external_id": "string",
          "client_organisation_name": "string",
          "client_organisation_relationship_status": "string",
          "client_organisation_type": "string",
          "client_organisation_wealth_advisor_name": "string",
          "external_id": "string",
          "name": "string",
          "organisation_id": "string",
          "preferred_email": "string",
          "preferred_phone": "string",
          "tenant_id": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/whoami - whoami

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WhoAmIOutputBody.json",
      "additional_attributes": {
        "key": "string"
      },
      "agent_id": "123",
      "avantos_role": "SuperAdmin",
      "email": "john.doe@example.com",
      "environment": "uat",
      "external_id": "1234567890",
      "feature_list": [
        "string"
      ],
      "first_name": "John",
      "idp_role": "SuperAdmin",
      "last_name": "Doe",
      "login_role": "advisor",
      "role": "AvantosSuperAdmin",
      "tenant_id": "123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/widgets - widget-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetListOutputBody.json",
      "widgets": [
        {
          "$schema": "https://example.com/schemas/WidgetOutput.json",
          "config": {
            "key": {}
          },
          "createdAt": "2024-01-01T00:00:00Z",
          "height": 2,
          "id": "wdg_123",
          "isVisible": true,
          "page": "dashboard",
          "updatedAt": "2024-01-01T00:00:00Z",
          "widgetDefinitionId": "wdef_123",
          "width": 2,
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/widgets/positions - widget-batch-update-positions

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetBatchUpdatePositionsOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/widgets/{widget_id} - widget-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetOutput.json",
      "config": {
        "key": {}
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "height": 2,
      "id": "wdg_123",
      "isVisible": true,
      "page": "dashboard",
      "updatedAt": "2024-01-01T00:00:00Z",
      "widgetDefinitionId": "wdef_123",
      "width": 2,
      "x": 0,
      "y": 0
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/widgets/{widget_id} - widget-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetUpdateOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

