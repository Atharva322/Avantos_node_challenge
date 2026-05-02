# widget-definition-get

## Endpoint
- Method: `get`
- Path: `/api/v1/admin/widget-definitions/{definition_id}`

## Request
### Path Parameters
- definition_id
  - type: string
  - required: yes
  - description: The widget definition ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: WidgetDefinitionOutput

