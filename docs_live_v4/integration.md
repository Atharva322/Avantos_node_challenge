# Integration

Source: `Avantos Core API`

## Overview

Operations tagged 'Integration' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/integration/ingest-events | operation | no | direct-ingest-events Accepts a batch of source-system events and processes them through the integration pipeline. |  |
| tenant_id | string | yes | Tenant ID | string |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/DirectIngestInputBody.json", "batch_id": "string", "object_type": "string", "records": [{"external_id": "string", "occurred_at": "2026-01-15T10:30:00Z", "operation": "upsert", "payload": {"key": {}}}], "source": "string"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/DirectIngestInputBody.json |
| requestBody (application/json).batch_id | string | no | Optional client-provided batch ID | string |
| requestBody (application/json).object_type | string | yes | Source system object type (e.g. Account, User, Agency) | string |
| requestBody (application/json).records | ['array', 'null'] | yes | Records to ingest | [{"external_id": "string", "occurred_at": "2026-01-15T10:30:00Z", "operation": "upsert", "payload": {"key": {}}}] |
| requestBody (application/json).records[] | object | yes | Records to ingest | {"external_id": "string", "occurred_at": "2026-01-15T10:30:00Z", "operation": "upsert", "payload": {"key": {}}} |
| requestBody (application/json).records[].external_id | string | no | External record ID (required for delete operations) | string |
| requestBody (application/json).records[].occurred_at | string | no | When the event occurred in the source system | 2026-01-15T10:30:00Z |
| requestBody (application/json).records[].operation | string | yes | Record operation | upsert |
| requestBody (application/json).records[].payload | object | no | Raw source-system field values | {"key": {}} |
| requestBody (application/json).source | string | no | Caller identifier | string |


## Response Examples

### POST /api/v1/{tenant_id}/integration/ingest-events - direct-ingest-events

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DirectIngestOutputBody.json",
      "failed": 1,
      "processed": 1,
      "profile": "string",
      "received": 1,
      "skipped": 1,
      "tenant_id": "string"
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

