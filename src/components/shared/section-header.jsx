"use client";

import { AnimatedElement } from "./animated-element";
import { cn } from "@/lib/utils";

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "mb-14 lg:mb-20",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {label && (
        <AnimatedElement animation="fade-up">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            {label}
          </p>
        </AnimatedElement>
      )}
      <AnimatedElement animation="fade-up" delay={100}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-balance">
          {title}
        </h2>
      </AnimatedElement>
      {description && (
        <AnimatedElement animation="fade-up" delay={200}>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            {description}
          </p>
        </AnimatedElement>
      )}
    </div>
  );
}
