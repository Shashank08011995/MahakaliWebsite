import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { jaaps } from "@/data/jaaps";

export const metadata: Metadata = {
  title: "Jaaps — Mahakali Vedic Healing Shelter",
  description:
    "Continuous mantra recitation practices for protection, healing, and planetary balance.",
};

export default function JaapsPage() {
  return (
    <>
      <section className="bg-gradient-cream pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Jaaps</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Sustained mantra practice for deep transformation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            A jaap is the repeated recitation of a sacred mantra. These practices
            are chosen when a single ritual is not enough — when protection,
            healing, or planetary correction must be woven into daily life.
          </p>
        </div>
      </section>

      <Section eyebrow="Our Jaaps" title="Choose the mantra that matches your path."> 
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jaaps.map((jaap) => (
            <Link
              key={jaap.slug}
              href={`/jaaps/${jaap.slug}`}
              className="group rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400"
            >
              <div className="space-y-3">
                <div>
                  <p className="font-serif text-xl font-semibold text-sindoor">
                    {jaap.title}
                  </p>
                  {jaap.sanskrit && (
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-muted">
                      {jaap.sanskrit}
                    </p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {jaap.short}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold text-saffron-700">
                <span>{jaap.pricing?.inr ?? "Ask for pricing"}</span>
                <span>Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
