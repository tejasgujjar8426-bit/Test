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
  { name: "React", icon: Code2, color: "text-blue-500" },
  { name: "Next.js", icon: Globe, color: "text-black" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-600" },
  { name: "Tailwind", icon: Wind, color: "text-cyan-500" },
  { name: "Framer", icon: Zap, color: "text-purple-500" },
  { name: "Node.js", icon: Cpu, color: "text-green-600" },
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
                    <skill.icon size={28} />
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
