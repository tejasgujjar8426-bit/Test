"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Edit3, Save, X, Globe, Github, Mail } from "lucide-react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState<any[]>([]);
  const [socials, setSocials] = useState({
    github: "https://github.com/",
    discord: "https://discord.com/",
    email: "hello@lynx.dev"
  });
  const [editingProject, setEditingProject] = useState<any>(null);

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio_projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Default projects from projects.json if empty
      fetch("/src/data/projects.json")
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(() => setProjects([]));
    }

    const savedSocials = localStorage.getItem("portfolio_socials");
    if (savedSocials) setSocials(JSON.parse(savedSocials));
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio_projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("portfolio_socials", JSON.stringify(socials));
  }, [socials]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
    }
  };

  const addProject = () => {
    const newProj = {
      id: Date.now().toString(),
      title: "New Project",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=800",
      color: "#6d28d9",
      description: "Project description goes here."
    };
    setProjects([newProj, ...projects]);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 max-w-md w-full shadow-2xl rounded-3xl border border-black/5"
        >
          <h1 className="text-3xl font-black mb-8">ADMIN ACCESS<span className="text-purple-600">.</span></h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest opacity-50">Secret Code</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/5 border-none rounded-xl p-4 focus:ring-2 ring-purple-600 outline-none transition-all font-bold text-lg"
              />
            </div>
            <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-black tracking-widest uppercase hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
              UNLOCK
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase">Dashboard<span className="text-purple-600">.</span></h1>
            <p className="text-black/40 font-mono text-sm">MANAGE YOUR PORTFOLIO</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="text-xs font-mono uppercase underline hover:text-purple-600">Logout</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Project List */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black uppercase">Projects</h2>
                <button 
                  onClick={addProject}
                  className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="group flex items-center justify-between p-4 bg-black/5 rounded-2xl hover:bg-black/[0.08] transition-colors">
                    <div className="flex items-center gap-4">
                      <img src={proj.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                      <div>
                        <p className="font-bold">{proj.title}</p>
                        <p className="text-xs opacity-40 font-mono uppercase">{proj.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setEditingProject(proj)}
                        className="p-2 text-black/40 hover:text-purple-600 transition-colors"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button 
                        onClick={() => deleteProject(proj.id)}
                        className="p-2 text-black/40 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-[#1a1a1a] text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-xl font-black mb-6 uppercase">Social Links</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase opacity-40">Discord ID</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm outline-none focus:border-purple-500"
                    value={socials.discord}
                    onChange={e => setSocials({...socials, discord: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase opacity-40">GitHub Link</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm outline-none focus:border-purple-500"
                    value={socials.github}
                    onChange={e => setSocials({...socials, github: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase opacity-40">Email Address</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm outline-none focus:border-purple-500"
                    value={socials.email}
                    onChange={e => setSocials({...socials, email: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-black/5">
            <h3 className="text-2xl font-black mb-6 uppercase">Edit Project</h3>
            <div className="space-y-4">
              <input 
                placeholder="Title"
                className="w-full p-3 bg-black/5 rounded-xl outline-none"
                value={editingProject.title}
                onChange={e => setEditingProject({...editingProject, title: e.target.value})}
              />
              <input 
                placeholder="Category"
                className="w-full p-3 bg-black/5 rounded-xl outline-none"
                value={editingProject.category}
                onChange={e => setEditingProject({...editingProject, category: e.target.value})}
              />
              <input 
                placeholder="Image URL"
                className="w-full p-3 bg-black/5 rounded-xl outline-none"
                value={editingProject.image}
                onChange={e => setEditingProject({...editingProject, image: e.target.value})}
              />
              <textarea 
                placeholder="Description"
                className="w-full p-3 bg-black/5 rounded-xl outline-none h-24 resize-none"
                value={editingProject.description}
                onChange={e => setEditingProject({...editingProject, description: e.target.value})}
              />
              <div className="flex justify-end gap-4 mt-6">
                <button onClick={() => setEditingProject(null)} className="px-6 py-3 font-bold opacity-40">Cancel</button>
                <button 
                  onClick={() => {
                    setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
                    setEditingProject(null);
                  }}
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
