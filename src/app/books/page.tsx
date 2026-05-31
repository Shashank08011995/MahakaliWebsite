import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { books } from "@/data/books";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Books — Mahakali Vedic Healing Shelter",
  description:
    "Discover books and audio teachings by Guru Didi Shweta Ji and Mahakali Vedic Healing Shelter.",
};

export default function BooksPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Books</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Spiritual guides for seekers of healing and protection.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Read the stories, case studies and practical guidance that has helped
            victims of black magic, illness, failed relationships, and repeated
            obstacles find a new way forward.
          </p>
        </div>
      </section>

      <Section eyebrow="Our Library" title="Books &amp; audio teachings"> 
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.slug}
              className="rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-cream-deep shadow-soft">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-6">
                <p className="font-serif text-xl font-semibold text-sindoor">
                  {book.title}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-muted">
                  {book.author} · {book.format}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {book.synopsis}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container-wide">
          <div className="rounded-3xl bg-gray-50 p-8 sm:p-12 text-center shadow-glow">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink text-balance">
              Want a recommended book for your situation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Tell us the challenge you are facing and we will recommend the
              best title from our collection.
            </p>
            <a
              href={buildWhatsAppUrl(
                "🙏 Pranam Guru Didi, I would like a book recommendation to help with my situation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 inline-flex"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
