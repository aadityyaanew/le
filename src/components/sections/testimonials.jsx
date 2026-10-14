"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedElement } from "@/components/shared/animated-element";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 lg:py-36 border-t border-border/50 relative overflow-hidden">
      {/* Editorial backdrop watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-[18rem] font-serif italic">
        TRUST
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          label="Validation"
          title={
            <>
              What our partners say about{" "}
              <span className="font-serif italic">velocity</span> & craft
            </>
          }
          description="Direct feedback from founders and tech executives who trusted Le to architect and scale their primary digital assets."
        />

        <div className="max-w-4xl mx-auto mt-12">
          <AnimatedElement animation="fade-up">
            <div className="relative p-8 md:p-14 lg:p-16 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-2xl">
              <Quote className="w-12 h-12 text-foreground/10 mb-8" />

              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed tracking-tight mb-12 text-foreground font-serif italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-border/40">
                <div>
                  <h4 className="text-lg font-medium text-foreground">
                    {current.name}
                  </h4>
                  <p className="text-sm font-mono text-muted-foreground mt-0.5">
                    {current.role} · {current.company}
                  </p>
                </div>

                {/* Interactive slide controllers */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground mr-2">
                    0{currentIndex + 1} / 0{testimonials.length}
                  </span>
                  <button
                    onClick={prev}
                    aria-label="Previous quote"
                    className="w-11 h-11 rounded-full border border-border/70 flex items-center justify-center hover:bg-foreground hover:text-background transition-all active:scale-95"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next quote"
                    className="w-11 h-11 rounded-full border border-border/70 flex items-center justify-center hover:bg-foreground hover:text-background transition-all active:scale-95"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
