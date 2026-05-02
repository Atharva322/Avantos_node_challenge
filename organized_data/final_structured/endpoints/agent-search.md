# agent-search

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/agents/search`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID

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
  - requestBody (application/json).agent_external_id_filter
    - type: string
    - required: no
    - description: Filter by agent external ID (exact match)
  - requestBody (application/json).agent_first_name_filter
    - type: string
    - required: no
    - description: Filter by agent first name (case insensitive partial match)
  - requestBody (application/json).agent_id_filter
    - type: ['array', 'null']
    - required: no
    - description: Filter by agent internal IDs (exact match)
  - requestBody (application/json).agent_id_filter[]
    - type: string
    - required: no
    - description: Filter by agent internal IDs (exact match)
  - requestBody (application/json).agent_last_name_filter
    - type: string
    - required: no
    - description: Filter by agent last name (case insensitive partial match)
  - requestBody (application/json).client_org_external_id_filter
    - type: string
    - required: no
    - description: Filter by client organization external ID (exact match)
  - requestBody (application/json).client_organisation_id_filter
    - type: string
    - required: no
    - description: Filter by client organization internal ID (exact match)
  - requestBody (application/json).client_organisation_name_filter
    - type: string
    - required: no
    - description: Filter by client organization name (case insensitive partial match)
  - requestBody (application/json).created_after
    - type: string
    - required: no
    - description: Filter by created date after
  - requestBody (application/json).created_before
    - type: string
    - required: no
    - description: Filter by created date before
  - requestBody (application/json).filter
    - type: string
    - required: no
    - description: Expression to filter the agent search results by. Supports complex logic with and/or operators, binary comparisons, and column/literal values. Available columns: agent_first_name, agent_last_name, all_client_org_names (use LIKE for partial matches), all_relationship_types (use LIKE for partial matches)
  - requestBody (application/json).pagination_params
    - type: object
    - required: no
  - requestBody (application/json).pagination_params.page
    - type: integer
    - required: yes
    - description: The page number to return
  - requestBody (application/json).pagination_params.page_size
    - type: integer
    - required: yes
    - description: The number of records per page
  - requestBody (application/json).relationship_type_filter
    - type: string
    - required: no
    - description: Filter by relationship type
  - requestBody (application/json).sort_keys
    - type: ['array', 'null']
    - required: no
    - description: Sort criteria with column and direction
  - requestBody (application/json).sort_keys[]
    - type: object
    - required: no
    - description: Sort criteria with column and direction
  - requestBody (application/json).sort_keys[].cast_type
    - type: string
    - required: no
    - description: Optional PostgreSQL type casting for correct sorting of JSONB numeric/date fields. Use 'numeric' for currency/decimals, 'integer' for whole numbers, 'date' or 'timestamp' for dates. Essential for sorting Salesforce custom fields stored in extra_properties.
  - requestBody (application/json).sort_keys[].collation
    - type: string
    - required: no
    - description: Collation type
  - requestBody (application/json).sort_keys[].sort_column
    - type: string
    - required: yes
    - description: Column to sort by. Supports JSONB paths for custom fields.
  - requestBody (application/json).sort_keys[].sort_order
    - type: string
    - required: yes
    - description: Sort direction: ASC (ascending) or DESC (descending).

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ext_agent_456

