# Action Runs

Source: `Avantos Core API`

## Overview

Operations tagged 'Action Runs' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| DELETE /api/v1/{tenant_id}/action-runs/{action_run_id} | operation | no | action-run-delete Soft deletes an action run and all its related components, tasks, and data. The run will no longer appear in queries but remains in the database for audit purposes. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| action_run_id | string | yes | The action run ID | ar_456 |


## Response Examples

### DELETE /api/v1/{tenant_id}/action-runs/{action_run_id} - action-run-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunDeleteOutputBody.json",
      "message": "string",
      "run_id": "string"
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

