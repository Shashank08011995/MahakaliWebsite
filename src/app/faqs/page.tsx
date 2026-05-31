import type { Metadata } from "next";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Mahakali Vedic Healing Shelter",
  description:
    "Frequently asked questions about spiritual healing, black magic, rituals, and how to connect with Maha Kali Shelter.",
};

export default function FaqsPage() {
  const total = faqs.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">FAQs</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Answers for seekers who want{" "}
            <span className="text-sindoor">clarity</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty font-medium">
            Practical guidance on the Vedic calendar, how our service works,
            and the precautions victims of black magic should take.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)]/40 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-sindoor-dark">
            <HelpCircle className="h-4 w-4" />
            {total} answered questions
          </p>
        </div>
      </section>

      <Section eyebrow="Common questions" title="Your concerns answered">
        <Ornament variant="om" className="mb-8" />
        <div className="space-y-14">
          {faqs.map((group) => (
            <div key={group.group}>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sindoor">
                  {group.group}
                </h2>
              </div>
              <div className="mt-6 space-y-5">
                {group.items.map((item, i) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-saffron-200/60 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow open:shadow-glow"
                  >
                    <summary className="flex cursor-pointer list-none items-start gap-4">
                      <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sm font-bold text-sindoor">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="flex-1 font-serif text-base sm:text-lg font-bold text-ink">
                        {item.q}
                      </p>
                      <span
                        aria-hidden
                        className="font-serif text-2xl text-sindoor transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 ml-12 text-ink-soft leading-relaxed font-medium">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
