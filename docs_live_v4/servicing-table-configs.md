# Servicing Table Configs

Source: `Avantos Core API`

## Overview

Operations tagged 'Servicing Table Configs' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/{tenant_id}/servicing-table-configs/{table_key} | operation | no | servicing-table-config-get Returns the column configuration for a servicing table. |  |
| tenant_id | string | yes | Tenant ID | string |
| table_key | string | yes | Table key | string |
| PUT /api/v1/{tenant_id}/servicing-table-configs/{table_key} | operation | no | servicing-table-config-put Creates or updates the column configuration for a servicing table. |  |
| tenant_id | string | yes | Tenant ID | string |
| table_key | string | yes | Table key | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ServicingTableConfigBody.json", "all_view_filters": {}, "columns": {}, "default_column_visibility": {}, "default_sorting": {}, "only_assigned": true, "suggested_filters": {}, "table_key": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ServicingTableConfigBody.json |
| requestBody (application/json).all_view_filters |  | yes | Column filters applied when counting records in the All view | {} |
| requestBody (application/json).columns |  | yes | Array of column descriptors | {} |
| requestBody (application/json).default_column_visibility |  | yes | Map of column ID to default visibility | {} |
| requestBody (application/json).default_sorting |  | yes | Initial sort state (column ID and direction) | {} |
| requestBody (application/json).only_assigned | boolean | yes | Default the view to only show records assigned to the current user | True |
| requestBody (application/json).suggested_filters |  | yes | Pre-configured quick filter combinations shown to users | {} |
| requestBody (application/json).table_key | string | yes | Table identifier | string |


## Response Examples

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

