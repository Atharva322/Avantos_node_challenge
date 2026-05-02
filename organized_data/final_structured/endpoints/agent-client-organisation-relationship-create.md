# agent-client-organisation-relationship-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/client-relationships`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- agent_id
  - type: string
  - required: yes
  - description: The agent ID

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
  - requestBody (application/json).client_organisation_id
    - type: string
    - required: yes
  - requestBody (application/json).description
    - type: string
    - required: no
  - requestBody (application/json).direct_assignment
    - type: boolean
    - required: no
    - description: Whether this relationship constitutes a direct assignment for filtering purposes
  - requestBody (application/json).extra_properties
    - type: object
    - required: no
    - description: Additional properties of the client organisation as key-value pairs
  - requestBody (application/json).relationship_type
    - type: string
    - required: yes

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: string

