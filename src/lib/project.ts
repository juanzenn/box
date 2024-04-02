import { FrontmatterType } from "@/types/mdx.type";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export function parseProject(
  project: MDXRemoteSerializeResult<Record<string, unknown>, FrontmatterType>,
) {
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    content: project.compiledSource,
    sourceUrl: project.frontmatter.github,
    liveUrl: project.frontmatter.live,
    slug: project.frontmatter.slug,
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
