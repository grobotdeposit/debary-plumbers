const badges = [
  {
    title: "Licensed & Insured",
    description: "We connect you with qualified, vetted plumbing professionals.",
  },
  {
    title: "Fast Response",
    description: "Submit your info and get a call back ASAP — often within the hour.",
  },
  {
    title: "Affordable Rates",
    description: "Competitive pricing without cutting corners on quality.",
  },
  {
    title: "Local Service",
    description: "Serving DeBary and surrounding Volusia County communities.",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-surface-soft py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Why choose us
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Trusted, fast, and focused on getting you help when you need it.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                Trusted
              </div>
              <h3 className="font-semibold text-foreground">{badge.title}</h3>
              <p className="mt-2 text-sm text-muted">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
