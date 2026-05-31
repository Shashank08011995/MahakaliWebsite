import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { Languages, BookOpen, Users, HeartHandshake, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Be Our Franchise / Volunteer — About Us",
  description:
    "Become a franchise partner or volunteer with Mahakali Vedic Healing Shelter and help carry authentic Vedic care to new communities.",
};

export default function FranchiseVolunteerPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <p className="eyebrow mt-3">Be Our Franchise / Volunteer</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Help us carry this shelter to new communities.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            We welcome serious partners — franchise holders, NGO collaborators,
            volunteers, and community elders — who wish to extend the work of
            Mahakali Vedic Healing Shelter to their city, country, or community.
          </p>
        </div>
      </section>

      <Section eyebrow="Franchise" title="Take the shelter to your city">
        <Ornament variant="om" className="mb-8" />
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
            <Building2 className="h-6 w-6" />
          </span>
        </div>
        <div className="space-y-5 text-ink-soft leading-relaxed max-w-3xl">
          <p>
            A Mahakali franchise is a community presence — a place where seekers
            in your region can access consultations, energized prasad, and
            referral to the central shelter for serious cases.
          </p>
          <p>
            Franchise partners are selected for their devotion, ethical
            standards, and ability to hold the shelter&apos;s tradition with
            integrity. Commercial intent without spiritual commitment is not
            accepted.
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Dedicated, named space for consultations and prasad distribution.</li>
            <li>Training and ongoing guidance from the central shelter.</li>
            <li>Adherence to fees, policies, and the Satvik scope of work.</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Volunteer" title="Give your time to the shelter">
        <Ornament variant="lotus" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 stagger-children">
          {[
            {
              t: "Translation and outreach",
              d: "Help us reach seekers in regional languages — Hindi, Tamil, Telugu, Bengali, Marathi, and more.",
              Icon: Languages,
            },
            {
              t: "Spiritual content",
              d: "Write devotional articles, mantra commentaries, and seeker guides under Guru Didi's supervision.",
              Icon: BookOpen,
            },
            {
              t: "Community presence",
              d: "Help organise local satsangs, prasad distribution drives, and Navratri events.",
              Icon: Users,
            },
            {
              t: "Women's shelter work",
              d: "Volunteer with our women's section to support those leaving exploitative or unsafe spiritual situations.",
              Icon: HeartHandshake,
            },
          ].map((c) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">{c.t}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Reach us" title="Write to be considered">
        <p className="text-ink-soft leading-relaxed">
          Send your background and intention to{" "}
          <strong className="text-sindoor">shwetasarojinimahakali@gmail.com</strong>{" "}
          or message{" "}
          <strong className="text-sindoor">+91-7838237702</strong> on WhatsApp.
          Every enquiry receives a personal reply.
        </p>
      </Section>
    </>
  );
}
