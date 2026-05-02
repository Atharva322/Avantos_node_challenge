# Servicing Table Configs Response Examples

### GET /api/v1/{tenant_id}/servicing-table-configs/{table_key} - servicing-table-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ServicingTableConfigBody.json",
      "all_view_filters": {},
      "columns": {},
      "default_column_visibility": {},
      "default_sorting": {},
      "only_assigned": true,
      "suggested_filters": {},
      "table_key": "string"
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

### PUT /api/v1/{tenant_id}/servicing-table-configs/{table_key} - servicing-table-config-put

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ServicingTableConfigBody.json",
      "all_view_filters": {},
      "columns": {},
      "default_column_visibility": {},
      "default_sorting": {},
      "only_assigned": true,
      "suggested_filters": {},
      "table_key": "string"
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

