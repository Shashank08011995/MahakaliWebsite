import Link from "next/link";
import type { Metadata } from "next";
import { Flame, Sparkles, Orbit, Users } from "lucide-react";
import { Ornament } from "@/components/Ornament";
import { RitualCard } from "@/components/RitualCard";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";
import {
  allPujaCategories,
  getPujasByCategory,
  pujaCategoryMeta,
  pujas,
  type PujaCategory,
} from "@/data/pujas";

export const metadata: Metadata = {
  title: "Pujas — Mahakali Vedic Healing Shelter",
  description:
    "A complete catalogue of deity, homam, planetary and ancestral pujas performed with Maa Kali's protection.",
};

const categoryIcons: Record<PujaCategory, React.ComponentType<{ className?: string }>> = {
  deity: Sparkles,
  homam: Flame,
  planetary: Orbit,
  ancestral: Users,
};

export default function PujasPage() {
  const total = pujas.length;
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <p className="eyebrow mt-3">Pujas &amp; Yagnaas</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            {total} sacred rituals — chosen for your need.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Our pujas are performed with full devotion, exact mantras, and the
            protective presence of Maa Kali. Each ritual is chosen to address a
            real need — wealth, health, protection, planetary balance, or family
            peace.
          </p>
        </div>
      </section>

      {/* Category navigator */}
      <section className="bg-cream-deep/40 border-y border-saffron-200/60">
        <div className="container-wide py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allPujaCategories.map((cat) => {
              const meta = pujaCategoryMeta[cat];
              const Icon = categoryIcons[cat];
              const count = getPujasByCategory(cat).length;
              return (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="group flex items-start gap-4 rounded-2xl border border-saffron-200/60 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400 hover:shadow-glow"
                >
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor transition group-hover:bg-[var(--accent-soft)]/70">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-serif text-lg font-bold text-ink">{meta.label}</h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        {count}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {meta.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {allPujaCategories.map((category, idx) => {
        const list = getPujasByCategory(category);
        if (list.length === 0) return null;
        const meta = pujaCategoryMeta[category];
        const Icon = categoryIcons[category];
        return (
          <section
            key={category}
            id={category}
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
                  {meta.label}
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
                  {meta.description}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-sindoor">
                  {list.length} puja{list.length === 1 ? "" : "s"}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((puja) => (
                  <RitualCard
                    key={puja.slug}
                    href={`/pujas/${puja.slug}`}
                    title={puja.title}
                    sanskrit={puja.sanskrit}
                    short={puja.short}
                    image={puja.image}
                    pricing={puja.pricing}
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
            <Ornament variant="om" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sindoor text-balance">
              Not sure which puja to choose?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Send a short message describing your situation. Guru Didi will
              recommend the ritual that addresses your need — and explain why.
            </p>
            <a
              href={buildWhatsAppUrl(quickMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 inline-flex"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
