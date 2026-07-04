"use client";

import Image from "next/image";
import { ExternalLink, Lightbulb, Puzzle, Target } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLocale } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/types/content";

interface ProjectDialogProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

interface CaseStudyBlockProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function CaseStudyBlock({ icon, title, text }: CaseStudyBlockProps) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-primary">
        {icon}
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  );
}

export function ProjectDialog({ project, onOpenChange }: ProjectDialogProps) {
  const { dict, locale } = useLocale();

  return (
    <Dialog open={project !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88svh] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
        {project ? (
          <>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={project.cover}
                alt={project.gallery[0]?.alt[locale] ?? project.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  {project.description[locale]}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-3 sm:grid-cols-3">
                <CaseStudyBlock
                  icon={<Target className="size-4" />}
                  title={dict.projects.challenge}
                  text={project.challenge[locale]}
                />
                <CaseStudyBlock
                  icon={<Puzzle className="size-4" />}
                  title={dict.projects.solution}
                  text={project.solution[locale]}
                />
                <CaseStudyBlock
                  icon={<Lightbulb className="size-4" />}
                  title={dict.projects.learnings}
                  text={project.learnings[locale]}
                />
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                  {dict.projects.technologies}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 bg-primary/5 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.gallery.length > 1 ? (
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.slice(1).map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-video overflow-hidden rounded-lg border border-border"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt[locale]}
                        fill
                        sizes="(max-width: 768px) 50vw, 350px"
                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3 border-t border-border pt-6">
                <Button asChild className="gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub data-icon="inline-start" className="size-4" />
                    {dict.projects.github}
                  </a>
                </Button>
                {project.demoUrl ? (
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink data-icon="inline-start" className="size-4" />
                      {dict.projects.demo}
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
