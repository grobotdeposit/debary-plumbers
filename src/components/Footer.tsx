import Link from "next/link";
import {
  SERVICE_AREA,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from "@/lib/site";
import { SERVICES } from "@/lib/seo/services";
import { AREAS } from "@/lib/seo/areas";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-primary">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-muted">{SERVICE_AREA}</p>
          <p className="mt-4 text-sm text-foreground">
            <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-primary hover:underline">
              {SITE_PHONE}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">
              {SITE_EMAIL}
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-muted hover:text-primary">
                  {s.h1.replace(" in DeBary, FL", "")}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-medium text-primary hover:underline">
                All services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground">Service Areas</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="text-muted hover:text-primary">
                  Plumber in {a.town}, FL
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="font-medium text-primary hover:underline">
                All areas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="text-muted hover:text-primary">About</Link></li>
            <li><Link href="/reviews" className="text-muted hover:text-primary">Reviews</Link></li>
            <li><Link href="/blog" className="text-muted hover:text-primary">Blog</Link></li>
            <li><Link href="/contact" className="text-muted hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 pt-6 text-center text-sm text-muted sm:px-6">
        <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
