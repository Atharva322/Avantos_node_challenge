# client-organisation-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/client-organisations/{id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- id
  - type: string
  - required: yes

### Query Parameters
- id
  - type: string
  - required: yes
  - description: The Organisation ID

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ClientOrganisationGetOutputBody

