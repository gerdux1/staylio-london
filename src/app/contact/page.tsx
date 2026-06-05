import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { JsonLd, aliPersonSchema, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with Staylio. WhatsApp Ali Hassan, our Direct Bookings lead, on +44 7375 621453 for sales. In-stay guests: guest service on +44 7304 353 640. Real people, no call centres, no ticket numbers.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Contact", url: "https://staylio.london/contact" },
          ]),
          aliPersonSchema(),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Contact us</p>
      <h1 className="mt-3 font-serif text-5xl text-stone-900">Talk to a real person.</h1>
      <p className="mt-6 text-stone-700">
        Tell us where you want to stay and for how long. We&rsquo;ll come back with availability,
        pricing for your dates, and any tailored recommendations.
      </p>

      {/* Trust strip — Companies House + response time */}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500">
        <span>Staylio Limited · Company No. 17012831</span>
        <span aria-hidden="true">·</span>
        <span>85 Frampton Street, London NW8 8NQ</span>
        <span aria-hidden="true">·</span>
        <span>Average response time: under 15 minutes during UK hours</span>
      </div>

      {/* Speak to Ali Hassan · primary fast contact */}
      <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-stone-500">Fastest way to reach us</p>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-stone-900">
          Speak to Ali Hassan · our Direct Bookings sales lead.
        </h2>
        <p className="mt-3 text-stone-700">
          Ali handles direct booking enquiries for Staylio. WhatsApp him with your dates and
          preferred location, and he&rsquo;ll come back with availability and your direct rate,
          usually within 15 minutes during UK hours.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27d%20like%20to%20enquire%20about%20a%20Staylio%20stay."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:bg-[#1ebe5b] transition"
            aria-label="WhatsApp Ali Hassan on +44 7375 621453"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004c-1.95 0-3.866-.524-5.535-1.516l-.397-.235-4.118 1.08 1.099-4.014-.258-.41a9.794 9.794 0 01-1.5-5.23c0-5.418 4.413-9.83 9.832-9.83 2.625 0 5.092 1.024 6.948 2.882a9.825 9.825 0 012.876 6.954c-.003 5.418-4.416 9.83-9.834 9.83zM20.52 3.449C18.245 1.245 15.241.0001 12.057.0001c-6.554 0-11.89 5.336-11.892 11.893 0 2.096.549 4.142 1.594 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.337 11.893-11.894a11.821 11.821 0 00-3.456-8.451z" />
            </svg>
            WhatsApp Ali on +44 7375 621453
          </a>
          <a
            href="tel:+447375621453"
            className="inline-flex items-center rounded-full border border-stone-900 px-6 py-3 text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-white transition"
          >
            Or call +44 7375 621453
          </a>
        </div>
        <p className="mt-4 text-sm text-stone-700">
          Or email{" "}
          <a className="underline underline-offset-4" href="mailto:hello@staylio.london">
            hello@staylio.london
          </a>
        </p>
        <p className="mt-2 text-xs text-stone-500">
          Business WhatsApp. Real human reply, usually within 15 minutes during UK hours.
        </p>
      </div>

      {/* Guest service · separate line for in-stay support */}
      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-stone-500">Already staying with us?</p>
        <h2 className="mt-2 font-serif text-2xl text-stone-900">
          Reach guest service direct.
        </h2>
        <p className="mt-3 text-stone-700">
          If you&rsquo;re in a Staylio apartment right now and need something fixed, replaced, or
          answered, message the guest team. Separate line from sales, faster for in-stay matters.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/447304353640?text=Hi%2C%20I%27m%20staying%20with%20Staylio%20and%20need%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-800 transition"
            aria-label="WhatsApp guest service on +44 7304 353 640"
          >
            WhatsApp guest service · +44 7304 353 640
          </a>
          <a
            href="tel:+447304353640"
            className="inline-flex items-center rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 hover:border-stone-900 hover:text-stone-900 transition"
          >
            Or call +44 7304 353 640
          </a>
        </div>
      </div>

      <p className="mt-10 text-sm uppercase tracking-widest text-stone-500">Or use the form</p>
      <ContactForm />
    </section>
  );
}
