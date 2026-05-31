import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { allProductCategories, productCategoryMeta, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Mahakali Vedic Healing Shelter",
  description:
    "Explore spiritually energized products and beauty offerings from Mahakali Vedic Healing Shelter.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Products</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Spiritual products crafted for protection, beauty, and blessing.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            These products are prepared with devotion and energetic charging to
            support your practice and your home.
          </p>
        </div>
      </section>

      <Section eyebrow="Categories" title="Shop by collection">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProductCategories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-saffron-200/60 bg-white p-7 shadow-soft"
            >
              <p className="font-serif text-xl font-semibold text-sindoor">
                {productCategoryMeta[category].label}
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                {productCategoryMeta[category].description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured items" title="Products ready for cataloging">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 9).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400"
            >
              <p className="font-serif text-xl font-semibold text-sindoor">
                {product.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {product.short}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container-wide text-center">
          <Link href="/products/general-information" className="btn-secondary inline-flex items-center gap-2">
            Read product information
          </Link>
        </div>
      </section>
    </>
  );
}
