# relationship-opportunity-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/relationships/opportunities/{opportunity_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- opportunity_id
  - type: string
  - required: yes
  - description: The unique identifier of the opportunity

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: RelationshipOpportunityGetOutputBody

