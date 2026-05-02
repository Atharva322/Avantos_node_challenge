# action-run-pre-assignments-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments`

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
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ActionRunPreAssignmentsGetOutputBody

