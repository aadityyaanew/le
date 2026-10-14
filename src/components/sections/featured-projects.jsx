import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeader } from "@/components/shared/section-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30" id="work">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-20">
          <SectionHeader
            label="Selected Work"
            title={
              <>
                Projects we&apos;re{" "}
                <span className="font-serif italic">proud</span> of
              </>
            }
            description="A selection of recent projects across web development, mobile apps, design systems, and AI automation."
            className="mb-0"
          />
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 shrink-0 self-start md:self-auto"
          >
            <Link href="/work">
              View All Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
