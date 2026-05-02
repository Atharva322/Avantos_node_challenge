# trigger-endpoint-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- trigger_endpoint_id
  - type: string
  - required: yes
  - description: The trigger endpoint ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

