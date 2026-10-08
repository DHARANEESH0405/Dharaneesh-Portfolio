import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Sparkles, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroStatusCard from './HeroStatusCard';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadPDFResume = () => {
    const link = document.createElement('a');
    link.href = '/Dharaneesh_M_Resume.pdf';
    link.download = 'Dharaneesh_M_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 dark:bg-blue-600/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/15 dark:bg-violet-600/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin" style={{ animationDuration: '8s' }} />
              <span>{personalInfo.subRole}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15]">
                {"Hi, I'm Dharaneesh."} <br className="hidden sm:inline" />
                <span className="text-gradient-blue">{personalInfo.heroHeadingAccent}</span>
              </h1>
            </motion.div>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* CTAs Button Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={downloadPDFResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-blue-500 font-semibold text-sm sm:text-base shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>

              {/* Additional CTA */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>{"Let's Connect"}</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/60"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Socials:</span>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all duration-200 shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5 text-blue-500" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Embedded Professional Photo & IDE Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-30 blur-lg animate-pulse-slow" />

              {/* Profile Card Overlay with Photo */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 shadow-2xl overflow-hidden p-6 space-y-5">
                
                {/* Photo & Identity Header */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-500 shadow-lg shrink-0">
                    <img
                      src="/dharaneesh-photo.jpg"
                      alt="Dharaneesh M"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Available for Hiring" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{personalInfo.name}</h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{personalInfo.role}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">B.E. Computer Science • CGPA 7.55</p>
                    <div className="inline-flex items-center space-x-1 mt-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Developer</span>
                    </div>
                  </div>
                </div>

                {/* IDE Code Snippet Block */}
                <div className="rounded-xl bg-slate-900 text-slate-200 border border-slate-800 p-4 font-mono text-xs space-y-2 overflow-x-auto">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px] text-slate-400">
                    <div className="flex items-center space-x-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      <span>dharaneesh.py</span>
                    </div>
                    <span className="text-emerald-400">STATUS: ACTIVE</span>
                  </div>
                  <div className="pt-1 leading-relaxed">
                    <span className="text-violet-400">developer</span> = &#123;<br />
                    &nbsp;&nbsp;<span className="text-amber-300">"name"</span>: <span className="text-emerald-400">"Dharaneesh M"</span>,<br />
                    &nbsp;&nbsp;<span className="text-amber-300">"degree"</span>: <span className="text-emerald-400">"B.E. CSE (2027)"</span>,<br />
                    &nbsp;&nbsp;<span className="text-amber-300">"skills"</span>: [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"ML"</span>]<br />
                    &#125;
                  </div>
                </div>

              </div>

              {/* Floating Status Card */}
              <div className="mt-4 w-full flex justify-center">
                <HeroStatusCard />
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
