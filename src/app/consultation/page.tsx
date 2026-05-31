import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Consultation — Mahakali Vedic Healing Shelter",
  description:
    "Schedule a telephonic or online consultation with Guru Didi for your spiritual healing needs.",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Consultation</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Book a telephonic or online consultation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Consultation is the first step to diagnosing your situation and recommending the right healing path.
          </p>
        </div>
      </section>

      <Section eyebrow="Consultation types" title="How we connect">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">Telephonic</p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Schedule a phone conversation with Guru Didi. We will work with your time zone to find the best slot.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">WhatsApp</p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Use WhatsApp for quick questions and follow up after your consultation.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">Online video</p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              When requested, we can arrange an online session through video conferencing.
            </p>
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <a
            href={buildWhatsAppUrl("🙏 Pranam Guru Didi, I would like to schedule a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center"
          >
            Schedule a consultation
          </a>
        </div>
      </section>
    </>
  );
}
