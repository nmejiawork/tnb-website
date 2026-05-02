---
slug: system-prompt
term: System prompt
type: Concept
topic: Patterns & Practices
familiarity: Common
aliases:
  - system message
  - system instruction
  - meta-prompt
related:
  - prompt-engineering
  - llm
  - context-window
  - context-engineering
dateAdded: '2026-05-02'
shortDef: >-
  A set of instructions given to an LLM before the user conversation begins. It
  sets the model's persona, rules, and behavior for the whole session. Most AI
  products use a system prompt to shape how the model acts without the user ever
  seeing it.
---
When you build an AI product on top of an LLM API, you typically have two layers: the system prompt, which you write and control, and the user message, which your users send. The system prompt runs first and sets the stage. It can define who the model should act as, what topics to avoid, what format to use, what tools are available, and any other constraints you want to enforce.

Well-designed system prompts are the foundation of consistent AI product behavior. They carry the 'personality' and rules of your application. A customer service bot might have a system prompt that says what company it represents, what tone to use, what it should never do, and how to handle escalations. A coding assistant might specify what languages and frameworks to prefer.

System prompts are not perfectly secure. Techniques like prompt injection, where a malicious user embeds instructions in their input designed to override the system prompt, are a real attack vector in production systems. Security-conscious builders design their system prompts defensively, use content filtering layers, and test for injection scenarios.
