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
  AREAS,
  getAllAreaSlugs,
  getAreaBySlug,
} from "@/lib/seo/areas";
import { SERVICES } from "@/lib/seo/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return buildPageMetadata({
    title: area.title,
    description: area.description,
    path: `/service-areas/${slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: area.town, path: `/service-areas/${slug}` },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          serviceSchema(
            `Plumbing Services in ${area.town}, FL`,
            area.intro,
            area.town,
          ),
          faqPageSchema(area.faq),
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{area.h1}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{area.intro}</p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">About plumbing in {area.town}</h2>
          <p className="mt-4 text-muted leading-relaxed">{area.townDetail}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Our response promise</h2>
          <p className="mt-4 text-muted leading-relaxed">{area.responsePromise}</p>
        </section>

        {area.testimonial && (
          <blockquote className="mt-10 rounded-xl border border-border/80 bg-surface-soft p-6">
            <p className="text-muted">&ldquo;{area.testimonial.quote}&rdquo;</p>
            <footer className="mt-3 font-semibold text-foreground">
              {area.testimonial.name} — {area.testimonial.location}
            </footer>
          </blockquote>
        )}

        <div className="mt-10">
          <FAQSection title={`${area.town} plumbing FAQ`} faqs={area.faq} />
        </div>

        <div className="mt-10">
          <InternalLinks
            title={`Plumbing services in ${area.town}`}
            links={area.relatedServices.map((s) => {
              const svc = SERVICES.find((x) => x.slug === s)!;
              return { href: `/services/${s}`, label: svc.h1 };
            })}
          />
        </div>
      </article>
      <PageCTA heading={`Need a plumber in ${area.town}?`} />
    </SiteLayout>
  );
}
