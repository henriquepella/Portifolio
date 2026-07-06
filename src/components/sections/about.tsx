"use client";

import { GraduationCap, Terminal } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutStats } from "@/content/stats";
import { useCountUp } from "@/hooks/use-count-up";

interface Stat {
  value: number;
  prefix?: string;
  label: string;
}

function StatCard({ value, prefix = "", label }: Stat) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/40"
    >
      <p className="text-3xl font-bold tracking-tight text-gradient-purple sm:text-4xl">
        {prefix}
        {current}
      </p>
      <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  );
}

/** Editor-like syntax colors for the code identity card. */
const syntax = {
  keyword: "text-primary-hover",
  key: "text-sky-600 dark:text-sky-400",
  string: "text-success",
  boolean: "text-amber-600 dark:text-amber-400",
  punct: "text-muted-foreground",
} as const;

interface CodeToken {
  text: string;
  color?: keyof typeof syntax;
}

const codeLines: CodeToken[][] = [
  [
    { text: "const", color: "keyword" },
    { text: " henrique " },
    { text: "= {", color: "punct" },
  ],
  [
    { text: "  " },
    { text: "education", color: "key" },
    { text: ": ", color: "punct" },
    { text: '"PUC Campinas"', color: "string" },
    { text: ",", color: "punct" },
  ],
  [
    { text: "  " },
    { text: "degree", color: "key" },
    { text: ": ", color: "punct" },
    { text: '"Software Engineering"', color: "string" },
    { text: ",", color: "punct" },
  ],
  [
    { text: "  " },
    { text: "period", color: "key" },
    { text: ": ", color: "punct" },
    { text: '"2024 → 2027"', color: "string" },
    { text: ",", color: "punct" },
  ],
  [
    { text: "  " },
    { text: "exchange", color: "key" },
    { text: ": ", color: "punct" },
    { text: '"USA"', color: "string" },
    { text: ",", color: "punct" },
  ],
  [
    { text: "  " },
    { text: "focus", color: "key" },
    { text: ": ", color: "punct" },
    { text: "[", color: "punct" },
    { text: '"dev"', color: "string" },
    { text: ", ", color: "punct" },
    { text: '"QA"', color: "string" },
    { text: ", ", color: "punct" },
    { text: '"databases"', color: "string" },
    { text: "],", color: "punct" },
  ],
  [
    { text: "  " },
    { text: "learning", color: "key" },
    { text: ": ", color: "punct" },
    { text: "true", color: "boolean" },
    { text: ",", color: "punct" },
  ],
  [{ text: "};", color: "punct" }],
];

/** Decorative, truthful "code identity card" shown next to the bio. */
function CodeCard() {
  return (
    <div className="glass-card overflow-hidden rounded-xl border border-border shadow-2xl shadow-primary/5">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Terminal className="size-3.5" />
          henrique.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          {codeLines.map((tokens, lineIndex) => (
            <span key={lineIndex} className="block">
              <span
                aria-hidden
                className="mr-4 inline-block w-4 text-right text-muted-foreground/40 select-none"
              >
                {lineIndex + 1}
              </span>
              {tokens.map((token, tokenIndex) => (
                <span
                  key={tokenIndex}
                  className={token.color ? syntax[token.color] : undefined}
                >
                  {token.text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function About() {
  const { dict } = useLocale();

  // Valores editáveis em src/content/stats.ts; null fica oculto até preencher.
  const stats: Stat[] = aboutStats
    .filter((stat) => stat.value !== null)
    .map((stat) => ({
      value: stat.value as number,
      prefix: stat.prefix,
      label: dict.about.stats[stat.id],
    }));

  return (
    <section id="sobre" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          heading={dict.about.heading}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="space-y-5">
            {dict.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/5 p-4">
              <GraduationCap className="size-8 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">PUC Campinas</p>
                <p className="text-xs text-muted-foreground">
                  {dict.timeline.ongoing} · 2024 – 2027
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <CodeCard />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
