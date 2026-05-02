# Address Completion Response Examples

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

