# js-execute

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/js_execute/{custom_js_function_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- custom_js_function_id
  - type: string
  - required: yes
  - description: The custom javascript function ID

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
  - requestBody (application/json).initiation_override
    - type: string
    - required: no
    - description: Optional initiation code override
  - requestBody (application/json).request
    - type: object
    - required: yes
    - description: Request data matching the function's request_keys

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: string

