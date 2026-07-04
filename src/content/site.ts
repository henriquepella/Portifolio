import type { Locale } from "@/types/content";

export const siteConfig = {
  name: "Henrique Pella",
  fullName: "Henrique Aguiar de Souza Pella",
  initials: "HP",
  role: "Software Engineer",
  email: "henriquepella34@gmail.com",
  /** Update when a custom domain is configured. */
  url: "https://henriquepella.vercel.app",
  githubUsername: "henriquepella",
  links: {
    github: "https://github.com/henriquepella",
    linkedin:
      "https://www.linkedin.com/in/henrique-aguiar-de-souza-pella-16009b328",
    whatsapp: "https://wa.me/5519997378470",
  },
  whatsappDisplay: "(19) 99737-8470",
  cv: {
    pt: "/cv/Curriculo_Henrique_Pella_PT.pdf",
    en: "/cv/Resume_Henrique_Pella_EN.pdf",
  } satisfies Record<Locale, string>,
} as const;

export const navSections = [
  { id: "home", href: "#home" },
  { id: "about", href: "#sobre" },
  { id: "experience", href: "#experiencia" },
  { id: "projects", href: "#projetos" },
  { id: "skills", href: "#skills" },
  { id: "contact", href: "#contato" },
] as const;

export type NavSectionId = (typeof navSections)[number]["id"];
