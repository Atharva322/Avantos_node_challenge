# agent-oauth-token-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/agents/oauth-tokens`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- provider
  - type: string
  - required: no
  - description: Optional provider to filter tokens

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AgentOauthTokensListOutputBody

