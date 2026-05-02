---
slug: eu-ai-act
term: EU AI Act
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - eu artificial intelligence act
  - ai act
  - european ai regulation
related:
  - guardrails
  - evals
  - human-in-the-loop
  - mlops
  - llmops
dateAdded: '2026-05-02'
shortDef: >-
  The European Union's comprehensive AI regulatory framework, classifying AI
  systems by risk level and imposing compliance obligations accordingly. Full
  obligations for high-risk AI systems took effect August 2, 2026.
---
The EU AI Act uses a risk-tiered structure. Unacceptable-risk systems (like social scoring) are banned outright. High-risk systems (medical devices, hiring tools, critical infrastructure, certain agents with significant decision-making power) face the strictest requirements: mandatory conformity assessments, human oversight mechanisms, detailed documentation, and ongoing monitoring. Limited and minimal risk tiers have lighter requirements.

For builders, the practical obligations depend on where your AI product falls in the risk classification. High-risk systems must maintain detailed technical documentation, implement risk management systems, ensure human oversight is possible, and register in an EU database before deployment. Organizations deploying agents that make consequential decisions need to assess whether those decisions cross into high-risk territory under the Act's definitions.

The Act became the first major AI regulation with real teeth in a large market. Non-EU builders selling into the EU or building systems used by EU citizens are in scope. Compliance tooling, governance layers, and audit-ready documentation became a product category in 2026. For most TNB-audience builders shipping productivity or developer tools, the Act's requirements are moderate. For builders in healthcare, hiring, credit, or other sensitive domains, compliance is a primary engineering concern.
