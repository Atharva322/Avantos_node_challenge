# sloa-list-by-financial-account

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/financial-accounts/{financial_account_id}/sloas`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- financial_account_id
  - type: string
  - required: yes
  - description: The account ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ListSLOASbyFinancialAccountIDOutputBody

