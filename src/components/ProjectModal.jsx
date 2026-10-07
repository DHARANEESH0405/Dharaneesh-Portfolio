import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Shield, Activity, CheckCircle, Cpu, Layers, AlertTriangle, Lock, Server } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-blue-950/50 overflow-hidden flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 bg-slate-950 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                {project.number} • {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* Visual Architecture Representation */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Architectural Execution & Workflow Flow</span>
              </h4>

              {project.visualType === 'security' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 w-fit mx-auto">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-200">1. Card & PIN Auth</h5>
                    <p className="text-[11px] text-slate-400">RFID verification & AES encrypted PIN entry</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 w-fit mx-auto">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-200">2. OpenCV Face Match</h5>
                    <p className="text-[11px] text-slate-400">Computer vision facial biometric scan</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 w-fit mx-auto">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-200">3. Ledger Processing</h5>
                    <p className="text-[11px] text-slate-400">Encrypted transaction ledger execution</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 w-fit mx-auto">
                      <Server className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-200">1. Log Ingestion</h5>
                    <p className="text-[11px] text-slate-400">Parses raw system & application log streams</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400 w-fit mx-auto">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-200">2. AI Anomaly Engine</h5>
                    <p className="text-[11px] text-slate-400">Unsupervised ML pattern classifier</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 w-fit mx-auto">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-200">3. Dashboard Alerting</h5>
                    <p className="text-[11px] text-slate-400">Real-time web metric graphs & anomaly triggers</p>
                  </div>
                </div>
              )}
            </div>

            {/* Overview & Problem Statement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-200">Project Overview</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-200">Problem Addressed</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200">Key Features & Functionality</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-blue-600/15 text-blue-300 border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Action Buttons Footer */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => alert(`Placeholder: ${project.githubPlaceholder}. Replace with exact repository URL when available.`)}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-colors border border-slate-700"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>{project.githubPlaceholder}</span>
              </button>

              <button
                onClick={() => alert(`Placeholder: ${project.liveDemoPlaceholder}. Replace with live demo URL when deployed.`)}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{project.liveDemoPlaceholder}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
