import { baseGuardrails } from './skill-common-template.js';

export const proposalFrontmatter = `---
name: lightspec-proposal
description: Scaffold a new LightSpec change and validate strictly.
disable-model-invocation: false
user-invocable: true
metadata:
  source: lightspec
  workflow: proposal
---`;

const proposalGuardrails = `${baseGuardrails}\n- Identify any vague or ambiguous details and ask the necessary follow-up questions before editing files.
- Do not write any code during the proposal stage. Only create design documents (proposal.md, tasks.md, design.md, and spec deltas). Implementation happens in the apply stage after approval.`;

const proposalSteps = `**Steps**
1. Run \`lightspec list\` and \`lightspec list --specs\`, and inspect related code or docs (e.g., via \`rg\`/\`ls\`) to ground the proposal in current behaviour.
2. Note any gaps in the user plan that require clarification. Ask follow-up questions to resolve ambiguities before proceeding. Avoid making assumptions about unstated requirements or implementation details.
3. Choose a unique verb-led \`change-id\` and scaffold \`proposal.md\`, \`tasks.md\`, and \`design.md\` (when needed) under \`lightspec/changes/<id>/\`.
   In \`proposal.md\`, add an optional \`## Non-Goals\` section after \`## What Changes\` when readers might reasonably expect work that is outside the scope. Use one or two short bullets and omit the section when the scope is clear.
4. Map the change into concrete capabilities or requirements, breaking multi-scope efforts into distinct spec deltas with clear relationships and sequencing.
5. Capture architectural reasoning in \`design.md\` when the solution spans multiple systems, introduces new patterns, or demands trade-off discussion before committing to specs.
6. Draft spec deltas in \`changes/<id>/specs/<capability>/spec.md\` (one folder per capability) using \`## ADDED|MODIFIED|REMOVED Requirements\` with at least one \`#### Scenario:\` per requirement and cross-reference related capabilities when relevant.
7. Draft \`tasks.md\` as an ordered list of small, verifiable work items that deliver user-visible progress, include validation (tests, tooling), and highlight dependencies or parallelizable work.
8. Validate with \`lightspec validate <id> --strict --no-interactive\` and resolve every issue before sharing the proposal.`;

const proposalReferences = `**Reference**
- Use \`lightspec show <id> --json --deltas-only\` or \`lightspec show <spec> --type spec\` to inspect details when validation fails.
- Search existing requirements with \`rg -n "Requirement:|Scenario:" lightspec/specs\` before writing new ones.
- Explore the codebase with \`rg <keyword>\`, \`ls\`, or direct file reads so proposals align with current implementation realities.
- If rg is unavailable, use platform-native search tools and suggest installing rg for efficient proposal development.`;

export const proposalTemplate = [
  proposalGuardrails,
  proposalSteps,
  proposalReferences,
].join('\n\n');
