import { SiteLayout } from "@/components/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo/schema";
import {
  BUSINESS_HOURS,
  SERVICE_AREA,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact Debary Plumbers | Get a Fast Plumbing Callback",
  description:
    "Contact Debary Plumbers for fast plumbing help in DeBary, FL and Volusia County. Submit the form or call for emergency and routine plumbing service.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), localBusinessSchema()]} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Contact {SITE_NAME}
        </h1>
        <p className="mt-4 text-lg text-muted">
          Submit the form below and a licensed local plumber will call you back
          ASAP. For emergencies, check &ldquo;This is an emergency&rdquo; on the form.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/80 bg-surface-soft p-5">
            <h2 className="font-semibold text-foreground">Phone</h2>
            <a href={`tel:${SITE_PHONE_TEL}`} className="mt-1 block text-primary hover:underline">
              {SITE_PHONE}
            </a>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-soft p-5">
            <h2 className="font-semibold text-foreground">Email</h2>
            <a href={`mailto:${SITE_EMAIL}`} className="mt-1 block text-primary hover:underline">
              {SITE_EMAIL}
            </a>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-soft p-5">
            <h2 className="font-semibold text-foreground">Service area</h2>
            <p className="mt-1 text-sm text-muted">{SERVICE_AREA}</p>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-soft p-5">
            <h2 className="font-semibold text-foreground">Hours</h2>
            <p className="mt-1 text-sm text-muted">
              Mon–Fri: {BUSINESS_HOURS.weekdays}<br />
              Sat: {BUSINESS_HOURS.saturday}<br />
              Sun: {BUSINESS_HOURS.sunday}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <LeadForm />
        </div>
      </div>
    </SiteLayout>
  );
}
