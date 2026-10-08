import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  User, 
  Code, 
  FolderGit2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  FileText, 
  Sun, 
  X 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigationItems = [
    { name: 'Home', icon: Home, action: () => scrollToSection('hero'), category: 'Navigation' },
    { name: 'About Me', icon: User, action: () => scrollToSection('about'), category: 'Navigation' },
    { name: 'Skills', icon: Code, action: () => scrollToSection('skills'), category: 'Navigation' },
    { name: 'Featured Projects', icon: FolderGit2, action: () => scrollToSection('projects'), category: 'Navigation' },
    { name: 'Work Experience', icon: Briefcase, action: () => scrollToSection('experience'), category: 'Navigation' },
    { name: 'Education', icon: GraduationCap, action: () => scrollToSection('education'), category: 'Navigation' },
    { name: 'Certifications', icon: Award, action: () => scrollToSection('certifications'), category: 'Navigation' },
    { name: 'Contact Me', icon: Mail, action: () => scrollToSection('contact'), category: 'Navigation' },
    
    { name: 'GitHub Profile', icon: GithubIcon, action: () => window.open(personalInfo.contact.github, '_blank'), category: 'Links' },
    { name: 'LinkedIn Profile', icon: LinkedinIcon, action: () => window.open(personalInfo.contact.linkedin, '_blank'), category: 'Links' },
    { name: 'Send Direct Email', icon: Mail, action: () => window.location.href = `mailto:${personalInfo.contact.email}`, category: 'Links' },
    
    { name: 'Download Resume (PDF)', icon: FileText, action: () => triggerResumeDownload(), category: 'Actions' },
    { name: 'Toggle Dark / Light Theme', icon: Sun, action: () => toggleTheme(), category: 'Actions' },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    setQuery('');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsOpen(false);
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const triggerResumeDownload = () => {
    setIsOpen(false);
    const link = document.createElement('a');
    link.href = '/Dharaneesh_M_Resume.pdf';
    link.download = 'Dharaneesh_M_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredItems = navigationItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section... (Press Esc to exit)"
                className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/50">
              {filteredItems.length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-sm">
                  No matching command found for "{query}"
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-blue-500/10 text-slate-800 dark:text-slate-300 text-sm transition-colors duration-150 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 font-mono">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Hint */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[10px]">Ctrl + K</kbd>
              </div>
              <div className="flex items-center space-x-2">
                <span>Select</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[10px]">Click / Enter</kbd>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
