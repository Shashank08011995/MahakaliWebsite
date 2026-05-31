import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import {
  Headphones,
  Flame,
  PenLine,
  ClipboardList,
  HeartHandshake,
  Lock,
  MessageSquare,
  Clock,
  Globe,
  HandHeart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career — About Us",
  description:
    "Career opportunities at Mahakali Vedic Healing Shelter — roles for those who wish to serve seekers through ritual, administration, content, and care.",
};

const qualities = [
  {
    t: "Devotion",
    d: "Sincere devotion to Maa Kali and respect for Vedic tradition.",
    Icon: HandHeart,
  },
  {
    t: "Confidentiality",
    d: "Strict ability to hold seeker confidentiality, lifelong.",
    Icon: Lock,
  },
  {
    t: "Patience",
    d: "Patience and clarity in difficult, emotional conversations.",
    Icon: MessageSquare,
  },
  {
    t: "Discipline",
    d: "Punctuality and dependable follow-through on commitments.",
    Icon: Clock,
  },
  {
    t: "Online fluency",
    d: "Comfort with WhatsApp, Skype, email, and modern tools.",
    Icon: Globe,
  },
  {
    t: "Service spirit",
    d: "A sincere wish to serve — not to be served.",
    Icon: HeartHandshake,
  },
];

export default function CareerPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">Career</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Join a shelter where service is the work.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              We welcome devoted individuals who want to assist seekers through
              spiritual care, ritual support, content creation, and
              administrative integrity. Roles are open to candidates who can
              hold confidence, move with compassion, and honour the discipline
              of the practice.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/puja-saraswati.jpg"
              alt="Maa Saraswati — patron of learning and service"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>
        </div>
      </section>

      <Section eyebrow="Open roles" title="Where you can contribute">
        <Ornament variant="lotus" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 stagger-children">
          {[
            {
              t: "Seeker Support",
              d: "Respond to incoming enquiries on WhatsApp, telephone, and email with care, accuracy, and discretion.",
              Icon: Headphones,
            },
            {
              t: "Ritual Assistant",
              d: "Support Guru Didi in the preparation and conduct of pujas, jaaps, and homams under direct supervision.",
              Icon: Flame,
            },
            {
              t: "Content & Communications",
              d: "Write, translate, and design content that explains spiritual practice clearly to seekers across India and abroad.",
              Icon: PenLine,
            },
            {
              t: "Administration",
              d: "Coordinate appointments, courier logistics for prasad and energized products, and confidential record-keeping.",
              Icon: ClipboardList,
            },
          ].map((r) => {
            const Icon = r.Icon;
            return (
              <div
                key={r.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">
                  {r.t}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{r.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="What we look for"
        title="Qualities we value over qualifications"
        className="bg-cream-deep/40"
      >
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {qualities.map((q) => {
            const Icon = q.Icon;
            return (
              <div
                key={q.t}
                className="group rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor transition group-hover:bg-[var(--accent-soft)]/70">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg font-bold text-sindoor">
                      {q.t}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {q.d}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="To apply" title="Reach out to the shelter">
        <Ornament variant="trishul" className="mb-8" />
        <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft max-w-3xl">
          <p className="text-ink-soft leading-relaxed">
            Send your introduction, the role you are interested in, and a
            short note about why you wish to serve, to{" "}
            <strong className="text-sindoor-strong">
              shwetasarojinimahakali@gmail.com
            </strong>{" "}
            or message us on WhatsApp at{" "}
            <strong className="text-sindoor-strong">+91-7838237702</strong>.
            We respond to every applicant personally.
          </p>
        </div>
      </Section>
    </>
  );
}
