import React from 'react';
import { Sparkles, Medal, Megaphone, Crown, User, Code2, TerminalSquare } from 'lucide-react';
import { Badge } from '@/components/pages/solution-badge';
import { RecognitionFeature } from '@/components/pages/solution-recognition';
import { RoleCard } from '@/components/pages/solution-role-card';
import { SectionDivider } from '@/components/pages/solution-section-divider';
import { ROLES } from '@/foundation/solution-roles';

const ROLE_ICONS = [<User className="w-4 h-4 text-slate-400" key="u" />, <Code2 className="w-4 h-4 text-purple-200" key="c" />, <TerminalSquare className="w-4 h-4 text-cyan-400" key="t" />];

export const RewardsSection: React.FC = () => (
  <section className="w-full py-16 flex flex-col items-center">
    <Badge>Community & Growth</Badge>

    <div className="text-center max-w-3xl mx-auto mb-12 relative">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 pb-2">
        How to Earn Recognition & Rewards
      </h2>
      <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
        Earn NFTs, tokens, and exclusive access through our point-based contribution system.
      </p>
    </div>

    {/* Recognition Rewards List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl w-full mb-16 px-4">
      <RecognitionFeature 
        icon={<Sparkles className="w-5 h-5" />}
        title="Priority Access"
        description="Receive priority access to future Hyperkit ecosystem events and beta testing phases."
      />
      <RecognitionFeature 
        icon={<Medal className="w-5 h-5" />}
        title="Verifiable Accomplishments"
        description="Receive on-chain badges based on your objective accomplishments and contributions."
      />
      <RecognitionFeature 
        icon={<Megaphone className="w-5 h-5" />}
        title="Marketing Recognition"
        description="Badge holders get special marketing recognition, social shoutouts, and profile features."
      />
      <RecognitionFeature 
        icon={<Crown className="w-5 h-5" />}
        title="Exclusive Opportunities"
        description="Get exclusive investment and networking opportunities in our tiered badge system."
      />
    </div>

    <SectionDivider>Roles & Tiers</SectionDivider>

    {/* Cards Layout (Roles) - swipeable on mobile, grid on desktop */}
    <div className="w-full -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:snap-none scrollbar-hide pb-2 md:pb-0">
        {ROLES.map((role, i) => (
          <div key={role.title} className="snap-center shrink-0 w-[85vw] max-w-[340px] md:w-auto md:shrink md:min-w-0">
            <RoleCard
              tier={role.tier}
              icon={ROLE_ICONS[i]}
              title={role.title}
              description={role.description}
              benefits={role.benefits}
              variant={role.variant}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);