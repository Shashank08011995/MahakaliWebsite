import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Landmark, Calendar, ShieldCheck, MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Payment Options — Mahakali Vedic Healing Shelter",
  description:
    "Learn how to pay safely for consultations, rituals, and membership packages.",
};

const methods = [
  {
    t: "WhatsApp Payment Support",
    d: "We coordinate payments privately through WhatsApp for international and local seekers. Secure transfer instructions are shared after you connect.",
    Icon: CreditCard,
  },
  {
    t: "Bank Transfer / UPI",
    d: "For Indian clients, UPI and bank transfers are available. For overseas clients, wire transfer details are shared privately after enquiry.",
    Icon: Landmark,
  },
  {
    t: "Installment Support",
    d: "For long-term healing journeys, we can discuss installment plans with Guru Didi. Reach out to discuss what works for you.",
    Icon: Calendar,
  },
];

export default function PaymentOptionsPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">Payment Options</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Safe and simple ways to pay for our{" "}
            <span className="text-sindoor">services</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty font-medium">
            Choose the payment method that works best for you, whether you are
            booking a consultation, requesting a puja, or becoming a member.
          </p>
        </div>
      </section>

      <Section eyebrow="Accepted methods" title="How to pay">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-3">
          {methods.map((m) => {
            const Icon = m.Icon;
            return (
              <div
                key={m.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">
                  {m.t}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed font-medium">
                  {m.d}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Note"
        title="Secure, confidential, transparent"
        className="bg-cream-deep/40"
      >
        <Ornament variant="trishul" className="mb-8" />
        <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft max-w-2xl">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <p className="text-ink-soft leading-relaxed font-medium">
              All fees are quoted in advance. We never deduct payments
              automatically or store your card details. Refunds for unperformed
              rituals are handled fairly. See our{" "}
              <Link
                href="/about-us/legal-policies"
                className="text-sindoor-strong underline-offset-4 hover:underline"
              >
                Legal Policies
              </Link>{" "}
              for the full details.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary mt-6 inline-flex">
            <MessageCircle className="h-4 w-4" />
            Get payment guidance
          </Link>
        </div>
      </Section>
    </>
  );
}
