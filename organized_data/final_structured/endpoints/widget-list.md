# widget-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/widgets`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- page
  - type: string
  - required: no
  - description: The page name

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: WidgetListOutputBody

