# client-connection-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/clients/{client_id}/client-connections/{connection_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- client_id
  - type: string
  - required: yes
- connection_id
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

