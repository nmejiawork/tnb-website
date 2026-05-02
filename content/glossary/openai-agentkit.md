---
slug: openai-agentkit
term: AgentKit
type: Tool
topic: Agents & Automation
familiarity: Emerging
aliases:
  - OpenAI AgentKit
related:
  - agent-framework
  - openai-agents-sdk
  - orchestration
  - evals
dateAdded: '2026-05-02'
shortDef: >-
  OpenAI's full-stack toolkit for building, deploying, and iterating on AI
  agents. It bundles a visual agent builder, pre-built connectors, an eval loop,
  and chat UI components so developers can go from prototype to production
  without assembling all the pieces themselves.
---
Launched at OpenAI DevDay 2025, AgentKit is OpenAI's answer to the fragmentation problem in agent development: teams were hand-assembling orchestration logic, custom connectors, prompt tuning pipelines, and eval frameworks. AgentKit packages those into a coherent system with a drag-and-drop Agent Builder for designing multi-agent workflows visually, a Connector Registry for managing data source access across ChatGPT and the API, and ChatKit for embedding agent chat UIs in third-party apps.

The eval capabilities bundled in AgentKit include datasets, trace grading, automated prompt optimization, and support for grading against third-party models. This positions AgentKit as more than an orchestration layer; it includes the measure-improve-ship loop that production agent teams need.

AgentKit sits on top of the OpenAI Agents SDK (which is the lower-level open-source framework) and is meant for teams that want faster time-to-production. If you're comfortable with code and want fine-grained control, the Agents SDK is the right layer. If you want a managed product with GUI tooling and built-in eval, AgentKit is the choice.
