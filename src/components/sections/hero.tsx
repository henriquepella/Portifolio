"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

const ParticlesBackground = dynamic(
  () =>
    import("@/components/shared/particles-background").then(
      (mod) => mod.ParticlesBackground,
    ),
  { ssr: false },
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero({ avatar }: { avatar: React.ReactNode }) {
  const { dict, locale } = useLocale();
  const reducedMotion = useReducedMotion();

  const socialLinks = [
    { label: "GitHub", href: siteConfig.links.github, icon: FaGithub },
    { label: "LinkedIn", href: siteConfig.links.linkedin, icon: FaLinkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: "WhatsApp", href: siteConfig.links.whatsapp, icon: FaWhatsapp },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* layered, very subtle background */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-spotlight" />
      <ParticlesBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-28 text-center sm:px-6"
      >
        <motion.div variants={item}>{avatar}</motion.div>

        <motion.span
          variants={item}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs font-medium text-success"
        >
          <span className="relative flex size-2">
            {!reducedMotion && (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
            )}
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          {dict.hero.badge}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          {siteConfig.name.split(" ")[0]}{" "}
          <span className="text-gradient-purple">
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl"
        >
          {dict.hero.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-2 text-sm font-medium tracking-wide text-primary sm:text-base"
        >
          {dict.hero.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base text-muted-foreground text-balance sm:text-lg"
        >
          {dict.hero.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-11 gap-2 px-6 text-sm glow-primary-sm hover:bg-primary-hover"
          >
            <a href="#projetos">{dict.hero.viewProjects}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 gap-2 px-6 text-sm"
          >
            <a href={siteConfig.cv[locale]} download>
              <Download data-icon="inline-start" className="size-4" />
              {dict.hero.downloadCv}
            </a>
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              asChild
              variant="ghost"
              size="icon-lg"
              className="rounded-full text-muted-foreground hover:text-primary"
            >
              <a
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="size-5" />
              </a>
            </Button>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label={dict.hero.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
