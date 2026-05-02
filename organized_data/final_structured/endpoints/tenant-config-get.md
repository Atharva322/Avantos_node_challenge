# tenant-config-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/pages/{page_id}/config`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- page_id
  - type: string
  - required: yes
  - description: The page ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: TenantConfigGetOutputBody

