import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Myths About Mahakali — Mahakali",
  description:
    "Common misconceptions about Mahakali — from her appearance to her role as only a tantric goddess — and the truth behind them.",
};

const myths = [
  {
    t: "Her image should not be kept at home",
    d: "Many families hesitate to place a picture or idol of Mahakali in their household temple, afraid of her fierce appearance. This is the single greatest myth. In truth, she is the most loving, protective, kind-hearted goddess for any sincere household.",
  },
  {
    t: "She is only a goddess of tantra",
    d: "It is widely believed that Kali is exclusively for tantric practitioners. This is false. She is the most loving and powerful goddess for anyone walking the right path of life. Tantra is one of her domains; it is not her only domain.",
  },
  {
    t: "She is too dangerous to befriend",
    d: "On the contrary — Maa Kali becomes the closest friend of the devotee who is sincere and ethical. For those who live with integrity, she becomes daily protection, daily companionship, and daily strength.",
  },
  {
    t: "She is angry by nature",
    d: "Her ferocity is reserved for what is harmful, not for the seeker. The look of anger on her image is directed at evil, ego, and ignorance — never at the devotee who comes to her with a sincere heart.",
  },
];

export default function MythsAboutMahakaliPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div>
            <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
            <p className="eyebrow mt-3">Myths About Mahakali</p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              What the world misunderstands about Maa Kali.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              Generations of fear, mistranslation, and cinematic exaggeration
              have built a wall of myths around Maa Kali. The shelter exists,
              in large part, to dissolve those myths — one at a time — and to
              return her to the household altar where she belongs.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/kali.jpg"
              alt="Goddess Maa Kali"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
            />
          </div>
        </div>
      </section>

      <Section eyebrow="Common myths" title="What people get wrong">
        <Ornament variant="om" className="mb-8" />
        <div className="space-y-6 stagger-children">
          {myths.map((m, i) => (
            <div
              key={m.t}
              className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-sindoor">{m.t}</h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">{m.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="A living example" title="Ramakrishna Paramahamsa">
        <p className="text-ink-soft leading-relaxed max-w-3xl">
          The clearest answer to the myth that Kali is frightening was the life
          of Sri Ramakrishna Paramahamsa — the great 19th-century mystic and
          guru of Swami Vivekananda. He worshipped Kali daily at Dakshineswar,
          spoke of her as his mother, and described her as the most tender,
          loving, and accessible form of the Divine. His example remains the
          most direct answer to anyone who carries fear of her image.
        </p>
      </Section>

      <Section eyebrow="A simple comparison" title="The household alongside Saraswati and Lakshmi">
        <p className="text-ink-soft leading-relaxed max-w-3xl">
          At Vaishno Devi, Saraswati, Lakshmi, and Kali are worshipped
          together — three sisters of the same Divine Mother. There is no
          spiritual reason for her image to be absent from a household altar
          that already welcomes Saraswati and Lakshmi. To have all three is to
          have wisdom, abundance, and protection in one shrine.
        </p>
      </Section>
    </>
  );
}
