"use client";

import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    date: "2024 - Present",
    title: "Senior Fullstack Developer",
    company: "Freelance / Projects",
    description: "Building high-end web applications and Discord bots for global clients.",
    icon: Rocket,
    color: "bg-purple-500",
  },
  {
    date: "2022 - 2023",
    title: "UI/UX Designer & Dev",
    company: "Creative Agency",
    description: "Focused on bridging the gap between design and scalable engineering.",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    date: "2020 - 2022",
    title: "Computer Science Degree",
    company: "University of Tech",
    description: "Mastered the fundamentals of algorithms, data structures, and web technologies.",
    icon: GraduationCap,
    color: "bg-pink-500",
  },
];

export const Timeline = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="relative w-full flex flex-col items-center">
          {/* Creative Animated Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"
            />
          </div>

          <div className="space-y-64 py-20 w-full">
            {events.map((event, index) => {
              const year = event.date.split(" ")[0];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Center Dot */}
                  <div className="relative z-20 mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border-[6px] border-[#2a2a2a] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                    </div>
                  </div>

                  {/* Year Block (Image Style) */}
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-purple-600 rounded-lg skew-x-[-12deg] -rotate-2 transform group-hover:rotate-0 transition-transform duration-300" />
                    <div className="relative px-8 py-4 bg-purple-500 rounded-lg skew-x-[-12deg] shadow-2xl border-b-4 border-purple-800">
                      <h4 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter select-none">
                        {year}
                      </h4>
                    </div>
                  </motion.div>

                  {/* Content (Simplified for this style) */}
                  <div className="mt-12 text-center max-w-sm">
                    <h5 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{event.title}</h5>
                    <p className="text-white/40 text-sm font-mono uppercase tracking-widest mb-4">{event.company}</p>
                    <p className="text-white/60 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


