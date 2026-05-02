# client-org-opportunity-update

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/client-organisations/opportunities/{opportunity_id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- opportunity_id
  - type: string
  - required: yes
  - description: The unique identifier of the opportunity to update

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
  - requestBody (application/json).amount
    - type: string
    - required: no
    - description: The updated amount of the opportunity
  - requestBody (application/json).amount_transferred
    - type: string
    - required: no
    - description: The amount transferred from the client organisation to the opportunity (maps to Amount_Transferred__c)
  - requestBody (application/json).name
    - type: string
    - required: no
    - description: The updated name of the opportunity
  - requestBody (application/json).next_step
    - type: string
    - required: no
    - description: The updated next action item for the opportunity
  - requestBody (application/json).next_step_date
    - type: string
    - required: no
    - description: The updated date of the next step
  - requestBody (application/json).notes
    - type: string
    - required: no
    - description: The notes for the opportunity (maps to Notes__c)
  - requestBody (application/json).partial_won_deferred_next_step_date
    - type: string
    - required: no
    - description: The deferred next step date for partially won opportunities (maps to Partial_Won_Deferred_Next_Step_Date__c)
  - requestBody (application/json).partial_won_outcome
    - type: string
    - required: no
    - description: The outcome when an opportunity is partially won (maps to Partial_Won_Outcome__c)
  - requestBody (application/json).status
    - type: string
    - required: no
    - description: The updated status of the opportunity
  - requestBody (application/json).unsuccessful_reason
    - type: string
    - required: no
    - description: The reason an opportunity was unsuccessful (maps to Unsuccessful_Reason__c)

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: 1000000

