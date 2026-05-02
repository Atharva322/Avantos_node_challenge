# trigger-endpoint-execute

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id}/execute`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- trigger_endpoint_id
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

