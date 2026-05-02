# meeting-transcript-id-update

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/meetings/{id}/transcript-id`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- id
  - type: string
  - required: yes

### Query Parameters
- id
  - type: string
  - required: yes
  - description: The meeting ID

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
  - requestBody (application/json).ai_transcript_id
    - type: ['string', 'null']
    - required: yes

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: string

