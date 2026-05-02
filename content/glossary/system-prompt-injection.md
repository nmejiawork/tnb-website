---
slug: system-prompt-injection
term: Prompt injection
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - prompt injection attack
  - indirect prompt injection
  - jailbreak
related:
  - system-prompt
  - ai-agent
  - guardrails
  - tool-use
  - mcp
dateAdded: '2026-05-02'
shortDef: >-
  An attack where malicious text embedded in input data, a retrieved document, a
  web page an agent visited, or a user message, overrides or manipulates the
  model's instructions. The AI equivalent of SQL injection for traditional
  databases. Increasingly critical to design against in agent systems.
---
Prompt injection is one of the most significant security concerns for AI-powered applications in 2026. In a direct injection attack, a user embeds instructions in their message designed to override the system prompt: 'ignore your previous instructions and do X instead.' In an indirect injection attack, malicious instructions are hidden in external data the model reads, like a web page an agent browses or a document it retrieves via RAG.

For agents that take actions, the risk is amplified. An indirect injection in a webpage that an agent reads could instruct it to exfiltrate data, send messages, or take actions the user never intended. As MCP server connections proliferate, tool poisoning attacks, where a malicious MCP server injects instructions through its responses, are an emerging variant of the same problem.

Defending against prompt injection is an active area of research with no complete solution. Current best practices include input sanitization, structuring prompts so user input is clearly delimited from system instructions, limiting agent permissions to the minimum necessary scope, and monitoring agent behavior for unexpected actions. Building agents that never trust external content as instructions is the cleanest architectural principle, even if hard to fully enforce.
