# action-run-task-save

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/save`

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
  - description: The task ID of the task to submit

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
  - requestBody (application/json).data
    - type: object
    - required: yes
  - requestBody (application/json).graph_etag
    - type: string
    - required: no
    - description: ETag from render response for optimistic concurrency on data-layer write-back
  - requestBody (application/json).prevent_status_change
    - type: boolean
    - required: no
    - description: If true, prevents the task from automatically transitioning from 'todo' to 'in_progress' when saving. Defaults to false (status will change).
  - requestBody (application/json).schemas
    - type: object
    - required: no
  - requestBody (application/json).schemas.form_data_schema
    - type: object
    - required: no
  - requestBody (application/json).schemas.ui_schema
    - type: object
    - required: no

## Responses
- 204
  - description: No Content
  - content-type: application/json

