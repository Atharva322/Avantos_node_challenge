# experimental-onboarding-delete

## Endpoint
- Method: `delete`
- Path: `/api/v1/{tenant_id}/experimental-onboarding/{onboarding_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- onboarding_id
  - type: string
  - required: yes
  - description: The onboarding ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: VPOCOnboardingDeleteOutputBody

