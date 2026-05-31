import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { books, getBookBySlug } from "@/data/books";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Book not found" };
  return {
    title: book.title,
    description: book.synopsis,
  };
}

export default async function BookDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const whatsappMessage = `🙏 Pranam Guru Didi, I would like to know more about the book: ${book.title}.`;

  return (
    <>
      <section className="bg-white pt-12 pb-10 sm:pt-20 sm:pb-12">
        <div className="container-wide">
          <Link
            href="/books"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            <ArrowLeft className="h-4 w-4" />
            All books
          </Link>
          <p className="eyebrow mt-6">Book details</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            {book.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink-muted">
            {book.author} · {book.format}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <article>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-cream-deep shadow-soft">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg mt-8 max-w-none text-ink-soft">
              <p className="text-lg leading-relaxed">{book.synopsis}</p>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-sindoor">
                Request this book
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Send a message to Guru Didi and ask for purchase or access details.
              </p>
              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-5 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
