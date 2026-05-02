# client-organisation-connection-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_organisation_id
  - type: string
  - required: yes
  - description: The ID of the initiating client organisation

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).extra_properties
    - type: object
    - required: no
    - description: Additional properties for the connection
  - requestBody (application/json).participating_client_organisation_id
    - type: string
    - required: yes
    - description: The ID of the participating client organisation
  - requestBody (application/json).relationship_description
    - type: string
    - required: no
    - description: Optional description of the relationship
  - requestBody (application/json).relationship_type
    - type: string
    - required: yes
    - description: The relationship type (e.g., Parent Company, Subsidiary, Trust)

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: CreateClientOrganisationConnectionOutputBody

