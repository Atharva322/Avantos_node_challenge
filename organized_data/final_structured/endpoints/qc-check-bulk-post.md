# qc-check-bulk-post

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/qc-check-bulk`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

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
  - requestBody (application/json).tasks
    - type: ['array', 'null']
    - required: yes
    - description: List of tasks to process
  - requestBody (application/json).tasks[]
    - type: object
    - required: yes
    - description: List of tasks to process
  - requestBody (application/json).tasks[].action_name
    - type: string
    - required: no
    - description: Optional action name for display purposes
  - requestBody (application/json).tasks[].action_run_id
    - type: string
    - required: yes
    - description: The action run ID for this task
  - requestBody (application/json).tasks[].task_id
    - type: string
    - required: yes
    - description: The task ID
  - requestBody (application/json).tasks[].task_name
    - type: string
    - required: no
    - description: Optional task name for display purposes
  - requestBody (application/json).tasks[].tool_type
    - type: string
    - required: yes
    - description: The QC tool type

## Responses
- 202
  - description: Accepted
  - content-type: application/json
  - schema: QCCheckBulkAsyncOutputBody

