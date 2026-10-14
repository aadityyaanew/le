import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AnimatedElement } from "@/components/shared/animated-element";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy & Terms of Service | Le",
  description:
    "Privacy policy and service terms for Le Digital Agency. Learn how we handle client data, confidentiality, NDAs, and intellectual property.",
};

export default function PrivacyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy & Terms", href: "/privacy" },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-10" />

        <div className="max-w-3xl mx-auto space-y-12">
          <AnimatedElement animation="fade-up">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
              Legal & Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
              Privacy Policy & Terms
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: October 14, 2026
            </p>
          </AnimatedElement>

          {/* Privacy Section */}
          <section className="space-y-6 pt-8 border-t border-border/50">
            <h2 className="text-2xl font-light tracking-tight">
              1. Privacy & Client Data Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              At {SITE_CONFIG.name}, we hold client confidentiality and data security as paramount values. We provide design and engineering services to organizations globally, including clients across the United States, United Kingdom, Canada, Australia, and the European Union.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h3 className="font-medium text-foreground">Information We Collect</h3>
              <p>
                When you initiate a project inquiry via our website, we collect your name, work email, organization name, project scope requirements, and timeline. This information is exclusively utilized to communicate with you regarding your engagement and execute discovery consultations.
              </p>

              <h3 className="font-medium text-foreground">Non-Disclosure & Confidentiality</h3>
              <p>
                All project discussions, specifications, proprietary architectures, and business strategies shared with {SITE_CONFIG.name} are treated as strictly confidential under standard mutual Non-Disclosure Agreements (NDAs). We will never share, sell, or commercialize your confidential business information.
              </p>

              <h3 className="font-medium text-foreground">GDPR & International Compliance</h3>
              <p>
                We comply with the EU General Data Protection Regulation (GDPR), the UK Data Protection Act, and the California Consumer Privacy Act (CCPA). You may request access to, correction of, or permanent deletion of any personal data stored with us at any time by emailing{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="underline hover:text-foreground text-foreground"
                >
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </div>
          </section>

          {/* Terms Section */}
          <section id="terms" className="space-y-6 pt-12 border-t border-border/50">
            <h2 className="text-2xl font-light tracking-tight">
              2. Terms of Engagement & IP Ownership
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h3 className="font-medium text-foreground">Intellectual Property Ownership</h3>
              <p>
                Upon receipt of full payment for contracted sprints or project deliverables, all custom source code, design files (Figma components, design tokens, illustrations), and product assets created specifically for the client transfer completely and unconditionally to the client. {SITE_CONFIG.name} retains no claims or royalties on client IP.
              </p>

              <h3 className="font-medium text-foreground">Deliverables & Warranty</h3>
              <p>
                We provide a standard 30-day post-launch warranty on all custom software and web development deliverables to rectify any software defects or discrepancies against contracted specifications at zero additional fee.
              </p>

              <h3 className="font-medium text-foreground">Contact Our Legal Team</h3>
              <p>
                For any inquiries regarding agreements, master service agreements (MSAs), or vendor compliance forms, please reach out directly to{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="underline hover:text-foreground text-foreground"
                >
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
