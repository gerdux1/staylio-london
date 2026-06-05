import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Medical stays — apartments near London hospitals for patients & families",
  description:
    "Serviced apartments near Great Ormond Street, UCLH, The London Clinic, Cromwell, Wellington, Harley Street, Royal Brompton, Moorfields and Barts. For patient families during inpatient treatment, post-operative recovery, and private medical insurance placements.",
};

const HOSPITAL_MAP = [
  {
    area: "Regent's Park & Marylebone",
    role: "Largest concentration — Harley Street medical district",
    hospitals: [
      "The London Clinic (20 Devonshire Place)",
      "King Edward VII's Hospital (5-10 Beaumont Street)",
      "The Princess Grace Hospital (42-52 Nottingham Place)",
      "The Harley Street Clinic",
      "The Portland Hospital (women + children, 205-209 Great Portland Street)",
      "The Wellington Hospital — Maida Vale border (Wellington Place)",
    ],
  },
  {
    area: "Fitzrovia & Mayfair",
    role: "Bloomsbury teaching-hospital cluster (walking distance)",
    hospitals: [
      "Great Ormond Street Hospital for Children (Queen Square area)",
      "University College Hospital (UCLH — Euston Road)",
      "National Hospital for Neurology and Neurosurgery (Queen Square)",
      "Royal National ENT and Eastman Dental Hospitals (Gray's Inn Road)",
      "Cleveland Clinic London (33 Grosvenor Place — Mayfair, opened 2022)",
    ],
  },
  {
    area: "Kensington & Hammersmith",
    role: "Cromwell Road private + Chelsea NHS specialist hub",
    hospitals: [
      "Cromwell Hospital (BUPA — 164-178 Cromwell Road)",
      "Chelsea and Westminster Hospital (369 Fulham Road)",
      "Royal Brompton Hospital (Sydney Street — cardiothoracic specialist)",
      "Royal Marsden Hospital, Chelsea (Fulham Road — cancer specialist)",
      "Royal Hospital for Neuro-disability (Putney — short transit)",
    ],
  },
  {
    area: "Barbican & Farringdon",
    role: "St Bartholomew's (Barts) campus + Old Street eye-hospital cluster",
    hospitals: [
      "St Bartholomew's Hospital (Barts — West Smithfield)",
      "Moorfields Eye Hospital (City Road, Old Street) — short walk",
      "London Heart Hospital (Westmoreland Street — share-of-care with Barts)",
    ],
  },
  {
    area: "Little Venice & Maida Vale",
    role: "St Mary's + HCA Wellington Hospital",
    hospitals: [
      "St Mary's Hospital, Paddington (Praed Street)",
      "The Wellington Hospital (HCA — Wellington Place, St John's Wood)",
      "Royal Free Hospital, Hampstead — 12 min by Bakerloo + Jubilee",
    ],
  },
  {
    area: "Borough & Pimlico",
    role: "Guy's + St Thomas' bridge area",
    hospitals: [
      "Guy's Hospital (Great Maze Pond)",
      "St Thomas' Hospital (Westminster Bridge Road)",
      "Evelina London Children's Hospital (Lambeth Palace Road)",
      "London Bridge Hospital (HCA — 27 Tooley Street)",
    ],
  },
] as const;

const WHO_THIS_HELPS = [
  {
    headline: "Families of inpatient children",
    body:
      "Parents and siblings of patients at Great Ormond Street, UCLH paediatrics, Evelina, the Portland, Royal Marsden paediatric oncology. We've hosted families through long-stay paediatric treatment — what they need is a kitchen, a real night's sleep, a washing machine, and an apartment small enough to feel like home but big enough that siblings have somewhere of their own.",
  },
  {
    headline: "Post-operative recovery (private hospital aftercare)",
    body:
      "Patients discharged from The London Clinic, Cromwell, Wellington, King Edward VII, and Cleveland Clinic who need 2-8 weeks of recovery somewhere quiet within taxi distance of follow-up appointments. Self check-in means arrival on the discharge schedule, not the front-desk schedule. Step-free apartments confirmable in writing before placement.",
  },
  {
    headline: "International medical tourism aftercare",
    body:
      "Patients flying in for procedures at HCA London hospitals, the Cleveland Clinic London, or Harley Street consultants. We coordinate with international-patient teams to confirm pricing, accessibility, dietary needs, and proximity to the relevant consultant rooms before the patient lands at Heathrow.",
  },
  {
    headline: "Private medical insurance placements",
    body:
      "BUPA UK, AXA Health, AVIVA Health, VitalityHealth, Cigna, WPA, Allianz Care. Where the patient's policy covers temporary accommodation as part of recovery, we invoice the insurer or appointed concierge directly with the VAT split shown on every invoice. Procurement contact on first request.",
  },
  {
    headline: "Charity placements for serious-illness families",
    body:
      "The Sick Children's Trust, Young Lives vs Cancer, Children with Cancer UK, and similar charities sometimes need overflow accommodation when their own Houses are full. We treat charity placements as the same priority bracket as insurer placements — same SLAs, same single point of contact, sensitivity-trained communication.",
  },
  {
    headline: "Visiting consultants and locum doctors",
    body:
      "Specialists visiting London for clinics, conferences, or short rotations at Barts, UCLH, Guy's, Royal Free, Imperial. Mid-stay rates from 7 nights, monthly billing on PO terms for hospital trusts or locum agencies.",
  },
];

