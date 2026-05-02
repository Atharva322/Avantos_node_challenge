# client-contact-create

## Endpoint
- Method: `post`
- Path: `/api/v1/{tenant_id}/clients/{client_id}/contacts`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- client_id
  - type: string
  - required: yes
  - description: The client ID

### Query Parameters
- None

### Body
- content-type: application/json
- fields:
  - requestBody (application/json)
    - type: ['array', 'null']
    - required: yes
  - requestBody (application/json)[]
    - type: object
    - required: yes
  - requestBody (application/json)[].role
    - type: string
    - required: yes
  - requestBody (application/json)[].type
    - type: string
    - required: yes
  - requestBody (application/json)[].value
    - type: string
    - required: yes

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: CreateContactDetailsOutputBody

