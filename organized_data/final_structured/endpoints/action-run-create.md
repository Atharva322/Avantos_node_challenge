# action-run-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/action-runs`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).action_blueprint_id
    - type: string
    - required: yes
    - description: The action blueprint ID to run
  - requestBody (application/json).client__organisation_id
    - type: string
    - required: yes
    - description: the client organisation ID
  - requestBody (application/json).config_assign_to_me
    - type: boolean
    - required: no
    - description: Whether to assign the configuration task to the user who is making the request
  - requestBody (application/json).config_assignee_id
    - type: string
    - required: no
    - description: Optional:The ID of the agent to assign the configuration task associated with this action run to
  - requestBody (application/json).configuration_data
    - type: object
    - required: no
    - description: The configuration data for the action run
  - requestBody (application/json).configuration_schemas
    - type: object
    - required: no
    - description: Optional schemas for configuration form when dynamic fields are used
  - requestBody (application/json).configuration_schemas.form_data_schema
    - type: object
    - required: no
  - requestBody (application/json).configuration_schemas.ui_schema
    - type: object
    - required: no
  - requestBody (application/json).force_draft
    - type: boolean
    - required: no
    - description: Whether to force the action run to be a draft. Defaults to true if not specified.
  - requestBody (application/json).generator_field_path
    - type: string
    - required: no
    - description: Optional: The JSON path of the generator field that spawned this action run
  - requestBody (application/json).meeting_id
    - type: string
    - required: no
    - description: The meeting ID to link to the action run
  - requestBody (application/json).name
    - type: string
    - required: no
    - description: Name of the action run, if not provided the actionDescription from the configuration data or the blueprint name will be used
  - requestBody (application/json).parent_component_id
    - type: string
    - required: no
    - description: Optional: The ID of the parent component that spawned this action run (for generator fields)
  - requestBody (application/json).parent_run_id
    - type: string
    - required: no
    - description: Optional: The ID of the parent action run id that spawned this action run (for generator fields)
  - requestBody (application/json).recommended
    - type: boolean
    - required: yes
    - description: Whether the action run is recommended to be run
  - requestBody (application/json).run_context
    - type: string
    - required: no
    - description: Context of the action run
  - requestBody (application/json).scheduled_at
    - type: string
    - required: no
    - description: Timestamp when the action run should be scheduled to start. If not specified, the action run will be started immediately
  - requestBody (application/json).temp_run_context
    - type: string
    - required: no
    - description: Optional temporary context of the action run

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: bp_12345

