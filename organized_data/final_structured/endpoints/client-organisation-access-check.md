# client-organisation-access-check

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/client-organisations/access-check`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- external_id
  - type: string
  - required: no
  - description: The external ID of the client organization

### Query Parameters
- id
  - type: string
  - required: no
  - description: The Avantos ID of the client organization

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ClientOrganizationAccessCheckOutputBody

