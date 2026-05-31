import type { Metadata } from "next";
import { Crown, Check, MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { membershipTiers } from "@/data/membership";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Membership — Mahakali Vedic Healing Shelter",
  description:
    "Annual membership tiers for ongoing protection, prosperity rituals, and household wellbeing.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">Membership</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Protection that grows with your{" "}
            <span className="text-sindoor">home and work</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty font-medium">
            Our membership plans bring regular pujas, household protection,
            and prosperity support. Choose a tier that matches the scale of
            your needs and your family&apos;s devotion.
          </p>
        </div>
      </section>

      <Section eyebrow="Choose a tier" title="Ongoing care with Maa Kali's shelter">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-3xl border p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow ${
                tier.highlight
                  ? "border-saffron-400 bg-gradient-to-br from-cream-deep via-white to-cream-deep ring-2 ring-[var(--accent-soft)]"
                  : "border-saffron-200/60 bg-white"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-sindoor px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-glow animate-halo">
                  <Crown className="h-3.5 w-3.5" />
                  Most popular
                </span>
              )}
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <Crown className="h-6 w-6" />
                </span>
                <p className="mt-4 font-serif text-2xl font-bold text-sindoor">
                  {tier.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] font-bold text-ink-muted">
                  {tier.tagline}
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <p className="font-serif text-3xl font-bold text-ink">
                    {tier.pricing.inr}
                  </p>
                  <p className="text-sm font-semibold text-ink-soft">
                    / {tier.pricing.usd}
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 font-medium">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sindoor" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container-wide">
          <div className="rounded-3xl border border-saffron-200/60 bg-gradient-to-br from-cream-deep via-white to-cream-deep p-8 sm:p-12 text-center shadow-glow">
            <Ornament variant="trishul" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sindoor text-balance">
              Ready to make membership part of your protection?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft font-medium">
              Write to us on WhatsApp with the tier you are interested in and
              we will guide you through the next steps.
            </p>
            <a
              href={buildWhatsAppUrl(
                "🙏 Pranam Guru Didi, I am interested in a membership plan. Please advise which tier is best for me."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
