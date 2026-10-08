import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white dark:bg-slate-950 transition-colors">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Work <span className="text-gradient-blue">Experience & Internships</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Professional industry internships and hands-on developer roles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((item, index) => {
            const highlightsList = item.highlights || item.responsibilities || [];
            const techList = item.technologies || item.skills || [];

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot Badge */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-500 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform duration-200" />

                {/* Card Container */}
                <div className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                        {item.type || item.badge || "Internship"}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {item.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 space-y-1 font-mono">
                      <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{item.period}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  {highlightsList.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Key Achievements & Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {highlightsList.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Used */}
                  {techList.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {techList.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-950 text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
