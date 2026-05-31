import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
  /** Disable scroll-reveal animation on the heading block */
  noReveal?: boolean;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
  noReveal = false,
}: SectionProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const HasHeader = Boolean(eyebrow || title || description);

  const headerInner = (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${alignClass}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && (
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty font-medium">
          {description}
        </p>
      )}
    </div>
  );

  return (
    <section className={`section ${className}`}>
      <div className="container-wide">
        {HasHeader &&
          (noReveal ? (
            headerInner
          ) : (
            <Reveal direction="up">{headerInner}</Reveal>
          ))}
        {noReveal ? children : <Reveal direction="up" delay={120}>{children}</Reveal>}
      </div>
    </section>
  );
}
