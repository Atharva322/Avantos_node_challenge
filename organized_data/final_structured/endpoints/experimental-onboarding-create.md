# experimental-onboarding-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/experimental-onboarding`

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
  - requestBody (application/json).action_ids
    - type: ['array', 'null']
    - required: yes
    - description: Array of action run IDs created by the frontend
  - requestBody (application/json).action_ids[]
    - type: string
    - required: yes
    - description: Array of action run IDs created by the frontend
  - requestBody (application/json).primary_client_id
    - type: string
    - required: yes
    - description: The primary client ID for this onboarding
  - requestBody (application/json).relationship_id
    - type: string
    - required: yes
    - description: The relationship ID created by the frontend

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: VPOCOnboardingWithProgress

