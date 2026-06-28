import { rewriteChainCases } from "./cases";
import type { RewriteChainCase, ScoreAnswerResult } from "./types";

const casesById: Record<string, RewriteChainCase> = Object.fromEntries(
  rewriteChainCases.map((benchmarkCase) => [benchmarkCase.id, benchmarkCase])
);

export function scoreAnswer(caseId: string, answerText: string): ScoreAnswerResult {
  const benchmarkCase = casesById[caseId];

  if (!benchmarkCase) {
    return {
      correct: false,
      score: 0,
      expectedAnswer: "",
      message: `Unknown case id: ${caseId}`
    };
  }

  const expectedAnswer = benchmarkCase.expectedFinalText;
  const correct = answerText === expectedAnswer;

  return {
    correct,
    score: correct ? 1 : 0,
    expectedAnswer,
    message: correct ? "Correct final text." : "Incorrect final text."
  };
}

