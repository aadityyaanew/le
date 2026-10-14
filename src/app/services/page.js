import Link from "next/link";
import { services } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedElement } from "@/components/shared/animated-element";
import { CtaSection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
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

export const metadata = {
  title: "Digital Product Services | Web, Mobile, UI/UX & AI",
  description:
    "Explore Le's full suite of digital services: Web Development (Next.js/React), UI/UX Design, iOS/Android Mobile Apps, Custom Software, and AI Automation.",
  openGraph: {
    title: "Services — Le Digital Agency",
    description:
      "Full-cycle digital product engineering: web, mobile, UI/UX, and AI solutions built for startups and fast-moving teams.",
  },
};

export default function ServicesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        {/* Page Hero */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <AnimatedElement animation="fade-up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
              Core Capabilities
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-8">
              Services engineered for{" "}
              <span className="font-serif italic">velocity</span> & scale
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              We operate as your dedicated design and engineering partner. Whether you need an MVP built from scratch, a critical system overhauled, or AI automation integrated into your workflows — we deliver senior-tier execution with zero fluff.
            </p>
          </AnimatedElement>
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-12 lg:space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <AnimatedElement
                key={service.slug}
                animation="fade-up"
                delay={index * 80}
              >
                <article className="p-8 lg:p-14 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all hover:border-border hover:shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Header column */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                          0{index + 1} // Service
                        </span>
                        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-1 mb-3">
                          {service.title}
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-2">
                        <Button asChild className="rounded-full px-6">
                          <Link href={`/services/${service.slug}`}>
                            Explore {service.title}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Features & Deliverables */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                          Key Deliverables & Capabilities
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl border border-border/40 bg-secondary/30"
                            >
                              <div className="flex items-start gap-2.5">
                                <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="text-sm font-medium text-foreground">
                                    {feature.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack tags */}
                      {service.techStack && (
                        <div className="pt-4 border-t border-border/40">
                          <span className="text-xs font-mono text-muted-foreground mr-3">
                            Technologies:
                          </span>
                          <div className="inline-flex flex-wrap gap-2 mt-2">
                            {service.techStack.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs font-normal"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </AnimatedElement>
            );
          })}
        </div>

        {/* Global FAQ */}
        <div className="mt-24 lg:mt-32">
          <FAQ showHeader={true} />
        </div>
      </div>

      <div className="mt-20">
        <CtaSection
          title="Discuss your project with our lead architects"
          description="Let's look at your roadmap, architecture, or design sprint requirements and see how we can help you ship faster."
        />
      </div>
    </div>
  );
}
