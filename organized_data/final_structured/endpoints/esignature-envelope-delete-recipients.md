# esignature-envelope-delete-recipients

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/recipients/delete`

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
- envelope_id
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

