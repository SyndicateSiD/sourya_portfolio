import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DataScienceHighlight } from './components/DataScienceHighlight';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ResearchPapers } from './components/ResearchPapers';
import { DataScienceSection } from './components/DataScienceSection';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalEasterEgg } from './components/TerminalEasterEgg';
import { ResumeModal } from './components/ResumeModal';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F4F4F5] relative selection:bg-[#FF6B6B]/25 selection:text-[#FF8A65]">
      {/* Interactive Opening Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
        {/* Dedicated Data Science & Intelligent Systems Capability Strip */}
        <DataScienceHighlight />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ResearchPapers />
        <DataScienceSection />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Developer CLI Easter Egg */}
      <TerminalEasterEgg
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* In-Browser Printable & Downloadable Resume Viewer */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
