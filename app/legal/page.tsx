import { Suspense } from "react";
import { LegalWorkspace } from "@/components/pages/legal-workspace";

export default function LegalPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-[40vh] w-full bg-slate-950"
          aria-busy="true"
          aria-label="Loading legal content"
        />
      }
    >
      <LegalWorkspace />
    </Suspense>
  );
}
