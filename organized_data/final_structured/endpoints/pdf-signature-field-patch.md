# pdf-signature-field-patch

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- pdf_id
  - type: string
  - required: yes
- field_id
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
  - requestBody (application/json).height
    - type: number
    - required: no
  - requestBody (application/json).label
    - type: string
    - required: no
  - requestBody (application/json).metadata
    - type: object
    - required: no
  - requestBody (application/json).page_number
    - type: integer
    - required: no
  - requestBody (application/json).role
    - type: string
    - required: no
  - requestBody (application/json).signature_kind
    - type: string
    - required: no
  - requestBody (application/json).width
    - type: number
    - required: no
  - requestBody (application/json).x
    - type: number
    - required: no
  - requestBody (application/json).y
    - type: number
    - required: no

## Responses
- 204
  - description: No Content
  - content-type: application/json

