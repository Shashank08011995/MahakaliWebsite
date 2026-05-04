import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { categoryMeta, services, type ServiceCategory } from "@/data/services";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

const featuredCategories: ServiceCategory[] = [
  "healing",
  "protection",
  "solutions",
  "growth",
];

const valueIcons = [Shield, Heart, Sparkles];

export default function HomePage() {
  const featuredServices = featuredCategories
    .map((cat) => services.find((s) => s.category === cat))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      <Hero />

      {/* Mission */}
      <Section
        eyebrow="Our Path"
        title="A shelter for those seeking the unshakable protection of Maa Kali."
        description="Mahakali Vedic Healing Shelter exists to rectify the wrong image that has been created about Goddess Kali in the minds of many. She is not fearsome — She is fiercely protective. Our work is to bring Her grace into the lives of those who are ready to receive it."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {site.values.slice(0, 3).map((value, i) => {
            const Icon = valueIcons[i] ?? Sparkles;
            return (
              <div
                key={i}
                className="rounded-2xl border border-saffron-200/60 bg-white/70 p-6 shadow-soft"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-saffron-100 text-saffron-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-serif text-lg leading-snug text-ink">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            Read about Guru Didi Shweta Ji
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Services preview */}
      <Section
        eyebrow="What We Offer"
        title="Vedic remedies for life's most stubborn knots."
        description="Every soul that comes to us carries a different burden. Whether it is health, marriage, livelihood, or the unseen — there is a Vedic remedy. Below are some of the most-requested. Explore the full path on our Services page."
        className="bg-cream-deep/40"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-secondary">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Categories grid */}
      <Section
        eyebrow="Areas of Practice"
        title="Six paths to peace."
        description="Our work is organised across six interlinked areas of Vedic practice — each rooted in scripture, each refined through decades of care for real lives."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(categoryMeta) as ServiceCategory[]).map((cat) => {
            const meta = categoryMeta[cat];
            const count = services.filter((s) => s.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/services#${cat}`}
                className="group rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-saffron-400 hover:shadow-glow"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl font-semibold text-sindoor">
                    {meta.label}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {count} {count === 1 ? "offering" : "offerings"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {meta.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-saffron-700">
                  View
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        eyebrow="Voices of Grace"
        title="From those who have walked this path."
        description="Words from devotees and seekers across the world who have experienced the protection of Maa Kali through our shelter."
        className="bg-cream-deep/40"
      >
        <Testimonials />
      </Section>

      {/* CTA banner */}
      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-saffron p-8 sm:p-12 lg:p-16 shadow-glow">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/oum.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
              <div>
                <p className="eyebrow text-white/80">Telephonic Consultation</p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-balance">
                  Speak directly with Guru Didi.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
                  Confidential one-on-one sessions over phone or WhatsApp. Most
                  questions can be addressed in a single sitting. Longer paths
                  begin with one too.
                </p>
              </div>
              <div className="rounded-2xl bg-white/95 p-6 shadow-soft">
                <h3 className="font-serif text-lg font-semibold text-sindoor">
                  Consultation rates
                </h3>
                <ul className="mt-3 divide-y divide-saffron-100 text-sm">
                  {site.consultationRates.map((r) => (
                    <li
                      key={r.duration}
                      className="flex items-baseline justify-between py-2.5"
                    >
                      <span className="font-medium text-ink">{r.duration}</span>
                      <span className="text-ink-soft">
                        {r.inr}{" "}
                        <span className="text-ink-muted">/ {r.usd}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppUrl(quickMessages.consultation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-5 w-full"
                >
                  Reserve a slot on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
