import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { Heart, Shield, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision — About Us",
  description:
    "The mission and vision guiding Mahakali Vedic Healing Shelter: building the Mahakali Ashram, protecting women, and restoring the loving image of Goddess Kali.",
};

export default function MissionVisionPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">Mission &amp; Vision</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Our mission is devotion. Our vision is a fearless shelter.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              We exist to correct the public perception of Goddess Kali and
              spread awareness of her love and care. Our ambition is to build
              the Mahakali Ashram and Temple — a refuge for women caught in
              spiritual, domestic, and paranormal distress.
            </p>
            <p className="mt-4 text-base sm:text-lg italic text-sindoor-strong leading-relaxed">
              &ldquo;We want that without any doubts or fear, everyone must
              have one picture of Goddess Kali in their house temples.&rdquo;
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/durga.jpg"
              alt="Maa Durga — the Divine Mother"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>
        </div>
      </section>

      <Section eyebrow="Our mission" title="Three commitments to the seeker">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-3 stagger-children">
          {[
            {
              t: "Restore the image of Maa Kali",
              d: "Free her from the fearful stereotype and re-introduce her as the most compassionate, protecting, and loving form of the Divine Mother.",
              Icon: RefreshCw,
            },
            {
              t: "Shelter the exploited",
              d: "Stand between vulnerable women and fake practitioners who exploit them in the name of spirituality and tantra.",
              Icon: Shield,
            },
            {
              t: "Restore confidence",
              d: "Reach black magic victims and their families with the message that genuine remedies exist — and hope is appropriate.",
              Icon: Heart,
            },
          ].map((c) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">{c.t}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Our vision" title="The Mahakali Ashram and Temple">
        <p className="text-ink-soft leading-relaxed max-w-3xl">
          We are working towards the establishment of a physical Mahakali Ashram
          and Temple — a sanctuary where women facing family-related struggles,
          spiritual exploitation, or paranormal disturbance can stay, recover,
          and rebuild their lives under the protection of Maa Kali.
        </p>
        <p className="mt-4 text-ink-soft leading-relaxed max-w-3xl">
          Globally, we envision a shelter known for integrity, ritual
          correctness, and compassion — where every seeker, regardless of
          country or background, finds a source of spiritual protection that is
          authentic, accurate, and safe.
        </p>
      </Section>

      <Section>
        <div className="rounded-3xl border border-saffron-200/60 bg-cream-deep/60 p-8 text-center shadow-soft">
          <p className="font-serif text-2xl sm:text-3xl italic text-sindoor-dark">
            &ldquo;MONEY CANNOT BUY OUR MORAL VALUES.&rdquo;
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ink-muted">
            Jai Maha Kali
          </p>
        </div>
      </Section>
    </>
  );
}
