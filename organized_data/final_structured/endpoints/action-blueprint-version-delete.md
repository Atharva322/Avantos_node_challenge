# action-blueprint-version-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- action_blueprint_id
  - type: string
  - required: yes
- blueprint_version_id
  - type: string
  - required: yes

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK

