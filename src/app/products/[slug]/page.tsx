import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getProductBySlug, products } from "@/data/products";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.title,
    description: product.short,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const whatsappMessage = `🙏 Pranam Guru Didi, I would like information about the product: ${product.title}.`;

  return (
    <>
      <section className="bg-white pt-12 pb-10 sm:pt-20 sm:pb-12">
        <div className="container-wide">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            <ArrowLeft className="h-4 w-4" />
            All products
          </Link>
          <p className="eyebrow mt-6">Product details</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            {product.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            {product.short}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <article>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15 shadow-soft">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="prose prose-lg mt-8 max-w-none text-ink-soft">
                <p className="text-lg leading-relaxed">{product.long}</p>
                <h2 className="mt-10 font-serif text-2xl font-semibold text-sindoor">
                  Product details
                </h2>
                <ul className="mt-4 space-y-3 text-base leading-relaxed list-disc list-inside">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {product.pricing && (
                  <p className="mt-8 text-ink-soft">Pricing: {product.pricing}</p>
                )}
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-sindoor">
                  Ask about this product
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Send a short WhatsApp message to reserve or inquire about this item.
                </p>
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-5 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
