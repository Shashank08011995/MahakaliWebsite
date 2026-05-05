"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pujas", label: "Pujas" },
  { href: "/jaaps", label: "Jaaps" },
];

const moreLinks = [
  { href: "/books", label: "Books" },
  { href: "/testimonials", label: "Stories" },
  { href: "/online-classes", label: "Online Classes" },
  { href: "/membership", label: "Membership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faqs", label: "FAQs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [moreOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-[color:var(--surface)]/95 backdrop-blur shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide relative flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Mahakali Vedic Healing Shelter home"
        >
          <Image
            src="/images/logo.png"
            alt="Mahakali Vedic Healing Shelter"
            width={160}
            height={43}
            className="h-24 w-auto object-contain rounded-2xl"
            priority
          />
        </Link>

        <nav className="hidden lg:flex flex-1 justify-center items-center gap-3 text-base font-medium text-ink-soft">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-base font-medium text-ink-soft transition hover:text-[color:var(--accent-dark)]"
            >
              {l.label}
            </Link>
          ))}
          <div ref={moreRef} className="relative z-50">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              className="inline-flex items-center gap-1 px-3 py-2 text-base font-medium text-ink-soft transition hover:text-[color:var(--accent-dark)]"
            >
              More
              <ChevronDown
                className={`h-4 w-4 transition ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right z-50 rounded-2xl border border-saffron-200/60 bg-white p-2 shadow-glow">
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-cream-deep hover:text-saffron-700"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3 ml-auto">
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
          <div className="container-wide flex flex-col py-4 gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {primaryLinks.concat(moreLinks).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-ink hover:bg-cream-deep"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-base font-medium text-ink hover:bg-cream-deep"
            >
              Contact
            </Link>
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
