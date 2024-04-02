import { PROJECTS_PATH } from "@/constants";
import fs from "fs";
import grayMatter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  try {
    const source = fs.readFileSync(PROJECTS_PATH + slug + ".mdx", "utf8");
    const blogData = grayMatter(source);

    return (
      <main className="container relative py-6">
        <header></header>

        <section className="grid grid-cols-3 gap-16">
          <div className="prose col-span-3 max-w-none dark:prose-invert md:col-span-2">
            <MDXRemote source={blogData.content} />
          </div>
          <aside className="sticky top-4 hidden h-fit md:block">Hola!</aside>
        </section>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
