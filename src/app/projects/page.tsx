import ProjectCard, {
  ProjectAnchors,
  ProjectButton,
  ProjectDescription,
  ProjectTitle,
} from "@/components/project-card";
import { parseProject } from "@/lib/project";
import { getAllProjects } from "@/lib/projects.server";
import React from "react";

export default async function ProjectsPage() {
  let projects = await getAllProjects();

  return (
    <main>
      <section className="container">
        <h2 className="mb-8 text-4xl font-bold tracking-tight">My Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.slug}
                footerChildren={<ProjectButton />}
                project={project}
              >
                <ProjectTitle />
                <ProjectDescription />
                <ProjectAnchors />
              </ProjectCard>
            );
          })}
        </div>
      </section>
    </main>
  );
}
