# docusign-token-generate

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/gpoc-docusign/token`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: DocuSignTokenResponseDoc

