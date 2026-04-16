import React from 'react';

export const CodeEditor: React.FC = () => (
  <div className="relative rounded-xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
      <div className="ml-auto text-[10px] text-slate-600 font-mono">workflow-run.ts</div>
    </div>

    <div className="p-5 font-mono text-xs md:text-sm leading-6 relative group-hover:translate-y-[-2px] transition-transform duration-500">
      <div className="flex gap-4">
        <div className="flex flex-col text-slate-700 select-none text-right">
          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
        </div>
        <div className="flex flex-col">
          <div className="text-slate-300"><span className="text-purple-400">const</span> res = <span className="text-blue-400">await</span> fetch(</div>
          <div className="pl-4 text-slate-300">
            <span className="text-green-400">&apos;https://api…/workflows&apos;</span>, {'{'}
          </div>
          <div className="pl-4 text-slate-300">method: <span className="text-green-400">&apos;POST&apos;</span>,</div>
          <div className="pl-4 text-slate-300">
            headers: {'{'} Authorization: <span className="text-green-400">&apos;Bearer …&apos;</span> {'}'},
          </div>
          <div className="pl-4 text-slate-300">body: JSON.stringify({'{'} spec: specMarkdown {'}'}),</div>
          <div className="text-slate-300">{'}'});</div>
          <div className="text-slate-500 mt-1">// Poll run steps until audit + sim complete</div>
        </div>
      </div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-teal-500/5 blur-2xl rounded-full pointer-events-none"></div>
    </div>
  </div>
);
