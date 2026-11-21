export const agentsRootStubTemplate = `# LightSpec Instructions

IF (and only if) the user message:
  - Mentions planning or proposals (words like proposal, spec, change, plan)
  - Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
  - Sounds ambiguous and you need the authoritative spec before coding

THEN: 
Do the following:
- [ ] Run \`lightspec-proposal\`.
- [ ] After the user approves the proposal, run \`lightspec-apply\` to implement it.
- [ ] If unsure which skill to run, list installed skills.

Keep this managed block so 'lightspec update' can refresh the instructions.
`;
