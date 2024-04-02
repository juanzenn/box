import ProjectCard, {
  ProjectAnchors,
  ProjectButton,
  ProjectDescription,
  ProjectTitle,
} from "@/components/project-card";
import SocialmediaIcons from "@/components/socialmedia";
import { Button } from "@/components/ui/button";
import { PROJECTS_BONDARIES, PROJECTS_PATH } from "@/constants";
import { parseProject } from "@/lib/project";
import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { readFileSync, readdirSync } from "fs";
import grayMatter from "gray-matter";
import { Radio, SquareArrowOutUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default function Home() {
  const projects = readdirSync(PROJECTS_PATH)
    .map((filename) => {
      const source = readFileSync(`${PROJECTS_PATH}/${filename}`, "utf8");
      const blogData = grayMatter(source);

      return blogData;
    })
    .slice(...PROJECTS_BONDARIES)
    .sort(
      (a, b) =>
        new Date(a.data.date).getTime() - new Date(b.data.date).getTime(),
    );

  return (
    <main>
      <section className="container flex">
        <div>
          <h1 className="mb-3 text-[64px] font-extrabold tracking-tight">
            Fullstack Software Engineer
          </h1>

          <p className="max-w-[85%] text-xl leading-relaxed">
            Hey! <strong className="text-primary">I am Juan</strong>, an
            enthusiastic Fullstack Software Engineer. I focus on creating
            responsive and highly interactive web applications. As a self-taught
            developer, I love challenges and technical problems; I always look
            into them as an opportunity to learn.
          </p>
        </div>
        <div className="ml-auto h-[300px] w-[300px] flex-shrink-0">
          <figure
            className="h-full w-full rounded-lg ring-4 ring-primary ring-offset-8 ring-offset-background"
            style={{
              backgroundImage: "url(/profile.jpg)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></figure>

          <SocialmediaIcons />
        </div>
      </section>

      <section className="container">
        <h2 className="mb-8 text-4xl font-bold tracking-tight">My Work</h2>

        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.data.slug}
              footerChildren={<ProjectButton />}
              project={parseProject(project)}
            >
              <ProjectTitle />
              <ProjectDescription />
              <ProjectAnchors />
            </ProjectCard>
          ))}
        </div>
      </section>
    </main>
  );
}
