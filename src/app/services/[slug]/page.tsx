import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinks, PageCTA } from "@/components/seo/PageSections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/seo/schema";
import {
  SERVICES,
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/seo/services";
import { AREAS } from "@/lib/seo/areas";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.h1.replace(" in DeBary, FL", ""), path: `/services/${slug}` },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          serviceSchema(service.h1, service.intro, "DeBary"),
          faqPageSchema(service.faq),
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{service.h1}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{service.intro}</p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Signs you need this service</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {service.signs.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">What to expect</h2>
          <p className="mt-4 text-muted leading-relaxed">{service.whatToExpect}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Why DeBary homeowners choose us</h2>
          <p className="mt-4 text-muted leading-relaxed">{service.whyChoose}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Local expertise</h2>
          <p className="mt-4 text-muted leading-relaxed">{service.localAngle}</p>
        </section>

        <div className="mt-10">
          <FAQSection faqs={service.faq} />
        </div>

        <div className="mt-10 space-y-6">
          <InternalLinks
            title="Related plumbing services"
            links={service.relatedServices.map((s) => {
              const rel = SERVICES.find((x) => x.slug === s)!;
              return { href: `/services/${s}`, label: rel.h1 };
            })}
          />
          <InternalLinks
            title="Service areas"
            links={service.relatedAreas.map((s) => {
              const area = AREAS.find((x) => x.slug === s)!;
              return { href: `/service-areas/${s}`, label: `Plumber in ${area.town}, FL` };
            })}
          />
        </div>
      </article>
      <PageCTA heading={`Need ${service.h1.replace(" in DeBary, FL", "").toLowerCase()}?`} />
    </SiteLayout>
  );
}
