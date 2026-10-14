"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { AnimatedElement } from "@/components/shared/animated-element";

export function CtaSection({
  title = "Ready to build your next breakthrough?",
  description = "Whether you have an MVP ready to design, a platform to scale, or need AI workflows built into your operations — we're ready to partner with you.",
  primaryCtaText = "Start a Project",
  primaryCtaHref = "/contact",
  showBooking = true,
}) {
  return (
    <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden bg-zinc-950 text-white">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement animation="fade-up">
            <span className="inline-block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-4">
              Work With Le
            </span>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white mb-6">
              {title}
            </h2>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200}>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
              {description}
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-white text-black hover:bg-zinc-200 transition-all font-medium h-12"
              >
                <Link href={primaryCtaHref}>
                  {primaryCtaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              {showBooking && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-zinc-700 text-white hover:bg-zinc-900 transition-all font-medium h-12"
                >
                  <Link
                    href={SITE_CONFIG.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 mr-2 text-zinc-400" />
                    Book a Discovery Call
                  </Link>
                </Button>
              )}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
