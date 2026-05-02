# agent-oauth-token-reconnect

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/reconnect`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- token_id
  - type: string
  - required: yes
  - description: The OAuth token ID to reconnect

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
    - description: The body of the request
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).code
    - type: string
    - required: yes
    - description: Authorization code from OAuth provider
  - requestBody (application/json).code_verifier
    - type: string
    - required: no
    - description: PKCE code verifier (optional)

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

