# Architecture

## High-Level Design
The app is split into:
1. UI components (presentation and user interaction)
2. Hooks (feature business logic/state)
3. Utility modules (graph + mapping transforms)
4. Data catalogs (source object generation from merged/linked artifacts)

## Top-Level Flow
1. `App.tsx` loads graph (`getGraph`) and keeps save lifecycle (`putGraph`) state.
2. `App.tsx` composes hooks:
- `useGraphEditing`
- `useFormRuntime`
- `useWorkflowDesigns`
3. `App.tsx` passes state/actions into UI components.
4. Components call handlers; handlers mutate graph/runtime/persistence through hooks.

## UI Component Structure
Left side:
- `LeftSidebar`
  - `WorkflowDesignPanel`
  - `FormBuilderPanel`
  - `FormLinkingPanel`

Right side:
- `RightWorkspace`
  - `DesignWhiteboard`
  - `CurrentRelationships`
  - `PrefillMappingPanel`
  - `RunFormDataPanel`
  - `TemporaryStoredDataPanel`

## Hook Responsibilities
### `useGraphEditing`
Owns design-time graph and form editing behavior:
- create/edit/delete forms
- source-object field selection
- add/remove fields
- create/remove links
- reorder configured fields
- clear field mappings

### `useFormRuntime`
Owns run-time data and prefill behavior:
- runtime form values
- submitted flags
- required-field validation
- form-level prefill enablement
- ancestor/parent prefill application

### `useWorkflowDesigns`
Owns saved workflow design lifecycle:
- workflow naming
- localStorage persistence
- save-as-new vs update active design
- load/delete designs

## Utility Modules
- `graph.ts`: graph context and traversal helpers
- `mappings.ts`: mapping resolution and persistence helpers
- `sourceCatalog.ts`: builds source objects from linked/merged datasets

## Pattern Lifecycle Model
- `draft`: design editable
- `saved`: runtime data-entry mode enabled

Transitions:
- `Save Pattern` -> `saved`
- `Unlock Pattern` -> `draft` (runtime session reset)

## Prefill Rules
- Prefill is form-level (not field-level toggle)
- Prefill candidate source: submitted ancestor/parent forms only
- Matching rule: same field key + type compatibility
- Existing non-empty target value is not overwritten

## Persistence
- Workflow designs persisted in localStorage (`jb_saved_workflows_v1`)
- Runtime values are temporary in-memory state
- Graph save attempts remote PUT and continues locally on failure

## Data Inputs
App consumes generated project data:
- `organized_data_merged/` as merged source catalog
- `organized_data_linked/` as confidence-scored operation-schema linking layer

When linked data exists, it is preferred for source-object options.
