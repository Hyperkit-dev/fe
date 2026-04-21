"use client";

import { useEffect } from "react";

const DOCS_URL = "https://docs.hyperkitlabs.com";

/**
 * Static export-friendly redirect: `next.config` redirects may not apply to `output: 'export'`.
 */
export default function DocsRedirectPage() {
  useEffect(() => {
    window.location.replace(DOCS_URL);
  }, []);

  return (
    <main className="min-h-[40vh] flex flex-col items-center justify-center gap-4 bg-[var(--color-bg-base)] text-slate-500 dark:text-slate-400 text-sm px-6 py-16">
      <p>Redirecting to documentation…</p>
      <a
        href={DOCS_URL}
        className="text-violet-300 underline underline-offset-2 hover:text-violet-200"
      >
        Continue to docs.hyperkitlabs.com
      </a>
    </main>
  );
}
