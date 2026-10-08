import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ShieldCheck, Activity, ArrowRight, Eye, CheckCircle2, Lock, Cpu, Server, Terminal, Zap } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/80 transition-colors">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Featured <span className="text-gradient-blue">Projects</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Detailed engineering projects built with Python, OpenCV, Machine Learning, and Full Stack technologies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Cards Container */}
        <div className="space-y-12">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 shadow-2xl overflow-hidden glow-border-hover"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center`}>
                  
                  {/* Project Visual Representation Area */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 bg-slate-900 text-slate-100 border-b lg:border-b-0 ${isEven ? 'lg:border-r lg:order-1' : 'lg:border-l lg:order-2'} border-slate-800`}>
                    
                    {project.visualType === 'security' ? (
                      /* PROJECT 01 VISUAL: ATM Biometric Security Illustration */
                      <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 space-y-4 shadow-inner">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Biometric Auth Engine Active</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                            SECURE_AES_256
                          </span>
                        </div>

                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/30 flex items-center justify-between">
                            <div className="flex items-center space-x-2.5">
                              <Lock className="w-4 h-4 text-blue-400" />
                              <span className="text-slate-200">Layer 1: RFID / Card Verification</span>
                            </div>
                            <span className="text-[10px] text-emerald-400">PASSED</span>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900 border border-indigo-500/30 flex items-center justify-between">
                            <div className="flex items-center space-x-2.5">
                              <Cpu className="w-4 h-4 text-indigo-400" />
                              <span className="text-slate-200">Layer 2: OpenCV Face Match</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping inline-block" />
                              <span className="text-[10px] text-indigo-300">CONFIDENCE 98.4%</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900 border border-violet-500/30 flex items-center justify-between">
                            <div className="flex items-center space-x-2.5">
                              <Terminal className="w-4 h-4 text-violet-400" />
                              <span className="text-slate-200">Layer 3: Encrypted PIN Auth</span>
                            </div>
                            <span className="text-[10px] text-violet-300 font-mono">••••••••</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                          <span>LOG: Transaction #8841-SECURE</span>
                          <span className="text-emerald-400">STATUS: APPROVED</span>
                        </div>
                      </div>
                    ) : (
                      /* PROJECT 02 VISUAL: Log Anomaly Detection Dashboard Illustration */
                      <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 space-y-4 shadow-inner">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
                            <Activity className="w-4 h-4" />
                            <span>Log Stream AI Monitoring</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">
                            AI ANOMALY PARSER
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>System Load Diagnostics</span>
                            <span className="text-cyan-400">Normal Range (99.2%)</span>
                          </div>
                          <div className="h-12 w-full flex items-end justify-between gap-1 pt-2">
                            {[30, 45, 25, 60, 35, 90, 40, 30, 50, 85, 35, 25].map((val, hIdx) => (
                              <div
                                key={hIdx}
                                className={`w-full rounded-t ${
                                  val > 80 ? 'bg-rose-500 animate-pulse' : 'bg-blue-500/60'
                                }`}
                                style={{ height: `${val}%` }}
                                title={`Metric Spike: ${val}%`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] space-y-1">
                          <div className="text-slate-400">[INFO] 22:10:04 GET /api/v1/health 200 OK</div>
                          <div className="text-rose-400 font-semibold">[ANOMALY DETECTED] High frequency spike at IP 192.168.1.42</div>
                          <div className="text-emerald-400">[ACTION] Automated alert emitted to Dashboard</div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Project Details Content Area */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                          {project.number}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-mono">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Key Features Quick Pills */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        Key Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-700/80 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons CTA */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                      <button
                        onClick={() => openProjectDetails(project)}
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Architecture & Details</span>
                      </button>

                      <button
                        onClick={() => alert(`Placeholder: ${project.githubPlaceholder}. Replace with exact repository URL when available.`)}
                        className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 hover:border-blue-500 font-semibold text-xs sm:text-sm transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>{project.githubPlaceholder}</span>
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
