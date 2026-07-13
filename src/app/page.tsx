import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { AreasServed } from "@/components/AreasServed";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { HOME_FAQ } from "@/lib/seo/home-faq";
import {
  faqPageSchema,
  localBusinessSchema,
  webSiteSchema,
} from "@/lib/seo/schema";

export const metadata = buildPageMetadata({
  title: "Plumber in DeBary, FL | Debary Plumbers — Fast, Affordable Service",
  description:
    "Need a plumber in DeBary, FL? Submit your info and a local pro calls you back ASAP. Emergency service available. Get your free callback now.",
  path: "/",
});

export default function Home() {
  return (
    <SiteLayout>
      <JsonLd
        data={[localBusinessSchema(), webSiteSchema(), faqPageSchema(HOME_FAQ)]}
      />
      <Hero />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <LeadForm />
        </div>
      </section>
      <TrustBadges />
      <Services />
      <HowItWorks />
      <AreasServed />
      <Testimonials />
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FAQSection faqs={HOME_FAQ} />
        </div>
      </section>
      <section className="border-t border-border bg-surface-soft py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-foreground">
            Trusted local plumbing help in DeBary
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Debary Plumbers connects homeowners in DeBary, Deltona, Orange City,
            and Volusia County with vetted, licensed plumbing professionals. Whether
            you need an emergency plumber for a burst pipe, drain cleaning for a
            stubborn clog, or water heater repair when you have no hot water — submit
            the form above and get a fast callback. No waiting on hold, no hassle.
            Our network plumbers know Central Florida homes, from aging polybutylene
            pipes to hard-water water heater issues. Serving DeBary ZIP 32713 and
            surrounding communities with upfront pricing and quality work.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
