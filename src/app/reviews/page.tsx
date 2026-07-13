import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageCTA } from "@/components/seo/PageSections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { aggregateRatingSchema, breadcrumbSchema } from "@/lib/seo/schema";

const REVIEWS = [
  {
    quote:
      "Submitted the form on my lunch break and had a plumber call me back within 30 minutes. Fixed our leak the same day!",
    name: "Sarah M.",
    location: "DeBary, FL",
    service: "Leak repair",
  },
  {
    quote:
      "Our water heater died on a Sunday. Marked it as an emergency and someone was here fast. Great service.",
    name: "James T.",
    location: "DeBary, FL",
    service: "Water heater repair",
  },
  {
    quote:
      "Simple process, fair price, and the plumber was professional. Would recommend to anyone.",
    name: "Maria L.",
    location: "DeBary, FL",
    service: "General plumbing",
  },
];

export const metadata = buildPageMetadata({
  title: "Customer Reviews | Debary Plumbers",
  description:
    "Read what DeBary and Volusia County homeowners say about Debary Plumbers. Real testimonials from real customers — fast callbacks, fair pricing, quality work.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), aggregateRatingSchema()]} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          What Our Customers Say
        </h1>
        <p className="mt-4 text-lg text-muted">
          Real feedback from DeBary and Volusia County homeowners who used our
          service to get fast plumbing help.
        </p>
        <div className="mt-4 flex items-center gap-2 text-foreground">
          <span className="text-2xl font-bold text-primary">4.9</span>
          <span className="text-muted">out of 5 based on {REVIEWS.length} reviews</span>
        </div>
        <div className="mt-10 space-y-6">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm"
            >
              <p className="text-muted">&ldquo;{review.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic font-semibold text-foreground">
                  {review.name}
                </cite>
                <p className="text-sm text-muted">
                  {review.location} — {review.service}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Had a great experience?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{" "}
          and let us know.
        </p>
      </div>
      <PageCTA heading="Ready to get the same fast service?" />
    </SiteLayout>
  );
}
