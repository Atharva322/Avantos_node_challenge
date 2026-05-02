# Audit Trail

Source: `Avantos Core API`

## Overview

Operations tagged 'Audit Trail' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/audit-trail/search | operation | no | audit-trail-search Searches audit trail entries with filtering and pagination |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/SearchAuditTrailInputBody.json", "actor_id": "agent_01ABC", "actor_type": "agent", "occurred_after": "2024-01-01T00:00:00Z", "occurred_before": "2024-12-31T23:59:59Z", "operation": "create", "pagination_params": {"page": 1, "page_size": 10}, "record_id": "co_01ABC", "request_id": "string", "table_name": "client_organisations"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/SearchAuditTrailInputBody.json |
| requestBody (application/json).actor_id | string | no | Filter by actor ID | agent_01ABC |
| requestBody (application/json).actor_type | string | no | Filter by actor type | agent |
| requestBody (application/json).occurred_after | string | no | Filter entries that occurred after this time | 2024-01-01T00:00:00Z |
| requestBody (application/json).occurred_before | string | no | Filter entries that occurred before this time | 2024-12-31T23:59:59Z |
| requestBody (application/json).operation | string | no | Filter by operation type | create |
| requestBody (application/json).pagination_params | object | no |  | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).record_id | string | no | Filter by record ID | co_01ABC |
| requestBody (application/json).request_id | string | no | Filter by request ID | string |
| requestBody (application/json).table_name | string | no | Filter by table name | client_organisations |


## Response Examples

### POST /api/v1/{tenant_id}/audit-trail/search - audit-trail-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SearchAuditTrailOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "results": [
        {
          "actor_id": "string",
          "actor_type": "string",
          "id": "string",
          "occurred_at": "2026-01-15T10:30:00Z",
          "operation": "string",
          "payload": {},
          "record_id": "string",
          "request_id": "string",
          "table_name": "string",
          "tenant_id": "string"
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

