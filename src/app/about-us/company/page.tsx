import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Company — About Us",
  description:
    "Learn about the company and spiritual shelter behind Mahakali Vedic Healing Shelter.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Company</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Mahakali Vedic Healing Shelter Pvt. Ltd.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            We are a spiritual healing shelter dedicated to bringing Maa Kali&apos;s
            grace and protection to seekers around the world. Our company is
            built on devotion, authenticity and service.
          </p>
        </div>
      </section>

      <Section eyebrow="Our identity" title="How we serve seekers">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Our purpose</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              To offer genuine Vedic guidance and protection through mantras,
              pujas, and spiritual practice, while correcting the fearful image
              of Goddess Kali.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Our promise</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Authentic ritual, strict confidentiality, and honest counsel. Our
              work is never driven by profit alone.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
