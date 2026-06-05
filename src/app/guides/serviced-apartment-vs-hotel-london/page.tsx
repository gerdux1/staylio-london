import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema } from "@/lib/schema";

const SLUG = "serviced-apartment-vs-hotel-london";
const PUBLISHED = "2026-06-05T00:00:00Z";
const HEADLINE = "Serviced apartment vs hotel: the maths after 14 nights";
const DESCRIPTION =
  "By night 14 the price-per-night gap usually flips. Here is the breakdown — bundled bills, kitchen value, laundry, and the hidden costs hotels don't tell you until checkout.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  openGraph: { title: HEADLINE, description: DESCRIPTION, type: "article" },
};

export default function ApartmentVsHotelGuide() {
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
              "serviced apartment vs hotel London",
              "long stay London cost",
              "extended stay accommodation London",
              "corporate housing London",
              "Central London apartment vs hotel",
            ],
          }),
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Choice</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 5 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">
          Ali Hassan
        </Link>
        , Direct Bookings Lead · 9 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          For 1-3 nights solo, a 4-star Central London hotel usually wins on convenience and price.
          From night 4 with a partner, or night 7 alone, a serviced apartment starts to make sense —
          you stop paying for things you don&rsquo;t use (breakfast, gym day-pass, mini-bar) and start
          using things you didn&rsquo;t know you needed (a kitchen, a desk, a sofa, a washing machine).
          By night 14 the typical apartment is 25-40 % cheaper than the equivalent hotel before you
          even count the bundled extras.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The honest comparison</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        I run direct bookings at a London serviced-apartment operator, so I&rsquo;m biased. But the
        maths is the maths, and the honest answer for short solo trips is: stay in a hotel. Where
        apartments win is the bracket where hotels stop being efficient — usually around night 4
        with a partner, or somewhere between night 7 and 10 alone.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">A worked example: 14 nights in Marylebone</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Headline rates are mid-2026 indicative for a comparable area (Marylebone / Regent&rsquo;s Park).
        Your specific dates and demand will shift these by 10-20 % up or down. The point is the gap,
        not the absolute number.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Line</th>
              <th className="py-2 pr-4 text-right">4-star hotel</th>
              <th className="py-2 text-right">Serviced apartment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr>
              <td className="py-3 pr-4">Headline rate × 14 nights</td>
              <td className="py-3 pr-4 text-right">£260 × 14 = £3,640</td>
              <td className="py-3 text-right">£190 × 14 = £2,660</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Breakfast (where unbundled)</td>
              <td className="py-3 pr-4 text-right">£22 × 14 = £308</td>
              <td className="py-3 text-right">Cook in apartment = £0</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Wi-Fi premium tier</td>
              <td className="py-3 pr-4 text-right">£15-25/day (often)</td>
              <td className="py-3 text-right">Bundled, full-speed</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Laundry (mid-stay)</td>
              <td className="py-3 pr-4 text-right">£8/item × 5 items × 2 = £80</td>
              <td className="py-3 text-right">In-unit washer-dryer = £0</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Lunch &amp; light evening meal eaten out</td>
              <td className="py-3 pr-4 text-right">£35 × 14 = £490</td>
              <td className="py-3 text-right">£15 grocery + £20 dine out = £35 × 14 / 2 ≈ £245</td>
            </tr>
            <tr className="font-medium text-stone-900">
              <td className="py-3 pr-4">Realised total</td>
              <td className="py-3 pr-4 text-right">~£4,518</td>
              <td className="py-3 text-right">~£2,905</td>
            </tr>
            <tr className="text-stone-500 text-xs">
              <td className="py-3 pr-4">Per-night realised</td>
              <td className="py-3 pr-4 text-right">£323</td>
              <td className="py-3 text-right">£208</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed">
        On the headline rate alone, the apartment is £980 cheaper. With the bundled extras and a
        realistic mix of eating in vs out, the gap widens to about £1,600 over 14 nights. That&rsquo;s
        a week&rsquo;s additional stay at the apartment rate, or a flight home.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When the hotel still wins</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">1-3 nights solo.</strong> Hotels are
          better-equipped for short stops: 24/7 front desk, room service if you arrive at 2 a.m.
          tired, daily housekeeping is more useful when the stay is short.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Frequent-stay loyalty schemes.</strong> If
          you&rsquo;re Hilton Gold or above and Hilton has a property in the area you need, the
          combination of points, late check-out and breakfast credit can outrun an apartment&rsquo;s
          headline saving.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Pure tourist mode.</strong> If the trip is
          two days, three museums and a show, you barely use the room — you&rsquo;re paying for a
          bed and a shower, not for an extra room or a kitchen.
        </li>
        <li>
          <strong className="font-medium text-stone-900">You actually want to be cooked for.</strong>{" "}
          A serviced apartment doesn&rsquo;t do room service. If breakfast in bed is the trip&rsquo;s
          highlight, book a hotel.
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When the apartment wins decisively</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">7+ nights with a partner.</strong> Hotel rooms
          at the £180-260 band are typically 14-18 sqm. Apartments at the same price are 30-50 sqm
          with separate living and sleeping zones. Around day 4 you stop being on holiday with each
          other and start being in a shoebox with each other; the apartment fixes that.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Working from the room.</strong> A real
          dining table or desk is non-negotiable for more than 3 days of work. Hotel desks are
          often a vanity with a chair.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Anyone with dietary needs, jet lag,
          allergies, or a baby.</strong> A kitchen, a fridge, somewhere to warm milk at 4 a.m. — these
          are the moments the apartment justifies itself.
        </li>
        <li>
          <strong className="font-medium text-stone-900">28+ nights.</strong> Past 28 nights the UK
          long-stay VAT treatment kicks in. See our{" "}
          <Link
            href="/guides/long-stay-tax-london"
            className="underline underline-offset-4 hover:text-stone-900"
          >
            long-stay tax guide
          </Link>{" "}
          for the maths — it&rsquo;s a structural advantage hotels can&rsquo;t match.
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What apartments don&rsquo;t do well (be honest)</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">No 24/7 reception desk.</strong> Most
          serviced apartments use self check-in (smart-lock code by WhatsApp on most apartments;
          in-person key handover on the rest). Late arrivals don&rsquo;t need a night manager, but
          the first time you arrive at midnight you want to make sure you have your code saved
          offline.
        </li>
        <li>
          <strong className="font-medium text-stone-900">No room service.</strong> Some operators
          partner with delivery apps for groceries; very few do hot food to the door. If you eat in
          most nights, the apartment&rsquo;s kitchen is the answer — but the kitchen needs to actually
          have a hob, a pan, salt, and oil. Confirm before you book if you cook.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Daily housekeeping isn&rsquo;t standard.</strong>{" "}
          Most operators (us included) clean fortnightly on long stays, with mid-stay cleans available
          on request. A hotel cleans every day; an apartment doesn&rsquo;t.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Less amenity stack.</strong> No spa, no gym,
          no pool (in nearly all cases). If those matter, pay the hotel premium.
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">How to decide in 30 seconds</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Three quick questions. Three or more &ldquo;yes&rdquo; answers and an apartment is probably
        right for you.
      </p>
      <ol className="mt-4 space-y-2 text-stone-700 leading-relaxed list-decimal pl-6">
        <li>Will you be in the same city for 4+ nights?</li>
        <li>Are you travelling with at least one other person?</li>
        <li>Will you do any work, study, or admin from your accommodation?</li>
        <li>Will you eat in at least one meal a day?</li>
        <li>Do you have dietary needs, a baby, or any reason you need a fridge?</li>
        <li>Is the trip a relocation, project, or extended visit (vs pure tourism)?</li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Want a like-for-like quote?</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Send your dates and the hotel you were considering — I&rsquo;ll send back a comparable
        Staylio apartment, the headline rate, and the bundled-extras delta so you can decide on the
        real number. WhatsApp{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
          +44 7375 621453
        </a>{" "}
        or email{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
          hello@staylio.london
        </a>
        .
      </p>

      <div className="mt-16 border-t border-stone-200 pt-6 text-xs text-stone-500 leading-relaxed">
        Rate bands quoted are indicative for Central London (Marylebone, Fitzrovia, Kensington,
        Borough, Pimlico, Shoreditch, Maida Vale) in mid-2026. Your specific dates, demand, and
        property selection will move these numbers — not the shape of the comparison.
      </div>
    </article>
  );
}
