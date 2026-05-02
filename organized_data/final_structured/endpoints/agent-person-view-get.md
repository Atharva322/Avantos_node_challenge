# agent-person-view-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/agents/{id}/person-view`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- id
  - type: string
  - required: yes

### Query Parameters
- id
  - type: string
  - required: yes
  - description: The agent ID

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AgentPersonViewGetOutputBody

