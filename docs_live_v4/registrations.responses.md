# Registrations Response Examples

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

