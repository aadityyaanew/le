import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { TechStack } from "@/components/sections/tech-stack";
import { FaqSection } from "@/components/sections/faq";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata = {
  title: "Le — We Build Digital Products That Scale",
  description:
    "International digital agency for high-growth startups and visionary businesses across USA, UK, Canada, Australia, and Europe. Specializing in Web Development, UI/UX Design, Mobile Apps, Custom Software, and AI Automation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <TechStack />
      <FaqSection />
      <BlogPreview />
      <CtaSection />
    </>
  );
}
