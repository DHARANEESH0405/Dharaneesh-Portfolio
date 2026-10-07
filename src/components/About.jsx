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
    <section id="about" className="py-24 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>Introduction</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            About <span className="text-gradient-blue">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl space-y-5">
              
              <div className="flex items-center space-x-3 text-blue-400 font-semibold text-lg">
                <Target className="w-5 h-5 text-blue-400" />
                <span>Career Objective & Technical Passion</span>
              </div>

              <blockquote className="p-4 rounded-2xl bg-blue-950/30 border-l-4 border-blue-500 italic text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                "{personalInfo.objective}"
              </blockquote>

              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900">Computer Science and Engineering student</strong> at Er. Perumal Manimekalai College of Engineering, Hosur. My academic and project focus centers on building practical software solutions that solve real-world problems.
                </p>
                <p>
                  My core interests span <strong className="text-blue-400">Software Development, Full-Stack Engineering, Machine Learning</strong>, and <strong className="text-blue-400">UI/UX Designing</strong>. I am dedicated to continuously sharpening my programming, algorithmic problem-solving, and clean software architecture skills.
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
                  <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right Column: Quick Facts Grid Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Quick Facts</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {personalInfo.quickFacts.map((fact, index) => {
                const IconComponent = iconMap[fact.icon] || GraduationCap;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-lg flex items-start space-x-4 group"
                  >
                    <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                        {fact.label}
                      </span>
                      <span className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-800 leading-snug block">
                        {fact.value}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
