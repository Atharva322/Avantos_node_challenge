# agent-documents-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/documents`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- agent_id
  - type: string
  - required: yes
  - description: The agent ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: GetDocumentsOutputBody

