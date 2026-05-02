# action-run-accept-recommendation

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/accept`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- action_run_id
  - type: string
  - required: yes
  - description: The action run ID

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).start_date
    - type: string
    - required: no
    - description: Timestamp when the action run should be started

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: 2019-08-24T14:15:22Z

