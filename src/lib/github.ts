import { siteConfig } from "@/content/site";

export interface GithubLanguage {
  name: string;
  /** Share of total bytes across non-fork repos, 0–100 with one decimal. */
  percent: number;
  color: string;
}

export interface GithubStatsData {
  publicRepos: number;
  followers: number;
  stars: number;
  commits: number | null;
  pullRequests: number | null;
  languages: GithubLanguage[];
}

interface GithubUser {
  public_repos: number;
  followers: number;
}

interface GithubRepo {
  name: string;
  fork: boolean;
  stargazers_count: number;
}

/** Official GitHub (linguist) colors for the languages likely to show up. */
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS: "#663399",
  HTML: "#e34c26",
  Java: "#b07219",
  Python: "#3572a5",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  PHP: "#4f5d95",
  Shell: "#89e051",
  Go: "#00add8",
  Rust: "#dea584",
  Kotlin: "#a97bff",
  Swift: "#f05138",
  Dart: "#00b4ab",
  Ruby: "#701516",
  Vue: "#41b883",
  SCSS: "#c6538c",
  Dockerfile: "#384d54",
  "Jupyter Notebook": "#da5b0b",
};

const fallbackLanguageColor = "#94a3b8";

async function ghFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        // Optional: raises the API rate limit. Set in Vercel/`.env.local`.
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/**
 * Aggregates profile stats and language usage straight from the GitHub API,
 * cached for an hour. Returns null when the API is unreachable so the UI can
 * fall back to plain profile links.
 */
export async function getGithubStats(): Promise<GithubStatsData | null> {
  const username = siteConfig.githubUsername;

  const [user, repos] = await Promise.all([
    ghFetch<GithubUser>(`/users/${username}`),
    ghFetch<GithubRepo[]>(`/users/${username}/repos?per_page=100&type=owner`),
  ]);
  if (!user) return null;

  const ownRepos = (repos ?? []).filter((repo) => !repo.fork);
  const stars = ownRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  // Query languages for every owned repo. We intentionally do NOT skip repos
  // by `size`, because GitHub reports size 0 for a just-pushed repo until it
  // recomputes it (minutes to hours later) — which would hide brand-new repos.
  // Empty repos simply return {}, so the extra calls are cheap and harmless.
  const languageTotals = new Map<string, number>();
  const perRepoLanguages = await Promise.all(
    ownRepos.map((repo) =>
      ghFetch<Record<string, number>>(
        `/repos/${username}/${repo.name}/languages`,
      ),
    ),
  );
  for (const repoLanguages of perRepoLanguages) {
    for (const [language, bytes] of Object.entries(repoLanguages ?? {})) {
      languageTotals.set(language, (languageTotals.get(language) ?? 0) + bytes);
    }
  }

  const totalBytes = [...languageTotals.values()].reduce((a, b) => a + b, 0);
  const languages: GithubLanguage[] =
    totalBytes === 0
      ? []
      : [...languageTotals.entries()]
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, bytes]) => ({
            name,
            percent: Math.round((bytes / totalBytes) * 1000) / 10,
            color: languageColors[name] ?? fallbackLanguageColor,
          }));

  const [commitSearch, prSearch] = await Promise.all([
    ghFetch<{ total_count: number }>(
      `/search/commits?q=${encodeURIComponent(`author:${username}`)}`,
    ),
    ghFetch<{ total_count: number }>(
      `/search/issues?q=${encodeURIComponent(`author:${username} type:pr`)}`,
    ),
  ]);

  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    stars,
    commits: commitSearch?.total_count ?? null,
    pullRequests: prSearch?.total_count ?? null,
    languages,
  };
}
