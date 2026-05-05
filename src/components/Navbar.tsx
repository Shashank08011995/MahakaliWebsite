"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Phone, Palette } from "lucide-react";
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

type ThemeId = "saffron" | "teal" | "indigo";
const themeOptions: Array<{ id: ThemeId; label: string; gradient: string }> = [
  {
    id: "saffron",
    label: "Saffron Glow",
    gradient: "linear-gradient(135deg, #ec7728 0%, #fbb024 45%, #fbeedb 100%)",
  },
  {
    id: "teal",
    label: "Teal Breeze",
    gradient: "linear-gradient(135deg, #0f7c74 0%, #3da896 45%, #dffaf5 100%)",
  },
  {
    id: "indigo",
    label: "Indigo Aura",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 45%, #e4ecff 100%)",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeId>("saffron");
  const moreRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

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
    const savedTheme = window.localStorage.getItem("theme") as ThemeId | null;
    const initialTheme = savedTheme ?? "saffron";
    document.documentElement.classList.add(`theme-${initialTheme}`);
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-saffron",
      "theme-teal",
      "theme-indigo"
    );
    document.documentElement.classList.add(`theme-${theme}`);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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

  useEffect(() => {
    if (!themeOpen) return;
    const onClick = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setThemeOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [themeOpen]);

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
          <div ref={themeRef} className="relative z-50">
            <button
              type="button"
              onClick={() => setThemeOpen((v) => !v)}
              aria-expanded={themeOpen}
              aria-label="Theme selector"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-soft ring-1 ring-saffron-200 transition hover:shadow-glow"
            >
              <Palette className="h-5 w-5 text-[color:var(--accent)]" />
            </button>
            {themeOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-44 rounded-3xl border border-saffron-200/60 bg-white p-3 shadow-glow">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Choose theme
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {themeOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setTheme(option.id);
                        setThemeOpen(false);
                      }}
                      title={option.label}
                      className={`h-11 w-11 rounded-2xl border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] ${theme === option.id ? "ring-2 ring-[color:var(--surface)] ring-offset-2" : "opacity-90 hover:opacity-100"}`}
                      style={{ background: option.gradient }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            href={`tel:${site.contact.phoneRaw}`}
            className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-[color:var(--accent-dark)]"
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
