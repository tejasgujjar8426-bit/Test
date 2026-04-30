"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Briefcase, 
  GraduationCap,
  Code2, 
  Globe, 
  Terminal, 
  Wind, 
  Zap, 
  Cpu,
  Layers,
  Palette,
  Database,
  Smartphone
} from "lucide-react";

const events = [
  {
    date: "2024 - Present",
    title: "Senior Dev",
    company: "Freelance",
    icon: Rocket,
    color: "bg-purple-500",
  },
  {
    date: "2022 - 2023",
    title: "UI Designer",
    company: "Agency",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    date: "2020 - 2022",
    title: "CS Degree",
    company: "University",
    icon: GraduationCap,
    color: "bg-pink-500",
  },
];

const skills = [
  { name: "React", icon: () => (
    <svg viewBox="0 0 128 128" width="28" height="28"><path fill="#61DAFB" d="M112.5 64c0-3.3-1.6-6.4-4.3-8.3-5.2-3.7-12.7-4.1-20.3-1.2l-3.3 1.2c-5.8-9.4-12.4-17.7-19.5-24.5l2.4-2.5c5.3-5.4 8.7-11.2 9.5-16.1.8-4.9-1-9.1-5-11.7-4-2.6-9.1-3-14.1-1.1-12 4.4-22.5 18.2-27.9 36.3l-.6 2.1c-10.4 1.7-20.2 4.7-28.9 8.9l-2.4 1.2C7.3 50.8 4 54.4 3 58.4c-1 3.9.5 7.9 4 10.7 5.2 3.7 12.7 4.1 20.3 1.2l3.3-1.2c5.8 9.4 12.4 17.7 19.5 24.5l-2.4 2.5c-5.3 5.4-8.7 11.2-9.5 16.1-.8 4.9 1 9.1 5 11.7 4 2.6 9.1 3 14.1 1.1 12-4.4 22.5-18.2 27.9-36.3l.6-2.1c10.4-1.7 20.2-4.7 28.9-8.9l2.4-1.2c5.3-2.6 8.6-6.2 9.6-10.2.1-.2.1-.4.1-.7zm-48.5 8c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
  ), color: "text-blue-400" },
  { name: "Next.js", icon: () => (
    <svg viewBox="0 0 128 128" width="28" height="28"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-8.2V36.1h8.2l46 59.7c9.9-8.9 16.1-21.7 16.1-35.8 0-28.7-28.7-64-64-64zm30.3 36.1h8.2v18.7l-8.2-10.7V36.1z"/></svg>
  ), color: "text-black" },
  { name: "TypeScript", icon: () => (
    <svg viewBox="0 0 128 128" width="28" height="28"><path fill="#3178C6" d="M1.5 1.5h125v125H1.5z"/><path fill="#FFF" d="M113.8 99.8c-1.3-.9-3.3-1.7-5.7-2.2-2.3-.6-4.5-.9-6.5-.9-4.8 0-8.5.9-11 2.8-2.5 1.9-3.8 4.6-3.8 8.1 0 2.4.6 4.4 1.7 6s2.7 2.8 4.7 3.7c2 .9 4.3 1.6 7 2.2 2.7.6 5.5 1.1 8.5 1.7 3.4.6 6.4 1.5 9.1 2.7 2.6 1.2 4.7 2.9 6.2 5.1s2.2 5.1 2.2 8.7c0 4.8-1.1 8.8-3.4 12.1s-5.6 5.8-10.1 7.5c-4.5 1.7-9.9 2.5-16.1 2.5-5.3 0-10.1-.7-14.4-2s-8.1-3.3-11.2-5.9l8.6-14.1c1.8 1.5 4.3 2.8 7.6 3.9 3.2 1.1 6.5 1.6 9.8 1.6 4.7 0 8.4-.9 11.1-2.6s4.1-4.4 4.1-8c0-2.4-.5-4.4-1.6-6s-2.6-2.8-4.5-3.7-4.2-1.6-6.8-2.2-5.4-1.1-8.3-1.7c-3.5-.6-6.6-1.5-9.3-2.7s-4.9-3-6.5-5.2-2.4-5.2-2.4-9.1c0-4.6 1.1-8.5 3.3-11.8s5.4-5.7 9.5-7.4c4.1-1.7 9.1-2.5 15-2.5 4.8 0 9.2.6 13.1 1.7s7.1 2.7 9.4 4.7l-7.7 13.5zM22.9 44.5h69.1v15.2H61.2v97.4H43.9V59.7H22.9V44.5z"/></svg>
  ), color: "text-blue-600" },
  { name: "Tailwind", icon: () => (
    <svg viewBox="0 0 128 128" width="28" height="28"><path fill="#38B2AC" d="M64 32c-12.8 0-19.2 6.4-19.2 19.2 4.8-4.8 9.6-6.4 14.4-4.8 2.7.9 4.7 2.9 6.8 5.1 3.5 3.5 7.6 7.7 17.2 7.7 12.8 0 19.2-6.4 19.2-19.2-4.8 4.8-9.6 6.4-14.4 4.8-2.7-.9-4.7-2.9-6.8-5.1-3.5-3.5-7.6-7.7-17.2-7.7zM32 64c-12.8 0-19.2 6.4-19.2 19.2 4.8-4.8 9.6-6.4 14.4-4.8 2.7.9 4.7 2.9 6.8 5.1 3.5 3.5 7.6 7.7 17.2 7.7 12.8 0 19.2-6.4 19.2-19.2-4.8 4.8-9.6 6.4-14.4 4.8-2.7-.9-4.7-2.9-6.8-5.1-3.5-3.5-7.6-7.7-17.2-7.7z"/></svg>
  ), color: "text-cyan-500" },
  { name: "Framer", icon: () => (
    <svg viewBox="0 0 128 128" width="28" height="28"><path fill="#0055FF" d="M0 0h128v128H0z"/><path fill="#FFF" d="M32 32h64v32L64 96l-32-32V32zm0 64h32v32L32 96z"/></svg>
  ), color: "text-purple-500" },
  { name: "Node.js", icon: () => (
    <svg viewBox="0 0 128 128" width="28" height="28"><path fill="#339933" d="M64.4 3.7c-2 0-3.9 1-4.9 2.7L7.9 35.5c-2 3.4-2 7.7 0 11.1l51.6 89.2c2 3.4 5.9 5.4 9.9 5.4 4 0 7.9-2 9.9-5.4l51.6-89.2c2-3.4 2-7.7 0-11.1L79.3 6.4c-1-1.7-3-2.7-5-2.7h-9.9zm-7.4 35.8h8.9v23.2h10.9V47.5h8.9v35.6h-8.9V70.8H65.9v12.3h-8.9V39.5zm42.1 23.4c0 7.7-4.1 12.2-10.7 12.2-6.6 0-10.7-4.5-10.7-12.2V39.5h8.9v23.4c0 3.1 1.1 4.7 3 4.7s3-1.6 3-4.7V39.5h8.9v23.4l-.4 0z"/></svg>
  ), color: "text-green-600" },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Reduced Timeline */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-mono text-purple-600 mb-2 uppercase tracking-widest">Milestones</h2>
              <h3 className="text-4xl font-black text-black uppercase tracking-tight">The <span className="highlighter px-2">Journey</span></h3>
            </div>

            <div className="relative pl-8 space-y-12">
              <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-black/5" />
              
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[25px] top-1 w-4 h-4 rounded-full ${event.color} border-4 border-white z-10`} />
                  <div className="glass-card p-6 rounded-3xl border border-black/5 hover:border-purple-600/20 transition-all group shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-mono text-purple-600 font-bold uppercase tracking-widest block mb-2">{event.date}</span>
                    <h4 className="text-xl font-black text-black">{event.title}</h4>
                    <p className="text-black/40 text-xs font-mono">{event.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Tech Stack Icons */}
          <div className="space-y-12">
            <div className="text-right lg:text-left">
              <h2 className="text-sm font-mono text-purple-600 mb-2 uppercase tracking-widest">Expertise</h2>
              <h3 className="text-4xl font-black text-black uppercase tracking-tight">Tech <span className="highlighter px-2">Stack</span></h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 rounded-3xl border border-black/5 flex flex-col items-center gap-3 bg-white group hover:shadow-xl hover:border-purple-600/20 transition-all"
                >
                  <div className={`p-4 rounded-2xl bg-black/5 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon />
                  </div>
                  <span className="text-sm font-bold text-black/80">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
