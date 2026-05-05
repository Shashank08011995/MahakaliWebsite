import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getPujaBySlug, pujas, pujaCategoryMeta } from "@/data/pujas";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return pujas.map((puja) => ({ slug: puja.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const puja = getPujaBySlug(slug);
  if (!puja) return { title: "Puja not found" };
  return {
    title: puja.title,
    description: puja.short,
  };
}

export default async function PujaDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const puja = getPujaBySlug(slug);
  if (!puja) notFound();

  const related = pujas
    .filter((item) => item.category === puja.category && item.slug !== puja.slug)
    .slice(0, 3);

  const whatsappMessage = `🙏 Pranam Guru Didi, I would like to know more about your puja: ${puja.title}.`;
  const categoryMeta = pujaCategoryMeta[puja.category];

  return (
    <>
      <section className="bg-white pt-12 pb-10 sm:pt-20 sm:pb-12">
        <div className="container-wide">
          <Link
            href="/pujas"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            <ArrowLeft className="h-4 w-4" />
            All pujas
          </Link>
          <p className="eyebrow mt-6">{categoryMeta.label}</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            {puja.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink-muted">
            {puja.sanskrit}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            {puja.short}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <article>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-cream-deep shadow-soft">
                <Image
                  src={puja.image}
                  alt={puja.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="prose prose-lg mt-8 max-w-none text-ink-soft">
                <p className="text-lg leading-relaxed">{puja.long}</p>
                <h2 className="mt-10 font-serif text-2xl font-semibold text-sindoor">
                  Benefits of this puja
                </h2>
                <ul className="mt-4 space-y-3 text-base leading-relaxed list-disc list-inside">
                  {puja.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-sindoor">
                      Recommended timing
                    </h3>
                    <p className="mt-3 text-ink-soft">{puja.recommended}</p>
                  </div>
                  {puja.pricing && (
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-sindoor">
                        Pricing
                      </h3>
                      <p className="mt-3 text-ink-soft">
                        {puja.pricing.inr} / {puja.pricing.usd}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-sindoor">
                  Begin this ritual
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Send a short message on WhatsApp with the puja name and your
                  situation. Guru Didi will respond personally.
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
                  “Ritual without sincerity is only form. Begin with purity of
                  intention, and the rest follows.”
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
                <p className="eyebrow">Related Pujas</p>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold">
                  Others in {categoryMeta.label}
                </h2>
              </div>
              <Link
                href="/pujas"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
              >
                All pujas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/pujas/${item.slug}`}
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
