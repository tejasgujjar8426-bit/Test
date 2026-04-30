"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Coffee } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: User, label: "About", href: "#about" },
];

export const DockNavbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 p-2 rounded-3xl glass-card border border-black/5 shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex items-center gap-1 bg-black/5 p-1 rounded-2xl">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <motion.button
                whileHover={{ 
                  scale: 1.15, 
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  y: -2
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl text-black/60 hover:text-purple-600 transition-all relative group"
              >
                <item.icon size={22} />
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-white/90 text-black shadow-xl border border-black/5 text-[10px] font-bold whitespace-nowrap pointer-events-none backdrop-blur-xl"
                >
                  {item.label}
                </motion.span>
              </motion.button>
            </Link>
          ))}
        </div>

        <div className="w-[1px] h-8 bg-black/10 mx-1" />

        <div className="bg-black/5 p-1 rounded-2xl">
          <Link href="#contact">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(147, 51, 234, 0.15)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-purple-600 font-black text-xs uppercase tracking-widest transition-all"
            >
              <Coffee size={20} className="animate-pulse" />
              <span>Hire Me</span>
            </motion.button>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};



