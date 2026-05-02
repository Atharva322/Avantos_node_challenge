# meeting-summary-attest

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/meetings/{meeting_id}/summary/attest`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- meeting_id
  - type: string
  - required: yes
  - description: The meeting ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

