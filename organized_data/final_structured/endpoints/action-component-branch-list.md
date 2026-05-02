# action-component-branch-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/actions/components/branches`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- limit
  - type: integer
  - required: no

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json

