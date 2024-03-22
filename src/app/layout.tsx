import { ThemeProvider } from "@/components/theme";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies, headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Fullstack Software Engineer - Juan Alvarez",
  description: "Hi, I love the web and software. I'd love to work with you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentSavedTheme = cookies().get("theme")?.value as
    | "dark"
    | "light"
    | undefined;

  console.log(
    headers().forEach((value) => {
      console.log(value);
    })
  );
  return (
    <html lang="en">
      <body className={clsx(inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
