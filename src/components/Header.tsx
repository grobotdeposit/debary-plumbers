"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_NAME } from "@/lib/site";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="cursor-pointer text-lg font-bold tracking-tight text-primary transition duration-200 hover:text-primary-light sm:text-xl"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-foreground transition duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/contact#lead-form"
            className="btn-primary hidden px-4 py-2 text-sm sm:inline-flex sm:px-5 sm:py-2.5 sm:text-base"
          >
            Get Help Now
          </a>
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border/80 bg-surface px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block cursor-pointer font-medium text-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/contact#lead-form"
                className="btn-primary inline-flex px-5 py-2.5 text-sm"
                onClick={() => setOpen(false)}
              >
                Get Help Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
