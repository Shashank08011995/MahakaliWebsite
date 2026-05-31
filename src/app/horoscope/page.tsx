import type { Metadata } from "next";
import { Star, Sparkles, Moon, MessageCircle, Sun } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Horoscope / Kundli — Mahakali Vedic Healing Shelter",
  description:
    "Horoscope and kundli making services to identify planetary influences and spiritual remedies.",
};

const offerings = [
  {
    t: "Kundli (Birth Chart)",
    d: "An accurate Vedic kundli prepared from your date, time, and place of birth — read for what each planet is doing in your chart today.",
    Icon: Star,
  },
  {
    t: "Planetary Diagnosis",
    d: "Identification of difficult Mahadasha, Sade Sati, Rahu-Ketu axis, or doshas — and the role each is playing in your life.",
    Icon: Moon,
  },
  {
    t: "Remedies",
    d: "Spiritual rituals, gemstones, mantras, and lifestyle adjustments matched to your chart — never one-size-fits-all.",
    Icon: Sparkles,
  },
];

export default function HoroscopePage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">Horoscope &amp; Kundli</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Understand your birth chart and the{" "}
            <span className="text-sindoor">remedies that support you</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty font-medium">
            Our horoscope services help identify planetary challenges, doshas,
            and the right spiritual remedies for your life path.
          </p>
        </div>
      </section>

      <Section eyebrow="What we offer" title="Horoscope and kundli services">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-3">
          {offerings.map((o) => {
            const Icon = o.Icon;
            return (
              <div
                key={o.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">
                  {o.t}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed font-medium">
                  {o.d}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="To begin"
        title="Share your birth details"
        className="bg-cream-deep/40"
      >
        <Ornament variant="trishul" className="mb-8" />
        <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 sm:p-9 shadow-soft max-w-2xl">
          <p className="text-ink-soft leading-relaxed font-medium">
            Send us your{" "}
            <strong className="text-sindoor-strong">date of birth</strong>,{" "}
            <strong className="text-sindoor-strong">time of birth</strong>,
            and{" "}
            <strong className="text-sindoor-strong">place of birth</strong> on
            WhatsApp. We will prepare your chart and schedule a reading.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.18em]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)]/40 px-3 py-1.5 text-sindoor-dark">
              <Sun className="h-3.5 w-3.5" />
              Vedic system
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-deep px-3 py-1.5 text-ink-soft">
              Confidential
            </span>
          </div>
          <a
            href={buildWhatsAppUrl(
              "🙏 Pranam Guru Didi, I would like a horoscope and kundli reading."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6 inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Request horoscope reading
          </a>
        </div>
      </Section>
    </>
  );
}
