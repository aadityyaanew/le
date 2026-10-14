import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AnimatedElement } from "@/components/shared/animated-element";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Check, Globe, Shield, Terminal, Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Le — Digital Product Studio for Startups",
  description:
    "Le is an international digital agency engineered for founders and startups across the US, UK, Canada, Australia, and Europe. Learn about our philosophy, principles, and team.",
};

const values = [
  {
    icon: Terminal,
    title: "Senior-Tier Engineering",
    description:
      "No junior bench. Every line of code and UI component is authored by seasoned engineers and designers with deep startup experience.",
  },
  {
    icon: Zap,
    title: "Velocity Without Tech Debt",
    description:
      "We build fast by using battle-tested modern stacks (Next.js, Tailwind, React Native, Node.js), avoiding bloated templates and premature overengineering.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "Direct Slack/Discord access, 2-week sprint demos, transparent fixed-price or dedicated team contracts, and full intellectual property ownership from day one.",
  },
  {
    icon: Globe,
    title: "Global Asynchronous Mastery",
    description:
      "Our distributed presence across EST, GMT, and AEST guarantees overlapping hours with North America, the UK, Europe, and Australasia.",
  },
];

const principles = [
  "No minimum viable clutter: design should clarify, not decorate",
  "Speed is a feature: sub-second load times and 95+ Core Web Vitals",
  "You own everything: full Git repos, Figma files, and infrastructure keys",
  "Business outcomes over vanity metrics: we build software that converts",
];

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        {/* Hero */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <AnimatedElement animation="fade-up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
              The Studio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-8">
              We build with <span className="font-serif italic">conviction</span>, craft, and speed
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Le was founded on a simple premise: ambitious startups deserve the calibre of engineering and product design typically reserved for tech giants — delivered with agility, clarity, and zero agency bureaucracy.
            </p>
          </AnimatedElement>
        </div>

        {/* Brand Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start py-16 border-t border-border/50">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-3">
              Our Identity
            </span>
            <h2 className="text-3xl font-light tracking-tight mb-6">
              Why &ldquo;Le&rdquo;?
            </h2>
            <div className="p-8 rounded-2xl bg-zinc-950 text-white border border-border/40 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <img
                  src="/images/logo/le-logo.png"
                  alt="Le"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain invert"
                />
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                In mathematics, <span className="font-mono text-white font-medium">&le;</span> represents precision and boundaries. In language, &ldquo;Le&rdquo; denotes the definitive article — the singular standard. To us, it stands for purposeful reduction: stripping away the noise until only what is vital remains.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Most traditional agencies move too slow, charge for administrative overhead, and pass critical work to junior contractors. Freelance marketplaces, on the other hand, lack cohesive architectural standards and product discipline.
            </p>
            <p>
              We established Le to occupy the sweet spot: a high-conviction product studio that functions as your dedicated technical co-founding unit. We write clean, performant TypeScript, architect scalable cloud backends, design Figma systems that your developers will love, and build practical AI automation that accelerates your operational bottom line.
            </p>

            <div className="pt-6 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-light text-foreground">50+</p>
                <p className="text-xs text-muted-foreground mt-1">Products Launched</p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">5</p>
                <p className="text-xs text-muted-foreground mt-1">Core Markets</p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">98%</p>
                <p className="text-xs text-muted-foreground mt-1">CSAT Rating</p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">4+ Yrs</p>
                <p className="text-xs text-muted-foreground mt-1">Avg Partner Tenure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-3">
              How We Think
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Foundational Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* The Le Code */}
        <section className="py-16 border-t border-border/50">
          <div className="p-8 lg:p-12 rounded-2xl border border-border/60 bg-secondary/30">
            <h3 className="text-xl font-medium mb-6">Our Commitments to Every Client</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-foreground shrink-0 mt-1" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20">
        <CtaSection
          title="Ready to meet your new product team?"
          description="Book a discovery call to talk directly with our partners about your roadmap."
        />
      </div>
    </div>
  );
}
