"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { skillCategories } from "@/content/skills";

export function Skills() {
  const { dict } = useLocale();

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.skills.eyebrow}
          heading={dict.skills.heading}
          description={dict.skills.description}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal
              key={category.id}
              delay={0.08 * categoryIndex}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <category.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">
                  {dict.skills.categories[category.id]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="group inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-2 text-sm font-medium transition-colors duration-300 hover:border-primary/50 hover:bg-primary/5"
                  >
                    <skill.icon
                      className="size-4 text-muted-foreground transition-colors duration-300 group-hover:text-(--skill-color)"
                      style={
                        { "--skill-color": skill.color } as React.CSSProperties
                      }
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
