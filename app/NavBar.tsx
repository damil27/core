"use client";

import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classNames";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issue" },
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex border-b space-x-6 h-14 items-center p-8 mb-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
(" text-zinc-500 hover:text-zinc-800 transition-colors");
