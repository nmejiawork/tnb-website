---
slug: agent-skills
term: Agent skills
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - claude code skills
  - skills
  - coding skills
  - agent skills framework
related:
  - claude-md
  - mcp
  - tool-use
  - agent-scaffold
  - context-engineering
dateAdded: '2026-05-02'
shortDef: >-
  Modular, reusable packages of instructions and capabilities that you plug into
  an AI coding agent to extend what it knows how to do. A skill might teach an
  agent best practices for a specific framework, give it access to a browser, or
  load domain-specific knowledge.
---
Skills are the plugin ecosystem for AI coding agents, particularly Claude Code. A skill is a package containing rules, tool definitions, and instructions that load into the agent when it is working in a relevant context. A Remotion skill (for a video rendering library) loads when the agent detects Remotion code, giving it accurate knowledge of the library's API and conventions. A browser skill gives the agent tools to interact with web interfaces.

The skills ecosystem emerged in early 2026 around Claude Code, with a registry at skills.sh where builders publish and share them. Popular skills include browser automation, frontend design guidelines (often with explicit anti-AI-slop instructions), database access patterns, and memory tools. Skills typically live in your project repository or in a shared organization repository and activate automatically based on context.

The concept addresses a core pain: general-purpose models know a lot about popular frameworks but lack knowledge of your specific stack, internal libraries, or team conventions. Skills let you package that knowledge once and reuse it across projects. It is similar to what CLAUDE.md does for project-level context, but skills can be shared across projects and teams rather than being project-specific.
