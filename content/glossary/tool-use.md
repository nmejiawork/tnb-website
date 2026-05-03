---
slug: tool-use
term: Tool use
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - function calling
  - tool calling
  - tool call
  - function call
related:
  - mcp
  - ai-agent
  - agentic-loop
  - multi-agent
dateAdded: '2026-05-02'
shortDef: >-
  The ability of an LLM to call external functions or services during a
  response, such as running a web search, querying a database, or executing
  code. The model decides when and how to call a tool, uses the result, and
  continues generating. It's how agents reach the outside world.
---
An LLM on its own can only work with what is in its context window. Tool use extends this by letting the model request a specific action, formatted as structured JSON output, which the application intercepts, executes, and returns as a result. The model then sees that result and continues its response. This loop is the foundation of how any AI agent interacts with external systems.

In 2026, tool use is standardized around MCP terminology. A 'tool' is a typed function with defined inputs and outputs. A 'tool call' is one invocation of that function. The model can issue multiple tool calls in parallel within a single step, which is how well-designed agents avoid sequential bottlenecks.

The quality of tool design matters as much as the quality of the model. A tool that has an ambiguous name, unclear parameter descriptions, or that returns messy unstructured results will confuse the model and lead to poor decisions. Builders who treat tool design as a user experience problem, where the 'user' is the model, see significantly better agent reliability.
