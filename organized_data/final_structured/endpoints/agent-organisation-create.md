# agent-organisation-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agent-organisations`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

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
  - requestBody (application/json).agent_organisation_role
    - type: string
    - required: no
    - description: The role of the agent organisation in the relationship
  - requestBody (application/json).agent_organisation_type
    - type: string
    - required: no
    - description: The type of the agent organisation (e.g., Corporation, LLC, Partnership)
  - requestBody (application/json).description
    - type: string
    - required: no
    - description: A brief description of the agent organisation
  - requestBody (application/json).name
    - type: string
    - required: yes
    - description: The name of the agent organisation
  - requestBody (application/json).parent_id
    - type: string
    - required: no
    - description: The unique identifier of the parent agent organisation
  - requestBody (application/json).updated_at
    - type: string
    - required: no
    - description: Timestamp of when the organisation was created

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: Advisor

