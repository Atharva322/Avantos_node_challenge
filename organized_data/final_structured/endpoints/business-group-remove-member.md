# business-group-remove-member

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/business-groups/{business_group_id}/members/{agent_id}/roles/{role}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- business_group_id
  - type: string
  - required: yes
  - description: The business group ID
- agent_id
  - type: string
  - required: yes
  - description: The agent ID to remove
- role
  - type: string
  - required: yes

### Query Parameters
- role
  - type: string
  - required: yes
  - description: The role to remove from the agent - required

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

