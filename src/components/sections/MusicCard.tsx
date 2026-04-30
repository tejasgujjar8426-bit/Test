"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Music2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const DISCORD_ID = "1041617483641323520"; // Replace with your Discord ID

export const MusicCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lanyardData, setLanyardData] = useState<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchLanyard = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await response.json();
        if (data.success) {
          setLanyardData(data.data);
          setIsPlaying(data.data.listening_to_spotify);
        }
      } catch (error) {
        console.error("Lanyard error:", error);
      }
    };

    fetchLanyard();
    const interval = setInterval(fetchLanyard, 10000); // Update every 10s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !lanyardData?.spotify) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, lanyardData]);

  const spotify = lanyardData?.spotify;
  const trackName = spotify ? spotify.song : "Coding Lo-Fi";
  const artistName = spotify ? spotify.artist : "Real Audio Stream";
  const albumArt = spotify ? spotify.album_art_url : null;

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card p-6 rounded-[2rem] w-full max-w-sm flex flex-col gap-6"
    >
      <audio 
        ref={audioRef} 
        src={SAMPLE_SONG} 
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="relative aspect-square rounded-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
        {albumArt ? (
          <img 
            src={albumArt} 
            alt="Album Art" 
            className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? "scale-110" : "scale-100"}`}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center transition-all duration-700 ${isPlaying ? "scale-110 rotate-3" : ""}`}>
              <Music2 className={`w-24 h-24 text-black/5 ${isPlaying ? "animate-bounce" : ""}`} />
          </div>
        )}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-3 py-1 rounded-full backdrop-blur-md border border-black/5 text-[10px] font-mono tracking-widest uppercase transition-colors ${isPlaying ? "bg-purple-600/80 text-white" : "bg-white/40 text-black/80"}`}>
            {isPlaying ? "Live on Spotify" : "Offline"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-black mb-1 truncate">{trackName}</h3>
          <p className="text-black/40 text-sm truncate">{artistName}</p>
        </div>

        <div className="space-y-4">
          <div className="relative w-full h-1.5 bg-black/5 rounded-full overflow-hidden cursor-pointer">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-purple-600" 
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="text-black/20 hover:text-black transition-colors">
                <SkipBack size={20} fill="currentColor" />
              </button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-xl shadow-purple-200"
              >
                {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
              </motion.button>
              <button className="text-black/20 hover:text-black transition-colors">
                <SkipForward size={20} fill="currentColor" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-black/20 group">
              <Volume2 size={18} className="group-hover:text-purple-600 transition-colors" />
              <div className="w-16 h-1 bg-black/5 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-purple-600/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visualizer bars */}
      <div className="flex items-end justify-center gap-1.5 h-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              height: isPlaying ? [10, 30, 15, 25, 10] : 8 
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="w-1.5 bg-purple-600/20 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};
