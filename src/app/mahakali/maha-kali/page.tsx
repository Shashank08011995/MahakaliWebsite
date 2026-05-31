import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Maha Kali — Mahakali" ,
  description:
    "Learn about Maha Kali, her symbolism, and her role in protection and spiritual transformation.",
};

export default function MahaKaliPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Maha Kali</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            The great mother of transformation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Maha Kali is the fiercest form of the Divine Mother, bringing both
            protection and renewal to those who seek her.
          </p>
        </div>
      </section>

      <Section eyebrow="The manifestation" title="Understanding Maha Kali">
        <p className="text-ink-soft leading-relaxed">
          She is not fear itself, but the power that destroys fear and injustice.
          Her presence is for the one who is ready to surrender and be protected.
        </p>
      </Section>
    </>
  );
}
