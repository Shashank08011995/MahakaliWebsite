import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";
import { HeroCarousel } from "./HeroCarousel";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/mahakali-devotion.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/80 to-cream" />
      </div>

      <div className="container-wide relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal direction="up">
              <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            </Reveal>
            <Reveal direction="up" delay={120}>
              <p className="eyebrow mt-5">A Spiritual Healing Zone</p>
            </Reveal>
            <Reveal direction="up" delay={240}>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance text-ink">
                Vedic guidance,{" "}
                <span className="text-sindoor">healing</span>, and protection
                under Mahakali&apos;s grace.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={360}>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-soft text-pretty font-medium">
                For over a decade, Guru Didi Shweta Ji has guided seekers
                across the world through the deepest passages of life — black
                magic removal, spiritual healing, marriage and career
                remedies, and the unshakable protection of Maa Kali.
              </p>
            </Reveal>
            <Reveal direction="up" delay={480}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppUrl(quickMessages.appointment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal direction="up" delay={600}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-ink-soft">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron-500 animate-flicker" />
                  Trusted globally — India, USA, UK, UAE &amp; more
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron-500 animate-flicker" />
                  Confidential telephonic consultations
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal direction="zoom" delay={300}>
            <HeroCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
