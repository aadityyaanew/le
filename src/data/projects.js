export const projects = [
  {
    slug: "meridian-fintech-platform",
    title: "Meridian",
    subtitle: "Fintech Platform Redesign",
    category: "Web Development",
    serviceSlug: "web-development",
    featured: true,
    year: "2024",
    client: "Meridian Financial",
    industry: "Fintech",
    duration: "14 weeks",
    description:
      "A complete platform redesign and rebuild for a growing fintech startup. We reimagined their dashboard experience, improved onboarding conversion by 40%, and migrated their legacy Rails backend to a modern Next.js + Node.js stack.",
    challenge:
      "Meridian's existing platform was built on an aging Rails monolith with a jQuery frontend. User onboarding had a 62% drop-off rate, and the dashboard was slow and confusing for first-time users. They needed a modern, fast, and intuitive platform that could scale with their rapidly growing user base.",
    solution:
      "We redesigned the entire user experience from the ground up, starting with extensive user research and journey mapping. The new platform was built with Next.js for the frontend and Node.js microservices for the backend, with PostgreSQL for data and Redis for caching. We implemented a progressive onboarding flow, real-time portfolio tracking, and a clean, card-based dashboard.",
    results: [
      "40% improvement in onboarding completion",
      "3x faster page load times",
      "58% increase in daily active users",
      "Successful migration with zero downtime",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Figma",
    ],
    testimonial: {
      quote:
        "Le didn't just rebuild our platform — they fundamentally improved how our users experience our product. The attention to detail and engineering quality exceeded our expectations.",
      author: "Sarah Chen",
      role: "CTO, Meridian Financial",
    },
    metaTitle: "Meridian Fintech Platform Redesign | Le Case Study",
    metaDescription:
      "How we redesigned and rebuilt a fintech platform, improving onboarding conversion by 40% and page load times by 3x using Next.js and modern architecture.",
    color: "#1a1a1a",
  },
  {
    slug: "atlas-health-mobile-app",
    title: "Atlas Health",
    subtitle: "Wellness Tracking App",
    category: "Mobile App Development",
    serviceSlug: "mobile-app-development",
    featured: true,
    year: "2024",
    client: "Atlas Health",
    industry: "Health & Wellness",
    duration: "12 weeks",
    description:
      "A cross-platform wellness tracking application built with React Native. We designed and developed an intuitive health companion that helps users track nutrition, exercise, sleep, and mental wellness in a single, beautifully designed app.",
    challenge:
      "Atlas Health had a vision for a comprehensive wellness app but needed to launch on both iOS and Android within a tight timeline and budget. Existing health apps were either too clinical or too gamified — they wanted something that felt calm, personal, and genuinely useful.",
    solution:
      "We chose React Native with Expo for rapid cross-platform development and designed a minimal, calming interface that prioritises daily usability over feature overload. The app uses local-first data architecture for instant responsiveness, with cloud sync for backups. We integrated HealthKit and Google Fit for automatic activity tracking.",
    results: [
      "4.7-star average rating on both app stores",
      "82% day-7 retention rate",
      "Launched on iOS and Android simultaneously",
      "Featured in App Store 'Apps We Love'",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Firebase",
      "HealthKit",
      "Google Fit",
    ],
    testimonial: {
      quote:
        "Working with Le felt like having a senior product team embedded in our company. They challenged our assumptions, simplified our feature set, and delivered an app our users genuinely love.",
      author: "James Okafor",
      role: "Founder, Atlas Health",
    },
    metaTitle: "Atlas Health Wellness App | Le Case Study",
    metaDescription:
      "How we built a cross-platform wellness app with React Native that achieved 4.7-star ratings and 82% day-7 retention for a health-tech startup.",
    color: "#2a2a2a",
  },
  {
    slug: "forma-design-system",
    title: "Forma",
    subtitle: "Enterprise Design System",
    category: "UI/UX Design",
    serviceSlug: "ui-ux-design",
    featured: true,
    year: "2023",
    client: "Forma Studio",
    industry: "Design & Architecture",
    duration: "8 weeks",
    description:
      "A comprehensive design system and component library for an architecture firm's suite of internal tools. We created a unified visual language that brought consistency across six different applications and reduced design-to-development time by 60%.",
    challenge:
      "Forma Studio had grown rapidly through acquisition, inheriting six different internal tools — each with its own UI patterns, colour schemes, and interaction models. Their designers and developers were spending more time maintaining inconsistency than building new features.",
    solution:
      "We audited all existing applications, identified common patterns, and designed a comprehensive design system with 120+ components. The system was built in Figma with detailed specs and implemented as a React component library with Storybook documentation. We also created migration guides for each application.",
    results: [
      "60% reduction in design-to-development time",
      "Unified experience across 6 applications",
      "120+ reusable components",
      "Adopted by all product teams within 3 months",
    ],
    technologies: [
      "Figma",
      "React",
      "Storybook",
      "Tailwind CSS",
      "Chromatic",
    ],
    testimonial: {
      quote:
        "The design system Le built didn't just make our products look better — it fundamentally changed how our teams collaborate. Design reviews that took days now take hours.",
      author: "Maria Santos",
      role: "Head of Product, Forma Studio",
    },
    metaTitle: "Forma Enterprise Design System | Le Case Study",
    metaDescription:
      "How we built a comprehensive design system with 120+ components that unified six applications and reduced design-to-development time by 60%.",
    color: "#333333",
  },
  {
    slug: "signal-ai-document-processing",
    title: "Signal",
    subtitle: "AI Document Processing",
    category: "AI & Automation",
    serviceSlug: "ai-applications-automation",
    featured: true,
    year: "2024",
    client: "Signal Legal Tech",
    industry: "Legal Technology",
    duration: "10 weeks",
    description:
      "An AI-powered document processing system for a legal tech startup. We built a pipeline that automatically extracts, classifies, and summarises key information from legal contracts, reducing manual review time by 75%.",
    challenge:
      "Signal's legal analysts were spending 4–6 hours per contract on manual review and data extraction. With their client base growing, they needed to process 10x more documents without 10x more staff. Previous attempts at automation using simple rule-based extraction had poor accuracy on diverse contract formats.",
    solution:
      "We built a multi-stage AI pipeline using GPT-4 for intelligent extraction combined with custom NLP models for classification. The system handles diverse contract formats, extracts 50+ data points per document, flags unusual clauses, and generates executive summaries. We built a review interface that lets analysts verify and correct extractions, creating a feedback loop that continuously improves accuracy.",
    results: [
      "75% reduction in manual review time",
      "94% extraction accuracy",
      "Processing capacity increased from 50 to 500 contracts/week",
      "6-month ROI payback period",
    ],
    technologies: [
      "Python",
      "OpenAI API",
      "LangChain",
      "PostgreSQL",
      "React",
      "AWS",
    ],
    testimonial: {
      quote:
        "Le built exactly what we needed — not an AI toy, but a production system our team relies on every day. The accuracy and reliability have exceeded what we thought was possible.",
      author: "David Park",
      role: "CEO, Signal Legal Tech",
    },
    metaTitle: "Signal AI Document Processing | Le Case Study",
    metaDescription:
      "How we built an AI document processing system that reduced legal contract review time by 75% with 94% extraction accuracy using GPT-4 and custom NLP.",
    color: "#0a0a0a",
  },
  {
    slug: "norden-ecommerce-platform",
    title: "Norden",
    subtitle: "Headless Commerce Platform",
    category: "Web Development",
    serviceSlug: "web-development",
    featured: false,
    year: "2023",
    client: "Norden Living",
    industry: "E-Commerce",
    duration: "10 weeks",
    description:
      "A headless e-commerce platform for a Scandinavian furniture brand. We built a lightning-fast storefront with Next.js, integrated with Shopify's Storefront API, and implemented a custom product configurator.",
    challenge:
      "Norden's Shopify theme was limiting their brand expression and causing performance issues. They needed a custom storefront that matched their premium brand identity while maintaining Shopify's backend for inventory and order management.",
    solution:
      "We built a headless commerce frontend with Next.js, using Shopify's Storefront API for product data and checkout. A custom 3D product configurator lets customers visualise furniture in different materials and finishes. The site loads in under 1 second and scores 98+ on Lighthouse.",
    results: [
      "45% increase in conversion rate",
      "98 Lighthouse performance score",
      "Average page load under 1 second",
      "35% increase in average order value",
    ],
    technologies: [
      "Next.js",
      "Shopify Storefront API",
      "Three.js",
      "Vercel",
      "Tailwind CSS",
    ],
    metaTitle: "Norden Headless Commerce Platform | Le Project",
    metaDescription:
      "How we built a headless e-commerce platform for a furniture brand, achieving 45% higher conversion with a custom 3D configurator and sub-second load times.",
    color: "#1a1a1a",
  },
  {
    slug: "relay-internal-dashboard",
    title: "Relay",
    subtitle: "Operations Dashboard",
    category: "Custom Software",
    serviceSlug: "custom-software-development",
    featured: false,
    year: "2024",
    client: "Relay Logistics",
    industry: "Logistics",
    duration: "16 weeks",
    description:
      "A real-time operations dashboard and dispatch system for a logistics company. We replaced a spreadsheet-based workflow with a custom platform that provides live tracking, automated dispatch, and performance analytics.",
    challenge:
      "Relay was managing their entire dispatch operation across spreadsheets, phone calls, and WhatsApp groups. As they scaled to 200+ daily deliveries, the manual process was causing missed deliveries, unhappy customers, and burned-out dispatchers.",
    solution:
      "We built a custom operations platform with real-time driver tracking, automated dispatch assignment using proximity algorithms, customer notification workflows, and comprehensive analytics dashboards. The system integrates with their existing accounting software and provides a mobile app for drivers.",
    results: [
      "90% reduction in missed deliveries",
      "Dispatcher workload reduced by 60%",
      "Real-time tracking for all 200+ daily deliveries",
      "Complete elimination of spreadsheet workflows",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Google Maps API",
      "React Native",
    ],
    metaTitle: "Relay Operations Dashboard | Le Project",
    metaDescription:
      "How we built a real-time operations dashboard that reduced missed deliveries by 90% and dispatcher workload by 60% for a logistics company.",
    color: "#222222",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function getProjectsByService(serviceSlug) {
  return projects.filter((p) => p.serviceSlug === serviceSlug);
}
