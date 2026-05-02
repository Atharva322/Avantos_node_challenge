# action-run-pre-assignment-assign

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments/{pre_assignment_id}/assign`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- action_run_id
  - type: string
  - required: yes
  - description: The action run ID
- pre_assignment_id
  - type: string
  - required: yes
  - description: The pre-assignment ID

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
  - requestBody (application/json).agent_id
    - type: string
    - required: no
    - description: The agent ID to assign, or null to unassign

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ag_456

