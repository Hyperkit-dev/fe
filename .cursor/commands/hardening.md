# /hardening

## Command (copy and use)

```
Run the full production hardening pre-action. Execute the mandatory pre-action chain (rules, skills if applicable), then run all hardening steps (Review, Audit, Performance Audit, Security, UX, Frontend/Design). Build the Hardening Findings Log and immediately fix all findings in priority order without stopping until Critical and High are resolved. Apply .cursor/commands/hardening.md.
```

## Production Hardening Pre-Action (Non-Negotiable)

This command defines a **mandatory pre-action** to harden, polish, and elevate the **Hyperkit frontend** to production level. It is **non-negotiable** before treating the codebase as production-ready. The agent must execute the full procedure and **immediately fix all findings** without interruption until the prioritized action list is resolved.

---

## 1. Scope and Purpose

- **Goal**: Bring the whole project (pages, layout, components, external integrations, API routes, UX, security, performance) to solid, high-quality, production-level state.
- **Trigger**: Use when preparing for release, before marking a milestone production-ready, or when explicitly requested via `/hardening`.
- **Enforcement**: All steps below are mandatory where the referenced commands or skills exist. Findings must be fixed in priority order; do not pause after reporting.

---

## 2. Mandatory Pre-Action Chain

Before any hardening run, the agent MUST complete these in order:

1. **`.cursor/rules/`**
   Review rule files relevant to the task: `frontend.mdc`, `accessibility-compliance.mdc`, `performance-optimization.mdc`, `onboarding-ux.mdc`, `smart-wallet-config.mdc`. Ensure actions align with project standards and scope.

2. **`.cursor/README.md`**
   Read project docs. Respect scope boundaries, rule engines, and CLI commands.

3. **`.cursor/commands/rules.md`** (if present)
   Execute the mandatory pre-action defined there before proceeding.

4. **`.cursor/rules/AGENTS.mdc`** (if present)
   Apply agent resource requirements and MVP boundaries before action.

5. **`.cursor/commands/sprint.md`** (if present)
   If hardening involves sprint or checklist items, treat user-vetted items as commitments. Apply Preservation rule and Scope boundary.

---

## 3. Hardening Procedure (Ordered Steps)

Execute the following steps in sequence. Each step produces findings; collect all findings into a single **Hardening Findings Log** with severity and component. Do **not** stop after a step to ask for permission; proceed through all steps, then execute the **Fix Phase** (Section 5).

### Step 1: Full Application Review

- **Command**: Apply `.cursor/commands/review.md`.
- **Action**: Analyze the entire project and application. Read and understand the root and key flows. Answer: Is the application aligned with the desired user journey? What is fully built, stubbed, duplicated, or missing?
- **Output**: Add to Hardening Findings Log: list of issues (duplication, inconsistency, missing pieces, alignment gaps) with severity (critical / high / medium / low).

### Step 2: Full System Audit

- **Command**: Apply `.cursor/commands/audit.md`.
- **Action**: Audit pages, layout, navbar, footer, external integrations, and API routes as a wired system. Evaluate safety, resilience, and production capability. Cover: page structure and routing; external integrations and CTA safety; layout and navigation; security and client exposure; performance; accessibility; alignment with `.cursor/rules/`.
- **Output**: Add the audit table (component, severity, description, recommended change) and top 5 prioritized changes to the Hardening Findings Log.

### Step 3: Performance Audit

- **Command**: Apply `.cursor/commands/performance-audit.md`.
- **Action**: Run full performance audit (WebGL, CSS, bundle, loading, runtime). Identify regressions and optimization opportunities.
- **Output**: Add performance findings to the Hardening Findings Log with severity and file/component references.

### Step 4: Security (OWASP Top 10 / Frontend Surface)

- **Skill**: `.cursor/skills/owasp-top-10` (if present).
- **Action**: For the application's attack surface (client-side code, API routes, form handling), assess OWASP Top 10. Focus on: broken access control, injection, sensitive data exposure, misconfiguration, vulnerable dependencies.
- **Output**: Add every finding to the Hardening Findings Log. If skill absent, perform a basic manual security review of forms, external links, and client-side data handling.

### Step 5: UX and Accessibility

- **Rules**: `.cursor/rules/accessibility-compliance.mdc`, `.cursor/rules/onboarding-ux.mdc`.
- **Action**: Evaluate pages and components for WCAG 2.1 AA compliance, keyboard navigation, semantic HTML, error states, and first-run experience.
- **Output**: Add UX and accessibility findings to the Hardening Findings Log with severity and component references.

### Step 6: Frontend and Design Quality

- **Rules**: `.cursor/rules/frontend.mdc`.
- **Action**: Evaluate layout, typography, spacing, navigation patterns, loading and error states. Check: one primary action per view where applicable, progressive disclosure, no forbidden patterns, responsiveness.
- **Output**: Add design and frontend findings to the Hardening Findings Log with severity and file/component references.

