---
slug: amazon-q-developer
term: Amazon Q Developer
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - Amazon Q
  - CodeWhisperer
  - Amazon CodeWhisperer
related:
  - copilot
  - tabnine
  - agentic-ide
  - agentic-coding
  - context-engineering
dateAdded: '2026-05-02'
shortDef: >-
  AWS's AI coding and cloud assistant, built into VS Code, JetBrains, and the
  AWS console. Strong for AWS-specific tasks like writing
  infrastructure-as-code, debugging Lambda functions, and navigating AWS
  services.
---
Amazon Q Developer (formerly CodeWhisperer) is Amazon Web Services' answer to GitHub Copilot. It integrates with VS Code and JetBrains IDEs as a plugin and is also available inside the AWS Management Console itself. For teams already building on AWS, that second integration point is valuable: you can ask Q questions about your deployed resources, get help with CloudFormation templates (the YAML files that define AWS infrastructure), and get real-time guidance on AWS-specific APIs.

Q Developer includes a free tier with basic code completions and security scanning, which checks your code for known vulnerabilities as you write. Paid tiers add more capable agents, the ability to transform legacy code (it can help port old Java codebases to newer versions, for example), and deeper integration with AWS services.

Outside of AWS-heavy workflows, Q Developer is a strong but not dominant player. Its strength is specificity: if your team lives in the AWS ecosystem, it knows AWS service names, SDK patterns, and IAM permission structures far better than a general-purpose AI editor. For teams on other clouds or with no cloud infrastructure, Cursor or Copilot tend to be the more natural default.
