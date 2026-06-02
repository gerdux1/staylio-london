import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-stone-900">Staylio</p>
            <p className="mt-3 text-sm text-stone-600">
              Serviced apartments across London. Fully equipped, all bills included, flexible stay lengths.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900">Locations</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li><Link href="/locations/canary-wharf" className="hover:text-stone-900">Canary Wharf</Link></li>
              <li><Link href="/locations/kensington" className="hover:text-stone-900">Kensington</Link></li>
              <li><Link href="/locations/city-of-london" className="hover:text-stone-900">City of London</Link></li>
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
              <li><a href="tel:+447802666672" className="hover:text-stone-900">+44 7802 666672</a></li>
              <li><Link href="/about" className="hover:text-stone-900">About Staylio</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-6 flex flex-col sm:flex-row justify-between text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Staylio. All rights reserved.</p>
          <p>London serviced apartments — fully equipped, all bills included.</p>
        </div>
      </div>
    </footer>
  );
}
