import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Satvik Tantra — Mahakali",
  description:
    "Discover Satvik Tantra, the pure Vedic path of spiritual protection and healing.",
};

export default function SatvikTantraPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Satvik Tantra</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            The pure path of Vedic practice.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Satvik Tantra is rooted in purity, devotion, and the transformative
            power of spiritual discipline.
          </p>
        </div>
      </section>

      <Section eyebrow="The teaching" title="What it means to practice satvik tantra">
        <p className="text-ink-soft leading-relaxed">
          This path is not about power for its own sake. It is about aligning
          body, mind, and ritual with the divine law so that protection and
          healing become possible.
        </p>
      </Section>
    </>
  );
}
