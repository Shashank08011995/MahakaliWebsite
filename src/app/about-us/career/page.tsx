import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Career — About Us",
  description:
    "Career opportunities and volunteer roles at Mahakali Vedic Healing Shelter.",
};

export default function CareerPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Career</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Join our shelter in service and growth.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            We welcome people who want to support spiritual healing, ritual care,
            and compassionate seeker services.
          </p>
        </div>
      </section>

      <Section eyebrow="Opportunities" title="How to join our team">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Roles available</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Support, administration, content creation, and spiritual coordination
              roles are available for committed candidates.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Our expectations</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Integrity, devotion to service, and a sincere wish to help seekers
              in a respectful and confidential environment.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
