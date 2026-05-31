import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Mahakali — Mahakali Vedic Healing Shelter",
  description:
    "Explore the teachings of Maa Kali, Satvik Tantra, and the spiritual wisdom of the shelter.",
};

const pages = [
  { href: "/mahakali/maha-kali", label: "Maha Kali" },
  { href: "/mahakali/satvik-tantra", label: "Satvik Tantra" },
  { href: "/mahakali/about-mahakali", label: "About Mahakali" },
  { href: "/mahakali/powers-of-maa-kali", label: "Powers of Maa Kali" },
  { href: "/mahakali/myths-about-mahakali", label: "Myths About Mahakali" },
  { href: "/mahakali/popular-temples-of-maa-kali", label: "Popular Temples of Maa Kali" },
];

export default function MahakaliLandingPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Mahakali</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            The wisdom and power of Maa Kali.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Learn the truth about Mahakali, her energy, and her role in spiritual
            healing and protection.
          </p>
        </div>
      </section>

      <Section eyebrow="Explore" title="Teachings on Mahakali">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400"
            >
              <p className="font-serif text-xl font-semibold text-sindoor">
                {page.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Read more about {page.label.toLowerCase()} and Maa Kali's shelter.
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
