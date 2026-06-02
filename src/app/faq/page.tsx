import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the questions guests ask most often about Staylio serviced apartments in London.",
};

const FAQ = [
  {
    question: "How long can I stay?",
    answer:
      "Minimum stay is three nights. Maximum is open-ended — many guests stay for three to six months, and a few have stayed for over a year. Pricing adjusts down for longer stays.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Every booking includes electricity, water, heating, Wi-Fi, council tax, fresh linens, and full toiletries. There are no extra fees on top of the nightly rate.",
  },
  {
    question: "How does check-in work?",
    answer:
      "Smart lock and keyless entry. You receive your access code the day before arrival and can check in any time, day or night. No need to coordinate with a reception desk.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Some of our apartments accept well-behaved dogs by prior arrangement. Get in touch and we'll let you know which units in your preferred area are pet-friendly.",
  },
  {
    question: "Can I extend my stay?",
    answer:
      "Yes — provided the apartment is available. Just message your guest support contact and we'll roll the dates forward without penalty.",
  },
  {
    question: "Do you accept corporate bookings on PO terms?",
    answer:
      "Yes. We work with HR and mobility teams across London with monthly invoicing and consolidated statements. See the Corporate page or get in touch directly.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Of course. Our Kensington two-bed in particular is set up with family stays in mind — travel cot, high chair, and child-safe finishes are available on request.",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ)} />
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-stone-500">FAQ</p>
        <h1 className="mt-3 font-serif text-5xl text-stone-900">Frequently asked questions.</h1>

        <dl className="mt-12 space-y-10">
          {FAQ.map((q) => (
            <div key={q.question}>
              <dt className="font-serif text-2xl text-stone-900">{q.question}</dt>
              <dd className="mt-3 text-stone-700 leading-relaxed">{q.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
