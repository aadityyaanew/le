"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedElement } from "@/components/shared/animated-element";

export function Hero() {
  return (
    <section className="relative min-h-[92dvh] flex flex-col justify-between overflow-hidden pt-32 lg:pt-40 pb-16">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Atmospheric ambient lighting */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-foreground/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Top Eyebrow Ribbon */}
        <AnimatedElement animation="fade-up">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-secondary/50 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                Accepting Select Clients — 2026/2027
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center px-3 py-1 rounded-full border border-border/40 text-[11px] font-mono text-muted-foreground/80">
              <span>San Francisco · London · Sydney</span>
            </div>
          </div>
        </AnimatedElement>

        {/* Massive Editorial Headline */}
        <AnimatedElement animation="fade-up" delay={100}>
          <h1 className="text-[clamp(2.75rem,8.5vw,7.5rem)] font-bold leading-[0.96] tracking-[-0.04em] mb-10 max-w-5xl text-balance">
            We engineer <br className="hidden sm:block" />
            digital products <br className="hidden sm:block" />
            with <span className="underline decoration-2 underline-offset-8 decoration-foreground/30 font-medium">uncompromising</span> craft.
          </h1>
        </AnimatedElement>

        {/* Subtitle & Conversion CTA block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end max-w-5xl">
          <AnimatedElement animation="fade-up" delay={200} className="lg:col-span-7">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty font-normal">
              Le is an independent digital studio pairing Silicon Valley speed with bespoke editorial design. We build high-conversion web platforms, mobile ecosystems, and proprietary AI workflows for leaders who refuse to look average.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={300} className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-sm font-semibold h-12 shadow-sm transition-transform active:scale-95"
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
              className="rounded-full px-7 text-sm font-medium h-12 border-border/70 hover:bg-secondary/60"
            >
              <Link href="/work">
                View Archive
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>

        {/* Editorial Metrics Strip */}
        <AnimatedElement animation="fade-up" delay={400}>
          <div className="mt-16 lg:mt-24 pt-8 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12">
            <div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                $140M+
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                Client Valuations Scaled
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                50+
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                Products Deployed
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                99.8%
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                On-Time Sprint Record
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                5 Markets
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                US · UK · CA · AU · EU
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 w-full pt-8 flex items-center justify-between text-xs font-mono text-muted-foreground/60">
        <span>[01 / 07] STUDIO OVERVIEW</span>
        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-4 h-px bg-muted-foreground/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
