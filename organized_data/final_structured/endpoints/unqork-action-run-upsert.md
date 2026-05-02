# unqork-action-run-upsert

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/unqork/action-runs/{unqork_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: Tenant ID
- unqork_id
  - type: string
  - required: yes
  - description: Unqork ID for the action run

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
  - requestBody (application/json).data
    - type: object
    - required: yes
    - description: JSON data payload for the action run
  - requestBody (application/json).id
    - type: string
    - required: yes
    - description: Unqork ID for the action run - this is the primary key for the action run, and will be used for upserting
  - requestBody (application/json).relationship_id
    - type: string
    - required: yes
    - description: Relationship ID for the action run - should be the Salesforce ID of the relationship

## Responses
- 204
  - description: No Content
  - content-type: application/json

