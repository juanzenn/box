import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
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
        </div>
      </section>

      <section className="container">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">My Work</h2>

        <div className="grid grid-cols-3">
          <article
            className={cn(
              "bg-card border-primary/20 flex flex-col gap-4 rounded-md border p-4 transition-shadow duration-300",
              "hover:shadow-primary/10 hover:shadow-md",
            )}
          >
            <h3 className="text-base font-bold">Project 1</h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque facilisis sapien. Aenean vehicula ante
              eleifend justo laoreet feugiat. Maecenas id mauris nec dui semper
              rhoncus. Donec eget tortor non tellus feugiat lacinia malesuada in
              massa. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra
            </p>

            <footer className="mt-auto flex flex-col gap-2">
              <a
                href="#"
                className="hover:text-primary/90 mb-6 flex gap-2 text-sm text-primary hover:underline"
              >
                Source Code <SquareArrowOutUpRight size={16} />
              </a>

              <Button asChild>
                <Link
                  href="#"
                  className="block rounded-lg bg-primary p-2 text-center font-semibold"
                >
                  Case Study
                </Link>
              </Button>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
