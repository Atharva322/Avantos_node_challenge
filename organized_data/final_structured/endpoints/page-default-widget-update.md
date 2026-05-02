# page-default-widget-update

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- page
  - type: string
  - required: yes
- widget_id
  - type: string
  - required: yes
  - description: The widget definition ID

### Query Parameters
- page
  - type: string
  - required: yes
  - description: The page name

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).config
    - type: object
    - required: no
    - description: Default widget configuration
  - requestBody (application/json).height
    - type: integer
    - required: no
    - description: Height in grid units
  - requestBody (application/json).isVisible
    - type: boolean
    - required: no
    - description: Whether widget is visible by default
  - requestBody (application/json).width
    - type: integer
    - required: no
    - description: Width in grid units
  - requestBody (application/json).x
    - type: integer
    - required: no
    - description: X position in grid
  - requestBody (application/json).y
    - type: integer
    - required: no
    - description: Y position in grid

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: PageDefaultWidgetUpdateOutputBody

