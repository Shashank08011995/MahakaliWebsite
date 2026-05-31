import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Stories — Mahakali Vedic Healing Shelter",
  description:
    "Read inspiring seeker stories and healing journeys from our shelter.",
};

export default function StoriesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Stories</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Stories of transformation and healing.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Read the journeys of seekers who found protection, clarity, and
            renewed strength with Mahakali Vedic Healing Shelter.
          </p>
        </div>
      </section>

      <Section eyebrow="Victim stories" title="Real seekers, real healing">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400"
            >
              <p className="font-serif text-xl font-semibold text-sindoor">
                {story.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {story.summary}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
