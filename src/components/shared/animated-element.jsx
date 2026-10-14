"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

export function AnimatedElement({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  as: Component = "div",
  ...props
}) {
  const [ref, isVisible] = useIntersection();

  const animationClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "fade-down": "animate-fade-down",
    "slide-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation];

  const delayClass = delay
    ? `animation-delay-${delay}`
    : "";

  return (
    <Component
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClass,
        isVisible && delayClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
