import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: 'Beyond QA', href: '#beyond-qa' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'ML & Vision', href: '#datascience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-[#090A0F]/60 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Status */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#12131A] border border-white/10 flex items-center justify-center text-[#FF6B6B] font-mono font-bold text-sm group-hover:border-[#FF6B6B]/60 transition-colors shadow-sm">
              SD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-[#FF6B6B] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] mr-1 animate-pulse" />
                  QA • ML &amp; Vision
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#12131A] p-1.5 rounded-full border border-white/10 shadow-lg">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#FF6B6B] font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full shadow-xs"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Terminal Easter Egg & Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Easter Egg Trigger */}
            <button
              id="terminal-trigger-btn"
              onClick={onOpenTerminal}
              title="Open Developer Terminal (Interactive CLI)"
              aria-label="Open developer terminal"
              className="p-2 rounded-xl bg-[#12131A] border border-white/10 text-zinc-400 hover:text-[#FF6B6B] hover:border-[#FF6B6B]/40 hover:bg-white/5 transition-all text-xs flex items-center gap-1.5 font-mono cursor-pointer shadow-sm"
            >
              <Terminal className="w-4 h-4 text-[#FF6B6B]" />
              <span className="hidden sm:inline text-[11px] text-zinc-300">CLI</span>
            </button>

            {/* Resume Button */}
            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF6B6B] hover:bg-[#FF8A65] text-white font-semibold text-xs transition-all shadow-md shadow-[#FF6B6B]/20 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#12131A] border border-white/10 text-zinc-200 hover:text-[#FF6B6B] cursor-pointer shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#090A0F]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#FF6B6B]/15 text-[#FF6B6B] font-semibold border border-[#FF6B6B]/30'
                        : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-zinc-500">#{sectionId}</span>
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF6B6B] text-white font-bold text-sm hover:bg-[#FF8A65] transition-colors shadow-md shadow-[#FF6B6B]/20 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume (PDF)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#12131A] border border-white/10 text-zinc-300 font-mono text-xs hover:text-[#FF6B6B] cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-[#FF6B6B]" />
                  <span>Launch Interactive CLI ($ whoami)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
