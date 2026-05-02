# document-storage-integration-upsert

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/document-storage/integrations/{provider}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: Tenant ID
- provider
  - type: string
  - required: yes

### Query Parameters
- provider
  - type: string
  - required: yes
  - description: Provider name (e.g. filenet)

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
  - requestBody (application/json).config
    - type: string
    - required: yes
    - description: Non-sensitive provider configuration
  - requestBody (application/json).credentials
    - type: string
    - required: no
    - description: Sensitive credentials; omit or pass {} to leave unchanged on update
  - requestBody (application/json).enabled
    - type: boolean
    - required: yes
    - description: Whether the integration is enabled

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: DocumentStorageIntegrationResponse

