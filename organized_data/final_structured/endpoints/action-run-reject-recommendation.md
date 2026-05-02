# action-run-reject-recommendation

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/reject`

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
  - requestBody (application/json).rejection_reason
    - type: string
    - required: no
    - description: Reason for rejecting the action run

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: The action run was rejected because it was no longer needed

