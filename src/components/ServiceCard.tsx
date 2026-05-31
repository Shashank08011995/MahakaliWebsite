import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-saffron-200/60 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[var(--accent-soft)]/30 via-cream-deep to-[var(--accent-soft)]/20">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-3 transition duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-xl font-semibold text-sindoor-dark">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {service.short}
        </p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-saffron-700">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
