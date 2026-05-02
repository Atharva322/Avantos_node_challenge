# action-run-task-submit

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/submit`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- action_run_id
  - type: string
  - required: yes
- task_id
  - type: string
  - required: yes

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK

