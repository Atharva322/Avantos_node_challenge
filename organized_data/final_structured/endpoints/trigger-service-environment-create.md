# trigger-service-environment-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: Tenant ID
- trigger_service_id
  - type: string
  - required: yes
  - description: Trigger Service ID

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
  - requestBody (application/json).auth_body
    - type: object
    - required: no
    - description: Additional fields to include in OAuth2 token request body
  - requestBody (application/json).auth_body_type
    - type: string
    - required: no
    - description: The body type for OAuth2 token requests (only applicable for OAuth2 auth types)
  - requestBody (application/json).auth_config
    - type: object
    - required: yes
    - description: Authentication configuration
  - requestBody (application/json).auth_type
    - type: string
    - required: yes
    - description: Authentication type
  - requestBody (application/json).base_url
    - type: string
    - required: yes
    - description: Base URL for this environment
  - requestBody (application/json).environment
    - type: string
    - required: yes
    - description: The environment name (e.g. dev, staging, prod)
  - requestBody (application/json).is_enabled
    - type: boolean
    - required: no
    - description: Whether config is enabled (defaults true)
  - requestBody (application/json).timeout_seconds
    - type: integer
    - required: no
    - description: Request timeout in seconds (defaults 10)

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: TriggerServiceEnvironmentCreateOutputBody

