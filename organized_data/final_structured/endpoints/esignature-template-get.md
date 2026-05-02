# esignature-template-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/templates/{template_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- token_id
  - type: string
  - required: yes
- account_id
  - type: string
  - required: yes
- template_id
  - type: string
  - required: yes

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK

