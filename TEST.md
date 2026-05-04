# Testing

## Current Test Stack
- Vitest
- jsdom environment
- @testing-library/react (`renderHook` for hook tests)

Config files:
- `vitest.config.ts`
- `src/test/setup.ts`

## Run Tests
- `npm run test`
- `npm run test:run`

## Current Test Coverage (Core)
### `useFormRuntime` tests
File: `src/hooks/__tests__/useFormRuntime.test.tsx`
- blocks submit when required field missing
- marks form as submitted when required fields are valid
- prefills from submitted ancestor when prefill is enabled

### `useWorkflowDesigns` tests
File: `src/hooks/__tests__/useWorkflowDesigns.test.tsx`
- persists workflow design to localStorage
- loads design and triggers graph/runtime reset callbacks

### `useGraphEditing` tests
File: `src/hooks/__tests__/useGraphEditing.test.tsx`
- creates link for valid source/target
- blocks duplicate link with validation error
- removes only selected edge

## Notes on Environment
This repository includes very large generated data folders.
In constrained environments, full test runs may still face process memory limits unrelated to test logic.

Mitigations already added:
- scoped Vitest include/exclude patterns
- single-worker execution in config

## Suggested Next Tests
1. `useGraphEditing`: delete form should remove connected edges
2. `useGraphEditing`: add draft fields should preserve existing fields
3. integration test for pattern flow (`draft -> saved -> submit -> prefill`)
4. component tests for `RunFormDataPanel` required error display
5. component tests for `TemporaryStoredDataPanel` submitted-only rendering
