/**
 * components/MobileCallBar.tsx  (F2)
 * Sticky bottom call bar on mobile only. Two big touch targets: call + contact.
 * The layout adds bottom padding on mobile so it never covers page content.
 * Phone from firm.ts.
 */

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { firm } from "@/content/firm";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-bg md:hidden">
      <a
        href={firm.phone.href}
        className="flex items-center justify-center gap-2 py-3 font-semibold text-navy"
      >
        <Phone aria-hidden="true" className="size-4" />
        Call now
      </a>
      <Link
        href="/contact/"
        className="flex items-center justify-center gap-2 bg-navy py-3 font-semibold text-white"
      >
        <CalendarCheck aria-hidden="true" className="size-4" />
        Free consult
      </Link>
    </div>
  );
}
