# action-component-form-update-details

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/actions/components/forms/{form_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- form_id
  - type: string
  - required: yes
  - description: The form ID

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
    - type: ['string', 'null']
    - required: yes
    - description: The form description
  - requestBody (application/json).name
    - type: ['string', 'null']
    - required: yes
    - description: The form name

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: This is my form

