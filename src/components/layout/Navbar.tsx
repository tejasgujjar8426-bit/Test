"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none"
    >
      <Link href="/" className="text-2xl font-black pointer-events-auto text-white">
        PORTFOLIO<span className="text-ink-red">.</span>
      </Link>

      <div className="flex gap-8 pointer-events-auto">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -2 }}
            className="relative group"
          >
            <Link
              href={item.href}
              className="text-sm font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-px bg-ink-red transition-all group-hover:w-full"
              layoutId="nav-underline"
            />
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};
