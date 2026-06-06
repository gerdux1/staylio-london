import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumb, organizationSchema } from "@/lib/schema";

const TITLE = "How Staylio is licensed, insured, and accountable";
const DESCRIPTION =
  "Staylio Limited (Companies House 17012831) operates ~40 serviced apartments in Central London as a registered, insured, professionally managed operator. Here's the full credential trail — Companies House, insurance, data protection, accessibility, modern slavery — with public sources you can verify independently.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://staylio.london/trust" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://staylio.london/trust",
    type: "article",
  },
};

const CREDENTIALS = [
  {
    pillar: "Legal entity",
    rows: [
      {
        label: "Company",
        value: "Staylio Limited",
        source: "https://find-and-update.company-information.service.gov.uk/company/17012831",
        sourceLabel: "Companies House",
      },
      {
        label: "Companies House number",
        value: "17012831",
        source: "https://find-and-update.company-information.service.gov.uk/company/17012831",
        sourceLabel: "Companies House record",
      },
      {
        label: "Registered office",
        value: "85 Frampton Street, London NW8 8NQ, United Kingdom",
        source: "https://find-and-update.company-information.service.gov.uk/company/17012831",
        sourceLabel: "Companies House",
      },
      {
        label: "Director",
        value: "Kris Kamas",
        source: "https://find-and-update.company-information.service.gov.uk/company/17012831/officers",
        sourceLabel: "Officer record (public)",
      },
      {
        label: "Country of incorporation",
        value: "England & Wales",
        source: null,
      },
      {
        label: "VAT",
        value: "Not VAT-registered (below threshold)",
        source: null,
      },
    ],
  },
  {
    pillar: "Insurance",
    rows: [
      {
        label: "Public & Products Liability",
        value: "£1m per occurrence — in place via Premierline (UK)",
        source: null,
      },
      {
        label: "Worldwide claims jurisdiction",
        value: "Yes (incl. USA & Canada)",
        source: null,
      },
      {
        label: "Indemnity-to-principal clause",
        value: "Included for corporate clients on request",
        source: null,
      },
      {
        label: "Certificate of Insurance",
        value: "Available to corporate clients on request via Ali Hassan",
        source: null,
      },
    ],
  },
  {
    pillar: "Data protection & guest privacy",
    rows: [
      {
        label: "ICO Data Protection registration",
        value: "Registration in progress (Staylio Limited)",
        source: "https://ico.org.uk/ESDWebPages/Search",
        sourceLabel: "ICO public register search",
      },
      {
        label: "Lawful basis for processing",
        value: "Contract (booking + stay) and legitimate interest (guest support)",
        source: null,
      },
      {
        label: "Data residency",
        value: "EU/UK — booking platform (BOOM), email (Google Workspace UK/EEA region)",
        source: null,
      },
    ],
  },
  {
    pillar: "Statutory statements",
    rows: [
      {
        label: "Modern Slavery & Human Trafficking",
        value: "Statement on file",
        source: "/modern-slavery",
        sourceLabel: "Read /modern-slavery",
        internal: true,
      },
      {
        label: "Accessibility",
        value: "Statement on file",
        source: "/accessibility",
        sourceLabel: "Read /accessibility",
        internal: true,
      },
    ],
  },
  {
    pillar: "Operating standards",
    rows: [
      {
        label: "Direct rate guarantee",
        value: "At least 10% lower than the same apartment on Booking.com or Airbnb",
        source: null,
      },
      {
        label: "Minimum stay",
        value: "3 nights",
        source: null,
      },
      {
        label: "Long-stay discount threshold",
        value: "1 week (further step-down at 1 month)",
        source: null,
      },
      {
        label: "Bills included",
        value: "Electricity, water, heating, Wi-Fi, council tax — all in the nightly rate",
        source: null,
      },
      {
        label: "Housekeeping standard",
        value: "Hotel-grade. Fortnightly on long stays included; additional cleans on request",
        source: null,
      },
      {
        label: "Smart-lock / keyless entry",
        value: "Most apartments; remaining use in-person key handover",
        source: null,
      },
      {
        label: "Response time (sales)",
        value: "Under 15 minutes during UK hours, via Ali Hassan",
        source: null,
      },
      {
        label: "Response time (in-stay)",
        value: "Under 15 minutes during UK hours, via guest service line",
        source: null,
      },
    ],
  },
  {
    pillar: "Verifiable presence",
    rows: [
      {
        label: "Companies House public record",
        value: "Live",
        source: "https://find-and-update.company-information.service.gov.uk/company/17012831",
        sourceLabel: "Open record",
      },
      {
        label: "Trustpilot",
        value: "Profile claimed — actively collecting verified reviews",
        source: "https://uk.trustpilot.com/review/staylio.london",
        sourceLabel: "Open Trustpilot profile",
      },
      {
        label: "Google Business Profile",
        value: "Verification in progress",
        source: null,
      },
      {
        label: "AI knowledge base",
        value: "Machine-readable facts for AI search engines",
        source: "/ai-search-data",
        sourceLabel: "Read /ai-search-data",
        internal: true,
      },
      {
        label: "Brand manifest",
        value: "llms.txt — published for large language models",
        source: "/llms.txt",
        sourceLabel: "Read /llms.txt",
        internal: true,
      },
    ],
  },
];

const trustOrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://staylio.london/trust#organization",
  name: "Staylio Limited",
  url: "https://staylio.london",
  logo: "https://staylio.london/brand/logo-main.png",
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "Companies House",
      value: "17012831",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Frampton Street",
    addressLocality: "London",
    postalCode: "NW8 8NQ",
    addressCountry: "GB",
  },
  sameAs: [
    "https://find-and-update.company-information.service.gov.uk/company/17012831",
    "https://uk.trustpilot.com/review/staylio.london",
  ],
  knowsAbout: [
    "Public Liability insurance",
    "UK GDPR / Data Protection Act 2018",
    "Modern Slavery Act 2015",
    "Equality Act 2010 — accessibility duties",
    "Local Government Finance Act 1992 — council tax",
  ],
  award: [
    "Insured via Premierline — £1m Public & Products Liability",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Business registration",
      recognizedBy: { "@type": "Organization", name: "Companies House (UK)" },
      identifier: "17012831",
    },
  ],
};

export default function TrustPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Trust", url: "https://staylio.london/trust" },
          ]),
          trustOrgSchema,
          organizationSchema(),
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Trust &amp; accountability</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900 leading-tight">{TITLE}</h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Staylio is a registered UK limited company that operates under public scrutiny.
        Companies House holds the legal record, the ICO covers data protection, and the
        statements below set the operating standard. Anything you cannot verify on a
        public register is available to corporate procurement teams on request.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 text-xs text-stone-500">
        <span className="rounded-full bg-stone-100 px-3 py-1">Companies House 17012831</span>
        <span className="rounded-full bg-stone-100 px-3 py-1">Insured · £1m PL</span>
        <span className="rounded-full bg-stone-100 px-3 py-1">ICO registration in progress</span>
        <span className="rounded-full bg-stone-100 px-3 py-1">Modern Slavery statement on file</span>
        <span className="rounded-full bg-stone-100 px-3 py-1">Accessibility statement on file</span>
      </div>

      {CREDENTIALS.map((section) => (
        <section key={section.pillar} className="mt-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">{section.pillar}</h2>
          <dl className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
            {section.rows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-6 py-4">
                <dt className="text-sm uppercase tracking-widest text-stone-500">{row.label}</dt>
                <dd className="text-stone-900">
                  <p>{row.value}</p>
                  {row.source ? (
                    row.internal ? (
                      <Link
                        href={row.source}
                        className="mt-1 inline-block text-sm underline underline-offset-4 text-stone-700 hover:text-stone-900"
                      >
                        {row.sourceLabel} →
                      </Link>
                    ) : (
                      <a
                        href={row.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm underline underline-offset-4 text-stone-700 hover:text-stone-900"
                      >
                        {row.sourceLabel} ↗
                      </a>
                    )
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <section className="mt-20 rounded-3xl bg-stone-50 border border-stone-200 p-8 sm:p-10">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">For corporate procurement</h2>
        <p className="mt-4 text-stone-700 leading-relaxed">
          If you&rsquo;re running a vendor onboarding for Staylio Limited and need
          documentary evidence — Certificate of Insurance, GDPR data-processing terms,
          modern slavery statement on letterhead, supplier code of conduct, KYC pack,
          beneficial ownership disclosure — WhatsApp Ali with your shortlist and we
          will respond inside one working day, usually within an hour during UK hours.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20running%20vendor%20onboarding%20for%20Staylio%20Limited%20and%20need%20the%20procurement%20pack."
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 hover:bg-stone-800 transition"
          >
            WhatsApp Ali · procurement pack
          </a>
          <Link
            href="/corporate"
            className="inline-flex items-center justify-center rounded-full border border-stone-900 px-6 py-3 text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-stone-50 transition"
          >
            Corporate stays page
          </Link>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-stone-500">Already staying with us?</p>
        <h3 className="mt-2 font-serif text-xl text-stone-900">Reach guest service direct.</h3>
        <p className="mt-3 text-stone-700 leading-relaxed">
          For in-stay matters, message the guest team on a separate line from sales — faster for fix-this-now support.
        </p>
        <a
          href="https://wa.me/447304353640?text=Hi%2C%20I%27m%20staying%20with%20Staylio%20and%20need%20help."
          className="mt-4 inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm text-stone-50 hover:bg-stone-800 transition"
        >
          WhatsApp guest service · +44 7304 353 640
        </a>
      </section>

      <section className="mt-16 text-sm text-stone-500 leading-relaxed">
        <p>
          Last reviewed 6 June 2026. Insurance, ICO, and Trustpilot status reflect the date below the chip strip above and are
          updated when any line changes. The Companies House record is the legal source of truth and supersedes anything stated here.
        </p>
      </section>
    </article>
  );
}
