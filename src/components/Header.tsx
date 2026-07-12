"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold text-primary sm:text-xl">
          {SITE_NAME}
        </Link>
        <a
          href="#lead-form"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-light sm:px-5 sm:py-2.5 sm:text-base"
        >
          Get Help Now
        </a>
      </div>
    </header>
  );
}
