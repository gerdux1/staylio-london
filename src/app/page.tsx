import Link from "next/link";
import { LISTINGS, LOCATIONS } from "@/lib/listings";
import { JsonLd, breadcrumb } from "@/lib/schema";

const USPS = [
  {
    title: "Fully equipped from day one",
    body:
      "Every apartment comes with a fitted kitchen, fast Wi-Fi, smart TV, fresh linens, and toiletries. Move in and start living straight away.",
  },
  {
    title: "Locations across London",
    body:
      "From Canary Wharf and the City to Kensington and beyond — positioned for easy commutes and weekend exploration.",
  },
  {
    title: "Adaptable stay lengths",
    body:
      "Book for three nights or three months. Our pricing adjusts for longer stays, and there are no penalties for extending.",
  },
  {
    title: "Personal guest support",
    body:
      "Our team are real people who respond quickly and actually solve problems. No call centres. No ticket numbers.",
  },
  {
    title: "All bills included",
    body:
      "Electricity, water, heating, Wi-Fi, council tax — it is all in the price. One simple rate with no surprise charges.",
  },
  {
    title: "Self check-in",
    body:
      "Arrive on your schedule. Smart lock and keyless entry mean you can check in any time, day or night.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", url: "https://staylio.london" }])} />

      <section className="relative isolate overflow-hidden bg-stone-100">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-stone-500">London serviced apartments</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl text-stone-900 leading-[1.05]">
              Live in London on your own terms.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-stone-700">
              Fully equipped apartments with everything you need — whether you are here for a week, a
              month, or longer. More space than a hotel. More freedom than a rental.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/apartments"
                className="inline-flex items-center rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white hover:bg-stone-700 transition"
              >
                Browse apartments
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-stone-900 px-7 py-3 text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-white transition"
              >
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-stone-500">Why guests choose Staylio</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">
          More than a place to sleep.
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {USPS.map((u) => (
            <div key={u.title}>
              <h3 className="font-serif text-2xl text-stone-900">{u.title}</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-500">Featured apartments</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">A space for every stay.</h2>
            </div>
            <Link href="/apartments" className="text-sm font-medium text-stone-900 underline underline-offset-4">
              View all apartments →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {LISTINGS.map((l) => (
              <Link
                key={l.slug}
                href={`/apartments/${l.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-stone-200 hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] bg-stone-200" aria-hidden />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-stone-500">{l.areaLabel}</p>
                  <h3 className="mt-2 font-serif text-2xl text-stone-900 group-hover:underline underline-offset-4">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">{l.shortDescription}</p>
                  <div className="mt-4 flex justify-between text-sm text-stone-700">
                    <span>{l.bedrooms} bed · {l.bathrooms} bath · {l.sizeSqm} sqm</span>
                    <span className="font-medium">from £{l.fromGbpPerNight}/night</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-stone-500">Our London locations</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">Choose your neighbourhood.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group rounded-2xl border border-stone-200 p-8 hover:bg-stone-100 transition"
            >
              <h3 className="font-serif text-3xl text-stone-900">{loc.label}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{loc.description}</p>
              <p className="mt-6 text-sm font-medium text-stone-900 underline underline-offset-4">
                View {loc.label} apartments →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 text-stone-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-widest text-stone-400">Serviced apartments vs hotels</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">More room. Lower cost. Real kitchens.</h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-stone-700 text-sm uppercase tracking-widest text-stone-400">
                  <th className="py-4 pr-6">Feature</th>
                  <th className="py-4 pr-6">Staylio apartment</th>
                  <th className="py-4">Typical hotel</th>
                </tr>
              </thead>
              <tbody className="text-stone-100">
                {[
                  ["Average living space", "45–80 sqm", "20–30 sqm"],
                  ["Private kitchen", "Yes, fully equipped", "No"],
                  ["In-unit laundry", "Yes", "No"],
                  ["Cost for 7+ night stay", "15–20% less", "Standard rate"],
                  ["Guest support", "Named team members", "Reception desk"],
                  ["Family suitability", "Excellent — multi-bedroom", "Limited"],
                ].map(([f, s, h]) => (
                  <tr key={f} className="border-b border-stone-800 last:border-0">
                    <td className="py-4 pr-6 text-stone-300">{f}</td>
                    <td className="py-4 pr-6">{s}</td>
                    <td className="py-4 text-stone-400">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12">
            <Link
              href="/apartments-vs-hotels"
              className="inline-flex items-center text-sm font-medium text-stone-100 underline underline-offset-4"
            >
              See the full comparison →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900">Ready to book your London stay?</h2>
        <p className="mt-6 text-stone-700">
          Whether you are visiting for work, relocating your family, or simply need a comfortable base in
          London — Staylio has an apartment that fits.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/apartments"
            className="inline-flex rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white hover:bg-stone-700 transition"
          >
            Browse apartments
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-stone-900 px-8 py-3 text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-white transition"
          >
            Enquire now
          </Link>
        </div>
      </section>
    </>
  );
}
