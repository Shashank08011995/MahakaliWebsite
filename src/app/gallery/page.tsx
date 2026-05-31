import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { VideoCard } from "@/components/VideoCard";
import { Ornament } from "@/components/Ornament";
import { videos } from "@/data/videos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Video Gallery — Mahakali Vedic Healing Shelter",
  description:
    "The complete library of teachings, pujas, and devotional messages from Guru Didi Shweta Ji — playable inline.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <p className="eyebrow mt-3">Gallery</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Teachings, pujas, and the living legacy of Maa Kali.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Every video below plays right here on the page — no need to leave
            the site. Click any thumbnail to start watching. New teachings are
            added regularly from Guru Didi Shweta Ji&apos;s channel.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sindoor" />
              {videos.length} videos in the library
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sindoor" />
              Updated regularly
            </span>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sindoor hover:text-sindoor-dark"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sindoor" />
              Visit the YouTube channel
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="Video Library" title="Watch the complete collection">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} priority={i < 3} />
          ))}
        </div>
      </Section>

      <section className="section bg-cream-deep/40">
        <div className="container-wide">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-8 sm:p-12 text-center shadow-soft">
            <Ornament variant="trishul" className="mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-sindoor text-balance">
              Want a particular teaching covered?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
              Suggestions for new videos — pujas, jaaps, planetary remedies,
              live questions — are welcome. Send a note on WhatsApp and Guru
              Didi will see it personally.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Send a suggestion
              </Link>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
