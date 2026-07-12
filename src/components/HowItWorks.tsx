const steps = [
  {
    number: "1",
    title: "Submit the form",
    description: "Tell us what's going on — it only takes a minute.",
  },
  {
    number: "2",
    title: "We match you with a pro",
    description: "We connect you with a qualified local plumber.",
  },
  {
    number: "3",
    title: "They call you back fast",
    description: "Expect a call ASAP — especially for emergencies.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          How it works
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Three simple steps to get plumbing help — no hassle, no waiting on hold.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-sm transition duration-200">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
