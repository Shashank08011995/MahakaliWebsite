import type { Metadata } from "next";
import {
  Brain,
  Mic2,
  ShieldCheck,
  Sparkles,
  Scale,
  Flame,
  Heart,
  Mail,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

const onlineClasses = [
  {
    title: "Meditation Classes",
    description:
      "Deals with the correct form of meditation. Helps in achieving peace and happiness.",
    Icon: Brain,
  },
  {
    title: "Mantra Sadhana &amp; Its Importance",
    description:
      "Deals with important mantras and how to follow them in detail. Helps in cleansing of body chakras, if followed correctly.",
    Icon: Mic2,
  },
  {
    title: "How to Get Rid of Your Fears",
    description:
      "Deals with removal of all your fears and hesitation levels through spiritual means.",
    Icon: ShieldCheck,
  },
  {
    title: "What Is the Meaning of Spirituality?",
    description:
      "Deals with details of spirituality and its importance in human life.",
    Icon: Sparkles,
  },
  {
    title: "Importance of Karma",
    description:
      "Deals with detailed explanation on karma and its hidden consequences.",
    Icon: Scale,
  },
  {
    title: "Maha Kali Mantras",
    description:
      "Deals with important mantras of Goddess Kali and their significance.",
    Icon: Flame,
  },
  {
    title: "How to Get Back Your Lost Confidence",
    description:
      "Deals with spiritual positive spells to help you understand the truth of life and its losses.",
    Icon: Heart,
  },
];

export const metadata: Metadata = {
  title: "Online Classes — Mahakali Vedic Healing Shelter",
  description:
    "Live and recorded online classes with Guru Didi Shweta Ji on meditation, mantra, spirituality, and healing.",
};

export default function OnlineClassesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
          <p className="eyebrow mt-4">Online Classes</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Learn the practice, not just the{" "}
            <span className="text-sindoor">ritual</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty font-medium">
            Guru Didi teaches the meaning and correct application of mantras,
            meditation, fear removal, and spiritual discipline in a
            personalised format.
          </p>
        </div>
      </section>

      <Section eyebrow="Available topics" title="The classes we offer">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {onlineClasses.map((item) => {
            const Icon = item.Icon;
            return (
              <article
                key={item.title}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                  <Icon className="h-6 w-6" />
                </span>
                <h2
                  className="mt-4 font-serif text-xl font-bold text-sindoor"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="mt-3 text-ink-soft leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Fees"
        title="How to enrol"
        className="bg-cream-deep/40"
      >
        <Ornament variant="trishul" className="mb-8" />
        <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 sm:p-9 shadow-soft max-w-2xl">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <p className="font-serif text-lg font-bold text-sindoor-dark">
                Email your interest
              </p>
              <p className="mt-2 text-ink-soft leading-relaxed font-medium">
                Our online classes are priced individually. Please email your
                request and area of interest to{" "}
                <a
                  href="mailto:shwetasarojinimahakali@gmail.com"
                  className="text-sindoor-strong underline-offset-4 hover:underline break-all"
                >
                  shwetasarojinimahakali@gmail.com
                </a>{" "}
                — include your motive and the level you want to achieve.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
