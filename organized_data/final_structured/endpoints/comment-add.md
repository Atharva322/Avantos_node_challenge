# comment-add

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/comments/{entity}/{entity_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- entity
  - type: string
  - required: yes
- entity_id
  - type: string
  - required: yes

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK

