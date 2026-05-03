# Avantos Node Challenge - Current Implementation

## What This App Does
This project is a React + Vite implementation of a Journey Builder style form workflow designer.

You can:
- Create forms from source objects (operations/schemas field catalogs)
- Link forms into parent-child workflow graphs
- Configure required fields per form
- Save multiple workflow designs, load them later, and delete them
- Run data-entry mode on saved patterns
- Auto-prefill child forms from submitted parent/ancestor form data

## Core UX Flow
1. Design Mode (`Pattern Status: Draft`)
- Create/edit/delete forms
- Add/remove fields
- Create/delete links between forms
- Mark fields as required
- Save workflow designs (supports multiple)

2. Save Pattern
- Locks structure for runtime (`Pattern Status: Saved`)
- Enables run-time user data entry

3. Run Form Data
- Submit values per form
- Required fields are validated
- `Enable Prefill Suggestions For This Form` appears only when the selected form has upstream linked forms
- Prefill pulls from submitted ancestor/parent forms using key + compatible type matching

## Data Layers
### 1) Raw Organized Data
- `organized_data/operations/*.json`
- `organized_data/schemas/*.json`

### 2) Merged Export-Oriented Data
- `organized_data_merged/operations/*.json`
- `organized_data_merged/schemas/*.json`

These merge suffix variants into stem-level entities and preserve provenance.

### 3) Linked Operation-Schema Layer
- `organized_data_linked/operation_schema_links.json`
- `organized_data_linked/schema_operation_links.json`
- `organized_data_linked/component_groups.json`
- `organized_data_linked/linking_manifest.json`
- `organized_data_linked/linking_warnings.json`

This layer provides confidence-scored links between operation stems and schema stems.

## Source Object Behavior in UI
`src/sourceCatalog.ts` chooses source mode automatically:
- `linked` mode (default when `organized_data_linked/component_groups.json` exists)
- fallback `merged` mode otherwise

In linked mode, only operation components with `high` or `medium` schema confidence are shown as selectable source objects.

## Project Structure (Important Paths)
- App UI/runtime logic: `src/App.tsx`
- Source object catalog logic: `src/sourceCatalog.ts`
- Mapping helpers: `src/mappings.ts`
- Graph utilities: `src/graph.ts`
- Types: `src/types.ts`
- Merge scripts:
  - `scripts/merge_operations_for_export.mjs`
  - `scripts/merge_schemas_for_export.mjs`
- Linking script:
  - `scripts/build_operation_schema_links.mjs`

## NPM Scripts
### App
- `npm run dev` - start Vite dev server
- `npm run build` - TypeScript + production build
- `npm run preview` - preview production build

### Extraction / Organization Pipeline
- `npm run extract:seed`
- `npm run extract:playwright`
- `npm run scrape:ops:batch`
- `npm run scrape:schemas:batch`
- `npm run scrape:merge`
- `npm run scrape:ops:retry-queue`
- `npm run scrape:ops:retry`
- `npm run scrape:organize`
- `npm run build:final-structure`

### Merge + Link Normalization
- `npm run merge:operations`
- `npm run merge:schemas`
- `npm run link:ops-schemas`

## Local Run
1. Install dependencies:
- `npm install`

2. Start app:
- `npm run dev`

If API env vars are unavailable, app can run in local/mock behavior depending on current API setup.

## Optional API Environment Variables
Create `.env`:

```bash
VITE_API_BASE_URL=https://your-host
VITE_TENANT_ID=123
VITE_BLUEPRINT_ID=bp_456
VITE_BLUEPRINT_VERSION_ID=bpv_123
VITE_API_TOKEN=token_here
```

## Mapping and Save Notes
- Mapping precedence:
1. `nodes[].data.dl_input_mapping` (primary)
2. `forms[].default_input_mapping` (fallback)

- PUT graph updates use partial-safe payload strategy to avoid full-object destructive overwrite.

## Current Status
Implemented and working in repo:
- Multiple workflow design save/load/delete
- Form link delete support
- Remove-field behavior fixed
- Form-level runtime prefill from ancestors
- Required-field runtime validation
- Linked data source filtering by confidence (high/medium)
