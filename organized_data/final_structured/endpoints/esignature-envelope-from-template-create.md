# esignature-envelope-from-template-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/from-template`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- token_id
  - type: string
  - required: yes
  - description: The OAuth token ID
- account_id
  - type: string
  - required: yes
  - description: The DocuSign account ID

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
    - description: The body of the request
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).documents
    - type: ['array', 'null']
    - required: no
    - description: Optional additional documents to include alongside template documents
  - requestBody (application/json).documents[]
    - type: object
    - required: no
    - description: Optional additional documents to include alongside template documents
  - requestBody (application/json).documents[].document_base64
    - type: string
    - required: yes
    - description: Base64 encoded document
  - requestBody (application/json).documents[].document_id
    - type: string
    - required: yes
    - description: Document ID
  - requestBody (application/json).documents[].document_name
    - type: string
    - required: yes
    - description: Document name
  - requestBody (application/json).email_subject
    - type: string
    - required: no
    - description: Optional email subject to override template default
  - requestBody (application/json).status
    - type: string
    - required: yes
    - description: Envelope status
  - requestBody (application/json).template_id
    - type: string
    - required: yes
    - description: Template ID to use for envelope creation
  - requestBody (application/json).template_roles
    - type: ['array', 'null']
    - required: yes
    - description: Roles to assign to signers (must match template role names)
  - requestBody (application/json).template_roles[]
    - type: object
    - required: yes
    - description: Roles to assign to signers (must match template role names)
  - requestBody (application/json).template_roles[].email
    - type: string
    - required: yes
    - description: Signer email
  - requestBody (application/json).template_roles[].name
    - type: string
    - required: yes
    - description: Signer name
  - requestBody (application/json).template_roles[].role_name
    - type: string
    - required: yes
    - description: Template role name (case-sensitive)

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ESignatureEnvelopeResponseBody

