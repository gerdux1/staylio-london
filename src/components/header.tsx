"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [open, setOpen] = useState(false);

  // Close mobile menu on route changes + escape key + lock body scroll when open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Staylio · home"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-main.png"
            alt="Staylio"
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm text-stone-700">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-stone-900 transition">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-700 transition"
        >
          Enquire
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-stone-900 hover:bg-stone-100 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-stone-200 bg-white`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-1 text-base">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-stone-800 hover:bg-stone-100 transition"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-700 transition"
          >
            Enquire
          </Link>
          <a
            href="https://wa.me/447304353640?text=Hi%20Ali%2C%20I%27d%20like%20to%20enquire%20about%20a%20Staylio%20stay."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:bg-[#1ebe5b] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004c-1.95 0-3.866-.524-5.535-1.516l-.397-.235-4.118 1.08 1.099-4.014-.258-.41a9.794 9.794 0 01-1.5-5.23c0-5.418 4.413-9.83 9.832-9.83 2.625 0 5.092 1.024 6.948 2.882a9.825 9.825 0 012.876 6.954c-.003 5.418-4.416 9.83-9.834 9.83zM20.52 3.449C18.245 1.245 15.241.0001 12.057.0001c-6.554 0-11.89 5.336-11.892 11.893 0 2.096.549 4.142 1.594 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.337 11.893-11.894a11.821 11.821 0 00-3.456-8.451z" />
            </svg>
            WhatsApp Ali
          </a>
        </nav>
      </div>
    </header>
  );
}
