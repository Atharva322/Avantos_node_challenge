# Client Organisation

Source: `Avantos Core API`

## Overview

Operations tagged 'Client Organisation' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| PUT /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/status | operation | no | Update client organisation relationship status Updates the relationship status of a client organisation. The new status must be an active value in the tenant's relationship_status lookups. No transition rules are enforced by the backend. |  |
| tenant_id | string | yes | The tenant ID | 123 |
| client_organisation_id | string | yes | The client organisation ID | co_123456 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientOrganisationStatusUpdateInputBody.json", "status": "Prospect"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientOrganisationStatusUpdateInputBody.json |
| requestBody (application/json).status | string | yes | New relationship status (must be an active value in the tenant's relationship_status lookups) | Prospect |


## Response Examples

### PUT /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/status - Update client organisation relationship status

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationStatusUpdateOutputBody.json",
      "id": "co_123456",
      "status": "Prospect"
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

