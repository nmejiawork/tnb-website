---
slug: evals
term: Evals
type: Concept
topic: Patterns & Practices
familiarity: Common
aliases:
  - evaluations
  - AI evaluation
  - LLM evaluation
  - model evaluation
  - evals pipeline
related:
  - hallucination
  - rag
  - fine-tuning
  - ai-agent
  - agentops
dateAdded: '2026-05-02'
shortDef: >-
  Evaluation frameworks for testing AI model or agent outputs systematically.
  Like unit tests for AI behavior: you define expected outputs for a set of
  inputs and run them to catch regressions, measure quality, and make sure
  changes do not break things. Non-negotiable for production AI.
---
Traditional software has unit tests and integration tests. AI systems need evals. The difference is that there is rarely one correct output: a good response might be expressible in many ways, and a bad one might still look plausible. Evals typically compare model outputs against reference answers, rubrics, or using another model as a judge, a technique called LLM-as-a-judge.

Evals serve several jobs: catching hallucinations before they reach users, measuring the impact of prompt changes, comparing one model version to another, and validating that a RAG system retrieves the right documents for representative queries. Without evals, 'is this better?' after a change is just intuition. With evals, it is a measurable data point.

In the agentic context, evals become more complex. You need to evaluate not just final outputs but intermediate steps: did the agent call the right tool, did it use the result correctly, did it know when to stop? Building eval suites for agents is one of the unsolved scaling problems for teams trying to move from working demos to reliable production systems.
