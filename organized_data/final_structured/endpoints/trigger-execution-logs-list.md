# trigger-execution-logs-list

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/trigger-execution-logs`

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
  - requestBody (application/json).endpoint_id
    - type: string
    - required: no
    - description: Optional trigger endpoint ID to filter logs by
  - requestBody (application/json).filter
    - type: string
    - required: no
    - description: The Expression to filter the logs by. See the Readme for more details on the Expression format.
  - requestBody (application/json).pagination_params
    - type: object
    - required: no
    - description: Pagination information
  - requestBody (application/json).pagination_params.page
    - type: integer
    - required: yes
    - description: The page number to return
  - requestBody (application/json).pagination_params.page_size
    - type: integer
    - required: yes
    - description: The number of records per page
  - requestBody (application/json).run_component
    - type: object
    - required: no
    - description: Optional run component identifier to filter request logs by
  - requestBody (application/json).run_component.action_run_id
    - type: string
    - required: yes
    - description: Action run ID to filter logs by
  - requestBody (application/json).run_component.component_key
    - type: string
    - required: yes
    - description: Component key to filter logs by

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: string

