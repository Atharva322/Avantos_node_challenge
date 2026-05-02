# pdf-signature-field-list

## Endpoint
- Method: `get`
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
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: PDFSignatureFieldListOutputBody

