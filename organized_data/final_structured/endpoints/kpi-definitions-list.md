# kpi-definitions-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/kpis/definitions`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- active_only
  - type: boolean
  - required: no
  - description: If true, return only active KPI definitions

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: KPIDefinitionListOutputBody

