# action-run-task-schedule-update

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/schedule`

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
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).scheduled_at
    - type: string
    - required: yes
    - description: Timestamp when the task should be scheduled to start

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: 2019-08-24T14:15:22Z

