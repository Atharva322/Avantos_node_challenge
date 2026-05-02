# custom-views-set-pinned

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/pages/{page_id}/views/pinned`

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
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).view_ids
    - type: ['array', 'null']
    - required: yes
    - description: Array of view IDs to pin
  - requestBody (application/json).view_ids[]
    - type: string
    - required: yes
    - description: Array of view IDs to pin

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: CustomViewsSetPinnedOutputBody

