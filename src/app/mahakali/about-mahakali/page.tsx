import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "About Mahakali — Mahakali",
  description:
    "Understanding the iconography, symbolism, and compassion of Goddess Mahakali — the most loving form of the Divine Mother behind her fierce appearance.",
};

const iconography = [
  {
    feature: "Red, extended tongue",
    meaning:
      "Symbolises her thirst for destroying evil. The colour red is the colour of righteous action — not anger but unstoppable correction.",
  },
  {
    feature: "Naked, dark form",
    meaning:
      "Signifies infinity. She is uncovered because nothing in creation can clothe her — she is beyond form, even as she takes form to bless her devotee.",
  },
  {
    feature: "Multiple hands",
    meaning:
      "Represent the totality of karma and action in the universe. Each hand holds a tool — for blessing, for protection, for cutting away what binds you.",
  },
  {
    feature: "Garland of skulls",
    meaning:
      "Each skull is a letter of the Sanskrit alphabet — the seed sounds of creation itself. She wears speech and knowledge as her ornament.",
  },
  {
    feature: "Standing on Shiva",
    meaning:
      "Not a defeat but a meeting — the moment power (Shakti) and stillness (Shiva) meet. She steps on him to remember herself and stop.",
  },
];

const aspects = [
  { src: "/images/kali.jpg", label: "Maa Kali — the eternal Mother" },
  { src: "/images/kali1.jpg", label: "Iconography — Kali in her standing form" },
  { src: "/images/mahakali-devotion.png", label: "Mahakali devotion — Raja Ravi Varma" },
  { src: "/images/durga.jpg", label: "Maa Durga — another face of the Mother" },
];

export default function AboutMahakaliPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">About Mahakali</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              The most compassionate and loving form of the{" "}
              <span className="text-sindoor">Divine Mother</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              Behind her fierce appearance, Mahakali is the most tender,
              accessible and protective of all the forms of the Divine Mother.
              Every part of her iconography carries meaning — and that meaning,
              once understood, replaces fear with reverence.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/kali.jpg"
              alt="Goddess Mahakali"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>
        </div>
      </section>

      {/* Aspects strip */}
      <section className="bg-cream-deep/40 border-y border-saffron-200/60">
        <div className="container-wide py-10">
          <p className="text-center text-xs sm:text-sm uppercase tracking-[0.24em] font-bold text-ink-muted">
            Her faces in Vedic art
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
            {aspects.map((a) => (
              <figure
                key={a.src}
                className="overflow-hidden rounded-2xl border border-saffron-200/60 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[var(--accent-soft)]/30 to-cream-deep">
                  <Image
                    src={a.src}
                    alt={a.label}
                    fill
                    sizes="(min-width: 1024px) 18vw, 50vw"
                    className="object-contain p-2"
                  />
                </div>
                <figcaption className="p-3 text-center text-xs font-bold text-ink-soft">
                  {a.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Iconography" title="Reading her form">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-8 lg:grid-cols-[1fr,1.3fr] lg:items-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/kali1.jpg"
              alt="Iconography of Goddess Mahakali"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
            />
          </div>
          <div className="space-y-4 stagger-children">
            {iconography.map((i, idx) => (
              <div
                key={i.feature}
                className="rounded-2xl border border-saffron-200/60 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor text-sm font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-sindoor">
                      {i.feature}
                    </h3>
                    <p className="mt-1 text-ink-soft leading-relaxed">
                      {i.meaning}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Her invitation" title="The personal responsibility she asks">
        <Ornament variant="trishul" className="mb-8" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="rounded-3xl border border-saffron-200/60 bg-cream-deep/40 p-7 shadow-soft animate-soft-fade">
            <p className="font-serif text-xl sm:text-2xl italic text-sindoor-dark">
              &ldquo;You are your own authority and your own power. Take
              personal responsibility today.&rdquo;
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              This is the heart of Mahakali&apos;s teaching. She does not want
              dependent children; she wants empowered devotees. Her protection
              comes most fully to the one who is ready to act with courage and
              take responsibility for their own life and choices.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/mata-trinity.jpg"
              alt="Trimurti and Tridevi"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="A note on fear"
        title="Why she only seems frightening"
        className="bg-cream-deep/40"
      >
        <Ornament variant="lotus" className="mb-8" />
        <p className="text-ink-soft leading-relaxed max-w-3xl animate-soft-fade">
          Mahakali appears fierce to what is unjust, harmful, and
          exploitative. To the seeker, the devotee, and the child, she is the
          gentlest mother in the entire pantheon. The fear most people carry
          about her image is the projection of their own unhealed memories —
          not an accurate reading of her nature.
        </p>
      </Section>
    </>
  );
}
