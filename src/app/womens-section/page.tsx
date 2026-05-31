import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Women's Section — Mahakali Vedic Healing Shelter",
  description:
    "Confidential support and installment options for women affected by fake healers and spiritual abuse.",
};

export default function WomensSectionPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Women&apos;s Section</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Support for women survivors of spiritual exploitation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            This section offers confidential healing, respectful care, and flexible payments for women navigating trauma from fake spiritual practitioners.
          </p>
        </div>
      </section>

      <Section eyebrow="How we help" title="Care designed for women">
        <div className="space-y-6">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              Cases are handled with extra sensitivity and confidentiality. We do not share your story without your consent.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              When a woman has suffered at the hands of fake healers, we provide detailed diagnosis, healing rituals, and safe follow-up support.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <p className="text-ink-soft leading-relaxed">
              We offer payment installment options so women can access the care they need without undue financial pressure.
            </p>
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <a
            href={buildWhatsAppUrl("🙏 Pranam Guru Didi, I am a woman seeking confidential support from the Women's Section.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center"
          >
            Connect confidentially on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
