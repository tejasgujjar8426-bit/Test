"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Plus } from "lucide-react";

const reviews = [
  {
    name: "Tom Kreissler",
    role: "Cubiq Studios",
    content: "heheha",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  },
  {
    name: "Xyron Development",
    role: "ok",
    content: "ko ",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
  },
  {
    name: "F34R Reacts",
    role: "Founder Of Xyron Development",
    content: "Heehhee",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
  },
];

export const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);
  const [allReviews, setAllReviews] = useState(reviews);
  const [newReview, setNewReview] = useState({ name: "", role: "", content: "", stars: 5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewToAdd = {
      ...newReview,
      avatar: `https://ui-avatars.com/api/?name=${newReview.name}&background=random`
    };
    setAllReviews([reviewToAdd, ...allReviews]);
    setNewReview({ name: "", role: "", content: "", stars: 5 });
    setShowForm(false);
  };

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-4 leading-none uppercase">
              Client <span className="highlighter px-2">Testimonials</span>
            </h2>
            <p className="text-black/40 text-lg">See what others are saying about my work.</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold shadow-lg shadow-purple-200"
          >
            <Plus size={20} />
            <span>Leave a Review</span>
          </motion.button>
        </div>

        {showForm && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-black/5">
              <h3 className="text-2xl font-black mb-6 uppercase">New Review</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  placeholder="Your Name" 
                  required
                  className="w-full p-4 bg-black/5 rounded-xl outline-none focus:ring-2 ring-purple-600"
                  value={newReview.name}
                  onChange={e => setNewReview({...newReview, name: e.target.value})}
                />
                <input 
                  placeholder="Your Role / Company" 
                  required
                  className="w-full p-4 bg-black/5 rounded-xl outline-none focus:ring-2 ring-purple-600"
                  value={newReview.role}
                  onChange={e => setNewReview({...newReview, role: e.target.value})}
                />
                <textarea 
                  placeholder="Your Feedback" 
                  required
                  className="w-full p-4 bg-black/5 rounded-xl outline-none focus:ring-2 ring-purple-600 h-32 resize-none"
                  value={newReview.content}
                  onChange={e => setNewReview({...newReview, content: e.target.value})}
                />
                <div className="flex justify-end gap-4 mt-6">
                  <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 font-bold opacity-40">Cancel</button>
                  <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold">Submit</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {allReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-black/5 flex flex-col gap-6 relative group hover:border-purple-600/30 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-black/5 group-hover:text-purple-600/20 transition-colors" size={48} />
              </div>

              <p className="text-black/70 text-lg italic leading-relaxed min-h-[6rem]">
                &quot;{review.content}&quot;
              </p>

              <div className="pt-6 border-t border-black/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black/10 shrink-0">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-black font-bold">{review.name}</h4>
                  <p className="text-black/40 text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

