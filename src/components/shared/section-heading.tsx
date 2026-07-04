"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 flex flex-col gap-4 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {description ? (
        <p className="max-w-xl text-base text-muted-foreground text-balance sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
