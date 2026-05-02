# action-run-task-update-waiting

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/waiting`

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
  - description: The task ID of the task

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
  - requestBody (application/json).next_step_date
    - type: string
    - required: no
    - description: The date and time of the next step in the task
  - requestBody (application/json).note
    - type: string
    - required: no
    - description: User defined info, possibly describing why the task is in its current state
  - requestBody (application/json).waiting
    - type: boolean
    - required: yes
    - description: Whether the task is waiting for a response
  - requestBody (application/json).waiting_for
    - type: string
    - required: no
    - description: What the task is waiting for
  - requestBody (application/json).who_waiting_on
    - type: string
    - required: no
    - description: Who the task is waiting on

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: 2023-04-01T12:00:00Z

