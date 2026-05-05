import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

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
            <p className="font-devanagari text-base sm:text-lg text-sindoor">
              ॐ क्रीं कालिकायै नमः
            </p>
            <p className="eyebrow mt-3">A Spiritual Healing Zone</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance text-ink">
              Vedic guidance,{" "}
              <span className="text-sindoor">healing</span>, and protection
              under Mahakali&apos;s grace.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
              For over a decade, Guru Didi Shweta Ji has guided seekers across
              the world through the deepest passages of life — black magic
              removal, spiritual healing, marriage and career remedies, and
              the unshakable protection of Maa Kali.
            </p>
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
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron-500 animate-flicker" />
                Trusted globally — India, USA, UK, UAE & more
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron-500 animate-flicker" />
                Confidential telephonic consultations
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-saffron p-1 shadow-glow">
              <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-cream">
                <Image
                  src="/images/durga.jpg"
                  alt="Devotional imagery of Maa Kali"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 sm:p-8">
                  <p className="font-devanagari text-sm text-marigold-200">
                    या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता
                  </p>
                  <p className="mt-1 font-serif text-lg text-white/90 italic">
                    Salutations to Her, who dwells in all beings as power.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
