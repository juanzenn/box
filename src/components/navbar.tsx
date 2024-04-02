"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ThemeSwitcher } from "./theme";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const links = {
  Home: "/",
  Projects: "/projects",
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function isActive(href: string) {
    const includesPath = pathname.includes(href) && href !== "/";
    const isHome = href === "/" && pathname === "/";

    if (isHome) return true;
    return includesPath;
  }

  return (
    <header className="mb-12 py-4">
      <nav className="container flex items-center">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight hover:text-primary hover:underline"
        >
          Juan Alvarez
        </Link>

        <ul className="ml-10 hidden gap-10 lg:flex">
          {Object.entries(links).map(([name, href]) => (
            <LinkItem
              key={name}
              name={name}
              href={href}
              isActive={isActive(href)}
            />
          ))}
        </ul>

        <div className="ml-auto hidden h-fit items-center lg:flex">
          <ThemeSwitcher />
        </div>

        <Popover open={isMenuOpen} onOpenChange={() => setMenuOpen((p) => !p)}>
          <PopoverTrigger asChild>
            <button className="ml-auto lg:hidden">
              <Menu size="24" />
            </button>
          </PopoverTrigger>

          <PopoverContent align="end">
            <ul
              onClickCapture={() => setMenuOpen((p) => !p)}
              className="mb-6 flex flex-col items-start gap-2"
            >
              {Object.entries(links).map(([name, href]) => (
                <LinkItem
                  key={name}
                  name={name}
                  href={href}
                  isActive={isActive(href)}
                />
              ))}
            </ul>

            <ThemeSwitcher />
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
}

function LinkItem({
  name,
  href,
  isActive,
}: {
  name: string;
  href: string;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li key={name} className="w-full">
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={clsx(
          "hover:text-primary/80 group block font-semibold transition-colors",
          isActive && "text-primary",
        )}
        href={href}
      >
        <span className="relative">
          {name}

          <AnimatePresence>
            {(isActive || isHovered) && (
              <motion.figure
                className="group-hover:bg-primary/80 absolute bottom-0 left-0 h-[2px] w-full bg-primary transition-colors"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
              />
            )}
          </AnimatePresence>
        </span>
      </Link>
    </li>
  );
}
