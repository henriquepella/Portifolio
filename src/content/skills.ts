import { BadgeCheck, BookOpen } from "lucide-react";
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
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
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiScipy,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { SkillGroup } from "@/types/content";

/**
 * Dois grupos: "solid" (domínio real) e "learning" (em aprendizado).
 * TODO: distribuição provisória — mova itens entre os grupos (ou remova)
 * conforme sua avaliação honesta de cada tecnologia.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "solid",
    icon: BadgeCheck,
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "HTML", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "var(--foreground)" },
    ],
  },
  {
    id: "learning",
    icon: BookOpen,
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", icon: SiExpress, color: "var(--foreground)" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "C", icon: SiC, color: "#a8b9cc" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "Kotlin", icon: SiKotlin, color: "#7f52ff" },
      { name: "Pandas", icon: SiPandas, color: "var(--foreground)" },
      { name: "NumPy", icon: SiNumpy, color: "#4d77cf" },
      { name: "SciPy", icon: SiScipy, color: "#8caae6" },
      { name: "Oracle", icon: GrOracle, color: "#c74634" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#cc2927" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "Linux", icon: SiLinux, color: "#fcc624" },
    ],
  },
];
