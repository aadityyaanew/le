import Link from "next/link";
import { projects } from "@/data/projects";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AnimatedElement } from "@/components/shared/animated-element";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Case Studies & Client ROI | Le Digital Studio",
  description:
    "In-depth case studies detailing how Le builds high-performance web applications, mobile platforms, and AI automation for global startups.",
};

export default function CaseStudiesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        <div className="max-w-4xl mb-16 lg:mb-24">
          <AnimatedElement animation="fade-up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
              Proven Outcomes
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-8">
              Deep dives into <span className="font-serif italic">scale</span>, speed, and architecture
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Read how we solve complex product challenges — from legacy monolith migrations to custom AI document processing pipelines.
            </p>
          </AnimatedElement>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {projects.map((study, idx) => (
            <AnimatedElement
              key={study.slug}
              animation="fade-up"
              delay={idx * 100}
            >
              <article className="p-8 lg:p-12 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all hover:border-border hover:shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-xs">
                        {study.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        {study.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                      {study.title} — {study.subtitle}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                      >
                        Read full case study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div className="p-6 rounded-xl border border-border/50 bg-secondary/30">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-foreground" />
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Key Metrics Delivered
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((res, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                            <span className="text-xs font-medium text-foreground">
                              {res}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md border border-border bg-background text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <CtaSection
          title="Ready to engineer your own success story?"
          description="Let's build software that drives real revenue, reduces operational costs, and delights users."
        />
      </div>
    </div>
  );
}
