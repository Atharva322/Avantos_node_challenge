# client-organisation-bulk-access-check

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/client-organisations/bulk-access-check`

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
  - requestBody (application/json).external_ids
    - type: ['array', 'null']
    - required: no
    - description: List of external IDs of client organizations to check
  - requestBody (application/json).external_ids[]
    - type: string
    - required: no
    - description: List of external IDs of client organizations to check
  - requestBody (application/json).ids
    - type: ['array', 'null']
    - required: no
    - description: List of Avantos IDs of client organizations to check
  - requestBody (application/json).ids[]
    - type: string
    - required: no
    - description: List of Avantos IDs of client organizations to check

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ClientOrganizationBulkAccessCheckOutputBody

