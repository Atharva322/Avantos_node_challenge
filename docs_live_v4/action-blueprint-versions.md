# Action Blueprint Versions

Source: `Avantos Core API`

## Overview

Operations tagged 'Action Blueprint Versions' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}/fix-validation | operation | no | Fix validation errors Removes stale data_promotion_config and input_mapping entries referencing non-existent form fields or components from a blueprint version. |  |
| tenant_id | string | yes |  | string |
| action_blueprint_id | string | yes |  | string |
| blueprint_version_id | string | yes |  | string |


## Response Examples

### POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}/fix-validation - Fix validation errors

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

