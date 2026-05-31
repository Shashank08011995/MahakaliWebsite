import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Directors — About Us",
  description: "Meet the leadership guiding Mahakali Vedic Healing Shelter.",
};

export default function DirectorsPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Directors</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Leadership rooted in devotion and experience.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Our directors provide spiritual oversight, ritual integrity, and the
            care standards that keep our shelter safe for every seeker.
          </p>
        </div>
      </section>

      <Section eyebrow="Our leaders" title="The people who guide the shelter">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Guru Didi Shweta Ji",
              role: "Founder & Spiritual Guide",
              description:
                "Guides the rituals, teachings, and spiritual counselling at the shelter.",
            },
            {
              name: "Executive Director",
              role: "Operations & Care",
              description:
                "Ensures every seeker receives respectful communication and dependable service.",
            },
            {
              name: "Vedic Ritual Lead",
              role: "Ritual Integrity",
              description:
                "Oversees all pujas, jaaps, and ceremonies to ensure proper Vedic practice.",
            },
          ].map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">
                {leader.role}
              </p>
              <p className="mt-3 font-serif text-2xl font-semibold text-sindoor">
                {leader.name}
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
