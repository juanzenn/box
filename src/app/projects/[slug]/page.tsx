import fs from "fs";
import grayMatter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const baseRoute = "public/content/";

  try {
    const source = fs.readFileSync(baseRoute + slug + ".mdx", "utf8");
    const blogData = grayMatter(source);

    return (
      <main className="py-14 relative">
        <header></header>

        <section className="grid grid-cols-3 gap-16">
          <div className="md:col-span-2 col-span-3 prose dark:prose-invert max-w-none">
            <MDXRemote source={blogData.content} />;
          </div>
          <aside className="hidden md:block sticky top-4 h-fit">Hola!</aside>
        </section>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
