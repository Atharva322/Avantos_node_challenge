# Identity Verification Response Examples

### POST /api/v1/{tenant_id}/identity-verification/verify - identity-verification-verify

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/IdentityVerificationResponse.json",
      "correlation_id": "string",
      "decision": "Approve",
      "details": {
        "address_trust": "string",
        "address_verification": "string",
        "dob_verification": "string",
        "email_trust": "string",
        "email_verification": "string",
        "identity_resolution": "string",
        "identity_risk": "string",
        "identity_trust": "string",
        "identity_verification": "string",
        "phone_trust": "string",
        "ssn_trust": "string",
        "ssn_verification": "string"
      },
      "timestamp": "string",
      "trace_id": "string",
      "transaction_id": "string"
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

