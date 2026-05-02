# meeting-email-draft-update

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/meetings/{meeting_id}/email-draft`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- meeting_id
  - type: string
  - required: yes
  - description: The meeting ID

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
  - requestBody (application/json).body_content
    - type: ['string', 'null']
    - required: yes
    - description: Email body content
  - requestBody (application/json).cc_addresses
    - type: ['array', 'null']
    - required: yes
    - description: List of CC email addresses
  - requestBody (application/json).cc_addresses[]
    - type: string
    - required: yes
    - description: List of CC email addresses
  - requestBody (application/json).is_ai_enhanced
    - type: boolean
    - required: no
    - description: Whether the email draft has been enhanced by AI
  - requestBody (application/json).is_skipped
    - type: boolean
    - required: yes
    - description: Whether the email draft was skipped
  - requestBody (application/json).sent_flag
    - type: boolean
    - required: yes
    - description: Whether the email has been sent
  - requestBody (application/json).subject
    - type: string
    - required: yes
    - description: Email subject line
  - requestBody (application/json).to_addresses
    - type: ['array', 'null']
    - required: yes
    - description: List of recipient email addresses
  - requestBody (application/json).to_addresses[]
    - type: string
    - required: yes
    - description: List of recipient email addresses

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: Thank you for attending...

