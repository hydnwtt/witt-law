/**
 * components/ui/CopyStatusBadge.tsx
 * Flags copy an attorney must review. "write-verify" → red mono badge;
 * "adapt" → muted note; "ready" → nothing. (Build aid, not part of the design.)
 */

import type { CopyStatus } from "@/content/practiceAreas";
import { AlertTriangle } from "lucide-react";

export function CopyStatusBadge({ status }: { status: CopyStatus }) {
  if (status === "ready") return null;
  if (status === "adapt") {
    return <span className="mono-label">Adapt — light edit</span>;
  }
  return (
    <span className="verify-badge">
      <AlertTriangle aria-hidden="true" className="size-3" />
      Write &amp; verify — attorney review
    </span>
  );
}
