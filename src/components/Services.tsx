const services = [
  {
    name: "Leaks",
    description: "Burst pipes & water damage",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c0 0-6 7-6 11a6 6 0 1012 0c0-4-6-11-6-11z" />
      </svg>
    ),
  },
  {
    name: "Clogs",
    description: "Drains & sewer lines",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v4H4zM6 8v12M10 8v12M14 8v12M18 8v12" />
      </svg>
    ),
  },
  {
    name: "Water Heaters",
    description: "Repair & replacement",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4M8 6h8M6 10h12v10H6z" />
      </svg>
    ),
  },
  {
    name: "Installs",
    description: "Fixtures & appliances",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: "Emergencies",
    description: "24/7 urgent response",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Plumbing services we connect you with
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          From routine repairs to urgent emergencies — submit your info and get
          matched with a local pro fast.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{service.name}</h3>
              <p className="mt-1 text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#lead-form"
            className="inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-white transition hover:bg-accent/90"
          >
            Get Help Now
          </a>
        </div>
      </div>
    </section>
  );
}
