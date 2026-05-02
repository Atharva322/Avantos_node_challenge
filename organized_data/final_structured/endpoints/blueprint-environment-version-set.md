# blueprint-environment-version-set

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/environments/{environment}/version`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- action_blueprint_id
  - type: string
  - required: yes
- environment
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

