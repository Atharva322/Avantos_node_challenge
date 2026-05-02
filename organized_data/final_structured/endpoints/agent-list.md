# agent-list

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agents-list`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- include_role
  - type: boolean
  - required: no
  - description: Include agent role/type in response (default: false)

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
  - requestBody (application/json).active
    - type: boolean
    - required: no
    - description: Filter only active agents (default: false)
  - requestBody (application/json).idp_users_only
    - type: boolean
    - required: no
    - description: Filter only agents with IDP subject set (default: false)
  - requestBody (application/json).pagination_params
    - type: object
    - required: no
    - description: The pagination information for the tasks
  - requestBody (application/json).pagination_params.page
    - type: integer
    - required: yes
    - description: The page number to return
  - requestBody (application/json).pagination_params.page_size
    - type: integer
    - required: yes
    - description: The number of records per page
  - requestBody (application/json).search
    - type: string
    - required: no
    - description: Search term to filter agents by full name or external ID
  - requestBody (application/json).users_with_external_id_only
    - type: boolean
    - required: no
    - description: Filter only agents with external ID set (default: false)

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AgentListOutputBody

