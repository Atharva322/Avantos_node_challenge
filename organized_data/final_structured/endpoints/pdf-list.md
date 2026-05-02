# pdf-list

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/pdfs/list`

## Request
### Path Parameters
- tenant_id
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
  - requestBody (application/json).pagination_params
    - type: object
    - required: no
  - requestBody (application/json).pagination_params.page
    - type: integer
    - required: yes
    - description: The page number to return
  - requestBody (application/json).pagination_params.page_size
    - type: integer
    - required: yes
    - description: The number of records per page
  - requestBody (application/json).search
    - type: string
    - required: no

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: PDFListOutputBody

