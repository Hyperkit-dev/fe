# /trace

## Purpose

Map the actual data flow to find unwired logic or hardcoded mocks in the **Hyperkit** marketing frontend.

## Role

Act as a **System Connectivity Auditor**. Trace each flow from UI to backend and report wiring status.

## Trace Pattern

```
[UI Component] -> [API Route / Server Action] -> [Service / Lib] -> [Supabase Table / Google Sheets / External]
```

## Rules

1. Identify any `MOCK`, `TODO`, or `STUB` in the path.
2. Check if session/auth is correctly passed or validated at each hop (where applicable).
3. Verify RLS (Row Level Security) on Supabase tables matches the UI's expected access.
4. **ZERO-SLOP**: Do not say "assuming it works." If you cannot find the file, mark it as [MISSING].

## Output

A **Wiring Health Map** showing [Wired | Partial | Broken | Missing] for each hop.

---

## Key flows to trace

1. **Newsletter**: Subscribe form/CTA -> `/api/newsletter/subscribe` -> `lib/supabase` `subscribeToNewsletter` -> Supabase `newsletter` table.
2. **Whitelist join**: UI CTA -> `/api/whitelist/join` -> `lib/google-sheets` or mock -> Google Sheets (SHEET_ID).
3. **Whitelist check**: UI -> `/api/whitelist/check` -> `lib/google-sheets` or mock -> Google Sheets.
4. **Onboarded count**: `/api/users/onboarded-count` -> mock or DB query (TODO in route).
5. **External CTAs**: Launch Studio -> ai.hyperkitlabs.com; Docs -> docs.hyperkitlabs.com; Waitlist -> waitlist.hyperkitlabs.com (verify links and `target="_blank"` / `rel="noopener noreferrer"`).
