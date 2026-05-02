# trigger-execute

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/execute`

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
  - requestBody (application/json).action_run_id
    - type: string
    - required: no
    - description: The action run ID
  - requestBody (application/json).client_org_id
    - type: string
    - required: no
    - description: The client organisation ID
  - requestBody (application/json).endpoint_id
    - type: string
    - required: yes
    - description: The trigger endpoint ID
  - requestBody (application/json).initiation_override
    - type: string
    - required: no
    - description: Optional initiation code override for JS execution service endpoints
  - requestBody (application/json).payload
    - type: object
    - required: yes
    - description: A map from payload variables to expressions. Expressions are evaluated in the context of the action run before sending to the trigger endpoint
  - requestBody (application/json).payload_template_override
    - type: string
    - required: no
    - description: Optional payload template that overrides the endpoint's configured template
  - requestBody (application/json).task_id
    - type: string
    - required: no
    - description: The task ID

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ar_456

