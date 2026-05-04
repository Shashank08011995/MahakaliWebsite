import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Guru Didi & Our Mission",
  description:
    "Mahakali Vedic Healing Shelter was founded by Guru Didi Shweta Ji to bring the protection of Maa Kali to seekers across the world.",
};

const principles = [
  {
    title: "Authenticity",
    body: "Every ritual we perform is rooted in scripture and conducted with full devotion. Nothing is theatre. Nothing is for show.",
  },
  {
    title: "Compassion",
    body: "Souls reach us at their lowest. We meet every one of them without judgement, without shame, and without conditions.",
  },
  {
    title: "Confidentiality",
    body: "What is shared with Guru Didi stays with Guru Didi. Lifelong. Without exception.",
  },
  {
    title: "Integrity",
    body: "We never overcharge. We never promise what cannot be promised. Money cannot buy our moral values.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-cream pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            A shelter built in service of <span className="text-sindoor">Maa Kali</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            Mahakali Vedic Healing Shelter was created with a single,
            uncompromising intention — to rectify the misunderstanding the
            world has built around Goddess Kali, and to make Her grace
            accessible to anyone who seeks it with sincerity.
          </p>
        </div>
      </section>

      <Section eyebrow="The Founder" title="Guru Didi Shweta Ji">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:items-start">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-deep shadow-soft">
              <Image
                src="/images/mahakali-devotion.png"
                alt="Imagery of Maa Kali devotion"
                fill
                sizes="(min-width: 1024px) 33vw, 80vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs italic text-ink-muted">
              Photography of Guru Didi Shweta Ji to be added.
            </p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              For more than a decade, Guru Didi Shweta Ji has dedicated her
              life to the practice of Vedic spiritual healing — the slow,
              careful work of removing what does not belong in a person&apos;s
              life and inviting in what does.
            </p>
            <p>
              Seekers come to her from across India and from across the world
              — Toronto, Dubai, London, Sydney, Singapore, Mauritius. Their
              names and stories are different. The pain that brings them is
              often the same: a marriage cracking, a child unable to sleep, a
              business that resists every effort, a family touched by
              something it cannot name.
            </p>
            <p>
              Guru Didi&apos;s practice is rooted in authentic Vedic ritual,
              guided by the protective fire of Maa Kali, and carried out with
              the tenderness only someone who has truly seen suffering can
              offer.
            </p>
            <p className="font-serif text-lg italic text-sindoor-dark">
              &ldquo;Maa Kali does not destroy. She destroys what destroys
              you.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What We Stand For"
        title="Four principles, never negotiable."
        className="bg-cream-deep/40"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-saffron-200/60 bg-white p-7 shadow-soft"
            >
              <h3 className="font-serif text-2xl font-semibold text-sindoor">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our Mission" title="Why this shelter exists.">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="text-base leading-relaxed text-ink-soft">
            Goddess Kali has been misunderstood for centuries. She has been
            painted as fearsome, wrathful, terrifying. The truth is the
            opposite. She is the most fiercely protective form of the Divine
            Mother — the one who stands between Her devotees and what would
            harm them, and refuses to let it pass.
          </p>
          <p className="text-base leading-relaxed text-ink-soft">
            Our shelter exists to bring this truth into the lives of those
            ready to receive it — through ritual, through counsel, through
            healing, and through the patient daily work of spiritual practice.
            We do not turn anyone away.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-saffron p-8 sm:p-12 text-center shadow-glow">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white text-balance">
              Begin a conversation with Guru Didi.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
              Share what you are carrying. We will guide you to the right
              practice, the right ritual, or the right next step.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={buildWhatsAppUrl(quickMessages.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Message on WhatsApp
              </a>
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Call {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
