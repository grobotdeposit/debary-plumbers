import type { FaqItem } from "@/lib/seo/schema";

type FAQSectionProps = {
  title?: string;
  faqs: FaqItem[];
};

export function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-border/80 bg-surface p-5 shadow-sm"
          >
            <summary className="cursor-pointer list-none font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-muted leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
