# Todos Response Examples

### POST /api/v1/{tenant_id}/todos - todo-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TodoCreateOutputBody.json",
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

### POST /api/v1/{tenant_id}/todos/list - todo-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TodoListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "results": [
        {
          "$schema": "https://example.com/schemas/TodoResponse.json",
          "assignee_first_name": "string",
          "assignee_id": "string",
          "assignee_last_name": "string",
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "complete": true,
          "completed_at": "2026-01-15T10:30:00Z",
          "created_at": "2026-01-15T10:30:00Z",
          "created_by": "string",
          "due_date": "2026-01-15T10:30:00Z",
          "id": "td_123",
          "is_read": true,
          "notes": "string",
          "role_names": [
            "string"
          ],
          "scope_type": "string",
          "tags": [
            "string"
          ],
          "tenant_id": "1",
          "title": "string"
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

### DELETE /api/v1/{tenant_id}/todos/{todo_id} - todo-delete

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

### GET /api/v1/{tenant_id}/todos/{todo_id} - todo-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TodoResponse.json",
      "assignee_first_name": "string",
      "assignee_id": "string",
      "assignee_last_name": "string",
      "client_organisation_id": "string",
      "client_organisation_name": "string",
      "complete": true,
      "completed_at": "2026-01-15T10:30:00Z",
      "created_at": "2026-01-15T10:30:00Z",
      "created_by": "string",
      "due_date": "2026-01-15T10:30:00Z",
      "id": "td_123",
      "is_read": true,
      "notes": "string",
      "role_names": [
        "string"
      ],
      "scope_type": "string",
      "tags": [
        "string"
      ],
      "tenant_id": "1",
      "title": "string"
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

### PATCH /api/v1/{tenant_id}/todos/{todo_id} - todo-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TodoResponse.json",
      "assignee_first_name": "string",
      "assignee_id": "string",
      "assignee_last_name": "string",
      "client_organisation_id": "string",
      "client_organisation_name": "string",
      "complete": true,
      "completed_at": "2026-01-15T10:30:00Z",
      "created_at": "2026-01-15T10:30:00Z",
      "created_by": "string",
      "due_date": "2026-01-15T10:30:00Z",
      "id": "td_123",
      "is_read": true,
      "notes": "string",
      "role_names": [
        "string"
      ],
      "scope_type": "string",
      "tags": [
        "string"
      ],
      "tenant_id": "1",
      "title": "string"
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

