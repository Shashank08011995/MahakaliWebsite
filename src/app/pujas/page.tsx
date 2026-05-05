import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";
import {
  allPujaCategories,
  getPujasByCategory,
  pujaCategoryMeta,
  type PujaCategory,
} from "@/data/pujas";

export const metadata: Metadata = {
  title: "Pujas — Mahakali Vedic Healing Shelter",
  description:
    "A complete catalogue of deity, homam, planetary and ancestral pujas performed with Maa Kali's protection.",
};

export default function PujasPage() {
  return (
    <>
      <section className="bg-gradient-cream pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Pujas &amp; Yagnaas</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Protect, purify, and restore through sacred ritual.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Our pujas are performed with full devotion, exact mantras and the
            protective presence of Maa Kali. Each ritual is chosen to address a
            real need — wealth, health, protection, planetary balance, or family
            peace.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {allPujaCategories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="inline-flex items-center rounded-full border border-saffron-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-saffron-700 backdrop-blur transition hover:border-saffron-500 hover:text-saffron-800"
              >
                {pujaCategoryMeta[category].label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {allPujaCategories.map((category, idx) => {
        const list = getPujasByCategory(category);
        if (list.length === 0) return null;
        const meta = pujaCategoryMeta[category];
        return (
          <Section
            key={category}
            eyebrow={meta.label}
            title={meta.label}
            description={meta.description}
            className={idx % 2 === 1 ? "bg-cream-deep/40" : ""}
          >
            <div id={category} className="-mt-24 pt-24" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((puja) => (
                <Link
                  key={puja.slug}
                  href={`/pujas/${puja.slug}`}
                  className="group rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400"
                >
                  <div className="space-y-3">
                    <div>
                      <p className="font-serif text-xl font-semibold text-sindoor">
                        {puja.title}
                      </p>
                      {puja.sanskrit && (
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-muted">
                          {puja.sanskrit}
                        </p>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {puja.short}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm font-semibold text-saffron-700">
                    <span>{puja.pricing?.inr ?? "Ask for pricing"}</span>
                    <span>Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <section className="section">
        <div className="container-wide">
          <div className="rounded-3xl bg-gradient-saffron p-8 sm:p-12 text-center shadow-glow">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white text-balance">
              Want to choose the right puja for your needs?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Send a quick message with your situation and we will recommend the
              ritual that will help you most. Maa Kali&apos;s grace is the first step.
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
