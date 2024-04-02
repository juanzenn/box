import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Fullstack Software Engineer - Juan Alvarez",
  description: "Hi, I love the web and software. I'd love to work with you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
