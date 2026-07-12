import Image from "next/image";
import { SERVICE_AREA } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface via-background to-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#bfdbfe_1px,transparent_1px),linear-gradient(to_bottom,#bfdbfe_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            DeBary&apos;s trusted plumbing help
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Affordable plumbing in DeBary when you need it most
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Fast, affordable local plumbing — get a call back ASAP. Submit your
            info and someone will get back to you right away.
          </p>
          <p className="mt-4 text-sm text-muted">{SERVICE_AREA}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#lead-form" className="btn-primary px-8 py-3.5 text-base">
              Get Help Now
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary px-8 py-3.5 text-base"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="w-full self-center overflow-hidden rounded-2xl border border-border/60 bg-surface-soft shadow-md">
          <Image
            src="/images/hero-plumber.jpg"
            alt="Licensed plumber explaining a kitchen sink repair to a homeowner"
            width={1200}
            height={900}
            className="block h-auto w-full"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
