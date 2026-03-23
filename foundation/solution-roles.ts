/**
 * Role tiers config – single source of truth for solution-role-card content.
 * Maps tier metadata for professional maintainability.
 */

export interface RoleConfig {
  tier: string;
  title: string;
  description: string;
  benefits: string[];
  variant: 'matte' | 'highlighted' | 'elite';
}

export const ROLES: RoleConfig[] = [
  {
    tier: 'Tier 1',
    title: 'HyperContributor',
    description: 'Entry-level contributors who complete basic tasks.',
    benefits: ['Basic token allocations', 'Community access', 'Testing participation'],
    variant: 'matte',
  },
  {
    tier: 'Tier 2',
    title: 'HyperCoder',
    description: 'Active developers with significant contributions.',
    benefits: ['Enhanced allocations', 'Beta access', 'Priority support', 'Private repos'],
    variant: 'highlighted',
  },
  {
    tier: 'Tier 3',
    title: 'HyperDeveloper',
    description: 'Elite developers with maximum engagement.',
    benefits: ['Maximum allocations', 'Governance rights', 'Direct collaboration', 'Exclusive opportunities'],
    variant: 'elite',
  },
];
