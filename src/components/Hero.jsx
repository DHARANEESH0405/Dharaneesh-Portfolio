import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Sparkles, Code2, Cpu, ShieldCheck } from 'lucide-react';
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
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>{personalInfo.subRole}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.15]">
                {"Hi, I'm Dharaneesh."} <br className="hidden sm:inline" />
                <span className="text-gradient-blue">{personalInfo.heroHeadingAccent}</span>
              </h1>
            </motion.div>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
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
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white hover:border-slate-500 font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              {/* Additional CTA */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-300 hover:bg-blue-900/40 font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{"Let's Connect"}</span>
              </button>
            </motion.div>

            {/* Social Links & Floating Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/60"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Socials:</span>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5 text-blue-400" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Abstract Developer Visual & Floating Status Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Animated decorative backdrop border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-30 blur-lg animate-pulse-slow" />

              {/* IDE Code Visual Box */}
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800/90 shadow-2xl overflow-hidden">
                
                {/* IDE Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>dharaneesh.py</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono">v2.026</span>
                </div>

                {/* IDE Window Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm space-y-2.5 text-slate-300 leading-relaxed overflow-x-auto">
                  <div className="text-slate-500"># Dharaneesh M — Software Developer Profile</div>
                  
                  <div>
                    <span className="text-violet-400">class</span> <span className="text-amber-300 font-semibold">SoftwareEngineer</span>:
                  </div>

                  <div className="pl-4">
                    <span className="text-violet-400">def</span> <span className="text-blue-400">__init__</span>(self):
                  </div>

                  <div className="pl-8 text-slate-300">
                    self.name = <span className="text-emerald-400">"Dharaneesh M"</span><br />
                    self.degree = <span className="text-emerald-400">"B.E. Computer Science"</span><br />
                    self.college = <span className="text-emerald-400">"PMC Tech, Hosur"</span><br />
                    self.cgpa = <span className="text-cyan-400">7.55</span><br />
                    self.skills = [<br />
                    &nbsp;&nbsp;<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"JavaScript"</span>, <span className="text-emerald-400">"React"</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-400">"MySQL"</span>, <span className="text-emerald-400">"MongoDB"</span>, <span className="text-emerald-400">"ML"</span><br />
                    ]
                  </div>

                  <div className="pl-4 pt-1">
                    <span className="text-violet-400">def</span> <span className="text-blue-400">get_mission</span>(self):
                  </div>

                  <div className="pl-8 text-slate-400 italic">
                    <span className="text-violet-400">return</span> <span className="text-amber-200">"Develop practical solutions & learn continuously"</span>
                  </div>
                </div>

                {/* IDE Footer Tag Bar */}
                <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Ready to Deploy</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>UTF-8</span>
                  </div>
                </div>

              </div>

              {/* Overlay Hero Status Card Floating */}
              <div className="mt-6 w-full flex justify-center lg:justify-end">
                <HeroStatusCard />
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
