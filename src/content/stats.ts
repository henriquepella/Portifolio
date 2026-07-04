/**
 * Números exibidos na seção "Sobre".
 * Edite os valores aqui — um valor null oculta o card até ser preenchido.
 */
export interface AboutStat {
  /** Chave do rótulo em translations (about.stats). */
  id: "projects" | "years" | "commits" | "technologies";
  value: number | null;
  /** Prefixo exibido antes do número (ex.: "+"). */
  prefix?: string;
}

export const aboutStats: AboutStat[] = [
  { id: "projects", value: 6 },
  { id: "years", value: 2, prefix: "+" },
  { id: "commits", value: null }, // TODO: preencher com valor real
  { id: "technologies", value: null }, // TODO: preencher com valor real
];
