import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, Check, Sparkles, X, User, Briefcase, GraduationCap, Award, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeCTA() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Download official PDF resume asset from public directory
    const link = document.createElement('a');
    link.href = '/Dharaneesh_M_Resume.pdf';
    link.download = 'Dharaneesh_M_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="resume" className="py-24 relative bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 sm:p-14 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl text-center max-w-4xl mx-auto glow-border-hover space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Want to know more about <span className="text-gradient-blue">my journey?</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore my experience, projects, skills, and academic background in detail. Download the complete verified resume or view the instant resume preview.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-5 h-5 text-emerald-300" />
                  <span>Downloaded Resume!</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center space-x-2 px-6 py-4 rounded-2xl bg-slate-950 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <Eye className="w-5 h-5 text-blue-400" />
              <span>Preview Resume Modal</span>
            </button>
          </div>

        </div>
      </div>

      {/* Resume Modal View */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-slate-100 font-bold">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span>Resume Preview — Dharaneesh M</span>
                </div>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
                {/* Header */}
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-2xl font-bold text-slate-100">{personalInfo.name}</h3>
                  <p className="text-blue-400 font-medium">{personalInfo.role}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Phone: {personalInfo.contact.phone} | Email: {personalInfo.contact.email}
                  </p>
                </div>

                {/* Objective */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Career Objective</h4>
                  <p className="text-slate-300 italic">{personalInfo.objective}</p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Education</h4>
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-bold text-slate-200">B.E. Computer Science and Engineering (2023 - 2027)</div>
                      <div className="text-xs text-slate-400">Er. Perumal Manimekalai College of Engineering, Hosur — CGPA: 7.55</div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Internship Experience</h4>
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-bold text-slate-200">Full Stack Development Intern (2026)</div>
                      <div className="text-xs text-slate-400">Cognizant — Chennai</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-bold text-slate-200">Web Development Intern (2025)</div>
                      <div className="text-xs text-slate-400">BSS Computer Academy</div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Certifications</h4>
                  <p className="text-slate-200">Full Stack Development Certification (GUVI)</p>
                </div>
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
