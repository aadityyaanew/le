"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowUpRight, X } from "lucide-react";

export function MobileNav({ open, onClose }) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-background border-l border-border/70 flex flex-col justify-between">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full justify-between">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-7 py-6 border-b border-border/50">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5"
            >
              <img
                src="/images/logo/le-logo.png"
                alt="Le logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-lg font-bold font-display">{SITE_CONFIG.name}</span>
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-border/60 hover:bg-secondary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav Links with Luxury Indices */}
          <nav
            className="flex-1 px-7 py-10 space-y-2 overflow-y-auto"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href + "/"));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center justify-between py-4 border-b border-border/30 transition-all",
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-muted-foreground/60">
                      0{i + 1}
                    </span>
                    <span className="text-2xl font-display tracking-tight group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isActive
                        ? "text-foreground opacity-100"
                        : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Footer Area */}
          <div className="p-7 border-t border-border/50 space-y-6 bg-secondary/20">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full text-xs font-semibold uppercase tracking-wider font-mono h-12 shadow-sm"
            >
              <Link href="/contact" onClick={onClose}>
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pt-2">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-foreground transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Available Q4
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/70 pt-2 border-t border-border/40">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                TW
              </a>
              <span>·</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LI
              </a>
              <span>·</span>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GH
              </a>
              <span>·</span>
              <a
                href={SOCIAL_LINKS.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                DR
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
