"use client";

import { useState } from "react";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { BlogCard } from "@/components/shared/blog-card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AnimatedElement } from "@/components/shared/animated-element";
import { CtaSection } from "@/components/sections/cta-section";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        {/* Hero */}
        <div className="max-w-4xl mb-14 lg:mb-20">
          <AnimatedElement animation="fade-up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
              Editorial & Engineering Notes
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-8">
              Insights on craft, <span className="font-serif italic">performance</span>, and scale
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Hard-won perspectives on modern software engineering, conversion-led design, AI integration, and launching digital products that stand out.
            </p>
          </AnimatedElement>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border/50 pb-6">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center border border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>

      <div className="mt-24">
        <CtaSection
          title="Have a challenge you'd like us to dissect?"
          description="We regularly advise founders on architectural roadmaps, stack migrations, and AI adoption."
        />
      </div>
    </div>
  );
}
