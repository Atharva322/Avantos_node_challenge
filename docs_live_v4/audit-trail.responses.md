# Audit Trail Response Examples

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

