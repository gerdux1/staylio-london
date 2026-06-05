import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Staylio right for you? — decision guide",
  description:
    "Three quick decision matrices: is a Staylio serviced apartment right for your trip? How does Staylio compare to Airbnb, SACO, Cheval, and aparthotels? When does a serviced apartment beat a hotel?",
};

export default function DecisionGuidePage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Decision guide</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        Is Staylio right for you?
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Three honest decision matrices. No marketing fluff — the kind of thing Ali Hassan would
        send a friend in a WhatsApp before they book. If after reading you decide a hotel or an
        Airbnb suits you better for this particular trip, that&rsquo;s the right answer.
      </p>

      {/* Matrix 1 — Is Staylio right for me? */}
      <section className="mt-16">
        <h2 className="font-serif text-3xl text-stone-900">1. Is a Staylio apartment right for THIS trip?</h2>
        <p className="mt-4 text-stone-700 leading-relaxed">
          Find your trip profile in the left column. The right column is what we recommend.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-800">
            <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
              <tr>
                <th className="py-3 pr-4">Your trip profile</th>
                <th className="py-3">What we recommend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Business traveller, 1-3 nights solo</strong>
                  <br />
                  <span className="text-xs text-stone-500">Hotel-style trip, one set of meetings, light bag</span>
                </td>
                <td className="py-4 text-stone-700">
                  A hotel is probably better. Staylio min-stay is 3 nights and you won&rsquo;t use the kitchen.
                  Save us for a longer trip.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Project consultant, 4-14 nights</strong>
                  <br />
                  <span className="text-xs text-stone-500">London for a sprint, working from the room some days</span>
                </td>
                <td className="py-4 text-stone-700">
                  Yes — Staylio works well. Real desk, real kitchen, in-unit laundry. Self check-in means
                  arrive whenever your flight lands. See{" "}
                  <Link href="/guides/serviced-apartment-vs-hotel-london" className="underline underline-offset-4 hover:text-stone-900">
                    the 14-night maths
                  </Link>
                  .
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Relocator, 4-12 weeks</strong>
                  <br />
                  <span className="text-xs text-stone-500">New job, family arriving in stages, working remotely while you settle</span>
                </td>
                <td className="py-4 text-stone-700">
                  Yes — this is Staylio&rsquo;s sweet spot. Long-stay pricing kicks in at 7 nights,
                  with VAT relief from night 29 (see{" "}
                  <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">
                    tax guide
                  </Link>
                  ). Pick a 2-bed if the family joins mid-stay.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Couple, 4-7 nights leisure</strong>
                  <br />
                  <span className="text-xs text-stone-500">London for theatre, food, walking</span>
                </td>
                <td className="py-4 text-stone-700">
                  Yes — particularly if you want a real flat in a residential neighbourhood (Pimlico,
                  Little Venice, Marylebone) rather than the West End hotel strip.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Family with young children, any length</strong>
                  <br />
                  <span className="text-xs text-stone-500">Need kitchen, cots, washing machine, somewhere to nap them</span>
                </td>
                <td className="py-4 text-stone-700">
                  Yes — Staylio handles this well. Mention ages on booking; cots and high chairs
                  available on request. 2- and 3-bed apartments are in most neighbourhoods.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Group / wedding party, 3-7 nights</strong>
                  <br />
                  <span className="text-xs text-stone-500">6-10 people, want to stay together</span>
                </td>
                <td className="py-4 text-stone-700">
                  Possibly. We have one 4-bed in Shoreditch that sleeps 10. WhatsApp Ali for
                  multi-apartment groupings; pre-block helps for popular dates.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Pure tourist mode, 2-4 nights</strong>
                  <br />
                  <span className="text-xs text-stone-500">Museums, theatre, lots of out-and-about</span>
                </td>
                <td className="py-4 text-stone-700">
                  A hotel near your tourist gravity (Covent Garden / South Bank) probably suits
                  better — you&rsquo;ll barely use the apartment.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4">
                  <strong className="font-medium text-stone-900">Stay over 89 nights</strong>
                  <br />
                  <span className="text-xs text-stone-500">3+ months continuous in London</span>
                </td>
                <td className="py-4 text-stone-700">
                  Possible but ask first — the Greater London 90-day rule applies to short-let
                  inventory. We&rsquo;ll match you with an apartment that has the right planning
                  permission (
                  <Link href="/guides/london-90-day-short-let-rule" className="underline underline-offset-4 hover:text-stone-900">
                    why this matters
                  </Link>
                  ).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Matrix 2 — Staylio vs the alternatives */}
      <section className="mt-20">
        <h2 className="font-serif text-3xl text-stone-900">2. Staylio vs the alternatives</h2>
        <p className="mt-4 text-stone-700 leading-relaxed">
          Like-for-like comparison on the things people actually care about. We&rsquo;ve put ourselves
          in the &ldquo;independent serviced apartment&rdquo; column — there are other good ones too;
          this just sets out the trade-offs.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-800">
            <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
              <tr>
                <th className="py-3 pr-4">Dimension</th>
                <th className="py-3 pr-3">Staylio</th>
                <th className="py-3 pr-3">Airbnb</th>
                <th className="py-3 pr-3">Aparthotel chain</th>
                <th className="py-3">Corporate (SACO / Cheval)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">Space (1-bed)</td>
                <td className="py-3 pr-3">45-80 sqm</td>
                <td className="py-3 pr-3">Variable, 25-90 sqm</td>
                <td className="py-3 pr-3">25-40 sqm</td>
                <td className="py-3">50-90 sqm</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">Consistency</td>
                <td className="py-3 pr-3">High (operator-run portfolio)</td>
                <td className="py-3 pr-3">Variable (host-by-host)</td>
                <td className="py-3 pr-3">High (chain standard)</td>
                <td className="py-3">High (chain standard)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">Check-in</td>
                <td className="py-3 pr-3">Self check-in (smart lock on most, key handover on rest)</td>
                <td className="py-3 pr-3">Host-dependent</td>
                <td className="py-3 pr-3">Front desk</td>
                <td className="py-3">Front desk or concierge</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">All bills included</td>
                <td className="py-3 pr-3">Yes</td>
                <td className="py-3 pr-3">Usually yes</td>
                <td className="py-3 pr-3">Yes (some Wi-Fi tiers extra)</td>
                <td className="py-3">Yes</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">Direct vs commission</td>
                <td className="py-3 pr-3">Direct rates &gt;10% cheaper than OTAs</td>
                <td className="py-3 pr-3">Platform-only (no direct)</td>
                <td className="py-3 pr-3">Chain.com direct</td>
                <td className="py-3">Direct only</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">Long-stay VAT relief</td>
                <td className="py-3 pr-3">Yes (applied automatically from N29)</td>
                <td className="py-3 pr-3">Host-dependent (often not applied)</td>
                <td className="py-3 pr-3">Yes (chain pricing)</td>
                <td className="py-3">Yes (built into corporate rate)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">PO billing for corporates</td>
                <td className="py-3 pr-3">Yes</td>
                <td className="py-3 pr-3">No (Airbnb for Work is consumer-grade)</td>
                <td className="py-3 pr-3">Yes</td>
                <td className="py-3">Yes (volume contracts)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">Headline price band</td>
                <td className="py-3 pr-3">£140-280/night</td>
                <td className="py-3 pr-3">£60-£300+ (huge variance)</td>
                <td className="py-3 pr-3">£140-£240/night</td>
                <td className="py-3">£200-£500+/night</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-stone-900">Single point of contact</td>
                <td className="py-3 pr-3">Ali Hassan (Direct Bookings)</td>
                <td className="py-3 pr-3">No (per-host)</td>
                <td className="py-3 pr-3">Hotel manager rotation</td>
                <td className="py-3">Yes (account manager)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Matrix 3 — When SA beats hotel */}
      <section className="mt-20">
        <h2 className="font-serif text-3xl text-stone-900">3. When does a serviced apartment actually beat a hotel?</h2>
        <p className="mt-4 text-stone-700 leading-relaxed">
          A 30-second checklist. Three or more &ldquo;yes&rdquo; answers and a serviced apartment
          is the better call. See{" "}
          <Link href="/guides/serviced-apartment-vs-hotel-london" className="underline underline-offset-4 hover:text-stone-900">
            the full 14-night cost crossover article
          </Link>{" "}
          for the maths behind these.
        </p>
        <ul className="mt-6 space-y-3 text-stone-700 leading-relaxed list-decimal pl-6">
          <li>Will you be in the same city for 4+ nights?</li>
          <li>Are you travelling with at least one other person?</li>
          <li>Will you do any work, study, or admin from your accommodation?</li>
          <li>Will you eat in at least one meal a day?</li>
          <li>Do you have dietary needs, a baby, or any reason you need a fridge?</li>
          <li>Is the trip a relocation, project, or extended visit (vs pure tourism)?</li>
          <li>Will the total stay exceed 14 nights?</li>
          <li>Does your finance team appreciate a single all-in invoice?</li>
        </ul>
      </section>

      <div className="mt-20 border-t border-stone-200 pt-10">
        <h2 className="font-serif text-2xl text-stone-900">Try the calculator</h2>
        <p className="mt-3 text-stone-700 leading-relaxed">
          Want the actual numbers for your dates? Use{" "}
          <Link href="/cost-calculator" className="underline underline-offset-4 hover:text-stone-900">
            our calculator
          </Link>{" "}
          to compare a Staylio apartment against a hotel and an OTA listing for the same nights —
          or WhatsApp{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
            Ali on +44 7375 621453
          </a>{" "}
          with the trip details.
        </p>
      </div>
    </article>
  );
}
