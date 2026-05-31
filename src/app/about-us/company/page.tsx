import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Sparkles, Flame, Star, Heart, Phone, Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Company — About Us",
  description:
    "Learn about Mahakali Vedic Healing Shelter Pvt. Ltd. — a spiritual healing zone correcting misconceptions about Goddess Kali and offering authentic Vedic remedies worldwide.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">Company</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Mahakali Vedic Healing Shelter Pvt. Ltd. — A Spiritual Healing Zone.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              We are a registered private company dedicated to correcting public
              misconceptions about Goddess Kali and offering authentic Vedic
              remedies to seekers across the world. Our work is rooted in
              devotion, ritual integrity, and a firm refusal to be drawn into
              harmful practices.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
              <strong className="text-sindoor-strong">
                We only remove Black Magic. Please do not contact us for any
                wrong mediums. Money cannot buy our moral values. Jai Maha
                Kali.
              </strong>
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-glow">
            <Image
              src="/images/mahakali-devotion.png"
              alt="Goddess Mahakali devotional artwork"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>
        </div>
      </section>

      <Section eyebrow="What we do" title="A complete spiritual healing practice">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {[
            {
              t: "Black Magic Removal",
              d: "Photograph-based diagnosis and Satvik tantra remedies for victims of vashikaran, jinn attacks, putla tantra, and maran mantras.",
              Icon: Shield,
            },
            {
              t: "Spiritual Healing",
              d: "Chakra-level treatment, aura cleansing, and protective rituals delivered through online consultations.",
              Icon: Heart,
            },
            {
              t: "Protection Services",
              d: "Vedic protection for newborns, expecting mothers, pets, vehicles, and family life.",
              Icon: Shield,
            },
            {
              t: "Pujas & Jaaps",
              d: "Traditional fire rituals, mantra recitations, and homams performed by qualified practitioners.",
              Icon: Flame,
            },
            {
              t: "Astrological Guidance",
              d: "Kundali analysis, planetary remedies, and gem recommendations rooted in Vedic astrology.",
              Icon: Star,
            },
            {
              t: "Energized Products",
              d: "Lockets, paintings, and beauty products consecrated for protection, abundance, and well-being.",
              Icon: Sparkles,
            },
          ].map((c) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">{c.t}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Our identity" title="The shelter behind the company">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-sindoor">Our purpose</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              To establish Goddess Kali in every household temple, correct her
              feared image, and create a safe shelter for those — particularly
              women — who are caught between fake practitioners and genuine
              spiritual distress.
            </p>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-sindoor">Our promise</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Authentic ritual, strict confidentiality, and honest counsel. We
              never accept work that compromises our ethics — and never charge
              for guidance that is not given.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Reach us" title="Contact the shelter">
        <div className="rounded-3xl border border-saffron-200/60 bg-cream-deep/40 p-7 shadow-soft">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-sindoor border border-saffron-200/60">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">Phone</p>
                <p className="mt-1 font-serif text-lg font-bold text-sindoor">+91-7838237702</p>
                <p className="mt-1 text-sm text-ink-soft">WhatsApp available on the same number.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-sindoor border border-saffron-200/60">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">Email</p>
                <p className="mt-1 font-serif text-lg font-bold text-sindoor break-all">
                  shwetasarojinimahakali@gmail.com
                </p>
                <p className="mt-1 text-sm text-ink-soft">Skype consultations available on request.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
}
