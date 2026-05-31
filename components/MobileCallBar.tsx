/**
 * components/MobileCallBar.tsx
 * Sticky bottom call bar on mobile only (design tokens). Call + Free consult.
 * Phone from firm.ts. Hidden ≥768px via .callbar CSS.
 */

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { firm } from "@/content/firm";

export function MobileCallBar() {
  return (
    <div className="callbar">
      <a href={firm.phone.href}>
        <Phone aria-hidden="true" className="size-4" />
        Call now
      </a>
      <Link href="/contact/">
        <CalendarCheck aria-hidden="true" className="size-4" />
        Free consult
      </Link>
    </div>
  );
}
