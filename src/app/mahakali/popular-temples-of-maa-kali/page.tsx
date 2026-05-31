import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { MapPin, Calendar, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Popular Temples of Maa Kali — Mahakali",
  description:
    "Kamakhya, Tarapith, Kalighat, Dakshineswar, and Kalika Devi — the most revered temples of Maa Kali across India.",
};

const temples = [
  {
    name: "Maa Kamakhya Temple",
    initials: "MK",
    region: "Assam",
    location: "Nilachal Hill, Guwahati, Assam",
    festival: "Ambubachi Mela — June",
    badge: "Shakti Peetha",
    body: [
      "One of the four foremost Shakti Peethas — the sacred sites where parts of Sati's body fell to earth. At Kamakhya, the goddess is worshipped as the yielder of all desires.",
      "The temple is the most important centre of tantric worship in India and the focal point of the Ambubachi Mela, held every June, which draws hundreds of thousands of devotees and tantric practitioners from across the world.",
    ],
  },
  {
    name: "Tarapith",
    initials: "TP",
    region: "West Bengal",
    location: "Birbhum District, West Bengal",
    festival: "Tara Puja — Magha",
    badge: "Maha Vidya seat",
    body: [
      "Set on the banks of the Dwarka river, Tarapith is one of the most powerful seats of Maa Tara — one of the ten Maha Vidyas and a direct form of Maha Kali.",
      "Devotional tradition holds that Maa Tara gave milk to Lord Shiva when he was thirsty after consuming the cosmic poison, saving him from suffering. The temple commemorates her tenderness as much as her power.",
    ],
  },
  {
    name: "Kalighat Kali Temple",
    initials: "KG",
    region: "West Bengal",
    location: "Kalighat, Kolkata",
    festival: "Kali Puja — Kartik",
    badge: "Shakti Peetha",
    body: [
      "One of the 51 Shakti Peethas. According to tradition, the toes of the right foot of Sati fell here.",
      "The site gives Kolkata (Calcutta) its name. The temple has been a continuous centre of Kali worship for centuries, and is a daily pilgrimage destination for Bengali devotees.",
    ],
  },
  {
    name: "Dakshineswar Kali Temple",
    initials: "DK",
    region: "West Bengal",
    location: "Dakshineswar, near Kolkata",
    festival: "Daily Aarti — open year-round",
    badge: "Ramakrishna's temple",
    body: [
      "The temple at which Sri Ramakrishna Paramahamsa, the great mystic and guru of Swami Vivekananda, worshipped daily for decades.",
      "Built in the 19th century by Rani Rashmoni, Dakshineswar is a major pilgrimage site and one of the most photographed Kali temples in India.",
    ],
  },
  {
    name: "Maa Kalika Devi Temple",
    initials: "KD",
    region: "Madhya Pradesh",
    location: "Ujjain, Madhya Pradesh",
    festival: "Navratri — twice a year",
    badge: "Sapta Puri city",
    body: [
      "Ujjain is one of the seven sacred cities (Sapta Puri) of Hinduism, and the Kalika Devi temple at Ujjain is among the oldest active centres of Kali worship in central India.",
      "The temple is closely associated with the city's Mahakaleshwar Jyotirlinga and is a key pilgrimage stop for devotees travelling the Shaktipith circuit.",
    ],
  },
];

export default function PopularTemplesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">Popular Temples of Maa Kali</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Sacred places where Maa Kali&apos;s energy is{" "}
            <span className="text-sindoor">especially strong</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            These temples have, for centuries, been the centres of Kali worship
            in India — visited for protection, healing, vows fulfilled, and the
            simple wish to sit in her presence.
          </p>
        </div>
      </section>

      <Section eyebrow="Pilgrimage" title="Temples of the Divine Mother">
        <Ornament variant="trishul" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 stagger-children">
          {temples.map((t) => (
            <article
              key={t.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-saffron-200/60 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              {/* Decorative crest header — no photo */}
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-[var(--accent-soft)]/60 via-cream-deep to-[var(--accent-soft)]/20">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_25%_30%,var(--accent)_1px,transparent_1px),radial-gradient(circle_at_75%_70%,var(--accent)_1px,transparent_1px)] [background-size:24px_24px]"
                />
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-glow border border-saffron-200/60">
                    <span className="font-serif text-2xl font-bold text-sindoor">
                      {t.initials}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-sindoor border border-saffron-200/60 shadow-soft">
                    <Flame className="h-3.5 w-3.5" />
                    {t.badge}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-6 sm:p-7">
                <h3 className="font-serif text-2xl font-bold text-sindoor">
                  {t.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)]/35 px-3 py-1 font-bold text-sindoor-dark">
                    <MapPin className="h-3.5 w-3.5" />
                    {t.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-deep px-3 py-1 font-bold text-ink-soft">
                    <Calendar className="h-3.5 w-3.5" />
                    {t.festival}
                  </span>
                </div>
                <div className="mt-4 space-y-3 text-ink-soft leading-relaxed">
                  {t.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="A note for visitors"
        title="Going on pilgrimage"
        className="bg-cream-deep/40"
      >
        <Ornament variant="om" className="mb-8" />
        <p className="text-ink-soft leading-relaxed max-w-3xl animate-soft-fade">
          A pilgrimage to any of these temples is an inner journey first. Carry
          your prayer, your intention, and a quiet heart. The Mother meets
          every sincere devotee — whether they arrive at dawn at Dakshineswar
          or in monsoon at Kamakhya. She knows when you have come.
        </p>
      </Section>
    </>
  );
}
