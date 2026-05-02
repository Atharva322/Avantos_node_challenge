# unqork-action-run-comments-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/unqork/action-runs/{unqork_id}/comments`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- unqork_id
  - type: string
  - required: yes
  - description: The Unqork action run ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: GetUnqorkActionRunCommentsOutputBody

