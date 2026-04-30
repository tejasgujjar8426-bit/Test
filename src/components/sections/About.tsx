"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-4 rounded-[2.5rem] bg-white border border-black/5 shadow-2xl overflow-hidden">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-purple-600/5 to-blue-600/5 flex items-center justify-center relative overflow-hidden">
                <div className="text-black/5 font-black text-[20rem] absolute -bottom-20 -right-20 select-none">
                  ?
                </div>
                <div className="relative z-10 p-8">
                  <h2 className="text-4xl font-black mb-6 text-black uppercase leading-none">
                    WHO<br />I AM<span className="text-purple-600">?</span>
                  </h2>
                  <p className="text-black/30 font-mono text-sm leading-relaxed mb-4">
                    // ORIGIN: EARTH<br />
                    // PASSION: PIXELS & LOGIC<br />
                    // STATUS: CONSTANTLY EVOLVING
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm font-mono text-purple-600 mb-4 tracking-tighter uppercase">Biography</h3>
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-8 text-black">
              A minimalist designer with a maximalist approach to <span className="text-purple-600">code quality</span> and <span className="italic text-purple-600">user experience</span>.
            </p>
            <div className="space-y-6 text-black/60 text-lg">
              <p>
                I specialize in bridging the gap between design and engineering. My work focuses on 
                creating immersive web experiences that don&apos;t just look good, but feel alive through 
                intentional motion and physics.
              </p>
              <p>
                With over 5 years of experience in frontend development, I&apos;ve worked with startups 
                and enterprises to ship products that balance aesthetics with robust functionality.
              </p>
            </div>
            
            <div className="mt-12 flex gap-4">
              <div className="p-6 rounded-3xl glass-card border border-black/5 min-w-[120px] shadow-sm">
                <span className="block text-3xl font-black text-purple-600">90+</span>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 text-black">Projects</span>
              </div>
              <div className="p-6 rounded-3xl glass-card border border-black/5 min-w-[120px] shadow-sm">
                <span className="block text-3xl font-black text-purple-600">100+</span>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 text-black">Clients</span>
              </div>
              <div className="p-6 rounded-3xl glass-card border border-black/5 min-w-[120px] shadow-sm">
                <span className="block text-3xl font-black text-purple-600">2yr</span>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 text-black">Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};


