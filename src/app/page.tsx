import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  HandHeart,
  Heart,
  LifeBuoy,
  Mail,
  MessageCircle,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";
import type { ComponentType } from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { VideoCard } from "@/components/VideoCard";
import { Ornament } from "@/components/Ornament";
import { categoryMeta, services, type ServiceCategory } from "@/data/services";
import { videos } from "@/data/videos";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

const featuredCategories: ServiceCategory[] = [
  "healing",
  "protection",
  "solutions",
  "growth",
];

const valueIcons = [Shield, Heart, Sparkles];

const areaIcons: Record<ServiceCategory, ComponentType<{ className?: string }>> = {
  protection: Shield,
  healing: Heart,
  growth: TrendingUp,
  solutions: LifeBuoy,
  spiritual: Sparkles,
  remedies: Wand2,
};

const didiGallery = [
  "/images/didi.jpg",
  "/images/didi-photo-002.jpg",
  "/images/didi-photo-006.jpg",
  "/images/didi-photo-011.jpg",
];

export default function HomePage() {
  const featuredServices = featuredCategories
    .map((cat) => services.find((s) => s.category === cat))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      <Hero />

      {/* Statement banner */}
      <section className="bg-cream-deep/40 border-y border-saffron-200/60">
        <div className="container-wide py-10 sm:py-14">
          <Ornament variant="om" className="mb-5" />
          <p className="text-center font-serif text-xl sm:text-2xl italic text-sindoor-dark text-balance">
            &ldquo;We only remove Black Magic. We do not contact you for any
            wrong mediums. Money cannot buy our moral values.&rdquo;
          </p>
          <p className="mt-3 text-center text-sm uppercase tracking-[0.24em] text-ink-muted">
            Jai Maha Kali
          </p>
        </div>
      </section>

      {/* Deity icon strip */}
      <section className="bg-white border-b border-saffron-200/40">
        <div className="container-wide py-8">
          <p className="text-center text-xs uppercase tracking-[0.24em] text-ink-muted">
            The deities we serve at the shelter
          </p>
          <div className="mt-5 grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-5">
            {[
              { src: "/images/kali.jpg", label: "Maa Kali" },
              { src: "/images/durga.jpg", label: "Maa Durga" },
              { src: "/images/LAXMI.jpg", label: "Maa Lakshmi" },
              { src: "/images/puja-saraswati.jpg", label: "Maa Saraswati" },
              { src: "/images/SHIV.jpg", label: "Lord Shiva" },
              { src: "/images/ganesha.jpg", label: "Lord Ganesha" },
              { src: "/images/panchmukh.jpg", label: "Hanuman Ji" },
              { src: "/images/baglamukhi-mata.jpg", label: "Bagalamukhi" },
            ].map((d) => (
              <div key={d.src} className="flex flex-col items-center gap-2">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border border-saffron-200/60 bg-gradient-to-br from-[var(--accent-soft)]/30 to-cream-deep shadow-soft">
                  <Image
                    src={d.src}
                    alt={d.label}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-center text-[10px] sm:text-xs font-semibold text-ink-soft leading-tight">
                  {d.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section
        eyebrow="Our Path"
        title="A shelter for those seeking the unshakable protection of Maa Kali."
        description="Mahakali Vedic Healing Shelter exists to rectify the wrong image carried in the world about Goddess Kali. She is not fearsome — She is the most loving and fiercely protective form of the Divine Mother. Our work is to bring Her grace into the lives of those who are ready to receive it."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {site.values.slice(0, 3).map((value, i) => {
            const Icon = valueIcons[i] ?? Sparkles;
            return (
              <div
                key={i}
                className="rounded-2xl border border-saffron-200/60 bg-white/80 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-saffron-100 text-saffron-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-serif text-lg leading-snug text-ink">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <Link
            href="/about-us/guru-didi-shweta-ji"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            Read about Guru Didi Shweta Ji
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Guru Didi feature with gallery */}
      <section className="section bg-cream-deep/40">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3 stagger-children">
              {didiGallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft"
                >
                  <Image
                    src={src}
                    alt={`Guru Didi Shweta Ji — photograph ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="eyebrow">Guru Didi Shweta Ji</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
                From corporate trainer to spiritual guide — twelve years of
                practice in Maa Kali&apos;s service.
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-soft">
                A graduate of Delhi Public School and Delhi University
                (Political Science Honours), Shweta Ji&apos;s early career was
                in corporate soft-skills training, including with American
                Express. A long passage of supernatural affliction — vashikaran,
                jinn attacks, and black magic — turned her life towards Maa
                Kali. Today, she leads the shelter she founded.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "12+ years of dedicated spiritual practice",
                  "Photograph-based diagnosis and online care",
                  "Sole authority on every case at the shelter",
                  "Speaks Hindi, English, and welcomes seekers worldwide",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-xl border border-saffron-200/60 bg-white p-4 text-sm leading-relaxed text-ink-soft shadow-soft"
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about-us/guru-didi-shweta-ji" className="btn-primary">
                  Read her full story
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about-us/directors" className="btn-secondary">
                  Meet the directors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <Section
        eyebrow="What We Offer"
        title="Vedic remedies for life&apos;s most stubborn knots."
        description="Every soul that comes to us carries a different burden. Whether it is health, marriage, livelihood, or the unseen — there is a Vedic remedy. Below are four of the most-requested. Explore the full path on our Services page."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-secondary">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Categories grid */}
      <Section
        eyebrow="Areas of Practice"
        title="Six paths to peace."
        description="Our work is organised across six interlinked areas of Vedic practice — each rooted in scripture, each refined through decades of care for real lives."
        className="bg-cream-deep/40"
      >
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {(Object.keys(categoryMeta) as ServiceCategory[]).map((cat) => {
            const meta = categoryMeta[cat];
            const count = services.filter((s) => s.category === cat).length;
            const Icon = areaIcons[cat] ?? Sparkles;
            return (
              <Link
                key={cat}
                href={`/services#${cat}`}
                className="group rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor transition group-hover:bg-[var(--accent-soft)]/70">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl font-bold text-sindoor">
                    {meta.label}
                  </h3>
                  <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wider text-ink-muted">
                    {count} {count === 1 ? "offering" : "offerings"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {meta.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-saffron-700">
                  View
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Why Mahakali */}
      <Section
        eyebrow="Why Maha Kali"
        title="The Mother for our age."
        description="The Vedic texts name Kalyug as a time of broken trust, exploitation, and spiritual disturbance. Of all the forms of the Divine Mother, Maha Kali is the form prescribed for precisely this age — her ferocity is the medicine our times require."
      >
        <Ornament variant="trishul" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
          {[
            {
              t: "Black magic dissolved",
              d: "Vashikaran, jinn afflictions, putla tantra, and bound spells — removed at the root.",
              Icon: ShieldCheck,
            },
            {
              t: "Negative people leave",
              d: "Toxic relationships and manipulative ties lose their hold over your life.",
              Icon: Users,
            },
            {
              t: "Inner fearlessness",
              d: "Anxiety gives way to clarity, courage, and resolve.",
              Icon: Flame,
            },
            {
              t: "Relationships protected",
              d: "Disloyalty dissolves; sincere bonds are fiercely guarded.",
              Icon: HandHeart,
            },
          ].map((c) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.t}
                className="rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-sindoor">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <Link
            href="/mahakali/powers-of-maa-kali"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            Read about the powers of Maa Kali
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Videos — playable inline */}
      <Section
        eyebrow="Recent Videos"
        title="Latest teachings from our YouTube channel"
        description="Watch short teachings, pujas, and devotional guidance from Guru Didi Shweta Ji — playing right here on the page."
        className="bg-cream-deep/40"
      >
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {videos.slice(0, 6).map((video, i) => (
            <VideoCard key={video.id} video={video} priority={i < 2} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/gallery" className="btn-secondary">
            See the full video library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        eyebrow="Voices of Grace"
        title="From those who have walked this path."
        description="Words from devotees and seekers across the world who have experienced the protection of Maa Kali through our shelter."
      >
        <Ornament variant="lotus" className="mb-8" />
        <Testimonials />
      </Section>

      {/* Consultation CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cream-deep via-white to-cream-deep p-8 sm:p-12 lg:p-16 shadow-glow border border-saffron-200/60">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image
                src="/images/oum.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
              <div>
                <p className="eyebrow text-ink-muted">Telephonic Consultation</p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink text-balance">
                  Speak directly with Guru Didi.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                  Confidential one-on-one sessions over phone or WhatsApp. Most
                  questions can be addressed in a single sitting. Longer paths
                  begin with one too.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
                  <a
                    href={`tel:${site.contact.phoneRaw}`}
                    className="inline-flex items-center gap-2 hover:text-sindoor"
                  >
                    <Phone className="h-4 w-4 text-sindoor" />
                    {site.contact.phone}
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="inline-flex items-center gap-2 hover:text-sindoor break-all"
                  >
                    <Mail className="h-4 w-4 text-sindoor" />
                    {site.contact.email}
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-white/95 p-6 shadow-soft border border-saffron-200/60">
                <h3 className="font-serif text-lg font-semibold text-sindoor">
                  Consultation rates
                </h3>
                <ul className="mt-3 divide-y divide-saffron-100 text-sm">
                  {site.consultationRates.map((r) => (
                    <li
                      key={r.duration}
                      className="flex items-baseline justify-between py-2.5"
                    >
                      <span className="font-medium text-ink">{r.duration}</span>
                      <span className="text-ink-soft">
                        {r.inr}{" "}
                        <span className="text-ink-muted">/ {r.usd}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppUrl(quickMessages.consultation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-5 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Reserve a slot on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
