# admin-api-tokens-update

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/admin/api-tokens/{token_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
- token_id
  - type: string
  - required: yes
  - description: Public token ID (not the internal record ID)

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
  - requestBody (application/json).expires_at
    - type: string
    - required: no
    - description: Expiration date
  - requestBody (application/json).is_active
    - type: boolean
    - required: no
    - description: Whether the token is active
  - requestBody (application/json).name
    - type: string
    - required: no
    - description: Human-readable token name
  - requestBody (application/json).role
    - type: string
    - required: no
    - description: Required when scope_type is 'role'
  - requestBody (application/json).scope_type
    - type: string
    - required: yes
    - description: 'role' or 'trigger_access'
  - requestBody (application/json).trigger_grants
    - type: ['array', 'null']
    - required: no
    - description: Grants when scope_type is 'trigger_access'
  - requestBody (application/json).trigger_grants[]
    - type: object
    - required: no
    - description: Grants when scope_type is 'trigger_access'
  - requestBody (application/json).trigger_grants[].custom_js_function_ids
    - type: ['array', 'null']
    - required: no
  - requestBody (application/json).trigger_grants[].trigger_endpoint_ids
    - type: ['array', 'null']
    - required: no
  - requestBody (application/json).trigger_grants[].trigger_service_id
    - type: string
    - required: no

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: 2019-08-24T14:15:22Z

