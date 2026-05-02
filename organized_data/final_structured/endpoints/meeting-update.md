# meeting-update

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/meetings/{id}`

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
  - requestBody (application/json).client_organisation_id
    - type: string
    - required: yes
  - requestBody (application/json).description
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).end_time
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).external_id
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).extra_properties
    - type: object
    - required: yes
  - requestBody (application/json).initiating_agent_id
    - type: string
    - required: yes
  - requestBody (application/json).location
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).meeting_link
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).meeting_type
    - type: string
    - required: yes
  - requestBody (application/json).primary_client_id
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).record_type
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).start_time
    - type: ['string', 'null']
    - required: yes
  - requestBody (application/json).status
    - type: string
    - required: yes
  - requestBody (application/json).subject
    - type: ['string', 'null']
    - required: yes

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: string

