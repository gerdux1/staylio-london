import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Arbitration & long-trial accommodation — Central London serviced apartments",
  description:
    "Walking-distance serviced apartments for international arbitration teams, expert witnesses, and counsel during long hearings at the Rolls Building, IDRC, RCJ, and LCIA. Disbursement-billable, secure entry, quiet prep workspace, multi-week rates.",
};

const VENUES = [
  {
    name: "Rolls Building (Business and Property Courts of England and Wales)",
    address: "7 Rolls Buildings, Fetter Lane, EC4A 1NL",
    walk: "5-7 min from Barbican/Farringdon Staylio cluster",
  },
  {
    name: "International Dispute Resolution Centre (IDRC)",
    address: "1 Paternoster Lane, EC4M 7BQ",
    walk: "8-10 min from Barbican/Farringdon",
  },
  {
    name: "Royal Courts of Justice",
    address: "Strand, WC2A 2LL",
    walk: "10-12 min from Barbican via Holborn",
  },
  {
    name: "LCIA Secretariat",
    address: "1 Paternoster Lane, EC4M 7BQ (co-located with IDRC)",
    walk: "8-10 min from Barbican/Farringdon",
  },
  {
    name: "International Chamber of Commerce (ICC) London hearings",
    address: "Various Central London hearing venues",
    walk: "Varies — Staylio neighbourhoods cover the main clusters",
  },
];

const WHO_THIS_HELPS = [
  {
    headline: "Counsel teams during multi-week hearings",
    body:
      "Solicitors, paralegals, junior counsel and silks running a 3-12 week hearing need somewhere quiet to prep at the end of court hours, with a real desk and the kind of internet that handles a 4 a.m. video call with a client in Singapore. Apartments grouped together where possible so the team can walk to court together.",
  },
  {
    headline: "Fact and expert witnesses flying in from abroad",
    body:
      "Single witness or a sequenced group of 4-6 across a 6-week hearing window. We can hold inventory for the hearing slot and shift dates by 48 hours when the case timetable slips. Discreet entry, no front-desk, no public guest register.",
  },
  {
    headline: "International arbitration parties",
    body:
      "95% of LCIA cases involve a non-UK party. Staylio apartments work for the principal arriving from São Paulo, Riyadh, or Singapore for a 4-week hearing — quiet residential street, kitchen, in-unit laundry, single contact for the whole stay.",
  },
  {
    headline: "Investigative and forensic experts",
    body:
      "KPMG Forensic, FTI Consulting, Berkeley Research Group, AlixPartners. Long deposition prep weeks, late nights with confidential documents, 24-hour pivots when the case takes a new direction. We don't move guests across apartments mid-stay unless they ask.",
  },
  {
    headline: "Public inquiry teams",
    body:
      "Government public inquiries (Grenfell, Covid, IICSA) run over months with rotating counsel and witnesses. Held rate, multi-apartment block bookings, monthly invoicing on PO terms.",
  },
  {
    headline: "Mediation and DSP weeks",
    body:
      "Mediation Centre Holborn, CEDR, JAMS London — short-burst 1-2 week mediations where the parties are flown in. Same model, shorter window.",
  },
];

const FAQ = [
  {
    q: "How is this typically invoiced?",
    a: "As a disbursement on the client matter. We invoice the law firm (or directly the client / arbitral institution) monthly, with the VAT split per HMRC Notice 709/3 from night 29 onwards. We can issue advance invoices, deposit-paid bookings, or post-stay accounts — whichever the matter accountant prefers.",
  },
  {
    q: "What happens when a hearing slips, adjourns, or runs short?",
    a: "Hearings are unpredictable by design. We work with a 48-hour flexibility policy: extensions confirmed within 24 hours if inventory allows, early checkouts at 48 hours notice without penalty. For matters where the hearing window has high date risk (part-heard from a previous term, anticipated interlocutory issues), we can place an inventory hold that converts to a confirmed booking 14 days before the start date.",
  },
  {
    q: "Confidentiality, NDAs, and privacy?",
    a: "Standard. We don't publish guest names, don't market that a particular guest stayed with us, and our team is contracted under confidentiality. Specific NDAs are signed on first request. Public guest register is not displayed on our site or in apartments.",
  },
  {
    q: "Can you place a team of 8-12 together?",
    a: "Yes. We have 50 apartments across 7 Central London neighbourhoods. Our densest Barbican / Farringdon and Marylebone clusters can absorb a team of 8-12 within a 10-minute walk of each other. Lead time 2-4 weeks for the team-grouping search.",
  },
  {
    q: "Do you provide secretarial or transcription support?",
    a: "No. We are a serviced-apartment operator, not a litigation-support business. We coordinate with the chambers / firm's existing support stack. If the team needs printer, scanner, or extra screens, we'll arrange delivery before the team arrives.",
  },
  {
    q: "What about parking and chauffeur access?",
    a: "Most Central London Staylio apartments are pedestrian, not driveway. We can pre-book secure car-park spaces nearby on request and brief a vetted chauffeur company for daily court runs. Cost is a pass-through to the client matter; we don't mark up.",
  },
];

