# Form Rules

Source: `Avantos Core API`

## Overview

Operations tagged 'Form Rules' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/{tenant_id}/custodians | operation | no | custodian-list Returns the list of valid custodian values. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| GET /api/v1/{tenant_id}/form-rules | operation | no | form-rule-list Lists form rules for the tenant, with optional filters. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| custodian | string | no | Filter by custodian | Fidelity |
| transaction_type | string | no | Filter by transaction type | New Account |
| registration_id | string | no | Filter by registration ID | reg_123 |
| POST /api/v1/{tenant_id}/form-rules | operation | no | form-rule-create Creates a new form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/FormRuleCreateInputBody.json", "custodian": "Fidelity", "endpoints": {}, "form_template_id": "f_123", "registration_id": "reg_123", "rules": {}, "transaction_type": "New Account"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/FormRuleCreateInputBody.json |
| requestBody (application/json).custodian | string | yes | The custodian | Fidelity |
| requestBody (application/json).endpoints |  | no | Endpoints JSON array | {} |
| requestBody (application/json).form_template_id | string | yes | The form template ID | f_123 |
| requestBody (application/json).registration_id | string | yes | The registration ID | reg_123 |
| requestBody (application/json).rules |  | no | Rules JSON | {} |
| requestBody (application/json).transaction_type | string | yes | The transaction type | New Account |
| POST /api/v1/{tenant_id}/form-rules/by-form-templates | operation | no | form-rules-by-form-templates Fetches form rules matching any of the given form template IDs. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/FormRulesByFormTemplatesInputBody.json", "form_template_ids": ["f_123", "f_456"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/FormRulesByFormTemplatesInputBody.json |
| requestBody (application/json).form_template_ids | array[string] | yes | Array of form template IDs to fetch rules for | ["f_123", "f_456"] |
| requestBody (application/json).form_template_ids[] | string | yes | Array of form template IDs to fetch rules for | string |
| DELETE /api/v1/{tenant_id}/form-rules/{form_rule_id} | operation | no | form-rule-delete Deletes a form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| form_rule_id | string | yes | The form rule ID | fr_123 |
| GET /api/v1/{tenant_id}/form-rules/{form_rule_id} | operation | no | form-rule-get Retrieves a form rule by ID. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| form_rule_id | string | yes | The form rule ID | fr_123 |
| PATCH /api/v1/{tenant_id}/form-rules/{form_rule_id} | operation | no | form-rule-patch Partially updates a form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| form_rule_id | string | yes | The form rule ID | fr_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/FormRulePatchInputBody.json", "custodian": "Fidelity", "endpoints": {}, "form_template_id": "f_123", "registration_id": "reg_123", "rules": {}, "transaction_type": "New Account"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/FormRulePatchInputBody.json |
| requestBody (application/json).custodian | string | no | The custodian | Fidelity |
| requestBody (application/json).endpoints |  | no | Endpoints JSON array | {} |
| requestBody (application/json).form_template_id | string | no | The form template ID | f_123 |
| requestBody (application/json).registration_id | string | no | The registration ID | reg_123 |
| requestBody (application/json).rules |  | no | Rules JSON | {} |
| requestBody (application/json).transaction_type | string | no | The transaction type | New Account |
| PUT /api/v1/{tenant_id}/form-rules/{form_rule_id} | operation | no | form-rule-update Replaces all mutable fields of a form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| form_rule_id | string | yes | The form rule ID | fr_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/FormRuleUpdateInputBody.json", "custodian": "Fidelity", "endpoints": {}, "form_template_id": "f_123", "registration_id": "reg_123", "rules": {}, "transaction_type": "New Account"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/FormRuleUpdateInputBody.json |
| requestBody (application/json).custodian | string | yes | The custodian | Fidelity |
| requestBody (application/json).endpoints |  | no | Endpoints JSON array | {} |
| requestBody (application/json).form_template_id | string | yes | The form template ID | f_123 |
| requestBody (application/json).registration_id | string | yes | The registration ID | reg_123 |
| requestBody (application/json).rules |  | no | Rules JSON | {} |
| requestBody (application/json).transaction_type | string | yes | The transaction type | New Account |
| GET /api/v1/{tenant_id}/transaction-types | operation | no | transaction-type-list Returns the list of valid transaction type values. |  |
| tenant_id | string | yes | The tenant ID | 1 |


## Response Examples

### GET /api/v1/{tenant_id}/custodians - custodian-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      "string"
    ]
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

### GET /api/v1/{tenant_id}/form-rules - form-rule-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/FormRuleResponse.json",
        "created_at": "2026-01-15T10:30:00Z",
        "custodian": "Fidelity",
        "endpoints": {},
        "form_template_id": "f_123",
        "id": "fr_123",
        "registration_id": "reg_123",
        "rules": {},
        "tenant_id": "1",
        "transaction_type": "New Account",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
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

### POST /api/v1/{tenant_id}/form-rules - form-rule-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FormRuleCreateOutputBody.json",
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

### POST /api/v1/{tenant_id}/form-rules/by-form-templates - form-rules-by-form-templates

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/FormRuleResponse.json",
        "created_at": "2026-01-15T10:30:00Z",
        "custodian": "Fidelity",
        "endpoints": {},
        "form_template_id": "f_123",
        "id": "fr_123",
        "registration_id": "reg_123",
        "rules": {},
        "tenant_id": "1",
        "transaction_type": "New Account",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
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

### DELETE /api/v1/{tenant_id}/form-rules/{form_rule_id} - form-rule-delete

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

### GET /api/v1/{tenant_id}/form-rules/{form_rule_id} - form-rule-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FormRuleResponse.json",
      "created_at": "2026-01-15T10:30:00Z",
      "custodian": "Fidelity",
      "endpoints": {},
      "form_template_id": "f_123",
      "id": "fr_123",
      "registration_id": "reg_123",
      "rules": {},
      "tenant_id": "1",
      "transaction_type": "New Account",
      "updated_at": "2026-01-15T10:30:00Z"
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

### PATCH /api/v1/{tenant_id}/form-rules/{form_rule_id} - form-rule-patch

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FormRuleResponse.json",
      "created_at": "2026-01-15T10:30:00Z",
      "custodian": "Fidelity",
      "endpoints": {},
      "form_template_id": "f_123",
      "id": "fr_123",
      "registration_id": "reg_123",
      "rules": {},
      "tenant_id": "1",
      "transaction_type": "New Account",
      "updated_at": "2026-01-15T10:30:00Z"
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

### PUT /api/v1/{tenant_id}/form-rules/{form_rule_id} - form-rule-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FormRuleResponse.json",
      "created_at": "2026-01-15T10:30:00Z",
      "custodian": "Fidelity",
      "endpoints": {},
      "form_template_id": "f_123",
      "id": "fr_123",
      "registration_id": "reg_123",
      "rules": {},
      "tenant_id": "1",
      "transaction_type": "New Account",
      "updated_at": "2026-01-15T10:30:00Z"
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

### GET /api/v1/{tenant_id}/transaction-types - transaction-type-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      "string"
    ]
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

