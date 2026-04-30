"use client";

import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "NEO-DASH",
    category: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=800",
    color: "#e11d48",
  },
  {
    title: "VOID-OS",
    category: "Experimental UI",
    image: "https://images.unsplash.com/photo-1614850523296-e8c1d473c72f?auto=format&fit=crop&q=80&w=800",
    color: "#000000",
  },
  {
    title: "CRAFT-AI",
    category: "Platform Design",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    color: "#e11d48",
  },
  {
    title: "ZENITH",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    color: "#000000",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-glow opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm font-mono text-purple-600 mb-2 uppercase tracking-widest">Selected Works</h2>
            <h3 className="text-5xl font-black text-black uppercase">Portfolio<span className="text-purple-600">.</span></h3>
          </div>
          <p className="max-w-xs text-black/30 text-sm font-mono text-right">
            {"// FILTER: ALL PROJECTS"}
            <br />
            {"// DISPLAY: PREMIUM GRID_V2"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] glass-card border border-black/5 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                
                <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500">
                  <span className="inline-block px-4 py-1.5 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest mb-3 rounded-full shadow-lg shadow-purple-200">
                    {project.category}
                  </span>
                  <h4 className="text-3xl font-black text-white drop-shadow-xl">{project.title}</h4>
                </div>
              </div>
              
              <div className="absolute -inset-1 bg-purple-600/5 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
