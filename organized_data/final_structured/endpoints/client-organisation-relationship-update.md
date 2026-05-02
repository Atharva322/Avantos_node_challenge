# client-organisation-relationship-update

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/client-organisation-relationships/{relationship_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- relationship_id
  - type: string
  - required: yes
  - description: The relationship ID

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
  - requestBody (application/json).description
    - type: string
    - required: no
    - description: Updated description
  - requestBody (application/json).extra_properties
    - type: object
    - required: no
    - description: Updated additional properties
  - requestBody (application/json).role
    - type: string
    - required: no
    - description: The new role for the relationship

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: Primary contact for the family

