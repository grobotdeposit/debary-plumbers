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
          <a href="tel:+15551234567" className="font-semibold text-primary hover:underline">
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
