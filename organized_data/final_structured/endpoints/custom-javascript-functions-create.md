# custom-javascript-functions-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/custom-javascript-functions`

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
  - requestBody (application/json).body
    - type: string
    - required: yes
    - description: The body of the custom javascript function
  - requestBody (application/json).description
    - type: string
    - required: yes
    - description: The description of the custom javascript function
  - requestBody (application/json).execution_role
    - type: string
    - required: no
    - description: Role name for Avantos API calls when executing server-side
  - requestBody (application/json).initiation
    - type: string
    - required: yes
    - description: The initiation code that runs before the main function body
  - requestBody (application/json).name
    - type: string
    - required: yes
    - description: The name of the custom javascript function
  - requestBody (application/json).request_keys
    - type: ['array', 'null']
    - required: no
    - description: Array of request parameter keys for server-side execution
  - requestBody (application/json).request_keys[]
    - type: string
    - required: no
    - description: Array of request parameter keys for server-side execution
  - requestBody (application/json).response_keys
    - type: ['array', 'null']
    - required: no
    - description: Array of response parameter keys for server-side execution
  - requestBody (application/json).response_keys[]
    - type: string
    - required: no
    - description: Array of response parameter keys for server-side execution
  - requestBody (application/json).server_side_enabled
    - type: boolean
    - required: no
    - description: Whether this function can be executed server-side

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: console.log('Hello World');

