import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, listingsByArea, getLocation, type AreaSlug } from "@/lib/listings";
import { getLocalGuide } from "@/lib/local-recommendations";
import { JsonLd, breadcrumb, localGuideSchema } from "@/lib/schema";

const GUIDE_SECTIONS = [
  { key: "eat", label: "Where to eat", kicker: "Food", schemaType: "Restaurant" },
  { key: "coffee", label: "Where for coffee", kicker: "Coffee", schemaType: "CafeOrCoffeeShop" },
  { key: "do", label: "Things to do", kicker: "Explore", schemaType: "TouristAttraction" },
] as const;

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug as AreaSlug);
  if (!loc) return { title: "Location not found" };
  return {
    title: `${loc.label} apartments`,
    description: loc.description,
    openGraph: {
      title: `${loc.label} apartments · Staylio`,
      description: loc.description,
      images: [loc.heroImage],
      url: `https://staylio.london/locations/${loc.slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug as AreaSlug);
  if (!loc) return notFound();
  const listings = listingsByArea(loc.slug);
  const guide = getLocalGuide(loc.slug);

  const guideSchemaItems = guide
    ? GUIDE_SECTIONS.flatMap((s) =>
        guide[s.key].map((r) => ({
          type: s.schemaType,
          name: r.name,
          description: `${r.note} (${r.where}, near Staylio ${loc.shortLabel}.)`,
        })),
      )
    : [];

  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Locations", url: "https://staylio.london/locations" },
            { name: loc.label, url: `https://staylio.london/locations/${loc.slug}` },
          ]),
          ...(guideSchemaItems.length ? [localGuideSchema(loc.label, guideSchemaItems)] : []),
        ]}
      />

      {/* Neighbourhood hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={loc.heroImage}
          alt={loc.label}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/25 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 text-white">
          <p className="text-sm uppercase tracking-widest text-stone-200">
            Strategic London location · ~{loc.propertyCountApprox} apartments
          </p>
          <h1 className="mt-3 font-serif text-5xl sm:text-7xl leading-[1.05]">{loc.label}</h1>
          <p className="mt-4 max-w-2xl text-stone-100 text-lg">{loc.description}</p>
        </div>
      </section>

      {/* Why stay here */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">Why stay in {loc.shortLabel}</h2>
        <p className="mt-6 text-lg text-stone-700 leading-relaxed">{loc.whyStayHere}</p>
      </section>

      {/* Nearby + transport */}
      <section className="bg-stone-100 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-stone-500">Nearby</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-stone-900">
              What&rsquo;s around the corner
            </h2>
            <ul className="mt-8 space-y-4">
              {loc.nearbyHighlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-stone-700">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-stone-900" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-stone-500">Transport</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-stone-900">
              Getting around
            </h2>
            <ul className="mt-8 space-y-4">
              {loc.transport.map((t) => (
                <li key={t} className="flex items-start gap-3 text-stone-700">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-stone-900" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local guide — food, coffee, things to do */}
      {guide && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-stone-500">Local guide</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-stone-900">
            Eating, drinking &amp; exploring in {loc.shortLabel}
          </h2>
          <p className="mt-4 max-w-2xl text-stone-600">
            A few places we send guests to — the spots we&rsquo;d point a friend towards if they
            were staying for the week.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {GUIDE_SECTIONS.map((s) => (
              <div key={s.key}>
                <p className="text-sm uppercase tracking-widest text-stone-500">{s.kicker}</p>
                <h3 className="mt-2 font-serif text-2xl text-stone-900">{s.label}</h3>
                <ul className="mt-6 space-y-6">
                  {guide[s.key].map((r) => (
                    <li key={r.name}>
                      <p className="font-medium text-stone-900">{r.name}</p>
                      <p className="text-sm uppercase tracking-wide text-stone-400">{r.where}</p>
                      <p className="mt-1 text-stone-700">{r.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-stone-500">
            Staying with us and want a tailored recommendation? Just{" "}
            <Link href="/contact" className="underline underline-offset-4">ask our team</Link>.
          </p>
        </section>
      )}

      {/* Apartments here */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-stone-100">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
          Staylio apartments in {loc.label}
        </h2>
        {listings.length === 0 ? (
          <p className="mt-6 text-stone-600">
            We&rsquo;re onboarding apartments here.{" "}
            <Link href="/contact" className="underline underline-offset-4">Enquire</Link>{" "}
            to be notified when they launch.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <Link
                key={l.slug}
                href={`/apartments/${l.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-stone-200 hover:shadow-lg transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.heroImage}
                  alt={`${l.title} interior`}
                  className="aspect-[4/3] w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-stone-900 group-hover:underline underline-offset-4">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">{l.shortDescription}</p>
                  <div className="mt-4 flex justify-between items-center text-sm text-stone-700">
                    <span>
                      {l.bedrooms > 0 ? `${l.bedrooms} bed` : "Studio"} · {l.bathrooms} bath{l.sizeSqm > 0 ? ` · ${l.sizeSqm} sqm` : ""}
                    </span>
                    <span className="font-medium text-stone-900">Save 10% or more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
