# action-run-reassign

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/reassign`

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
    - required: yes
    - description: The ID of the agent to assign all tasks to. Pass empty string to unassign all tasks.

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: a_12345

