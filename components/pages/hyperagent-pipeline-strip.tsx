import React from "react";
import { ArrowRight } from "lucide-react";

const STEPS = [
  { title: "Intake", detail: "Studio / spec & artifacts" },
  { title: "Policy & auth", detail: "Gateway · JWT · tenant scope" },
  { title: "Workflow engine", detail: "Orchestrator · stages · queue" },
  { title: "Verification & ship", detail: "Slither · Tenderly · deploy adapters" },
] as const;

/**
 * Simplified HyperAgent path: orchestration, not a single chat bot.
 */
export const HyperAgentPipelineStrip: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`w-full max-w-4xl mx-auto ${className}`}
    role="img"
    aria-label="HyperAgent flow: intake, gateway, orchestrator, backend services"
  >
    <div className="hidden md:flex items-stretch justify-between gap-2">
      {STEPS.map((s, i) => (
        <React.Fragment key={s.title}>
          <div className="flex-1 min-w-0 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-300/95">
              {s.title}
            </p>
            <p className="mt-1 text-[11px] text-slate-500 leading-snug">{s.detail}</p>
          </div>
          {i < STEPS.length - 1 && (
            <div className="flex items-center text-slate-600 shrink-0" aria-hidden>
              <ArrowRight className="w-4 h-4" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
    <ol className="md:hidden space-y-2 list-none">
      {STEPS.map((s, i) => (
        <li
          key={s.title}
          className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
        >
          <span className="text-xs font-mono text-violet-400/90 w-5 shrink-0">{i + 1}</span>
          <div>
            <p className="text-sm font-medium text-slate-200">{s.title}</p>
            <p className="text-xs text-slate-500">{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

const FOUR_LAYERS = [
  { k: "Client", v: "Studio · SDK" },
  { k: "Gateway", v: "Auth · routing" },
  { k: "Orchestrator", v: "LangGraph · queue" },
  { k: "Backend", v: "Slither · Tenderly · deploy" },
] as const;

/** Compact four-layer summary; place directly under {@link HyperAgentPipelineStrip}. */
export const HyperAgentFourLayerChips: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-2 text-[11px] sm:text-xs text-slate-400 ${className}`}
    aria-label="HyperAgent four-layer model"
  >
    {FOUR_LAYERS.map((layer) => (
      <span
        key={layer.k}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
      >
        <span className="font-medium text-slate-300">{layer.k}</span>
        <span className="text-slate-500">·</span>
        <span>{layer.v}</span>
      </span>
    ))}
  </div>
);
