# meeting-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/meetings/{id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- id
  - type: string
  - required: yes

### Query Parameters
- id
  - type: string
  - required: yes
  - description: The meeting ID

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

