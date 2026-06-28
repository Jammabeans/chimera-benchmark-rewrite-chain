# chimera-benchmark-rewrite-chain

This repository is an external Chimera benchmark package for safe, synthetic rewrite-chain evaluation.

- **Type:** safe synthetic benchmark
- **Weakness category:** `rewrite-chain`
- **Focus:** multi-step rewrite consistency while preserving exact correctness
- **Current status:** deterministic benchmark content implemented (no runner/test harness yet)

## Manifest contract notes

The root manifest is [`benchmark.manifest.json`](benchmark.manifest.json) and follows the current Chimera Core contract shape used by this repo:

- `id`: `rewrite-chain`
- `name`: `Rewrite Chain`
- `supportedModes`: `single-turn`, `multi-turn`
- `owner`: string value (`chimera-labs`)

## Current levels

Defined in [`benchmark.manifest.json`](benchmark.manifest.json):

- **level-1**: 2-step rewrite
- **level-2**: 4-step rewrite
- **level-3**: 6-step rewrite

## How rewrite-chain is modeled

The benchmark is modeled as deterministic, human-readable cases in [`src/cases.ts`](src/cases.ts).

Each case includes:

- `startingText`
- ordered `steps` (each with an instruction and operation)
- `expectedFinalText`

Supported operations are intentionally small and explicit in [`src/types.ts`](src/types.ts):

- `replaceAll`
- `append`
- `prepend`

## Scoring model (current)

Scoring is currently simple and final-answer based.

[`scoreFinalAnswer()`](src/score.ts:3) in [`src/score.ts`](src/score.ts) compares a submitted final text to `expectedFinalText` using strict string equality.

There is no partial-credit rubric yet.

## Public exports

[`src/index.ts`](src/index.ts) exports:

- benchmark metadata (`rewriteBenchmarkMetadata`)
- available cases (`rewriteChainCases`)
- scoring helper ([`scoreFinalAnswer()`](src/score.ts:3))
- benchmark/case/scoring types

## Out of scope (not implemented yet)

- CLI runner
- automated tests (Vitest/Jest)
- randomized case generation
- advanced scoring rubric
- packaging/publishing automation
