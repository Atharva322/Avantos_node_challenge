# pdf-signature-field-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields`

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
  - requestBody (application/json).height
    - type: number
    - required: yes
  - requestBody (application/json).label
    - type: string
    - required: no
  - requestBody (application/json).metadata
    - type: object
    - required: no
  - requestBody (application/json).page_number
    - type: integer
    - required: yes
  - requestBody (application/json).role
    - type: string
    - required: yes
  - requestBody (application/json).signature_kind
    - type: string
    - required: yes
  - requestBody (application/json).width
    - type: number
    - required: yes
  - requestBody (application/json).x
    - type: number
    - required: yes
  - requestBody (application/json).y
    - type: number
    - required: yes

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: PDFSignatureFieldCreateOutputBody

