/** One line in the usage-based overages table (amount column + description). */
export type OverageLine =
  | { kind: "rate"; amount: string; detail: string }
  | { kind: "note"; detail: string };

export type PricingTier = {
  id: string;
  name: string;
  priceLine: string;
  highlights: readonly string[];
  /** Synchronized overage lines (price + label). */
  overages: readonly OverageLine[];
};

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    id: "free",
    name: "Free",
    priceLine: "$0 / month",
    highlights: [
      "One workspace",
      "Three generation runs / month",
      "One generation + audit run / month",
      "Basic static-analysis summary",
      "Community support",
      "Seven-day artifact retention",
    ],
    overages: [
      { kind: "rate", amount: "$1.50", detail: "Per extra generation run" },
      { kind: "rate", amount: "$4.00", detail: "Per extra generation + audit run" },
      {
        kind: "note",
        detail: "Deploy prep and production deployment overages are not available on this tier.",
      },
    ],
  },
  {
    id: "builder",
    name: "Builder",
    priceLine: "$12 / month",
    highlights: [
      "One seat · one workspace",
      "Twelve generation runs / month",
      "Four generation + audit runs / month",
      "Two simulation-backed deploy-prep runs / month",
      "BYOK workflows · exportable reports",
      "Async email support (72h target)",
    ],
    overages: [
      { kind: "rate", amount: "$1.25", detail: "Per extra generation run" },
      { kind: "rate", amount: "$3.50", detail: "Per extra generation + audit run" },
      { kind: "rate", amount: "$7.00", detail: "Per simulation-backed deploy-prep run" },
      { kind: "rate", amount: "$12.00", detail: "Per production deployment orchestration" },
    ],
  },
  {
    id: "builder-pro",
    name: "Builder Pro",
    priceLine: "$49 / month",
    highlights: [
      "Two seats · two workspaces",
      "Thirty generation runs / month",
      "Ten generation + audit runs / month",
      "Six simulation-backed deploy-prep runs / month",
      "Two production deployment runs / month",
      "Advanced exports · 30-day retention · monthly async workflow review",
    ],
    overages: [
      { kind: "rate", amount: "$1.00", detail: "Per extra generation run" },
      { kind: "rate", amount: "$3.00", detail: "Per extra generation + audit run" },
      { kind: "rate", amount: "$6.00", detail: "Per simulation-backed deploy-prep run" },
      { kind: "rate", amount: "$10.00", detail: "Per production deployment orchestration" },
    ],
  },
  {
    id: "team",
    name: "Team",
    priceLine: "$79 / month",
    highlights: [
      "Up to five seats · shared workspace",
      "Approval controls · deployment records · usage analytics · role separation",
      "Sixty generation · twenty gen+audit · ten deploy-prep · four production deployments / month",
      "Async Slack or Discord support (48h target)",
    ],
    overages: [
      { kind: "rate", amount: "$0.90", detail: "Per extra generation run" },
      { kind: "rate", amount: "$2.75", detail: "Per extra generation + audit run" },
      { kind: "rate", amount: "$5.50", detail: "Per simulation-backed deploy-prep run" },
      { kind: "rate", amount: "$9.00", detail: "Per production deployment orchestration" },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    priceLine: "$199 / month",
    highlights: [
      "Up to fifteen seats · multi-workspace · policy controls · audit logs",
      "Priority support",
      "150 gen · 50 gen+audit · 25 deploy-prep · 10 production deployments / month",
      "90-day retention · quarterly async architecture review",
    ],
    overages: [
      { kind: "rate", amount: "$0.75", detail: "Per extra generation run" },
      { kind: "rate", amount: "$2.25", detail: "Per extra generation + audit run" },
      { kind: "rate", amount: "$4.50", detail: "Per simulation-backed deploy-prep run" },
      { kind: "rate", amount: "$7.50", detail: "Per production deployment orchestration" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceLine: "Custom, from ~$750 / month",
    highlights: [
      "Custom seats & workspaces · SSO · SLA",
      "Compliance & procurement support · governance controls",
      "Dedicated async channel · custom retention · onboarding & migration",
      "Optional private deployment policies",
    ],
    overages: [
      {
        kind: "note",
        detail:
          "Custom pooled usage or committed-volume pricing per workflow event, set with your contract.",
      },
    ],
  },
] as const;
