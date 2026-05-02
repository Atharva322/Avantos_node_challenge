# lookup-list-by-category

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/lookups/{category}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- category
  - type: string
  - required: yes

### Query Parameters
- category
  - type: string
  - required: yes
  - description: The lookup category

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json

