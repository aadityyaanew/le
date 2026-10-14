"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { AnimatedElement } from "./animated-element";

export function BlogCard({ post, index = 0 }) {
  const delay = (index % 3) * 100;

  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full"
      >
        <article className="h-full flex flex-col p-6 lg:p-8 rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-border hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-xs font-medium">
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {post.readTime}
            </span>
          </div>

          <h3 className="text-lg font-medium leading-snug mb-3 group-hover:text-foreground/80 transition-colors text-balance">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <time
              dateTime={post.publishedAt}
              className="text-xs text-muted-foreground"
            >
              {formatDate(post.publishedAt)}
            </time>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </article>
      </Link>
    </AnimatedElement>
  );
}
