"use client";

import clsx from "clsx";
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
    <header className="py-4 mb-12">
      <nav className="container flex items-center">
        <Link href="/" className="font-black tracking-tight text-lg">
          Juan Alvarez
        </Link>

        <ul className="hidden lg:flex gap-10 ml-6">
          {Object.entries(links).map(([name, href]) => (
            <LinkItem
              key={name}
              name={name}
              href={href}
              isActive={isActive(href)}
            />
          ))}
        </ul>

        <div className="hidden ml-auto lg:flex items-center h-fit">
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
              className="mb-6 flex flex-col gap-2 items-start"
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
          "group font-semibold hover:text-blue-500 transition-colors block",
          isActive && "text-primary",
        )}
        href={href}
      >
        <span className="relative">
          {name}

          {(isActive || isHovered) && (
            <figure className="absolute bottom-0 w-full h-[2px] bg-primary left-0 animate-grow group-hover:bg-blue-500 transition-colors" />
          )}
        </span>
      </Link>
    </li>
  );
}
