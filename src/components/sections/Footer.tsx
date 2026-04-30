"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "Github", icon: Github, href: "https://github.com/", color: "hover:text-white" },
  { name: "Discord", icon: (props: any) => (
    <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 0-1.872-.892.077.077 0 0 1-.041-.128c.156-.117.31-.242.459-.369a.075.075 0 0 1 .077-.01c3.928 1.799 8.18 1.799 12.068 0a.075.075 0 0 1 .078.01c.15.127.303.252.459.369a.077.077 0 0 1-.041.128 13.026 13.026 0 0 0-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  ), href: "https://discord.com/", color: "hover:text-[#5865F2]" },
  { name: "Email", icon: Mail, href: "mailto:hello@lynx.dev", color: "hover:text-purple-500" },
];

export const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-background border-t border-black/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-glow opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-black leading-none uppercase">
                GET IN <span className="highlighter px-2">TOUCH</span>
              </h2>
              <p className="text-black/40 text-xl max-w-md">
                Have a project in mind? Let&apos;s create something exceptional together.
              </p>
            </div>
            
            <motion.a
              href="mailto:hello@lynx.dev"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                <Mail size={32} />
              </div>
              <div className="space-y-1">
                <p className="text-black/40 text-sm font-mono uppercase tracking-widest">Email me at</p>
                <p className="text-black text-2xl font-bold">hello@lynx.dev</p>
              </div>
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-12 md:justify-items-end">
            <div className="space-y-6">
              <h3 className="text-black/20 font-mono text-sm uppercase tracking-widest">Navigation</h3>
              <ul className="space-y-4">
                {["Home", "Projects", "About", "Journey"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-black/60 hover:text-purple-600 font-bold transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-black/20 font-mono text-sm uppercase tracking-widest">Socials</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center text-black/40 transition-all ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-black/20 font-mono text-xs uppercase tracking-[0.3em]">
            © 2026 LYNX. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-black/40 text-[10px] font-mono uppercase tracking-widest">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

