import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { Lock, ShieldCheck, Receipt, Eye, Truck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Policies — About Us",
  description:
    "Privacy, refund, and consultation policies governing services from Mahakali Vedic Healing Shelter Pvt. Ltd.",
};

export default function LegalPoliciesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <p className="eyebrow mt-3">Legal Policies</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Transparency about how we work, charge, and protect you.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            The shelter operates under clear policies that protect the privacy,
            dignity, and reasonable expectations of every seeker who reaches
            out to us.
          </p>
        </div>
      </section>

      <Section eyebrow="Our policies" title="What you can rely on">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 stagger-children">
          {[
            {
              t: "Confidentiality",
              d: "Every consultation, photograph, and detail you share is held in strict confidence. We never share, sell, or display personal information without your written consent.",
              Icon: Lock,
            },
            {
              t: "Scope of work",
              d: "We remove black magic and provide Satvik Vedic remedies. We will never accept work intended to harm another person — and will close any case that requests such work.",
              Icon: ShieldCheck,
            },
            {
              t: "Fees and refunds",
              d: "Fees are quoted in advance, before any ritual or consultation begins. Refunds are governed by ritual completion: once a puja or jaap is performed, that fee is non-refundable, as the ritual itself cannot be returned.",
              Icon: Receipt,
            },
            {
              t: "Diagnosis honesty",
              d: "If a case is outside our scope (medical, legal, or otherwise) we will say so plainly and refer you to the appropriate help.",
              Icon: Eye,
            },
            {
              t: "Courier and delivery",
              d: "Energized products and prasad are dispatched by courier within India and internationally. Tracking is shared, and delivery timelines depend on the destination country.",
              Icon: Truck,
            },
            {
              t: "Disclaimer",
              d: "Spiritual remedies complement, and never replace, qualified medical, legal, or financial advice. We strongly encourage you to continue your professional treatment alongside any practice we prescribe.",
              Icon: AlertCircle,
            },
          ].map((p) => {
            const Icon = p.Icon;
            return (
              <div
                key={p.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">{p.t}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{p.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Questions about a policy?" title="Speak to us directly">
        <p className="text-ink-soft leading-relaxed">
          For any clarification, write to{" "}
          <strong className="text-sindoor">shwetasarojinimahakali@gmail.com</strong>{" "}
          or message{" "}
          <strong className="text-sindoor">+91-7838237702</strong> on WhatsApp.
        </p>
      </Section>
    </>
  );
}
