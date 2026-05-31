import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { Camera, MessageCircle, Flame, Package, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work — About Us",
  description:
    "Our operational model: photo and date-of-birth based diagnosis, online consultations, courier delivery of prasad and energized products — domestically and internationally.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">How We Work</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              A confidential, online-first model for spiritual care.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              Every seeker is supported through a clear, repeatable process —
              built so that distance, language, and physical mobility never
              become barriers to receiving Maa Kali&apos;s grace.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/ganesha.jpg"
              alt="Lord Ganesha — remover of obstacles"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>
        </div>
      </section>

      <Section eyebrow="The process" title="From first message to follow-through">
        <Ornament variant="om" className="mb-8" />
        <div className="space-y-6 stagger-children">
          {[
            {
              s: "Step 1 — Share your photograph and date of birth",
              d: "Diagnosis begins with a clear photograph and birth details. These give us the spiritual signature needed to read your situation accurately without an in-person meeting.",
              Icon: Camera,
            },
            {
              s: "Step 2 — Confidential consultation",
              d: "Guru Didi reviews your case — through chart, photograph, and a confidential conversation over WhatsApp, Viber, Skype, or telephone. Sensitive details never leave the shelter.",
              Icon: MessageCircle,
            },
            {
              s: "Step 3 — Online ritual or prescription",
              d: "Most cases are handled online. The necessary puja, jaap, or remedy is performed at the shelter, and personal practices are prescribed for you to follow at home.",
              Icon: Flame,
            },
            {
              s: "Step 4 — Courier of prasad and energized products",
              d: "Energized lockets, prasad, dhoop, and other consecrated objects are couriered to you — within India and internationally — so that physical distance never delays the remedy.",
              Icon: Package,
            },
            {
              s: "Step 5 — In-person only when essential",
              d: "We meet in person only when a case specifically demands it. The remainder of the journey is conducted through ongoing online guidance.",
              Icon: MapPin,
            },
          ].map((c, i) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.s}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-bold text-sindoor">{c.s}</h3>
                    <p className="mt-3 text-ink-soft leading-relaxed">{c.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="A note on our site" title="Why our pages use clear, large text">
        <p className="text-ink-soft leading-relaxed max-w-3xl">
          Much of our seeker base is elderly, in spiritual distress, or reading
          on a phone with limited vision. Our pages are written in clear,
          generous type — and historically in capital letters — so that no one
          who needs help is excluded by the design of the site.
        </p>
      </Section>

      <Section>
        <div className="rounded-3xl border border-saffron-200/60 bg-cream-deep/40 p-7 shadow-soft">
          <p className="font-serif text-xl italic text-sindoor-dark">
            &ldquo;We only remove Black Magic. Don&apos;t contact us for any
            wrong mediums.&rdquo;
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ink-muted">
            — The shelter&apos;s working principle
          </p>
        </div>
      </Section>
    </>
  );
}
