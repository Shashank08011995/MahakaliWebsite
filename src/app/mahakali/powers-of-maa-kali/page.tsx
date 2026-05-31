import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Users, Flame, Heart } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Powers of Maa Kali — Mahakali",
  description:
    "The four great powers of Maa Kali — destruction of black magic, removal of negative people, inner strength, and protection of relationships.",
};

const powers = [
  {
    t: "Destruction of Black Magic",
    d: "Maa Kali is the supreme authority over every form of tantra. Her worship completely dissolves black magic, evil tantra, and bound spells, and shields the devotee from further attacks of the same nature.",
    Icon: ShieldCheck,
  },
  {
    t: "Removal of Negative People",
    d: "Toxic relationships, manipulative colleagues, and harmful family dynamics begin to dissolve in her presence. People who depend on hurting you simply lose their hold over your life.",
    Icon: Users,
  },
  {
    t: "Inner Strength and Fearlessness",
    d: "True worship of Maa Kali transmits her own quality of courage to the devotee. The reactive, anxious, fearful self gives way to clarity and resolve.",
    Icon: Flame,
  },
  {
    t: "Protection of Relationships",
    d: "She destroys disloyalty and betrayal within marriages and partnerships. For those who keep their commitments sincerely, she protects the bond fiercely.",
    Icon: Heart,
  },
];

export default function PowersOfMaaKaliPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">Powers of Maa Kali</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Why even the <span className="text-sindoor">Trimurti</span> turn
              to her.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              The powers of Maa Kali are immense. The Vedic tradition holds
              that even the Trimurti — Brahma, Vishnu, and Mahesh — offer their
              devotion to her. To worship Maa Kali sincerely is to receive the
              combined blessings of all of these great lords.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/mahakali-devotion.png"
              alt="Devotional worship of Maa Kali"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>
        </div>
      </section>

      <Section eyebrow="The four powers" title="How her grace reaches the seeker">
        <Ornament variant="trishul" className="mb-8" />
        <p className="text-ink-soft leading-relaxed max-w-3xl mb-10">
          In the present age — Kalyug — life is shaped by greed, infidelity,
          deceit, and the widespread misuse of tantra. These are precisely the
          afflictions that Maa Kali was prophesied to address. The seeker who
          turns to her finds her power expressed in four primary ways.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 stagger-children">
          {powers.map((p, i) => {
            const Icon = p.Icon;
            return (
              <div
                key={p.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                      Power {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold text-sindoor">{p.t}</h3>
                    <p className="mt-3 text-ink-soft leading-relaxed">{p.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="An invitation" title="Begin a sincere worship">
        <Ornament variant="lotus" className="mb-8" />
        <p className="text-ink-soft leading-relaxed max-w-3xl animate-soft-fade">
          Words about Maa Kali&apos;s powers can only carry the seeker so far.
          The rest is met through experience. Even a small, sincere daily
          worship — a lamp, a chant, a moment of remembrance — is enough for
          her to begin showing the devotee how loving and giving her heart is.
        </p>
      </Section>
    </>
  );
}
