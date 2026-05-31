import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Horoscope / Kundli — Mahakali Vedic Healing Shelter",
  description:
    "Horoscope and kundli making services to identify planetary influences and spiritual remedies.",
};

export default function HoroscopePage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Horoscope & Kundli</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Understand your birth chart and the remedies that support you.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Our horoscope services help identify planetary challenges, doshas, and the right spiritual remedies for your life path.
          </p>
        </div>
      </section>

      <Section eyebrow="What we do" title="Horoscope and kundli services">
        <div className="space-y-6">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              We create an accurate kundli and interpret how planets are affecting your health, relationships, and career.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              Based on your chart, we recommend spiritual rituals, gemstones, or lifestyle adjustments to restore balance.
            </p>
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <a
            href={buildWhatsAppUrl("🙏 Pranam Guru Didi, I would like a horoscope and kundli reading.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center"
          >
            Request horoscope help
          </a>
        </div>
      </section>
    </>
  );
}
