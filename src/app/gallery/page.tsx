import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Gallery — Mahakali Vedic Healing Shelter",
  description:
    "A legacy collection of spiritual videos and teachings from the Mahakali Healing Shelter.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Teachings, stories, and the legacy of Maa Kali.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            This page preserves the spirit of the legacy video gallery. It is a
            work in progress as we migrate the original videos and teachings.
          </p>
        </div>
      </section>

      <Section eyebrow="Video Gallery" title="A spiritual library in progress">
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft">
            <h2 className="font-serif text-xl font-semibold text-sindoor">
              Legacy Video Gallery
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              The original site included a collection of video teachings and
              spiritual talks from Mahakali Vedic Healing Shelter. We are
              migrating those resources here so seekers can access them safely.
            </p>
          </article>
          <article className="rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft">
            <h2 className="font-serif text-xl font-semibold text-sindoor">
              Need a specific teaching?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Contact us on WhatsApp and mention the topic you are looking for.
              We will share the right talk or practice from our archive.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
