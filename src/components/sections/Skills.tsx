"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="#61DAFB" d="M112.5 64c0-3.3-1.6-6.4-4.3-8.3-5.2-3.7-12.7-4.1-20.3-1.2l-3.3 1.2c-5.8-9.4-12.4-17.7-19.5-24.5l2.4-2.5c5.3-5.4 8.7-11.2 9.5-16.1.8-4.9-1-9.1-5-11.7-4-2.6-9.1-3-14.1-1.1-12 4.4-22.5 18.2-27.9 36.3l-.6 2.1c-10.4 1.7-20.2 4.7-28.9 8.9l-2.4 1.2C7.3 50.8 4 54.4 3 58.4c-1 3.9.5 7.9 4 10.7 5.2 3.7 12.7 4.1 20.3 1.2l3.3-1.2c5.8 9.4 12.4 17.7 19.5 24.5l-2.4 2.5c-5.3 5.4-8.7 11.2-9.5 16.1-.8 4.9 1 9.1 5 11.7 4 2.6 9.1 3 14.1 1.1 12-4.4 22.5-18.2 27.9-36.3l.6-2.1c10.4-1.7 20.2-4.7 28.9-8.9l2.4-1.2c5.3-2.6 8.6-6.2 9.6-10.2.1-.2.1-.4.1-.7zm-48.5 8c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
  ), color: "text-blue-400" },
  { name: "Next.js", level: 90, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-8.2V36.1h8.2l46 59.7c9.9-8.9 16.1-21.7 16.1-35.8 0-28.7-28.7-64-64-64zm30.3 36.1h8.2v18.7l-8.2-10.7V36.1z"/></svg>
  ), color: "text-black" },
  { name: "TypeScript", level: 92, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="#3178C6" d="M1.5 1.5h125v125H1.5z"/><path fill="#FFF" d="M113.8 99.8c-1.3-.9-3.3-1.7-5.7-2.2-2.3-.6-4.5-.9-6.5-.9-4.8 0-8.5.9-11 2.8-2.5 1.9-3.8 4.6-3.8 8.1 0 2.4.6 4.4 1.7 6s2.7 2.8 4.7 3.7c2 .9 4.3 1.6 7 2.2 2.7.6 5.5 1.1 8.5 1.7 3.4.6 6.4 1.5 9.1 2.7 2.6 1.2 4.7 2.9 6.2 5.1s2.2 5.1 2.2 8.7c0 4.8-1.1 8.8-3.4 12.1s-5.6 5.8-10.1 7.5c-4.5 1.7-9.9 2.5-16.1 2.5-5.3 0-10.1-.7-14.4-2s-8.1-3.3-11.2-5.9l8.6-14.1c1.8 1.5 4.3 2.8 7.6 3.9 3.2 1.1 6.5 1.6 9.8 1.6 4.7 0 8.4-.9 11.1-2.6s4.1-4.4 4.1-8c0-2.4-.5-4.4-1.6-6s-2.6-2.8-4.5-3.7-4.2-1.6-6.8-2.2-5.4-1.1-8.3-1.7c-3.5-.6-6.6-1.5-9.3-2.7s-4.9-3-6.5-5.2-2.4-5.2-2.4-9.1c0-4.6 1.1-8.5 3.3-11.8s5.4-5.7 9.5-7.4c4.1-1.7 9.1-2.5 15-2.5 4.8 0 9.2.6 13.1 1.7s7.1 2.7 9.4 4.7l-7.7 13.5zM22.9 44.5h69.1v15.2H61.2v97.4H43.9V59.7H22.9V44.5z"/></svg>
  ), color: "text-blue-600" },
  { name: "Tailwind", level: 98, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="#38B2AC" d="M64 32c-12.8 0-19.2 6.4-19.2 19.2 4.8-4.8 9.6-6.4 14.4-4.8 2.7.9 4.7 2.9 6.8 5.1 3.5 3.5 7.6 7.7 17.2 7.7 12.8 0 19.2-6.4 19.2-19.2-4.8 4.8-9.6 6.4-14.4 4.8-2.7-.9-4.7-2.9-6.8-5.1-3.5-3.5-7.6-7.7-17.2-7.7zM32 64c-12.8 0-19.2 6.4-19.2 19.2 4.8-4.8 9.6-6.4 14.4-4.8 2.7.9 4.7 2.9 6.8 5.1 3.5 3.5 7.6 7.7 17.2 7.7 12.8 0 19.2-6.4 19.2-19.2-4.8 4.8-9.6 6.4-14.4 4.8-2.7-.9-4.7-2.9-6.8-5.1-3.5-3.5-7.6-7.7-17.2-7.7z"/></svg>
  ), color: "text-cyan-500" },
  { name: "Framer Motion", level: 85, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="#0055FF" d="M0 0h128v128H0z"/><path fill="#FFF" d="M32 32h64v32L64 96l-32-32V32zm0 64h32v32L32 96z"/></svg>
  ), color: "text-purple-500" },
  { name: "Node.js", level: 80, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="#339933" d="M64.4 3.7c-2 0-3.9 1-4.9 2.7L7.9 35.5c-2 3.4-2 7.7 0 11.1l51.6 89.2c2 3.4 5.9 5.4 9.9 5.4 4 0 7.9-2 9.9-5.4l51.6-89.2c2-3.4 2-7.7 0-11.1L79.3 6.4c-1-1.7-3-2.7-5-2.7h-9.9zm-7.4 35.8h8.9v23.2h10.9V47.5h8.9v35.6h-8.9V70.8H65.9v12.3h-8.9V39.5zm42.1 23.4c0 7.7-4.1 12.2-10.7 12.2-6.6 0-10.7-4.5-10.7-12.2V39.5h8.9v23.4c0 3.1 1.1 4.7 3 4.7s3-1.6 3-4.7V39.5h8.9v23.4l-.4 0z"/></svg>
  ), color: "text-green-600" },
  { name: "PostgreSQL", level: 75, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="#336791" d="M63 3.4c-28.7 0-51.9 22.3-51.9 49.8 0 12 4.4 23.1 11.7 31.7L18.4 95.2c-2.3 2.7-3.7 6.1-3.7 9.8 0 8.3 6.7 15 15 15 3.7 0 7.1-1.4 9.8-3.7l10.3-10.3c8.6 7.3 19.7 11.7 31.7 11.7 28.7 0 51.9-22.3 51.9-49.8S91.7 3.4 63 3.4zm0 15c20.3 0 36.9 16.6 36.9 36.9s-16.6 36.9-36.9 36.9-36.9-16.6-36.9-36.9S42.7 18.4 63 18.4z"/></svg>
  ), color: "text-blue-800" },
  { name: "Figma", level: 88, icon: () => (
    <svg viewBox="0 0 128 128" width="32" height="32"><path fill="#F24E1E" d="M38 0h26v26H38z"/><path fill="#A259FF" d="M38 26h26v26H38z"/><path fill="#1ABCFE" d="M64 26h26v26H64z"/><path fill="#0ACF83" d="M38 52h26v26a13 13 0 0 1-26 0V52z"/><path fill="#FF7262" d="M64 0h26v26a13 13 0 0 1-13 13 13 13 0 0 1-13-13V0z"/></svg>
  ), color: "text-pink-500" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-glow opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-sm font-mono text-purple-600 mb-2 uppercase tracking-widest text-center">Tech Stack</h2>
        <h3 className="text-5xl font-black text-center mb-24 text-black uppercase tracking-tight">Toolbox<span className="text-purple-600">.</span></h3>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 relative">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05 
              }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="glass-card px-10 py-8 rounded-[2.5rem] border border-black/5 shadow-lg flex flex-col items-center gap-4 min-w-[180px] bg-white transition-all duration-300 hover:shadow-2xl hover:border-purple-600/20">
                <div className={`p-4 rounded-2xl bg-black/5 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon />
                </div>
                
                <div className="text-center">
                  <span className="text-xl font-bold text-black/80 block mb-3">{skill.name}</span>
                  <div className="w-24 h-1.5 bg-black/5 rounded-full overflow-hidden mx-auto">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-purple-600"
                    />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-black/30 uppercase tracking-widest">{skill.level}% Mastery</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


