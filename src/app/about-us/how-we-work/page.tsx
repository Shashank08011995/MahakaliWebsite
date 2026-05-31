import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "How We Work — About Us",
  description:
    "Understand the processes and practices Mahakali Vedic Healing Shelter follows.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">How We Work</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            The process behind our care.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Every case begins with listening, diagnosis, and a personalized
            spiritual plan. We combine Vedic ritual with practical guidance.
          </p>
        </div>
      </section>

      <Section eyebrow="The process" title="The path we follow">
        <div className="space-y-8">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Step 1: Listen</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We begin with a confidential conversation to understand the
              situation fully — health, relationships, career, or spiritual
              disturbance.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Step 2: Diagnose</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We use Vedic tools, mantras, and intuition to identify the energetic
              patterns behind the problem.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold text-sindoor">Step 3: Support</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              A personalized ritual, mantra, or correction is offered, along with
              ongoing guidance via WhatsApp.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