const FAQ = [
  {
    q: "Why apartments rather than a hotel during long hospital stays?",
    a: "Hotels work for 1-3 nights. From night 4 of an in-patient stay, the parent or partner needs a kitchen (to cook the food the patient actually wants), in-unit laundry (hospital visits go through clothes fast), and a real desk (to manage work, school, and the never-ending paperwork). And siblings, when present, need space to be children, not patients-by-proxy.",
  },
  {
    q: "How quickly can you place a family?",
    a: "Same-day where inventory exists. Otherwise 24-48 hours. For urgent paediatric ICU situations where a family is being told 'you need to stay for weeks' at short notice, WhatsApp Ali directly on +44 7375 621453 — we prioritise these.",
  },
  {
    q: "Can the apartment be configured for medical needs?",
    a: "Some apartments have step-free access, lift access, or ground-floor entry. We can confirm in writing before placement. We can pre-arrange a delivery of bottled water, basic groceries, mobility aids, or specific consumables. Severe allergy setup (no carpets, hypoallergenic linens) available in selected units.",
  },
  {
    q: "Who pays the invoice — the patient or the insurer / hospital / charity?",
    a: "Whoever you tell us to invoice. We can bill the patient, the insurer, an appointed concierge, the hospital's international-patient team, or a charity placement officer. The split between standard-rate and long-stay-VAT-relief is shown on every invoice for the finance team's audit trail.",
  },
  {
    q: "What if the inpatient stay ends earlier or extends longer than expected?",
    a: "Medical stays are by definition unpredictable. We work with a 7-day notice for early checkout (no penalty) and a 7-day rolling extension policy as long as the apartment is available. For long extensions we'll re-confirm the rate in writing.",
  },
  {
    q: "Do you have apartments specifically near Great Ormond Street?",
    a: "Yes — the Fitzrovia & Mayfair and Regent's Park & Marylebone clusters are both within 15-20 minutes walking distance of Great Ormond Street, plus the Royal National hospitals on Gray's Inn Road. We've placed families here before for paediatric treatment programmes; familiar route between apartment and hospital makes the daily walk less of an additional load.",
  },
  {
    q: "Are you a healthcare provider or registered with the NHS?",
    a: "No — we are a serviced-apartment operator, not a healthcare provider. We do not give medical advice or arrange clinical care. We provide accommodation. Coordination with hospitals, insurers, and charities is administrative only.",
  },
];

