"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Lightbulb, Puzzle, Target, ZoomIn } from "lucide-react";
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
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) setZoom(null);
    onOpenChange(open);
  };

  return (
    <>
      <Dialog open={project !== null} onOpenChange={handleOpenChange}>
      {/* Scrolling lives in an inner wrapper: DialogContent is a grid, and a
          height-capped grid squeezes the cover row, making the image overlap
          the text below. */}
      <DialogContent className="p-0 sm:max-w-3xl">
        {project ? (
          <div className="max-h-[88svh] overflow-y-auto rounded-xl">
            <button
              type="button"
              onClick={() =>
                setZoom({
                  src: project.cover,
                  alt: project.gallery[0]?.alt[locale] ?? project.title,
                })
              }
              className="group relative aspect-video w-full cursor-zoom-in overflow-hidden"
            >
              <Image
                src={project.cover}
                alt={project.gallery[0]?.alt[locale] ?? project.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <span className="pointer-events-none absolute top-3 right-3 rounded-md bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ZoomIn className="size-4" />
              </span>
            </button>

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
                    <button
                      type="button"
                      key={image.src}
                      onClick={() =>
                        setZoom({ src: image.src, alt: image.alt[locale] })
                      }
                      className="group relative aspect-video cursor-zoom-in overflow-hidden rounded-lg border border-border"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt[locale]}
                        fill
                        sizes="(max-width: 768px) 50vw, 350px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="pointer-events-none absolute top-2 right-2 rounded-md bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <ZoomIn className="size-4" />
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}

              {project.githubUrl || project.demoUrl ? (
                <div className="flex flex-wrap gap-3 border-t border-border pt-6">
                  {project.githubUrl ? (
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
                  ) : null}
                  {project.demoUrl ? (
                    <Button asChild variant="outline" className="gap-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink
                          data-icon="inline-start"
                          className="size-4"
                        />
                        {dict.projects.demo}
                      </a>
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        </DialogContent>
      </Dialog>

      <Dialog
        open={zoom !== null}
        onOpenChange={(open) => {
          if (!open) setZoom(null);
        }}
      >
        <DialogContent className="border-0 bg-transparent p-0 shadow-none ring-0 sm:max-w-5xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{zoom?.alt}</DialogTitle>
          </DialogHeader>
          {zoom ? (
            <div className="relative h-[80vh] w-full">
              <Image
                src={zoom.src}
                alt={zoom.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
