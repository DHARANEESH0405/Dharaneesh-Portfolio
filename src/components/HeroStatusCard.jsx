import React from 'react';
import { motion } from 'framer-motion';

export default function HeroStatusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="inline-flex flex-col p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/90 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 shadow-xl shadow-blue-900/20 backdrop-blur-md glow-border-hover"
    >
      <div className="flex items-center space-x-2 pb-2 mb-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Currently</span>
      </div>

      <div className="space-y-1.5 text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
        <div className="flex items-center space-x-2">
          <span>🎓</span>
          <span>B.E. Computer Science & Engineering</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>💻</span>
          <span>Building software & AI projects</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>🚀</span>
          <span>Open to opportunities</span>
        </div>
      </div>
    </motion.div>
  );
}
