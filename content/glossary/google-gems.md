---
slug: google-gems
term: Gems
type: Concept
topic: Builder Tools
familiarity: Common
aliases:
  - Google Gems
  - Gemini Gems
related:
  - notebooklm
  - claude-projects
  - system-prompt
  - agent-skills
dateAdded: '2026-05-02'
shortDef: >-
  Custom AI personas you build in the Gemini app by giving them a specific role,
  instructions, and optionally a knowledge base. Each Gem is a reusable,
  pre-configured Gemini instance, roughly equivalent to a Custom GPT or a Claude
  Project with custom instructions.
---
A Gem is Google's version of a personalized, task-specific AI assistant. You create one by writing a set of instructions and optionally uploading files as its knowledge base. Once set up, anyone with access to that Gem interacts with a Gemini that already knows its role and reference material. You can build a Gem for editing your writing style, analyzing a specific dataset, or acting as a domain expert in your area.

Gems can also be integrated into Google Workspace Studio as steps in automated workflows, where an Ask a Gem action sends a prompt to a private Gem and uses its output as part of a larger automation. This turns Gems from standalone assistants into components in business processes.

The builder use case for Gems is mostly internal tooling: creating role-specific AI helpers for teammates without requiring everyone to manage their own system prompts. The tradeoff compared to Claude Projects or Custom GPTs is that Gems live in Google's ecosystem, so they integrate naturally with Drive, Docs, and Workspace but don't have deep coding workflow support.
