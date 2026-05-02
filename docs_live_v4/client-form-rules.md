# Client Form Rules

Source: `Avantos Core API`

## Overview

Operations tagged 'Client Form Rules' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/{tenant_id}/client-form-rules | operation | no | client-form-rule-list Lists client form rules for the tenant, with optional filters. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| active | string | no | Filter by active flag | true |
| client_form_type_id | string | no | Filter by client_form_type_id | string |
| prerequisite_form_template_ids | ['array', 'null'] | no | Filter to rules whose prerequisite list overlaps these form template IDs | ["string"] |
| POST /api/v1/{tenant_id}/client-form-rules | operation | no | client-form-rule-create Creates a new client form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientFormRuleCreateInputBody.json", "acknowledgement_config": {}, "active": true, "client_form_type_id": "cft_123", "endpoints": {}, "esign_eligible": true, "name": "IRA Disclosure", "optional": true, "prerequisite_form_template_ids": ["string"], "priority": 1, "requires_acknowledgement": true, "requires_signature": true, "rules": {}, "scope": "envelope"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientFormRuleCreateInputBody.json |
| requestBody (application/json).acknowledgement_config |  | no | Required when requires_acknowledgement=true | {} |
| requestBody (application/json).active | boolean | no | Whether this rule is currently active (defaults to true) | True |
| requestBody (application/json).client_form_type_id | string | yes | FK to client_form_types | cft_123 |
| requestBody (application/json).endpoints |  | yes | Endpoint entries array | {} |
| requestBody (application/json).esign_eligible | boolean | no | Defaults to true | True |
| requestBody (application/json).name | string | yes | Display name for the document | IRA Disclosure |
| requestBody (application/json).optional | boolean | no | Whether this form rule is optional (defaults to false) | True |
| requestBody (application/json).prerequisite_form_template_ids | ['array', 'null'] | yes | Custodian form template IDs that trigger evaluation | ["string"] |
| requestBody (application/json).prerequisite_form_template_ids[] | string | yes | Custodian form template IDs that trigger evaluation | string |
| requestBody (application/json).priority | integer | no | Ordering rank (defaults to 0) | 1 |
| requestBody (application/json).requires_acknowledgement | boolean | no | Defaults to false | True |
| requestBody (application/json).requires_signature | boolean | no | Defaults to false | True |
| requestBody (application/json).rules |  | no | Field-based conditions | {} |
| requestBody (application/json).scope | string | yes | Rule scope | envelope |
| POST /api/v1/{tenant_id}/client-form-rules/by-prerequisites | operation | no | client-form-rules-by-prerequisites Fetches client form rules whose prerequisite_form_template_ids overlap the provided list. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientFormRulesByPrerequisitesInputBody.json", "active_only": true, "prerequisite_form_template_ids": ["string"]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientFormRulesByPrerequisitesInputBody.json |
| requestBody (application/json).active_only | boolean | no | If true, only active rules are returned. Defaults to true. | True |
| requestBody (application/json).prerequisite_form_template_ids | array[string] | yes | Form template IDs to match against prerequisite_form_template_ids | ["string"] |
| requestBody (application/json).prerequisite_form_template_ids[] | string | yes | Form template IDs to match against prerequisite_form_template_ids | string |
| POST /api/v1/{tenant_id}/client-form-rules/evaluate | operation | no | client-form-rules-evaluate Evaluates client form rules against the provided custodian forms, generates PDFs for matched client forms, and returns the results grouped by scope (envelope-level vs per-account). |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/EvaluateClientFormsInputBody.json", "custodian": "Fidelity", "custodian_forms": [{"action_run_id": "string", "component_id": "string", "data": {"key": {}}, "form_id": "string"}]} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/EvaluateClientFormsInputBody.json |
| requestBody (application/json).custodian | string | yes | The selected custodian | Fidelity |
| requestBody (application/json).custodian_forms | ['array', 'null'] | yes | The selected custodian forms with their data | [{"action_run_id": "string", "component_id": "string", "data": {"key": {}}, "form_id": "string"}] |
| requestBody (application/json).custodian_forms[] | object | yes | The selected custodian forms with their data | {"action_run_id": "string", "component_id": "string", "data": {"key": {}}, "form_id": "string"} |
| requestBody (application/json).custodian_forms[].action_run_id | string | yes | The action run ID of the form's parent run | string |
| requestBody (application/json).custodian_forms[].component_id | string | yes | The run component ID | string |
| requestBody (application/json).custodian_forms[].data | object | yes | The form submission data (task data) | {"key": {}} |
| requestBody (application/json).custodian_forms[].form_id | string | yes | The form template ID | string |
| DELETE /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} | operation | no | client-form-rule-delete Soft-deletes a client form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| client_form_rule_id | string | yes | The client form rule ID | cfr_123 |
| GET /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} | operation | no | client-form-rule-get Retrieves a client form rule by ID. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| client_form_rule_id | string | yes | The client form rule ID | cfr_123 |
| PATCH /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} | operation | no | client-form-rule-patch Partially updates a client form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| client_form_rule_id | string | yes | The client form rule ID | cfr_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientFormRulePatchInputBody.json", "acknowledgement_config": {}, "active": true, "clear_acknowledgement_config": true, "client_form_type_id": "string", "endpoints": {}, "esign_eligible": true, "name": "string", "optional": true, "prerequisite_form_template_ids": ["string"], "priority": 1, "requires_acknowledgement": true, "requires_signature": true, "rules": {}, "scope": "envelope"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientFormRulePatchInputBody.json |
| requestBody (application/json).acknowledgement_config |  | no |  | {} |
| requestBody (application/json).active | boolean | no |  | True |
| requestBody (application/json).clear_acknowledgement_config | boolean | no | Set true to explicitly null out acknowledgement_config | True |
| requestBody (application/json).client_form_type_id | string | no |  | string |
| requestBody (application/json).endpoints |  | no |  | {} |
| requestBody (application/json).esign_eligible | boolean | no |  | True |
| requestBody (application/json).name | string | no |  | string |
| requestBody (application/json).optional | boolean | no | Whether this form rule is optional | True |
| requestBody (application/json).prerequisite_form_template_ids | array[string] | no |  | ["string"] |
| requestBody (application/json).prerequisite_form_template_ids[] | string | no |  | string |
| requestBody (application/json).priority | integer | no |  | 1 |
| requestBody (application/json).requires_acknowledgement | boolean | no |  | True |
| requestBody (application/json).requires_signature | boolean | no |  | True |
| requestBody (application/json).rules |  | no |  | {} |
| requestBody (application/json).scope | string | no |  | envelope |
| PUT /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} | operation | no | client-form-rule-update Replaces all mutable fields of a client form rule. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| client_form_rule_id | string | yes | The client form rule ID | cfr_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/ClientFormRuleUpdateInputBody.json", "acknowledgement_config": {}, "active": true, "client_form_type_id": "string", "endpoints": {}, "esign_eligible": true, "name": "string", "optional": true, "prerequisite_form_template_ids": ["string"], "priority": 1, "requires_acknowledgement": true, "requires_signature": true, "rules": {}, "scope": "envelope"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/ClientFormRuleUpdateInputBody.json |
| requestBody (application/json).acknowledgement_config |  | no |  | {} |
| requestBody (application/json).active | boolean | yes |  | True |
| requestBody (application/json).client_form_type_id | string | yes |  | string |
| requestBody (application/json).endpoints |  | yes |  | {} |
| requestBody (application/json).esign_eligible | boolean | yes |  | True |
| requestBody (application/json).name | string | yes |  | string |
| requestBody (application/json).optional | boolean | yes | Whether this form rule is optional | True |
| requestBody (application/json).prerequisite_form_template_ids | ['array', 'null'] | yes |  | ["string"] |
| requestBody (application/json).prerequisite_form_template_ids[] | string | yes |  | string |
| requestBody (application/json).priority | integer | yes |  | 1 |
| requestBody (application/json).requires_acknowledgement | boolean | yes |  | True |
| requestBody (application/json).requires_signature | boolean | yes |  | True |
| requestBody (application/json).rules |  | no |  | {} |
| requestBody (application/json).scope | string | yes |  | envelope |


