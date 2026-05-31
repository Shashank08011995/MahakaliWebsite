import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Payment Options — Mahakali Vedic Healing Shelter",
  description:
    "Learn how to pay safely for consultations, rituals, and membership packages.",
};

export default function PaymentOptionsPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Payment Options</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Safe and simple ways to pay for our services.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Choose the payment method that works best for you, whether you are
            booking a consultation, requesting a puja, or becoming a member.
          </p>
        </div>
      </section>

      <Section eyebrow="Accepted methods" title="How to pay">
        <div className="space-y-6">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">WhatsApp Payment Support</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              We coordinate payments through WhatsApp for international and local seekers. After you connect, we will provide secure transfer instructions.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Bank Transfer / UPI</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              For Indian clients, UPI and bank transfers are available. For overseas clients, wire transfer details are shared privately after enquiry.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Installment support</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              If you are seeking long-term healing, we can discuss payment installments with Guru Didi. Please contact us to learn more.
            </p>
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Get payment guidance
          </Link>
        </div>
      </section>
    </>
  );
}
