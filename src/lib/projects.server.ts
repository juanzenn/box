import { PROJECTS_PATH } from "@/constants";
import { FrontmatterType } from "@/types/mdx.type";
import { readFileSync, readdirSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { parseProject } from "./project";

export async function getAllProjects() {
  const files = readdirSync(PROJECTS_PATH);
  let projects = [];

  for (const file of files) {
    const fileContent = readFileSync(`${PROJECTS_PATH}/${file}`, "utf-8");
    const matter = await serialize<Record<string, unknown>, FrontmatterType>(
      fileContent,
      { parseFrontmatter: true },
    );
    projects.push(parseProject(matter));
  }

  return projects;
}
