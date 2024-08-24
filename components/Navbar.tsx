"use client";
import React from "react";
import { FloatingNav } from "./ui/Floating-navbar";
import FirstPage from '../components/FirstPage';

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "TechStack",
      link: "/techstack",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
        name: "Work Experience",
        link: "/experience",
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Contact",
        link: "/contact",
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <FirstPage />
    </div>
  );
}


export default FloatingNavDemo
