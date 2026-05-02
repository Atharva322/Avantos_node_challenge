# Business Groups

Source: `Avantos Core API`

## Overview

Operations tagged 'Business Groups' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/business-groups | operation | no | business-group-create Creates a new business group for the specified tenant |  |
| tenant_id | string | yes | The tenant ID | 123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/BusinessGroupCreateInputBody.json", "additional_attributes": {"key": "value"}, "description": "This is the first region.", "external_id": "bg_123", "group_type": "region", "name": "Region 1", "status": "active"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/BusinessGroupCreateInputBody.json |
| requestBody (application/json).additional_attributes | object | no | Additional attributes for the business group as a map | {"key": "value"} |
| requestBody (application/json).description | string | no | A description of the business group | This is the first region. |
| requestBody (application/json).external_id | string | yes | The unique identifier of the business group from the external system | bg_123 |
| requestBody (application/json).group_type | string | yes | The type of the business group, e.g., 'region' or 'division' | region |
| requestBody (application/json).name | string | yes | The name of the business group | Region 1 |
| requestBody (application/json).status | string | no | The status of the business group | active |
| GET /api/v1/{tenant_id}/business-groups/{business_group_id} | operation | no | business-group-get Retrieves a specific business group by its ID for the specified tenant |  |
| tenant_id | string | yes | The tenant ID | 123 |
| business_group_id | string | yes | The business group ID | bg_01JGQK9X1ABCDEFGHIJKLMNOP |


## Response Examples

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

