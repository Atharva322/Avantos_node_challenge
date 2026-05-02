# team-client-organisation-remove

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams/{business_group_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- client_organisation_id
  - type: string
  - required: yes
- business_group_id
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

