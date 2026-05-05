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
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            A shelter built in service of <span className="text-sindoor">Maa Kali</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            Mahakali Vedic Healing Shelter was born to correct the wrong image
            carried in the world about Goddess Kali, and to make Her grace
            available to sincere seekers everywhere.
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
              Mahakali Vedic Healing Shelter Pvt. Ltd. is a spiritual healing
              zone. Our mission is to rectify the misunderstanding created about
              Goddess Kali, so that everyone can welcome Her into their home
              temple without fear.
            </p>
            <p>
              Our services are offered globally to people who suffer with stress,
              disappointment, relationship issues, work problems, health issues,
              money problems, or any disturbance they suspect may be spiritual.
            </p>
            <p>
              We cure people through photographs only. Our guidance is grounded
              in authentic Vedic remedies — mantras, pujas, chakra work and
              ritual — performed with devotion and care.
            </p>
            <p className="font-serif text-lg italic text-sindoor-dark">
              “We do not deal with wrong tantric practices. We are against evil
              practices and will never support them.”
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What we offer"
        title="Authentic Vedic help for real-life problems."
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

      <Section eyebrow="Our quick services" title="Support for immediate spiritual needs.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Name spelling corrections for prosperity",
            "Signature guidance",
            "Business card and visiting card corrections",
            "Correct company name for prosperity",
            "Astrological corrections with Maa Kali's vision",
            "Vastu adjustments for home and business",
            "Holistic healing and spiritual beauty therapy",
            "Navratri, Diwali and Chandi Path rituals",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft"
            >
              <p className="text-sm leading-relaxed text-ink-soft">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 sm:p-12 text-center shadow-glow">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink text-balance">
              Begin a conversation with Guru Didi.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
              Share your concern and we will guide you to the right ritual,
              mantra, or next step.
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-saffron-200 bg-white px-6 py-3 text-sm font-semibold text-saffron-700 backdrop-blur transition hover:bg-cream-deep"
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
