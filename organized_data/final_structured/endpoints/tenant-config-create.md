# tenant-config-create

## Endpoint
- Method: `post`
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
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).defaultPinnedViewIds
    - type: array[string]
    - required: no
  - requestBody (application/json).defaultPinnedViewIds[]
    - type: string
    - required: no
  - requestBody (application/json).defaultViewId
    - type: string
    - required: no

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: TenantConfigCreateOutputBody

