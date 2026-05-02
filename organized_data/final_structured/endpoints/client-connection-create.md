# client-connection-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/clients/{client_id}/client-connections`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_id
  - type: string
  - required: yes
  - description: The ID of the initiating client

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
  - requestBody (application/json).participating_client_id
    - type: string
    - required: yes
    - description: The ID of the participating client
  - requestBody (application/json).relationship_description
    - type: string
    - required: no
    - description: Optional description of the relationship
  - requestBody (application/json).relationship_type
    - type: string
    - required: yes
    - description: The relationship type (e.g., Spouse, Child, Business Partner). A lookup will be created if it doesn't exist.

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: CreateClientClientConnectionOutputBody

