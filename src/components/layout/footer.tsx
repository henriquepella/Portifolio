"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { getLenis } from "@/components/providers/lenis-provider";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { navSections, siteConfig } from "@/content/site";

export function Footer() {
  const { dict } = useLocale();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: siteConfig.links.github,
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: "WhatsApp",
      href: siteConfig.links.whatsapp,
      icon: FaWhatsapp,
    },
  ];

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs space-y-3">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-gradient-purple">
                {siteConfig.initials}
              </span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              {siteConfig.name} — {dict.footer.role}
            </p>
          </div>

          <nav aria-label={dict.footer.quickLinks} className="space-y-3">
            <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {dict.footer.quickLinks}
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={section.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {dict.nav[section.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {dict.footer.social}
            </h3>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            {dict.footer.backToTop}
            <ArrowUp className="size-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
