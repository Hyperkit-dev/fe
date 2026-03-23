import React from 'react';
import { Code2, CheckCircle } from 'lucide-react';
import { CodeEditor } from '@/components/pages/products-code-editor';

export const CodeIntegrationCard: React.FC = () => (
  <div className="group md:col-span-2 lg:col-span-3 relative bg-[#030014] border border-white/5 rounded-3xl overflow-hidden hover:border-white/15 hover:scale-[1.01] transition-all duration-300 min-h-[320px] md:min-h-[380px] motion-reduce:hover:scale-100">
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
    
    <div className="grid md:grid-cols-2 gap-8 p-8 items-center h-full z-10 relative">
      <div className="order-2 md:order-1">
        <div className="mb-4 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
          <Code2 className="w-5 h-5 text-teal-400" />
        </div>
        <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Build seamless wallets with clean code</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light max-w-md">
          No need to handle complex contract layouts or blockchain boilerplate. Our tools make wallet integration simple and secure.
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle className="w-4 h-4 text-teal-500" /> Type-safe
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle className="w-4 h-4 text-teal-500" /> Audited
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 w-full">
        <CodeEditor />
      </div>
    </div>
  </div>
);