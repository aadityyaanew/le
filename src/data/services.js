import {
  Code2,
  Palette,
  Smartphone,
  Settings,
  BrainCircuit,
} from "lucide-react";

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    icon: "Code2",
    tagline: "Performant, scalable web applications built for growth",
    description:
      "We build fast, accessible, and scalable web applications using modern frameworks like Next.js, React, and Node.js. From landing pages to complex SaaS platforms, every project is engineered for performance, SEO, and long-term maintainability.",
    heroDescription:
      "Your website is often the first conversation you have with a potential customer. We make sure it says the right things — fast, clearly, and beautifully. Our web development services combine modern engineering with thoughtful design to create digital experiences that load instantly, rank well, and convert visitors into customers.",
    keywords: [
      "web development agency for startups",
      "Next.js development",
      "React web development",
      "custom web application development",
      "SaaS web development",
    ],
    metaTitle: "Web Development for Startups & Growing Businesses | Le",
    metaDescription:
      "We build fast, scalable web applications using Next.js, React & Node.js. Custom web development for startups and growing businesses across the US, UK & Europe.",
    features: [
      {
        title: "Single-Page & Multi-Page Applications",
        description:
          "React and Next.js apps with server-side rendering, static generation, and dynamic routes — optimised for speed and search engines.",
      },
      {
        title: "SaaS & Web Platform Development",
        description:
          "Full-stack development for subscription-based products, dashboards, and platforms with authentication, billing, and real-time features.",
      },
      {
        title: "E-Commerce & Marketplace Solutions",
        description:
          "Custom storefronts and marketplaces built on headless commerce architectures, integrated with payment gateways and inventory systems.",
      },
      {
        title: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs, third-party service integrations, and microservice architectures that connect your systems seamlessly.",
      },
      {
        title: "Performance & SEO Optimisation",
        description:
          "Core Web Vitals optimisation, technical SEO foundations, structured data, and accessibility compliance baked into every build.",
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          "Continuous monitoring, security updates, performance audits, and feature development to keep your product competitive.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Vercel",
      "Prisma",
      "Tailwind CSS",
    ],
    process: [
      {
        step: "Discovery & Requirements",
        description:
          "We start every engagement with a thorough discovery session to understand your business goals, target users, technical requirements, and timeline.",
      },
      {
        step: "Architecture & Planning",
        description:
          "Our engineers design the technical architecture, select the optimal tech stack, and create a detailed project roadmap with milestones.",
      },
      {
        step: "Iterative Development",
        description:
          "We build in focused sprints, delivering working software every two weeks for your review and feedback.",
      },
      {
        step: "Testing & Launch",
        description:
          "Rigorous QA across devices and browsers, performance optimisation, security audits, and a smooth production deployment.",
      },
    ],
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We primarily work with Next.js, React, and Node.js for most web applications. For databases, we use PostgreSQL or MongoDB depending on the project requirements. We deploy on Vercel, AWS, or your preferred cloud provider.",
      },
      {
        question: "How long does a typical web development project take?",
        answer:
          "Timelines vary based on complexity. A marketing website typically takes 4–6 weeks. A web application or SaaS product ranges from 8–16 weeks for an initial launch, with ongoing iteration afterwards.",
      },
      {
        question:
          "Do you build websites that rank well on search engines?",
        answer:
          "Yes. Technical SEO is built into every project from the start — including semantic HTML, structured data, clean URLs, meta tags, performance optimisation, and Core Web Vitals compliance.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Absolutely. We regularly take over existing projects for refactoring, feature development, or performance improvements. We'll start with a thorough code audit to understand the current state.",
      },
    ],
    relatedServices: ["ui-ux-design", "custom-software-development"],
  },
  {
    slug: "ui-ux-design",
    title: "Website Design & UI/UX",
    shortTitle: "Design",
    icon: "Palette",
    tagline: "Interfaces that are beautiful, intuitive, and conversion-focused",
    description:
      "We design interfaces that balance visual elegance with usability. From research and wireframes to high-fidelity prototypes and design systems, our design process is grounded in user needs and business objectives.",
    heroDescription:
      "Great design isn't decoration — it's communication. We craft interfaces that guide users naturally toward their goals (and yours). Our design process starts with understanding your users and ends with pixel-perfect interfaces backed by research, tested with real people, and built to scale.",
    keywords: [
      "UI/UX design agency",
      "website design for startups",
      "product design agency",
      "user interface design",
      "conversion-focused design",
    ],
    metaTitle: "UI/UX Design Agency for Startups & Digital Products | Le",
    metaDescription:
      "Human-centred UI/UX design that balances beauty with usability. We create conversion-focused interfaces for startups and digital products worldwide.",
    features: [
      {
        title: "User Research & Strategy",
        description:
          "User interviews, competitive analysis, and journey mapping to ensure designs are grounded in real insights, not assumptions.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Low-fidelity wireframes to test structure, followed by interactive prototypes in Figma that simulate the final experience.",
      },
      {
        title: "Visual & Interface Design",
        description:
          "High-fidelity UI design with meticulous attention to typography, colour, spacing, and micro-interactions.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable component libraries and style guides that ensure consistency across your product and accelerate future development.",
      },
      {
        title: "Responsive & Adaptive Design",
        description:
          "Interfaces that work beautifully across every screen size, from mobile to ultra-wide desktop monitors.",
      },
      {
        title: "Usability Testing",
        description:
          "Real-user testing sessions to validate design decisions, uncover friction points, and iterate toward better outcomes.",
      },
    ],
    technologies: [
      "Figma",
      "Framer",
      "Adobe Creative Suite",
      "Principle",
      "Miro",
      "Maze",
    ],
    process: [
      {
        step: "Research & Audit",
        description:
          "We immerse ourselves in your business, competitors, and users through interviews, analytics review, and heuristic evaluation.",
      },
      {
        step: "Information Architecture",
        description:
          "Content strategy, site mapping, and user-flow design to create a logical, intuitive structure.",
      },
      {
        step: "Design & Iterate",
        description:
          "Wireframes → visual design → interactive prototypes, with feedback loops at every stage.",
      },
      {
        step: "Handoff & Support",
        description:
          "Developer-ready specs, asset exports, and design system documentation. We stay involved through implementation.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer:
          "UX (User Experience) design focuses on the overall feel and functionality — how a product works. UI (User Interface) design is about the visual layer — how it looks. We handle both, ensuring products are both intuitive and beautiful.",
      },
      {
        question: "Do you design for mobile apps as well?",
        answer:
          "Yes. We design for iOS, Android, and cross-platform apps following each platform's design guidelines while maintaining your brand identity.",
      },
      {
        question: "How do you measure design success?",
        answer:
          "We track conversion rates, task completion rates, user satisfaction scores, and engagement metrics. Good design should measurably improve business outcomes.",
      },
    ],
    relatedServices: ["web-development", "mobile-app-development"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    icon: "Smartphone",
    tagline: "Native and cross-platform apps that users love",
    description:
      "We build mobile applications for iOS and Android using React Native and native technologies. From consumer apps to enterprise tools, we create mobile experiences that are fast, reliable, and genuinely useful.",
    heroDescription:
      "The best mobile apps don't just work — they become habits. We build iOS and Android applications that launch reliably, perform beautifully, and grow with your business. Whether you need a consumer-facing app or an internal tool, we bring the engineering discipline and design sensibility to get it right.",
    keywords: [
      "mobile app development company",
      "React Native development",
      "iOS app development",
      "Android app development",
      "cross-platform mobile apps",
    ],
    metaTitle:
      "Mobile App Development — iOS & Android Apps for Startups | Le",
    metaDescription:
      "Custom iOS & Android app development using React Native and native technologies. We build mobile apps that users love, from concept to App Store launch.",
    features: [
      {
        title: "Cross-Platform Development",
        description:
          "React Native apps that share code across iOS and Android while delivering near-native performance and platform-specific polish.",
      },
      {
        title: "Native iOS & Android",
        description:
          "Swift and Kotlin development for projects that demand maximum performance, platform integration, or advanced device capabilities.",
      },
      {
        title: "Backend & API Development",
        description:
          "Cloud-based backends, real-time databases, push notifications, and third-party API integrations to power your mobile experience.",
      },
      {
        title: "App Store Optimisation",
        description:
          "Screenshots, descriptions, keyword optimisation, and launch strategy to maximise visibility and downloads on the App Store and Google Play.",
      },
      {
        title: "Analytics & Crash Reporting",
        description:
          "Built-in analytics, error tracking, and performance monitoring to understand user behaviour and maintain reliability.",
      },
      {
        title: "Post-Launch Iteration",
        description:
          "Ongoing feature development, OS update compatibility, performance tuning, and user-feedback-driven improvements.",
      },
    ],
    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "Expo",
      "Firebase",
      "Node.js",
      "GraphQL",
      "AWS Amplify",
    ],
    process: [
      {
        step: "Strategy & Scoping",
        description:
          "Define the core user problems, key features for launch, and the platform strategy (cross-platform vs. native).",
      },
      {
        step: "Design & Prototype",
        description:
          "UI/UX design following platform guidelines, interactive prototypes, and user testing before writing a line of code.",
      },
      {
        step: "Agile Development",
        description:
          "Sprint-based development with regular builds, internal testing, and stakeholder demos every two weeks.",
      },
      {
        step: "Launch & Scale",
        description:
          "App Store submission, launch monitoring, crash-free rate tracking, and rapid iteration based on real user data.",
      },
    ],
    faqs: [
      {
        question: "Should I build a native app or cross-platform?",
        answer:
          "For most startups, React Native offers the best balance of development speed, cost efficiency, and user experience. We recommend native development when you need advanced hardware integration, complex animations, or maximum performance.",
      },
      {
        question: "How much does mobile app development cost?",
        answer:
          "Costs depend on complexity, features, and platform. A focused MVP typically ranges from $30,000–$80,000. We provide detailed estimates after our discovery session so there are no surprises.",
      },
      {
        question: "Do you handle App Store submission?",
        answer:
          "Yes, we manage the entire submission process for both the Apple App Store and Google Play Store, including screenshots, metadata, and compliance with platform guidelines.",
      },
    ],
    relatedServices: ["ui-ux-design", "custom-software-development"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Software",
    icon: "Settings",
    tagline: "Bespoke software that solves your specific business challenges",
    description:
      "When off-the-shelf tools don't fit, we build custom software tailored to your workflows. From internal tools and dashboards to complex data processing systems, we create solutions that give your business a genuine competitive advantage.",
    heroDescription:
      "Some problems can't be solved with a subscription. When your business outgrows off-the-shelf tools, custom software becomes a competitive advantage. We build the systems, platforms, and internal tools that let you operate the way you actually need to — efficiently, securely, and at scale.",
    keywords: [
      "custom software development services",
      "bespoke software development",
      "enterprise software development",
      "internal tools development",
      "custom business applications",
    ],
    metaTitle:
      "Custom Software Development Services for Growing Businesses | Le",
    metaDescription:
      "Bespoke software solutions tailored to your workflows. We build custom internal tools, platforms, and business applications that give you a competitive edge.",
    features: [
      {
        title: "Internal Tools & Dashboards",
        description:
          "Custom admin panels, reporting dashboards, and workflow tools that streamline your team's operations and surface critical insights.",
      },
      {
        title: "Business Process Automation",
        description:
          "Automated workflows that eliminate manual tasks, reduce errors, and free your team to focus on high-value work.",
      },
      {
        title: "Data Processing & Pipelines",
        description:
          "ETL pipelines, data warehousing, and processing systems that turn raw data into actionable intelligence.",
      },
      {
        title: "System Integration",
        description:
          "Connect disparate systems, APIs, and databases into a unified, efficient workflow. CRM, ERP, accounting, and custom integrations.",
      },
      {
        title: "Legacy System Modernisation",
        description:
          "Migrate outdated systems to modern architectures without disrupting your operations or losing critical data.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Systems designed to handle growth — from hundreds to millions of users — with cloud-native architectures and horizontal scaling.",
      },
    ],
    technologies: [
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Terraform",
    ],
    process: [
      {
        step: "Business Analysis",
        description:
          "We map your current workflows, pain points, and objectives to define exactly what the software needs to do.",
      },
      {
        step: "Solution Design",
        description:
          "Technical architecture, data modelling, and integration planning tailored to your specific requirements and growth projections.",
      },
      {
        step: "Build & Deliver",
        description:
          "Iterative development with regular check-ins, demos, and opportunities for course correction throughout the project.",
      },
      {
        step: "Deploy & Evolve",
        description:
          "Production deployment, team training, documentation, and ongoing maintenance and feature development.",
      },
    ],
    faqs: [
      {
        question: "When should I consider custom software?",
        answer:
          "Custom software makes sense when off-the-shelf tools require too many workarounds, when you have unique processes that give you a competitive advantage, or when you're spending too much time on manual processes that could be automated.",
      },
      {
        question:
          "How do you ensure the software will meet our needs?",
        answer:
          "We start with thorough business analysis and maintain close collaboration throughout development. Regular demos and feedback sessions ensure we're always building the right thing.",
      },
      {
        question: "Will we own the code?",
        answer:
          "Yes. You own 100% of the source code, documentation, and all related intellectual property. We can also help you build an internal team to maintain it long-term.",
      },
    ],
    relatedServices: [
      "ai-applications-automation",
      "web-development",
    ],
  },
  {
    slug: "ai-applications-automation",
    title: "AI Applications & Workflow Automation",
    shortTitle: "AI & Automation",
    icon: "BrainCircuit",
    tagline: "Intelligent automation that transforms how you work",
    description:
      "We build practical AI applications and intelligent workflow automation that deliver real business value. From GPT-powered tools to document processing and predictive analytics, we help you work smarter, not harder.",
    heroDescription:
      "AI isn't magic — it's engineering. We cut through the hype and build practical AI applications that solve real problems for your business. Whether it's automating repetitive workflows, building intelligent document processing, or creating custom AI-powered tools, we focus on measurable impact over buzzwords.",
    keywords: [
      "AI workflow automation services",
      "AI application development",
      "business process automation AI",
      "custom AI solutions",
      "GPT API integration",
    ],
    metaTitle:
      "AI Applications & Workflow Automation Services | Le",
    metaDescription:
      "Practical AI solutions and intelligent workflow automation for businesses. We build custom AI tools, automate processes, and integrate AI APIs that deliver real ROI.",
    features: [
      {
        title: "Custom AI Application Development",
        description:
          "Purpose-built AI tools using LLMs, computer vision, or NLP — designed for your specific use case, not generic chatbots.",
      },
      {
        title: "Workflow Automation",
        description:
          "End-to-end automation of repetitive business processes, from data entry and document processing to customer communication.",
      },
      {
        title: "AI API Integration",
        description:
          "OpenAI, Anthropic, Google AI, and other model APIs integrated into your existing systems with proper error handling, caching, and cost management.",
      },
      {
        title: "Intelligent Document Processing",
        description:
          "Automated extraction, classification, and processing of documents — invoices, contracts, forms, and more — with high accuracy.",
      },
      {
        title: "Data Analysis & Insights",
        description:
          "AI-powered analytics that surface patterns, predictions, and recommendations from your business data.",
      },
      {
        title: "AI Strategy Consulting",
        description:
          "Practical assessment of where AI can (and can't) help your business, with a realistic roadmap for implementation.",
      },
    ],
    technologies: [
      "OpenAI API",
      "Anthropic Claude",
      "LangChain",
      "Python",
      "TensorFlow",
      "Pinecone",
      "Zapier",
      "Make",
      "n8n",
      "AWS Lambda",
    ],
    process: [
      {
        step: "Opportunity Assessment",
        description:
          "We identify the highest-impact automation opportunities in your business and evaluate technical feasibility.",
      },
      {
        step: "Proof of Concept",
        description:
          "A focused prototype to validate the approach, test accuracy, and demonstrate value before committing to a full build.",
      },
      {
        step: "Production Build",
        description:
          "Robust implementation with error handling, monitoring, cost optimisation, and integration with your existing systems.",
      },
      {
        step: "Monitor & Optimise",
        description:
          "Ongoing monitoring of AI model performance, cost tracking, and continuous improvement based on real-world results.",
      },
    ],
    faqs: [
      {
        question: "Is AI right for my business?",
        answer:
          "AI is most impactful when you have repetitive processes, large volumes of unstructured data, or customer interactions that follow patterns. We'll be honest if AI isn't the right solution for your specific problem.",
      },
      {
        question: "How do you handle data privacy with AI?",
        answer:
          "We implement strict data handling protocols, use enterprise AI APIs with data processing agreements, and can deploy on-premises solutions when required. Your data is never used to train third-party models without your explicit consent.",
      },
      {
        question: "What ROI can I expect from AI automation?",
        answer:
          "ROI varies by use case, but our clients typically see 40–70% time savings on automated processes. We set clear, measurable success criteria before starting any AI project.",
      },
    ],
    relatedServices: [
      "custom-software-development",
      "web-development",
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}
