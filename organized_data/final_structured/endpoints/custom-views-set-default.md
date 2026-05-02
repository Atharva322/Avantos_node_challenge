# custom-views-set-default

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/pages/{page_id}/views/set-default`

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
  - required: no
  - description: The view ID. Omit to remove the current default view.

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: CustomViewsSetDefaultOutputBody

