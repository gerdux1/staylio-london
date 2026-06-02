import Link from "next/link";

const NAV = [
  { href: "/apartments", label: "Apartments" },
  { href: "/locations", label: "Locations" },
  { href: "/corporate", label: "Corporate" },
  { href: "/apartments-vs-hotels", label: "Apartments vs Hotels" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Staylio · home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-main.png"
            alt="Staylio"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-stone-700">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-stone-900 transition">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden sm:inline-flex rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-700 transition"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
