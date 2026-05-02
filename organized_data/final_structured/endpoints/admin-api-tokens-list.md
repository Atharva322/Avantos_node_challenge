# admin-api-tokens-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/admin/api-tokens`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes

### Query Parameters
- page
  - type: integer
  - required: no
  - description: Page number (1-based)
- page_size
  - type: integer
  - required: no
  - description: Page size
- expired
  - type: string
  - required: no
  - description: Filter by expired: true
- is_active
  - type: string
  - required: no
  - description: Filter by active status: true
- auth_method
  - type: string
  - required: no
  - description: Filter by auth method: bearer

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: APITokenListOutputBody

