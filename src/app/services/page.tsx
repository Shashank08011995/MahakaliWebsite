import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import {
  allCategories,
  categoryMeta,
  getServicesByCategory,
} from "@/data/services";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services — Vedic Healing & Protection",
  description:
    "Vedic remedies and rituals for protection, healing, growth, life solutions, spiritual guidance, and quick energetic corrections.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-cream pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Our Services</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Vedic remedies for the burdens we all carry.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Every offering below is rooted in scripture and refined through
            years of work with real seekers. Read freely. When something feels
            right, write to Guru Didi on WhatsApp — there is no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <a
                key={cat}
                href={`#${cat}`}
                className="inline-flex items-center rounded-full border border-saffron-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-saffron-700 backdrop-blur transition hover:border-saffron-500 hover:text-saffron-800"
              >
                {categoryMeta[cat].label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {allCategories.map((cat, idx) => {
        const list = getServicesByCategory(cat);
        if (list.length === 0) return null;
        const meta = categoryMeta[cat];
        return (
          <Section
            key={cat}
            eyebrow={`Area ${idx + 1}`}
            title={meta.label}
            description={meta.description}
            className={idx % 2 === 1 ? "bg-cream-deep/40" : ""}
          >
            <div id={cat} className="-mt-24 pt-24" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Section>
        );
      })}

      <section className="section">
        <div className="container-wide">
          <div className="rounded-3xl bg-gradient-saffron p-8 sm:p-12 text-center shadow-glow">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white text-balance">
              Not sure where to begin?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Send us a short message about what you are facing. Guru Didi
              will personally guide you to the right path.
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
