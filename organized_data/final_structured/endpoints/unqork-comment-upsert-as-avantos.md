# unqork-comment-upsert-as-avantos

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/unqork/comments/{unqork_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: Tenant ID
- unqork_id
  - type: string
  - required: yes
  - description: Unqork ID for the comment

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
    - description: Raw Aspen comment data payload

## Responses
- 204
  - description: No Content
  - content-type: application/json

