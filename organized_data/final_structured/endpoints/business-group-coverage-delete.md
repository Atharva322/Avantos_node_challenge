# business-group-coverage-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/coverage/{coverage_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- coverage_id
  - type: string
  - required: yes
  - description: The coverage ID to delete

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

