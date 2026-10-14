"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500 rounded-full",
              scrolled
                ? "px-5 py-2.5 bg-background/75 backdrop-blur-2xl border border-border/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                : "bg-transparent px-0 py-0"
            )}
          >
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group select-none"
              aria-label={`${SITE_CONFIG.name} — Home`}
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo/le-logo.png"
                  alt="Le logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight font-display text-foreground">
                  {SITE_CONFIG.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 border-l border-border/70 pl-2">
                  Studio
                </span>
              </div>
            </Link>

            {/* Center: Floating Island Navigation (Desktop) */}
            <nav
              className="hidden lg:flex items-center p-1.5 rounded-full border border-border/60 bg-secondary/35 backdrop-blur-xl shadow-xs"
              aria-label="Primary navigation"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href + "/"));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    className={cn(
                      "relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 rounded-full",
                      isActive
                        ? "bg-foreground text-background font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.05]"
                    )}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Availability Badge + CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Live status badge (Desktop) */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-secondary/40 text-[11px] font-mono text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Q4 Available</span>
              </div>

              {/* Start Project CTA Button */}
              <Button
                asChild
                size="sm"
                className="hidden sm:inline-flex rounded-full px-5 h-9 text-xs font-semibold uppercase tracking-wider font-mono shadow-xs transition-transform active:scale-95"
              >
                <Link href="/contact" className="flex items-center gap-1.5">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </Button>

              {/* Animated Hamburger Trigger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-md text-foreground hover:bg-secondary transition-colors"
                aria-label="Open menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between py-0.5">
                  <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
                  <span className="w-3/4 ml-auto h-0.5 bg-foreground rounded-full transition-all" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxury Mobile Menu */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
