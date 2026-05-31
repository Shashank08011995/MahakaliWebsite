import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Ornament } from "@/components/Ornament";
import {
  Heart,
  Shield,
  TrendingUp,
  LifeBuoy,
  Sparkles,
  Wand2,
} from "lucide-react";
import {
  allCategories,
  categoryMeta,
  getServicesByCategory,
  services,
  type ServiceCategory,
} from "@/data/services";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services — Vedic Healing & Protection",
  description:
    "All Vedic remedies and rituals at Mahakali Vedic Healing Shelter — protection, healing, growth, life solutions, spiritual guidance, and quick energetic corrections.",
};

const categoryIcons: Record<ServiceCategory, React.ComponentType<{ className?: string }>> = {
  protection: Shield,
  healing: Heart,
  growth: TrendingUp,
  solutions: LifeBuoy,
  spiritual: Sparkles,
  remedies: Wand2,
};

export default function ServicesPage() {
  const totalCount = services.length;

  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <p className="eyebrow mt-3">Our Services</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            {totalCount} Vedic remedies for the burdens we all carry.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Every offering below is rooted in scripture and refined through
            years of work with real seekers. Read freely — when something feels
            right, write to Guru Didi on WhatsApp. There is no obligation.
          </p>
        </div>
      </section>

      {/* Category navigator with icons */}
      <section className="bg-cream-deep/40 border-y border-saffron-200/60">
        <div className="container-wide py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allCategories.map((cat) => {
              const meta = categoryMeta[cat];
              const Icon = categoryIcons[cat];
              const count = getServicesByCategory(cat).length;
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
                      <h3 className="font-serif text-lg font-bold text-ink">
                        {meta.label}
                      </h3>
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

      {allCategories.map((cat, idx) => {
        const list = getServicesByCategory(cat);
        if (list.length === 0) return null;
        const meta = categoryMeta[cat];
        const Icon = categoryIcons[cat];
        return (
          <section
            key={cat}
            id={cat}
            className={`section scroll-mt-24 ${
              idx % 2 === 1 ? "bg-cream-deep/40" : ""
            }`}
          >
            <div className="container-wide">
              <div className="mb-10 sm:mb-12 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="eyebrow">{`Area ${idx + 1}`}</p>
                </div>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
                  {meta.label}
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
                  {meta.description}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-sindoor">
                  {list.length} offering{list.length === 1 ? "" : "s"}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
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
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-sindoor text-balance">
              Not sure where to begin?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Send a short message about what you are facing. Guru Didi will
              personally read your note and guide you to the right ritual,
              mantra, or next step.
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
