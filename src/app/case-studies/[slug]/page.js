import { notFound } from "next/navigation";
import Link from "next/link";
import {
  projects,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/data/projects";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote, Layers, Check } from "lucide-react";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Case Study Not Found | Le" };
  }

  return {
    title: `${project.title} Case Study | Le`,
    description: project.metaDescription || project.description,
    openGraph: {
      title: `${project.title} — Technical Case Study | Le`,
      description: project.metaDescription || project.description,
    },
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: project.title, href: `/case-studies/${project.slug}` },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        <div className="max-w-4xl mb-16">
          <AnimatedElement animation="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="text-xs">
                Case Study // {project.category}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.08] mb-6">
              How we helped {project.client} build {project.subtitle.toLowerCase()}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {project.description}
            </p>
          </AnimatedElement>
        </div>

        {/* Highlight Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl border border-border/60 bg-secondary/30 mb-20">
          {project.results.map((res, i) => (
            <div key={i} className="p-4 rounded-xl bg-card border border-border/40">
              <span className="text-xs uppercase font-mono text-muted-foreground block mb-1">
                Outcome 0{i + 1}
              </span>
              <p className="text-base font-medium text-foreground">{res}</p>
            </div>
          ))}
        </div>

        {/* Narrative Flow */}
        <div className="max-w-4xl space-y-16 mx-auto mb-20">
          <section className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
              Phase 01 // The Problem & Friction
            </span>
            <h2 className="text-3xl font-light tracking-tight">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.challenge}
            </p>
          </section>

          <section className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
              Phase 02 // Engineering & Product Design
            </span>
            <h2 className="text-3xl font-light tracking-tight">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.solution}
            </p>
          </section>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="p-8 lg:p-12 rounded-2xl border border-border bg-card relative">
              <Quote className="w-10 h-10 text-foreground/15 mb-4" />
              <blockquote className="text-xl font-light italic leading-relaxed mb-6">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-medium">{project.testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <section className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
              Phase 03 // Tech Stack
            </span>
            <h2 className="text-2xl font-light tracking-tight">
              Technologies Deployed
            </h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-lg border border-border/80 bg-secondary/40 text-sm font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <CtaSection
        title={`Ready to scale like ${project.client}?`}
        description="Schedule a technical consultation to map out requirements, architecture, and timeline for your product."
      />
    </div>
  );
}
