"use client";

/**
 * components/header/MobileNav.tsx
 * Hamburger menu for small screens. Toggles a full-width panel containing the
 * practice-area links, top-level links, click-to-call, and a Contact button.
 * Closes on Escape and on navigation. Practice areas are shown inline (not a
 * nested dropdown) so all links are reachable without extra interaction.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { practiceNav, primaryNav } from "@/lib/nav";
import { firm } from "@/content/firm";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-bg shadow-lg"
        >
          <nav aria-label="Mobile" className="container-content flex flex-col gap-1 py-4">
            <p className="px-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted">
              Practice Areas
            </p>
            {practiceNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-lg px-1 py-2 text-ink hover:bg-bg-soft"
              >
                {link.label}
              </Link>
            ))}

            <hr className="my-2 border-line" />

            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-lg px-1 py-2 text-ink hover:bg-bg-soft"
              >
                {link.label}
              </Link>
            ))}

            <a href={firm.phone.href} className="mt-2 inline-flex items-center gap-2 px-1 py-2 font-semibold text-navy">
              <Phone aria-hidden="true" className="size-4" />
              Call {firm.phone.display}
            </a>
            <Link href="/contact/" onClick={close} className="btn btn-primary mt-2">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
