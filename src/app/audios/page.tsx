import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Audios — Mahakali Vedic Healing Shelter",
  description:
    "Listen to spiritual audio teachings, victim stories, and healing mantras.",
};

export default function AudiosPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Audios</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Audio teachings, victim testimonials, and devotional mantras.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Explore recorded sessions, meditation mantras, and survivor stories that reflect the healing power of Mahakali&apos;s shelter.
          </p>
        </div>
      </section>

      <Section eyebrow="Featured audio" title="A growing audio library">
        <div className="space-y-6">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              Audio content is being added as part of our migration. For now, please contact us to receive guidance on the latest available recordings and victim stories.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">What you can expect</p>
            <ul className="mt-4 list-inside list-disc space-y-3 text-ink-soft leading-relaxed">
              <li>Guided mantras for protection and grounding</li>
              <li>Victim recovery stories from real-life healing journeys</li>
              <li>Teachings from Guru Didi on black magic and spiritual wellness</li>
            </ul>
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Ask about audio access
          </Link>
        </div>
      </section>
    </>
  );
}
