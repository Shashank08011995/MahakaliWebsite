"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption?: string;
  devanagari?: string;
};

const slides: Slide[] = [
  {
    src: "/images/didi.jpg",
    alt: "Guru Didi Shweta Ji",
    devanagari: "ॐ क्रीं कालिकायै नमः",
    caption: "Guru Didi Shweta Ji",
  },
  {
    src: "/images/didi-photo-002.jpg",
    alt: "Guru Didi Shweta Ji at the shelter",
    devanagari: "जय माँ काली",
    caption: "Twelve years of dedicated practice",
  },
  {
    src: "/images/didi-photo-003.jpg",
    alt: "Guru Didi Shweta Ji",
    devanagari: "या देवी सर्वभूतेषु",
    caption: "A No Exploitation Zone for women",
  },
  {
    src: "/images/didi-photo-006.jpg",
    alt: "Guru Didi at devotional ceremony",
    devanagari: "शक्तिरूपेण संस्थिता",
    caption: "Authentic Vedic remedies",
  },
  {
    src: "/images/didi-photo-011.jpg",
    alt: "Guru Didi Shweta Ji",
    devanagari: "नमस्तस्यै नमस्तस्यै",
    caption: "Confidential. Compassionate. Satvik.",
  },
  {
    src: "/images/didi-photo-015.jpg",
    alt: "Guru Didi at the shelter",
    devanagari: "नमो नमः",
    caption: "Guided by Maa Kali",
  },
  {
    src: "/images/didi-photo-FB-IMG-1496157957716.jpg",
    alt: "Guru Didi Shweta Ji",
    devanagari: "जय माँ काली",
    caption: "Devoted to Mahakali",
  },
];

const INTERVAL_MS = 4500;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-saffron p-1 shadow-glow">
        <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-cream">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== active}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/55 to-transparent p-6 sm:p-8">
                {slide.devanagari && (
                  <p className="font-devanagari text-sm text-marigold-200">
                    {slide.devanagari}
                  </p>
                )}
                {slide.caption && (
                  <p className="mt-1 font-serif text-lg text-white/95 italic">
                    {slide.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-white/85 px-3 py-2 shadow-soft backdrop-blur">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active
                ? "w-6 bg-[var(--accent)]"
                : "w-2 bg-[var(--border)] hover:bg-[var(--accent-soft)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
