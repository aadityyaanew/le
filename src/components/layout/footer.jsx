"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const footerServices = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Custom Software", href: "/services/custom-software-development" },
  { label: "AI & Automation", href: "/services/ai-applications-automation" },
];

const footerSocials = [
  { label: "Twitter / X", href: SOCIAL_LINKS.twitter },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Dribbble", href: SOCIAL_LINKS.dribbble },
  { label: "GitHub", href: SOCIAL_LINKS.github },
];

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      {/* CTA banner */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-background/50 mb-4">
            Ready to start?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
            Let&apos;s build something{" "}
            <span className="font-serif italic">exceptional</span> together.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-background/90 transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href={SITE_CONFIG.bookingUrl}
              className="inline-flex items-center gap-2 border border-background/20 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-background/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>

      <Separator className="bg-background/10" />

      {/* Footer links */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Company */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-background/50 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-background/50 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-background/50 mb-5">
              Social
            </h3>
            <ul className="space-y-3">
              {footerSocials.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-background/70 hover:text-background transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-background/50 mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <p className="text-sm text-background/50">
                  {SITE_CONFIG.location}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-background/10" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/images/logo/le-logo-white.png"
            alt="Le logo"
            width={20}
            height={20}
            className="w-5 h-5 object-contain invert"
          />
          <p className="text-xs text-background/40">
            © {year} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-xs text-background/40 hover:text-background/70 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/privacy#terms"
            className="text-xs text-background/40 hover:text-background/70 transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
