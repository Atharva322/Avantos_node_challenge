# business-group-coverage-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/business-groups/{business_group_id}/coverage`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- business_group_id
  - type: string
  - required: yes
  - description: The business group ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json

