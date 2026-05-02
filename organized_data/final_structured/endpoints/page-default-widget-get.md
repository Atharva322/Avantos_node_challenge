# page-default-widget-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_definition_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- page
  - type: string
  - required: yes
- widget_definition_id
  - type: string
  - required: yes
  - description: The widget definition ID

### Query Parameters
- page
  - type: string
  - required: yes
  - description: The page name

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: PageDefaultWidgetOutput

