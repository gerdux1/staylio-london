import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd, organizationSchema, websiteSchema, serviceSchemas } from "@/lib/schema";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://staylio.london"),
  title: {
    default: "Staylio · Serviced Apartments Across London",
    template: "%s · Staylio",
  },
  description:
    "Fully equipped serviced apartments in Canary Wharf, Kensington, and the City of London. All bills included, flexible stay lengths, real personal support.",
  openGraph: {
    title: "Staylio · Serviced Apartments Across London",
    description:
      "Fully equipped serviced apartments in Canary Wharf, Kensington, and the City of London.",
    url: "https://staylio.london",
    siteName: "Staylio",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // Search Console + Bing Webmaster verification tokens.
  // Once the operator completes the sign-up + grabs the actual tokens from
  // search.google.com/search-console + bing.com/webmasters, replace the
  // PLACEHOLDER values below. The HTML-tag verification method is the easiest
  // because we don't need DNS access to ship.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased text-stone-900 bg-stone-50">
        <JsonLd data={[organizationSchema(), websiteSchema(), ...serviceSchemas()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script
          defer
          data-domain="staylio.london"
          src="https://plausible.io/js/script.outbound-links.tagged-events.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
