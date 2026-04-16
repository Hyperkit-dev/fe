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
    description: 'Builders who complete scoped tasks and share quality feedback.',
    benefits: ['Community access', 'Public recognition for merged work', 'Invites to general workflow demos'],
    variant: 'matte',
  },
  {
    tier: 'Tier 2',
    title: 'HyperCoder',
    description: 'Active developers shipping integrations, fixes, or repeatable workflow examples.',
    benefits: ['Pilot queue for Studio runs', 'Async support channel for integration questions', 'Early changelog and docs previews'],
    variant: 'highlighted',
  },
  {
    tier: 'Tier 3',
    title: 'HyperDeveloper',
    description: 'Partners who run serious contracts through the pipeline and co-define hardening priorities.',
    benefits: ['Structured pilot slots', 'Direct product feedback sessions', 'Co-marketing when launches are real and mutually agreed'],
    variant: 'elite',
  },
];
