# financial-account-list-by-account-number-or-name

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/financial-accounts`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- only_assigned
  - type: boolean
  - required: no
  - description: Whether to only return financial accounts assigned to the current user
- page
  - type: integer
  - required: no
  - description: The page number to return
- page_size
  - type: integer
  - required: no
  - description: The number of records per page
- field
  - type: string
  - required: no
  - description: Field to filter financial accounts by
- search
  - type: string
  - required: no
  - description: Search term to filter financial accounts by account number

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: FinancialAccountSearchOutputBody

