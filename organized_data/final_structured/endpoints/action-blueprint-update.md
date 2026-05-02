# action-blueprint-update

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- action_blueprint_id
  - type: string
  - required: yes
  - description: The action blueprint ID to update

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
  - requestBody (application/json).ai_context_description
    - type: string
    - required: no
    - description: Context description of the blueprint used by AI
  - requestBody (application/json).ai_description
    - type: string
    - required: no
    - description: Description of the blueprint used by AI for recommendations
  - requestBody (application/json).category
    - type: string
    - required: no
    - description: The category of the action blueprint
  - requestBody (application/json).description
    - type: string
    - required: yes
  - requestBody (application/json).name
    - type: string
    - required: yes
  - requestBody (application/json).short_description
    - type: string
    - required: no
    - description: The short description of the action blueprint

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: AI-optimized customer onboarding workflow

