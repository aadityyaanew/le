"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  const delay = (index % 5) * 80;
  const Icon = iconMap[service.icon] || Code2;

  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <article className="relative h-full p-8 lg:p-10 rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:border-foreground/40 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
          {/* Subtle top-right index indicator */}
          <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground/40 group-hover:text-foreground transition-colors">
            / 0{index + 1}
          </div>

          <div>
            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
              <Icon className="w-6 h-6 transition-colors" />
            </div>

            <h3 className="text-2xl font-light tracking-tight mb-3 group-hover:text-foreground transition-colors">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-pretty">
              {service.tagline}
            </p>
          </div>

          <div className="pt-6 border-t border-border/40 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
            <span>Explore Discipline</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </article>
      </Link>
    </AnimatedElement>
  );
}
