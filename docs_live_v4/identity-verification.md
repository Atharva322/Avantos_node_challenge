# Identity Verification

Source: `Avantos Core API`

## Overview

Operations tagged 'Identity Verification' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/identity-verification/verify | operation | no | identity-verification-verify Verifies an individual's identity using the configured identity verification provider (Equifax DIT 2.0). Returns a risk assessment decision: Approve, Review, or Deny. |  |
| tenant_id | string | yes | The tenant ID | test-tenant |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/IdentityVerificationRequest.json", "address": {"city": "Alpharetta", "country_code": "US", "county": "Fulton", "line1": "1505 Windward Concourse", "line2": "Apt 1", "postal_code": "30005", "region": "GA"}, "correlation_id": "a5333424-19c2-4b7c-ab40-5d5ebb30cc4f", "date_of_birth": {"day": 12, "month": 11, "year": 1987}, "email": "john.smith@example.com", "first_name": "John", "ip_address": "192.168.1.45", "last_name": "Smith", "middle_name": "string", "reference_id": "string", "ssn": "111222666"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/IdentityVerificationRequest.json |
| requestBody (application/json).address | object | yes | Consumer's current residential address | {"city": "Alpharetta", "country_code": "US", "county": "Fulton", "line1": "1505 Windward Concourse", "line2": "Apt 1", "postal_code": "30005", "region": "GA"} |
| requestBody (application/json).address.city | string | yes | City | Alpharetta |
| requestBody (application/json).address.country_code | string | yes | Two-character country code | US |
| requestBody (application/json).address.county | string | no | County | Fulton |
| requestBody (application/json).address.line1 | string | yes | Street number and name | 1505 Windward Concourse |
| requestBody (application/json).address.line2 | string | no | Apt, suite, unit | Apt 1 |
| requestBody (application/json).address.postal_code | string | yes | 5 or 9-digit postal code | 30005 |
| requestBody (application/json).address.region | string | yes | Two-character state code | GA |
| requestBody (application/json).correlation_id | string | yes | Unique identifier for this verification request (UUID recommended) | a5333424-19c2-4b7c-ab40-5d5ebb30cc4f |
| requestBody (application/json).date_of_birth | object | no | Consumer's date of birth | {"day": 12, "month": 11, "year": 1987} |
| requestBody (application/json).date_of_birth.day | integer | yes | Day of birth | 12 |
| requestBody (application/json).date_of_birth.month | integer | yes | Month of birth | 11 |
| requestBody (application/json).date_of_birth.year | integer | no | Year of birth | 1987 |
| requestBody (application/json).email | string | no | Consumer's email address | john.smith@example.com |
| requestBody (application/json).first_name | string | yes | Consumer's first name | John |
| requestBody (application/json).ip_address | string | no | Consumer's device IP address | 192.168.1.45 |
| requestBody (application/json).last_name | string | yes | Consumer's last name | Smith |
| requestBody (application/json).middle_name | string | no | Consumer's middle name | string |
| requestBody (application/json).reference_id | string | no | Optional pass-through reference ID for debugging | string |
| requestBody (application/json).ssn | string | no | Social Security Number (4 or 9 digits) | 111222666 |


## Response Examples

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

