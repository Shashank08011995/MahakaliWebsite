import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Donation — Mahakali Vedic Healing Shelter",
  description:
    "Support the shelter's healing mission through donations and spiritual sponsorship.",
};

export default function DonationPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Donation</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Support the Mahakali healing mission.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Your donation helps us keep healing work available for vulnerable clients, women survivors, and long-term spiritual rehabilitation.
          </p>
        </div>
      </section>

      <Section eyebrow="Your support" title="What your donation can do">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">Healing rituals</p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Donations help fund the special rituals needed for complex cases of black magic, curses, and spiritual disturbance.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">Women victims</p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Your support enables confidential care for women who have suffered exploitation and spiritual abuse.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">Outreach</p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Donations also support educational outreach and the shelter&apos;s efforts to share authentic Vedic healing practices safely.
            </p>
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <a
            href={buildWhatsAppUrl("🙏 Pranam Guru Didi, I would like to donate to the Mahakali Vedic Healing Shelter.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center"
          >
            Donate via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
