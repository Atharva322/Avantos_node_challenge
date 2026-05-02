# Business Groups Response Examples

### POST /api/v1/{tenant_id}/business-groups - business-group-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BusinessGroupCreateOutputBody.json",
      "id": "bg_01JGQK9X1ABCDEFGHIJKLMNOP"
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

### GET /api/v1/{tenant_id}/business-groups/{business_group_id} - business-group-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BusinessGroup.json",
      "additional_attributes": {
        "key": "value"
      },
      "agents": {
        "Director": {
          "agent_id": "ag_123",
          "first_name": "John",
          "last_name": "Doe"
        }
      },
      "created_at": "2024-01-01T09:00:00Z",
      "description": "This is the first region.",
      "external_id": "bg_123",
      "group_type": "region",
      "id": "bg_123",
      "name": "Region 1",
      "status": "active",
      "tenant_id": "t_123",
      "updated_at": "2024-01-01T09:00:00Z"
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

