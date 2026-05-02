---
slug: llm-benchmark
term: LLM benchmark
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - ai benchmark
  - model benchmark
  - coding benchmark
  - eval benchmark
related:
  - swe-bench
  - evals
  - reasoning-model
  - frontier-model
  - inference-time-compute
dateAdded: '2026-05-02'
shortDef: >-
  A standardized test used to measure and compare AI model performance on
  specific tasks: coding, reasoning, math, instruction following, and more.
  Benchmarks let builders compare models objectively, though each measures a
  different slice of real-world capability.
---
Benchmarks give builders a common language for comparing models. SWE-bench tests coding agents on real GitHub issues. MMLU tests knowledge across 57 subject areas. HumanEval measures code generation. ARC-AGI-2 tests abstract reasoning. LiveCodeBench tests coding on problems released after a model's training cutoff, reducing the risk of contamination.

The catch: benchmarks can be gamed, saturated, or contaminated. When models are trained on data that includes benchmark problems, their scores inflate beyond real-world capability. SWE-bench Verified suffered this in 2026 when OpenAI confirmed training data contamination across frontier models. SWE-bench Pro was built specifically to address this. Benchmark saturation is a similar issue: HumanEval went from 13% (2021) to nearly 100% (2026), at which point it stopped differentiating models.

For practical builder decisions, the key is using benchmarks that match the task you care about. A benchmark for general knowledge (MMLU) tells you little about coding performance. A coding benchmark on a saturated problem set tells you little about performance on your actual codebase. The most useful signals come from combining standardized benchmarks with your own evals on representative samples of your actual production inputs.
