"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="cursor-pointer text-lg font-bold tracking-tight text-primary transition duration-200 hover:text-primary-light sm:text-xl"
        >
          {SITE_NAME}
        </Link>
        <a
          href="#lead-form"
          className="btn-primary px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base"
        >
          Get Help Now
        </a>
      </div>
    </header>
  );
}
