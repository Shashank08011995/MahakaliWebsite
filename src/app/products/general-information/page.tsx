import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "General Information — Products",
  description:
    "General information about spiritually energized products from Mahakali Vedic Healing Shelter.",
};

export default function ProductInfoPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Product Information</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            How our spiritually energized products are prepared.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Every product is prepared with prayer, mantra, and spiritual energy to
            support its intended effect.
          </p>
        </div>
      </section>

      <Section eyebrow="Preparation" title="What makes these products special">
        <div className="space-y-6">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              Each item is blessed in a focused ceremony and energized for its
              purpose, whether protection, beauty, or blessing.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              We describe each product clearly so seekers can choose exactly what
              matches their need.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
