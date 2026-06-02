import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LISTINGS, getListing } from "@/lib/listings";
import { JsonLd, breadcrumb, listingSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) return { title: "Apartment not found" };
  return {
    title: listing.title,
    description: listing.shortDescription,
    openGraph: {
      title: `${listing.title} · Staylio`,
      description: listing.shortDescription,
      url: `https://staylio.london/apartments/${listing.slug}`,
      type: "website",
    },
  };
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) return notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Apartments", url: "https://staylio.london/apartments" },
            {
              name: listing.title,
              url: `https://staylio.london/apartments/${listing.slug}`,
            },
          ]),
          listingSchema(listing),
        ]}
      />

      <article className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-stone-500">{listing.areaLabel}</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">{listing.title}</h1>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone-700">
          <span>{listing.bedrooms} bedroom{listing.bedrooms > 1 ? "s" : ""}</span>
          <span>{listing.bathrooms} bathroom{listing.bathrooms > 1 ? "s" : ""}</span>
          <span>Sleeps {listing.maxGuests}</span>
          <span>{listing.sizeSqm} sqm</span>
          <span className="font-medium text-stone-900">From £{listing.fromGbpPerNight}/night</span>
        </div>

        <div className="mt-10 aspect-[16/9] rounded-2xl bg-stone-200" aria-hidden />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-stone-900">About this apartment</h2>
            <p className="mt-5 text-stone-700 leading-relaxed">{listing.longDescription}</p>

            <h2 className="mt-12 font-serif text-3xl text-stone-900">What&rsquo;s included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-stone-700">
              {listing.amenities.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <span className="mt-1 text-stone-900">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-stone-200 p-6 h-fit bg-stone-50">
            <p className="text-sm text-stone-600">From</p>
            <p className="mt-1 font-serif text-3xl text-stone-900">
              £{listing.fromGbpPerNight}
              <span className="text-base text-stone-500"> /night</span>
            </p>
            <p className="mt-2 text-xs text-stone-500">
              All bills included. Longer stays priced down.
            </p>
            <Link
              href={`/contact?listing=${listing.slug}`}
              className="mt-6 inline-flex w-full justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-700 transition"
            >
              Enquire about this apartment
            </Link>
            <Link
              href="/apartments"
              className="mt-3 inline-flex w-full justify-center text-sm text-stone-700 hover:text-stone-900 underline underline-offset-4"
            >
              View all apartments
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}
