"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { BlogCard } from "@/components/shared/blog-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 border-t border-border/50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="Insights"
            title="Thoughts on digital craft, strategy, and engineering."
            description="Practical writing on software architecture, design systems, and startup execution."
            className="mb-0"
          />
          <Button asChild variant="outline" className="rounded-full self-start md:self-end">
            <Link href="/blog">
              View all articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
