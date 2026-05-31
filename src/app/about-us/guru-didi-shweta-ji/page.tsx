import type { Metadata } from "next";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  HandHeart,
  Globe,
  Flame,
  Heart,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Guru Didi Shweta Ji — About Us",
  description:
    "The journey of Guru Didi Shweta Ji — from a corporate trainer at American Express to a spiritual healer and devotee of Goddess Kali with over twelve years of practice.",
};

const heroCollage = [
  "/images/didi.jpg",
  "/images/didi-photo-002.jpg",
  "/images/didi-photo-006.jpg",
  "/images/didi-photo-011.jpg",
];

const fullGallery = [
  "/images/didi-photo-003.jpg",
  "/images/didi-photo-015.jpg",
  "/images/didi-photo-FB-IMG-1496157957716.jpg",
  "/images/didi-photo--205111-435.jpg",
  "/images/didi-photo--205217-105.jpg",
];

const practice = [
  {
    t: "Spiritual diagnosis",
    d: "Reads each case through photograph, date of birth, and direct intuition rooted in Vedic tradition.",
    Icon: Sparkles,
  },
  {
    t: "Black magic removal",
    d: "Twelve-plus years of practice in removing vashikaran, jinn afflictions, putla tantra, and maran mantras.",
    Icon: Flame,
  },
  {
    t: "Protection rituals",
    d: "Vedic protection for the most vulnerable — newborns, expecting mothers, and victims of coordinated harm.",
    Icon: ShieldCheck,
  },
  {
    t: "A No Exploitation Zone",
    d: "A space committed to protecting women from fraudulent practitioners who exploit them under the guise of tantra.",
    Icon: HandHeart,
  },
  {
    t: "Online accessibility",
    d: "Online-first consultation by WhatsApp, Skype, and telephone — open to seekers across the world.",
    Icon: Globe,
  },
  {
    t: "Ritual integrity",
    d: "All rituals are Satvik — pure, ethical, and never performed to harm another being.",
    Icon: Heart,
  },
];

export default function GuruDidiPage() {
  return (
    <>
      {/* Hero with 4-image collage */}
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <span className="devanagari-hero">ॐ क्रीं कालिकायै नमः</span>
            <p className="eyebrow mt-4">Guru Didi Shweta Ji</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              From corporate boardrooms to the feet of{" "}
              <span className="text-sindoor">Maa Kali</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
              President and Owner of Mahakali Vedic Healing Shelter Pvt. Ltd.
              and a devotee of Goddess Kali for over twelve years of dedicated
              spiritual practice.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-saffron-200/60 bg-white px-4 py-2 font-bold text-sindoor shadow-soft">
                <Sparkles className="h-4 w-4" />
                12+ years of practice
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-saffron-200/60 bg-white px-4 py-2 font-bold text-sindoor shadow-soft">
                <Globe className="h-4 w-4" />
                Seekers in 12+ countries
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 stagger-children">
            {heroCollage.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={src}
                  alt={`Guru Didi Shweta Ji — photograph ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Her background" title="Education and early life">
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 stagger-children">
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
              <GraduationCap className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">
              Education
            </h3>
            <ul className="mt-3 space-y-2 text-ink-soft leading-relaxed">
              <li>Delhi Public School — Class of 1999</li>
              <li>Delhi University — Political Science (Honours)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor">
              <Briefcase className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-serif text-xl font-bold text-sindoor">
              Corporate career
            </h3>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Worked for several years as a corporate soft-skills trainer —
              including with American Express — before her life took a sharp
              spiritual turn.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Her journey"
        title="From affliction to spiritual service"
        className="bg-cream-deep/40"
      >
        <Ornament variant="trishul" className="mb-8" />
        <div className="space-y-5 text-ink-soft leading-relaxed max-w-3xl animate-soft-fade">
          <p>
            In her twenties, Shweta Ji encountered a series of supernatural
            afflictions — vashikaran, jinn attacks, and prolonged black magic —
            that medical and psychological frameworks could not explain.
          </p>
          <p>
            Through deep devotion to Maa Kali, and guided by two spiritual
            mentors (a Hindu guru and a Muslim healer), she gradually
            understood her own affliction, freed herself, and was given the
            spiritual gifts of diagnosis and healing that she now offers to
            others.
          </p>
          <p>
            Her mother, Mrs. Sarojini Bisht, has remained throughout a quiet,
            steadfast supporter — a devotee of Saraswati and Kali, and now a
            Director of the shelter she helped her daughter build.
          </p>
        </div>
      </Section>

      <Section eyebrow="The practice today" title="What she carries forward">
        <Ornament variant="lotus" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {practice.map((c) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.t}
                className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)]/40 text-sindoor animate-halo">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-sindoor">
                  {c.t}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Video highlights */}
      <Section
        eyebrow="Watch Guru Didi"
        title="A few selected teachings"
        description="Tap any thumbnail to watch on this page."
        className="bg-cream-deep/40"
      >
        <Ornament variant="om" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {videos.slice(0, 3).map((video, i) => (
            <VideoCard key={video.id} video={video} priority={i === 0} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Guru Didi Images">
        <Ornament variant="lotus" className="mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 stagger-children">
          {fullGallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Image
                src={src}
                alt={`Guru Didi Shweta Ji — photograph ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
