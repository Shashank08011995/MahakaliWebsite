import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Us — Mahakali Vedic Healing Shelter",
  description:
    "Learn about the mission, values, and people behind Mahakali Vedic Healing Shelter.",
};

const pages = [
  { href: "/about-us/company", label: "Company" },
  { href: "/about-us/mission-vision", label: "Mission & Vision" },
  { href: "/about-us/how-we-work", label: "How We Work" },
  { href: "/about-us/directors", label: "Directors" },
  { href: "/about-us/career", label: "Career" },
  { href: "/about-us/legal-policies", label: "Legal Policies" },
  { href: "/about-us/guru-didi-shweta-ji", label: "Guru Didi Shweta Ji" },
  { href: "/about-us/be-our-franchise-volunteer", label: "Be Our Franchise / Volunteer" },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            The shelter, the mission, and the people behind it.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Mahakali Vedic Healing Shelter combines authentic Vedic practice with
            compassionate care. Here you can explore our mission, leadership,
            policies, and how we work.
          </p>
        </div>
      </section>

      <Section eyebrow="Explore" title="Information for seekers and partners">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                Learn more about {page.label.toLowerCase()} and how it shapes our shelter.
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