## Response Examples

### GET /api/v1/{tenant_id}/client-form-rules - client-form-rule-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/ClientFormRuleResponse.json",
        "acknowledgement_config": {},
        "active": true,
        "client_form_type_id": "cft_123",
        "client_form_type_name": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "endpoints": {},
        "esign_eligible": true,
        "id": "cfr_123",
        "name": "IRA Disclosure",
        "optional": true,
        "prerequisite_form_template_ids": [
          "string"
        ],
        "priority": 1,
        "requires_acknowledgement": true,
        "requires_signature": true,
        "rules": {},
        "scope": "envelope",
        "tenant_id": "1",
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

### POST /api/v1/{tenant_id}/client-form-rules - client-form-rule-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientFormRuleCreateOutputBody.json",
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

### POST /api/v1/{tenant_id}/client-form-rules/by-prerequisites - client-form-rules-by-prerequisites

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/ClientFormRuleResponse.json",
        "acknowledgement_config": {},
        "active": true,
        "client_form_type_id": "cft_123",
        "client_form_type_name": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "endpoints": {},
        "esign_eligible": true,
        "id": "cfr_123",
        "name": "IRA Disclosure",
        "optional": true,
        "prerequisite_form_template_ids": [
          "string"
        ],
        "priority": 1,
        "requires_acknowledgement": true,
        "requires_signature": true,
        "rules": {},
        "scope": "envelope",
        "tenant_id": "1",
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

