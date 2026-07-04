"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Languages, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navSections, siteConfig } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navSections.map((section) => section.href.slice(1));

function Logo() {
  return (
    <a
      href="#home"
      aria-label={siteConfig.name}
      className="text-xl font-bold tracking-tight"
    >
      <span className="text-gradient-purple">{siteConfig.initials}</span>
      <span className="text-primary">.</span>
    </a>
  );
}

const emptySubscribe = () => () => {};

function ThemeToggle() {
  const { dict } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  // true only after hydration, so server and first client render agree
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={dict.a11y.toggleTheme}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "light" ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </Button>
  );
}

function LocaleToggle() {
  const { dict, locale, toggleLocale } = useLocale();

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={dict.a11y.toggleLanguage}
      onClick={toggleLocale}
      className="gap-1.5 font-medium"
    >
      <Languages className="size-4" />
      <span className="text-xs tracking-wide uppercase">{locale}</span>
    </Button>
  );
}

export function Header() {
  const { dict, locale } = useLocale();
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled ? "glass border-b border-border/60" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navSections.map((section) => {
            const isActive = active === section.href.slice(1);
            return (
              <a
                key={section.id}
                href={section.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {dict.nav[section.id]}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <LocaleToggle />
          <ThemeToggle />
          <Button asChild size="sm" className="ml-2 hidden gap-2 sm:inline-flex">
            <a href={siteConfig.cv[locale]} download>
              <Download data-icon="inline-start" className="size-3.5" />
              {dict.nav.downloadCv}
            </a>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={dict.a11y.openMenu}
                className="lg:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <span className="text-gradient-purple text-lg font-bold">
                    {siteConfig.initials}
                  </span>
                  <span className="text-primary">.</span>
                </SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 px-4 pb-6"
              >
                <AnimatePresence>
                  {navSections.map((section, index) => (
                    <motion.a
                      key={section.id}
                      href={section.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                        active === section.href.slice(1)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {dict.nav[section.id]}
                    </motion.a>
                  ))}
                </AnimatePresence>
                <Button asChild className="mt-4 gap-2">
                  <a href={siteConfig.cv[locale]} download>
                    <Download data-icon="inline-start" className="size-3.5" />
                    {dict.nav.downloadCv}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
