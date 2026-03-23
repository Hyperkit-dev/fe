/** Active legal hub view (internal state + switch cases). */
export type LegalViewId =
  | "legal"
  | "privacy"
  | "terms"
  | "changelog"
  | "TeamRoles"
  | "SecurityPolicy";

/** URL `?view=` values (stable, lowercase). */
export const VIEW_PARAM: Record<LegalViewId, string> = {
  legal: "legal",
  privacy: "privacy",
  terms: "terms",
  changelog: "changelog",
  TeamRoles: "careers",
  SecurityPolicy: "security",
};

const PARAM_TO_VIEW: Record<string, LegalViewId> = {
  legal: "legal",
  privacy: "privacy",
  terms: "terms",
  changelog: "changelog",
  careers: "TeamRoles",
  security: "SecurityPolicy",
};

export function viewFromSearchParam(param: string | null): LegalViewId {
  if (!param) return "legal";
  return PARAM_TO_VIEW[param] ?? "legal";
}

export function searchParamFromView(view: LegalViewId): string {
  return VIEW_PARAM[view];
}

export const LEGAL_VIEW_LABEL: Record<LegalViewId, string> = {
  legal: "Legal Center",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  changelog: "Changelog",
  TeamRoles: "Team & Roles",
  SecurityPolicy: "Security Policy",
};
