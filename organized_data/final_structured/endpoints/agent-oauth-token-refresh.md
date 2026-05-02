# agent-oauth-token-refresh

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/refresh`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- token_id
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

