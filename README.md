# Journey Builder Prefill Challenge

## Run locally

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`

If API env vars are missing, app runs in mock mode.

## Optional API env vars

Create `.env`:

```bash
VITE_API_BASE_URL=https://your-host
VITE_TENANT_ID=123
VITE_BLUEPRINT_ID=bp_456
VITE_BLUEPRINT_VERSION_ID=bpv_123
VITE_API_TOKEN=token_here
```

## Mapping precedence

1. `nodes[].data.dl_input_mapping` (primary)
2. `forms[].default_input_mapping` (fallback)

## PUT strategy

Graph updates use a partial-safe payload (not full object overwrite):

- `component_task_priorities`
- `custom_javascript_function_id`
- `custom_status_configuration`
- `edges`
- `nodes`
- `promoted_data_order`
- `state_model_schema`
- `version_notes`

## Extending data sources

Add a new provider in `src/providers.ts` that matches:

- `id: string`
- `listCandidates(graph, targetFormId): PrefillCandidate[]`
