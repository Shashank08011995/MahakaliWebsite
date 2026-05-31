import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Legal Policies — About Us",
  description:
    "Read the privacy, refund, and legal policies for Mahakali Vedic Healing Shelter.",
};

export default function LegalPoliciesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Legal Policies</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Trust and transparency in our service.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Our policies ensure your privacy, the proper use of our services, and
            clear terms for the guidance we provide.
          </p>
        </div>
      </section>

      <Section eyebrow="Our policies" title="What you can expect">
        <div className="space-y-6">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Privacy</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Your conversations are confidential. We do not share sensitive
              personal information without your consent.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Refunds</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We handle financial matters fairly and transparently, with clear
              guidance before you commit to any ritual or consultation.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
