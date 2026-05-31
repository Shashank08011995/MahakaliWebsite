import Image from "next/image";
import type { Metadata } from "next";
import { Heart, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/data/videos";
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
    Icon: ShieldCheck,
  },
  {
    title: "Compassion",
    body: "Souls reach us at their lowest. We meet every one of them without judgement, without shame, and without conditions.",
    Icon: Heart,
  },
  {
    title: "Confidentiality",
    body: "What is shared with Guru Didi stays with Guru Didi. Lifelong. Without exception.",
    Icon: Sparkles,
  },
  {
    title: "Integrity",
    body: "We never overcharge. We never promise what cannot be promised. Money cannot buy our moral values.",
    Icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">About the Shelter</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              A shelter built in service of{" "}
              <span className="text-sindoor">Maa Kali</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              Mahakali Vedic Healing Shelter was born to correct the wrong
              image carried in the world about Goddess Kali, and to make Her
              grace available to sincere seekers everywhere.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-glow">
            <Image
              src="/images/didi.jpg"
              alt="Guru Didi Shweta Ji"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 sm:p-7">
              <p className="font-devanagari text-sm text-marigold-200">
                जय माँ काली
              </p>
              <p className="mt-1 font-serif text-lg italic text-white/95">
                Guru Didi Shweta Ji
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder body */}
      <Section eyebrow="The Founder" title="Guru Didi Shweta Ji">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:items-start">
          <div className="grid grid-cols-3 gap-3 stagger-children">
            {[
              "/images/didi-photo-002.jpg",
              "/images/didi-photo-003.jpg",
              "/images/didi-photo-006.jpg",
              "/images/didi-photo-011.jpg",
              "/images/didi-photo-015.jpg",
              "/images/didi-photo-FB-IMG-1496157957716.jpg",
            ].map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={src}
                  alt={`Guru Didi Shweta Ji — photograph ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 12vw, 25vw"
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Mahakali Vedic Healing Shelter Pvt. Ltd. is a spiritual healing
              zone founded by <strong className="text-ink">Shweta Bisht</strong>{" "}
              — known to seekers as Guru Didi Shweta Ji. Our mission is to
              rectify the misunderstanding created about Goddess Kali, so that
              every household can welcome Her into the home temple without
              fear.
            </p>
            <p>
              A graduate of Delhi Public School (1999) and Delhi University in
              Political Science Honours, Shweta Ji&apos;s early career was in
              corporate soft-skills training — including with American Express.
              A long passage of supernatural affliction, and the deep devotion
              that brought her through it, turned her life towards Maa Kali.
            </p>
            <p>
              Our services are offered globally to seekers facing stress,
              disappointment, relationship issues, work problems, health
              issues, money problems, or any disturbance they suspect may be
              spiritual. Cases are diagnosed through photographs and date of
              birth, and guidance is rooted in authentic Vedic remedies —
              mantras, pujas, chakra work and ritual — performed with devotion
              and care.
            </p>
            <p className="font-serif text-lg italic text-sindoor-dark">
              &ldquo;We do not deal with wrong tantric practices. We are
              against evil practices and will never support them.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* Principles with icons */}
      <Section
        eyebrow="What we stand for"
        title="Authentic Vedic help for real-life problems."
        className="bg-cream-deep/40"
      >
        <Ornament variant="lotus" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
          {principles.map((p) => {
            const Icon = p.Icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold text-sindoor">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Video highlights — playable inline */}
      <Section
        eyebrow="Watch Guru Didi"
        title="A few teachings from her channel"
        description="Tap any thumbnail to watch on the page. Many more are in the gallery."
      >
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {videos.slice(0, 3).map((video, i) => (
            <VideoCard key={video.id} video={video} priority={i < 2} />
          ))}
        </div>
      </Section>

      {/* Quick services */}
      <Section
        eyebrow="Our quick services"
        title="Support for immediate spiritual needs."
        className="bg-cream-deep/40"
      >
        <Ornament variant="trishul" className="mb-8" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
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
              className="rounded-2xl border border-saffron-200/60 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <p className="text-sm leading-relaxed text-ink-soft">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl border border-saffron-200/60 bg-gradient-to-br from-cream-deep via-white to-cream-deep p-8 sm:p-12 text-center shadow-glow">
            <Ornament variant="om" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sindoor text-balance">
              Begin a conversation with Guru Didi.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
              Share your concern and we will guide you to the right ritual,
              mantra, or next step.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={buildWhatsAppUrl(quickMessages.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sindoor bg-white px-6 py-3 font-serif text-lg font-bold text-sindoor transition hover:bg-cream-deep"
              >
                <Phone className="h-5 w-5" />
                {site.contact.phone}
              </a>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-muted">
              WhatsApp on the same number — no Viber required
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
