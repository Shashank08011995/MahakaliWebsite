"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";
import { services } from "@/data/services";
import { jaaps } from "@/data/jaaps";
import { pujas } from "@/data/pujas";

type NavItem = {
  href?: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about-us",
    label: "About Us",
    children: [
      { href: "/about-us/company", label: "Company" },
      { href: "/about-us/mission-vision", label: "Mission & Vision" },
      { href: "/about-us/how-we-work", label: "How We Work" },
      { href: "/about-us/directors", label: "Directors" },
      { href: "/about-us/career", label: "Career" },
      { href: "/about-us/legal-policies", label: "Legal Policies" },
      { href: "/about-us/guru-didi-shweta-ji", label: "Guru Didi Shweta Ji" },
      { href: "/about-us/be-our-franchise-volunteer", label: "Be Our Franchise / Volunteer" },
    ],
  },
  {
    href: "/mahakali",
    label: "MahaKali",
    children: [
      { href: "/mahakali/maha-kali", label: "Maha Kali" },
      { href: "/mahakali/satvik-tantra", label: "Satvik Tantra" },
      { href: "/mahakali/about-mahakali", label: "About Mahakali" },
      { href: "/mahakali/powers-of-maa-kali", label: "Powers of Maa Kali" },
      { href: "/mahakali/myths-about-mahakali", label: "Myths About Mahakali" },
      { href: "/mahakali/popular-temples-of-maa-kali", label: "Popular Temples of Maa Kali" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      ...services.map((service) => ({
        href: `/services/${service.slug}`,
        label: service.title,
      })),
    ],
  },
  {
    href: "/pujas",
    label: "Pujas",
    children: [
      { href: "/pujas", label: "All Pujas" },
      ...pujas.map((puja) => ({ href: `/pujas/${puja.slug}`, label: puja.title })),
    ],
  },
  {
    href: "/jaaps",
    label: "Jaaps",
    children: [
      { href: "/jaaps", label: "All Jaaps" },
      ...jaaps.map((jaap) => ({ href: `/jaaps/${jaap.slug}`, label: jaap.title })),
    ],
  },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/general-information", label: "General Information" },
      { href: "/products/divine-paintings", label: "Divine Paintings" },
      { href: "/products/american-diamond", label: "American Diamond" },
      { href: "/products/maa-kalis-silver-locket", label: "Maa Kali's Silver Locket" },
      { href: "/products/shani-jis-ring-locket", label: "Shani Ji's Ring Locket" },
      { href: "/products/hanuman-jis-silver-locket", label: "Hanuman Ji’s Silver Locket" },
      { href: "/products/silver-key-ring", label: "Silver Key Ring" },
      { href: "/products/energized-dhoop-batti-and-camphor", label: "Energized Dhoop Batti & Camphor" },
      { href: "/products/energized-puja-bell", label: "Energized Puja Bell" },
      { href: "/products/energized-wealth-tortoise", label: "Energized Wealth Tortoise" },
      { href: "/products/energized-kalp-vrikshya", label: "Energized Kalp Vrikshya" },
      { href: "/products/energized-kamdhenu-cow", label: "Energized Kamdhenu Cow" },
      { href: "/products/maa-lakshmi-jis-locket", label: "Maa Lakshmi Ji’s Locket" },
      { href: "/products/spiritually-energized-face-wash", label: "Spiritually Energized Face Wash" },
      { href: "/products/spiritually-energized-face-pack", label: "Spiritually Energized Face Pack" },
      { href: "/products/spiritually-energized-anti-aging-face-pack", label: "Spiritually Energized Anti Aging Face Pack" },
      { href: "/products/spiritually-energized-rose-face-pack", label: "Spiritually Energized Rose Face Pack" },
    ],
  },
  {
    label: "More",
    children: [
      { href: "/books", label: "Books" },
      { href: "/faqs", label: "FAQs" },
      { href: "/online-classes", label: "Online Classes" },
      { href: "/membership", label: "Membership" },
      { href: "/donation", label: "Donation" },
      { href: "/payment-options", label: "Payment Options" },
      { href: "/audios", label: "Audios" },
      { href: "/consultation", label: "Consultation" },
      { href: "/horoscope", label: "Horoscope" },
      { href: "/stories", label: "Stories" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
      { href: "/womens-section", label: "Women's Section" },
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (item: NavItem) => {
    if (!item.children) return;
    setActiveMenu((current) =>
      current === item.label ? null : item.label
    );
  };

  useEffect(() => {
    if (!activeMenu) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-[color:var(--surface)]/95 backdrop-blur shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div ref={navRef} className="container-wide relative flex items-center justify-between gap-4 py-3 sm:py-4 overflow-visible">
        <div className="flex-shrink-0 flex items-center">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
            aria-label="Mahakali Vedic Healing Shelter home"
          >
            <Image
              src="/images/logo.png"
              alt="Mahakali Vedic Healing Shelter"
              width={200}
              height={60}
              className="h-16 w-auto object-contain rounded-2xl"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 min-w-0 flex-wrap justify-center items-center gap-2 text-sm font-medium text-ink-soft">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    toggleMenu(item);
                  }}
                  aria-expanded={activeMenu === item.label}
                  className="inline-flex items-center gap-1 rounded-full px-2 py-2 text-sm font-medium text-ink-soft transition hover:text-[color:var(--accent-dark)]"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 rounded-full px-2 py-2 text-sm font-medium text-ink-soft transition hover:text-[color:var(--accent-dark)]"
                >
                  {item.label}
                </Link>
              )}
              {item.children && activeMenu === item.label && (
                <div className="absolute left-0 top-full z-50 mt-2 min-w-[18rem] max-h-[60vh] overflow-y-auto rounded-3xl border border-saffron-200/60 bg-white p-3 shadow-glow">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setActiveMenu(null)}
                      className="block rounded-2xl px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-cream-deep hover:text-saffron-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 lg:ml-auto">
          <a
            href={buildWhatsAppUrl(quickMessages.appointment)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-cream-deep"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-saffron-200/50 bg-cream/95 backdrop-blur">
          <div className="container-wide flex flex-col py-4 gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <Link
                  href={item.href ?? "#"}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-base font-medium text-ink hover:bg-cream-deep"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="space-y-1 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-cream-deep"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={buildWhatsAppUrl(quickMessages.appointment)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Book Appointment on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
