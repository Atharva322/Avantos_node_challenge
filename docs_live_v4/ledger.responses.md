# Ledger Response Examples

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

### POST /api/v1/{tenant_id}/ledger/aggregations/search - ledger-aggregations-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/LedgerAggregationSearchOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "rows": [
        {
          "aggregate_value": "1800000.00",
          "currency": "USD",
          "dimensions": {
            "key": "string"
          },
          "row_count": 24
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

