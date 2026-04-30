"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Code2, Terminal, Cpu, Globe, Database, Palette, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const techIcons = [
  { icon: Code2, color: "text-blue-400" },
  { icon: Terminal, color: "text-green-400" },
  { icon: Cpu, color: "text-purple-400" },
  { icon: Globe, color: "text-pink-400" },
  { icon: Database, color: "text-orange-400" },
  { icon: Palette, color: "text-cyan-400" },
  { icon: Shield, color: "text-indigo-400" },
];

const DISCORD_ID = "1121081604739563520"; // Update with your actual ID

export const ProfileCard = () => {
  const [presence, setPresence] = useState<any>(null);

  useEffect(() => {
    const fetchPresence = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await res.json();
        if (data.success) setPresence(data.data);
      } catch (err) {
        console.error("Lanyard error:", err);
      }
    };

    fetchPresence();
    const interval = setInterval(fetchPresence, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  const avatarUrl = presence?.discord_user 
    ? `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${presence.discord_user.avatar}.png?size=512`
    : null;

  const statusColor = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  }[presence?.discord_status as string] || "bg-gray-500";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 max-w-2xl w-full relative overflow-hidden"
    >
      <div className="relative w-48 h-48 mx-auto md:mx-0 shrink-0">
        <div className={`absolute -inset-1 ${statusColor} opacity-20 blur-2xl rounded-full animate-pulse`} />
        <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-black/5 group">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt="Lynx" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 flex items-center justify-center">
              <UserIcon className="w-20 h-20 text-black/10" />
            </div>
          )}
          
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-white/60 backdrop-blur-md rounded-full border border-black/5">
            <div className={`w-2 h-2 rounded-full ${statusColor}`} />
            <span className="text-[10px] font-bold text-black/80 uppercase tracking-wider">
              {presence?.discord_status || "Offline"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <div>
          <h1 className="text-4xl font-bold text-black mb-1">
            <span className="highlighter">Lynx</span>
          </h1>
          <p className="text-black/40 font-mono text-sm">@lynx</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techIcons.map((item, index) => (
            <div
              key={index}
              className={`p-1.5 rounded-lg bg-black/5 border border-black/5 ${item.color}`}
            >
              <item.icon size={16} />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-purple-600 text-sm">
            <span className="font-mono">{`{ }`}</span>
            <span>Fullstack Developer</span>
          </div>
          <div className="flex items-center gap-2 text-purple-600 text-sm">
            <span className="font-mono">{`>_`}</span>
            <span>Discord Bot Developer</span>
          </div>
        </div>

        <p className="text-black/60 text-sm leading-relaxed">
          Hi, I&apos;m Lynx. A developer focusing on Discord Bot and Web Development. 
          I enjoy exploring new technologies!
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-purple-600 text-white font-semibold transition-all hover:bg-purple-700 shadow-lg shadow-purple-200"
        >
          <Download size={18} />
          <span>Download CV</span>
        </motion.button>
      </div>
    </motion.div>
  );
};


const UserIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
