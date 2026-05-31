"use client";

/**
 * components/header/PracticeAreasDropdown.tsx
 * Desktop "Practice Areas" dropdown. Keyboard accessible: opens on click/Enter,
 * closes on Escape or outside click/blur, arrow semantics via native focus order.
 * Links are real <Link>s to the pillar pages (lib/nav).
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { practiceNav } from "@/lib/nav";

export function PracticeAreasDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 px-1 py-2 text-sm font-medium text-ink hover:text-navy"
      >
        Practice Areas
        <ChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        role="menu"
        aria-label="Practice Areas"
        className={`absolute left-0 top-full z-50 w-64 rounded-xl border border-line bg-bg p-2 shadow-lg ${
          open ? "block" : "hidden"
        }`}
      >
        {practiceNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            role="menuitem"
            className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-bg-soft hover:text-navy focus:bg-bg-soft focus:outline-none"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
