---
slug: sandboxing
term: Sandboxing
type: Concept
topic: Infrastructure
familiarity: Emerging
aliases:
  - agent sandbox
  - code sandbox
  - sandboxed execution
related:
  - guardrails
  - human-in-the-loop
  - openhands
  - claude-code
  - agent-observability
dateAdded: '2026-05-02'
shortDef: >-
  Running AI-generated code in an isolated environment where it can't damage
  your system, leak data, or make unintended network calls. A sandbox is the
  safety layer between an agentic AI that writes and executes code and the rest
  of your infrastructure.
---
When an AI agent executes code, that code runs on real hardware with real access to files, the network, and system resources unless you explicitly constrain it. A sandbox is that constraint: a containerized or virtualized environment where generated code runs with limited permissions. If the code does something destructive, the damage is contained to the sandbox.

OpenHands runs all generated code in Docker containers by default. Claude Code's permission system is a lighter-weight form of sandboxing: it asks for approval before running commands that could cause side effects. Services like Modal, E2B, and Daytona have built hosted sandbox infrastructure specifically for running agent-generated code safely at scale.

For builders shipping autonomous coding agents or code-execution features, sandboxing is a non-optional security requirement. The question is how much isolation you need (strict containerization vs. permissioned local execution) and who manages it (self-hosted Docker vs. a managed sandbox service). The more autonomous your agent, the more important strict sandboxing becomes.
