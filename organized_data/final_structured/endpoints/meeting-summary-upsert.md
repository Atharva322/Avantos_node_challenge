# meeting-summary-upsert

## Endpoint
- Method: `put`
- Path: `/api/v1/{tenant_id}/meetings/{meeting_id}/summary/upsert`

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
  - requestBody (application/json).is_ai_enhanced
    - type: boolean
    - required: no
    - description: Whether the summary was enhanced by AI
  - requestBody (application/json).summary_content
    - type: ['string', 'null']
    - required: yes
    - description: The summary content of the meeting

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: MeetingSummaryUpsertOutputBody

