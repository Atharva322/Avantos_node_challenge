# client-organisation-relationships-get-all

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/relationships`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_organisation_id
  - type: string
  - required: yes
  - description: The ID of the client organisation you want to retrieve the relationships for

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: GetAllClientOrganisationRelationshipsOutputBody

