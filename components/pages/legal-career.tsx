import { Sparkles, Layers, Megaphone, GitFork, Zap, FileCode , PenTool, Users, PanelsTopLeft, MonitorSmartphone, Presentation, ShieldCheck, Server } from 'lucide-react';
const iconSize = 16;

export default function CareersPage() {
return ( 

    <div className="min-h-screen  text-white"> 

    <section className="w-full max-w-6xl mx-auto p-8 lg:p-12">
    {/* Header Section */} 

    <div className="mb-16 border-b border-white/5 pb-12"> <div className="inline-flex items-center gap-2 text-violet-400 mb-6 bg-violet-500/10 px-3 py-1 rounded-full text-xs font-medium border border-violet-500/10"> <Sparkles className="w-3 h-3" /> <span>Core Team</span> </div>

      <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
        A small team focused on<br /> 
        <span className="font-serif italic text-violet-400">smart contract delivery workflows</span>.
      </h1>

      <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
        Hyperkit Labs builds AI-native workflow software that reduces repeated coordination cost from specification through audit, simulation, and deployment. Here is how the founding team divides ownership today.
      </p>
      
      <div className="flex gap-6 mt-8">
        <div className="flex flex-col">
          <span className="text-2xl font-medium text-white">Remote</span>
          <span className="text-sm text-slate-500">Async-first culture</span>
        </div>
        <div className="w-px h-auto bg-white/10"></div>
        <div className="flex flex-col">
          <span className="text-2xl font-medium text-white">3</span>
          <span className="text-sm text-slate-500">Founding Members</span>
        </div>
      </div>
    </div>

    {/* Founding Roles Section */}
    <h2 className="text-3xl font-medium text-white mb-8">Founding Roles</h2>
    
    <div className="space-y-8">
      {/* Role 1: CEO */}
      <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-violet-500/30 transition-all relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-40 h-40 bg-violet-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-violet-500/10 transition-all"></div>
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Chief Executive Officer
            </h3>
            <p className="text-violet-400 text-sm mb-4">Justine Lupasi  -  vision, product direction, roadmap</p>
            <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
                <FileCode size={iconSize} />
                <span>Smart Contracts</span>
            </div>
            <div className="flex items-center gap-2">
                <PenTool size={iconSize} />
                <span>UI & Design</span>
            </div>
            <div className="flex items-center gap-2">
                <Users size={iconSize} />
                <span>Community</span>
            </div>
            </div>
          </div>
          
          <div className="lg:w-3/4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What you do
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Own product narrative, roadmap sequencing, and scope guardrails so the wedge stays narrow until workflow pain is proven.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Pair with engineering on smart contract and protocol decisions that affect shipping risk.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Run structured validation with high-fit teams: pain, spend, workarounds, and buying motion.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Keep docs and agent instructions aligned with what the system actually does in production.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Coordinate design and frontend execution so Studio matches the workflow story end to end.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-500/5 rounded-lg p-4 border border-gray-500/20">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-violet-400" />
                <span>Impact</span>
              </h4>
              <p className="text-sm text-slate-300">
                Keeps the company honest about what is shipped versus what is still validating - so traction claims stay tied to evidence, not noise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role 2: Chief Marketing & Frontend */}
      <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-40 h-40 bg-violet-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all"></div>
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-violet-400">
              <Presentation className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Chief Marketing Officer
            </h3>
            <p className="text-blue-400 text-sm mb-4">Tristan Triñanes  -  go-to-market, brand, external positioning</p>
            
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <PanelsTopLeft size={iconSize}/>
                <span>Frontend Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Megaphone size={iconSize}/>
                <span>Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <MonitorSmartphone size={iconSize}/>
                <span>UI Implementation</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What you do
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Build and ship Studio and marketing surfaces so the workflow story is legible in the product, not only in decks.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Turn technical workflow detail into demos, tutorials, and clear onboarding paths.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Represent Hyperkit in ecosystem programs, hackathons, and partner conversations with accurate scope.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Run distribution experiments across developer-native channels and measure qualified interest, not vanity attention.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Stay aligned with product leadership on positioning so messaging never outruns implementation.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-500/5 rounded-lg p-4 border border-gray-500/20">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-violet-400" />
                <span>Impact</span>
              </h4>
              <p className="text-sm text-slate-300">
                Makes it easy for the right builders to evaluate a real workflow: from first touch to a serious run, with claims that match the current release boundary.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-green-500/30 transition-all relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-40 h-40 bg-green-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-green-500/10 transition-all"></div>
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 text-violet-400">
              <Megaphone className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Chief Technology Officer
            </h3>
            <p className="text-green-400 text-sm mb-4">Aaron Jay Sopeña  -  architecture, security, technical execution</p>
            
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Server size={iconSize}/>
                <span>Backend Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={iconSize}/>
                <span>Security</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork size={iconSize}/>
                <span>Scalability</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What you do
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Own HyperAgent architecture: gateway, orchestration, verification services, and deployment adapters.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Drive security posture and gap closure: auth boundaries, BYOK handling, rate limits, and provenance for runs and steps.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Set code standards, review critical paths, and keep production hardening tied to an explicit release checklist.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Prioritize one shippable MVP lane until repeat external workflows prove stability.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Separate design intent from enforced behavior so security claims stay bounded by evidence.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-500/5 rounded-lg p-4 border border-gray-500/20">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-violet-400" />
                <span>Impact</span>
              </h4>
              <p className="text-sm text-slate-300">
                Keeps the control plane trustworthy under real usage: observable runs, defensible auth, and honest documentation of what is not yet fail-closed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-12 bg-violet-400/5 text-center border border-white/10 p-16 rounded-xl">
    <h2 className="text-3xl font-semibold text-white mb-4">Want to work with us?</h2>
    <p className="text-slate-400/90 mb-8 max-w-md mx-auto leading-relaxed">
        We are not hiring for additional full-time roles right now. If you ship smart contracts often and want to stress-test an integrated generation, audit, simulation, and deploy-prep workflow, we still want to hear from you - especially for structured pilots and feedback.
    </p>
    <a href="mailto:hyperkitdev@gmail.com?subject=Hyperkit%20%20-%20%20builder%20introduction"
        className="inline-flex min-h-11 items-center justify-center bg-white text-slate-900 px-8 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-all shadow-lg shadow-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Say hello
      </a>
    </div>
  </section>
</div>

);
}
