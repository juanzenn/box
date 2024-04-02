"use client";

import { cn } from "@/lib/utils";
import {
  SiGithub,
  SiGithubHex,
  SiGmail,
  SiGmailHex,
  SiLinkedin,
  SiLinkedinHex,
  SiX,
  SiXHex,
} from "@icons-pack/react-simple-icons";
import React from "react";

const Links = [
  {
    id: Math.random(),
    href: "https://github.com/juanzenn",
    Icon: SiGithub,
    name: "github",
  },
  {
    id: Math.random(),
    href: "https://linkedin.com/in/alvarezjads",
    Icon: SiLinkedin,
    name: "linkedin",
  },
  {
    id: Math.random(),
    href: "mailto:juanandres140299@gmail.com",
    Icon: SiGmail,
    name: "gmail",
  },
  {
    id: Math.random(),
    href: "https://x.com/juanzenweb",
    Icon: SiX,
    name: "x",
  },
];

const getHoverColor = (name: string) => {
  switch (name) {
    case "github":
      return "hover:text-primary";
    case "linkedin":
      return "hover:text-[#0A66C2]";
    case "gmail":
      return "hover:text-[#D14836]";
    case "x":
      return "hover:text-primary";
    default:
      return "";
  }
};

export default function SocialmediaIcons() {
  return (
    <div className="mt-6 flex justify-around">
      {Links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          className={cn(
            getHoverColor(link.name),
            "text-foreground transition-colors",
          )}
        >
          <link.Icon
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        </a>
      ))}
    </div>
  );
}
