# admin-api-tokens-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/admin/api-tokens/{token_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- token_id
  - type: string
  - required: yes
  - description: Public token ID (not the internal record ID)

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: APITokenDeleteOutputBody

