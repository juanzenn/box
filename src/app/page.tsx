import ProjectCard, {
  ProjectAnchors,
  ProjectButton,
  ProjectDescription,
  ProjectTitle,
} from "@/components/project-card";
import SocialmediaIcons from "@/components/socialmedia";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getAllProjects } from "@/lib/projects.server";
import { Crown } from "lucide-react";

export default async function Home() {
  const projects = await getAllProjects();

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
              key={project.slug}
              footerChildren={<ProjectButton />}
              project={project}
            >
              {project.slug === "heritage-keeper" && (
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <span className="absolute -right-6 -top-4 flex rotate-2 items-center gap-1 rounded-full bg-amber-600 px-2 py-1 text-sm font-medium text-amber-200">
                        <Crown size={16} /> 1st place
                      </span>
                    </TooltipTrigger>
                    <TooltipContent
                      sideOffset={40}
                      align="start"
                      style={{
                        width: "var(--radix-tooltip-trigger-width)",
                      }}
                    >
                      <p className="text-sm">
                        Heritage Keeper won 1st place at the{" "}
                        <strong>2024 Codicon</strong> organized by{" "}
                        <strong>Lexpin</strong>.{" "}
                        <a
                          target="_blank"
                          href="https://lexpin.online/#/codicon/projects"
                          className="underline hover:text-primary"
                        >
                          Click here for more details.
                        </a>
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

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
