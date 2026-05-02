# manager-team-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/manager-teams/{manager_team_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- manager_team_id
  - type: string
  - required: yes
  - description: The team manager's agent ID

### Query Parameters
- include_inactive
  - type: boolean
  - required: no
  - description: Include inactive team members (default: false)
- page
  - type: integer
  - required: no
  - description: Page number for pagination (default: 1)
- page_size
  - type: integer
  - required: no
  - description: Number of items per page (default: 10)

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ManagerTeamGetOutputBody

