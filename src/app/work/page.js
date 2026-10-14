"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProjectCard } from "@/components/shared/project-card";
import { AnimatedElement } from "@/components/shared/animated-element";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "AI & Automation",
  "Custom Software",
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        {/* Hero */}
        <div className="max-w-4xl mb-16 lg:mb-24">
          <AnimatedElement animation="fade-up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
              Portfolio & Case Archives
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-8">
              Selected works for <span className="font-serif italic">visionary</span> brands
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              A curated collection of web platforms, mobile products, design systems, and AI workflows shipped for international clients. Every project engineered for business outcomes.
            </p>
          </AnimatedElement>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border/50 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center border border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>

      <div className="mt-24">
        <CtaSection
          title="Have a project in mind?"
          description="We'd love to learn about what you are building and explore how we can help you bring it to life."
        />
      </div>
    </div>
  );
}
