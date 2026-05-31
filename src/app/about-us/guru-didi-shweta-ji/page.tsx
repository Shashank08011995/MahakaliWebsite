import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Guru Didi Shweta Ji — About Us",
  description:
    "Learn about Guru Didi Shweta Ji, the spiritual leader of Mahakali Vedic Healing Shelter.",
};

export default function GuruDidiPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Guru Didi Shweta Ji</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            The spiritual guide of our shelter.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Guru Didi Shweta Ji has devoted her life to helping seekers find
            protection, healing, and peace through authentic Vedic practice.
          </p>
        </div>
      </section>

      <Section eyebrow="Her path" title="A journey of healing and service">
        <p className="text-ink-soft leading-relaxed">
          Her story is one of transformation from struggle to spiritual leadership.
          She is known for her compassion, clarity, and unwavering devotion to
          Maa Kali.
        </p>
      </Section>
    </>
  );
}
