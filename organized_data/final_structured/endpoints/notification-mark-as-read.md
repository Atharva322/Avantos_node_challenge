# notification-mark-as-read

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/notifications/{notification_id}/read`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: Tenant ID
- notification_id
  - type: string
  - required: yes
  - description: Notification ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 204
  - description: No Content
  - content-type: application/json

