import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/lib/constants";
import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
} from "@/lib/structured-data";

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — International Digital Product Studio`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "digital agency",
    "web development agency",
    "startup product studio",
    "UI/UX design agency",
    "custom software development",
    "mobile app development",
    "AI workflow automation",
    "Next.js agency",
    "React agency",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — We Build Digital Products That Scale`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/logo/le-logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Digital Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — We Build Digital Products That Scale`,
    description: SITE_CONFIG.description,
    creator: "@leagency",
    images: ["/images/logo/le-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo/le-logo.png",
    shortcut: "/images/logo/le-logo.png",
    apple: "/images/logo/le-logo.png",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = generateOrganizationSchema();
  const serviceSchema = generateProfessionalServiceSchema();

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground selection:bg-foreground selection:text-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
