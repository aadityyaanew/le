"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { AnimatedElement } from "./animated-element";

export function ProjectCard({ project, index = 0 }) {
  const delay = (index % 4) * 80;

  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <Link href={`/work/${project.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-card border border-border/60 transition-all duration-500 hover:border-foreground/40 hover:shadow-2xl">
          {/* Project Preview Canvas */}
          <div
            className="aspect-[16/10] w-full relative overflow-hidden flex items-center justify-center p-8 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            style={{ backgroundColor: project.color || "#121212" }}
          >
            {/* Subtle architectural grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Kinetic watermarked typographic art */}
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-white/[0.12] select-none tracking-tight transition-transform duration-700 ease-out group-hover:scale-105 group-hover:text-white/[0.22]">
              {project.title}
            </span>

            {/* Corner Badge */}
            <div className="absolute top-5 left-5">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 text-white/90 backdrop-blur-md border border-white/10">
                0{index + 1} // {project.year}
              </span>
            </div>

            {/* Floating Action Button on Hover */}
            <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Card Meta Content */}
          <div className="p-7 lg:p-9 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl font-light tracking-tight group-hover:text-foreground/80 transition-colors">
                  {project.title}{" "}
                  <span className="text-muted-foreground font-serif italic text-lg">
                    — {project.subtitle}
                  </span>
                </h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5 border-t border-border/40">
              {project.technologies?.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-secondary/50 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </AnimatedElement>
  );
}
