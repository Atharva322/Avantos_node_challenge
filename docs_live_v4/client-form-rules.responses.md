# Client Form Rules Response Examples

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

