# action-run-task-cancel-confirm

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/cancel`

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
- task_id
  - type: string
  - required: yes
  - description: The task ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

