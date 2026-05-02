# lookup-update

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/lookups/{lookup_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- lookup_id
  - type: string
  - required: yes
  - description: The lookup ID

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
  - requestBody (application/json).category
    - type: string
    - required: no
    - description: The category of the lookup
  - requestBody (application/json).description
    - type: string
    - required: no
    - description: A description of the lookup
  - requestBody (application/json).external_id
    - type: string
    - required: no
    - description: The external system identifier
  - requestBody (application/json).extra_properties
    - type: object
    - required: no
    - description: Additional properties for the lookup as a map
  - requestBody (application/json).is_active
    - type: boolean
    - required: no
    - description: Whether the lookup is active
  - requestBody (application/json).value
    - type: string
    - required: no
    - description: The value of the lookup

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: business_group_coverage

