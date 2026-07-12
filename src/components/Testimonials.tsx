const testimonials = [
  {
    quote:
      "Submitted the form on my lunch break and had a plumber call me back within 30 minutes. Fixed our leak the same day!",
    name: "Sarah M.",
    location: "DeBary, FL",
  },
  {
    quote:
      "Our water heater died on a Sunday. Marked it as an emergency and someone was here fast. Great service.",
    name: "James T.",
    location: "DeBary, FL",
  },
  {
    quote:
      "Simple process, fair price, and the plumber was professional. Would recommend to anyone.",
    name: "Maria L.",
    location: "DeBary, FL",
  },
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          What customers say
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-muted">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic font-semibold text-foreground">
                  {t.name}
                </cite>
                <p className="text-sm text-muted">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#lead-form"
            className="inline-flex rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-light"
          >
            Get Help Now
          </a>
        </div>
      </div>
    </section>
  );
}
