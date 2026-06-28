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
  title: string;
  prompt: string;
  metadata?: {
    stepCount: number;
  };
  startingText: string;
  steps: RewriteStep[];
  expectedFinalText: string;
};

export type RewriteBenchmarkMetadata = {
  id: string;
  name: string;
  version: string;
  weaknessCategory: "rewrite-chain";
  description: string;
  supportedModes: Array<"single-turn" | "multi-turn">;
};

export type ScoreAnswerResult = {
  correct: boolean;
  score: number;
  expectedAnswer: string;
  message: string;
};

export type RuntimeBenchmarkModule = {
  metadata: RewriteBenchmarkMetadata;
  cases: RewriteChainCase[];
  scoreAnswer: (caseId: string, answerText: string) => ScoreAnswerResult;
};
