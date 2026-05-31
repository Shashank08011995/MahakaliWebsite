import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Powers of Maa Kali — Mahakali",
  description:
    "Discover the different powers of Maa Kali and how they protect and transform.",
};

export default function PowersOfMaaKaliPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Powers of Maa Kali</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            The many powers of the divine mother.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Maa Kali carries many powers — protection, transformation, wisdom, and
            the ability to remove obstacles.
          </p>
        </div>
      </section>

      <Section eyebrow="Her gifts" title="How her power helps seekers">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            "Protection from negativity",
            "Removal of karmic obstacles",
            "Courage through fear",
            "Inner transformation",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft"
            >
              <p className="text-ink-soft leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
