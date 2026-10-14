"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowRight } from "lucide-react";

export function MobileNav({ open, onClose }) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Logo area */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-border/50">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5"
            >
              <img
                src="/images/logo/le-logo.png"
                alt="Le logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-semibold">{SITE_CONFIG.name}</span>
            </Link>
          </div>

          {/* Nav links */}
          <nav
            className="flex-1 px-6 py-8 space-y-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between py-3.5 text-2xl font-light transition-colors duration-200 border-b border-border/30",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-opacity",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="px-6 py-8 border-t border-border/50">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full text-base font-medium"
            >
              <Link href="/contact" onClick={onClose}>
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              {SITE_CONFIG.email}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
