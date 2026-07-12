import Image from "next/image";
import { SERVICE_AREA } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-surface to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            DeBary&apos;s trusted plumbing help
          </p>
          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Affordable plumbing in DeBary when you need it most
          </h1>
          <p className="mt-4 text-lg text-muted sm:text-xl">
            Fast, affordable local plumbing — get a call back ASAP. Submit your
            info and someone will get back to you right away.
          </p>
          <p className="mt-3 text-sm text-muted">{SERVICE_AREA}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-primary-light"
            >
              Get Help Now
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-8 py-3.5 text-base font-semibold text-foreground transition hover:bg-surface-soft"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-soft shadow-lg">
          <Image
            src="/images/hero-plumber.svg"
            alt="Licensed plumber fixing a pipe"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
