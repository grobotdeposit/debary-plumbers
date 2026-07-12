import { SERVICE_AREA, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-lg font-bold text-primary">{SITE_NAME}</p>
        <p className="mt-2 text-muted">{SERVICE_AREA}</p>
        <p className="mt-2 text-muted">
          Submit your info and get a call back ASAP.
        </p>
        <p className="mt-4 text-foreground">
          Call us:{" "}
          <a
            href="tel:+15551234567"
            className="cursor-pointer font-semibold text-primary transition duration-200 hover:text-primary-light hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
          >
            (555) 123-4567
          </a>
        </p>
        <p className="mt-6 text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
