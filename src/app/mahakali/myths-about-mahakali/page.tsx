import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Myths About Mahakali — Mahakali",
  description:
    "Clear the common myths and misunderstandings about Mahakali.",
};

export default function MythsAboutMahakaliPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Myths About Mahakali</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Separating truth from fear.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Many people believe Maa Kali is only violent or frightening. The truth
            is that she is a fierce mother who destroys what keeps us trapped.
          </p>
        </div>
      </section>

      <Section eyebrow="Common myths" title="What people misunderstand">
        <div className="space-y-6">
          {[
            {
              title: "She is only destructive",
              body: "Maa Kali destroys ignorance and fear, not the devotee. Her destruction frees the soul.",
            },
            {
              title: "She is only for the very advanced",
              body: "Her protection is available to sincere seekers at every stage.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft"
            >
              <p className="font-serif text-xl font-semibold text-sindoor">{item.title}</p>
              <p className="mt-3 text-ink-soft leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
