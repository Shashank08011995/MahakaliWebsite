import Link from "next/link";
import type { Metadata } from "next";
import { Sparkles, Orbit } from "lucide-react";
import { Ornament } from "@/components/Ornament";
import { RitualCard } from "@/components/RitualCard";
import { jaaps } from "@/data/jaaps";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Jaaps — Mahakali Vedic Healing Shelter",
  description:
    "Continuous mantra recitation practices for protection, healing, and planetary balance.",
};

const deityJaaps = jaaps.filter((j) => !j.slug.startsWith("planet-"));
const planetaryJaaps = jaaps.filter((j) => j.slug.startsWith("planet-"));

const sections = [
  {
    id: "deity",
    label: "Deity Jaaps",
    description:
      "Mantras dedicated to specific deities — for healing, protection, and the unshakable presence of the Divine Mother.",
    icon: Sparkles,
    list: deityJaaps,
  },
  {
    id: "planetary",
    label: "Planetary Jaaps",
    description:
      "Mantras for the navagraha — softening the influence of difficult planetary placements in your birth chart.",
    icon: Orbit,
    list: planetaryJaaps,
  },
];

export default function JaapsPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <p className="eyebrow mt-3">Jaaps</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            {jaaps.length} mantras for deep transformation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            A jaap is the repeated, sustained recitation of a sacred mantra.
            These practices are chosen when a single ritual is not enough —
            when protection, healing, or planetary correction must be woven
            into daily life over weeks and months.
          </p>
        </div>
      </section>

      <section className="bg-cream-deep/40 border-y border-saffron-200/60">
        <div className="container-wide py-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-start gap-4 rounded-2xl border border-saffron-200/60 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400 hover:shadow-glow"
                >
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor transition group-hover:bg-[var(--accent-soft)]/70">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-serif text-lg font-bold text-ink">{s.label}</h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        {s.list.length}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {s.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {sections.map((s, idx) => {
        if (s.list.length === 0) return null;
        const Icon = s.icon;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`section scroll-mt-24 ${idx % 2 === 1 ? "bg-cream-deep/40" : ""}`}
          >
            <div className="container-wide">
              <div className="mb-10 sm:mb-12 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="eyebrow">{`Category ${idx + 1}`}</p>
                </div>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                  {s.label}
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
                  {s.description}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-sindoor">
                  {s.list.length} jaap{s.list.length === 1 ? "" : "s"}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {s.list.map((jaap) => (
                  <RitualCard
                    key={jaap.slug}
                    href={`/jaaps/${jaap.slug}`}
                    title={jaap.title}
                    sanskrit={jaap.sanskrit}
                    short={jaap.short}
                    image={jaap.image}
                    pricing={jaap.pricing}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container-wide">
          <div className="rounded-3xl border border-saffron-200/60 bg-gradient-to-br from-cream-deep via-white to-cream-deep p-8 sm:p-12 text-center shadow-glow">
            <Ornament variant="trishul" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sindoor text-balance">
              Begin a daily mantra practice.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Share your situation on WhatsApp. Guru Didi will guide you to the
              jaap your chart and circumstances call for.
            </p>
            <a
              href={buildWhatsAppUrl(quickMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 inline-flex"
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
