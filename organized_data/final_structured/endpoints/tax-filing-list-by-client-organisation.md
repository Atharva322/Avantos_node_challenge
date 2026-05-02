# tax-filing-list-by-client-organisation

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/client-organisations/{client_organisation_id}/tax-filings`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_organisation_id
  - type: string
  - required: yes
  - description: The client organisation ID to which the tax filings are assigned

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ListTaxFilingsByClientOrganisationIDOutputBody

