import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getJaapBySlug, jaaps } from "@/data/jaaps";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return jaaps.map((jaap) => ({ slug: jaap.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const jaap = getJaapBySlug(slug);
  if (!jaap) return { title: "Jaap not found" };
  return {
    title: jaap.title,
    description: jaap.short,
  };
}

export default async function JaapDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const jaap = getJaapBySlug(slug);
  if (!jaap) notFound();

  const related = jaaps.filter((item) => item.slug !== jaap.slug).slice(0, 3);
  const whatsappMessage = `🙏 Pranam Guru Didi, I would like to know more about your jaap: ${jaap.title}.`;

  return (
    <>
      <section className="bg-white pt-12 pb-10 sm:pt-20 sm:pb-12">
        <div className="container-wide">
          <Link
            href="/jaaps"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            <ArrowLeft className="h-4 w-4" />
            All jaaps
          </Link>
          <p className="eyebrow mt-6">Jaap Practice</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            {jaap.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink-muted">
            {jaap.sanskrit}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            {jaap.short}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <article>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-soft">
                <Image
                  src={jaap.image}
                  alt={jaap.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="prose prose-lg mt-8 max-w-none text-ink-soft">
                <p className="text-lg leading-relaxed">{jaap.long}</p>
                {jaap.mantra && (
                  <>
                    <h2 className="mt-10 font-serif text-2xl font-semibold text-sindoor">
                      Core mantra
                    </h2>
                    <p className="mt-4 rounded-3xl border border-saffron-200/60 bg-white p-6 text-base leading-relaxed text-ink-soft">
                      {jaap.mantra}
                    </p>
                  </>
                )}
                <h2 className="mt-10 font-serif text-2xl font-semibold text-sindoor">
                  Benefits of this jaap
                </h2>
                <ul className="mt-4 space-y-3 text-base leading-relaxed list-disc list-inside">
                  {jaap.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-soft">
                  <div>
                    <h3 className="font-semibold text-ink">Recommended</h3>
                    <p>{jaap.recommended}</p>
                  </div>
                  {jaap.pricing && (
                    <div>
                      <h3 className="font-semibold text-ink">Pricing</h3>
                      <p>
                        {jaap.pricing.inr} / {jaap.pricing.usd}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-sindoor">
                  Start this jaap
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Message Guru Didi on WhatsApp with the jaap name and your
                  concern. She will advise the right schedule and follow-up.
                </p>
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-5 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact on WhatsApp
                </a>
                <Link href="/contact" className="btn-secondary mt-3 w-full">
                  Other contact options
                </Link>
              </div>

              <div className="rounded-2xl bg-cream-deep/60 p-6">
                <p className="font-serif text-lg italic text-sindoor-dark">
                  “A jaap is not a ritual alone. It is a daily commitment to
                  change.”
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-cream-deep/40">
          <div className="container-wide">
            <div className="flex items-baseline justify-between gap-4 mb-8">
              <div>
                <p className="eyebrow">Related Jaaps</p>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold">
                  Other mantra practices
                </h2>
              </div>
              <Link
                href="/jaaps"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
              >
                All jaaps <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/jaaps/${item.slug}`}
                  className="group rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400"
                >
                  <div className="space-y-3">
                    <p className="font-serif text-xl font-semibold text-sindoor">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {item.short}
                    </p>
                    <p className="text-sm font-semibold text-saffron-700">
                      {item.pricing?.inr ?? "Ask for pricing"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
