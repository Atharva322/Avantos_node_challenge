# lookup-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/lookups/{lookup_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- lookup_id
  - type: string
  - required: yes
  - description: The lookup ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json

