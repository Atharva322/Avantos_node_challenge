# action-component-form-update

## Endpoint
- Method: `put`
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
  - requestBody (application/json).custom_javascript
    - type: string
    - required: no
    - description: Custom javascript to run on the form
  - requestBody (application/json).custom_javascript_execute_on_load
    - type: ['boolean', 'null']
    - required: no
    - description: When false, form-level custom JS does not run on initial load; defaults to true
  - requestBody (application/json).custom_javascript_triggering_fields
    - type: ['array', 'null']
    - required: no
    - description: The fields that will trigger the custom javascript
  - requestBody (application/json).custom_javascript_triggering_fields[]
    - type: string
    - required: no
    - description: The fields that will trigger the custom javascript
  - requestBody (application/json).default_input_mapping
    - type: object
    - required: no
    - description: Default data-layer input mapping rules
  - requestBody (application/json).default_output_mapping
    - type: object
    - required: no
    - description: Default data-layer output mapping rules
  - requestBody (application/json).description
    - type: string
    - required: yes
  - requestBody (application/json).dynamic_field_config
    - type: object
    - required: no
  - requestBody (application/json).form_schema
    - type: object
    - required: yes
    - description: Form schema for the form, using jsonforms.io syntax
  - requestBody (application/json).imported_js_function_config
    - type: ['array', 'null']
    - required: no
    - description: JSON config for imported global JS functions
  - requestBody (application/json).imported_js_function_config[]
    - type: object
    - required: no
    - description: JSON config for imported global JS functions
  - requestBody (application/json).name
    - type: string
    - required: yes
  - requestBody (application/json).ui_schema
    - type: object
    - required: no
    - description: The form UI schema

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: string

