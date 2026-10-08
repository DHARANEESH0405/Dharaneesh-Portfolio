import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Award, Compass, User, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap: GraduationCap,
    Building2: Building2,
    Award: Award,
    Compass: Compass,
  };

  return (
    <section id="about" className="py-24 relative bg-slate-100/70 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>Introduction</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            About <span className="text-gradient-blue">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Dharaneesh's Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-40 blur-xl group-hover:opacity-70 transition-opacity" />
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-2xl space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800">
                  <img
                    src="/dharaneesh-photo.jpg"
                    alt="Dharaneesh M"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md text-white border border-white/10">
                    <p className="font-bold text-sm">{personalInfo.name}</p>
                    <p className="text-[11px] text-blue-400 font-mono">Computer Science Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Introduction & Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
              
              <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 font-semibold text-lg">
                <Target className="w-5 h-5" />
                <span>Career Objective & Technical Passion</span>
              </div>

              <blockquote className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 italic text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                "{personalInfo.objective}"
              </blockquote>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-slate-900 dark:text-slate-100">Computer Science and Engineering student</strong> at Er. Perumal Manimekalai College of Engineering, Hosur (2023 - 2027, CGPA: 7.55). My academic and practical software development focus centers on building robust, scalable applications.
                </p>
                <p>
                  My core technical domain includes <strong className="text-blue-600 dark:text-blue-400">Full Stack Engineering, Python Development, Machine Learning</strong>, and <strong className="text-blue-600 dark:text-blue-400">UI/UX Design</strong>.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Full-Stack Web Engineering',
                  'Practical Machine Learning',
                  'Algorithmic Problem Solving',
                  'UI/UX Design Principles'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Quick Facts Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalInfo.quickFacts.slice(0, 3).map((fact, index) => {
                const IconComponent = iconMap[fact.icon] || GraduationCap;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md flex items-center space-x-3"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        {fact.label}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