### Step 7: Optional Steps (When Skills Present)

- **Code Maturity**: `.cursor/skills/code-maturity-assessor` (if present). Assess code quality and add gaps to the log.
- **UX Audit Skill**: `.cursor/skills/ux-audit-rethink` (if present). Run full UX audit and merge findings.
- **Design Skills**: `.cursor/skills/design-taste-frontend`, `.cursor/skills/design-with-taste` (if present). Apply and merge design findings.
- **Onboarding**: `.cursor/skills/onboarding-cro` (if present). Assess onboarding flows and activation.
- **Note**: If a skill is absent, skip that step; do not block hardening on missing skills.

---

## 4. Hardening Findings Log Format

Maintain a single structured log. Each entry MUST include:

- **Id**: Short unique id (e.g. H-001).
- **Source**: Step name (Review, Audit, Performance Audit, Security, UX/Accessibility, Frontend/Design).
- **Component**: pages, layout, navbar, footer, components, api-routes, external-integrations, etc.
- **Severity**: Critical | High | Medium | Low | Info.
- **Description**: What is wrong or missing.
- **Recommendation**: Concrete, implementable change.
- **Scope**: Files, components, or routes to modify.
- **Effort**: S / M / L (optional).

Sort the log by severity (Critical first), then by source order, then by component. Deduplicate: if the same issue appears from multiple steps, keep one entry and note the sources.

---

## 5. Fix Phase: Immediate Correction Without Interruption

- **Rule**: The agent must **fix all findings** in the Hardening Findings Log according to the procedural approach below. Do **not** stop after producing the log to wait for user approval. Proceed to implement fixes in priority order until the list is resolved or no further fixes can be applied without new input.

### 5.1 Fix Order

1. **Critical**: All Critical severity items first. Complete every Critical fix before moving to High.
2. **High**: All High severity items next.
3. **Medium**: Then Medium. If capacity is limited, document remaining Medium/Low in a short "Deferred" list with clear follow-up steps.
4. **Low / Info**: Address if time permits; otherwise add to Deferred with rationale.

### 5.2 Procedural Approach for Each Fix

1. **Select** the next finding from the sorted log.
2. **Locate** the exact scope (files, lines, components).
3. **Implement** the recommended change. Prefer existing patterns from `.cursor/rules/`; do not introduce scope creep.
4. **Verify**: Code builds; no new critical or high issues introduced.
5. **Mark** the finding as Fixed in the log.
6. **Repeat** until all Critical and High (and as many Medium as feasible) are fixed.

### 5.3 Constraints During Fix Phase

- **No scope creep**: Address only what the finding recommends.
- **No interruptions**: Do not pause after individual fixes to ask whether to continue.
- **Preserve behavior**: Fixes must preserve existing correct behavior unless the finding explicitly requires a change.
- **Project standards**: All code changes must comply with `.cursor/rules/frontend.mdc` and other applicable rules.

### 5.4 Output After Fix Phase

- **Summary**: Count of findings by severity and how many were fixed.
- **Remaining**: List of any Deferred items with scope and suggested follow-up.
- **Hardening Findings Log**: Final log with status (Fixed / Deferred / Skipped with reason) for each entry.

---

## 6. Summary: Pre-Action and Execution Order

| Order | Item | Mandatory |
|-------|------|-----------|
| 1 | `.cursor/rules/` (frontend, accessibility, performance, etc.) | Yes |
| 2 | `.cursor/README.md` | Yes |
| 3 | `.cursor/rules/AGENTS.mdc` (if present) | If present |
| 4 | `.cursor/commands/sprint.md` (if applicable) | When applicable |
| 5 | Step 1: Review (`.cursor/commands/review.md`) | Yes |
| 6 | Step 2: Audit (`.cursor/commands/audit.md`) | Yes |
| 7 | Step 3: Performance Audit (`.cursor/commands/performance-audit.md`) | Yes |
| 8 | Step 4: Security (OWASP or manual review) | Yes |
| 9 | Step 5: UX and Accessibility | Yes |
| 10 | Step 6: Frontend/Design | Yes |
| 11 | Step 7: Optional skills (if present) | When present |
| 12 | Build Hardening Findings Log (dedupe, sort by severity) | Yes |
| 13 | Fix Phase: fix all findings in order without interruption | Yes |
| 14 | Deferred list and final log with status | Yes |

---

## 7. References

- **Commands**: `.cursor/commands/review.md`, `.cursor/commands/audit.md`, `.cursor/commands/performance-audit.md`
- **Rules**: `.cursor/rules/frontend.mdc`, `.cursor/rules/accessibility-compliance.mdc`, `.cursor/rules/performance-optimization.mdc`, `.cursor/rules/onboarding-ux.mdc`, `.cursor/rules/smart-wallet-config.mdc`
- **Project**: `.cursor/README.md`
