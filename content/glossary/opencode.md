---
slug: opencode
term: OpenCode
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - opencode-ai
related:
  - aider
  - claude-code
  - codex-cli
  - gemini-cli
  - agentic-coding
dateAdded: '2026-05-02'
shortDef: >-
  An open-source, terminal-first AI coding agent that supports 75+ AI models
  from any provider. Runs as a TUI (terminal interface), desktop app, or IDE
  extension. Pay only for what you use, no subscription required.
---
OpenCode sits in the same category as Aider and Codex CLI: a terminal-native coding agent you control entirely. You run it in your project directory, give it a task, and it reads files, writes code, runs commands, and checks for errors, looping until the job is done. The interface is keyboard-driven and lives in your shell, which makes it a natural fit for developers who already spend most of their day in the terminal.

What separates OpenCode from the subscription tools is model flexibility and cost. It connects to Anthropic, OpenAI, Google Gemini, AWS Bedrock, Groq, Azure, and OpenRouter, among others, as well as local models via Ollama. You bring your own API key and pay only for model calls, which for moderate use typically works out far cheaper than a monthly AI IDE subscription.

A practical feature is its Plan and Build mode split. In Plan mode, OpenCode drafts exactly what it intends to change before touching any files. You review the plan, give feedback, and only then switch to Build mode to execute. That two-step flow reduces unwanted side effects and keeps you in control of what the agent actually does.
