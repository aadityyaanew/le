import { notFound } from "next/navigation";
import Link from "next/link";
import {
  blogPosts,
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedPosts,
} from "@/data/blog-posts";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BlogCard } from "@/components/shared/blog-card";
import { CtaSection } from "@/components/sections/cta-section";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { generateArticleSchema } from "@/lib/structured-data";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Le" };
  }

  return {
    title: `${post.title} | Le Insights`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Le Insights`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug);
  const articleSchema = generateArticleSchema(post);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  // Helper to format raw markdown paragraphs/headings
  const renderContent = (content) => {
    const lines = content.trim().split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-4" />;
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={idx}
            className="text-2xl md:text-3xl font-light tracking-tight text-foreground mt-10 mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="text-xl font-medium tracking-tight text-foreground mt-8 mb-3"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("- ")) {
        const itemText = trimmed.replace("- ", "");
        return (
          <li
            key={idx}
            className="ml-6 list-disc text-muted-foreground leading-relaxed my-1.5"
          >
            {itemText}
          </li>
        );
      }
      return (
        <p key={idx} className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4 text-pretty">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-10" />

          {/* Article Header */}
          <article className="max-w-3xl mx-auto">
            <AnimatedElement animation="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.publishedAt)}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12] mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pb-8 border-b border-border/50 text-pretty">
                {post.excerpt}
              </p>

              {/* Author byline */}
              <div className="py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center font-serif text-sm font-medium">
                    Le
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Le Editorial & Engineering
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Studio Practice Group
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Article Body */}
            <div className="py-8 prose prose-neutral dark:prose-invert max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Back link */}
            <div className="pt-12 mt-12 border-t border-border/50 flex items-center justify-between">
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Insights
                </Link>
              </Button>
            </div>
          </article>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-24 pt-20 border-t border-border/50">
              <div className="max-w-3xl mb-12">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                  Further Reading
                </span>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  Related Insights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((relPost, index) => (
                  <BlogCard key={relPost.slug} post={relPost} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-24">
          <CtaSection
            title="Want to put these ideas into practice?"
            description="Speak with our engineers to architect high-performance web products, mobile apps, and automated workflows."
          />
        </div>
      </div>
    </>
  );
}
