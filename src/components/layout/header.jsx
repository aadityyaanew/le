"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { Menu } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label={`${SITE_CONFIG.name} — Home`}
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <img
                src="/images/logo/le-logo.png"
                alt="Le logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-foreground animate-line-grow" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden lg:inline-flex rounded-full px-6 font-medium"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
