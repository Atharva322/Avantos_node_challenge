# advisor-repcode-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes/{repcode_id}`

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
- repcode_id
  - type: string
  - required: yes
  - description: The repcode ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AdvisorRepcodeGetOutputBody

