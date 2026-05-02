# Client Organisations

Source: `Avantos Core API`

## Overview

Operations tagged 'Client Organisations' from Avantos Core API.

## Parameters

| Name | Type | Required | Description | Example |
|---|---|---|---|---|
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances | operation | no | client-organisation-balances-get Returns the current projected balance rows for a client organisation. |  |
| tenant_id | string | yes | The tenant ID | tenant_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| balance_scope | string | no | Optional filter by balance scope | CLIENT_ORGANISATION_BALANCE |
| balance_type | string | no | Optional filter by balance type | AUM |
| currency | string | no | Optional filter by currency | USD |
| GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances/lineage | operation | no | client-organisation-balance-lineage-get Returns the detail rows that mathematically compose a selected client organisation balance row. |  |
| tenant_id | string | yes | The tenant ID | tenant_123 |
| client_organisation_id | string | yes | The client organisation ID | co_123 |
| balance_scope | string | no | The balance scope to resolve lineage for | CLIENT_ORGANISATION_BALANCE |
| balance_type | string | no | The balance type to resolve lineage for | AUM |
| currency | string | no | The currency to resolve lineage for | USD |
| authority | string | no | Optional authority filter when selecting the balance row | source_asserted |
| source_kind | string | no | Optional source kind filter when selecting the balance row | summary_balance |


## Response Examples

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances - client-organisation-balances-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationBalancesGetOutputBody.json",
      "balances": [
        {
          "amount": "2500000.50",
          "as_of_business_date": "2025-06-15",
          "authority": "source_asserted",
          "balance_scope": "CLIENT_ORGANISATION_BALANCE",
          "balance_type": "AUM",
          "client_organisation_id": "co_123",
          "currency": "USD",
          "source_fact_id": "sbv_123",
          "source_fact_table": "summary_balance_valuations",
          "source_kind": "summary_balance",
          "source_system": "SALESFORCE",
          "updated_at": "2025-06-15T14:30:00Z"
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

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/balances/lineage - client-organisation-balance-lineage-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationBalanceLineageGetOutputBody.json",
      "balance": {
        "amount": "2500000.50",
        "as_of_business_date": "2025-06-15",
        "authority": "source_asserted",
        "balance_scope": "CLIENT_ORGANISATION_BALANCE",
        "balance_type": "AUM",
        "client_organisation_id": "co_123",
        "currency": "USD",
        "source_fact_id": "sbv_123",
        "source_fact_table": "summary_balance_valuations",
        "source_kind": "summary_balance",
        "source_system": "SALESFORCE",
        "updated_at": "2025-06-15T14:30:00Z"
      },
      "details": [
        {
          "account_id": "fa_123",
          "amount": "1200.50",
          "balance_scope": "CLIENT_ORGANISATION_BALANCE",
          "balance_type": "AUM",
          "business_date": "2025-06-15",
          "canonical_balance_type": "AUM",
          "canonical_valuation_type": "MARKET_VALUE",
          "currency": "USD",
          "external_row_id": "row-123",
          "fact_id": "pv_123",
          "fact_table": "position_valuations",
          "policy_id": "pl_123",
          "product_id": "fp_123",
          "quantity": "10",
          "source_batch_id": "batch-123",
          "source_measure_code": "CUSTODIAN_AUM",
          "source_measure_field": "Custodian_Account_Balance",
          "source_measure_label": "Custodian AUM",
          "source_system": "guardian",
          "sub_account_id": "sub_123",
          "subject_id": "co_123",
          "subject_type": "client_organisation",
          "valuation_scope": "ACCOUNT_POSITION",
          "valuation_type": "MARKET_VALUE"
        }
      ],
      "lineage_summary": {
        "delta_from_balance": "0",
        "detail_row_count": 2,
        "detail_total_amount": "2500000.50",
        "lineage_mode": "derived_position_rollup"
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

