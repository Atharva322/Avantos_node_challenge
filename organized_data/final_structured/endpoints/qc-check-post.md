# qc-check-post

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/qc-check`

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
  - requestBody (application/json).task_id
    - type: string
    - required: yes
    - description: The task ID
  - requestBody (application/json).tool_type
    - type: string
    - required: yes
    - description: The QC tool type

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: task_123

