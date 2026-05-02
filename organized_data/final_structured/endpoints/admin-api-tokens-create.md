# admin-api-tokens-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/admin/api-tokens`

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
  - requestBody (application/json).auth_method
    - type: string
    - required: yes
    - description: Authentication method: bearer or hmac
  - requestBody (application/json).expires_at
    - type: string
    - required: no
    - description: Optional expiration date
  - requestBody (application/json).name
    - type: string
    - required: yes
    - description: Human-readable token name
  - requestBody (application/json).role
    - type: string
    - required: no
    - description: Required when scope_type is 'role'. Ignored when 'trigger_access'.
  - requestBody (application/json).scope_type
    - type: string
    - required: yes
    - description: 'role' = token has one role (RBAC). 'trigger_access' = token can only call selected trigger execute routes.
  - requestBody (application/json).shared_secret
    - type: string
    - required: no
    - description: For HMAC only: paste secret from provider or omit to generate.
  - requestBody (application/json).trigger_grants
    - type: ['array', 'null']
    - required: no
    - description: Required when scope_type is 'trigger_access'.
  - requestBody (application/json).trigger_grants[]
    - type: object
    - required: no
    - description: Required when scope_type is 'trigger_access'.
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
  - schema: bearer

