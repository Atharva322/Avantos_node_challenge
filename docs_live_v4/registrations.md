# Registrations

Source: `Avantos Core API`

## Overview

Operations tagged 'Registrations' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/{tenant_id}/registrations | operation | no | registration-list Lists registrations for the tenant. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| POST /api/v1/{tenant_id}/registrations | operation | no | registration-create Creates a new registration. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RegistrationCreateInputBody.json", "name": "IRA"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RegistrationCreateInputBody.json |
| requestBody (application/json).name | string | yes | The registration name | IRA |
| DELETE /api/v1/{tenant_id}/registrations/{registration_id} | operation | no | registration-delete Deletes a registration. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| registration_id | string | yes | The registration ID | reg_123 |
| GET /api/v1/{tenant_id}/registrations/{registration_id} | operation | no | registration-get Retrieves a registration by ID. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| registration_id | string | yes | The registration ID | reg_123 |
| PATCH /api/v1/{tenant_id}/registrations/{registration_id} | operation | no | registration-patch Partially updates a registration. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| registration_id | string | yes | The registration ID | reg_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RegistrationPatchInputBody.json", "name": "IRA"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RegistrationPatchInputBody.json |
| requestBody (application/json).name | string | no | The registration name | IRA |
| PUT /api/v1/{tenant_id}/registrations/{registration_id} | operation | no | registration-update Replaces all mutable fields of a registration. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| registration_id | string | yes | The registration ID | reg_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/RegistrationUpdateInputBody.json", "name": "IRA"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/RegistrationUpdateInputBody.json |
| requestBody (application/json).name | string | yes | The registration name | IRA |


## Response Examples

### GET /api/v1/{tenant_id}/registrations - registration-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/RegistrationResponse.json",
        "created_at": "2026-01-15T10:30:00Z",
        "id": "reg_123",
        "name": "IRA",
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

### POST /api/v1/{tenant_id}/registrations - registration-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RegistrationCreateOutputBody.json",
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

### DELETE /api/v1/{tenant_id}/registrations/{registration_id} - registration-delete

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

### GET /api/v1/{tenant_id}/registrations/{registration_id} - registration-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RegistrationResponse.json",
      "created_at": "2026-01-15T10:30:00Z",
      "id": "reg_123",
      "name": "IRA",
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

### PATCH /api/v1/{tenant_id}/registrations/{registration_id} - registration-patch

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RegistrationResponse.json",
      "created_at": "2026-01-15T10:30:00Z",
      "id": "reg_123",
      "name": "IRA",
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

### PUT /api/v1/{tenant_id}/registrations/{registration_id} - registration-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RegistrationResponse.json",
      "created_at": "2026-01-15T10:30:00Z",
      "id": "reg_123",
      "name": "IRA",
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

