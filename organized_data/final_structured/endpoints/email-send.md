# email-send

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/email`

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
  - requestBody (application/json).data
    - type: object
    - required: yes
    - description: Email data payload
  - requestBody (application/json).data.ccEmail
    - type: string
    - required: no
    - description: CC emails: string, comma/semicolon-separated string, array of strings, or array of objects with email key
  - requestBody (application/json).data.ccEmailList
    - type: string
    - required: no
    - description: Alternate key for ccEmail
  - requestBody (application/json).data.content
    - type: string
    - required: yes
    - description: Email HTML content
  - requestBody (application/json).data.currentUser
    - type: object
    - required: no
    - description: Deprecated: retained for backward compatibility. No longer used by the handler.
  - requestBody (application/json).data.fromName
    - type: string
    - required: no
    - description: From name for the email. Defaults to Aspen Alert if not provided.
  - requestBody (application/json).data.replyTo
    - type: string
    - required: no
    - description: Reply-to email address
  - requestBody (application/json).data.sourceModuleId
    - type: string
    - required: no
    - description: Source module identifier
  - requestBody (application/json).data.subject
    - type: string
    - required: yes
    - description: Email subject
  - requestBody (application/json).data.toEmail
    - type: string
    - required: no
    - description: Alternate key for toEmailList
  - requestBody (application/json).data.toEmailList
    - type: string
    - required: no
    - description: List of recipient emails (string, array of strings, or array of objects with email key). Either toEmailList or toEmail must be provided.
  - requestBody (application/json).data.tpmEmailFlag
    - type: string
    - required: no
    - description: When set to 'yes', sends a separate email to each recipient instead of grouping them
  - requestBody (application/json).emailType
    - type: string
    - required: no
    - description: Email type

## Responses
- 204
  - description: No Content
  - content-type: application/json

