"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { AnimatedElement } from "./animated-element";

export function ProjectCard({ project, index = 0 }) {
  const delay = (index % 4) * 100;

  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <Link
        href={`/work/${project.slug}`}
        className="group block"
      >
        <article className="relative overflow-hidden rounded-xl bg-secondary/50 border border-border/50 transition-all duration-500 hover:border-border hover:shadow-lg">
          {/* Image placeholder */}
          <div
            className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ backgroundColor: project.color || "#1a1a1a" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-serif italic text-white/20 select-none">
                {project.title}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <Badge variant="secondary" className="mb-3 text-xs font-medium">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-medium leading-tight group-hover:text-foreground/80 transition-colors">
                  {project.title}
                  <span className="text-muted-foreground font-light">
                    {" "}— {project.subtitle}
                  </span>
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </article>
      </Link>
    </AnimatedElement>
  );
}
