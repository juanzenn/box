"use client";

import { Moon, Sun } from "lucide-react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const Icon = theme === "light" ? Sun : Moon;

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(function forceSetMounted() {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="relative">
        <figure className="absolute h-full w-full bg-background top-0 rounded-2xl animate-pulse" />
        <Sun className="text-background" />
      </button>
    );
  }

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Icon />
    </button>
  );
}
