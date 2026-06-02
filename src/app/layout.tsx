import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd, organizationSchema } from "@/lib/schema";

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
    default: "Staylio — Serviced Apartments Across London",
    template: "%s · Staylio",
  },
  description:
    "Fully equipped serviced apartments in Canary Wharf, Kensington, and the City of London. All bills included, flexible stay lengths, real personal support.",
  openGraph: {
    title: "Staylio — Serviced Apartments Across London",
    description:
      "Fully equipped serviced apartments in Canary Wharf, Kensington, and the City of London.",
    url: "https://staylio.london",
    siteName: "Staylio",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased text-stone-900 bg-stone-50">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