export default function MedicalStaysPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://staylio.london/medical-stays#service",
            name: "Medical stays — serviced apartments near London hospitals",
            description:
              "Central London serviced apartments for patient families, post-operative recovery, international medical tourism, private medical insurance placements, and charity partner accommodation. Within walking or short taxi distance of Great Ormond Street, UCLH, The London Clinic, Cromwell, Wellington, Harley Street, Royal Brompton, Moorfields, Barts, Guy's, St Thomas'.",
            serviceType:
              "Temporary accommodation for hospital patients, post-operative recovery, and inpatient families",
            provider: { "@id": "https://staylio.london#organization" },
            audience: {
              "@type": "BusinessAudience",
              name: "Patient families, private medical insurance, international patient services, healthcare charities, NHS Trust accommodation officers",
            },
            offers: {
              "@type": "Offer",
              url: "https://staylio.london/medical-stays",
              availability: "https://schema.org/InStock",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.5236, longitude: -0.1591 },
              geoRadius: "6000",
            },
            url: "https://staylio.london/medical-stays",
          },
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Staylio for medical stays</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        A real home when hospital is the reason you&rsquo;re in London.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Serviced apartments within walking or short taxi distance of London&rsquo;s major teaching
        hospitals, private hospitals, and specialist centres. For families of inpatient children,
        post-operative recovery, international medical tourism aftercare, and insurer-funded
        placements. Self check-in, all bills included, mid-stay cleans, a real kitchen, and a
        single point of contact for the whole stay.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="mailto:hello@staylio.london?subject=Medical stay enquiry"
          className="rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Send a placement enquiry
        </a>
        <a
          href="https://wa.me/447375621453"
          className="rounded-full bg-emerald-700 px-7 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
        >
          WhatsApp Ali — urgent placement
        </a>
        <Link
          href="/standard"
          className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
        >
          Read our written SLAs
        </Link>
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Who this helps</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {WHO_THIS_HELPS.map((item) => (
          <div key={item.headline} className="border-l-2 border-stone-300 pl-5">
            <h3 className="font-serif text-xl text-stone-900">{item.headline}</h3>
            <p className="mt-2 text-stone-700 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">
        Which neighbourhood is right for which hospital
      </h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Staylio operates across seven Central London neighbourhoods. Below is a quick guide to
        which one sits closest to which hospital. Final apartment selection depends on stay
        length, party size, and specific accessibility needs.
      </p>

      <div className="mt-8 space-y-10">
        {HOSPITAL_MAP.map((row) => (
          <section key={row.area} className="border-t border-stone-200 pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-2xl text-stone-900">{row.area}</h3>
              <p className="text-sm text-stone-500 italic">{row.role}</p>
            </div>
            <ul className="mt-4 space-y-2 text-stone-700">
              {row.hospitals.map((h) => (
                <li key={h} className="text-sm">
                  · {h}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Why our setup works for medical stays</h2>
      <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">Self check-in.</strong> Most apartments
          use a smart lock — the code arrives by WhatsApp before arrival. You can check in at any
          hour, which matters when a hospital discharge or ICU update doesn&rsquo;t fit
          front-desk opening times.
        </li>
        <li>
          <strong className="font-medium text-stone-900">A real kitchen.</strong> Specific
          dietary needs, post-surgery food restrictions, or just the comfort of cooking what your
          child will actually eat — having a hob, an oven, a fridge-freezer, and a kettle matters.
        </li>
        <li>
          <strong className="font-medium text-stone-900">In-unit laundry.</strong> Hospital
          visits go through clothes faster than you expect. No trip to a launderette at the end
          of an already-long day.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Quiet residential streets.</strong> All
          seven of our neighbourhoods are residential, not tourist strips. The street is quiet
          at night. Sleep is the medicine you didn&rsquo;t know you needed.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Single point of contact.</strong>{" "}
          WhatsApp to Ali Hassan throughout the stay. No call-centre routing.
        </li>
        <li>
          <strong className="font-medium text-stone-900">All bills included.</strong>{" "}
          Electricity, water, heating, Wi-Fi, council tax. No surprise utility costs to navigate
          when the rest of life is already overwhelming.
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
          Hospitals · insurers · charities · concierges
        </p>
        <p className="mt-4 text-stone-700 leading-relaxed">
          If you place patients or families regularly and would like a Master Services
          Agreement, pre-blocked inventory, or a held quarterly rate, email{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london?subject=Medical stays MSA enquiry">
            hello@staylio.london
          </a>{" "}
          with your typical volume and we&rsquo;ll send a procurement pack. For one-off urgent
          placements, WhatsApp{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
            Ali on +44 7375 621453
          </a>
          .
        </p>
      </div>

      <p className="mt-12 text-xs text-stone-500 leading-relaxed">
        Staylio Limited (Companies House 17012831), 85 Frampton Street, London NW8 8NQ. Staylio
        is a serviced-apartment operator, not a healthcare provider. This page describes
        accommodation arrangements that may suit medical stays in Central London; it is not
        medical advice. Hospital walking-distance estimates are approximate and depend on the
        specific apartment within each neighbourhood. Operational SLAs published at{" "}
        <Link href="/standard" className="underline underline-offset-4 hover:text-stone-900">
          /standard
        </Link>
        .
      </p>
    </article>
  );
}
