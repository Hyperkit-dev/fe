"use client";

import React from "react";
import { GitCommit, Scale, FileText, ScrollText, ShieldAlert, Briefcase, X } from "lucide-react";
import type { LegalViewId } from "@/lib/legal-routes";

interface SidebarProps {
  activePage: LegalViewId;
  onPageChange: (page: LegalViewId) => void;
  mobileOpen: boolean;
  onClose: () => void;
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center gap-2 min-h-[44px] ${
      active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    {icon}
    <span className="leading-snug">{label}</span>
  </button>
);

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onPageChange,
  mobileOpen,
  onClose,
}) => (
  <>
    {mobileOpen ? (
      <button
        type="button"
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
        aria-label="Close menu"
        onClick={onClose}
      />
    ) : null}

    <aside
      id="legal-sidebar-nav"
      className={[
        "fixed z-50 flex flex-col border-r border-white/5 bg-slate-950/98 backdrop-blur-xl shadow-2xl shadow-black/40",
        "left-0 top-[var(--nav-height)] h-[calc(100dvh-var(--nav-height))] w-[min(19rem,92vw)]",
        "transition-transform duration-200 ease-out",
        mobileOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none lg:pointer-events-auto",
        "lg:static lg:z-20 lg:h-auto lg:min-h-[calc(100dvh-var(--nav-height)-2rem)] lg:max-h-[calc(100dvh-var(--nav-height)-2rem)] lg:w-64 lg:translate-x-0 lg:shadow-none lg:shrink-0",
      ].join(" ")}
      aria-hidden={false}
    >
      <div className="flex items-center justify-between gap-2 border-b border-white/5 px-4 py-3 lg:hidden">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Legal menu</span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-4 sm:p-5 lg:p-6">
        <nav
          className="scrollbar-hide space-y-0.5 overflow-y-auto pr-1"
          aria-label="Legal documents"
        >
          <div className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">Legal</div>
          <NavButton
            icon={<Scale className="h-4 w-4 shrink-0" />}
            label="Legal Hub"
            active={activePage === "legal"}
            onClick={() => onPageChange("legal")}
          />
          <NavButton
            icon={<FileText className="h-4 w-4 shrink-0" />}
            label="Privacy Policy"
            active={activePage === "privacy"}
            onClick={() => onPageChange("privacy")}
          />
          <NavButton
            icon={<ScrollText className="h-4 w-4 shrink-0" />}
            label="Terms of Use"
            active={activePage === "terms"}
            onClick={() => onPageChange("terms")}
          />
          <div className="mb-3 mt-5 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">Product</div>
          <NavButton
            icon={<GitCommit className="h-4 w-4 shrink-0" />}
            label="Changelog"
            active={activePage === "changelog"}
            onClick={() => onPageChange("changelog")}
          />

          <div className="mb-3 mt-6 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">
            Trust &amp; Security
          </div>
          <NavButton
            icon={<ShieldAlert className="h-4 w-4 shrink-0" />}
            label="Security Policy"
            active={activePage === "SecurityPolicy"}
            onClick={() => onPageChange("SecurityPolicy")}
          />

          <div className="mb-3 mt-6 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">Company</div>
          <NavButton
            icon={<Briefcase className="h-4 w-4 shrink-0" />}
            label="Team & Roles"
            active={activePage === "TeamRoles"}
            onClick={() => onPageChange("TeamRoles")}
          />
        </nav>
      </div>
    </aside>
  </>
);
