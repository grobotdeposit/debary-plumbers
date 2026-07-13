export const SITE_NAME = "Debary Plumbers";
export const SITE_DOMAIN = "debaryplumbers.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_EMAIL = "leads@debaryplumbers.com";

export const SERVICE_AREA =
  "Serving DeBary, Orange City, Deltona, and surrounding Volusia County communities";

export const SERVICE_AREA_TOWNS = [
  "DeBary",
  "Deltona",
  "Orange City",
  "DeLand",
  "Sanford",
  "Lake Mary",
  "Enterprise",
  "Osteen",
  "Cassadaga",
] as const;

export const BUSINESS_HOURS = {
  weekdays: "7:00 AM – 7:00 PM",
  saturday: "8:00 AM – 5:00 PM",
  sunday: "Emergency callbacks available",
} as const;

/** No street address — lead-gen site; areaServed used in schema instead. */
export const BUSINESS_DESCRIPTION =
  "Debary Plumbers connects homeowners in DeBary and Volusia County with vetted, licensed local plumbing professionals. Submit your info and get a fast callback.";
