import type { Metadata } from "next";
import { Phone, MessageCircle, Video, Clock, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Consultation — Mahakali Vedic Healing Shelter",
  description:
    "Schedule a telephonic or online consultation with Guru Didi for your spiritual healing needs.",
};

const channels = [
  {
    label: "Telephonic",
    body: "Schedule a phone conversation with Guru Didi. We work with your time zone to find the best slot.",
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    body: "Use WhatsApp for quick questions, follow-up, and sharing photographs for diagnosis.",
    Icon: MessageCircle,
  },
  {
    label: "Online Video",
    body: "When the case calls for it, we can arrange a private video consultation by Skype or similar.",
    Icon: Video,
  },
];

export default function ConsultationPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">Consultation</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Book a telephonic or online{" "}
            <span className="text-sindoor">consultation</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty font-medium">
            Consultation is the first step to diagnosing your situation and
            recommending the right healing path.
          </p>
        </div>
      </section>

      <Section eyebrow="Consultation types" title="How we connect">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 lg:grid-cols-3">
          {channels.map((c) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.label}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">
                  {c.label}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed font-medium">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Rates"
        title="Telephonic consultation"
        className="bg-cream-deep/40"
      >
        <Ornament variant="trishul" className="mb-8" />
        <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 sm:p-9 shadow-soft max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
              <Clock className="h-5 w-5" />
            </span>
            <p className="font-serif text-lg font-bold text-sindoor-dark">
              Quoted in INR &amp; USD
            </p>
          </div>
          <ul className="divide-y divide-saffron-100 text-base">
            {site.consultationRates.map((r) => (
              <li
                key={r.duration}
                className="flex items-baseline justify-between py-3"
              >
                <span className="font-bold text-ink">{r.duration}</span>
                <span className="text-ink-soft font-semibold">
                  {r.inr}{" "}
                  <span className="text-ink-muted font-medium">/ {r.usd}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-saffron-200/60 bg-cream-deep/40 p-4 text-sm text-ink-soft font-medium">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-sindoor" />
            <p>
              All consultations are strictly confidential. Nothing leaves the
              shelter without your written permission.
            </p>
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <a
            href={buildWhatsAppUrl(
              "🙏 Pranam Guru Didi, I would like to schedule a consultation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center"
          >
            <MessageCircle className="h-4 w-4" />
            Schedule a consultation
          </a>
        </div>
      </section>
    </>
  );
}
