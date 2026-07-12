import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
