import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

const exploreCols: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Practice",
    links: [
      { href: "/services", label: "Services" },
      { href: "/pujas", label: "Pujas" },
      { href: "/jaaps", label: "Jaaps" },
      { href: "/online-classes", label: "Online Classes" },
      { href: "/membership", label: "Membership" },
      { href: "/products", label: "Products" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/mahakali", label: "MahaKali" },
      { href: "/books", label: "Books" },
      { href: "/stories", label: "Stories" },
      { href: "/gallery", label: "Gallery" },
      { href: "/faqs", label: "FAQs" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/audios", label: "Audios" },
    ],
  },
  {
    heading: "Other Useful Links",
    links: [
      { href: "/consultation", label: "Consultation" },
      { href: "/horoscope", label: "Horoscope" },
      { href: "/payment-options", label: "Payment Options" },
      { href: "/donation", label: "Donation" },
      { href: "/womens-section", label: "Women's Section" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-b from-cream-deep/60 via-white to-cream-deep/40">

      <div className="container-wide pt-14 pb-10 sm:pt-20 sm:pb-12">
        {/* Top devotional banner */}
        <Reveal direction="up" className="text-center mb-12 sm:mb-16">
          <span className="font-devanagari text-2xl sm:text-3xl text-sindoor-dark">
            ॐ क्रीं कालिकायै नमः
          </span>
          <Ornament variant="om" className="mt-4" />
          <p className="mt-4 font-serif text-xl sm:text-2xl italic text-sindoor-dark">
            Money cannot buy our moral values.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] font-bold text-ink-muted">
            Jai Maha Kali
          </p>
        </Reveal>

        <Reveal direction="up" stagger className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Mahakali Vedic Healing Shelter"
                width={192}
                height={52}
                className="h-20 w-auto rounded-2xl ring-1 ring-saffron-200 shadow-soft"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft font-medium">
              {site.description}
            </p>
            <p className="mt-4 font-devanagari text-lg text-sindoor-dark">
              जय माँ काली
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] font-bold text-ink-muted">
              Jai Maa Kali
            </p>

            {/* Quick contact icons */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="group flex items-center gap-3 text-sm font-bold text-ink hover:text-sindoor"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor transition group-hover:scale-110">
                  <Phone className="h-4 w-4" />
                </span>
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-3 text-sm font-bold text-ink hover:text-sindoor break-all"
              >
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor transition group-hover:scale-110">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="min-w-0 truncate">{site.contact.email}</span>
              </a>
              <a
                href={buildWhatsAppUrl(quickMessages.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm font-bold text-ink hover:text-[#25D366]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1da855] transition group-hover:scale-110">
                  <MessageCircle className="h-4 w-4" />
                </span>
                WhatsApp Guru Didi
              </a>
            </div>
          </div>

          {exploreCols.map((col) => (
            <div key={col.heading} className="min-w-0">
              <h4 className="font-serif text-lg font-bold text-sindoor-dark">
                {col.heading}
              </h4>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-[var(--accent)] to-transparent" />
              <ul className="mt-5 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 font-semibold text-ink-soft hover:text-sindoor"
                    >
                      <span className="inline-block h-1 w-1 rounded-full bg-[var(--accent)] opacity-50 transition group-hover:opacity-100 group-hover:scale-150" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal direction="up" delay={200} className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-saffron-200/60 bg-white text-ink-muted shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400 hover:text-sindoor hover:shadow-glow"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-saffron-200/60 bg-white text-ink-muted shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400 hover:text-sindoor hover:shadow-glow"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-saffron-200/60 bg-white text-ink-muted shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400 hover:text-sindoor hover:shadow-glow"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm font-bold text-ink">
              © {year} {site.name}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] font-semibold text-ink-muted">
              All rights reserved
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
