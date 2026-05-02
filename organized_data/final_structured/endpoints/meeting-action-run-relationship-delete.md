# meeting-action-run-relationship-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/meetings/{meeting_id}/action-runs/{action_run_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- meeting_id
  - type: string
  - required: yes
  - description: The meeting ID
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
- 204
  - description: No Content
  - content-type: application/json

