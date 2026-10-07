import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Brain, Layers, Box, Cpu, Sparkles, Terminal } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const iconComponents = {
    Code2: Code2,
    Database: Database,
    Wrench: Wrench,
    Brain: Brain,
    Layers: Layers,
    Box: Box,
    Cpu: Cpu,
  };

  const filteredData = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950 dark:bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Skills & <span className="text-gradient-blue">Tech Stack</span>
          </motion.h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Categorized technical competencies and developer tools, grounded entirely in practical projects and coursework.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map((categoryGroup, index) => {
            const CategoryIcon = iconComponents[categoryGroup.icon] || Code2;
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-3xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 shadow-xl glow-border-hover relative overflow-hidden group"
              >
                {/* Header */}
                <div className="flex items-center space-x-3.5 mb-3">
                  <div className="p-3 rounded-2xl bg-blue-600/15 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {categoryGroup.description}
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-800/80 my-4" />

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {categoryGroup.skills.map((skill, sIdx) => {
                    const SkillLucideIcon = iconComponents[skill.icon];
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="p-3.5 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col items-center justify-center text-center space-y-2 group/skill"
                      >
                        {skill.icon.startsWith('http') ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-7 h-7 object-contain group-hover/skill:scale-110 transition-transform duration-200"
                            loading="lazy"
                          />
                        ) : SkillLucideIcon ? (
                          <SkillLucideIcon className="w-6 h-6 text-blue-400 group-hover/skill:scale-110 transition-transform duration-200" />
                        ) : (
                          <Terminal className="w-6 h-6 text-indigo-400 group-hover/skill:scale-110 transition-transform duration-200" />
                        )}

                        <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                          {skill.name}
                        </span>

                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950/60 text-blue-300 font-mono border border-blue-800/40">
                          {skill.level}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Banner Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900 border border-blue-800/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100">Engineering Focus</h4>
              <p className="text-xs text-slate-400">Combining strong computer science fundamentals with modern full-stack web and machine learning tools.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {['Python', 'JavaScript', 'React.js', 'MySQL', 'MongoDB', 'OpenCV', 'Git'].map((tech, tIdx) => (
              <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/80 text-blue-300 border border-slate-700/60">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
