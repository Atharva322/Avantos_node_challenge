# agent-client-organisation-relationship-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/client-relationships/{client_organisation_id}/{relationship_type}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- agent_id
  - type: string
  - required: yes
- client_organisation_id
  - type: string
  - required: yes
- relationship_type
  - type: string
  - required: yes

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK

