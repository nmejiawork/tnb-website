---
slug: computer-use
term: Computer use
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - computer use API
  - GUI agent
  - UI agent
  - screen agent
related:
  - tool-use
  - background-agent
  - agentic-loop
  - human-in-the-loop
  - agent-scaffold
dateAdded: '2026-05-02'
shortDef: >-
  The ability of an AI model to control a computer interface directly: clicking
  buttons, filling forms, navigating apps, and reading screen content, rather
  than being limited to text APIs or pre-defined tool calls.
---
Most AI tools work by calling clean, well-defined APIs (interfaces that let software talk to other software). Computer use takes a different approach: the model sees a screenshot or rendered view of a screen, decides where to click or what to type, and actually interacts with the interface as a human would. This means it can work with any app, website, or legacy system, not just the ones that have an API.

Anthropic introduced a computer use API for Claude in late 2024, and the capability has become a benchmark category. OSWorld measures how well models can complete tasks inside a desktop operating system. Claude Sonnet 4.6 led OSWorld benchmarks as of early 2026. The use cases are large: automated QA testing, filling out forms in systems with no API, browser-based data entry, and anything requiring interaction with a visual interface.

The catch is reliability. Computer use agents are slower than API-based tool calls and can fail when interfaces change or render differently. Security is also a concern: an agent with screen and input control has broad access to a system. Most production deployments today scope computer use to sandboxed environments or specific, well-defined UI workflows rather than open-ended access.
