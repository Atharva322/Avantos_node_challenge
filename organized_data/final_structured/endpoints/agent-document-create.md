# agent-document-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agents/{agent_id}/document`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- agent_id
  - type: string
  - required: yes
  - description: The agent ID

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
  - requestBody (application/json).access_level
    - type: string
    - required: no
    - description: The access level of the document
  - requestBody (application/json).additional_attributes
    - type: object
    - required: no
    - description: Additional custom metadata
  - requestBody (application/json).approved_by
    - type: string
    - required: no
    - description: ID of the user or system that approved the document
  - requestBody (application/json).description
    - type: string
    - required: no
    - description: A brief description of the document
  - requestBody (application/json).document_status
    - type: string
    - required: no
    - description: The status of the document
  - requestBody (application/json).document_subtype
    - type: string
    - required: no
    - description: Additional specificity for the document type
  - requestBody (application/json).document_type
    - type: string
    - required: yes
    - description: The type of document (e.g., bank_statement, tax_return)
  - requestBody (application/json).external_id
    - type: string
    - required: yes
    - description: The external identifier for the document
  - requestBody (application/json).file_name
    - type: string
    - required: no
    - description: The original file name of the uploaded document
  - requestBody (application/json).file_type
    - type: string
    - required: no
    - description: The file type or extension
  - requestBody (application/json).rejection_reason
    - type: string
    - required: no
    - description: Reason for document rejection
  - requestBody (application/json).retention_policy
    - type: string
    - required: no
    - description: The document retention duration
  - requestBody (application/json).storage_container
    - type: string
    - required: yes
    - description: The storage container (e.g., S3 bucket) where the document is stored
  - requestBody (application/json).storage_mode
    - type: string
    - required: yes
    - description: Storage mode: PLATFORM_MANAGED or THIRD_PARTY_MANAGED
  - requestBody (application/json).storage_object_key
    - type: string
    - required: yes
    - description: The storage object key (path) to locate the document
  - requestBody (application/json).storage_provider
    - type: string
    - required: yes
    - description: Storage provider (e.g., S3, BOX, AZURE_BLOB)
  - requestBody (application/json).upload_date
    - type: string
    - required: no
    - description: The date the document was uploaded
  - requestBody (application/json).upload_status
    - type: string
    - required: yes
    - description: Upload status: PENDING, VERIFIED, FAILED

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: private

