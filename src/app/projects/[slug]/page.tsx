import { PROJECTS_PATH } from "@/constants";
import fs from "fs";
import grayMatter from "gray-matter";
import { Radio, SquareArrowOutUpRight } from "lucide-react";
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
      <main className="container relative bg-background py-6">
        <section className="grid grid-cols-3 gap-16 pb-12">
          <div className="prose prose-lg col-span-3 max-w-none dark:prose-invert md:col-span-2">
            <MDXRemote source={blogData.content} />
          </div>
          <aside className="sticky top-4 hidden h-fit rounded-lg bg-card p-6 shadow-md shadow-primary/5 md:block">
            <p className="mb-6 text-xl font-bold text-primary">
              {blogData.data.title}
            </p>
            <a
              href={blogData.data.source}
              target="_blank"
              className="mb-4 flex gap-2 text-sm hover:text-primary/90 hover:underline"
            >
              Source Code <SquareArrowOutUpRight size={16} />
            </a>

            <a
              href={blogData.data.live}
              target="_blank"
              className="flex gap-2 text-sm hover:text-primary/90 hover:underline"
            >
              Live <Radio size={16} />
            </a>
          </aside>
        </section>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