export default function ArbitrationPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://staylio.london/arbitration#service",
            name: "Arbitration and long-trial accommodation",
            description:
              "Central London serviced apartments for international arbitration teams, counsel, expert witnesses, and parties during long hearings at the Rolls Building, IDRC, RCJ, LCIA, and ICC London venues. Disbursement-billable, walking distance to court, confidential placement.",
            serviceType:
              "Temporary accommodation for arbitration counsel, witnesses, parties, and forensic experts",
            provider: { "@id": "https://staylio.london#organization" },
            audience: {
              "@type": "BusinessAudience",
              name: "Law-firm Practice Managers, Litigation Support Leads, Arbitral Institutions, Corporate General Counsel, Forensic and Expert Consultancies",
            },
            offers: {
              "@type": "Offer",
              url: "https://staylio.london/arbitration",
              availability: "https://schema.org/InStock",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.5208, longitude: -0.101 },
              geoRadius: "3000",
            },
            url: "https://staylio.london/arbitration",
          },
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Staylio for arbitration teams</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        Walking distance from court, with somewhere quiet to think.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Serviced apartments for international arbitration counsel, expert witnesses, fact
        witnesses, and parties during multi-week hearings at the Rolls Building, IDRC, RCJ,
        LCIA, and ICC London venues. Five-minute walk from the courts, secure entry, real desk,
        in-unit laundry, monthly invoicing on PO terms — and disbursement-billable to the client
        matter.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="mailto:hello@staylio.london?subject=Arbitration / long-trial accommodation"
          className="rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Send a hearing-window enquiry
        </a>
        <Link
          href="/standard"
          className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
        >
          Read our written SLAs
        </Link>
        <Link
          href="/procurement-pack"
          className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
        >
          Procurement pack
        </Link>
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Five-minute walk from the courts</h2>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-3 pr-4 text-left">Venue</th>
              <th className="py-3 pr-4 text-left">Address</th>
              <th className="py-3 text-left">From Staylio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {VENUES.map((v) => (
              <tr key={v.name}>
                <td className="py-3 pr-4 font-medium text-stone-900">{v.name}</td>
                <td className="py-3 pr-4">{v.address}</td>
                <td className="py-3 text-stone-700">{v.walk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Our densest cluster of inventory is in <strong className="font-medium text-stone-900">Barbican &amp; Farringdon</strong>{" "}
        and the Fitzrovia / Mayfair edge by Chancery Lane — both within a brisk walk of the Rolls
        Building, the IDRC, and the Royal Courts of Justice. For matters seated at the LCIA or ICC
        Paternoster Lane venues, the same Barbican apartments are 8-10 minutes door-to-door.
      </p>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Who this helps</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {WHO_THIS_HELPS.map((item) => (
          <div key={item.headline} className="border-l-2 border-stone-300 pl-5">
            <h3 className="font-serif text-xl text-stone-900">{item.headline}</h3>
            <p className="mt-2 text-stone-700 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Why our setup works for hearings</h2>
      <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">Quiet residential streets.</strong> All
          seven neighbourhoods are residential, not tourist strips. Prep at night without bar
          noise underneath you. Sleep matters during a 6-week hearing.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Real desk + fast Wi-Fi.</strong> Every
          apartment has a proper dining table or desk. Wi-Fi tested before every guest arrival
          (target: 100 Mbps minimum). Hard-wired ethernet on request.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Single contact.</strong> Ali Hassan
          handles the whole team for the whole hearing. No shifting account managers, no
          after-hours escalation tree.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Confidentiality by default.</strong>{" "}
          No public guest register. No "guest spotlight" marketing. NDA on first request.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Disbursement-friendly invoicing.</strong>{" "}
          Monthly, with VAT split for long stays per HMRC Notice 709/3. Multi-apartment block
          billing on one invoice.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Team-grouping where possible.</strong>{" "}
          Counsel team of 8-12 walking together to court at 09:00 is a real coordination win.
          We'll place you within a 10-minute walk of each other.
        </li>
      </ul>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Procurement FAQ</h2>
      <dl className="mt-8 space-y-7">
        {FAQ.map((f) => (
          <div key={f.q}>
            <dt className="font-medium text-stone-900">{f.q}</dt>
            <dd className="mt-2 text-stone-700 leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-20 rounded-2xl border border-stone-200 bg-stone-50 p-8">
        <p className="text-sm uppercase tracking-widest text-stone-500">For booking partners</p>
        <p className="mt-3 font-serif text-2xl text-stone-900">
          Magic Circle · US disputes · arbitral institutions · forensic experts
        </p>
        <p className="mt-4 text-stone-700 leading-relaxed">
          For a Master Services Agreement covering multiple matters per year, or to discuss
          inventory pre-blocking for a known long-trial window, email{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london?subject=Staylio arbitration MSA enquiry">
            hello@staylio.london
          </a>
          . For an urgent same-week hearing placement, WhatsApp{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
            Ali on +44 7375 621453
          </a>
          .
        </p>
      </div>

      <p className="mt-12 text-xs text-stone-500 leading-relaxed">
        Staylio Limited (Companies House 17012831), 85 Frampton Street, London NW8 8NQ. Walking
        times are estimates from the densest cluster of Staylio inventory in Barbican / Farringdon
        and depend on the specific apartment allocated. Confidentiality and NDA terms agreed in
        writing on request. This page describes a B2B accommodation service; it is not legal
        advice.
      </p>
    </article>
  );
}
