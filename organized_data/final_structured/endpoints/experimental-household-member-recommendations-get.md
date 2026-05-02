# experimental-household-member-recommendations-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/experimental-household-member-recommendations/{client_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_id
  - type: string
  - required: yes
  - description: The client ID to find household member recommendations for

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: VPOCGetHouseholdMemberRecommendationsOutputBody

