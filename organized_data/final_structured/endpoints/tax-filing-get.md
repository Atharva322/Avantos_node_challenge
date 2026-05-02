# tax-filing-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/tax-filings/{tax_filing_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- tax_filing_id
  - type: string
  - required: yes
  - description: The tax filing ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: GetTaxFilingByIDOutputBody

