import { rewriteBenchmarkMetadata, rewriteChainCases } from "./cases";
import { scoreAnswer } from "./score";

export { rewriteBenchmarkMetadata, rewriteChainCases, scoreAnswer };

export const runtimeBenchmarkModule = {
  metadata: rewriteBenchmarkMetadata,
  cases: rewriteChainCases,
  scoreAnswer
};

export default runtimeBenchmarkModule;

export type {
  RuntimeBenchmarkModule,
  ScoreAnswerResult,
  RewriteBenchmarkMetadata,
  RewriteChainCase,
  RewriteOperation,
  RewriteStep
} from "./types";
