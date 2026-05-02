# business-group-update

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/business-groups/{business_group_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- business_group_id
  - type: string
  - required: yes
  - description: The business group ID

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
  - requestBody (application/json).additional_attributes
    - type: object
    - required: no
    - description: Additional attributes for the business group as a map
  - requestBody (application/json).description
    - type: string
    - required: no
    - description: A description of the business group
  - requestBody (application/json).name
    - type: string
    - required: no
    - description: The name of the business group
  - requestBody (application/json).status
    - type: string
    - required: no
    - description: The status of the business group

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: BusinessGroupUpdateOutputBody

