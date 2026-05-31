import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Mission & Vision — About Us",
  description:
    "Discover the mission and vision guiding Mahakali Vedic Healing Shelter.",
};

export default function MissionVisionPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Mission & Vision</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Our mission is devotion. Our vision is transformation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            We exist to remove fear from the name of Maa Kali and to create a
            safe space for seekers whose problems are spiritual, emotional, or
            unseen.
          </p>
        </div>
      </section>

      <Section eyebrow="Our mission" title="Why we do this work">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Restore faith</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              To restore faith in the protective power of Maa Kali and bring
              seekers closer to her grace.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Provide clarity</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              To offer clear guidance and authentic rituals for people who feel
              stuck, scared, or misunderstood.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Our vision" title="What we are building">
        <p className="text-ink-soft leading-relaxed">
          A global shelter known for integrity, compassion, and the correct
          practice of Vedic methods. We want every seeker to find a source of
          spiritual protection that feels safe, accurate, and loving.
        </p>
      </Section>
    </>
  );
}
