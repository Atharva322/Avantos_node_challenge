# esignature-envelope-download

## Endpoint
- Method: `get`
- Path: `/api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/download`

## Request
### Path Parameters
- tenant_id
  - type: string
  - required: yes
  - description: The tenant ID
- token_id
  - type: string
  - required: yes
  - description: The OAuth token ID
- account_id
  - type: string
  - required: yes
  - description: The DocuSign account ID
- envelope_id
  - type: string
  - required: yes
  - description: The envelope ID

### Query Parameters
- None

### Body
- type: object
- fields: not explicitly extracted

## Responses
- 200
  - description: OK
  - content-type: application/json
  - schema: ESignatureEnvelopeDownloadBody

