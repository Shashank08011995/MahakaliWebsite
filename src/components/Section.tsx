import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: SectionProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <section className={`section ${className}`}>
      <div className="container-wide">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl mb-10 sm:mb-14 ${alignClass}`}>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {title && (
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
