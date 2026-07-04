"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/content/services";

export function Services() {
  const { dict, locale } = useLocale();

  return (
    <section id="servicos" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          heading={dict.services.heading}
          description={dict.services.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={0.06 * index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 size-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="flex size-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <service.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">
                {service.title[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description[locale]}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
