import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

const exploreCols: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Practice",
    links: [
      { href: "/services", label: "Services" },
      { href: "/pujas", label: "Pujas" },
      { href: "/jaaps", label: "Jaaps" },
      { href: "/online-classes", label: "Online Classes" },
      { href: "/membership", label: "Membership" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/about", label: "About Guru Didi" },
      { href: "/testimonials", label: "Stories of Grace" },
      { href: "/books", label: "Books" },
      { href: "/gallery", label: "Gallery" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-saffron-200/50 bg-gradient-to-b from-cream to-cream-deep">
      <div className="container-wide py-14 sm:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1 max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Mahakali Vedic Healing Shelter"
                width={56}
                height={56}
                className="rounded-full ring-1 ring-saffron-200"
              />
              <div>
                <div className="font-serif text-xl font-semibold text-sindoor">
                  {site.shortName}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                  {site.tagline}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <p className="mt-4 font-devanagari text-sm text-sindoor">
              जय माँ काली · Jai Maa Kali
            </p>
          </div>

          {exploreCols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-saffron-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
              Connect
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>
                <a
                  href={buildWhatsAppUrl(quickMessages.consultation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saffron-700"
                >
                  WhatsApp Guru Didi
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-saffron-700"
                >
                  <Phone className="h-4 w-4" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-saffron-700 break-all"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-saffron-700">
                  Contact form
                </Link>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full p-2 text-ink-muted hover:bg-cream-deep hover:text-saffron-700"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full p-2 text-ink-muted hover:bg-cream-deep hover:text-saffron-700"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-ink-muted hover:bg-cream-deep hover:text-saffron-700"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="ornament-divider mt-12" />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-ink-muted">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="italic">
            Money cannot buy our moral values. (Jai Maha Kali)
          </p>
        </div>
      </div>
    </footer>
  );
}
