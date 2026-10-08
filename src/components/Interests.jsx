import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Compass, ArrowUpRight } from 'lucide-react';
import { areasOfInterest } from '../data/portfolioData';

export default function Interests() {
  const iconMap = {
    Code: Code,
    Palette: Palette,
  };

  return (
    <section className="py-16 relative bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Domains</span>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Areas of <span className="text-gradient-blue">Interest</span>
          </h3>
        </div>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {areasOfInterest.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 glow-border-hover group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white dark:bg-slate-950 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-800 text-xs font-mono shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
