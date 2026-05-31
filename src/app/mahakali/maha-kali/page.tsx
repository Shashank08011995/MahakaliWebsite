import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Maha Kali — Mahakali",
  description:
    "Maha Kali, her ten forms (Dasa Maha Vidya), and her role as the supreme planetary remedy in Vedic astrology and Hindu devotion.",
};

const dasaMahaVidya = [
  {
    name: "Kali",
    planet: "Saturn (Shani)",
    note: "Destruction of time and ignorance.",
    image: "/images/kali.jpg",
  },
  {
    name: "Tara",
    planet: "Jupiter (Brihaspati)",
    note: "Guidance and protection.",
    image: "/images/puja-jupiter-jaap.jpg",
  },
  {
    name: "Tripura Sundari",
    planet: "Mercury (Budha)",
    note: "Beauty and clarity of mind.",
    image: "/images/LAXMI.jpg",
  },
  {
    name: "Bhuvaneshwari",
    planet: "Moon (Chandra)",
    note: "Queen of the world.",
    image: "/images/mata-trinity.jpg",
  },
  {
    name: "Tripura Bhairavi",
    planet: "Mars (Mangal)",
    note: "Fierce purification.",
    image: "/images/kali1.jpg",
  },
  {
    name: "Chhinnamasta",
    planet: "Rahu",
    note: "Sudden awakening and self-sacrifice.",
    image: "/images/puja-rahu.jpg",
  },
  {
    name: "Dhumavati",
    planet: "Ketu",
    note: "The widow goddess of dissolution.",
    image: "/images/puja-ketu.jpg",
  },
  {
    name: "Bagalamukhi",
    planet: "Mars (Mangal)",
    note: "The stilling of enemies and harmful speech.",
    image: "/images/baglamukhi-mata.jpg",
  },
  {
    name: "Matangi",
    planet: "Sun (Surya)",
    note: "The outcaste goddess of speech and music.",
    image: "/images/puja-saraswati.jpg",
  },
  {
    name: "Kamala",
    planet: "Venus (Shukra)",
    note: "The lotus goddess of wealth and grace.",
    image: "/images/puja-venus-jaap.jpg",
  },
];

export default function MahaKaliPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-center">
          <div>
            <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
            <p className="eyebrow mt-3">Maha Kali</p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              The Great Mother, manifest in ten forms.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              In the Vedic tradition, Maha Kali is the supreme form of Adi
              Shakti — the primordial feminine power from which all goddesses
              emerge. She expresses herself through ten distinct forms, the
              Dasa Maha Vidya, each one connected to a planet and a particular
              kind of grace.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              For the seeker, this means: there is no planetary affliction in
              your birth chart that Maha Kali cannot reach. To worship Kali, in
              one of her ten forms, is to receive the most direct planetary
              remedy in Vedic astrology.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/kali.jpg"
              alt="Goddess Maha Kali"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>
        </div>
      </section>

      <Section eyebrow="Dasa Maha Vidya" title="The ten forms of the Great Mother">
        <Ornament variant="om" className="mb-8" />
        <p className="text-ink-soft leading-relaxed max-w-3xl mb-10">
          Each of the ten Maha Vidyas is sovereign — a complete goddess in her
          own right — and yet they are all aspects of one Maha Kali. They are
          the great planetary remedies of the Vedic tradition.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 stagger-children">
          {dasaMahaVidya.map((g, i) => (
            <article
              key={g.name}
              className="overflow-hidden rounded-3xl border border-saffron-200/60 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15">
                <Image
                  src={g.image}
                  alt={g.name}
                  fill
                  sizes="(min-width: 1280px) 18vw, (min-width: 640px) 33vw, 50vw"
                  className="object-contain p-2"
                />
                <span className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-sindoor shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-sindoor">{g.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {g.planet}
                </p>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {g.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why she matters today" title="The mother for our age">
        <Ornament variant="trishul" className="mb-8" />
        <div className="space-y-5 text-ink-soft leading-relaxed max-w-3xl">
          <p>
            The Vedic texts describe our age as Kalyug — a time of confusion,
            broken trust, exploitation, and spiritual disturbance. Of all the
            forms of the Divine Mother, Maha Kali is the form prescribed for
            this age. Her ferocity is precisely the medicine our times require.
          </p>
          <p>
            She is not fear itself; she is the power that destroys fear and
            injustice. To the one who surrenders, she is the gentlest and most
            loving mother imaginable. To what threatens her devotee, she is
            without mercy.
          </p>
        </div>
      </Section>
    </>
  );
}
