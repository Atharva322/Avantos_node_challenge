# trigger-endpoint-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/triggers/endpoints`

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
  - requestBody (application/json).custom_headers_template
    - type: object
    - required: yes
    - description: The custom headers template for the endpoint
  - requestBody (application/json).error_message_template
    - type: ['array', 'null']
    - required: no
    - description: Error message templates for pattern matching
  - requestBody (application/json).error_message_template[]
    - type: object
    - required: no
    - description: Error message templates for pattern matching
  - requestBody (application/json).error_message_template[].message
    - type: string
    - required: yes
    - description: User-friendly error message template (supports Go template syntax with {{.error}} and {{.variables.fieldName}})
  - requestBody (application/json).error_message_template[].pattern
    - type: string
    - required: yes
    - description: Regex pattern to match in error messages
  - requestBody (application/json).name
    - type: string
    - required: yes
    - description: The name of the trigger endpoint
  - requestBody (application/json).output_mapping
    - type: object
    - required: yes
    - description: The output mapping for the endpoint
  - requestBody (application/json).path_template
    - type: string
    - required: yes
    - description: The path of the endpoint; must start with a /
  - requestBody (application/json).payload_template
    - type: string
    - required: yes
    - description: The payload template for the endpoint
  - requestBody (application/json).payload_type
    - type: string
    - required: yes
    - description: The payload type for the endpoint
  - requestBody (application/json).query_parameter_template
    - type: object
    - required: yes
    - description: The query parameter template for the endpoint
  - requestBody (application/json).request_method
    - type: string
    - required: yes
    - description: The HTTP request method for the endpoint
  - requestBody (application/json).timeout_seconds
    - type: integer
    - required: no
    - description: The timeout in seconds for requests to the trigger service, defaults to 120 seconds
  - requestBody (application/json).trigger_service_id
    - type: string
    - required: yes
    - description: The trigger service ID

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: TriggerEndpointCreateOutputBody

