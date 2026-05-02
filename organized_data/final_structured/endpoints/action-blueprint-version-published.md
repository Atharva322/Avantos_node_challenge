# action-blueprint-version-published

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}/published`

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
- blueprint_version_id
  - type: string
  - required: yes
  - description: The blueprint version ID to publish/unpublish

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
  - requestBody (application/json).published
    - type: boolean
    - required: yes
    - description: Whether to publish (true) or unpublish (false) the version

## Responses
- 204
  - description: No Content
  - content-type: application/json

