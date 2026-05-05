import type { Metadata } from "next";
import { Section } from "@/components/Section";

const onlineClasses = [
  {
    title: "Meditation Classes",
    description:
      "Deals with the correct form of meditation. Helps in achieving peace and happiness.",
  },
  {
    title: "Mantra Sadhana (Process) and Its Importance",
    description:
      "Deals with important mantras and how to follow them in detail. Helps in cleansing of body chakras, if followed correctly.",
  },
  {
    title: "How to Get Rid of Your Fears",
    description:
      "Deals with removal of all your fears and hesitation levels through spiritual means.",
  },
  {
    title: "What Is the Meaning of Spirituality?",
    description:
      "Deals with details of spirituality and its importance in human life.",
  },
  {
    title: "Importance of Karamas?",
    description:
      "Deals with detailed explanation on karma and its hidden consequences.",
  },
  {
    title: "Maha Kali Mantras",
    description:
      "Deals with important mantras of Goddess Kali and their significance.",
  },
  {
    title: "How to Get Back Your Lost Confidence",
    description:
      "Deals with spiritual positive spells to help you understand the truth of life and its losses.",
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
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Online Classes</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Learn the practice, not just the ritual.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Guru Didi teaches the meaning and correct application of mantras,
            meditation, fear removal, and spiritual discipline in a personalised
            format.
          </p>
        </div>
      </section>

      <Section eyebrow="Available topics" title="The classes we offer">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {onlineClasses.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft"
            >
              <h2 className="font-serif text-xl font-semibold text-sindoor">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container-wide max-w-3xl">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-8 shadow-soft">
            <p className="font-serif text-2xl font-semibold text-sindoor">
              Fee details
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our online classes are priced individually. Please email your
              request and your area of interest to
              <a
                href="mailto:shwetasarojinimahakali@gmail.com"
                className="text-saffron-700 hover:text-saffron-800"
              >
                shwetasarojinimahakali@gmail.com
              </a>
              . Include your motive and the level that you want to achieve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
