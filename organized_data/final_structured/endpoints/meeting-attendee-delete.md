# meeting-attendee-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/meetings/{meeting_id}/attendees/{attendee_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- meeting_id
  - type: string
  - required: yes
- attendee_id
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

