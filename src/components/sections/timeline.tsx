"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { timeline } from "@/content/timeline";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const { dict, locale } = useLocale();
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(lineRef.current, { scaleY: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experiencia" className="section-padding relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-spotlight opacity-60"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.timeline.eyebrow}
          heading={dict.timeline.heading}
          description={dict.timeline.description}
        />

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* animated vertical line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[19px] w-px bg-border sm:left-1/2"
          />
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-gradient-to-b from-primary via-primary-hover to-primary/30 sm:left-1/2"
          />

          <ol className="space-y-12">
            {timeline.map((entry, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li key={entry.id} className="relative">
                  <Reveal
                    direction={isLeft ? "left" : "right"}
                    delay={0.05 * index}
                    className={cn(
                      "flex flex-col gap-3 pl-14 sm:w-1/2 sm:pl-0",
                      isLeft
                        ? "sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12",
                    )}
                  >
                    <span
                      className={cn(
                        "text-4xl font-bold tracking-tight text-primary/25 tabular-nums select-none sm:text-5xl",
                      )}
                    >
                      {entry.year}
                    </span>
                    <div
                      className={cn(
                        "rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
                      )}
                    >
                      <div
                        className={cn(
                          "flex flex-wrap items-center gap-2",
                          isLeft && "sm:justify-end",
                        )}
                      >
                        <h3 className="text-base font-semibold">
                          {entry.title[locale]}
                        </h3>
                        {entry.ongoing ? (
                          <Badge className="border-success/30 bg-success/10 text-success">
                            {dict.timeline.ongoing}
                          </Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {entry.place[locale]}
                      </p>
                      <p className="mt-2 text-xs font-medium tracking-wide text-primary">
                        {entry.period[locale]}
                      </p>
                    </div>
                  </Reveal>

                  {/* node on the line */}
                  <span
                    aria-hidden="true"
                    className="absolute top-2 left-[19px] flex size-4 -translate-x-1/2 items-center justify-center sm:left-1/2"
                  >
                    <span className="size-3 rounded-full border-2 border-primary bg-background" />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
