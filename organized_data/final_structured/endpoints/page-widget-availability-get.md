# page-widget-availability-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/pages/{page}/available-widgets/{availability_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- page
  - type: string
  - required: yes
- availability_id
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

