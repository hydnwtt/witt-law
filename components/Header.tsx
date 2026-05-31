"use client";

/**
 * components/Header.tsx
 * Olive sticky header (design's .site-header). Brand, Practice Areas dropdown,
 * Results/About/Blog, click-to-call, Contact button. Below 900px the desktop nav
 * collapses to a hamburger that opens a mobile panel (the build doc requires a
 * working mobile menu; the design's look is preserved). Phone/nav from content.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { practiceNav, primaryNav } from "@/lib/nav";
import { firm } from "@/content/firm";

export function Header() {
  const [ddOpen, setDdOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setDdOpen(false); setMobileOpen(false); }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <Link className="brand-link" href="/" aria-label={`${firm.name} — home`}>
          <Logo height={30} />
        </Link>

        <nav className="nav" aria-label="Primary">
          <div className="nav__desktop">
            <div
              ref={ddRef}
              className="nav-dd"
              data-open={ddOpen}
              onMouseEnter={() => setDdOpen(true)}
              onMouseLeave={() => setDdOpen(false)}
            >
              <button
                className="nav-dd__btn"
                aria-haspopup="true"
                aria-expanded={ddOpen}
                onClick={(e) => { e.stopPropagation(); setDdOpen((v) => !v); }}
              >
                Practice Areas <span className="chev"><ChevronDown /></span>
              </button>
              <div className="nav-dd__menu" role="menu">
                {practiceNav.map((l) => (
                  <Link key={l.href} href={l.href} role="menuitem" onClick={() => setDdOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {primaryNav.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}

            <a className="nav__call" href={firm.phone.href}>
              <Phone /> {firm.phone.display}
            </a>
          </div>

          <Link className="btn btn--light" href="/contact/">
            Contact <span className="arr">↗</span>
          </Link>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="nav__mobile">
          <span className="mono-label">Practice Areas</span>
          {practiceNav.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <span className="mono-label">Firm</span>
          {primaryNav.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href={firm.phone.href} onClick={() => setMobileOpen(false)}>
            Call {firm.phone.display}
          </a>
          <Link className="btn btn--light" href="/contact/" onClick={() => setMobileOpen(false)}>
            Contact <span className="arr">↗</span>
          </Link>
        </div>
      )}
    </header>
  );
}
