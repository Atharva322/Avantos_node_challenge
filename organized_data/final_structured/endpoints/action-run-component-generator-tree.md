# action-run-component-generator-tree

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/action-runs/{action_run_id}/components/{component_id}/generators/{field_path}/tree`

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
- component_id
  - type: string
  - required: yes
  - description: The run component ID hosting the generator
- field_path
  - type: string
  - required: yes

### Query Parameters
- field_path
  - type: string
  - required: yes
  - description: The x-generator field path on the component to start the tree from
- tag
  - type: string
  - required: yes
  - description: Tag to filter components by
- include_data
  - type: boolean
  - required: no
  - description: When true, include the submission task's data for each tagged component. Data is unbounded JSONB and may significantly increase response size for deep trees.
- include_form_schema
  - type: boolean
  - required: no
  - description: When true, include each tagged component's form_schema (JSON Schema definition). For dynamic tasks the resolved form schema is returned.

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: tree?tag=esign

