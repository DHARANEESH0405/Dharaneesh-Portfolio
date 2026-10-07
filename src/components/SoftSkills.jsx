import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, MessageSquare, HeartHandshake } from 'lucide-react';
import { softSkillsData } from '../data/portfolioData';

export default function SoftSkills() {
  const iconMap = {
    RefreshCw: RefreshCw,
    Zap: Zap,
    MessageSquare: MessageSquare,
  };

  return (
    <section className="py-16 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Personal Attributes</span>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Soft <span className="text-gradient-blue">Skills</span>
          </h3>
        </div>

        {/* Soft Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {softSkillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Zap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-lg text-center space-y-3 group"
              >
                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-400 w-fit mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-800">
                  {skill.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
