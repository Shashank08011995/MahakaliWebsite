import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  title: string;
  sanskrit?: string;
  short: string;
  image: string;
  pricing?: { inr: string; usd: string };
};

export function RitualCard({ href, title, sanskrit, short, image, pricing }: Props) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-saffron-200/60 bg-white shadow-soft transition hover:-translate-y-1 hover:border-saffron-400 hover:shadow-glow"
    >
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/15">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-3 transition duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-xl font-bold text-sindoor leading-snug">
          {title}
        </h3>
        {sanskrit && (
          <p className="mt-1 font-devanagari text-sm text-sindoor-dark">
            {sanskrit}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-ink-soft flex-1">
          {short}
        </p>
        <div className="mt-5 flex items-center justify-between text-sm font-semibold">
          <span className="text-sindoor">{pricing?.inr ?? "Ask for pricing"}</span>
          <span className="inline-flex items-center gap-1 text-saffron-700">
            Read more
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
