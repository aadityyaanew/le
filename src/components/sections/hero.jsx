"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedElement } from "@/components/shared/animated-element";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-foreground/[0.03] rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <AnimatedElement animation="fade-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/60 bg-secondary/50 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">
                Available for new projects — Q4 2024
              </span>
            </div>
          </AnimatedElement>

          {/* Main heading */}
          <AnimatedElement animation="fade-up" delay={100}>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] tracking-tight mb-8">
              We build digital
              <br />
              products that{" "}
              <span className="font-serif italic">scale</span>
            </h1>
          </AnimatedElement>

          {/* Subheading */}
          <AnimatedElement animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-12 text-pretty">
              Le is a digital agency for startups and growing businesses. We
              design, build, and ship web apps, mobile apps, and AI-powered
              tools — fast, beautiful, and engineered to last.
            </p>
          </AnimatedElement>

          {/* CTAs */}
          <AnimatedElement animation="fade-up" delay={300}>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base font-medium h-13"
              >
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-medium h-13"
              >
                <Link href="/work">
                  Explore Our Work
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedElement>

          {/* Trust bar */}
          <AnimatedElement animation="fade-up" delay={500}>
            <div className="mt-20 pt-10 border-t border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div>
                  <p className="text-3xl font-light">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Projects delivered
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-light">5</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Countries served
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-light">98%</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Client satisfaction
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-light">4+</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Years of experience
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-muted-foreground/30" />
      </div>
    </section>
  );
}
