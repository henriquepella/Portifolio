import { BadgeCheck, BookOpen } from "lucide-react";
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { SkillGroup } from "@/types/content";

/**
 * Dois grupos:
 * - "solid": domínio real, com projeto público no GitHub (portfólio, Fluxo,
 *   Aldino, Fut360, RPG).
 * - "learning": stack que a Engenharia de Software da PUC-Campinas ensina e
 *   que ainda estou consolidando (linguagens, bancos de dados, IA/dados,
 *   IHC, SO e DevOps da grade curricular).
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "solid",
    icon: BadgeCheck,
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "HTML", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "var(--foreground)" },
    ],
  },
  {
    id: "learning",
    icon: BookOpen,
    skills: [
      { name: "C", icon: SiC, color: "#a8b9cc" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "Kotlin", icon: SiKotlin, color: "#7f52ff" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Oracle", icon: GrOracle, color: "#c74634" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#cc2927" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Pandas", icon: SiPandas, color: "var(--foreground)" },
      { name: "NumPy", icon: SiNumpy, color: "#4d77cf" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "Linux", icon: SiLinux, color: "#fcc624" },
    ],
  },
];
