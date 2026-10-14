import { SITE_CONFIG } from "@/lib/constants";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    "",
    "/services",
    "/work",
    "/case-studies",
    "/about",
    "/contact",
    "/blog",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyPages = projects.map((project) => ({
    url: `${baseUrl}/case-studies/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
    ...caseStudyPages,
    ...blogPages,
  ];
}
