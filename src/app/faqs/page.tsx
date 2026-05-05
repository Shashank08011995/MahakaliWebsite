import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Mahakali Vedic Healing Shelter",
  description:
    "Frequently asked questions about spiritual healing, black magic, rituals, and how to connect with Maha Kali Shelter.",
};

export default function FaqsPage() {
  return (
    <>
      <section className="bg-gradient-cream pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">FAQs</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Answers for seekers who want clarity.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Practical guidance on the Vedic calendar, how our service works, and
            the precautions victims of black magic should take.
          </p>
        </div>
      </section>

      <Section eyebrow="Common questions" title="Your concerns answered">
        <div className="space-y-14">
          {faqs.map((group) => (
            <div key={group.group}>
              <h2 className="font-serif text-3xl font-semibold text-sindoor">
                {group.group}
              </h2>
              <div className="mt-6 space-y-8">
                {group.items.map((item) => (
                  <div key={item.q}>
                    <p className="font-semibold text-ink">{item.q}</p>
                    <p className="mt-3 text-ink-soft leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
