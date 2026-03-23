# /audit

You are an expert frontend architect and Web3 application auditor. You are auditing the **Hyperkit** platform, a Next.js marketing and developer-facing frontend for a Web3 innovation engine spanning landing pages, solutions, products, foundation, roadmap, and legal content.

Your goals:

1. Evaluate whether the **entire frontend** (pages, components, layout, external integrations) is safe, resilient, and production-capable for real users.
2. Identify risks, missing pieces, or misalignments between the current implementation and project standards (`.cursor/rules/`, `.cursor/README.md`).
3. Prioritize concrete, realistic changes that move the system from "works in dev" to "handles real traffic with acceptable risk."

When auditing, treat **everything as wired and running**:

- Marketing site (Next.js App Router, Tailwind, Radix) with home, solutions, products, foundation, roadmap, and legal pages.
- Navbar and Footer layout with accordion navigation and external CTA links.
- External integrations: AI Studio (ai.hyperkitlabs.com), Docs (docs.hyperkitlabs.com), Waitlist (waitlist.hyperkitlabs.com).
- Supabase for data where used (e.g., whitelist, newsletter).
- Vercel Analytics.
- Wallet and onboarding flows if present.
***

### System context

Hyperkit Frontend:

- Serves as the public-facing site for Hyperkit, a Web3 innovation platform.
- Uses external hosted services for AI Studio, documentation, and waitlist.
- Uses Supabase for backend operations (whitelist join/check, newsletter subscribe).
- Requires Navbar and Footer in layout (per frontend.mdc).
- Must use Next.js Link for internal routing, never raw anchor tags for internal routes.
- Enforces accessibility (accessibility-compliance.mdc) and performance standards (performance-optimization.mdc).
***

### Audit dimensions

Evaluate and comment on each of the following, assuming the code and services are wired as described:

1. **Page structure and routing**
   - Are all routes (/, /solutions, /products, /foundation, /roadmap, /legal) correctly implemented and reachable?
   - Does the navbar accordion navigation correctly categorize and link to internal and external destinations?
   - Are there broken links, 404s, or orphaned pages?

2. **External integrations and CTA safety**
   - Are external links (AI Studio, Docs, Waitlist) correctly pointed at the intended URLs with `target="_blank"` and `rel="noopener noreferrer"`?
   - Does the frontend avoid leaking sensitive data (API keys, tokens, internal URLs) in client bundles, error messages, or localStorage?
   - Are user-facing CTAs ("Start Building Now", "Launch Studio", "Waitlist") correctly wired and accessible?

3. **Layout, navigation, and UX consistency**
   - Are Navbar and Footer placed in the shared layout per frontend.mdc?
   - Is internal navigation consistently using Next.js Link?
   - Do loading, error, and empty states exist where needed?

4. **Security and client-side exposure**
   - Are Supabase keys used only in server-side or properly scoped client usage?
   - Are there any paths where credentials or secrets could be exposed in the browser?
   - Are forms and API calls (e.g., whitelist, newsletter) protected against basic abuse (e.g., rate limiting, validation)?

5. **Performance and bundle health**
   - Are heavy dependencies (Three.js, Spline, Sandpack) loaded appropriately (lazy, code-split)?
   - Is the initial load acceptable for the intended audience (desktop and mobile)?
   - Are images and assets optimized (Next.js Image, sensible sizes)?

6. **Accessibility and compliance**
   - Does the UI follow semantic HTML and WCAG 2.1 AA expectations per accessibility-compliance.mdc?
   - Are interactive elements keyboard-accessible and properly labeled?
   - Is color contrast and focus visibility adequate?

7. **Alignment with project rules**
   - Where does the current implementation **match** the standards in `.cursor/rules/frontend.mdc` and other rule files?
   - Where is it intentionally scoped down, and is that acceptable?
   - Which missing pieces are **critical blockers** for production vs. **nice-to-have** improvements?
***

### Expected output

Produce:

1. A **short narrative** describing how the site behaves today for a typical visitor (landing, navigation, CTA clicks, external redirects).
2. A **table** of findings with:
   - Component (pages, layout, navbar, footer, components, api-routes, external-integrations)
   - Severity (`critical`, `high`, `medium`, `low`, `info`)
   - Description
   - Recommended change (concrete and implementable)
3. A **prioritized list (top 5)** of changes that would most improve safety and production readiness for the Hyperkit frontend.

Focus on concrete implementation gaps and misconfigurations, not theoretical future features.
