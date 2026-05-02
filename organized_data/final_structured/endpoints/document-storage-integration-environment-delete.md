# document-storage-integration-environment-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- provider
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

