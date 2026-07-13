import type { ReactNode } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/seo/services";

const ICONS: Record<string, ReactNode> = {
  "emergency-plumbing": (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  ),
  "drain-cleaning": (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v4H4zM6 8v12M10 8v12M14 8v12M18 8v12" />
    </svg>
  ),
  "water-heater-repair": (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4M8 6h8M6 10h12v10H6z" />
    </svg>
  ),
  "water-heater-installation": (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4M8 6h8M6 10h12v10H6z" />
    </svg>
  ),
  "leak-detection-repair": (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c0 0-6 7-6 11a6 6 0 1012 0c0-4-6-11-6-11z" />
    </svg>
  ),
};

export function Services() {
  const featured = SERVICES.slice(0, 5);

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Plumbing services in DeBary, FL
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          From routine repairs to urgent emergencies — submit your info and get
          matched with a local pro fast.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="cursor-pointer rounded-2xl border border-border/80 bg-background p-6 text-center shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {ICONS[service.slug] ?? ICONS["leak-detection-repair"]}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {service.h1.replace(" in DeBary, FL", "")}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {service.description.slice(0, 80)}…
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="font-semibold text-primary hover:underline">
            View all plumbing services →
          </Link>
        </div>
        <div className="mt-10 text-center">
          <a href="/contact#lead-form" className="btn-primary px-8 py-3">
            Get Help Now
          </a>
        </div>
      </div>
    </section>
  );
}
