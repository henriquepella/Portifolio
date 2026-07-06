import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type Locale = "pt" | "en";

/** A value with one variant per supported locale. */
export type Localized<T = string> = Record<Locale, T>;

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    badge: string;
    role: string;
    tagline: string;
    description: string;
    viewProjects: string;
    downloadCv: string;
    scrollDown: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: {
      projects: string;
      years: string;
      commits: string;
      technologies: string;
    };
  };
  timeline: {
    eyebrow: string;
    heading: string;
    description: string;
    ongoing: string;
    viewCertificate: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    description: string;
    groups: {
      solid: string;
      learning: string;
    };
  };
  projects: {
    eyebrow: string;
    heading: string;
    description: string;
    viewCaseStudy: string;
    about: string;
    challenge: string;
    solution: string;
    learnings: string;
    technologies: string;
    github: string;
    demo: string;
    inDevelopment: string;
  };
  github: {
    eyebrow: string;
    heading: string;
    description: string;
    contributions: string;
    stats: string;
    topLanguages: string;
    streak: string;
    viewProfile: string;
    statLabels: {
      repos: string;
      followers: string;
      stars: string;
      commits: string;
      pullRequests: string;
    };
  };
  services: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    subtitle: string;
    labels: {
      email: string;
      linkedin: string;
      github: string;
      whatsapp: string;
      location: string;
    };
    locationValue: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      validation: {
        nameMin: string;
        emailInvalid: string;
        subjectMin: string;
        messageMin: string;
      };
    };
  };
  footer: {
    role: string;
    rights: string;
    quickLinks: string;
    social: string;
    backToTop: string;
  };
  a11y: {
    toggleTheme: string;
    toggleLanguage: string;
    openMenu: string;
    skipToContent: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: Localized;
  challenge: Localized;
  solution: Localized;
  learnings: Localized;
  technologies: string[];
  cover: string;
  gallery: { src: string; alt: Localized }[];
  /** Marks a work-in-progress project — shows an "in development" badge. */
  status?: "in-progress";
  /** Omit for private repositories — the GitHub button is hidden. */
  githubUrl?: string;
  demoUrl?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  period: Localized;
  title: Localized;
  place: Localized;
  ongoing?: boolean;
  /** Optional attached image (e.g., a diploma) opened in a lightbox on click. */
  image?: { src: string; alt: Localized };
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillGroup {
  id: "solid" | "learning";
  icon: LucideIcon;
  skills: Skill[];
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: Localized;
  description: Localized;
}

