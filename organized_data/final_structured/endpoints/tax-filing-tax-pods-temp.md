# tax-filing-tax-pods-temp

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/tax-filings/tax-pods`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: TaxFilingTaxPodAggregationOutputBody

