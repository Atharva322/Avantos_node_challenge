# trigger-service-environment-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- trigger_service_id
  - type: string
  - required: yes
- environment
  - type: string
  - required: yes

### Query Parameters
- environment
  - type: string
  - required: yes

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

