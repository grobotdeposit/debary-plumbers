import Link from "next/link";
import { AREAS } from "@/lib/seo/areas";

export function AreasServed() {
  return (
    <section className="bg-surface-soft py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Areas we serve in Volusia & Seminole County
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Licensed plumbers serving DeBary and surrounding communities. Click your
          town for local plumbing information and fast callbacks.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-xl border border-border/80 bg-surface p-5 shadow-sm transition duration-200 hover:shadow-md"
            >
              <h3 className="font-semibold text-foreground">
                Plumber in {area.town}, FL
              </h3>
              <p className="mt-1 text-sm text-muted line-clamp-2">
                {area.intro.slice(0, 120)}…
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Also serving Enterprise, Osteen, Cassadaga, Pierson, and Lake Helen.{" "}
          <Link href="/service-areas" className="font-medium text-primary hover:underline">
            View all service areas
          </Link>
        </p>
      </div>
    </section>
  );
}
