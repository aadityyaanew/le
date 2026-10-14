import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AnimatedElement } from "@/components/shared/animated-element";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Calendar, MapPin, Clock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Start a Project | Contact Le",
  description:
    "Partner with Le to design, develop, and ship high-impact digital products. Book a discovery call or submit your project brief.",
  openGraph: {
    title: "Start a Project with Le — International Digital Studio",
    description:
      "Partner with Le to design, develop, and ship high-impact digital products. Book a discovery call or submit your project brief.",
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <AnimatedElement animation="fade-up">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
                  Let&apos;s Build Together
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6">
                  Start a project with{" "}
                  <span className="font-serif italic">Le</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  We partner with ambitious startups and scale-ups across the United States, United Kingdom, Canada, Australia, and Europe. Have an inquiry, RFP, or product concept? We are ready.
                </p>
              </AnimatedElement>
            </div>

            {/* Quick Contact Cards */}
            <AnimatedElement animation="fade-up" delay={150}>
              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-border/60 bg-card/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium">Direct Email</h2>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                      Typically answered within 4 hours
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm font-medium hover:underline text-foreground"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border/60 bg-card/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium">Discovery Call (30 min)</h2>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                      Speak directly with our technical partner
                    </p>
                    <Link
                      href={SITE_CONFIG.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline underline-offset-4 hover:text-foreground/80"
                    >
                      Pick a time on our calendar →
                    </Link>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border/60 bg-card/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium">Global Distributed Studio</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Distributed across EST, GMT, and AEST timezones to guarantee synchronous overlap.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Guarantees */}
            <AnimatedElement animation="fade-up" delay={250}>
              <div className="pt-6 border-t border-border/50 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                  <Clock className="w-4 h-4 text-foreground/80 shrink-0" />
                  <span>24-Hour Response</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-foreground/80 shrink-0" />
                  <span>Strict Mutual NDA</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                  <Zap className="w-4 h-4 text-foreground/80 shrink-0" />
                  <span>Rapid Sprint Onboarding</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Q4 Availability Open</span>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <AnimatedElement animation="fade-up" delay={200}>
              <ContactForm />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
}
