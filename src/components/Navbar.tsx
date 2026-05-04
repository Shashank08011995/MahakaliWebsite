"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-cream/90 backdrop-blur shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-3 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Mahakali Vedic Healing Shelter"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full ring-1 ring-saffron-200"
            priority
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg font-semibold text-sindoor">
              Mahakali
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Vedic Healing Shelter
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-ink-soft transition hover:text-saffron-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${site.contact.phoneRaw}`}
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-saffron-700"
            aria-label={`Call ${site.contact.phone}`}
          >
            <Phone className="h-4 w-4" />
            {site.contact.phone}
          </a>
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
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-cream-deep"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-saffron-200/50 bg-cream/95 backdrop-blur">
          <div className="container-wide flex flex-col py-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-ink hover:bg-cream-deep"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${site.contact.phoneRaw}`}
              className="px-3 py-3 rounded-lg text-base font-medium text-ink hover:bg-cream-deep flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              {site.contact.phone}
            </a>
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
