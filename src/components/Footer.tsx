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
    heading: "Other useful Links",
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
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="container-wide py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Mahakali Vedic Healing Shelter"
                width={192}
                height={52}
                className="h-24 w-auto rounded-2xl ring-1 ring-saffron-200"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <p className="mt-4 font-devanagari text-sm text-sindoor">
              जय माँ काली · Jai Maa Kali
            </p>
          </div>

          {exploreCols.map((col) => (
            <div key={col.heading} className="min-w-0">
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
                {col.heading === "Other useful Links" && (
                  <>
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
                        className="hover:text-saffron-700"
                      >
                        Call {site.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="hover:text-saffron-700 break-all"
                      >
                        {site.contact.email}
                      </a>
                    </li>
                  </>
                )}
              </ul>
              {col.heading === "Other useful Links" && (
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
              )}
            </div>
          ))}
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
