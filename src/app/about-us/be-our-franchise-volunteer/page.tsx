import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Be Our Franchise / Volunteer — About Us",
  description:
    "Learn how to partner with Mahakali Vedic Healing Shelter as a franchise or volunteer.",
};

export default function FranchiseVolunteerPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Be Our Franchise / Volunteer</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Partner with us to spread spiritual healing.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            We invite committed individuals and teams to join our shelter as
            franchise partners and volunteers.
          </p>
        </div>
      </section>

      <Section eyebrow="Get involved" title="How you can contribute">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Franchise</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Expand the shelter's reach to new communities while preserving our
              spiritual standards and service principles.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Volunteer</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Support seekers through administrative help, outreach, and the
              care of spiritual practitioners.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
