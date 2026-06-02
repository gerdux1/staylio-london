import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Staylio",
  description:
    "Staylio is an independent London serviced apartment operator. We blend hotel-grade comfort with the space and freedom of a real home.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 prose-stone">
      <p className="text-sm uppercase tracking-widest text-stone-500">About</p>
      <h1 className="mt-3 font-serif text-5xl text-stone-900">London, lived in properly.</h1>
      <div className="mt-10 space-y-6 text-stone-700 leading-relaxed">
        <p>
          Staylio is an independent operator of fully equipped serviced apartments across Central
          London. We started because hotels feel impersonal, holiday lets are inconsistent, and
          renting takes weeks of admin you don&rsquo;t have time for.
        </p>
        <p>
          Every apartment is set up so you can arrive, drop your bags, and start living from the
          moment you walk in — fitted kitchen, fast Wi-Fi, smart TV, fresh linens, full toiletries,
          and all bills already paid. Smart locks let you check in whenever you land.
        </p>
        <p>
          We&rsquo;re a small team of real people. When something needs sorting, you can WhatsApp
          us. No call centres, no ticket numbers, no chasing.
        </p>
      </div>
    </article>
  );
}
