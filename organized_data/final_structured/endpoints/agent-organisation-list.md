# agent-organisation-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/agent-organisations`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- agent_organisation_role
  - type: string
  - required: no
  - description: Optional filter by agent organisation role

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AgentOrganisationListOutputBody

