# unqork-action-run-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/unqork/action-runs/{unqork_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: Tenant ID
- unqork_id
  - type: string
  - required: yes
  - description: Unqork ID for the action run

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json

