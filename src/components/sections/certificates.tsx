"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { certificates } from "@/content/certificates";

export function Certificates() {
  const { dict } = useLocale();

  return (
    <section id="certificados" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.certificates.eyebrow}
          heading={dict.certificates.heading}
          description={dict.certificates.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <Reveal
              key={certificate.id}
              delay={0.05 * index}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground">
                <certificate.icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold">
                  {certificate.name}
                </h3>
                <p className="truncate text-xs text-muted-foreground">
                  {certificate.issuer}
                </p>
              </div>
              <Badge
                variant="outline"
                className="shrink-0 border-primary/30 bg-primary/5 text-xs text-primary"
              >
                {dict.certificates.inProgress}
              </Badge>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
