"use client";

import { faqs } from "@/data/faq";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedElement } from "@/components/shared/animated-element";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({ items, showHeader = true }) {
  const faqData = items || faqs;

  return (
    <section className="py-24 lg:py-32" id="faq">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {showHeader && (
          <SectionHeader
            label="FAQ"
            title={
              <>
                Questions we get{" "}
                <span className="font-serif italic">asked</span>
              </>
            }
            description="If your question isn't answered here, get in touch and we'll be happy to help."
          />
        )}

        <AnimatedElement animation="fade-up" className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline [&[data-state=open]]:text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-pretty">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedElement>
      </div>
    </section>
  );
}

export const FaqSection = FAQ;
