"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedElement } from "./animated-element";
import {
  Code2,
  Palette,
  Smartphone,
  Settings,
  BrainCircuit,
} from "lucide-react";

const iconMap = {
  Code2,
  Palette,
  Smartphone,
  Settings,
  BrainCircuit,
};

export function ServiceCard({ service, index = 0 }) {
  const delay = (index % 5) * 100;
  const Icon = iconMap[service.icon] || Code2;

  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <Link
        href={`/services/${service.slug}`}
        className="group block h-full"
      >
        <article className="h-full p-8 lg:p-10 rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-border hover:shadow-md hover:bg-secondary/30">
          <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
            <Icon className="w-6 h-6 text-foreground/70" />
          </div>

          <h3 className="text-xl font-medium mb-3 group-hover:text-foreground transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-pretty">
            {service.tagline}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </article>
      </Link>
    </AnimatedElement>
  );
}
