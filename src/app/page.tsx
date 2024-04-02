import SocialmediaIcons from "@/components/socialmedia";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { readFileSync, readdirSync } from "fs";
import grayMatter from "gray-matter";
import { Radio, SquareArrowOutUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

const PROJECTS_BONDARIES = [0, 3];
const PROJECTS_PATH = "public/content";

export default function Home() {
  const projects = readdirSync(PROJECTS_PATH)
    .map((filename) => {
      const source = readFileSync(`${PROJECTS_PATH}/${filename}`, "utf8");
      const blogData = grayMatter(source);

      return blogData;
    })
    .slice(...PROJECTS_BONDARIES);

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
            <article
              key={project.data.slug}
              className={cn(
                "bg-card border-primary/20 flex flex-col gap-4 rounded-md border p-4 transition-shadow duration-300",
                "hover:shadow-primary/10 hover:shadow-md",
              )}
            >
              <h3 className="text-xl font-bold text-primary">
                {project.data.slug.replace(/-/g, " ").toUpperCase()}
              </h3>
              <div className="line-clamp-[10] leading-relaxed">
                <MDXRemote
                  source={project.data.description}
                  components={{
                    strong: (props) => (
                      <strong className="text-primary">{props.children}</strong>
                    ),
                  }}
                />
              </div>

              <footer className="mt-auto flex flex-col gap-2">
                <div className="flex gap-4">
                  <a
                    href={project.data.source}
                    target="_blank"
                    className="hover:text-primary/90 mb-6 flex gap-2 text-sm text-primary hover:underline"
                  >
                    Source Code <SquareArrowOutUpRight size={16} />
                  </a>

                  <a
                    href={project.data.live}
                    target="_blank"
                    className="hover:text-primary/90 mb-6 flex gap-2 text-sm text-primary hover:underline"
                  >
                    Live <Radio size={16} />
                  </a>
                </div>

                <Button asChild>
                  <Link
                    href={`/projects/${project.data.slug}`}
                    className="block rounded-lg bg-primary p-2 text-center font-semibold"
                  >
                    Case Study
                  </Link>
                </Button>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
