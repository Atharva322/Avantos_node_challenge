# widget-batch-update-positions

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/widgets/positions`

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
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).updates
    - type: ['array', 'null']
    - required: yes
    - description: List of widget position updates
  - requestBody (application/json).updates[]
    - type: object
    - required: yes
    - description: List of widget position updates
  - requestBody (application/json).updates[].height
    - type: integer
    - required: yes
    - description: New height
  - requestBody (application/json).updates[].widgetId
    - type: string
    - required: yes
    - description: Widget ID to update
  - requestBody (application/json).updates[].width
    - type: integer
    - required: yes
    - description: New width
  - requestBody (application/json).updates[].x
    - type: integer
    - required: yes
    - description: New X position
  - requestBody (application/json).updates[].y
    - type: integer
    - required: yes
    - description: New Y position

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: WidgetBatchUpdatePositionsOutputBody

