# agent-update

## Endpoint
- Method: `patch`
- Path: `/api/v1/{tenant_id}/agents/{id}`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- id
  - type: string
  - required: yes

### Query Parameters
- id
  - type: string
  - required: yes
  - description: The agent ID

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
  - requestBody (application/json).active
    - type: boolean
    - required: no
    - description: Whether the agent is active
  - requestBody (application/json).additional_attributes
    - type: object
    - required: no
    - description: Additional attributes of the agent
  - requestBody (application/json).advisor_identification
    - type: string
    - required: no
    - description: The advisor identification of the agent
  - requestBody (application/json).compliance_record
    - type: string
    - required: no
    - description: The compliance record of the agent
  - requestBody (application/json).idp_subject
    - type: string
    - required: no
    - description: The IDP subject identifier for the agent
  - requestBody (application/json).license
    - type: string
    - required: no
    - description: The license of the agent
  - requestBody (application/json).manager_id
    - type: string
    - required: no
    - description: The ID of the agent's manager
  - requestBody (application/json).organisation_id
    - type: string
    - required: no
    - description: The organisation ID associated with the agent
  - requestBody (application/json).person
    - type: object
    - required: no
    - description: Fields to update for the agent person record
  - requestBody (application/json).person.date_of_birth
    - type: string
    - required: no
  - requestBody (application/json).person.first_name
    - type: string
    - required: no
  - requestBody (application/json).person.gender
    - type: string
    - required: no
  - requestBody (application/json).person.last_name
    - type: string
    - required: no
  - requestBody (application/json).person.marital_status
    - type: string
    - required: no
  - requestBody (application/json).person.middle_name
    - type: string
    - required: no
  - requestBody (application/json).person.nationality
    - type: string
    - required: no
  - requestBody (application/json).person.preferred_contact_method
    - type: string
    - required: no
  - requestBody (application/json).person.ssn
    - type: string
    - required: no
  - requestBody (application/json).person.suffix
    - type: string
    - required: no
  - requestBody (application/json).person.title
    - type: string
    - required: no
  - requestBody (application/json).qualification
    - type: string
    - required: no
    - description: The qualification of the agent
  - requestBody (application/json).regulatory_status
    - type: string
    - required: no
    - description: The regulatory status of the agent
  - requestBody (application/json).specialization
    - type: string
    - required: no
    - description: The specialization of the agent
  - requestBody (application/json).type
    - type: string
    - required: no
    - description: The type of the agent
  - requestBody (application/json).years_of_experience
    - type: string
    - required: no
    - description: The years of experience of the agent

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: AgentUpdateOutputBody

