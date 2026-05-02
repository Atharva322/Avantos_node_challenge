# agent-address-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/addresses`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- agent_id
  - type: string
  - required: yes
  - description: The Agent ID

### Query Parameters
- address_type
  - type: string
  - required: no
  - description: The address type to delete (e.g., home, work, billing)

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

