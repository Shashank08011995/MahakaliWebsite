import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import {
  categoryMeta,
  getServiceBySlug,
  services,
} from "@/data/services";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ServiceCard } from "@/components/ServiceCard";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const meta = categoryMeta[service.category];
  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const whatsappMessage = `🙏 Pranam Guru Didi, I would like to know more about your service: ${service.title}.`;

  return (
    <>
      <section className="bg-white pt-12 pb-10 sm:pt-20 sm:pb-12">
        <div className="container-wide">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <p className="eyebrow mt-6">{meta.label}</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            {service.short}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <article>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-cream-deep shadow-soft">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="prose prose-lg mt-8 max-w-none text-ink-soft">
                <p className="text-lg leading-relaxed">{service.long}</p>
                <h2 className="mt-10 font-serif text-2xl font-semibold text-sindoor">
                  How a session unfolds
                </h2>
                <ol className="mt-4 space-y-3 text-base leading-relaxed">
                  <li>
                    <strong className="text-ink">Listening.</strong> A
                    confidential conversation with Guru Didi to understand
                    what you are carrying.
                  </li>
                  <li>
                    <strong className="text-ink">Diagnosis.</strong> A reading
                    of your chart, your situation, and any energetic
                    influences that may be at play.
                  </li>
                  <li>
                    <strong className="text-ink">Practice.</strong> A clear
                    ritual, mantra, or daily practice prescribed for you
                    personally.
                  </li>
                  <li>
                    <strong className="text-ink">Follow-through.</strong>{" "}
                    Continued guidance through WhatsApp or telephonic
                    consultation, for as long as you need it.
                  </li>
                </ol>
                <p className="mt-8 italic text-ink">
                  Every soul&apos;s path is unique. The above is a guide, not a
                  script. Guru Didi will adjust the practice to your specific
                  situation.
                </p>
              </div>
            </article>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-sindoor">
                  Begin this practice
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Send a brief message to Guru Didi on WhatsApp. Mention this
                  service and any details you wish to share. She will respond
                  personally.
                </p>
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-5 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Guru Didi
                </a>
                <Link href="/contact" className="btn-secondary mt-3 w-full">
                  Other ways to connect
                </Link>
              </div>

              <div className="mt-6 rounded-2xl bg-cream-deep/60 p-6">
                <p className="font-serif text-lg italic text-sindoor-dark">
                  &ldquo;Bring your situation as it is. We will meet it as it
                  is.&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-muted">— Guru Didi</p>
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
                <p className="eyebrow">Related Practices</p>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold">
                  Others in {meta.label}
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
              >
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
