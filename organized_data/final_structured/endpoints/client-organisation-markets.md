# client-organisation-markets

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/client-organisations/markets`

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
  - schema: ClientOrganisationMarketAggregationOutputBody

