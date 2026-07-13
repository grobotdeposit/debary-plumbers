import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageCTA } from "@/components/seo/PageSections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SERVICES } from "@/lib/seo/services";

export const metadata = buildPageMetadata({
  title: "Plumbing Services in DeBary, FL | Debary Plumbers",
  description:
    "Full-service plumbing in DeBary, FL — emergency repairs, drain cleaning, water heaters, leak detection, repiping, sewer lines & more. Fast callback.",
  path: "/services",
});

export default function ServicesHubPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Our DeBary Plumbing Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Licensed local plumbers for every job — from emergency burst pipes to
          water heater installation. Click a service to learn more, then submit
          the form for a fast callback.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm transition duration-200 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-foreground">{service.h1}</h2>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <PageCTA />
    </SiteLayout>
  );
}
