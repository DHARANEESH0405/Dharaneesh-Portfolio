import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Command } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200 shadow-lg shadow-black/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo DM. */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-extrabold text-white text-lg tracking-wider shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            {personalInfo.initials}
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
            {personalInfo.name.split(' ')[0]}
            <span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-800/60 light:border-slate-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-blue-400 dark:text-blue-400 light:text-blue-600 bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-100 font-semibold'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-200/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Quick Ctrl+K hint button */}
          <button
            onClick={() => {
              const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
              window.dispatchEvent(event);
            }}
            className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px]">Ctrl+K</span>
          </button>

          <ThemeToggle />

          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Menu & Theme Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 px-4 py-5 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
