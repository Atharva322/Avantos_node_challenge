# External System IDs Response Examples

### GET /api/v1/{tenant_id}/external-system-ids/expiring - external-system-ids-expiring-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetExpiringExternalSystemIDsOutputBody.json",
      "items": [
        {
          "id": "string",
          "key": "customer_code",
          "system": "envestnet",
          "updated_at": "2026-01-15T10:30:00Z",
          "valid_until": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
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

### GET /api/v1/{tenant_id}/external-system-ids/{entity_type}/{entity_id} - external-system-ids-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetExternalSystemIDsOutputBody.json",
      "items": [
        {
          "id": "string",
          "key": "customer_code",
          "system": "envestnet",
          "updated_at": "2026-01-15T10:30:00Z",
          "valid_until": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
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

