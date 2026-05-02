# agent-address-update

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/addresses`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- agent_id
  - type: string
  - required: yes
  - description: The Agent ID to which the address belongs

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
  - requestBody (application/json).address_line1
    - type: string
    - required: yes
  - requestBody (application/json).address_line2
    - type: string
    - required: no
  - requestBody (application/json).address_type
    - type: string
    - required: yes
  - requestBody (application/json).city
    - type: string
    - required: yes
  - requestBody (application/json).country
    - type: string
    - required: yes
  - requestBody (application/json).description
    - type: string
    - required: no
  - requestBody (application/json).state
    - type: string
    - required: no
  - requestBody (application/json).zipcode
    - type: string
    - required: yes

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: string

