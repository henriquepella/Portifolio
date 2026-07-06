import { projects } from "./projects";

/**
 * Números exibidos na seção "Sobre".
 * Projetos e tecnologias são derivados de src/content/projects.ts, então se
 * mantêm corretos sozinho. Um valor null oculta o card até ser preenchido.
 */
export interface AboutStat {
  /** Chave do rótulo em translations (about.stats). */
  id: "projects" | "years" | "commits" | "technologies";
  value: number | null;
  /** Prefixo exibido antes do número (ex.: "+"). */
  prefix?: string;
}

/** Tecnologias distintas usadas ao longo dos projetos. */
const technologyCount = new Set(projects.flatMap((p) => p.technologies)).size;

export const aboutStats: AboutStat[] = [
  { id: "projects", value: projects.length },
  { id: "years", value: 2, prefix: "+" },
  { id: "technologies", value: technologyCount, prefix: "+" },
];
