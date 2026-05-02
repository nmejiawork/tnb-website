---
slug: swe-bench
term: SWE-bench
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - swe bench
  - software engineering benchmark
  - swe-bench verified
  - swe-bench pro
related:
  - agent-scaffold
  - evals
  - claude-code
  - reasoning-model
  - context-engineering
dateAdded: '2026-05-02'
shortDef: >-
  A benchmark that tests AI coding agents on real GitHub issues. The agent
  receives a codebase and an issue description, and must generate a patch that
  actually fixes the problem. The de facto standard for comparing coding agent
  performance.
---
SWE-bench was created by Princeton NLP researchers in 2023 and became the primary way builders compare coding agents. The tasks come from real open-source repositories: actual bugs filed by real users, each requiring real code changes. Scores tell you what percentage of issues the agent resolves correctly.

There are multiple variants. SWE-bench Verified is a human-validated 500-task subset. SWE-bench Pro (built by Scale AI) is harder: 1,865 tasks requiring an average of 107 lines of changes across multiple files, in Python, Go, TypeScript, and JavaScript. Pro is more resistant to training data contamination, which matters because OpenAI confirmed that frontier models had seen SWE-bench Verified tasks during training.

For builders, the most important finding from SWE-bench is that scaffolding matters as much as the model. Three different agent systems running the same Claude Opus 4.5 model scored between 50% and 55% on Pro, while the standardized scaffold scored 46%. Switching models within the same scaffold moves the score by less than 1 percentage point. The benchmark also measures total agent systems in production, not just raw model capability.
