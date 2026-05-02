# action-blueprint-toggle-is-journey

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/is-journey`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- action_blueprint_id
  - type: string
  - required: yes
  - description: The action blueprint ID

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
  - requestBody (application/json).is_journey
    - type: boolean
    - required: yes
    - description: Whether to mark this blueprint as a journey

## Responses
- 204
  - description: No Content
  - content-type: application/json

