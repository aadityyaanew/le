"use client";

export function InfiniteMarquee() {
  const items = [
    "WEB DEVELOPMENT",
    "NEXT.JS & REACT",
    "UI/UX CRAFT",
    "CUSTOM SOFTWARE",
    "AI AUTOMATION",
    "MOBILE APPLICATIONS",
    "DESIGN SYSTEMS",
    "HIGH-PERFORMANCE CODE",
    "GLOBAL PRODUCT STUDIO",
  ];

  return (
    <div className="relative py-7 border-y border-border/40 overflow-hidden bg-secondary/20 select-none">
      <div className="flex w-max animate-marquee space-x-12">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-12">
            <span className="text-xs md:text-sm font-mono tracking-[0.25em] uppercase text-foreground/70 font-medium">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
