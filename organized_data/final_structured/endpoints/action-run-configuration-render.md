# action-run-configuration-render

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/actions/{action_blueprint_id}/client-organisations/{client_organization_id}/configuration/render`

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
- client_organization_id
  - type: string
  - required: yes
  - description: The client organization ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ActionFormRenderDescription

