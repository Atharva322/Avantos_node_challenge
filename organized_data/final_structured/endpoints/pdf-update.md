# pdf-update

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/pdfs/{pdf_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- pdf_id
  - type: string
  - required: yes

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
  - requestBody (application/json).description
    - type: string
    - required: no
  - requestBody (application/json).name
    - type: string
    - required: yes

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: string

