import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageCTA } from "@/components/seo/PageSections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { AREAS, SMALLER_COMMUNITIES } from "@/lib/seo/areas";

export const metadata = buildPageMetadata({
  title: "Plumbing Service Areas | DeBary, Deltona, Orange City & More",
  description:
    "Debary Plumbers serves DeBary, Deltona, Orange City, DeLand, Sanford, Lake Mary & Volusia County. Find your town and get a fast plumbing callback.",
  path: "/service-areas",
});

export default function ServiceAreasHubPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Plumbing Service Areas
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Licensed plumbers serving DeBary and communities across Volusia and
          Seminole County. Select your town for local plumbing information.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm transition duration-200 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-foreground">
                Plumber in {area.town}, FL
              </h2>
              <p className="mt-2 text-sm text-muted">{area.description}</p>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-muted">
          We also serve smaller communities including{" "}
          {SMALLER_COMMUNITIES.join(", ")}. Submit the form below for a callback
          in any of these areas.
        </p>
      </div>
      <PageCTA />
    </SiteLayout>
  );
}
