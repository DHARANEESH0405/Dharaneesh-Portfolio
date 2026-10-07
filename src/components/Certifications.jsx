import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { certificationData } from '../data/portfolioData';

export default function Certifications() {
  const handleCertClick = () => {
    alert(`Placeholder: ${certificationData.placeholderLink}. Replace with actual GUVI verification URL when available.`);
  };

  return (
    <section id="certifications" className="py-20 relative bg-slate-950 dark:bg-slate-950 light:bg-slate-100">
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
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Professional <span className="text-gradient-blue">Certifications</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dedicated Certification Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl glow-border-hover relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                    Verified Credential • {certificationData.issuer}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                    {certificationData.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed max-w-xl">
                    {certificationData.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {certificationData.topics.map((topic, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
                <button
                  onClick={handleCertClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-blue-600/15 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 font-semibold text-xs sm:text-sm transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{certificationData.placeholderLink}</span>
                </button>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
