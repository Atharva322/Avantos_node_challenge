# business-group-coverage-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/business-groups/{business_group_id}/coverage`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- business_group_id
  - type: string
  - required: yes
  - description: The business group ID

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
  - requestBody (application/json).capacity_limit
    - type: integer
    - required: no
    - description: Optional capacity limit
  - requestBody (application/json).coverage_lookup_id
    - type: string
    - required: yes
    - description: The unique identifier of the coverage lookup
  - requestBody (application/json).priority
    - type: integer
    - required: yes
    - description: Priority level (lower = higher priority)

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: CreateBusinessGroupCoverageOutputBody

