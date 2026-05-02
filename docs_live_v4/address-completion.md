# Address Completion

Source: `Avantos Core API`

## Overview

Operations tagged 'Address Completion' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| POST /api/v1/{tenant_id}/address-completion/autocomplete | operation | no | address-completion-autocomplete Returns address suggestions based on partial text input. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AddressAutocompleteInputBody.json", "countries": ["us"], "input": "123 Main", "session_token": "uuid-session-token"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AddressAutocompleteInputBody.json |
| requestBody (application/json).countries | ['array', 'null'] | no | ISO 3166-1 alpha-2 country codes to restrict results | ["us"] |
| requestBody (application/json).countries[] | string | no | ISO 3166-1 alpha-2 country codes to restrict results | string |
| requestBody (application/json).input | string | yes | Partial address text to autocomplete | 123 Main |
| requestBody (application/json).session_token | string | no | Client generated session token for billing purposes, must be a valid UUID4 string | uuid-session-token |
| POST /api/v1/{tenant_id}/address-completion/place-details | operation | no | address-completion-place-details Returns structured address components for a place ID. |  |
| tenant_id | string | yes | The tenant ID | 1 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/AddressPlaceDetailsInputBody.json", "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4", "session_token": "uuid-session-token"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/AddressPlaceDetailsInputBody.json |
| requestBody (application/json).place_id | string | yes | The place ID from an autocomplete suggestion | ChIJN1t_tDeuEmsRUsoyG83frY4 |
| requestBody (application/json).session_token | string | no | Session token for billing purposes | uuid-session-token |


## Response Examples

### POST /api/v1/{tenant_id}/address-completion/autocomplete - address-completion-autocomplete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AddressAutocompleteOutputBody.json",
      "suggestions": [
        {
          "description": "123 Main St, Springfield, IL, USA",
          "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4"
        }
      ]
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

### POST /api/v1/{tenant_id}/address-completion/place-details - address-completion-place-details

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AddressPlaceDetailsOutputBody.json",
      "address_line_1": "123 Main St",
      "address_line_2": "Apt 4B",
      "city": "Springfield",
      "country": "US",
      "formatted_address": "123 Main St, Springfield, IL 62701, USA",
      "postal_code": "62701",
      "state": "IL"
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

