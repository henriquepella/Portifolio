import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { GithubStats } from "@/components/sections/github-stats";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { getGithubStats } from "@/lib/github";

export default async function Home() {
  const githubStats = await getGithubStats();

  return (
    <>
      <Hero avatar={<ProfileAvatar size={148} />} />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <GithubStats data={githubStats} />
      <Services />
      <Contact />
    </>
  );
}
