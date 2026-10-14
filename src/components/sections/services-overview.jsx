import { services } from "@/data/services";
import { ServiceCard } from "@/components/shared/service-card";
import { SectionHeader } from "@/components/shared/section-header";

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32" id="services">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          label="What We Do"
          title={
            <>
              End-to-end digital services for{" "}
              <span className="font-serif italic">ambitious</span> teams
            </>
          }
          description="From concept to launch and beyond — we handle design, engineering, and strategy so you can focus on growing your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
