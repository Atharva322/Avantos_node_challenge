# list-sync-file-error-logs

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/list-sync-file-error-logs`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: object
    - required: yes
  - requestBody (application/json).$schema
    - type: string
    - required: no
    - description: A URL to the JSON Schema for this object.
  - requestBody (application/json).filter
    - type: string
    - required: no
    - description: The Expression to filter the relationships by. See the Readme for more details on the Expression format.
  - requestBody (application/json).pagination
    - type: object
    - required: no
    - description: The pagination information for the error logs
  - requestBody (application/json).pagination.page
    - type: integer
    - required: yes
  - requestBody (application/json).pagination.page_size
    - type: integer
    - required: yes
  - requestBody (application/json).sort_keys
    - type: array[SortKey]
    - required: no
    - description: The keys to sort the error logs by
  - requestBody (application/json).sort_keys[]
    - type: object
    - required: no
    - description: The keys to sort the error logs by
  - requestBody (application/json).sort_keys[].cast_type
    - type: string
    - required: no
    - description: Optional PostgreSQL type to cast the sort column to before sorting. This is essential for correct sorting of JSONB fields (like Salesforce custom fields in extra_properties) that store numeric or date values as strings. Without casting, PostgreSQL sorts as text where '10' < '2' (lexicographic). With casting, values sort correctly: 2 < 10 (numeric). Supported types: 'numeric' (for decimals, currency, percentages - e.g., 123.45), 'integer' (for whole numbers, counts - e.g., 42), 'text' (explicit string sort, rarely needed), 'timestamp' (for date-time values - e.g., '2025-01-15 14:30:00'), 'date' (for date-only values - e.g., '2025-01-15'). Example: To sort by Salesforce custom field 'Total_Targeted_Amount_Growth__c' numerically, use sort_column='client_organisation_extra_properties.Total_Targeted_Amount_Growth__c' with cast_type='numeric'.
  - requestBody (application/json).sort_keys[].collation
    - type: string
    - required: no
    - description: The collation to use for the sort. If set to "salesforce" the backend attempts to approximate the salesforce collation behavior.
  - requestBody (application/json).sort_keys[].sort_column
    - type: string
    - required: yes
    - description: The column to sort by. Can be a simple column name (e.g., 'client_organisation_name') or a nested JSONB path (e.g., 'client_organisation_extra_properties.AUM__c' for Salesforce custom fields).
  - requestBody (application/json).sort_keys[].sort_order
    - type: string
    - required: yes
    - description: The sort direction: ASC (ascending, smallest to largest) or DESC (descending, largest to smallest).

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: SyncFileErrorLogListOutputBody

