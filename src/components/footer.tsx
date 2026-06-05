import Link from "next/link";
import { LOCATIONS } from "@/lib/listings";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-stone-900">Staylio</p>
            <p className="mt-3 text-sm text-stone-600">
              Serviced apartments across Central London. Fully equipped, all bills included, fortnightly housekeeping. Boutique, curated, warm.
            </p>
            <p className="mt-4 text-xs text-stone-500">
              Staylio Limited · Company No. 17012831<br />
              85 Frampton Street, London NW8 8NQ
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900">Strategic London locations</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="hover:text-stone-900">
                    {l.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900">Stays</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li><Link href="/apartments" className="hover:text-stone-900">All apartments</Link></li>
              <li><Link href="/corporate" className="hover:text-stone-900">Corporate stays</Link></li>
              <li><Link href="/apartments-vs-hotels" className="hover:text-stone-900">Apartments vs hotels</Link></li>
              <li><Link href="/faq" className="hover:text-stone-900">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li><a href="mailto:hello@staylio.london" className="hover:text-stone-900">hello@staylio.london</a></li>
              <li><Link href="/about" className="hover:text-stone-900">About Staylio</Link></li>
              <li><Link href="/contact" className="hover:text-stone-900">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Staylio Limited. All rights reserved.</p>
          <p>
            <Link href="/preferred-source" className="hover:text-stone-900 underline-offset-2 hover:underline">
              Tell Google to show Staylio first
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
