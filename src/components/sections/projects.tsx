"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Construction } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLocale } from "@/components/providers/locale-provider";
import { ProjectDialog } from "@/components/sections/project-dialog";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

export function Projects() {
  const { dict, locale } = useLocale();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetos" className="section-padding relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-spotlight opacity-50"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.projects.eyebrow}
          heading={dict.projects.heading}
          description={dict.projects.description}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.1 * index}>
              <article className="group glass-card flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`${dict.projects.viewCaseStudy}: ${project.title}`}
                  className="relative aspect-[16/10] cursor-pointer overflow-hidden text-left"
                >
                  <Image
                    src={project.cover}
                    alt={project.gallery[0]?.alt[locale] ?? project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
                  {project.status === "in-progress" ? (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
                      <Construction className="size-3.5" />
                      {dict.projects.inDevelopment}
                    </span>
                  ) : null}
                  <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-primary opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                    {dict.projects.viewCaseStudy}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    {project.githubUrl ? (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon-sm"
                        className="shrink-0 text-muted-foreground hover:text-primary"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — GitHub`}
                        >
                          <FaGithub className="size-4" />
                        </a>
                      </Button>
                    ) : null}
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description[locale]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border bg-background/60 text-xs text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog
        project={selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
}
