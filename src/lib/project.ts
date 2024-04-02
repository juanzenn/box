import { GrayMatterFile } from "gray-matter";

export function parseProject(project: GrayMatterFile<string>) {
  return {
    title: project.data.title,
    description: project.data.description,
    content: project.content,
    sourceUrl: project.data.github,
    liveUrl: project.data.live,
    slug: project.data.slug,
  };
}

export type Project = {
  title: string;
  slug: string;
  description: string;
  content: string;
  sourceUrl: string;
  liveUrl: string;
};