### POST /api/v1/{tenant_id}/client-form-rules/evaluate - client-form-rules-evaluate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/EvaluateClientFormsOutputBody.json",
      "envelope_level_forms": [
        {
          "acknowledgement_config": {},
          "client_form_rule_id": "string",
          "client_form_type_name": "string",
          "esign_eligible": true,
          "name": "string",
          "optional": true,
          "pdf_endpoint": {
            "endpoint_id": "string",
            "payload_template": {
              "key": {}
            }
          },
          "prerequisite_action_run_id": "string",
          "prerequisite_form_id": "string",
          "priority": 1,
          "requires_acknowledgement": true,
          "requires_signature": true,
          "scope": "envelope"
        }
      ],
      "per_account_forms": {
        "key": [
          {
            "acknowledgement_config": {},
            "client_form_rule_id": "string",
            "client_form_type_name": "string",
            "esign_eligible": true,
            "name": "string",
            "optional": true,
            "pdf_endpoint": {
              "endpoint_id": {},
              "payload_template": {}
            },
            "prerequisite_action_run_id": "string",
            "prerequisite_form_id": "string",
            "priority": 1,
            "requires_acknowledgement": true,
            "requires_signature": true,
            "scope": "envelope"
          }
        ]
      }
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

### DELETE /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} - client-form-rule-delete

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

### GET /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} - client-form-rule-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientFormRuleResponse.json",
      "acknowledgement_config": {},
      "active": true,
      "client_form_type_id": "cft_123",
      "client_form_type_name": "string",
      "created_at": "2026-01-15T10:30:00Z",
      "endpoints": {},
      "esign_eligible": true,
      "id": "cfr_123",
      "name": "IRA Disclosure",
      "optional": true,
      "prerequisite_form_template_ids": [
        "string"
      ],
      "priority": 1,
      "requires_acknowledgement": true,
      "requires_signature": true,
      "rules": {},
      "scope": "envelope",
      "tenant_id": "1",
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

### PATCH /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} - client-form-rule-patch

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientFormRuleResponse.json",
      "acknowledgement_config": {},
      "active": true,
      "client_form_type_id": "cft_123",
      "client_form_type_name": "string",
      "created_at": "2026-01-15T10:30:00Z",
      "endpoints": {},
      "esign_eligible": true,
      "id": "cfr_123",
      "name": "IRA Disclosure",
      "optional": true,
      "prerequisite_form_template_ids": [
        "string"
      ],
      "priority": 1,
      "requires_acknowledgement": true,
      "requires_signature": true,
      "rules": {},
      "scope": "envelope",
      "tenant_id": "1",
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

### PUT /api/v1/{tenant_id}/client-form-rules/{client_form_rule_id} - client-form-rule-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientFormRuleResponse.json",
      "acknowledgement_config": {},
      "active": true,
      "client_form_type_id": "cft_123",
      "client_form_type_name": "string",
      "created_at": "2026-01-15T10:30:00Z",
      "endpoints": {},
      "esign_eligible": true,
      "id": "cfr_123",
      "name": "IRA Disclosure",
      "optional": true,
      "prerequisite_form_template_ids": [
        "string"
      ],
      "priority": 1,
      "requires_acknowledgement": true,
      "requires_signature": true,
      "rules": {},
      "scope": "envelope",
      "tenant_id": "1",
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

