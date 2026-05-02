# custom-views-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/pages/{page_id}/views/{view_id}`

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
- view_id
  - type: string
  - required: yes
  - description: The view ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: CustomViewsGetOutputBody

