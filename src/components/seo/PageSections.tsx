import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";

type PageCTAProps = {
  heading?: string;
  subtext?: string;
};

export function PageCTA({
  heading = "Get a plumber to call you back",
  subtext = "Fill out the form and a licensed local plumber will reach out ASAP.",
}: PageCTAProps) {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          {heading}
        </h2>
        <p className="mb-8 text-center text-muted">{subtext}</p>
        <LeadForm />
      </div>
    </section>
  );
}

type InternalLinksProps = {
  title: string;
  links: { href: string; label: string }[];
};

export function InternalLinks({ title, links }: InternalLinksProps) {
  return (
    <section className="rounded-xl border border-border/80 bg-surface-soft p-6">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="cursor-pointer text-primary transition duration-200 hover:text-primary-light hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
