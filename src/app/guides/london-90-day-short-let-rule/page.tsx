import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema } from "@/lib/schema";

const SLUG = "london-90-day-short-let-rule";
const PUBLISHED = "2026-06-05T00:00:00Z";
const HEADLINE = "London's 90-day short-let rule, explained for guests";
const DESCRIPTION =
  "Why some London apartments quietly cap short stays at 89 nights, what change-of-use planning permission actually means, and how to tell whether your booking is properly compliant before you arrive.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  openGraph: { title: HEADLINE, description: DESCRIPTION, type: "article" },
};

export default function NinetyDayRuleGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: [
              "London 90 day short let rule",
              "Greater London 90 night cap",
              "Deregulation Act 2015 short let",
              "London Airbnb 90 day limit",
              "C1 sui generis planning London",
              "serviced apartment planning permission London",
            ],
            about: "https://www.legislation.gov.uk/ukpga/2015/20/section/44",
          }),
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Legal</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 5 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">
          Ali Hassan
        </Link>
        , Direct Bookings Lead · 7 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Greater London caps short lets of residential properties at 90 nights per calendar year
          (Deregulation Act 2015 §44). Above 90 nights, the property needs change-of-use planning
          permission — usually C1 (hotel) or Sui Generis. Most casual Airbnb hosts fly under the
          radar; legitimate serviced-apartment operators get the right consents up front and can
          host stays of any length. If you&rsquo;re booking longer than 89 nights in London, ask
          your operator one question: &ldquo;what&rsquo;s your planning position?&rdquo; A clear
          answer in one sentence is a green light.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The rule, exactly</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Section 44 of the Deregulation Act 2015 amended the Greater London (General Powers) Act
        1973 to allow short-term letting of residential premises in Greater London for up to 90
        nights per calendar year without needing planning permission for change of use. Above 90
        nights, the use becomes &ldquo;temporary sleeping accommodation&rdquo; in planning terms,
        and that&rsquo;s a material change of use from C3 (dwellinghouse).
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        The rule applies to all 33 Greater London boroughs. It does not apply outside Greater
        London — Manchester, Edinburgh, Bristol each have their own (different) regimes. The cap
        is per property per calendar year (1 January to 31 December), not a rolling 12-month
        window.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why this matters to you as a guest</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For a 4-night weekend break, none of this matters — every London short let is legal at
        that length. It starts to matter when:
      </p>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">Your stay is approaching 89 nights.</strong>{" "}
          If the operator caps your booking at 89, that&rsquo;s usually the 90-day rule in action.
          Ask whether they have a sister property with the right consent you could move to for
          night 90 onwards.
        </li>
        <li>
          <strong className="font-medium text-stone-900">You&rsquo;re booking for a relocation
          or extended posting (3-12 months).</strong> Any operator running long-stay inventory
          on residential premises without the right planning permission is doing it
          non-compliantly. If enforcement action follows, your booking is the one that gets
          cancelled mid-stay — not the operator&rsquo;s problem, yours.
        </li>
        <li>
          <strong className="font-medium text-stone-900">You&rsquo;re booking corporate stays for
          a project team or relocator.</strong> Procurement teams care because of the
          reputational and operational risk of a placed employee getting evicted mid-project.
          The right operator can show you their planning consent in writing.
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Three legal paths an operator can take</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Path</th>
              <th className="py-2 pr-4 text-left">Max stay length</th>
              <th className="py-2 text-left">Typical use</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr>
              <td className="py-3 pr-4">
                <strong className="font-medium text-stone-900">C3 + 90-day cap</strong>
                <br />
                <span className="text-xs text-stone-500">No planning permission needed</span>
              </td>
              <td className="py-3 pr-4">89 nights/yr per property</td>
              <td className="py-3">Casual Airbnb, occasional rental</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                <strong className="font-medium text-stone-900">C1 (hotel)</strong>
                <br />
                <span className="text-xs text-stone-500">Change of use granted</span>
              </td>
              <td className="py-3 pr-4">Any length, any cycle</td>
              <td className="py-3">Aparthotels, hotel groups, large blocks</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                <strong className="font-medium text-stone-900">Sui Generis</strong>
                <br />
                <span className="text-xs text-stone-500">A class of its own — case-by-case</span>
              </td>
              <td className="py-3 pr-4">Any length, terms defined in the consent</td>
              <td className="py-3">Serviced apartment buildings, aparthotels</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed">
        A fourth path some operators use is to run stays purely as licences-to-occupy, not
        Assured Shorthold Tenancies, and to claim that doesn&rsquo;t constitute short letting
        under the 90-day rule. That argument has not been tested decisively in the courts and is
        risky to rely on. Better to ask the operator which formal path they&rsquo;re on.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What &ldquo;asking the operator&rdquo; sounds like</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Email or WhatsApp message before booking:
      </p>
      <blockquote className="mt-4 border-l-2 border-stone-300 pl-4 italic text-stone-700">
        Hi — I&rsquo;m booking a [N-week / N-month] stay starting [date]. Could you confirm what
        planning permission you operate under for [property/address]? I just want to make sure
        my stay is fully compliant with the Greater London 90-day rule.
      </blockquote>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Acceptable answers:
      </p>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>&ldquo;The building has C1 hotel use; we&rsquo;re fine for any length stay.&rdquo;</li>
        <li>
          &ldquo;The property has Sui Generis planning consent for serviced-apartment use —
          happy to send the consent reference.&rdquo;
        </li>
        <li>
          &ldquo;We&rsquo;re on the 90-day allowance; our system caps your booking at 89 nights.
          If you need longer, we can move you to a sister property that has the right
          consent.&rdquo;
        </li>
      </ul>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Unacceptable answers:
      </p>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>&ldquo;Don&rsquo;t worry about that — we&rsquo;ve been doing this for years.&rdquo;</li>
        <li>&ldquo;The 90-day rule doesn&rsquo;t apply to us because [vague reasoning].&rdquo;</li>
        <li>Silence, or being deflected to a generic FAQ.</li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What enforcement looks like in practice</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Borough councils enforce the 90-day rule via planning enforcement, not criminal law.
        Westminster, Camden, Tower Hamlets, Hackney, and Kensington &amp; Chelsea are the most
        active. Action typically starts with a planning contravention notice (PCN) requiring the
        owner to disclose lettings history. Where stays exceed 90 nights without consent, the
        council can issue an enforcement notice ordering the use to cease.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Enforcement notices come into effect 28 days after issue and trigger penalties for
        non-compliance. A guest mid-stay when an enforcement notice activates is not the legal
        target, but the operator is required to vacate the property — which means your booking
        ends abruptly. That&rsquo;s the practical guest risk.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">How Staylio is set up</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Every Staylio apartment is on a commercial head-lease structure where the operating
        entity is permitted to provide short-stay accommodation. Where individual flats fall
        inside the 90-day C3 category, the booking system caps stays appropriately and we route
        longer-stay guests to apartments with the right planning consent. Either way, the answer
        to &ldquo;what&rsquo;s your planning position?&rdquo; is the same: written, specific, and
        sent in advance for any stay over 89 nights.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        If you&rsquo;re planning a stay over 89 nights and want the specific planning position
        for the apartment you&rsquo;re looking at, WhatsApp{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
          Ali on +44 7375 621453
        </a>{" "}
        or email{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
          hello@staylio.london
        </a>{" "}
        — we&rsquo;ll send it within a day.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For procurement teams running corporate stays, our{" "}
        <Link href="/corporate" className="underline underline-offset-4 hover:text-stone-900">
          corporate stays page
        </Link>{" "}
        explains our long-stay structure in more detail.
      </p>

      <div className="mt-16 border-t border-stone-200 pt-6 text-xs text-stone-500 leading-relaxed">
        This guide is general information published by a serviced-apartment operator, not regulated
        legal advice. The Deregulation Act 2015 and individual borough enforcement practices may
        change; this article reflects the position as at 5 June 2026. References:{" "}
        <a
          className="underline underline-offset-4 hover:text-stone-900"
          href="https://www.legislation.gov.uk/ukpga/2015/20/section/44"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deregulation Act 2015 § 44
        </a>
        ,{" "}
        <a
          className="underline underline-offset-4 hover:text-stone-900"
          href="https://www.legislation.gov.uk/ukla/1973/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Greater London (General Powers) Act 1973
        </a>
        .
      </div>
    </article>
  );
}
