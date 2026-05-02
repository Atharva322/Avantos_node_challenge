# role-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/roles`

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
  - requestBody (application/json).created_by
    - type: string
    - required: no
  - requestBody (application/json).description
    - type: string
    - required: no
  - requestBody (application/json).role_name
    - type: string
    - required: yes

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: string

