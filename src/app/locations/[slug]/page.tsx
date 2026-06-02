import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, listingsByArea, getLocation, type Area } from "@/lib/listings";
import { JsonLd, breadcrumb } from "@/lib/schema";

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug as Area);
  if (!loc) return { title: "Location not found" };
  return {
    title: `${loc.label} apartments`,
    description: loc.description,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug as Area);
  if (!loc) return notFound();
  const listings = listingsByArea(loc.slug);

  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://staylio.london" },
          { name: "Locations", url: "https://staylio.london/apartments" },
          {
            name: loc.label,
            url: `https://staylio.london/locations/${loc.slug}`,
          },
        ])}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-stone-500">Location</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">{loc.label}</h1>
        <p className="mt-6 max-w-2xl text-stone-700 leading-relaxed">{loc.description}</p>

        <h2 className="mt-20 font-serif text-3xl text-stone-900">
          Staylio apartments in {loc.label}
        </h2>
        {listings.length === 0 ? (
          <p className="mt-6 text-stone-600">
            We&rsquo;re onboarding apartments here. <Link href="/contact" className="underline underline-offset-4">Enquire</Link> to be notified when they launch.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <Link
                key={l.slug}
                href={`/apartments/${l.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-stone-200 hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] bg-stone-200" aria-hidden />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-stone-900 group-hover:underline underline-offset-4">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">{l.shortDescription}</p>
                  <div className="mt-4 flex justify-between text-sm text-stone-700">
                    <span>
                      {l.bedrooms} bed · {l.bathrooms} bath · {l.sizeSqm} sqm
                    </span>
                    <span className="font-medium">from £{l.fromGbpPerNight}/night</span>
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
