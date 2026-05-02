# Todos

Source: `Avantos Core API`

## Overview

Operations tagged 'Todos' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/todos | operation | no | todo-create Creates a new todo. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TodoCreateInputBody.json", "assignee_id": "string", "client_organisation_id": "string", "complete": true, "due_date": "2026-01-15T10:30:00Z", "is_read": true, "notes": "string", "role_names": ["string"], "scope_type": "personal", "tags": ["string"], "title": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TodoCreateInputBody.json |
| requestBody (application/json).assignee_id | string | no | Optional assignee (agent) ID | string |
| requestBody (application/json).client_organisation_id | string | no | Optional client organisation ID to link the todo to a relationship | string |
| requestBody (application/json).complete | boolean | yes | Whether the todo is complete | True |
| requestBody (application/json).due_date | string | no | Optional due date | 2026-01-15T10:30:00Z |
| requestBody (application/json).is_read | boolean | yes | Whether the todo is read | True |
| requestBody (application/json).notes | string | no | Optional notes | string |
| requestBody (application/json).role_names | ['array', 'null'] | no | Role names for role-scoped todos | ["string"] |
| requestBody (application/json).role_names[] | string | no | Role names for role-scoped todos | string |
| requestBody (application/json).scope_type | string | yes | Scope: personal (default), role, or global | personal |
| requestBody (application/json).tags | ['array', 'null'] | no | Tags for grouping | ["string"] |
| requestBody (application/json).tags[] | string | no | Tags for grouping | string |
| requestBody (application/json).title | string | yes | Todo title | string |
| POST /api/v1/{tenant_id}/todos/list | operation | no | todo-list Lists todos for the tenant. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TodoListInputBody.json", "filter": {}, "only_assigned": false, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "created_at", "sort_order": "DESC"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TodoListInputBody.json |
| requestBody (application/json).filter |  | no | Expression to filter todos. Column names: id, created_at, due_date, completed_at, title, is_read, complete, scope_type, assignee_id, created_by, client_organisation_id. | {} |
| requestBody (application/json).only_assigned | boolean | no | If true, only return todos linked to client organisations the current user is directly assigned to (excludes todos with no client organisation) | False |
| requestBody (application/json).pagination_params | object | no | Pagination. | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort keys. Allowed sort_column: id, created_at, due_date, completed_at, title, is_read, complete, scope_type, assignee_id, created_by, client_organisation_id. | [{"sort_column": "created_at", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort keys. Allowed sort_column: id, created_at, due_date, completed_at, title, is_read, complete, scope_type, assignee_id, created_by, client_organisation_id. | {"cast_type": "numeric", "collation": "default", "sort_column": "client_organisation_name", "sort_order": "ASC"} |
| requestBody (application/json).sort_keys[].cast_type | string | no | Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'. | numeric |
| requestBody (application/json).sort_keys[].collation | string | no | The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior. | default |
| requestBody (application/json).sort_keys[].sort_column | string | yes | The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields). | client_organisation_name |
| requestBody (application/json).sort_keys[].sort_order | string | yes | The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest). | ASC |
| DELETE /api/v1/{tenant_id}/todos/{todo_id} | operation | no | todo-delete Deletes a todo. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| todo_id | string | yes | The todo ID | todo_01JGQK9X1ABCDEFGHIJKLMNOP |
| GET /api/v1/{tenant_id}/todos/{todo_id} | operation | no | todo-get Retrieves a todo by ID. Visibility follows scope (personal/role/global) and RBAC. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| todo_id | string | yes | The todo ID | td_123 |
| PATCH /api/v1/{tenant_id}/todos/{todo_id} | operation | no | todo-update Updates an existing todo. |  |
| tenant_id | string | yes | The tenant ID | t_123 |
| todo_id | string | yes | The todo ID | todo_01JGQK9X1ABCDEFGHIJKLMNOP |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/TodoUpdateInputBody.json", "assignee_id": "string", "client_organisation_id": "string", "complete": true, "completed_at": "2026-01-15T10:30:00Z", "due_date": "2026-01-15T10:30:00Z", "is_read": true, "notes": "string", "role_names": ["string"], "scope_type": "string", "tags": ["string"], "title": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/TodoUpdateInputBody.json |
| requestBody (application/json).assignee_id | string | no | Optional assignee (agent) ID | string |
| requestBody (application/json).client_organisation_id | string | no | Optional client organisation ID to link the todo to a relationship | string |
| requestBody (application/json).complete | boolean | no | Whether the todo is complete | True |
| requestBody (application/json).completed_at | string | no | When the todo was completed | 2026-01-15T10:30:00Z |
| requestBody (application/json).due_date | string | no | Optional due date | 2026-01-15T10:30:00Z |
| requestBody (application/json).is_read | boolean | no | Whether the todo is read | True |
| requestBody (application/json).notes | string | no | Optional notes | string |
| requestBody (application/json).role_names | ['array', 'null'] | no | Role names for role-scoped todos | ["string"] |
| requestBody (application/json).role_names[] | string | no | Role names for role-scoped todos | string |
| requestBody (application/json).scope_type | string | no | Scope: personal, role, or global | string |
| requestBody (application/json).tags | ['array', 'null'] | no | Tags for grouping | ["string"] |
| requestBody (application/json).tags[] | string | no | Tags for grouping | string |
| requestBody (application/json).title | string | no | Todo title | string |


## Response Examples

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

