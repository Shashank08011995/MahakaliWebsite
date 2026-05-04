import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <figure
          key={i}
          className="relative flex flex-col rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft"
        >
          <Quote
            className="absolute right-5 top-5 h-6 w-6 text-saffron-200"
            aria-hidden
          />
          <blockquote className="font-serif text-lg leading-relaxed text-ink italic">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 border-t border-saffron-100 pt-4">
            <div className="text-sm font-semibold text-sindoor">{t.name}</div>
            <div className="text-xs uppercase tracking-wider text-ink-muted">
              {t.location}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
