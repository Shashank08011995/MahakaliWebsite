import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Popular Temples of Maa Kali — Mahakali",
  description:
    "A guide to some of the most revered temples dedicated to Maa Kali.",
};

export default function PopularTemplesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Popular Temples of Maa Kali</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Sacred places where Maa Kali&apos;s energy is especially strong.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            These temples are known for their devotion, miracles, and the powerful
            protection of Maa Kali.
          </p>
        </div>
      </section>

      <Section eyebrow="Temple list" title="A few important temples">
        <div className="space-y-6">
          {[
            "Kalighat Temple, Kolkata",
            "Dakshineswar Kali Temple, Kolkata",
            "Kamakhya Temple, Assam",
            "Maa Kalika Temple, Ujjain",
          ].map((temple) => (
            <div
              key={temple}
              className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft"
            >
              <p className="text-ink-soft leading-relaxed">{temple}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
