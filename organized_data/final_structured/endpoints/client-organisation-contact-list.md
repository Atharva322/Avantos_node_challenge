# client-organisation-contact-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/contacts`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_organisation_id
  - type: string
  - required: yes
  - description: The client organisation ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ClientOrganisationContactListOutputBody

