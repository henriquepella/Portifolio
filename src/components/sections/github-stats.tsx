"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import type { GithubStatsData } from "@/lib/github";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 w-full animate-pulse rounded-lg bg-muted" />
    ),
  },
);

const username = siteConfig.githubUsername;

/** Shared query params so the SVG widgets blend with the site theme. */
const statsTheme =
  "hide_border=true&bg_color=00000000&text_color=94a3b8&title_color=8b5cf6&icon_color=a855f7";

/**
 * External SVG widgets, used only as a fallback when the GitHub API could
 * not be reached at build time.
 */
const widgets = [
  {
    id: "stats",
    src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&rank_icon=github&${statsTheme}`,
  },
  {
    id: "top-langs",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&${statsTheme}`,
  },
] as const;

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
      {children}
    </h3>
  );
}

/** 2×2 grid of profile stats fetched server-side from the GitHub API. */
function StatTiles({ data }: { data: GithubStatsData }) {
  const { dict, locale } = useLocale();
  const labels = dict.github.statLabels;
  const formatter = new Intl.NumberFormat(
    locale === "pt" ? "pt-BR" : "en-US",
    { notation: "compact", maximumFractionDigits: 1 },
  );

  const tiles: { label: string; value: number }[] = [
    { label: labels.repos, value: data.publicRepos },
    { label: labels.stars, value: data.stars },
    { label: labels.followers, value: data.followers },
  ];
  if (data.commits !== null) {
    tiles.push({ label: labels.commits, value: data.commits });
  } else if (data.pullRequests !== null) {
    tiles.push({ label: labels.pullRequests, value: data.pullRequests });
  }

  // Métricas zeradas ficam ocultas — nada de expor "0 seguidores".
  const visibleTiles = tiles.filter((tile) => tile.value > 0);
  if (visibleTiles.length === 0) return null;

  return (
    <div className="w-full">
      <CardTitle>{dict.github.stats}</CardTitle>
      <div className="grid grid-cols-2 gap-3">
        {visibleTiles.map((tile) => (
          <div
            key={tile.label}
            className="rounded-lg border border-border/60 bg-background/40 p-3"
          >
            <p className="text-2xl font-semibold text-foreground">
              {formatter.format(tile.value)}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {tile.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Stacked language bar + legend, GitHub-repo style, from real API data. */
function TopLanguages({ data }: { data: GithubStatsData }) {
  const { dict, locale } = useLocale();
  const percentLocale = locale === "pt" ? "pt-BR" : "en-US";

  return (
    <div className="w-full">
      <CardTitle>{dict.github.topLanguages}</CardTitle>
      <div
        role="img"
        aria-label={data.languages
          .map((lang) => `${lang.name} ${lang.percent}%`)
          .join(", ")}
        className="flex h-3 w-full gap-0.5 overflow-hidden rounded-full"
      >
        {data.languages.map((lang) => (
          <span
            key={lang.name}
            title={`${lang.name} — ${lang.percent}%`}
            className="h-full min-w-1"
            style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
          />
        ))}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
        {data.languages.map((lang) => (
          <li key={lang.name} className="flex items-center gap-2 text-xs">
            <span
              aria-hidden
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: lang.color }}
            />
            <span className="truncate">{lang.name}</span>
            <span className="ml-auto text-muted-foreground">
              {lang.percent.toLocaleString(percentLocale)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The public github-readme-stats instance is rate-limited and occasionally
 * returns 503; when that happens we show a quiet link instead of a broken
 * image.
 */
function StatsWidget({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-24 w-full items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        {title}
        <ExternalLink className="size-3.5" />
      </a>
    );
  }

  return (
    /* External SVG widgets — next/image adds nothing here. */
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-auto w-full max-w-sm"
    />
  );
}

export function GithubStats({ data }: { data: GithubStatsData | null }) {
  const { dict } = useLocale();
  const { resolvedTheme } = useTheme();

  const widgetTitles: Record<(typeof widgets)[number]["id"], string> = {
    stats: dict.github.stats,
    "top-langs": dict.github.topLanguages,
  };

  const cardClass =
    "rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/30";

  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.github.eyebrow}
          heading={dict.github.heading}
          description={dict.github.description}
        />

        <Reveal className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8">
          <h3 className="mb-5 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            {dict.github.contributions}
          </h3>
          <div className="flex justify-center overflow-x-auto text-muted-foreground [&_text]:fill-current">
            <GitHubCalendar
              username={username}
              colorScheme={resolvedTheme === "light" ? "light" : "dark"}
              blockSize={11}
              blockMargin={3.5}
              fontSize={12}
              theme={{
                light: ["#e4e4e7", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6"],
                dark: ["#1c1c22", "#3b2d63", "#5b3fa3", "#7c4fe0", "#a855f7"],
              }}
            />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {data ? (
            <Reveal className={cardClass}>
              <StatTiles data={data} />
            </Reveal>
          ) : (
            <Reveal className={`flex items-center justify-center ${cardClass}`}>
              <StatsWidget src={widgets[0].src} title={widgetTitles.stats} />
            </Reveal>
          )}
          {data && data.languages.length > 0 ? (
            <Reveal delay={0.08} className={cardClass}>
              <TopLanguages data={data} />
            </Reveal>
          ) : (
            <Reveal
              delay={0.08}
              className={`flex items-center justify-center ${cardClass}`}
            >
              <StatsWidget
                src={widgets[1].src}
                title={widgetTitles["top-langs"]}
              />
            </Reveal>
          )}
        </div>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <Button asChild variant="outline" className="gap-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.github.viewProfile}
              <ExternalLink data-icon="inline-end" className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
