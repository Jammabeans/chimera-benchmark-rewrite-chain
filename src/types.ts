export type RewriteOperation =
  | {
      kind: "replaceAll";
      from: string;
      to: string;
    }
  | {
      kind: "append";
      value: string;
    }
  | {
      kind: "prepend";
      value: string;
    };

export type RewriteStep = {
  id: string;
  instruction: string;
  operation: RewriteOperation;
};

export type RewriteChainCase = {
  id: string;
  levelId: string;
  name: string;
  stepCount: number;
  startingText: string;
  steps: RewriteStep[];
  expectedFinalText: string;
};

export type RewriteBenchmarkMetadata = {
  id: string;
  name: string;
  weaknessCategory: "rewrite-chain";
  description: string;
};

export type FinalAnswerScore = {
  isCorrect: boolean;
  expectedFinalText: string;
  submittedFinalText: string;
};
