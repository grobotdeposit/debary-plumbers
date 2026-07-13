import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageCTA } from "@/components/seo/PageSections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { BUSINESS_HOURS, SERVICE_AREA, SITE_NAME } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About Debary Plumbers | Trusted Local Plumbing Network",
  description:
    "Learn how Debary Plumbers connects DeBary and Volusia County homeowners with vetted, licensed local plumbers. Fast callbacks, upfront pricing, quality work.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          About {SITE_NAME}
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          {SITE_NAME} is a local plumbing connection service based in DeBary,
          Florida. We help homeowners across Volusia and Seminole County get
          fast, reliable plumbing help without the frustration of calling
          multiple companies or waiting on hold.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">How we work</h2>
          <p className="mt-4 text-muted leading-relaxed">
            When you submit the lead form on our website, we connect you with a
            vetted, licensed plumber in your area. That plumber calls you back —
            usually within the hour — to understand your problem, provide an
            upfront estimate, and schedule service. You pay the plumber directly
            for the work performed. There is no fee to use our service.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Our standards</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Every plumber in our network holds a valid Florida plumbing license</li>
            <li>All professionals carry liability insurance</li>
            <li>Upfront pricing before any work begins</li>
            <li>Emergency requests prioritized for fastest response</li>
            <li>Serving {SERVICE_AREA}</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Business hours</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>Monday–Friday: {BUSINESS_HOURS.weekdays}</li>
            <li>Saturday: {BUSINESS_HOURS.saturday}</li>
            <li>Sunday: {BUSINESS_HOURS.sunday}</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Why DeBary?</h2>
          <p className="mt-4 text-muted leading-relaxed">
            DeBary sits at the heart of Volusia County — close to Deltona, Orange
            City, Sanford, and the I-4 corridor. We built this service for our
            neighbors: homeowners who need a plumber they can trust, at a fair
            price, without the runaround. Whether you live in Glen Abbey, near
            DeBary Hall, or along the St. Johns River, we are here to help.
          </p>
        </section>
      </article>
      <PageCTA />
    </SiteLayout>
  );
}
