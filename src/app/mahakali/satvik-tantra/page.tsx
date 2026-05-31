import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Satvik Tantra — Mahakali",
  description:
    "Satvik Tantra — the original, ethical tantra designed by Lord Shiva and nourished by Goddess Kali for the removal of negativity and the betterment of all beings.",
};

export default function SatvikTantraPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div>
            <p className="font-devanagari text-sindoor">ॐ नमः शिवाय</p>
            <p className="eyebrow mt-3">Satvik Tantra</p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Tantra, as it was originally given.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              The word tantra has been misunderstood for decades, treated as
              something dark or forbidden. In its original, Vedic form, tantra
              is none of those things.
            </p>
            <p className="mt-4 text-base sm:text-lg italic text-sindoor leading-relaxed">
              &ldquo;Tantra was designed by Lord Shiva and nourished by Goddess
              Kali for the betterment of all beings.&rdquo;
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/SHIV.jpg"
              alt="Lord Shiva, source of Satvik Tantra"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
            />
          </div>
        </div>
      </section>

      <Section eyebrow="The teaching" title="What Satvik Tantra actually is">
        <Ornament variant="om" className="mb-8" />
        <div className="space-y-5 text-ink-soft leading-relaxed max-w-3xl">
          <p>
            Satvik Tantra is the ethical, pure-intentioned form of tantra — the
            original system designed for the removal of negativities and the
            spiritual upliftment of the practitioner. Its mantras and methods
            are direct, fast-acting, and never used to harm another being.
          </p>
          <p>
            In the Vedic understanding, satvik tantra is one of the fastest
            paths to spiritual connection. Where ordinary devotion may take
            years, tantric ritual — performed correctly, with a satvik intent —
            can produce decisive results in much shorter timeframes.
          </p>
          <p>
            What gives any tantra its character is intent. The same fire ritual
            performed with malice becomes destructive; performed with sincere
            devotion and the wish to remove suffering, it becomes a sacrament.
            The shelter works exclusively in the second category.
          </p>
        </div>
      </Section>

      <Section eyebrow="The crisis of our time" title="Why this work is needed now">
        <div className="rounded-3xl border border-saffron-200/60 bg-cream-deep/40 p-7 shadow-soft">
          <p className="font-serif text-xl italic text-sindoor-dark">
            &ldquo;Seven houses out of ten today are victims of bad tantra —
            commonly known as black magic.&rdquo;
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            This is the assessment that drives the shelter&apos;s daily work.
            The misuse of tantra is so widespread that most households are
            affected by it without ever realising it — through stalled
            careers, broken health, ruined relationships, and unexplained
            children&apos;s issues. Satvik tantra exists to undo what bad tantra
            has done.
          </p>
        </div>
      </Section>

      <Section eyebrow="Our position" title="An unbreakable ethical line">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              t: "What we do",
              d: "Remove black magic, dissolve bound spells, perform pujas and jaaps for protection and well-being, and prescribe Satvik tantric remedies to seekers.",
            },
            {
              t: "What we will not do",
              d: "We never accept work intended to harm, influence, or bind another person. Vashikaran, maran tantra, and similar work are categorically refused.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft"
            >
              <h3 className="font-serif text-xl font-semibold text-sindoor">{c.t}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-saffron-200/60 bg-cream-deep/60 p-8 text-center shadow-soft">
          <p className="font-serif text-2xl italic text-sindoor-dark">
            &ldquo;Money cannot buy our moral values.&rdquo;
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ink-muted">
            Jai Maha Kali
          </p>
        </div>
      </Section>
    </>
  );
}
