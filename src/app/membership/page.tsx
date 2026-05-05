import type { Metadata } from "next";
import { Section } from "@/components/Section";
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
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Membership</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Protection that grows with your home and work.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Our membership plans bring regular pujas, household protection, and
            prosperity support. Choose a tier that matches the scale of your
            needs and your family&apos;s devotion.
          </p>
        </div>
      </section>

      <Section eyebrow="Choose a tier" title="Ongoing care with Maa Kali's shelter">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-3xl border p-7 shadow-soft transition ${tier.highlight ? "border-saffron-400 bg-cream-deep/60" : "border-saffron-200/60 bg-white"}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-2xl font-semibold text-sindoor">
                    {tier.name}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-muted">
                    {tier.tagline}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-ink">{tier.pricing.inr}</p>
                  <p className="text-sm text-ink-soft">{tier.pricing.usd}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft list-disc list-inside">
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container-wide">
          <div className="rounded-3xl bg-gray-50 p-8 sm:p-12 text-center shadow-glow">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink text-balance">
              Ready to make membership part of your protection?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Write to us on WhatsApp with the tier you are interested in and we
              will guide you through the next steps.
            </p>
            <a
              href={buildWhatsAppUrl(
                "🙏 Pranam Guru Didi, I am interested in a membership plan. Please advise which tier is best for me."
              )}
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
