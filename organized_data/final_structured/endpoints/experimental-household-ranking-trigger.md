# experimental-household-ranking-trigger

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/experimental-households-ranking`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- client_org_name
  - type: string
  - required: no
  - description: The client organization name to filter households

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: VPOCHouseholdRankingOutputBody

