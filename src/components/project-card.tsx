"use client";

import { Project } from "@/lib/project";
import { cn } from "@/lib/utils";
import { Radio, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import { Button } from "./ui/button";

const ProjectCardContext = React.createContext({} as Project);

function ProjectCardProvider({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}) {
  return (
    <ProjectCardContext.Provider value={project}>
      {children}
    </ProjectCardContext.Provider>
  );
}

function useProjectCard() {
  return React.useContext<Project>(ProjectCardContext);
}

type Props = {
  children: React.ReactNode;
  project: Project;
  footerChildren?: React.ReactNode;
};

export default function ProjectCard({
  children,
  footerChildren,
  project,
}: Props) {
  return (
    <ProjectCardProvider project={project}>
      <article
        className={cn(
          "flex flex-col gap-4 rounded-md border border-primary/20 bg-card p-4 transition-shadow duration-300",
          "hover:shadow-md hover:shadow-primary/10",
        )}
      >
        {children}

        <footer className="mt-auto flex flex-col gap-2">
          {footerChildren}
        </footer>
      </article>
    </ProjectCardProvider>
  );
}

function ProjectTitle() {
  const { title } = useProjectCard();

  return <h3 className="text-xl font-bold text-primary">{title}</h3>;
}

function ProjectDescription() {
  const { description } = useProjectCard();

  return (
    <div className="line-clamp-[10] leading-relaxed">
      <Markdown
        components={{
          strong: (props) => (
            <strong className="text-primary">{props.children}</strong>
          ),
        }}
      >
        {description}
      </Markdown>
    </div>
  );
}

function ProjectAnchors() {
  const { sourceUrl, liveUrl } = useProjectCard();

  return (
    <div className="flex gap-4">
      <a
        href={sourceUrl}
        target="_blank"
        className="mb-6 flex gap-2 text-sm text-primary hover:text-primary/90 hover:underline"
      >
        Source Code <SquareArrowOutUpRight size={16} />
      </a>

      <a
        href={liveUrl}
        target="_blank"
        className="mb-6 flex gap-2 text-sm text-primary hover:text-primary/90 hover:underline"
      >
        Live <Radio size={16} />
      </a>
    </div>
  );
}

function ProjectButton() {
  const { slug } = useProjectCard();

  return (
    <Button asChild>
      <Link
        href={`/projects/${slug}`}
        className="block rounded-lg bg-primary p-2 text-center font-semibold"
      >
        Case Study
      </Link>
    </Button>
  );
}

export { ProjectAnchors, ProjectButton, ProjectDescription, ProjectTitle };
