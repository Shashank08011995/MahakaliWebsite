import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Stories of Grace — Mahakali Vedic Healing Shelter",
  description:
    "Client stories and testimonials of healing, protection, and transformation through Mahakali Vedic Healing Shelter.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-cream pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Stories of Grace</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Real seekers, real healing.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Read how people found relief from black magic, illness, relationship
            pain, and repeated obstacles with the help of Guru Didi and Maa Kali.
          </p>
        </div>
      </section>

      <Section eyebrow="Testimonials" title="Voices from the shelter">
        <Testimonials />
      </Section>
    </>
  );
}
