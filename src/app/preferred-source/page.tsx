import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumb, faqSchema, speakableSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Make Staylio your preferred Google source",
  description:
    "Google now lets you choose which sites appear first in AI Overviews and AI Mode. Add Staylio in three taps and we'll show up at the top whenever you search London serviced apartments.",
  alternates: { canonical: "https://staylio.london/preferred-source" },
  openGraph: {
    title: "Make Staylio your preferred Google source",
    description:
      "Add Staylio to your Google Preferred Sources. Three taps. We appear first the next time you search.",
    url: "https://staylio.london/preferred-source",
    type: "article",
  },
};

const FAQS = [
  {
    question: "What are Google Preferred Sources?",
    answer:
      "A free Google feature, rolled out from late May 2026, that lets you choose which sites Google highlights first in AI Overviews and AI Mode. When you mark a site as preferred, links from it are clearly labelled and appear above other results in your AI answers. Over 345,000 sources have already been added by users.",
  },
  {
    question: "Does it cost anything?",
    answer:
      "No. It's a free Google account setting. Staylio doesn't pay Google for placement and you don't pay anything to add us. The choice stays on your Google account until you remove it.",
  },
  {
    question: "Why would I add Staylio?",
    answer:
      "Because when you next search 'serviced apartments London', 'long stay Marylebone', or anything similar, Staylio answers will appear at the top of your AI results instead of being buried below the big aggregators. Useful if you've stayed with us before, or if you book serviced apartments for your team and want consistent placement.",
  },
  {
    question: "Will Staylio see who added it?",
    answer:
      "No. Google does not share user-level data with sources. We know the total count from Google's public analytics, not who you are. Your reading history stays private.",
  },
  {
    question: "Can I add other sources too?",
    answer:
      "Yes. You can add as many preferred sources as you like. The Globe and Mail, Wirecutter, NHS, the BBC, and Staylio can all sit on the same list. Google blends them all into your personal AI results.",
  },
  {
    question: "How do I remove Staylio later?",
    answer:
      "Visit google.com/preferences/source and tap the star next to staylio.london to unmark it. Takes one tap.",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Open Google preferences",
    body: "Visit google.com/preferences/source in the same browser you're signed in to. Or search 'Google preferred sources' and pick the official Google result.",
    link: { href: "https://google.com/preferences/source", label: "Open google.com/preferences/source" },
  },
  {
    n: 2,
    title: "Add Staylio",
    body: "In the source picker, type 'staylio.london' (or paste the URL below). Tap the star icon next to our name to mark us as preferred.",
    link: { href: "https://staylio.london", label: "Copy staylio.london" },
  },
  {
    n: 3,
    title: "Done",
    body: "The next time you ask Google about London serviced apartments, monthly stays, or anything we cover, our answers float to the top with a 'Preferred' label.",
    link: null,
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to add Staylio as a Google Preferred Source",
  description:
    "Three-step guide to marking staylio.london as a preferred source in Google AI Overviews and AI Mode.",
  totalTime: "PT2M",
  tool: [{ "@type": "HowToTool", name: "A Google account signed in on your browser" }],
  step: STEPS.map((s) => ({
    "@type": "HowToStep",
    position: s.n,
    name: s.title,
    text: s.body,
    ...(s.link ? { url: s.link.href } : {}),
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Make Staylio your preferred Google source",
  description:
    "Add Staylio to Google Preferred Sources so our answers appear first in your AI Overviews.",
  image: "https://staylio.london/og.png",
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
  author: { "@type": "Organization", name: "Staylio", url: "https://staylio.london" },
  publisher: {
    "@type": "Organization",
    name: "Staylio",
    logo: { "@type": "ImageObject", url: "https://staylio.london/icon.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://staylio.london/preferred-source" },
};

export default function PreferredSourcePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Preferred Source", url: "https://staylio.london/preferred-source" },
          ]),
          articleSchema,
          howToSchema,
          faqSchema(FAQS),
          speakableSchema("https://staylio.london/preferred-source"),
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-stone-500">For repeat guests</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900 leading-[1.05]">
          Tell Google to show Staylio first.
        </h1>

        <div className="speakable mt-10 space-y-6 text-lg text-stone-700 leading-relaxed">
          <p>
            Google rolled out Preferred Sources in late May 2026. It lets you pick the sites you
            trust and have Google show those first in AI Overviews and AI Mode answers. People are
            twice as likely to click through to a preferred source. The setting is free, lives on
            your Google account, and takes two minutes to add.
          </p>
          <p>
            If you&rsquo;ve stayed with us before, or you book apartments for your team, marking
            Staylio as a preferred source means our answers float to the top whenever you search
            London serviced apartments, long stays in Marylebone, monthly rentals in Shoreditch,
            and so on. No ads, no algorithm guesswork. You choose, we appear.
          </p>
        </div>

        <h2 className="mt-20 font-serif text-3xl sm:text-4xl text-stone-900">Three steps</h2>
        <ol className="mt-10 space-y-10">
          {STEPS.map((s) => (
            <li key={s.n} className="relative pl-16">
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-stone-50 font-serif text-xl">
                {s.n}
              </span>
              <h3 className="font-serif text-2xl text-stone-900">{s.title}</h3>
              <p className="mt-3 text-stone-700 leading-relaxed">{s.body}</p>
              {s.link ? (
                <a
                  href={s.link.href}
                  className="mt-4 inline-block text-stone-900 underline underline-offset-4 decoration-stone-400 hover:decoration-stone-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.link.label}
                </a>
              ) : null}
            </li>
          ))}
        </ol>

        <h2 className="mt-20 font-serif text-3xl sm:text-4xl text-stone-900">Why it matters</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {[
            {
              t: "For repeat guests",
              b: "You already know what a Staylio stay looks like. Skip the comparison shopping. When you next plan a trip, Google leads with us instead of the OTAs.",
            },
            {
              t: "For corporate bookers",
              b: "Your team searches for accommodation independently. Adding Staylio to your work-profile Google account means they see our rates and inventory ahead of brokers. We never get to choose ranking ourselves. You can.",
            },
          ].map(({ t, b }) => (
            <div key={t} className="border border-stone-200 rounded-2xl p-6 bg-stone-50">
              <h3 className="font-serif text-xl text-stone-900">{t}</h3>
              <p className="mt-3 text-stone-700 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">Common questions</h2>
          <div className="mt-10 divide-y divide-stone-200">
            {FAQS.map((q) => (
              <details key={q.question} className="group py-6">
                <summary className="cursor-pointer font-serif text-xl text-stone-900 list-none flex items-start justify-between gap-4">
                  <span>{q.question}</span>
                  <span className="font-sans text-stone-400 text-base mt-1 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">{q.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl bg-stone-900 text-stone-50 p-10 sm:p-14">
          <h2 className="font-serif text-3xl text-stone-50">
            Already added us? Plan your next stay.
          </h2>
          <p className="mt-4 text-stone-300 leading-relaxed">
            WhatsApp Ali for the right apartment, the right week, the right rate. Or browse the
            full London catalogue first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/447375621453?text=Hi%20Staylio%2C%20I%27ve%20just%20added%20you%20as%20a%20Google%20Preferred%20Source.%20Can%20you%20help%20with%20a%20stay%3F"
              className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition"
            >
              WhatsApp Ali
            </a>
            <Link
              href="/apartments"
              className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition"
            >
              Browse apartments
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-widest text-stone-500">Already staying with us?</p>
          <h3 className="mt-2 font-serif text-2xl text-stone-900">
            Reach guest service direct.
          </h3>
          <p className="mt-3 text-stone-700 leading-relaxed">
            If you&rsquo;re in an apartment right now and need something fixed, replaced, or
            answered, WhatsApp the guest team. They&rsquo;re a separate line from sales and reply
            faster for in-stay matters.
          </p>
          <a
            href="https://wa.me/447304353640?text=Hi%2C%20I%27m%20staying%20with%20Staylio%20and%20need%20help."
            className="mt-4 inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm text-stone-50 hover:bg-stone-800 transition"
          >
            WhatsApp guest service on +44 7304 353 640
          </a>
        </section>

        <section className="mt-20 text-sm text-stone-500 leading-relaxed">
          <p>
            Sources: Google&rsquo;s announcement at{" "}
            <a
              href="https://blog.google/products-and-platforms/products/search/original-high-quality-content-search/"
              className="underline underline-offset-2 hover:text-stone-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog.google
            </a>
            ; setup at{" "}
            <a
              href="https://google.com/preferences/source"
              className="underline underline-offset-2 hover:text-stone-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              google.com/preferences/source
            </a>
            . Feature rolled out from late May 2026.
          </p>
        </section>
      </article>
    </>
  );
}
