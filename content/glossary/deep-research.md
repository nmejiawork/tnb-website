---
slug: deep-research
term: Deep Research
type: Concept
topic: Agents & Automation
familiarity: Emerging
aliases:
  - autonomous research agent
  - research agent
related:
  - reasoning-model
  - grounding
  - rag
  - extended-thinking
  - notebooklm
dateAdded: '2026-05-02'
shortDef: >-
  An agentic mode where an AI autonomously plans a multi-step research workflow,
  searches the web or connected data sources iteratively, synthesizes findings,
  and produces a structured, cited report. Available in Gemini, ChatGPT, and
  other tools as both a consumer feature and a developer API.
---
Deep research is what happens when you combine a reasoning model with web search and give it time to think. Instead of a single-shot answer, the agent decides what questions it needs to answer, runs searches, reads results, decides what more it needs, runs more searches, and eventually compiles everything into a long-form report with citations. The whole loop can take several minutes.

Google's Gemini Deep Research was one of the first widely-used versions; OpenAI added it to ChatGPT, and both have since made deep research available via API so developers can embed it in their own apps. Google also released a more powerful Deep Research Max variant designed for background, asynchronous workflows like overnight due diligence runs.

For builders, deep research is a component you can wire into larger agent pipelines. The typical pattern: kick off a deep research run to produce a grounded briefing, then pass the output to another agent for action or synthesis. It's particularly useful for market research, competitive analysis, literature reviews, and any task where freshness and citation quality matter.
