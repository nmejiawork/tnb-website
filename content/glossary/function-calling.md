---
slug: function-calling
term: Function Calling
type: Concept
topic: Patterns & Practices
familiarity: Common
aliases:
  - tool calling
  - function use
related:
  - tool-use
  - structured-output
  - mcp
  - agent-scaffold
dateAdded: '2026-05-02'
shortDef: >-
  A mechanism where a model can decide to invoke an external function or API
  instead of generating text. The model outputs a structured request (which
  function to call and with what arguments); your code runs the function and
  feeds the result back to the model.
---
Function calling bridges the gap between a model that generates text and a system that does things in the world. You tell the model what functions are available, what arguments each one takes, and what it returns. The model then decides, mid-response, to pause and invoke a function rather than answer from its training data alone.

In practice, function calling is how agents use tools. When a model decides to search the web, query a database, or call your internal API, it does so via function calling. The model produces a structured request; your application executes it; the result comes back into the model's context. This loop can repeat many times in a single agent run.

Function calling and tool use are often used interchangeably, though tool use is sometimes the broader term. The key concept is the same: the model is not just generating text, it's making structured requests to external capabilities, which is the foundation of any real agentic workflow.
