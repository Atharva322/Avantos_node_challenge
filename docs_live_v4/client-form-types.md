# Client Form Types

Source: `Avantos Core API`

## Overview

Operations tagged 'Client Form Types' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/{tenant_id}/client-form-types | operation | no | client-form-type-list Lists client form types for the tenant. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| POST /api/v1/{tenant_id}/client-form-types | operation | no | client-form-type-create Creates a new client form type. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientFormTypeCreateInputBody.json", "name": "disclosure"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientFormTypeCreateInputBody.json |
| requestBody (application/json).name | string | yes | The client form type name | disclosure |
| DELETE /api/v1/{tenant_id}/client-form-types/{client_form_type_id} | operation | no | client-form-type-delete Soft-deletes a client form type. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| client_form_type_id | string | yes | The client form type ID | cft_123 |
| GET /api/v1/{tenant_id}/client-form-types/{client_form_type_id} | operation | no | client-form-type-get Retrieves a client form type by ID. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| client_form_type_id | string | yes | The client form type ID | cft_123 |


## Response Examples

### GET /api/v1/{tenant_id}/client-form-types - client-form-type-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/ClientFormTypeResponse.json",
        "created_at": "2026-01-15T10:30:00Z",
        "id": "cft_123",
        "name": "disclosure",
        "tenant_id": "1",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
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

### POST /api/v1/{tenant_id}/client-form-types - client-form-type-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientFormTypeCreateOutputBody.json",
      "id": "string"
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

### DELETE /api/v1/{tenant_id}/client-form-types/{client_form_type_id} - client-form-type-delete

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

### GET /api/v1/{tenant_id}/client-form-types/{client_form_type_id} - client-form-type-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientFormTypeResponse.json",
      "created_at": "2026-01-15T10:30:00Z",
      "id": "cft_123",
      "name": "disclosure",
      "tenant_id": "1",
      "updated_at": "2026-01-15T10:30:00Z"
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

