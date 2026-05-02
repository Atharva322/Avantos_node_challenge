# trigger-service-environment-get

## Endpoint
- Method: `get`
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
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK

