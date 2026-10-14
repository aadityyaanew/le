import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";
import { getProjectsByService } from "@/data/projects";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProjectCard } from "@/components/shared/project-card";
import { CtaSection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateServiceSchema } from "@/lib/structured-data";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
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

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Le" };
  }

  return {
    title: service.metaTitle || `${service.title} | Le`,
    description: service.metaDescription || service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} — Le Digital Agency`,
      description: service.metaDescription || service.description,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Code2;
  const serviceProjects = getProjectsByService ? getProjectsByService(slug) : [];
  const schema = generateServiceSchema(service);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-10" />

          {/* Service Hero */}
          <div className="max-w-4xl mb-20 lg:mb-28">
            <AnimatedElement animation="fade-up">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-border/60 bg-secondary/50 mb-6">
                <Icon className="w-4 h-4 text-foreground" />
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {service.shortTitle || service.title}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-8">
                {service.title}
              </h1>

              <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed mb-6">
                {service.tagline}
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty mb-10">
                {service.heroDescription || service.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-12">
                  <Link href="/contact">
                    Start {service.title} Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12"
                >
                  <Link href="#deliverables">
                    View Deliverables
                  </Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>

          {/* Deliverables / Features */}
          <section id="deliverables" className="py-16 border-t border-border/50">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-3">
                Scope & Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                What we build and deliver
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, i) => (
                <AnimatedElement
                  key={i}
                  animation="fade-up"
                  delay={i * 80}
                  className="p-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm"
                >
                  <span className="text-xs font-mono text-muted-foreground/60 block mb-4">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedElement>
              ))}
            </div>
          </section>

          {/* Process Section */}
          {service.process && (
            <section className="py-20 border-t border-border/50">
              <div className="max-w-3xl mb-12">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-3">
                  Our Methodology
                </span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                  How we execute {service.shortTitle || service.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-border/40 bg-secondary/20"
                  >
                    <span className="text-2xl font-mono font-light text-foreground/40 block mb-3">
                      {step.step || `0${i + 1}`}
                    </span>
                    <h3 className="text-base font-medium mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack */}
          {service.techStack && (
            <section className="py-16 border-t border-border/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                    Modern Foundation
                  </span>
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                    Technologies & Frameworks
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2.5 rounded-lg border border-border/60 bg-card text-sm font-medium text-foreground"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Projects Showcase */}
          {serviceProjects.length > 0 && (
            <section className="py-20 border-t border-border/50">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                    Selected Work
                  </span>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                    Recent {service.shortTitle || service.title} projects
                  </h2>
                </div>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/work">
                    All Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {serviceProjects.map((project, idx) => (
                  <ProjectCard key={project.slug} project={project} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* Service FAQ */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-16 border-t border-border/50 pt-16">
              <FAQ items={service.faqs} showHeader={true} />
            </div>
          )}
        </div>

        <div className="mt-20">
          <CtaSection
            title={`Ready to start your ${service.title.toLowerCase()} project?`}
            description="Book a technical discovery session to discuss your roadmap, timeline, and architectural requirements."
          />
        </div>
      </div>
    </>
  );
}
