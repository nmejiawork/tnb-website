---
slug: zed
term: Zed
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - zed editor
  - zed.dev
related:
  - cursor
  - agentic-ide
  - mcp
  - parallel-agents
  - claude-code
dateAdded: '2026-05-02'
shortDef: >-
  A high-performance, open-source code editor built in Rust, designed from
  scratch for AI-native and multiplayer workflows. Fast by default, with
  first-class support for MCP servers and multiple AI agents running in
  parallel.
---
Zed was built by the creators of Atom and Tree-sitter (two influential developer tools) as a response to the perceived bloat of Electron-based editors like VS Code. Written in Rust, it renders at 120fps and handles large codebases without the slowdown developers often feel in heavier IDEs. That performance-first philosophy is what draws its early adopter community.

On the AI side, Zed takes a composable rather than bundled approach. Instead of building its own proprietary agent experience, it lets you bring agents in via ACP (Agent Communication Protocol, its open standard for connecting external agents) or MCP servers. You can run Claude Code, Codex, or OpenCode alongside its own editor features. Diffs are reviewable before committing, and multiple agents can run in the same window.

Experienced builders often describe Zed as an 'agent cockpit': fast, ergonomic, and composable rather than a turnkey AI product. It is open source, which matters to teams with security review requirements. Its main tradeoff versus Cursor or Windsurf is that the AI workflow experience requires more manual assembly.
