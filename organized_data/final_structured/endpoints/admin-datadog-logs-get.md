# admin-datadog-logs-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/admin/datadog/logs`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- trace_id
  - type: string
  - required: yes
  - description: The Datadog trace ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: logs?trace_id=123456789

