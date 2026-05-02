# agent-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/agents/{id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- id
  - type: string
  - required: yes

### Query Parameters
- id
  - type: string
  - required: yes

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AgentGetOutputBody

