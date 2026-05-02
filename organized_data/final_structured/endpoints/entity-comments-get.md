# entity-comments-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/entities/{entity}/{entity_id}/comments`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- entity
  - type: string
  - required: yes
- entity_id
  - type: string
  - required: yes
  - description: The entity ID to get comments for
- external_id
  - type: string
  - required: no
  - description: Optional external ID to also search for comments. If provided, returns comments where entity_id matches either the path entity_id or this external_id

### Query Parameters
- entity
  - type: string
  - required: yes
  - description: The type of entity to get comments for

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: GetCommentsOutputBody

