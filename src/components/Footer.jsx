import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 relative text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-blue-500 shadow-sm">
                <img src="/dharaneesh-photo.jpg" alt="Dharaneesh M" className="w-full h-full object-cover" />
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-slate-100">
                {personalInfo.name}<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md italic">
              "{personalInfo.tagline}"
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-5 h-5 text-blue-500" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© 2026 Dharaneesh M. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
