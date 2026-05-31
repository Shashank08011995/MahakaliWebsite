import type { Metadata } from "next";
import { Heart, Sparkles, HandHeart, MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Donation — Mahakali Vedic Healing Shelter",
  description:
    "Support the shelter's healing mission through donations and spiritual sponsorship.",
};

const supportAreas = [
  {
    t: "Healing for the vulnerable",
    d: "Your donation funds free or reduced-fee remedies for those who cannot afford spiritual care — black magic victims, women in distress, and the elderly.",
    Icon: Heart,
  },
  {
    t: "Outreach &amp; awareness",
    d: "Help us reach more seekers with content in regional languages and free educational material on Satvik tantra.",
    Icon: Sparkles,
  },
  {
    t: "Mahakali Ashram fund",
    d: "Contribute to the long-term goal of establishing a permanent Mahakali Ashram and Temple — a refuge for women.",
    Icon: HandHeart,
  },
];

export default function DonationPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">Donation</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Support the{" "}
            <span className="text-sindoor">Mahakali healing mission</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty font-medium">
            Your donation helps us keep healing work available for vulnerable
            clients, women survivors, and long-term spiritual rehabilitation.
          </p>
        </div>
      </section>

      <Section eyebrow="Where it goes" title="What your support funds">
        <Ornament variant="lotus" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-3">
          {supportAreas.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">
                  {s.t}
                </h3>
                <p
                  className="mt-3 text-ink-soft leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: s.d }}
                />
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="How to donate"
        title="Reach out to make a donation"
        className="bg-cream-deep/40"
      >
        <Ornament variant="om" className="mb-8" />
        <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 sm:p-9 shadow-soft max-w-2xl">
          <p className="text-ink-soft leading-relaxed font-medium">
            We coordinate donations privately, so that the means and amount
            stay between you and the shelter. Send a message on WhatsApp and we
            will share transfer instructions for the country you are donating
            from.
          </p>
          <a
            href={buildWhatsAppUrl(
              "🙏 Pranam Guru Didi, I would like to make a donation to the shelter."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6 inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Donate via WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}
