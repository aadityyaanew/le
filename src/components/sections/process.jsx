"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedElement } from "@/components/shared/animated-element";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start every project with a deep dive into your business, users, and goals. No assumptions — just clarity on what we're building and why.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Information architecture, wireframes, and high-fidelity designs — validated with prototypes and user feedback before development begins.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Iterative, sprint-based development with working demos every two weeks. You see real progress, not just status updates.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "Thorough QA, smooth deployment, and ongoing support. We stay involved through launch and beyond to ensure long-term success.",
  },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32" id="process">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          label="How We Work"
          title={
            <>
              A process designed for{" "}
              <span className="font-serif italic">clarity</span>
            </>
          }
          description="No black boxes. Our four-phase process keeps you informed and in control at every stage — from first call to post-launch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-xl overflow-hidden border border-border/50">
          {steps.map((step, i) => (
            <AnimatedElement
              key={step.number}
              animation="fade-up"
              delay={i * 100}
              className="bg-card p-8 lg:p-10"
            >
              <span className="text-5xl font-extralight text-muted-foreground/30 block mb-6">
                {step.number}
              </span>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {step.description}
              </p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
