# advisor-repcode-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes`

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
  - requestBody (application/json).description
    - type: string
    - required: no
    - description: A description of the repcode
  - requestBody (application/json).is_primary
    - type: boolean
    - required: yes
    - description: Whether this repcode is primary for the advisor
  - requestBody (application/json).repcode
    - type: string
    - required: yes
    - description: The unique repcode for the advisor

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: Primary Advisor Code

