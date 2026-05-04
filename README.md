# Avantos Node Challenge

## Overview
This project is a React + Vite implementation of a Journey Builder-style form workflow designer with prefill mapping.

Core capabilities:
- Create forms from source objects (operations/schemas field catalogs)
- Link forms into parent-child workflow graphs
- Configure required fields
- Save, load, and delete multiple workflow designs
- Save pattern (`draft -> saved`) and run runtime data entry
- Auto-prefill from submitted parent/ancestor forms
- Show submitted runtime data in a table

## Local Setup
1. Install dependencies
- `npm install`

2. Run app
- `npm run dev`

3. Build
- `npm run build`

4. Preview build
- `npm run preview`

## Test Commands
- `npm run test`
- `npm run test:run`

Note: This repository contains very large data folders. In some environments, Vitest may hit memory limits due process constraints.

## Data Layers
1. Raw normalized extraction:
- `organized_data/operations/*.json`
- `organized_data/schemas/*.json`

2. Merged export-oriented layer:
- `organized_data_merged/operations/*.json`
- `organized_data_merged/schemas/*.json`

3. Linked operation-schema layer:
- `organized_data_linked/operation_schema_links.json`
- `organized_data_linked/schema_operation_links.json`
- `organized_data_linked/component_groups.json`

## Source Object Mode
`src/sourceCatalog.ts` auto-selects source mode:
- `linked` mode when linked data exists
- fallback `merged` mode otherwise

In linked mode, UI source objects are filtered to high/medium confidence links.

## Main Scripts
App:
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run test`
- `npm run test:run`

Data pipeline:
- `npm run merge:operations`
- `npm run merge:schemas`
- `npm run link:ops-schemas`
- plus scrape/extract scripts in `package.json`

## Key Features Implemented
- Componentized UI panels and sections
- Business logic extracted into hooks:
  - `useWorkflowDesigns`
  - `useFormRuntime`
  - `useGraphEditing`
- Form-level prefill toggle in runtime mode
- Required-field validation blocking submission
- Submitted-only temporary stored data table

## Where To Read More
- Architecture: `ARCHITECTURE.md`
- Testing details: `TEST.md`
