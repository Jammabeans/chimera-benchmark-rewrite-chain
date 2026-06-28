import type { RewriteBenchmarkMetadata, RewriteChainCase } from "./types";

export const rewriteBenchmarkMetadata: RewriteBenchmarkMetadata = {
  id: "rewrite-chain",
  name: "Rewrite Chain",
  version: "0.1.0",
  weaknessCategory: "rewrite-chain",
  supportedModes: ["single-turn", "multi-turn"],
  description:
    "Deterministic synthetic rewrite-chain cases for multi-step consistency checks."
};

export const rewriteChainCases: RewriteChainCase[] = [
  {
    id: "rc-2-step-alpha",
    levelId: "level-1",
    title: "2-step token rewrite",
    prompt:
      "Starting text: red square\nApply steps in order:\n1) Replace 'red' with 'blue'.\n2) Append '!' to the end.\nReturn only the final text.",
    metadata: {
      stepCount: 2
    },
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
    title: "4-step phrase rewrite",
    prompt:
      "Starting text: cat sat on mat\nApply steps in order:\n1) Replace 'cat' with 'dog'.\n2) Replace 'mat' with 'rug'.\n3) Prepend 'the '.\n4) Append '.'.\nReturn only the final text.",
    metadata: {
      stepCount: 4
    },
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
    title: "6-step chained rewrite",
    prompt:
      "Starting text: A-B-C\nApply steps in order:\n1) Replace 'A' with 'alpha'.\n2) Replace 'B' with 'beta'.\n3) Replace 'C' with 'gamma'.\n4) Replace '-' with '/'.\n5) Prepend '['.\n6) Append ']'.\nReturn only the final text.",
    metadata: {
      stepCount: 6
    },
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

