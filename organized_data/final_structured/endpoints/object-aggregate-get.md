# object-aggregate-get

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/aggregate`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

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
  - requestBody (application/json).aggregate
    - type: string
    - required: yes
    - description: The aggregate function to use: sum, count, avg, max, or min
  - requestBody (application/json).column
    - type: string
    - required: yes
    - description: The column to aggregate on
  - requestBody (application/json).filter
    - type: string
    - required: no
    - description: The Expression to filter the relationships by. See the Readme for more details on the Expression format.
  - requestBody (application/json).object_type
    - type: string
    - required: yes
    - description: The type of entity to aggregate on
  - requestBody (application/json).only_assigned
    - type: boolean
    - required: no
    - description: Whether to only include relationships that are assigned to the current agent

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: sum

