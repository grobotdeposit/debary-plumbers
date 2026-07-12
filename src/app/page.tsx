import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <LeadForm />
          </div>
        </section>
        <Services />
        <HowItWorks />
        <TrustBadges />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
