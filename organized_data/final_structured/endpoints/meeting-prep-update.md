# meeting-prep-update

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/meetings/{meeting_id}/prep`

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
    - description: The body content of the meeting prep
  - requestBody (application/json).is_ai_enhanced
    - type: boolean
    - required: no
    - description: Whether the meeting prep has been enhanced by AI

## Responses
- 204
  - description: No Content
  - content-type: application/json
  - schema: Meeting prep content

