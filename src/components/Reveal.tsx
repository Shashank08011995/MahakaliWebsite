"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "zoom";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  direction?: Direction;
  /** Delay in milliseconds before the animation starts */
  delay?: number;
  /** Stagger child animations (each direct child fades up in sequence) */
  stagger?: boolean;
  /** Once true (default) the element stays revealed; false re-triggers */
  once?: boolean;
  /** Threshold for IntersectionObserver (0–1) */
  threshold?: number;
  /** rootMargin for IntersectionObserver */
  rootMargin?: string;
};

export function Reveal({
  children,
  as,
  className = "",
  direction = "up",
  delay = 0,
  stagger = false,
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  const baseClass = "reveal";
  const dirClass = `reveal-${direction}`;
  const stateClass = visible ? "is-visible" : "";
  const staggerClass = stagger ? "reveal-stagger" : "";

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${dirClass} ${stateClass} ${staggerClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
