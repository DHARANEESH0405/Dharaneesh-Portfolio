import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950 dark:bg-slate-950 light:bg-slate-100">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Learning</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Work <span className="text-gradient-blue">Experience</span>
          </motion.h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Professional internships, hands-on software development training, and technical learning history.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central guide line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/30">
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Experience Content Box */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-8' : 'sm:pl-8'
                  }`}>
                    <div className="p-7 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl glow-border-hover space-y-4">
                      
                      {/* Top Header */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
                            {exp.period}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                            {exp.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 pt-1">
                          {exp.role}
                        </h3>

                        <div className="flex items-center space-x-3 text-xs text-slate-400 font-medium">
                          <span className="flex items-center space-x-1 text-blue-300">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{exp.company}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      <div className="h-px w-full bg-slate-800/80" />

                      {/* Responsibilities List */}
                      <div className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Acquired Tags */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {exp.skills.map((s, sIdx) => (
                          <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-800 text-[11px] font-mono">
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
