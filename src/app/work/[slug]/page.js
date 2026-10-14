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
import { ArrowRight, ArrowLeft, CheckCircle2, Quote, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Le" };
  }

  return {
    title: project.metaTitle || `${project.title} — ${project.subtitle} | Le`,
    description: project.metaDescription || project.description,
    openGraph: {
      title: `${project.title} — Le Project Showcase`,
      description: project.metaDescription || project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: project.title, href: `/work/${project.slug}` },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        {/* Project Header */}
        <div className="max-w-4xl mb-14">
          <AnimatedElement animation="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="text-xs font-medium">
                {project.category}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-6">
              {project.title}
              <span className="text-muted-foreground block text-2xl md:text-3xl lg:text-4xl font-light mt-3">
                {project.subtitle}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty">
              {project.description}
            </p>
          </AnimatedElement>
        </div>

        {/* Project Metadata Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm mb-16">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-1">
              Client
            </span>
            <p className="text-sm font-medium">{project.client}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-1">
              Industry
            </span>
            <p className="text-sm font-medium">{project.industry}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-1">
              Timeline
            </span>
            <p className="text-sm font-medium">{project.duration}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-1">
              Service
            </span>
            <Link
              href={`/services/${project.serviceSlug}`}
              className="text-sm font-medium underline underline-offset-4 hover:text-foreground/80"
            >
              {project.category}
            </Link>
          </div>
        </div>

        {/* Visual Poster Banner */}
        <div
          className="aspect-[21/9] w-full rounded-2xl border border-border/50 flex items-center justify-center mb-20 overflow-hidden relative"
          style={{ backgroundColor: project.color || "#111" }}
        >
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          <span className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-white/10 select-none">
            {project.title}
          </span>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
              The Challenge
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              What stood in the way
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
              Our Solution
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              Engineering and design execution
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tangible Results */}
        {project.results && (
          <section className="p-8 lg:p-12 rounded-2xl border border-border/60 bg-secondary/30 mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                Business Impact
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                Measurable outcomes delivered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border/40 bg-card/70 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack & Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
              Architecture & Stack
            </span>
            <h3 className="text-xl font-medium">Tools used in this build</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg border border-border bg-card text-xs font-mono font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="lg:col-span-7 p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm relative">
              <Quote className="w-8 h-8 text-foreground/15 mb-4" />
              <blockquote className="text-lg md:text-xl font-light italic leading-relaxed mb-6 text-foreground">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {project.testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Prev / Next Pagination */}
        <div className="pt-10 border-t border-border/50 flex items-center justify-between">
          <Button asChild variant="ghost" className="gap-2">
            <Link href={`/work/${prevProject.slug}`}>
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous:</span> {prevProject.title}
            </Link>
          </Button>

          <Button asChild variant="ghost" className="gap-2">
            <Link href={`/work/${nextProject.slug}`}>
              <span className="hidden sm:inline">Next:</span> {nextProject.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-20">
        <CtaSection
          title="Looking for similar results for your business?"
          description="Let's build a dedicated product sprint tailored to your objectives and timelines."
        />
      </div>
    </div>
  );
}
