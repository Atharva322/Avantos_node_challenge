# External System IDs

Source: `Avantos Core API`

## Overview

Operations tagged 'External System IDs' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/{tenant_id}/external-system-ids/expiring | operation | no | external-system-ids-expiring-get Returns external system identifiers expiring before the given timestamp (defaults to 30 days from now). |  |
| tenant_id | string | yes |  | string |
| before | string | no | Return IDs expiring before this RFC3339 timestamp. Defaults to 30 days from now. | 2026-05-26T00:00:00Z |
| GET /api/v1/{tenant_id}/external-system-ids/{entity_type}/{entity_id} | operation | no | external-system-ids-get Returns all external system identifiers for a given entity. |  |
| tenant_id | string | yes |  | string |
| entity_type | string | yes | The type of entity | agent |
| entity_id | string | yes |  | string |


## Response Examples

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

