# client-agent-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/clients/{client_id}/agents`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_id
  - type: string
  - required: yes
  - description: The client ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ClientAgentListOutputBody

