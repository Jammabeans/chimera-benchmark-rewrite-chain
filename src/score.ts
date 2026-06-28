import type { FinalAnswerScore, RewriteChainCase } from "./types";

export function scoreFinalAnswer(
  benchmarkCase: RewriteChainCase,
  submittedFinalText: string
): FinalAnswerScore {
  return {
    isCorrect: submittedFinalText === benchmarkCase.expectedFinalText,
    expectedFinalText: benchmarkCase.expectedFinalText,
    submittedFinalText
  };
}

