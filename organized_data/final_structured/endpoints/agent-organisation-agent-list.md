# agent-organisation-agent-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/agents`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- agent_organisation_id
  - type: string
  - required: yes
  - description: The agent organisationID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AgentOrganisationAgentListOutputBody

