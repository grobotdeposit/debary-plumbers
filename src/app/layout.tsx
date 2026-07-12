import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — Fast, Affordable Local Plumbing`,
  description:
    "Need a plumber in DeBary fast? Submit your info and get a call back ASAP. Leaks, clogs, water heaters, emergencies — Debary Plumbers connects you with local pros.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${SITE_NAME} — Get a Plumber to Call You Back`,
    description:
      "Fast, affordable local plumbing in DeBary and Volusia County. Submit the form and someone will reach out ASAP.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
