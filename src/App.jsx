import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import SoftSkills from './components/SoftSkills';
import Interests from './components/Interests';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-300 font-sans relative">
      {/* Developer Utilities & Layout Features */}
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      
      {/* Top Navbar */}
      <Navbar />

      {/* Page Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <SoftSkills />
        <Interests />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer & Floating Actions */}
      <Footer />
      <BackToTop />
    </div>
  );
}
