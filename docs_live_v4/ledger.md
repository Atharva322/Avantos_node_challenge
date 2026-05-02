# Ledger

Source: `Avantos Core API`

## Overview

Operations tagged 'Ledger' from Avantos Core API.

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
| POST /api/v1/{tenant_id}/ledger/aggregations/search | operation | no | ledger-aggregations-search Returns grouped ledger aggregations across current balances, derived position lineage, or policy valuations. |  |
| tenant_id | string | yes | The tenant ID | tenant_123 |
| requestBody (application/json) | object | yes |  | {"$schema": "https://example.com/schemas/LedgerAggregationSearchInputBody.json", "aggregation": "sum", "filters": {"account_ids": ["string"], "account_statuses": ["string"], "authorities": ["string"], "balance_scopes": ["string"], "balance_types": ["string"], "carriers": ["string"], "client_organisation_ids": ["string"], "currencies": ["string"], "custodians": ["string"], "lines_of_business": ["string"], "policy_ids": ["string"], "policy_statuses": ["string"], "policy_subtypes": ["string"], "product_ids": ["string"], "product_types": ["string"], "source_kinds": ["string"], "source_systems": ["string"], "tax_statuses": ["string"], "valuation_types": ["string"]}, "group_by": ["product_type", "valuation_type"], "measure": "valuation_amount", "only_assigned": true, "pagination_params": {"page": 1, "page_size": 10}, "sort_keys": [{"sort_column": "aggregate_value", "sort_order": "DESC"}], "source": "position_lineage"} |
| requestBody (application/json).$schema | string | no | A URL to the JSON Schema for this object. | https://example.com/schemas/LedgerAggregationSearchInputBody.json |
| requestBody (application/json).aggregation | string | yes | The aggregation operation | sum |
| requestBody (application/json).filters | object | no | Source-specific filters | {"account_ids": ["string"], "account_statuses": ["string"], "authorities": ["string"], "balance_scopes": ["string"], "balance_types": ["string"], "carriers": ["string"], "client_organisation_ids": ["string"], "currencies": ["string"], "custodians": ["string"], "lines_of_business": ["string"], "policy_ids": ["string"], "policy_statuses": ["string"], "policy_subtypes": ["string"], "product_ids": ["string"], "product_types": ["string"], "source_kinds": ["string"], "source_systems": ["string"], "tax_statuses": ["string"], "valuation_types": ["string"]} |
| requestBody (application/json).filters.account_ids | ['array', 'null'] | no | Account filters for source=position_lineage | ["string"] |
| requestBody (application/json).filters.account_ids[] | string | no | Account filters for source=position_lineage | string |
| requestBody (application/json).filters.account_statuses | ['array', 'null'] | no | Account status filters for source=position_lineage | ["string"] |
| requestBody (application/json).filters.account_statuses[] | string | no | Account status filters for source=position_lineage | string |
| requestBody (application/json).filters.authorities | ['array', 'null'] | no | Projection authority filters for source=current_balance | ["string"] |
| requestBody (application/json).filters.authorities[] | string | no | Projection authority filters for source=current_balance | string |
| requestBody (application/json).filters.balance_scopes | ['array', 'null'] | no | Projection balance_scope filters for source=current_balance | ["string"] |
| requestBody (application/json).filters.balance_scopes[] | string | no | Projection balance_scope filters for source=current_balance | string |
| requestBody (application/json).filters.balance_types | ['array', 'null'] | no | Projection balance_type filters for source=current_balance | ["string"] |
| requestBody (application/json).filters.balance_types[] | string | no | Projection balance_type filters for source=current_balance | string |
| requestBody (application/json).filters.carriers | ['array', 'null'] | no | Policy carrier filters for source=policy_valuation | ["string"] |
| requestBody (application/json).filters.carriers[] | string | no | Policy carrier filters for source=policy_valuation | string |
| requestBody (application/json).filters.client_organisation_ids | ['array', 'null'] | no | Optional filter to a set of client organisations | ["string"] |
| requestBody (application/json).filters.client_organisation_ids[] | string | no | Optional filter to a set of client organisations | string |
| requestBody (application/json).filters.currencies | ['array', 'null'] | no | Currency filters. Required unless currency is included in group_by. | ["string"] |
| requestBody (application/json).filters.currencies[] | string | no | Currency filters. Required unless currency is included in group_by. | string |
| requestBody (application/json).filters.custodians | ['array', 'null'] | no | Custodian filters for source=position_lineage | ["string"] |
| requestBody (application/json).filters.custodians[] | string | no | Custodian filters for source=position_lineage | string |
| requestBody (application/json).filters.lines_of_business | ['array', 'null'] | no | Policy line_of_business filters for source=policy_valuation | ["string"] |
| requestBody (application/json).filters.lines_of_business[] | string | no | Policy line_of_business filters for source=policy_valuation | string |
| requestBody (application/json).filters.policy_ids | ['array', 'null'] | no | Policy filters for source=policy_valuation | ["string"] |
| requestBody (application/json).filters.policy_ids[] | string | no | Policy filters for source=policy_valuation | string |
| requestBody (application/json).filters.policy_statuses | ['array', 'null'] | no | Policy status filters for source=policy_valuation | ["string"] |
| requestBody (application/json).filters.policy_statuses[] | string | no | Policy status filters for source=policy_valuation | string |
| requestBody (application/json).filters.policy_subtypes | ['array', 'null'] | no | Policy subtype filters for source=policy_valuation | ["string"] |
| requestBody (application/json).filters.policy_subtypes[] | string | no | Policy subtype filters for source=policy_valuation | string |
| requestBody (application/json).filters.product_ids | ['array', 'null'] | no | Product filters for source=position_lineage | ["string"] |
| requestBody (application/json).filters.product_ids[] | string | no | Product filters for source=position_lineage | string |
| requestBody (application/json).filters.product_types | ['array', 'null'] | no | Product type filters for source=position_lineage | ["string"] |
| requestBody (application/json).filters.product_types[] | string | no | Product type filters for source=position_lineage | string |
| requestBody (application/json).filters.source_kinds | ['array', 'null'] | no | Projection source_kind filters for source=current_balance | ["string"] |
| requestBody (application/json).filters.source_kinds[] | string | no | Projection source_kind filters for source=current_balance | string |
| requestBody (application/json).filters.source_systems | ['array', 'null'] | no | Source system filters | ["string"] |
| requestBody (application/json).filters.source_systems[] | string | no | Source system filters | string |
| requestBody (application/json).filters.tax_statuses | ['array', 'null'] | no | Tax status filters for source=position_lineage | ["string"] |
| requestBody (application/json).filters.tax_statuses[] | string | no | Tax status filters for source=position_lineage | string |
| requestBody (application/json).filters.valuation_types | ['array', 'null'] | no | Valuation type filters for source=position_lineage or source=policy_valuation | ["string"] |
| requestBody (application/json).filters.valuation_types[] | string | no | Valuation type filters for source=position_lineage or source=policy_valuation | string |
| requestBody (application/json).group_by | ['array', 'null'] | no | The dimensions to group by | ["product_type", "valuation_type"] |
| requestBody (application/json).group_by[] | string | no | The dimensions to group by | string |
| requestBody (application/json).measure | string | yes | The measure to aggregate | valuation_amount |
| requestBody (application/json).only_assigned | boolean | no | If true, restrict the visible client organisations to those directly assigned to the caller | True |
| requestBody (application/json).pagination_params | object | no | Pagination information | {"page": 1, "page_size": 10} |
| requestBody (application/json).pagination_params.page | integer | yes | The page number to return | 1 |
| requestBody (application/json).pagination_params.page_size | integer | yes | The number of records per page | 10 |
| requestBody (application/json).sort_keys | ['array', 'null'] | no | Sort keys for the grouped rows | [{"sort_column": "aggregate_value", "sort_order": "DESC"}] |
| requestBody (application/json).sort_keys[] | object | no | Sort keys for the grouped rows | {"sort_column": "aggregate_value", "sort_order": "DESC"} |
| requestBody (application/json).sort_keys[].sort_column | string | yes | Sort column. Allowed values are aggregate_value, row_count, and selected group_by dimensions. | aggregate_value |
| requestBody (application/json).sort_keys[].sort_order | string | yes | Sort direction | DESC |
| requestBody (application/json).source | string | yes | The ledger source to aggregate | position_lineage |


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

