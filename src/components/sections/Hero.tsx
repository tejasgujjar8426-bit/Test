"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProfileCard } from "./ProfileCard";
import { MusicCard } from "./MusicCard";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="absolute inset-0 bg-purple-glow opacity-30 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
          <ProfileCard />
          <MusicCard />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-4xl md:text-6xl font-black text-black">My</h2>
            <span className="text-4xl md:text-6xl font-black px-4 py-1 bg-purple-600 text-white rounded-2xl transform -rotate-2 shadow-lg shadow-purple-200">
              Journey
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};


