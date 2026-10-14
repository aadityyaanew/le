"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedElement } from "@/components/shared/animated-element";

const techCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Swift", "Kotlin", "Expo", "Flutter"],
  },
  {
    title: "Data & AI",
    items: ["PostgreSQL", "MongoDB", "Redis", "OpenAI", "LangChain"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Vercel", "Docker", "Terraform"],
  },
  {
    title: "Design",
    items: ["Figma", "Framer", "Storybook", "Adobe CC", "Principle"],
  },
];

export function TechStack() {
  return (
    <section className="py-24 lg:py-32" id="technology">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          label="Technology"
          title={
            <>
              The right tools for{" "}
              <span className="font-serif italic">every</span> challenge
            </>
          }
          description="We choose technologies based on your project's needs — not trends. Modern, proven stacks that scale with your business."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/50 rounded-xl overflow-hidden border border-border/50">
          {techCategories.map((category, i) => (
            <AnimatedElement
              key={category.title}
              animation="fade-up"
              delay={i * 100}
              className="bg-card p-6"
            >
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
