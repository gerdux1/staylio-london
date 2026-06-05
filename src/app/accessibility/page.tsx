import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "Staylio is committed to making staylio.london accessible to everyone, conforming to WCAG 2.2 Level AA. How to report an accessibility issue.",
};

const LAST_REVIEWED = "5 June 2026";
const LAST_AUDITED = "5 June 2026";

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Accessibility</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">Accessibility statement</h1>

      <div className="mt-10 space-y-6 text-lg text-stone-700 leading-relaxed">
        <p>
          Staylio Limited is committed to making{" "}
          <Link href="/" className="underline underline-offset-4 hover:text-stone-900">
            staylio.london
          </Link>{" "}
          accessible to as many people as possible, regardless of disability, technology, or
          assistive software. This statement covers the website and our booking experience.
        </p>
        <p>
          We aim to conform to the{" "}
          <a
            className="underline underline-offset-4 hover:text-stone-900"
            href="https://www.w3.org/TR/WCAG22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
          </a>
          . We treat that standard as the floor, not the ceiling.
        </p>
      </div>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">How we&rsquo;re doing</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Staylio.london is partially conformant with WCAG 2.2 Level AA at the time of writing.
        &ldquo;Partially conformant&rdquo; means some parts of the site do not yet fully meet the
        standard. The known gaps are listed below; we are working through them.
      </p>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">What works well</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>All images carry meaningful alternative text or are marked decorative.</li>
        <li>The page structure uses semantic landmarks (header, main, footer, nav) and a single H1 per page.</li>
        <li>Colour contrast meets the 4.5:1 ratio for body text and 3:1 for large text.</li>
        <li>Focus indicators are visible on all interactive elements (keyboard navigation works throughout).</li>
        <li>Form labels are programmatically associated with their inputs.</li>
        <li>Text resizes up to 200% without loss of content or function.</li>
        <li>The site works without JavaScript for core navigation and reading.</li>
      </ul>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Known issues</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          The image carousel on individual apartment pages does not yet announce slide changes to
          screen readers. Targeted fix: Q3 2026.
        </li>
        <li>
          Some long-form pages do not yet have visible skip links. Targeted fix: Q3 2026.
        </li>
        <li>
          We are reviewing colour contrast on the soft &ldquo;stone&rdquo; palette across the
          locations grid; preliminary checks pass AA but we plan to retest with assistive software.
        </li>
      </ul>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Report a problem</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        If you encounter an accessibility barrier on staylio.london — anything that stops you
        booking, reading information, or contacting us — please tell us. We will respond within 5
        working days.
      </p>
      <ul className="mt-4 space-y-2 text-stone-700">
        <li>
          Email{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
            hello@staylio.london
          </a>
        </li>
        <li>
          WhatsApp our team on{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447304353640">
            +44 7304 353 640
          </a>
        </li>
      </ul>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Technical details</h2>
      <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 text-sm text-stone-700">
        <div>
          <dt className="text-stone-500">Conformance target</dt>
          <dd className="mt-1 font-medium text-stone-900">WCAG 2.2 Level AA</dd>
        </div>
        <div>
          <dt className="text-stone-500">Current conformance</dt>
          <dd className="mt-1 font-medium text-stone-900">Partial</dd>
        </div>
        <div>
          <dt className="text-stone-500">Last audited</dt>
          <dd className="mt-1 font-medium text-stone-900">{LAST_AUDITED}</dd>
        </div>
        <div>
          <dt className="text-stone-500">Statement reviewed</dt>
          <dd className="mt-1 font-medium text-stone-900">{LAST_REVIEWED}</dd>
        </div>
      </dl>

      <p className="mt-12 text-sm text-stone-500">
        This statement is published by Staylio Limited (Companies House 17012831), 85 Frampton
        Street, London NW8 8NQ.
      </p>
    </article>
  );
}
