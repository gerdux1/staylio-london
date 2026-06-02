import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with Staylio. Real people respond to your enquiry — no call centres, no ticket numbers.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Contact us</p>
      <h1 className="mt-3 font-serif text-5xl text-stone-900">Talk to a real person.</h1>
      <p className="mt-6 text-stone-700">
        Tell us where you want to stay and for how long. We&rsquo;ll come back with availability,
        pricing for your dates, and any tailored recommendations.
      </p>

      <form
        className="mt-12 grid gap-6"
        action="https://formspree.io/f/REPLACE_WITH_FORM_ID"
        method="POST"
      >
        <div>
          <label className="text-sm font-medium text-stone-900" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-stone-900" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-stone-900" htmlFor="checkin">Check in</label>
            <input
              id="checkin"
              name="checkin"
              type="date"
              className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-stone-900" htmlFor="checkout">Check out</label>
            <input
              id="checkout"
              name="checkout"
              type="date"
              className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-stone-900" htmlFor="message">Tell us a bit more</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-700 transition justify-self-start"
        >
          Send enquiry
        </button>
      </form>

      <p className="mt-10 text-sm text-stone-600">
        Or email <a className="underline underline-offset-4" href="mailto:hello@staylio.london">hello@staylio.london</a> · <a className="underline underline-offset-4" href="tel:+447802666672">+44 7802 666672</a>
      </p>
    </section>
  );
}
