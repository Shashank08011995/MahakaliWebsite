import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { videos } from "@/data/videos";

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

      <Section
        eyebrow="Video Gallery"
        title="Latest teachings from our YouTube channel"
        description="Every video below is now part of our growing spiritual library. Watch teachings, pujas, and devotional guidance from Guru Didi Shweta Ji."
      >
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-3xl border border-saffron-200/60 bg-white shadow-soft"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                    YouTube
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {video.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {video.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
