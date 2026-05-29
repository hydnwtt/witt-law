/**
 * components/ui/CopyStatusBadge.tsx
 * Visibly flags copy that an attorney still has to review. Per the build spec,
 * "write-verify" copy must be rendered but clearly marked; "adapt" is lightly
 * edited existing copy. "ready" renders nothing.
 */

import type { CopyStatus } from "@/content/practiceAreas";
import { AlertTriangle, PencilLine } from "lucide-react";

export function CopyStatusBadge({ status }: { status: CopyStatus }) {
  if (status === "ready") return null;

  if (status === "adapt") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-line bg-bg-soft px-2 py-0.5 text-xs font-medium text-muted">
        <PencilLine aria-hidden="true" className="size-3" />
        Adapt — light edit
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-danger/30 bg-danger/5 px-2 py-0.5 text-xs font-semibold text-danger">
      <AlertTriangle aria-hidden="true" className="size-3" />
      Write &amp; verify — attorney review required
    </span>
  );
}
