import ProjectCard, {
  ProjectAnchors,
  ProjectButton,
  ProjectDescription,
  ProjectTitle,
} from "@/components/project-card";
import { PROJECTS_PATH } from "@/constants";
import { parseProject } from "@/lib/project";
import { readFileSync, readdirSync } from "fs";
import grayMatter from "gray-matter";
import React from "react";

type Props = {};

export default function ProjectsPage({}: Props) {
  const projects = readdirSync(PROJECTS_PATH)
    .map((filename) => {
      const source = readFileSync(`${PROJECTS_PATH}/${filename}`, "utf8");
      const blogData = grayMatter(source);

      return blogData;
    })
    .sort(
      (a, b) =>
        new Date(a.data.date).getTime() - new Date(b.data.date).getTime(),
    );

  return (
    <main>
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
