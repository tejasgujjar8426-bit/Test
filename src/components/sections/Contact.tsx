"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-purple-600 mb-2 uppercase tracking-widest">Connect</h2>
          <h3 className="text-5xl font-black text-black uppercase">Let&apos;s <span className="highlighter px-2">Talk</span></h3>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Mail size={120} className="text-purple-600" />
          </div>

          <form className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-black/40 ml-2">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-black placeholder:text-black/20 focus:outline-none focus:border-purple-600/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-black/40 ml-2">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-black placeholder:text-black/20 focus:outline-none focus:border-purple-600/30 transition-colors"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-black/40 ml-2">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-black placeholder:text-black/20 focus:outline-none focus:border-purple-600/30 transition-colors resize-none"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 mt-4 bg-purple-600 text-white font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-purple-200 hover:bg-purple-700 transition-all"
            >
              <span>Send Message</span>
              <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};


