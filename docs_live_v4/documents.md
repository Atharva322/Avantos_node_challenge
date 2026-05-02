# Documents

Source: `Avantos Core API`

## Overview

Operations tagged 'Documents' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents | operation | no | client-org-document-upload-initiate Creates a document record and returns a presigned S3 URL for direct upload. The document is created with status INITIATED. |  |
| tenant_id | string | yes | The tenant ID | tenant_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrgDocumentUploadInitiateBody.json", "action_run_id": "ar_456", "content_type": "application/pdf", "file_size_bytes": 1048576, "filename": "tax_return_2024.pdf"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrgDocumentUploadInitiateBody.json |
| requestBody (application/json).action_run_id | string | no | Optional servicing event ID | ar_456 |
| requestBody (application/json).content_type | string | yes | MIME type of the file | application/pdf |
| requestBody (application/json).file_size_bytes | integer | yes | File size in bytes | 1048576 |
| requestBody (application/json).filename | string | yes | Original filename | tax_return_2024.pdf |
| POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/list | operation | no | client-org-documents-list Retrieves documents for a client organisation. Filters and sort keys are passed in the request body using the standard expression DSL. To filter by servicing event, include `action_run_id` in the filter expression. |  |
| tenant_id | string | yes | The tenant ID | tenant_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrgDocumentsListInputBody.json", "filter": {"left": {"column": "upload_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "COMPLETED"}, "type": "binary"}, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "created_at", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrgDocumentsListInputBody.json |
| requestBody (application/json).filter |  | no | The Expression to filter the documents by. Allowed columns: filename, content_type, uploaded_by, created_at, file_size_bytes, upload_status, action_run_id. See the Readme for more details on the Expression format. | {"left": {"column": "upload_status", "type": "column"}, "operator": "==", "right": {"type": "literal", "value": "COMPLETED"}, "type": "binary"} |
| requestBody (application/json).pagination_params | object | no | The pagination information for the documents | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | The keys to sort the documents by. Allowed columns: filename, content_type, uploaded_by, created_at, file_size_bytes. | [{"sort_column": "created_at", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | The keys to sort the documents by. Allowed columns: filename, content_type, uploaded_by, created_at, file_size_bytes. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id} | operation | no | client-org-document-delete |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| document_id | string | yes | The document ID | doc_123 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id} | operation | no | client-org-document-get |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| document_id | string | yes | The document ID | doc_123 |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id}/download-url | operation | no | client-org-document-download-url Retrieves a download URL for a document within a client organisation. The URL will expire after 1 hour. |  |
| tenant_id | string | yes | The tenant ID | tenant_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| document_id | string | yes | The document ID | doc_123 |
| PUT /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id}/upload-confirm | operation | no | client-org-document-upload-confirm Confirms that a document has been successfully uploaded to S3. Updates the document status from INITIATED to COMPLETED. |  |
| tenant_id | string | yes | The tenant ID | tenant_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| document_id | string | yes | The document ID | doc_123 |
| POST /api/v1/{tenant_id}/document-vault/verify | operation | no | document-vault-verify Signs a JWT token and verifies access to a Box folder via the DocumentVault API |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/DocumentVaultVerifyInputBody.json", "box_folder_id": "242798118007", "box_sub_folder_id": "242798118007", "salesforce_user_id": "005Dn000007bfPUIAY", "user_email": "user@merceradvisors.com"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DocumentVaultVerifyInputBody.json |
| requestBody (application/json).box_folder_id | string | yes | The Box folder ID | 242798118007 |
| requestBody (application/json).box_sub_folder_id | string | no | The Box subfolder ID (optional, defaults to box_folder_id) | 242798118007 |
| requestBody (application/json).salesforce_user_id | string | yes | The Salesforce user ID | 005Dn000007bfPUIAY |
| requestBody (application/json).user_email | string | yes | The user's email | user@merceradvisors.com |


## Response Examples

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents - client-org-document-upload-initiate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgDocumentUploadInitiateOutputBody.json",
      "document_id": "doc_xxx",
      "expires_at": "2024-01-15T15:00:00Z",
      "upload_url": "https://bucket.s3.amazonaws.com/..."
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/list - client-org-documents-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgDocumentsListOutputBody.json",
      "documents": [
        {
          "action_run_id": "ar_456",
          "content_type": "application/pdf",
          "created_at": "2024-01-15T14:00:00Z",
          "file_size_bytes": 1048576,
          "filename": "tax_return_2024.pdf",
          "id": "doc_123",
          "upload_status": "COMPLETED",
          "uploaded_by": {
            "email": "john.doe@example.com",
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe",
            "middle_name": "string"
          }
        }
      ],
      "page": 1,
      "page_size": 1,
      "total": 1
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id} - client-org-document-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id} - client-org-document-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgDocumentGetOutputBody.json",
      "action_run_id": "action_123",
      "client_org_id": "co_123",
      "content_type": "application/pdf",
      "created_at": "2024-01-15T14:00:00Z",
      "file_size_bytes": 1048576,
      "filename": "tax_return_2024.pdf",
      "id": "doc_123",
      "upload_status": "COMPLETED",
      "uploaded_by": "agent_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id}/download-url - client-org-document-download-url

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgDocumentDownloadOutputBody.json",
      "download_url": "string",
      "expires_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/documents/{document_id}/upload-confirm - client-org-document-upload-confirm

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/document-vault/verify - document-vault-verify

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentVaultVerifyOutputBody.json",
      "message": "Access verified",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

