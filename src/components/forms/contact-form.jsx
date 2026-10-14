"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { AnimatedElement } from "@/components/shared/animated-element";

const projectTypes = [
  "Web Development",
  "UI/UX Design",
  "Mobile App Development",
  "Custom Software",
  "AI & Automation",
  "Full-Stack MVP",
];

const budgetRanges = [
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelines = [
  "Immediately (< 2 weeks)",
  "Within 1 month",
  "Within 2–3 months",
  "Flexible / Planning phase",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Web Development",
    budget: "$25,000 – $50,000",
    timeline: "Within 1 month",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate async submission
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="p-8 lg:p-12 rounded-2xl border border-border bg-card text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-foreground" />
        </div>
        <h3 className="text-2xl font-medium tracking-tight mb-3">
          Proposal Request Received
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Thank you, <span className="text-foreground font-medium">{formData.name}</span>. Our lead architect will review your project brief and get back to you at <span className="text-foreground font-medium">{formData.email}</span> within 24 hours with next steps.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              company: "",
              projectType: "Web Development",
              budget: "$25,000 – $50,000",
              timeline: "Within 1 month",
              message: "",
            });
            setStatus("idle");
          }}
          className="rounded-full px-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 lg:p-12 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Sarah Jenkins"
            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
          >
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah@company.com"
            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
          >
            Company or Startup
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Health Tech"
            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
          >
            Primary Requirement *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="budget"
            className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
          >
            Expected Budget (USD)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
          >
            Target Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
          >
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
        >
          Project Overview *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about the challenge, target audience, core features, or metrics you are aiming to move..."
          className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted-foreground">
          🔒 Strict NDA protected. No spam. 24h guaranteed response.
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto rounded-full px-8 text-sm font-medium h-12"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting Brief...
            </>
          ) : (
            <>
              Send Project Inquiry
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
