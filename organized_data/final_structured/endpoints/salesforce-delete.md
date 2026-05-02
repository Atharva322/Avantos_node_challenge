# salesforce-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/salesforce/{object_type}/{object_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- object_type
  - type: string
  - required: yes
- object_id
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
  - content-type: application/json
  - schema: SalesforceDeleteOutputBody

