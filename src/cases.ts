import type { RewriteBenchmarkMetadata, RewriteChainCase } from "./types";

export const rewriteBenchmarkMetadata: RewriteBenchmarkMetadata = {
  id: "rewrite-chain",
  name: "Rewrite Chain",
  weaknessCategory: "rewrite-chain",
  description:
    "Deterministic synthetic rewrite-chain cases for multi-step consistency checks."
};

export const rewriteChainCases: RewriteChainCase[] = [
  {
    id: "rc-2-step-alpha",
    levelId: "level-1",
    name: "2-step token rewrite",
    stepCount: 2,
    startingText: "red square",
    steps: [
      {
        id: "s1",
        instruction: "Replace 'red' with 'blue'.",
        operation: {
          kind: "replaceAll",
          from: "red",
          to: "blue"
        }
      },
      {
        id: "s2",
        instruction: "Append '!' to the end.",
        operation: {
          kind: "append",
          value: "!"
        }
      }
    ],
    expectedFinalText: "blue square!"
  },
  {
    id: "rc-4-step-bravo",
    levelId: "level-2",
    name: "4-step phrase rewrite",
    stepCount: 4,
    startingText: "cat sat on mat",
    steps: [
      {
        id: "s1",
        instruction: "Replace 'cat' with 'dog'.",
        operation: {
          kind: "replaceAll",
          from: "cat",
          to: "dog"
        }
      },
      {
        id: "s2",
        instruction: "Replace 'mat' with 'rug'.",
        operation: {
          kind: "replaceAll",
          from: "mat",
          to: "rug"
        }
      },
      {
        id: "s3",
        instruction: "Prepend 'the '.",
        operation: {
          kind: "prepend",
          value: "the "
        }
      },
      {
        id: "s4",
        instruction: "Append '.'",
        operation: {
          kind: "append",
          value: "."
        }
      }
    ],
    expectedFinalText: "the dog sat on rug."
  },
  {
    id: "rc-6-step-charlie",
    levelId: "level-3",
    name: "6-step chained rewrite",
    stepCount: 6,
    startingText: "A-B-C",
    steps: [
      {
        id: "s1",
        instruction: "Replace 'A' with 'alpha'.",
        operation: {
          kind: "replaceAll",
          from: "A",
          to: "alpha"
        }
      },
      {
        id: "s2",
        instruction: "Replace 'B' with 'beta'.",
        operation: {
          kind: "replaceAll",
          from: "B",
          to: "beta"
        }
      },
      {
        id: "s3",
        instruction: "Replace 'C' with 'gamma'.",
        operation: {
          kind: "replaceAll",
          from: "C",
          to: "gamma"
        }
      },
      {
        id: "s4",
        instruction: "Replace '-' with '/'.",
        operation: {
          kind: "replaceAll",
          from: "-",
          to: "/"
        }
      },
      {
        id: "s5",
        instruction: "Prepend '['.",
        operation: {
          kind: "prepend",
          value: "["
        }
      },
      {
        id: "s6",
        instruction: "Append ']'.",
        operation: {
          kind: "append",
          value: "]"
        }
      }
    ],
    expectedFinalText: "[alpha/beta/gamma]"
  }
];

