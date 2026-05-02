# environment-blueprint-list

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/environments/blueprints`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

### Query Parameters
- page
  - type: integer
  - required: no
  - description: The page number to return
- page_size
  - type: integer
  - required: no
  - description: The number of records per page

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: EnvironmentBlueprintListOutputBody

