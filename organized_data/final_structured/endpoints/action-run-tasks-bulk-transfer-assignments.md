# action-run-tasks-bulk-transfer-assignments

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/tasks/bulk-transfer-assignments`

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
  - requestBody (application/json).from_agent_id
    - type: string
    - required: yes
    - description: The ID of the agent to transfer tasks from
  - requestBody (application/json).task_ids
    - type: ['array', 'null']
    - required: no
    - description: Optional list of specific task IDs to transfer. If not provided, all eligible tasks from the agent will be transferred
  - requestBody (application/json).task_ids[]
    - type: string
    - required: no
    - description: Optional list of specific task IDs to transfer. If not provided, all eligible tasks from the agent will be transferred
  - requestBody (application/json).to_agent_id
    - type: string
    - required: yes
    - description: The ID of the agent to transfer tasks to, pass empty string to unassign the tasks

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: a_12345

