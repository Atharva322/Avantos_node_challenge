# task-run-info

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/tasks/{task_id}/run-info`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
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
- 200
  - description: OK
  - content-type: application/json
  - schema: TaskRunInfoOutputBody

