import {
  BUSINESS_DESCRIPTION,
  BUSINESS_HOURS,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export type FaqItem = { question: string; answer: string };

export type BreadcrumbItem = { name: string; path: string };

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    description: BUSINESS_DESCRIPTION,
    image: `${SITE_URL}/images/hero-plumber.jpg`,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "DeBary", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Deltona", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Orange City", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "DeLand", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Sanford", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Lake Mary", containedInPlace: { "@type": "State", name: "Florida" } },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Repair" } },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      url: `${SITE_URL}/contact`,
      contactType: "customer service",
      areaServed: "US-FL",
      availableLanguage: "English",
      hoursAvailable: BUSINESS_HOURS.weekdays,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: BUSINESS_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(name: string, description: string, area: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Plumber",
      name: SITE_NAME,
      url: SITE_URL,
      email: SITE_EMAIL,
    },
    areaServed: {
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    serviceType: name,
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah M." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Submitted the form on my lunch break and had a plumber call me back within 30 minutes. Fixed our leak the same day!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "James T." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Our water heater died on a Sunday. Marked it as an emergency and someone was here fast. Great service.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Maria L." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Simple process, fair price, and the plumber was professional. Would recommend to anyone.",
      },
    ],
  };
}

export function articleSchema(title: string, description: string, path: string, datePublished: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    image: `${SITE_URL}/images/hero-plumber.jpg`,
  };
}
