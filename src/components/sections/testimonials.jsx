"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedElement } from "@/components/shared/animated-element";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-24 lg:py-32 bg-secondary/30" id="testimonials">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          label="Client Feedback"
          title={
            <>
              What our clients{" "}
              <span className="font-serif italic">say</span>
            </>
          }
        />

        <AnimatedElement animation="fade-up">
          <div className="max-w-4xl">
            <Quote className="w-10 h-10 text-foreground/10 mb-8" />

            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug mb-10 transition-all duration-500">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <cite className="not-italic">
                  <p className="text-base font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </cite>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-sm text-muted-foreground ml-3">
                  {current + 1} / {testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
