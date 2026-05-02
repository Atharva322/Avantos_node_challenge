# action-component-branch-get

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/actions/components/branches/{branch_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- branch_id
  - type: string
  - required: yes
  - description: The branch ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ActionBranchDescription

