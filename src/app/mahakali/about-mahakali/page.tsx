import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Mahakali — Mahakali",
  description:
    "Learn more about Mahakali, her energy, and her spiritual significance.",
};

export default function AboutMahakaliPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">About Mahakali</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Who Mahakali is, and why she guides the shelter.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Mahakali is the divine mother who fiercely protects her devotees and
            frees them from the illusions of fear.
          </p>
        </div>
      </section>

      <Section eyebrow="The essence" title="Mahakali as protector and mother">
        <p className="text-ink-soft leading-relaxed">
          Her image is a reminder that destruction can be kind when it removes
          what harms us. Her shelter honours that tender fierceness.
        </p>
      </Section>
    </>
  );
}
