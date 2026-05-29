/**
 * components/Header.tsx  (F2)
 * Sticky, slim site header. Logo (→ home), centered/desktop nav with the
 * Practice Areas dropdown + top-level links, a top-right click-to-call, and a
 * Contact button. Mobile collapses to a hamburger (MobileNav). Phone from firm.ts.
 */

import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { PracticeAreasDropdown } from "@/components/header/PracticeAreasDropdown";
import { MobileNav } from "@/components/header/MobileNav";
import { primaryNav } from "@/lib/nav";
import { firm } from "@/content/firm";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${firm.name} — home`} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <PracticeAreasDropdown />
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-1 py-2 text-sm font-medium text-ink hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={firm.phone.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-dark"
          >
            <Phone aria-hidden="true" className="size-4" />
            {firm.phone.display}
          </a>
          <Link href="/contact/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile */}
        <MobileNav />
      </div>
    </header>
  );
}
