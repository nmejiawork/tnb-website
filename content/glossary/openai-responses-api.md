---
slug: openai-responses-api
term: Responses API
type: Tool
topic: Infrastructure
familiarity: Specialist
aliases:
  - OpenAI Responses API
related:
  - openai-agents-sdk
  - function-calling
  - structured-output
  - tool-use
dateAdded: '2026-05-02'
shortDef: >-
  OpenAI's newer API designed for building agents and multi-step tool workflows,
  as opposed to the Chat Completions API, which is oriented toward single-turn
  conversations. It supports built-in tools like web search and code
  interpreter, and handles tool-use loops natively.
---
The Chat Completions API was designed for question-answer interactions. When you want an agent that uses tools across multiple steps, that API starts to feel awkward: you have to manually manage the back-and-forth of calling a tool, injecting the result, calling another tool, and so on. The Responses API wraps that loop natively and adds built-in tool support so the common patterns become simpler.

Built-in tools available via the Responses API include web search, file search, and computer use, alongside any custom tools you define via function calling. MCP servers can also be connected as remote tools. The API maintains conversation state across turns, which reduces the boilerplate of manually managing message history.

The Responses API is the foundation that OpenAI's Agents SDK is built on. If you're building agents programmatically in Python or TypeScript and want the lowest-level OpenAI interface, the Responses API is where you start. If you want higher-level abstractions, the Agents SDK and AgentKit both sit on top of it.
